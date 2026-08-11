import assert from 'node:assert/strict';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computePrimitiveConditions} from '../src/conditions/primitive-condition-engine.mjs';
import {analyzeGraphArchitecture} from '../src/research/graph-analytics-engine.mjs';
import {buildEnergeticSynthesis,NATURAL_HOUSE_MODEL} from '../src/interpretation/energetic-synthesis-display.mjs';

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
Ceres in Leo 19°41′, in 1st House
Chiron in Gemini 14°33′, Retrograde, in 11th House
Fortune in Sagittarius 14°32′, in 5th House
ASC in Leo 11°38′
MC in Taurus 0°44′`;

const analysis=analyzeChartWithIntegrity(parseChartInput(SAMPLE));
const conditions=computePrimitiveConditions(analysis);
const graph=analyzeGraphArchitecture(analysis,conditions);
const energy=buildEnergeticSynthesis(analysis,graph,conditions);

assert.equal(energy.version,'0.4.1.2');
assert.equal(energy.natural_house_model,NATURAL_HOUSE_MODEL);
assert.match(energy.applicability.energy_language,/symbolic\/metaphorical/i);
assert.match(energy.applicability.natural_house_overlay,/modern correspondence/i);
assert.match(energy.applicability.ceres,/supported when a Ceres coordinate is supplied/i);

const ceres=energy.ceres.find(x=>x.objects.includes('Ceres'));
assert.ok(ceres,'Ceres should produce an energetic interpretation when supplied');
assert.equal(ceres.evidence.placement.house,1);
assert.equal(ceres.evidence.placement.sign,'Leo');
assert.equal(ceres.evidence.natural_house.sign,'Aries');
assert.equal(ceres.evidence.natural_house.ruler,'Mars');
assert.match(ceres.sections.core_energy,/nourishment-and-harvest current/i);
assert.match(ceres.sections.energetic_synthesis,/modern natural-house correspondence/i);
assert.match(ceres.sections.energetic_synthesis,/Leo/i);
assert.match(ceres.sections.energetic_synthesis,/Aries\/Mars/i);
assert.match(ceres.sections.energetic_synthesis,/1st house/i);
assert.match(ceres.sections.material_expression,/identity choices|bodily presentation|personal autonomy/i);
assert.ok(ceres.sections.embodiment_practices.length>=3);

const mercury=energy.placements.find(x=>x.objects.includes('Mercury'));
assert.ok(mercury);
assert.equal(mercury.evidence.natural_house.sign,'Gemini');
assert.equal(mercury.evidence.natural_house.ruler,'Mercury');
assert.match(mercury.sections.energetic_synthesis,/Libra/i);
assert.match(mercury.sections.energetic_synthesis,/3rd house/i);
assert.match(mercury.sections.energetic_synthesis,/Gemini\/Mercury/i);
assert.match(mercury.sections.rulership_and_routing,/Venus/i);
assert.doesNotMatch(mercury.sections.energetic_synthesis,/3th house/i);

for(const outer of ['Uranus','Neptune','Pluto']){
  const card=energy.outer_planets.find(x=>x.objects.includes(outer));
  assert.ok(card,`${outer} must remain in energetic analysis`);
  assert.match(card.sections.core_energy,/current|field|house/i);
  assert.ok(card.sections.material_expression.length>80);
}

const basin=energy.graph_cards.find(x=>x.id==='energy.graph.terminal_basin');
assert.ok(basin,'terminal basin must get a plain-language energetic translation');
assert.match(basin.sections.plain_language,/Every classical planetary rulership pathway|classical planetary pathways/i);
assert.match(basin.sections.plain_language,/Mercury.*Venus|Venus.*Mercury/i);
assert.match(basin.sections.energetic_synthesis,/houses matter enormously/i);
assert.match(basin.sections.material_expression,/feedback loop|terminal houses/i);
assert.doesNotMatch(basin.sections.plain_language,/psychological dominance|causation/i);
assert.ok(basin.sections.embodiment_practices.length>=3);

const venusMars=energy.aspects.find(x=>x.objects.includes('Venus')&&x.objects.includes('Mars'));
assert.ok(venusMars,'tight Venus-Mars conjunction should receive energetic aspect analysis');
assert.match(venusMars.sections.energetic_synthesis,/house-to-house|2nd house|2H/i);

for(const card of [...energy.featured,...energy.placements.slice(0,3)]){
  assert.ok(card.integrity?.model,'every energetic card must preserve integrity metadata');
  assert.equal(card.integrity.epistemic_layer,'interpretive-inference');
  assert.match(card.integrity.energy_language_status,/not-measured-physical-energy/i);
}

console.log('energetic synthesis smoke: ok');
