import {shuffled} from './deterministic-prng.mjs';
import {basinMetricsFromCounts} from './null-metric-registry.mjs';

const SIGNS=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
const RULER={Aries:'Mars',Taurus:'Venus',Gemini:'Mercury',Cancer:'Moon',Leo:'Sun',Virgo:'Mercury',Libra:'Venus',Scorpio:'Mars',Sagittarius:'Jupiter',Capricorn:'Saturn',Aquarius:'Saturn',Pisces:'Jupiter'};
const CLASSICAL=['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn'];
const signOf=x=>SIGNS[Math.floor((((Number(x)%360)+360)%360)/30)%12];
const objMap=a=>Object.fromEntries((a?.objects||[]).map(o=>[o.id,o]));
const ascSign=a=>a?.angles?.ASC?.sign||signOf(a?.angles?.ASC?.longitude||0);

function observedLongitudes(analysis){const m=objMap(analysis);return Object.fromEntries(CLASSICAL.map(p=>[p,Number(m[p]?.longitude)]).filter(([,x])=>Number.isFinite(x)));}
function houseEntries(asc){const i=SIGNS.indexOf(asc);return Array.from({length:12},(_,h)=>RULER[SIGNS[(i+h)%12]]);}
function nextMap(longitudes){return Object.fromEntries(CLASSICAL.filter(p=>Number.isFinite(longitudes[p])).map(p=>[p,RULER[signOf(longitudes[p])]]));}
function walk(start,next){const route=[],seen=new Map();let p=start;while(p&&next[p]&&route.length<32){if(seen.has(p)){const cyc=route.slice(seen.get(p));return {route,terminal:[...cyc].sort().join('|')};}seen.set(p,route.length);route.push(p);p=next[p];}return {route,terminal:p||route.at(-1)||start};}
function summarize(longitudes,asc,entries=null){
  const next=nextMap(longitudes),terminalByPlanet={};for(const p of Object.keys(next))terminalByPlanet[p]=walk(p,next).terminal;
  const terminal_basin_count=new Set(Object.values(terminalByPlanet)).size,house_terminal_counts={},edgeCounts={};
  for(const entry of entries||houseEntries(asc)){const r=walk(entry,next);house_terminal_counts[r.terminal]=(house_terminal_counts[r.terminal]||0)+1;for(let i=0;i<r.route.length-1;i++){const k=`${r.route[i]}->${r.route[i+1]}`;edgeCounts[k]=(edgeCounts[k]||0)+1;}}
  return {...basinMetricsFromCounts(house_terminal_counts),terminal_basin_count,max_route_capture:Math.max(0,...Object.values(edgeCounts)),house_terminal_counts};
}

export function sampleIndependentGeometry(analysis,rng){const obs=observedLongitudes(analysis),x=Object.fromEntries(Object.keys(obs).map(p=>[p,rng.random()*360]));return summarize(x,ascSign(analysis));}
export function sampleLabelPermutation(analysis,rng){const obs=observedLongitudes(analysis),ps=Object.keys(obs),vals=shuffled(ps.map(p=>obs[p]),rng),x=Object.fromEntries(ps.map((p,i)=>[p,vals[i]]));return summarize(x,ascSign(analysis));}
export function sampleTopicPermutation(analysis,rng){const obs=observedLongitudes(analysis),entries=shuffled(houseEntries(ascSign(analysis)),rng);return summarize(obs,ascSign(analysis),entries);}
