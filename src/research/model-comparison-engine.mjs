import {createModelIdentity,createResearchStatus} from './research-regime-registry.mjs';

export const MODEL_COMPARISON_VERSION='0.4.5';
export const MODEL_COMPARISON_MODEL='naf.research.model_comparison.v0.4.5';
const stable=x=>JSON.stringify(x??null,Object.keys(x??{}).sort());
const key=e=>typeof e==='string'?e:JSON.stringify(e);
const diff=(a=[],b=[])=>{const A=new Set(a.map(key)),B=new Set(b.map(key));return {added:b.filter(x=>!A.has(key(x))),removed:a.filter(x=>!B.has(key(x))),unchanged:a.filter(x=>B.has(key(x)))};};

export function buildOperationalSnapshot({analysis=null,graph=null,river=null,conditions=null}={}){
  const dispositors=(analysis?.topology?.dispositor_graph?.edges||[]).map(e=>`${e.from}->${e.to}`).sort();
  const basins=(graph?.graphs?.classical_dispositor?.terminal_basins||[]).map(b=>({terminal_members:[...(b.terminal_members||[])].sort(),basin_members:[...(b.basin_members||[])].sort()}));
  const houseRoutes=(river?.houses||[]).map(h=>({house:h.house,entry_ruler:h.entry_ruler,path:[...(h.path||h.route||[])]}));
  const aspects=(analysis?.aspects||[]).filter(a=>['conjunction','sextile','square','trine','opposition'].includes(a.type||a.aspect)).map(a=>`${a.a}:${a.type||a.aspect}:${a.b}`).sort();
  const compound=(conditions?.compound?.testimonies||[]).map(t=>t.id).sort();
  return {model_identity:createModelIdentity({regime:'operational',model_id:'naf.operational.hellenistic_wsh.v0.4.5',tradition:'Hellenistic/traditional control'}),dispositor_edges:dispositors,terminal_basins:basins,house_routes:houseRoutes,canonical_aspects:aspects,compound_testimonies:compound};
}

export function compareModelSnapshots({hypothesis_id,control,variant,variant_model_id,variant_label='Experimental variant',notes=[]}={}){
  if(!hypothesis_id||!control||!variant||!variant_model_id)throw new Error('hypothesis_id, control, variant, and variant_model_id are required');
  const fields=['dispositor_edges','terminal_basins','house_routes','canonical_aspects','compound_testimonies','overlay_annotations','supplemental_aspects','discovery_findings'];
  const deltas={};for(const f of fields)deltas[f]=diff(control[f]||[],variant[f]||[]);
  const changed_fields=fields.filter(f=>deltas[f].added.length||deltas[f].removed.length);
  return {id:`comparison:${hypothesis_id}:${variant_model_id}`,model:MODEL_COMPARISON_MODEL,version:MODEL_COMPARISON_VERSION,hypothesis_id,variant_label,model_identity:createModelIdentity({regime:'experimental',model_id:variant_model_id,hypothesis_id,status:createResearchStatus({geometry:'verified',derivation:'verified',null_comparison:'pending'})}),changed_fields,deltas,operational_fingerprint:stable(control),variant_fingerprint:stable(variant),notes:[...notes],interpretive_limit:'A structural delta is not evidence that the experimental model is astrologically superior.'};
}

export function buildOverlayComparison({hypothesis,operational,modern=null,extended=null,discoveries=null}={}){
  if(!hypothesis||!operational)return null;
  let variant={...operational};
  if(hypothesis.hypothesis_id==='NAF-HYP-MODERN-OUTER-CORULERS-001'){
    variant={...operational,overlay_annotations:(modern?.houses||[]).filter(h=>h.modern_outer_ruler).map(h=>`${h.house}:${h.sign}:${h.traditional_ruler}+${h.modern_outer_ruler}`)};
  }else if(hypothesis.hypothesis_id==='NAF-HYP-EXPANDED-ASPECT-FAMILY-001'){
    variant={...operational,supplemental_aspects:(extended?.aspects||[]).map(a=>`${a.a}:${a.aspect||a.label}:${a.b}:${Number(a.orb_deg).toFixed(3)}`),discovery_findings:(discoveries?.findings||[]).filter(f=>f.kind==='extended_basin_bridge').map(f=>f.id)};
  }else return {hypothesis_id:hypothesis.hypothesis_id,status:'registered-not-executed',reason:'No executable variant adapter is registered for this hypothesis yet.',model_identity:hypothesis.model_identity};
  const v=hypothesis.variants.find(x=>String(x.execution_status).includes('executable'))||hypothesis.variants.at(-1);
  return compareModelSnapshots({hypothesis_id:hypothesis.hypothesis_id,control:operational,variant,variant_model_id:v?.model_id||`${MODEL_COMPARISON_MODEL}.${hypothesis.hypothesis_id}`,variant_label:v?.label||hypothesis.title,notes:['Operational state remains the control and is not mutated by this comparison.']});
}
