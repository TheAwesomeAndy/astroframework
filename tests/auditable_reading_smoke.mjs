import assert from 'node:assert/strict';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computeConditionSystem} from '../src/conditions/condition-system.mjs';
import {analyzeGraphArchitecture} from '../src/research/graph-analytics-engine.mjs';
import {buildEnergeticSynthesis} from '../src/interpretation/energetic-synthesis-display.mjs';
import {buildHouseResonanceMap} from '../src/interpretation/house-resonance-engine.mjs';
import {buildHouseRiver} from '../src/research/house-river-engine.mjs';
import {buildCrossLayerDiscoveries} from '../src/research/cross-layer-discovery.mjs';
import {buildEvidencePack,EVIDENCE_PACK_MODEL} from '../src/reading/evidence-pack.mjs';
import {buildAuditableReading,AUDITABLE_READING_MODEL} from '../src/reading/constrained-reading-engine.mjs';
import {checkReadingIntegrity,READING_INTEGRITY_MODEL} from '../src/integrity/reading-integrity-checker.mjs';
import {buildDerivationIndex} from '../src/integrity/derivation-walker.mjs';

const SAMPLE=`Sun in Libra 10°57′, in 3rd House
Moon in Gemini 8°03′, in 11th House
Mercury in Libra 19°30′, in 3rd House
Venus in Virgo 14°49′, in 2nd House
Mars in Virgo 15°17′, in 2nd House
Jupiter in Aquarius 7°07′, in 7th House
Saturn in Scorpio 25°09′, in 4th House
Uranus in Sagittarius 14°42′, in 5th House
Neptune in Capricorn 0°58′, in 6th House
Pluto in Scorpio 3°44′, in 4th House
North Node in Taurus 10°31′, Retrograde, in 10th House
Chiron in Gemini 14°33′, Retrograde, in 11th House
ASC in Leo 11°38′
MC in Taurus 0°44′`;
const analysis=analyzeChartWithIntegrity(parseChartInput(SAMPLE));
const conditions=computeConditionSystem(analysis);
const graph=analyzeGraphArchitecture(analysis,conditions.primitive);
const resonance=buildHouseResonanceMap(analysis);
const river=buildHouseRiver(analysis);
const energy=buildEnergeticSynthesis(analysis,graph,conditions.primitive);
const discoveries=buildCrossLayerDiscoveries({analysis,conditions,graph,resonance,river});
const pack=buildEvidencePack({analysis,conditions,graph,resonance,river,energy,discoveries});
assert.equal(pack.model_id,EVIDENCE_PACK_MODEL);
assert.equal(pack.contract.generator_may_recompute,false);
assert.equal(pack.contract.raw_longitudes_exposed,false);
assert.ok(pack.placements.length>=10);
assert.ok(pack.relations.length>0);
assert.ok(pack.compound_testimonies.length>0);
assert.ok(pack.discoveries.length>0);
const serialized=JSON.stringify(pack);
assert.doesNotMatch(serialized,/"longitude"\s*:/i,'generator-facing pack must not expose raw longitude fields');
assert.doesNotMatch(serialized,/"target_longitude_deg"\s*:/i);

const baseIndex=buildDerivationIndex({analysis,primitive:conditions.primitive,relational:conditions.relational,compound:conditions.compound,houseRiver:river,extra:discoveries.derivation_entries});
const reading=buildAuditableReading(pack);
assert.equal(reading.model_id,AUDITABLE_READING_MODEL);
assert.ok(reading.claims.length>20);
assert.ok(reading.claims.filter(c=>['astrological-rule','graph-derived','research-exploratory'].includes(c.epistemic_layer)).every(c=>c.derivation_refs.length>0));
const integrity=checkReadingIntegrity(reading,pack,baseIndex);
assert.equal(integrity.model_id,READING_INTEGRITY_MODEL);
assert.equal(integrity.metrics.blocked_claim_count,0);
assert.equal(integrity.publication_gate.pass,true);
assert.equal(integrity.metrics.structural_provenance_coverage,1);
assert.equal(integrity.metrics.interpretive_evidence_coverage,1);

const fake={...reading,claims:[...reading.claims,{id:'reading:test:fake-reception',claim_type:'structural',text:'Fake reception.',epistemic_layer:'astrological-rule',evidence_ids:[],derivation_refs:['derivation:relation:reception:NONEXISTENT->Sun'],assertions:[{type:'relation',id:'relation:reception:NONEXISTENT->Sun'}],section:'test',status:'candidate',derivation_ref:'derivation:reading:test:fake-reception'}]};
const rejected=checkReadingIntegrity(fake,pack,baseIndex);
assert.equal(rejected.publication_gate.pass,false);
assert.ok(rejected.blocked_claims.some(c=>c.id==='reading:test:fake-reception'));
console.log(`auditable reading smoke: ok · ${reading.claims.length} typed claims · ${discoveries.findings.length} discoveries`);
