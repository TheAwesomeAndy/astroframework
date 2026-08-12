import assert from 'node:assert/strict';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computeConditionSystem} from '../src/conditions/condition-system.mjs';
import {analyzeGraphArchitecture} from '../src/research/graph-analytics-engine.mjs';
import {buildHouseResonanceMap} from '../src/interpretation/house-resonance-engine.mjs';
import {buildHouseRiver} from '../src/research/house-river-engine.mjs';
import {buildCrossLayerDiscoveries,CROSS_LAYER_DISCOVERY_MODEL} from '../src/research/cross-layer-discovery.mjs';
import {buildDerivationIndex,walkDerivation} from '../src/integrity/derivation-walker.mjs';
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
ASC in Leo 11°38′
MC in Taurus 0°44′`;
const analysis=analyzeChartWithIntegrity(parseChartInput(SAMPLE));
const conditions=computeConditionSystem(analysis),graph=analyzeGraphArchitecture(analysis,conditions.primitive),resonance=buildHouseResonanceMap(analysis),river=buildHouseRiver(analysis);
const out=buildCrossLayerDiscoveries({analysis,conditions,graph,resonance,river});
assert.equal(out.model_id,CROSS_LAYER_DISCOVERY_MODEL);
assert.ok(out.findings.some(f=>f.kind==='conditioned_terminal'));
assert.ok(out.findings.some(f=>f.kind==='house_convergence'));
assert.ok(out.findings.every(f=>f.derivation_ref.startsWith('derivation:discovery:')));
assert.ok(out.findings.every(f=>f.interpretive_status==='detected-no-null-model'));
assert.ok(out.restrictions.join(' ').match(/No detector may label a pattern rare/i));
const index=buildDerivationIndex({analysis,primitive:conditions.primitive,relational:conditions.relational,compound:conditions.compound,houseRiver:river,extra:out.derivation_entries});
const walk=walkDerivation(out.findings[0].derivation_ref,index);
assert.equal(walk.status,'resolved');
assert.equal(walk.kind,'cross_layer_discovery');
console.log(`cross-layer discovery smoke: ok · ${out.findings.length} proof-bearing findings`);
