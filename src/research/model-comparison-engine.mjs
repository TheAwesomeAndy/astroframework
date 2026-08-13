import {REGIMES} from './research-regime-registry.mjs';

export const MODEL_COMPARISON_VERSION='0.4.5';
export const MODEL_COMPARISON_MODEL='naf.research.model_comparison.v0.4.5';

const uniq=xs=>[...new Set((xs||[]).filter(x=>x!=null))];
const sorted=xs=>[...(xs||[])].sort((a,b)=>String(a).localeCompare(String(b)));
const stable=x=>JSON.stringify(x,Object.keys(x||{}).sort());

function dispositorEdges(analysis){return sorted((analysis?.topology?.dispositor_graph?.edges||[]).map(e=>`${e.from}->${e.to}`));}
function terminalBasins(graph){return (graph?.graphs?.classical_dispositor?.terminal_basins||[]).map(b=>({terminal_members:sorted(b.terminal_members),basin_members:sorted(b.basin_members),basin_size:b.basin_size}));}
function riverRoutes(river){return (river?.houses||[]).map(h=>({house:Number(h.house),entry_ruler:h.entry_ruler,route:[...(h.route||[])]}));}
function compoundSummary(conditions){return Object.fromEntries(Object.entries(conditions?.compound?.by_planet||{}).map(([p,x])=>[p,{state:x?.state||x?.summary_state||null,bonification_count:(x?.bonifications_received||[]).length,maltreatment_count:(x?.maltreatments_received||[]).length}]));}

export function buildOperationalModelSnapshot({analysis=null,graph=null,river=null,conditions=null}={}){
  const coordinateRows=sorted((analysis?.objects||[]).map(o=>`${o.id}:${o.sign}:${Number(o.longitude??0).toFixed(6)}:${o.computed_house??''}`));
  const wholeSignRows=sorted((analysis?.objects||[]).map(o=>`${o.id}:${o.computed_house??''}`));
  const edges=dispositorEdges(analysis);
  return {
    model_id:'naf.model.operational.hellenistic_traditional.v1',
    regime:REGIMES.OPERATIONAL,
    astronomical_fingerprint:coordinateRows.join('|'),
    whole_sign_fingerprint:wholeSignRows.join('|'),
    operational_dispositor_fingerprint:edges.join('|'),
    dispositor_edges:edges,
    terminal_basins:terminalBasins(graph),
    house_routes:riverRoutes(river),
    compound_summary:compoundSummary(conditions),
    source_counts:{objects:(analysis?.objects||[]).length,major_aspects:(analysis?.aspects||[]).length,house_routes:(river?.houses||[]).length}
  };
}

export function buildExperimentalOverlaySnapshot({operational_snapshot,model_id,hypothesis_id=null,overlay_kind,overlay_objects=[],metadata={}}={}){
  if(!operational_snapshot)throw new Error('operational_snapshot is required');
  if(!model_id||!overlay_kind)throw new Error('model_id and overlay_kind are required');
  return {
    ...operational_snapshot,
    model_id,
    regime:REGIMES.EXPERIMENTAL,
    hypothesis_id,
    overlay_kind,
    overlay_objects:[...overlay_objects],
    overlay_count:overlay_objects.length,
    metadata:{...metadata},
    isolation:{
      astronomical_fingerprint:operational_snapshot.astronomical_fingerprint,
      whole_sign_fingerprint:operational_snapshot.whole_sign_fingerprint,
      operational_dispositor_fingerprint:operational_snapshot.operational_dispositor_fingerprint
    }
  };
}

function setDiff(a=[],b=[]){const A=new Set(a.map(x=>typeof x==='string'?x:JSON.stringify(x))),B=new Set(b.map(x=>typeof x==='string'?x:JSON.stringify(x)));return {added:[...B].filter(x=>!A.has(x)),removed:[...A].filter(x=>!B.has(x))};}

export function compareModelSnapshots(control,variant,{hypothesis_id=null}={}){
  if(!control||!variant)throw new Error('control and variant snapshots are required');
  const changedOperationalFingerprints={
    astronomy:control.astronomical_fingerprint!==variant.astronomical_fingerprint,
    whole_sign:control.whole_sign_fingerprint!==variant.whole_sign_fingerprint,
    dispositor:control.operational_dispositor_fingerprint!==variant.operational_dispositor_fingerprint
  };
  const changes={
    dispositor_edges:setDiff(control.dispositor_edges,variant.dispositor_edges),
    terminal_basins:setDiff(control.terminal_basins,variant.terminal_basins),
    house_routes:setDiff(control.house_routes,variant.house_routes),
    compound_summary:stable(control.compound_summary)===stable(variant.compound_summary)?{changed:false}:{changed:true,control:control.compound_summary,variant:variant.compound_summary},
    experimental_overlay:{kind:variant.overlay_kind||null,count:variant.overlay_count||0,objects:variant.overlay_objects||[]}
  };
  const structuralChangeCount=changes.dispositor_edges.added.length+changes.dispositor_edges.removed.length+changes.terminal_basins.added.length+changes.terminal_basins.removed.length+changes.house_routes.added.length+changes.house_routes.removed.length+(changes.compound_summary.changed?1:0);
  return {
    model_id:MODEL_COMPARISON_MODEL,
    version:MODEL_COMPARISON_VERSION,
    regime:REGIMES.EXPERIMENTAL,
    hypothesis_id,
    control_model:control.model_id,
    variant_model:variant.model_id,
    operational_contamination_detected:Object.values(changedOperationalFingerprints).some(Boolean),
    changed_operational_fingerprints:changedOperationalFingerprints,
    structural_change_count:structuralChangeCount,
    changes,
    interpretation_rule:'This object reports model deltas only. It does not decide which model is astrologically true or superior.',
    significance_rule:'A structural delta is not evidence of predictive, causal, spiritual, or statistical significance.'
  };
}

export function compareOverlayModel({operational_snapshot,model_id,hypothesis_id,overlay_kind,overlay_objects=[],metadata={}}={}){
  const variant=buildExperimentalOverlaySnapshot({operational_snapshot,model_id,hypothesis_id,overlay_kind,overlay_objects,metadata});
  return {variant,comparison:compareModelSnapshots(operational_snapshot,variant,{hypothesis_id})};
}
