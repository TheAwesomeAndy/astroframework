import {buildEnergeticSynthesis as buildRaw,ENERGETIC_SYNTHESIS_VERSION,ENERGETIC_SYNTHESIS_MODEL,NATURAL_HOUSE_MODEL} from './energetic-synthesis-engine.mjs';

export {ENERGETIC_SYNTHESIS_VERSION,ENERGETIC_SYNTHESIS_MODEL,NATURAL_HOUSE_MODEL};

function ordinal(n){
  const x=Number(n),mod100=x%100;
  if(mod100>=11&&mod100<=13)return `${x}th`;
  if(x%10===1)return `${x}st`;
  if(x%10===2)return `${x}nd`;
  if(x%10===3)return `${x}rd`;
  return `${x}th`;
}

function normalizeString(s){
  return String(s).replace(/\b(\d{1,2})th house\b/gi,(_,n)=>`${ordinal(n)} house`);
}

function normalize(value){
  if(typeof value==='string')return normalizeString(value);
  if(Array.isArray(value))return value.map(normalize);
  if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,normalize(v)]));
  return value;
}

export function buildEnergeticSynthesis(analysis,graph,conditions=null){
  return normalize(buildRaw(analysis,graph,conditions));
}
