import {buildDerivationIndex as buildLegacy,walkDerivation as walkLegacy,flattenDerivationWalk,derivationRef} from './derivation-walker.mjs';
export {flattenDerivationWalk,derivationRef};
export const DERIVATION_WALKER_V044_MODEL='naf.integrity.derivation_walker.v0.4.4';
const raw=x=>String(x||'').replace(/^derivation:/,'');
export function buildDerivationIndexV044(args={}){
  const base=buildLegacy(args),entries={...base.entries},aliases={};
  const collections=[...(args.analysis?.derivation_ledger||[]),...(args.primitive?.ledger_entries||[]),...(args.relational?.ledger_entries||[]),...(args.compound?.ledger_entries||[]),...(args.houseRiver?.derivation_entries||[]),...(args.extra||[])];
  for(const e of collections){if(!e?.id)continue;const q=`${e.kind||'derivation'}:${e.id}`;const existing=entries[e.id]||null;entries[q]=existing?{...existing,id:q,canonical_id:e.id,derivation_ref:derivationRef(q)}:{id:q,canonical_id:e.id,kind:e.kind||'derivation',label:e.label||e.title||e.id,epistemic_layer:e.epistemic_layer||'unknown',rule_id:e.rule_id||e.provenance?.calculation||null,source_reference:e.source_reference||e.provenance?.traditional_reference||null,inputs:e.inputs||null,result:e.result??null,dependencies:(e.dependencies||e.ledger_refs||[]).map(raw),provenance:e.provenance||e.integrity||null,derivation_ref:derivationRef(q)};aliases[q]=q;}
  return {model_id:DERIVATION_WALKER_V044_MODEL,version:'0.4.4',entries,aliases,count:Object.keys(entries).length};
}
export function walkDerivationV044(ref,index,{maxDepth=20}={}){
  const entries=index?.entries||index||{},start=raw(ref);
  const resolve=id=>entries[id]?id:(entries[`coordinate:${id}`]?`coordinate:${id}`:id);
  const visit=(id,depth,path)=>{id=resolve(raw(id));if(depth>maxDepth)return{id,status:'depth_limit',children:[]};if(path.has(id))return{id,status:'cycle_reference',children:[]};const e=entries[id];if(!e)return{id,status:'external_or_unindexed_dependency',children:[]};const next=new Set(path);next.add(id);return{...e,status:'resolved',children:(e.dependencies||[]).map(d=>visit(d,depth+1,next))}};
  return visit(start,0,new Set());
}
