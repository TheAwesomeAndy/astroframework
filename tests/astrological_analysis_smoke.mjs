import assert from 'node:assert/strict';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computePrimitiveConditions} from '../src/conditions/primitive-condition-engine.mjs';
import {analyzeGraphArchitecture} from '../src/research/graph-analytics-engine.mjs';
import {buildAstrologicalAnalysis,interpretMotif} from '../src/interpretation/astrological-analysis-engine.mjs';

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
Chiron in Gemini 14°33′, in 11th House
ASC in Leo 11°38′
MC in Taurus 0°44′`;

const analysis=analyzeChartWithIntegrity(parseChartInput(SAMPLE));
const conditions=computePrimitiveConditions(analysis);
const graph=analyzeGraphArchitecture(analysis,conditions);
const interpretation=buildAstrologicalAnalysis(analysis,graph,conditions);

assert.equal(interpretation.model,'naf.interpretation.astrological_analysis.v0.4.1.1');
assert.equal(interpretation.outer_planets.length,3);
assert.deepEqual(interpretation.outer_planets.map(x=>x.planets[0]).sort(),['Neptune','Pluto','Uranus']);

const uranus=interpretation.outer_planets.find(x=>x.planets.includes('Uranus'));
assert.match(uranus.title,/Uranus/);
assert.match(uranus.astrological_analysis.join(' '),/outer planet/i);
assert.match(uranus.astrological_analysis.join(' '),/aspect graph/i);
assert.match(uranus.livelihood_relevance,/5th-house|5th house/i);
assert.equal(uranus.integrity.epistemic_layer,'interpretive-inference');
assert.ok(uranus.integrity.inputs.placement.includes('Sagittarius'));

const neptune=interpretation.outer_planets.find(x=>x.planets.includes('Neptune'));
assert.match(neptune.livelihood_relevance,/6th-house|6th house/i);
const pluto=interpretation.outer_planets.find(x=>x.planets.includes('Pluto'));
assert.match(pluto.livelihood_relevance,/4th-house|4th house/i);

assert.equal(conditions.by_planet.Uranus,undefined,'outer planets must not silently inherit Hellenistic dignity');

const tSquares=graph.graphs.aspect.recognized_motifs.filter(m=>m.recognized==='t_square');
assert.ok(tSquares.length>=1,'canonical-plus-Chiron fixture should expose a T-square');
const t=interpretMotif(tSquares[0],analysis);
assert.ok(t);
assert.match(t.title,/T-square/i);
assert.match(t.astrological_analysis.join(' '),/opposition/i);
assert.match(t.astrological_analysis.join(' '),/apex/i);
assert.match(t.astrological_analysis.join(' '),/house/i);
assert.match(t.livelihood_relevance,/material relevance/i);
assert.equal(t.integrity.epistemic_layer,'interpretive-inference');
assert.ok(t.integrity.ledger_refs.some(x=>x.startsWith('aspect:')));

const topology=interpretation.topology.find(x=>x.id==='topology.terminal_basin');
assert.ok(topology);
assert.match(topology.astrological_analysis.join(' '),/Mercury|Venus/);
assert.match(topology.astrological_analysis.join(' '),/Condition qualifies/i);

for(const item of interpretation.featured){
  assert.ok(Array.isArray(item.astrological_analysis)&&item.astrological_analysis.length>=3,item.id);
  assert.ok(item.livelihood_relevance,item.id);
  assert.ok(item.integrity?.rules?.length,item.id);
  assert.equal(item.integrity.epistemic_layer,'interpretive-inference');
}

console.log('astrological analysis smoke: ok');
