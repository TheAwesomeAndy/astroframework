export const READING_INTEGRITY_VERSION='0.4.4';
export const READING_INTEGRITY_MODEL='naf.integrity.reading.v0.4.4';

const raw=ref=>String(ref||'').replace(/^derivation:/,'');
const eqArray=(a,b)=>Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.every((x,i)=>x===b[i]);

function evidenceBy(pack,id){return pack?.evidence_index?.[id]||null}
function validateAssertion(a,pack){
  if(a.type==='placement'){
    const p=pack.placement_by_id?.[a.planet];
    return p&&p.sign===a.sign&&Number(p.whole_sign_house)===Number(a.house)?null:`placement mismatch for ${a.planet}`;
  }
  if(a.type==='planet_route'){
    const r=pack.planet_routes?.[a.planet];return r&&eqArray(r.route,a.route)?null:`ruler route mismatch for ${a.planet}`;
  }
  if(a.type==='terminal_basin'){
    return (pack.terminal_basins||[]).some(b=>eqArray(b.terminal_members,a.members)&&Number(b.basin_size)===Number(a.basin_size))?null:'terminal basin assertion does not match evidence pack';
  }
  if(a.type==='condition_signature'){
    const s=pack.condition_signatures?.[a.planet],keys=new Set((s?.tokens||[]).map(t=>t.key));return s&&(a.token_keys||[]).every(k=>keys.has(k))?null:`condition signature mismatch for ${a.planet}`;
  }
  if(a.type==='compound_presence'){
    const s=pack.condition_signatures?.[a.planet],v=s?.tokens?.find(t=>t.key==='compound_presence')?.value||'none';return v===a.presence?null:`compound presence mismatch for ${a.planet}`;
  }
  if(a.type==='relation')return (pack.relations||[]).some(r=>r.id===a.id)?null:`relation ${a.id} absent from evidence pack`;
  if(a.type==='compound_testimony')return (pack.compound_testimonies||[]).some(t=>t.id===a.id&&(!a.status||t.status===a.status))?null:`compound testimony ${a.id} absent or state-mismatched`;
  if(a.type==='discovery')return (pack.discoveries||[]).some(d=>d.id===a.id)?null:`discovery ${a.id} absent from evidence pack`;
  if(a.type==='resonance_rotation'){
    const r=pack.resonance?.rotation;return r&&Number(r.sign_steps)===Number(a.sign_steps)&&Number(r.degrees)===Number(a.degrees)?null:'resonance rotation mismatch';
  }
  return `unknown assertion type ${a.type}`;
}

function contradictionFlags(c,pack){const flags=[];const text=String(c.text||'').toLowerCase();
  if(c.subject){
    const sig=pack.condition_signatures?.[c.subject],presence=sig?.tokens?.find(t=>t.key==='compound_presence')?.value;
    if(presence==='mixed'&&(text.includes('bonif')||text.includes('maltreat'))&&!text.includes('mixed')&&!(text.includes('bonif')&&text.includes('maltreat')))flags.push('mixed_condition_not_acknowledged');
  }
  const basin=[...(pack.terminal_basins||[])].sort((a,b)=>b.basin_size-a.basin_size)[0];
  if((basin?.terminal_members?.length||0)>1&&/(dominant planet|controls the chart|rules the entire chart)/i.test(c.text||''))flags.push('terminal_scc_scalarized');
  if(c.natural_house_secondary&&/natural house/i.test(c.text||'')&&!/(optional|secondary|comparison|modern)/i.test(c.text||''))flags.push('natural_house_secondary_label_missing');
  return flags;
}

export function checkReadingIntegrity(reading,evidencePack,derivationIndex){
  const entries=derivationIndex?.entries||{};const reviewed=[];
  for(const c of reading?.claims||[]){
    const hard_errors=[];
    for(const eid of c.evidence_ids||[])if(!evidenceBy(evidencePack,eid))hard_errors.push(`missing evidence object ${eid}`);
    for(const a of c.assertions||[]){const err=validateAssertion(a,evidencePack);if(err)hard_errors.push(err)}
    if(['astrological-rule','graph-derived','research-exploratory'].includes(c.epistemic_layer)&&!(c.derivation_refs||[]).length)hard_errors.push('structural/research claim has no derivation references');
    const invalid_refs=(c.derivation_refs||[]).filter(r=>!entries[raw(r)]);
    if(invalid_refs.length)hard_errors.push(`unresolved derivation refs: ${invalid_refs.join(', ')}`);
    const contradiction_flags=contradictionFlags(c,evidencePack);
    const blocked=hard_errors.length>0;
    reviewed.push({...c,status:blocked?'blocked':c.epistemic_layer==='interpretive-inference'?'interpretive':'verified',integrity:{structural_match:hard_errors.length===0,provenance_complete:invalid_refs.length===0&&(c.derivation_refs||[]).length>0,hard_errors,contradiction_flags}});
  }
  const structural=reviewed.filter(c=>['astrological-rule','graph-derived','research-exploratory'].includes(c.epistemic_layer));
  const interpretive=reviewed.filter(c=>c.epistemic_layer==='interpretive-inference');
  const structural_provenance_coverage=structural.length?structural.filter(c=>c.integrity.provenance_complete&&!c.integrity.hard_errors.length).length/structural.length:1;
  const interpretive_evidence_coverage=interpretive.length?interpretive.filter(c=>(c.evidence_ids||[]).length>0&&(c.derivation_refs||[]).length>0).length/interpretive.length:1;
  return {
    model_id:READING_INTEGRITY_MODEL,version:READING_INTEGRITY_VERSION,
    claims:reviewed,approved_claims:reviewed.filter(c=>c.status!=='blocked'),blocked_claims:reviewed.filter(c=>c.status==='blocked'),
    metrics:{structural_claim_count:structural.length,interpretive_claim_count:interpretive.length,blocked_claim_count:reviewed.filter(c=>c.status==='blocked').length,structural_provenance_coverage,interpretive_evidence_coverage,contradiction_flag_count:reviewed.reduce((n,c)=>n+c.integrity.contradiction_flags.length,0)},
    publication_gate:{pass:reviewed.every(c=>c.status!=='blocked'),rule:'Any hard structural mismatch, unsupported evidence object, or unresolved structural derivation reference blocks that claim from the final Reading.'}
  };
}
