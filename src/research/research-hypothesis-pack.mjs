import {REGIMES} from './research-regime-registry.mjs';

export const HYPOTHESIS_PACK_VERSION='0.4.5';
export const HYPOTHESIS_PACK_MODEL='naf.research.hypothesis_pack.v0.4.5';

export const DEFAULT_STATUS_VECTOR=Object.freeze({
  geometry:'unknown',
  derivation:'pending',
  historical_analogue:'unknown',
  population_frequency:'unknown',
  null_comparison:'not-run',
  phenomenological_association:'unassessed',
  replication:'none',
  interpretation:'withheld'
});

export function createHypothesisPack({
  hypothesis_id,
  title,
  proposition,
  control_model,
  variants=[],
  expected_structural_effects=[],
  sources=[],
  cohort={status:'none'},
  null_model={status:'not-run'},
  execution_status='registered-not-executed',
  status_vector={}
}={}){
  if(!hypothesis_id)throw new Error('hypothesis_id is required');
  if(!title||!proposition)throw new Error('title and proposition are required');
  if(!control_model)throw new Error('control_model is required');
  return {
    model_id:HYPOTHESIS_PACK_MODEL,
    version:HYPOTHESIS_PACK_VERSION,
    regime:REGIMES.EXPERIMENTAL,
    hypothesis_id,
    title,
    proposition,
    control_model,
    variants:variants.map(v=>({execution_status:'registered-not-executed',...v})),
    expected_structural_effects:[...expected_structural_effects],
    sources:[...sources],
    cohort:{status:'none',...cohort},
    null_model:{status:'not-run',...null_model},
    execution_status,
    status_vector:{...DEFAULT_STATUS_VECTOR,...status_vector},
    contamination_rule:'Experimental results may not mutate or overwrite the Operational model.',
    significance_rule:'No rarity or significance language is allowed before an explicit baseline/null comparison.'
  };
}

export const CERES_TAURUS_HYPOTHESIS=createHypothesisPack({
  hypothesis_id:'CERES_TAURUS_001',
  title:'Ceres–Taurus rulership/significator family',
  proposition:'Ceres may function as a Taurus significator, secondary ruler, co-ruler, or alternative ruler under explicitly separated experimental variants.',
  control_model:'naf.model.operational.hellenistic_traditional.v1',
  variants:[
    {variant_id:'T0',label:'Traditional control',routing:{Taurus:['Venus']},execution_status:'control'},
    {variant_id:'T1',label:'Secondary significator overlay',routing:{Taurus:['Venus']},overlay:{Taurus:['Ceres']},execution_status:'registered-executable-overlay'},
    {variant_id:'T2',label:'Venus + Ceres co-rulership hypothesis',routing:{Taurus:['Venus','Ceres']},execution_status:'registered-not-executed'},
    {variant_id:'T3',label:'Ceres primary alternative',routing:{Taurus:['Ceres']},execution_status:'registered-not-executed'}
  ],
  expected_structural_effects:[
    'T1 should not alter traditional dispositor routing; it can only add a tagged Taurus–Ceres comparison layer.',
    'T2 and T3 may alter dispositor edges, SCCs, basin membership, House River routes, bottlenecks, and downstream claims once an experimental multi-ruler router exists.'
  ],
  execution_status:'partially-executable',
  status_vector:{geometry:'conditional-on-Ceres-coordinate',derivation:'registered',interpretation:'withheld'}
});

export const MODERN_OUTER_CORULERS_HYPOTHESIS=createHypothesisPack({
  hypothesis_id:'MODERN_OUTER_CORULERS_001',
  title:'Modern outer co-rulership overlay',
  proposition:'Pluto, Uranus, and Neptune may be compared as modern outer co-rulers of Scorpio, Aquarius, and Pisces while retaining the traditional graph as control.',
  control_model:'naf.model.operational.hellenistic_traditional.v1',
  variants:[
    {variant_id:'M0',label:'Traditional control',execution_status:'control'},
    {variant_id:'M1',label:'Modern co-rulership overlay',execution_status:'executable'}
  ],
  expected_structural_effects:['No traditional dispositor edge changes.','Additional cross-model domicile and resonance observations may appear.'],
  execution_status:'executable',
  status_vector:{geometry:'verified-when-coordinates-present',derivation:'verified',interpretation:'exploratory'}
});

export const EXPANDED_ASPECTS_HYPOTHESIS=createHypothesisPack({
  hypothesis_id:'EXPANDED_ASPECTS_001',
  title:'Expanded aspect-family projection',
  proposition:'Supplemental aspect families may reveal reproducible cross-layer connections not visible in the canonical major-aspect graph.',
  control_model:'naf.model.operational.hellenistic_traditional.v1',
  variants:[
    {variant_id:'A0',label:'Canonical major aspects',execution_status:'control'},
    {variant_id:'A1',label:'Supplemental 30/45/72/135/144/150 degree family under named orb policy',execution_status:'executable'}
  ],
  expected_structural_effects:['Canonical major-aspect graph remains unchanged.','Supplemental edges and cross-basin bridge detections may appear under the named orb policy.'],
  execution_status:'executable',
  status_vector:{geometry:'verified',derivation:'verified',interpretation:'exploratory'}
});

export const DEFAULT_HYPOTHESIS_REGISTRY=Object.freeze([
  CERES_TAURUS_HYPOTHESIS,
  MODERN_OUTER_CORULERS_HYPOTHESIS,
  EXPANDED_ASPECTS_HYPOTHESIS
]);

export function getHypothesis(id,registry=DEFAULT_HYPOTHESIS_REGISTRY){return registry.find(x=>x.hypothesis_id===id)||null;}
