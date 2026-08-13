import {assertRegimeIsolation} from './research-regime-registry.mjs';
import {CERES_TAURUS_HYPOTHESIS,MODERN_OUTER_CORULERS_HYPOTHESIS,EXPANDED_ASPECTS_HYPOTHESIS} from './research-hypothesis-pack.mjs';
import {compareOverlayModel} from './model-comparison-engine.mjs';

export const CURRENT_EXPERIMENT_SUITE_VERSION='0.4.5';
export const CURRENT_EXPERIMENT_SUITE_MODEL='naf.research.current_experiment_suite.v0.4.5';

function execute(base,hypothesis,model_id,overlay_kind,rows,metadata={}){
  const {variant,comparison}=compareOverlayModel({operational_snapshot:base,model_id,hypothesis_id:hypothesis.hypothesis_id,overlay_kind,overlay_objects:rows,metadata});
  return {hypothesis_id:hypothesis.hypothesis_id,title:hypothesis.title,execution_status:rows.length?'executed':'not-executed-no-applicable-objects',variant,comparison,isolation:assertRegimeIsolation({operational:base,experimental:variant})};
}

export function buildCurrentExperimentSuite({analysis,modern,extended,operational_snapshot}={}){
  if(!operational_snapshot)throw new Error('operational_snapshot required');
  const modernRows=(modern?.placements||[]).filter(x=>x.modern_outer_ruler||x.modern_domicile).map(x=>({object:x.id,sign:x.sign,traditional_ruler:x.traditional_ruler||null,modern_outer_ruler:x.modern_outer_ruler||null,modern_domicile:Boolean(x.modern_domicile)}));
  const aspectRows=(extended?.aspects||[]).map(a=>({id:a.id,a:a.a,b:a.b,label:a.label,orb_deg:a.orb_deg,orb_policy:extended?.orb_policy?.id||null}));
  const ceres=(analysis?.objects||[]).find(x=>x.id==='Ceres');
  const ceresRows=ceres?[{object:'Ceres',observed_sign:ceres.sign,observed_house:ceres.computed_house??null,target_sign:'Taurus',variant_id:'T1',role:'seed-example-only'}]:[];
  return {
    model_id:CURRENT_EXPERIMENT_SUITE_MODEL,
    version:CURRENT_EXPERIMENT_SUITE_VERSION,
    experiments:[
      execute(operational_snapshot,MODERN_OUTER_CORULERS_HYPOTHESIS,'naf.model.experimental.modern_outer_corulership.v1','modern_outer_corulership',modernRows),
      execute(operational_snapshot,EXPANDED_ASPECTS_HYPOTHESIS,'naf.model.experimental.expanded_aspect_family.v1','expanded_aspect_family',aspectRows,{orb_policy:extended?.orb_policy?.id||null}),
      execute(operational_snapshot,CERES_TAURUS_HYPOTHESIS,'naf.model.experimental.ceres_taurus_seed.v1','ceres_taurus_seed_example',ceresRows,{note:'Ceres–Taurus is one seed example, not the boundary of the research program.'})
    ]
  };
}
