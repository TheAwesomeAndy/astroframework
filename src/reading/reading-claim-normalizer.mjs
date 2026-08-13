export const CLAIM_PROOF_NORMALIZER_MODEL='naf.reading.claim_proof_normalizer.v0.4.4';
const dref=id=>String(id||'').startsWith('derivation:')?String(id):`derivation:${id}`;
const raw=x=>String(x||'').replace(/^derivation:/,'');
const uniq=xs=>[...new Set((xs||[]).filter(Boolean))];
function qualifiedForClaim(c){
  const refs=[];
  for(const a of c.assertions||[]){
    if(a.type==='placement')refs.push(dref(`coordinate:${a.planet}`),dref(`whole_sign_house:${a.planet}`));
    if(a.type==='planet_route')for(let i=0;i<(a.route||[]).length-1;i++)refs.push(dref(`dispositor_edge:${a.route[i]}->${a.route[i+1]}`));
    if(a.type==='terminal_basin')refs.push(dref('topology:SCCs'));
  }
  if(c.epistemic_layer==='interpretive-inference'&&c.subject)refs.push(dref(`coordinate:${c.subject}`),dref(`whole_sign_house:${c.subject}`));
  return refs;
}
export function normalizeReadingClaimProof(reading){
  const claims=(reading?.claims||[]).map(c=>({...c,derivation_refs:uniq([...qualifiedForClaim(c),...(c.derivation_refs||[]).filter(r=>String(r).includes(':'))])}));
  const by=Object.fromEntries(claims.map(c=>[c.id,c]));
  const derivation_entries=(reading?.derivation_entries||[]).map(e=>{const c=by[e.id];return c?{...e,dependencies:(c.derivation_refs||[]).map(raw),inputs:{...(e.inputs||{}),proof_normalizer:CLAIM_PROOF_NORMALIZER_MODEL}}:e});
  return {...reading,claims,derivation_entries,proof_normalizer:{model_id:CLAIM_PROOF_NORMALIZER_MODEL,version:'0.4.4'}};
}
