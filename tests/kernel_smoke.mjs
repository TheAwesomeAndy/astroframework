import fs from 'node:fs';
import assert from 'node:assert/strict';
import {
  absoluteLongitude, shortestSeparation, wholeSignHouse, parseChartJSON, parseChartText, analyzeChart, DEFAULT_ORB_POLICY
} from '../src/kernel/noetic-kernel.mjs';

const fixturePath=new URL('../data/canonical/NAF-CANON-0001-supplied.json', import.meta.url);
const fixture=JSON.parse(fs.readFileSync(fixturePath,'utf8'));
const analysis=analyzeChart(parseChartJSON(fixture));

assert.ok(Math.abs(absoluteLongitude('Libra','10°57′')-190.95)<1e-9);
assert.ok(Math.abs(shortestSeparation(254.7,254.5333333333)-0.1666666667)<1e-6);
assert.equal(shortestSeparation(359.5,0.5),1);
assert.equal(wholeSignHouse('Libra','Leo'),3);
assert.equal(wholeSignHouse('Gemini','Leo'),11);
assert.deepEqual(analysis.validation.supplied_house_mismatches,[]);

const aspectKey=(a,b)=>analysis.aspects.find(x=>new Set([x.a,x.b]).size===2 && [x.a,x.b].includes(a) && [x.a,x.b].includes(b));
assert.equal(aspectKey('Sun','Moon')?.aspect,'trine');
assert.equal(aspectKey('Moon','Jupiter')?.aspect,'trine');
assert.equal(aspectKey('Sun','Jupiter')?.aspect,'trine');
assert.equal(aspectKey('Venus','Mars')?.aspect,'conjunction');
assert.equal(aspectKey('Venus','Uranus')?.aspect,'square');
assert.equal(aspectKey('Mars','Uranus')?.aspect,'square');
assert.equal(aspectKey('Fortune','Uranus')?.aspect,'conjunction');
assert.equal(aspectKey('Fortune','Chiron')?.aspect,'opposition');
assert.equal(aspectKey('Sun','Moon')?.phase,'unknown');

assert.ok(analysis.topology.terminal_sccs.some(c=>c.length===2 && c.includes('Mercury') && c.includes('Venus')));
for(const p of ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn']){
  const edgeNodes=new Set(analysis.topology.dispositor_graph.nodes);
  assert.ok(edgeNodes.has(p));
}
assert.equal(analysis.composition.planet_count,10);
assert.deepEqual(analysis.composition.elements,{Fire:1,Earth:3,Air:4,Water:2});
assert.deepEqual(analysis.composition.modes,{Cardinal:3,Fixed:3,Mutable:4});

const text=`Sun in Libra 10°57′, in 3rd House\nMoon in Gemini 8°03′, in 11th House\nMercury in Libra 19°30′, in 3rd House\nVenus in Virgo 14°49′, in 2nd House\nMars in Virgo 15°17′, in 2nd House\nJupiter in Aquarius 7°07′, in 7th House\nSaturn in Scorpio 25°09′, in 4th House\nUranus in Sagittarius 14°42′, in 5th House\nNeptune in Capricorn 0°58′, in 6th House\nPluto in Scorpio 3°44′, in 4th House\nASC in Leo 11°38′\nMC in Taurus 0°44′`;
const fromText=analyzeChart(parseChartText(text));
assert.equal(fromText.objects.length,10);
assert.equal(fromText.objects.find(o=>o.id==='Sun').computed_house,3);
assert.equal(fromText.model.orb_policy,DEFAULT_ORB_POLICY.id);

const fullText=fs.readFileSync(new URL('../data/canonical/NAF-CANON-0001-input.txt', import.meta.url),'utf8');
const fullFromText=analyzeChart(parseChartText(fullText));
assert.equal(fullFromText.objects.length,15);
assert.ok(fullFromText.topology.terminal_sccs.some(c=>c.includes('Mercury')&&c.includes('Venus')));

const velocityFixture={angles:{ASC:{sign:'Aries',degree:'0°00′'}},objects:[
  {id:'Sun',sign:'Aries',degree:'0°00′',speed_deg_per_day:1},
  {id:'Moon',sign:'Aries',degree:'5°00′',speed_deg_per_day:-1}
]};
const velocityAnalysis=analyzeChart(parseChartJSON(velocityFixture),{orbPolicy:{...DEFAULT_ORB_POLICY,id:'test'}});
const sunMoonVelocity=velocityAnalysis.aspects.find(e=>[e.a,e.b].includes('Sun')&&[e.a,e.b].includes('Moon'));
assert.ok(sunMoonVelocity);
assert.notEqual(sunMoonVelocity.phase,'unknown');

console.log(`PASS Noetic Kernel ${analysis.kernel_version}: ${analysis.aspects.length} computed aspects; terminal SCC ${analysis.topology.terminal_sccs.map(x=>x.join('↔')).join(', ')}`);
