import assert from 'node:assert/strict';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computeRelationalConditions,RELATIONAL_CONDITION_MODEL,RELATION_RULES} from '../src/conditions/relational-condition-engine.mjs';
import {computeConditionSystem} from '../src/conditions/condition-system.mjs';

const SYNTHETIC=`Sun in Leo 2°00′, in 5th House
Moon in Taurus 20°00′, in 2nd House
Mercury in Libra 10°00′, in 7th House
Venus in Gemini 10°00′, in 3rd House
Mars in Aries 5°00′, in 1st House
Jupiter in Cancer 5°00′, in 4th House
Saturn in Aquarius 18°00′, in 11th House
ASC in Aries 12°00′
MC in Capricorn 8°00′`;
const analysis=analyzeChartWithIntegrity(parseChartInput(SYNTHETIC));
const r=computeRelationalConditions(analysis);
assert.equal(r.model_id,RELATIONAL_CONDITION_MODEL);
assert.equal(r.completeness.reception,'implemented');
assert.equal(r.completeness.overcoming,'implemented');

const venusReceivesMercury=r.relations.find(x=>x.type==='reception'&&x.from==='Venus'&&x.to==='Mercury');
const mercuryReceivesVenus=r.relations.find(x=>x.type==='reception'&&x.from==='Mercury'&&x.to==='Venus');
assert.ok(venusReceivesMercury,'Venus receives Mercury in Libra');
assert.ok(mercuryReceivesVenus,'Mercury receives Venus in Gemini');
assert.equal(venusReceivesMercury.result.configuration,'trine');
assert.equal(venusReceivesMercury.rule_id,RELATION_RULES.reception);

const exchange=r.relations.find(x=>x.type==='exchange'&&new Set([x.a,x.b]).has('Mercury')&&new Set([x.a,x.b]).has('Venus'));
assert.ok(exchange,'Mercury and Venus exchange domiciles');
const mutual=r.relations.find(x=>x.type==='mutual_reception'&&new Set([x.a,x.b]).has('Mercury')&&new Set([x.a,x.b]).has('Venus'));
assert.ok(mutual,'configured exchange receives later-tradition mutual-reception compatibility label');
assert.notEqual(exchange.rule_id,mutual.rule_id,'exchange and mutual reception retain distinct rule IDs');

const marsDominatesJupiter=r.relations.find(x=>x.type==='domination'&&x.from==='Mars'&&x.to==='Jupiter');
assert.ok(marsDominatesJupiter,'Mars in Aries dominates Jupiter in Cancer by right-hand square');
assert.equal(marsDominatesJupiter.result.configuration,'square');
assert.equal(marsDominatesJupiter.rule_id,RELATION_RULES.domination);

for(const relation of r.relations){
  assert.ok(relation.derivation_ref.startsWith('derivation:relation:'));
  assert.ok(relation.rule_id);
  assert.ok(relation.source_reference);
  assert.ok(relation.inputs);
  assert.ok(relation.result);
}
assert.equal(r.ledger_entries.length,r.relations.length);

const system=computeConditionSystem(analysis);
assert.equal(system.completeness.relational,'implemented');
assert.ok(system.signatures.Mercury.tokens.some(t=>t.key==='mutual_reception'));
assert.ok(system.signatures.Jupiter.tokens.some(t=>t.key==='domination_received'));
assert.match(system.signatures.Mercury.epistemic_boundary,/no scalar/i);

console.log(`relational condition smoke: ok · ${r.relations.length} typed relations`);
