export const DERIVATION_WALKER_VERSION='0.4.2';
export const DERIVATION_WALKER_MODEL='naf.integrity.derivation_walker.v0.4.2';

export const derivationRef=id=>String(id).startsWith('derivation:')?String(id):`derivation:${id}`;
const rawId=ref=>String(ref||'').replace(/^derivation:/,'');

function normalizeLedgerEntry(e,source='unknown'){
  if(!e?.id)return null;
  return {
    id:e.id,
    derivation_ref:e.derivation_ref||derivationRef(e.id),
    kind:e.kind||'derivation',
    label:e.label||e.title||e.id,
    epistemic_layer:e.epistemic_layer||'unknown',
    rule_id:e.rule_id||null,
    source_reference:e.source_reference||null,
    inputs:e.inputs||null,
    result:e.result??null,
    dependencies:(e.dependencies||e.ledger_refs||[]).map(rawId),
    provenance:e.provenance||e.integrity||null,
    source_collection:source
  };
}

export function buildDerivationIndex({analysis=null,primitive=null,relational=null,houseRiver=null,extra=[]}={}){
  const index={};
  const add=(entry,source)=>{const n=normalizeLedgerEntry(entry,source);if(n)index[n.id]=n};
  for(const e of analysis?.derivation_ledger||[])add(e,'analysis.derivation_ledger');
  for(const e of primitive?.ledger_entries||[])add(e,'primitive_condition');
  for(const e of relational?.ledger_entries||[])add(e,'relational_condition');
  for(const e of houseRiver?.derivation_entries||[])add(e,'house_river');
  for(const e of extra||[])add(e,'extra');
  return {
    model_id:DERIVATION_WALKER_MODEL,
    version:DERIVATION_WALKER_VERSION,
    entries:index,
    count:Object.keys(index).length
  };
}

export function walkDerivation(ref,indexLike,{maxDepth=20}={}){
  const index=indexLike?.entries||indexLike||{};
  const start=rawId(ref);
  const visit=(id,depth,path)=>{
    if(depth>maxDepth)return {id,derivation_ref:derivationRef(id),status:'depth_limit',children:[]};
    if(path.has(id))return {id,derivation_ref:derivationRef(id),status:'cycle_reference',children:[]};
    const entry=index[id];
    if(!entry)return {id,derivation_ref:derivationRef(id),status:'external_or_unindexed_dependency',children:[]};
    const next=new Set(path);next.add(id);
    return {...entry,status:'resolved',children:(entry.dependencies||[]).map(d=>visit(rawId(d),depth+1,next))};
  };
  return visit(start,0,new Set());
}

export function flattenDerivationWalk(tree){
  const out=[];const seen=new Set();
  const visit=(n,depth=0)=>{if(!n||seen.has(`${n.id}@${depth}`))return;seen.add(`${n.id}@${depth}`);out.push({depth,...n,children:undefined});for(const c of n.children||[])visit(c,depth+1)};
  visit(tree);return out;
}
