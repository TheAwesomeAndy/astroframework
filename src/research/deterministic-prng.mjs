export const PRNG_VERSION='0.4.6';
export const PRNG_MODEL='naf.research.prng.mulberry32.v0.4.6';

function hashSeed(seed){
  const s=String(seed??'naf-v046-default');let h=2166136261>>>0;
  for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}
  return h>>>0;
}

export function createSeededRng(seed='naf-v046-default'){
  let a=hashSeed(seed)||0x6d2b79f5;
  const random=()=>{a|=0;a=(a+0x6D2B79F5)|0;let t=a;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;};
  return Object.freeze({model_id:PRNG_MODEL,version:PRNG_VERSION,seed:String(seed),random});
}

export function shuffled(values,rng){
  const a=[...values];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(rng.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
