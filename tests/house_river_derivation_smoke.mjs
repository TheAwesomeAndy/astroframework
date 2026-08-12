import assert from 'node:assert/strict';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computePrimitiveConditions} from '../src/conditions/primitive-condition-engine.mjs';
import {computeRelationalConditions} from '../src/conditions/relational-condition-engine.mjs';
import {buildHouseRiver,HOUSE_RIVER_MODEL} from '../src/research/house-river-engine.mjs';
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
const river=buildHouseRiver(analysis);
assert.equal(river.model_id,HOUSE_RIVER_MODEL);
assert.equal(river.houses.length,12);
assert.equal(river.source_bands.length,12);
assert.match(river.width_semantics,/integer number of Whole Sign house-ruler paths/i);
assert.match(river.width_semantics,/not an energy-strength score/i);
assert.ok(river.planetary_bands.length>0);
assert.ok(river.planetary_bands.every(b=>Number.isInteger(b.count)&&b.count>=1));
assert.ok(river.planetary_bands.every(b=>b.derivation_ref.startsWith('derivation:house_river:path:')));

const primitive=computePrimitiveConditions(analysis),relational=computeRelationalConditions(analysis);
const index=buildDerivationIndex({analysis,primitive,relational,houseRiver:river});
assert.ok(index.count>analysis.derivation_ledger.length);
const target=river.planetary_bands[0];
const walk=walkDerivation(target.derivation_ref,index);
assert.equal(walk.status,'resolved');
assert.equal(walk.id,target.id);
assert.equal(walk.result.route_count,target.count);
assert.ok(walk.children.length>=1);

console.log(`house river + derivation smoke: ok · max route count ${river.max_route_count}`);
