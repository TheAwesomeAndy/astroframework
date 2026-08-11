import assert from 'node:assert/strict';
import {
  normalize360, shortestSeparation, wholeSignHouse,
  computeMajorAspects, classifyPhase
} from '../src/kernel/noetic-kernel.mjs';
import { determineSect, computeHermeticLots } from '../src/kernel/hellenistic-integrity.mjs';

const near=(a,b,eps=1e-10)=>Math.abs(a-b)<=eps;

// Circular coordinate boundaries.
assert.equal(normalize360(360),0);
assert.equal(normalize360(720),0);
assert.ok(near(normalize360(-0.1),359.9));
assert.ok(near(shortestSeparation(359.9,0.1),0.2));
assert.equal(wholeSignHouse('Cancer','Leo'),12);
assert.equal(wholeSignHouse('Leo','Leo'),1);
assert.equal(wholeSignHouse('Virgo','Leo'),2);

// Orb boundary is inclusive at the configured limit and exclusive beyond it.
const policy={id:'test.orb.boundary.v1',conjunction:0,sextile:0,square:1,trine:0,opposition:0};
const obj=(id,longitude,speed)=>({id,longitude,speed_deg_per_day:speed,provenance:{source:'synthetic'}});
let aspects=computeMajorAspects([obj('A',0),obj('B',91)],policy);
assert.equal(aspects.length,1);
assert.equal(aspects[0].aspect,'square');
assert.ok(near(aspects[0].orb_deg,1));
aspects=computeMajorAspects([obj('A',0),obj('B',91.000001)],policy);
assert.equal(aspects.length,0);

// Motion classification around an exact aspect.
assert.equal(classifyPhase(obj('A',0,0),obj('B',89.9,1),90),'applying');
assert.equal(classifyPhase(obj('A',0,0),obj('B',90,1),90),'separating');
assert.equal(classifyPhase(obj('A',0),obj('B',90),90),'unknown');
assert.equal(classifyPhase(obj('A',0,0),obj('B',90,0),90),'stationary/indeterminate');

// Sect boundary using the chart-geometry fallback.
const asc={id:'ASC',sign:'Leo',longitude:120};
let sect=determineSect([{id:'Sun',longitude:120.5}],{ASC:asc});
assert.equal(sect.sect,'night');
assert.equal(sect.near_horizon,true);
sect=determineSect([{id:'Sun',longitude:120}],{ASC:asc});
assert.equal(sect.sect,'horizon');

// Sect-reversing lots must refuse a forced result at an indeterminate horizon.
const objects=[
  {id:'Sun',sign:'Leo',longitude:120},
  {id:'Moon',sign:'Gemini',longitude:60},
  {id:'Mercury',sign:'Virgo',longitude:150},
  {id:'Venus',sign:'Libra',longitude:180},
  {id:'Mars',sign:'Aries',longitude:0},
  {id:'Jupiter',sign:'Sagittarius',longitude:240},
  {id:'Saturn',sign:'Capricorn',longitude:270}
];
const lots=computeHermeticLots(objects,{ASC:asc});
assert.equal(lots.sect.sect,'horizon');
assert.equal(lots.lots.length,0);
assert.ok(lots.warnings.some(x=>/indeterminate/i.test(x)));

console.log('PASS boundary suite: circular wrap, house wrap, orb cutoff, phase states, near-horizon sect, and indeterminate-lot behavior verified.');