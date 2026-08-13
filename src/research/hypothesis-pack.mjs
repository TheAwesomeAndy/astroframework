import {createModelIdentity,createResearchStatus} from './research-regime-registry.mjs';

export const HYPOTHESIS_PACK_VERSION='0.4.5';
export const HYPOTHESIS_PACK_MODEL='naf.research.hypothesis_pack.v0.4.5';
export const RESEARCH_LIFECYCLE=Object.freeze(['detect','describe','compare','test','replicate','interpret']);

export function createHypothesisPack({hypothesis_id,title,question,domain,control_model,variants=[],expected_structural_effects=[],sources=[],execution_status='registered-not-executed',notes=[]}={}){
  if(!hypothesis_id||!title||!question||!domain||!control_model)throw new Error('hypothesis_id, title, question, domain, and control_model are required');
  const normalized=variants.map((v,i)=>({variant_id:v.variant_id||`${hypothesis_id}:V${i+1}`,label:v.label||`Variant ${i+1}`,model_id:v.model_id||`${HYPOTHESIS_PACK_MODEL}.${hypothesis_id}.v${i+1}`,parameters:v.parameters||{},execution_status:v.execution_status||execution_status}));
  return {
    schema:HYPOTHESIS_PACK_MODEL,version:HYPOTHESIS_PACK_VERSION,hypothesis_id,title,question,domain,
    regime:'experimental',control_model,variants:normalized,expected_structural_effects:[...expected_structural_effects],sources:[...sources],execution_status,
    lifecycle:{current:'describe',sequence:[...RESEARCH_LIFECYCLE]},research_status:createResearchStatus({geometry:'unknown',derivation:'verified',null_comparison:'pending'}),notes:[...notes],
    contamination_rule:'This pack may generate comparison results but may not mutate the Operational model.',
    model_identity:createModelIdentity({regime:'experimental',model_id:`${HYPOTHESIS_PACK_MODEL}.${hypothesis_id}`,hypothesis_id})
  };
}

export function buildDefaultHypothesisRegistry(){
  const control='naf.operational.hellenistic_wsh.v0.4.5';
  return [
    createHypothesisPack({hypothesis_id:'NAF-HYP-MODERN-OUTER-CORULERS-001',title:'Modern outer co-rulership overlay',question:'What structural or interpretive information is added when modern outer co-rulership is compared with, but does not replace, traditional domicile rulership?',domain:'rulership',control_model:control,execution_status:'executable-overlay',variants:[{label:'Traditional control',parameters:{outer_rulership:false},execution_status:'control'},{label:'Modern co-rulership overlay',parameters:{outer_rulership:true},execution_status:'executable-overlay'}],expected_structural_effects:['Additional model annotations and cross-model domicile overlaps; no change to canonical traditional dispositor edges.']}),
    createHypothesisPack({hypothesis_id:'NAF-HYP-EXPANDED-ASPECT-FAMILY-001',title:'Expanded aspect-family policy',question:'What graph connections and cross-basin bridges appear when an explicit supplemental aspect family is admitted under a named orb contract?',domain:'aspect_geometry',control_model:control,execution_status:'executable-overlay',variants:[{label:'Canonical five configurations',parameters:{aspect_policy:'canonical-major'},execution_status:'control'},{label:'Supplemental family prototype',parameters:{aspect_policy:'naf.orbs.extended_family.prototype.v1'},execution_status:'executable-overlay'}],expected_structural_effects:['Additional aspect edges and possible cross-basin bridges; no silent alteration of the canonical major-aspect graph.']}),
    createHypothesisPack({hypothesis_id:'NAF-HYP-CERES-TAURUS-001',title:'Ceres–Taurus rulership/significator family',question:'Does Ceres behave as a secondary significator, co-ruler, or alternative ruler of Taurus under specified structural and phenomenological criteria?',domain:'rulership',control_model:control,execution_status:'registered-not-executed',variants:[{label:'Venus control',parameters:{taurus_rulers:['Venus']},execution_status:'control'},{label:'Ceres secondary significator',parameters:{taurus_rulers:['Venus'],ceres_role:'secondary_significator'}},{label:'Venus + Ceres co-rulership',parameters:{taurus_rulers:['Venus','Ceres']}},{label:'Ceres alternative routing',parameters:{taurus_rulers:['Ceres']}}],expected_structural_effects:['Potential changes to dispositor routing, SCCs, house-route convergence, and model-comparison readings.'],notes:['Ceres–Taurus is an example hypothesis, not the organizing research program. No result exists until an executable routing model and validated Ceres coordinate are supplied.']}),
    createHypothesisPack({hypothesis_id:'NAF-HYP-HISTORICAL-MODEL-EQUIVALENCE-001',title:'Historical model equivalence protocol',question:'Do techniques from separately transmitted astrological traditions encode mathematically equivalent structures under different terminology?',domain:'historical_model_comparison',control_model:control,execution_status:'research-template',variants:[],expected_structural_effects:['Potential equivalence classes across rule systems; requires source-locked implementations before comparison.']}),
    createHypothesisPack({hypothesis_id:'NAF-HYP-FIELD-MATHEMATICS-001',title:'Field-language formalization protocol',question:'Can resonance, phase, coupling, interference, or persistence be defined mathematically so they generate testable structural predictions rather than poetic analogy?',domain:'mathematical_field_model',control_model:control,execution_status:'research-template',variants:[],expected_structural_effects:['New quantitative objects may be proposed only with explicit definitions, sensitivity analysis, and null comparison.']})
  ];
}

export function hypothesisById(registry,id){return (registry||[]).find(h=>h.hypothesis_id===id)||null;}
