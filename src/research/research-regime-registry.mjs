export const RESEARCH_REGIME_VERSION='0.4.5';
export const RESEARCH_REGIME_MODEL='naf.research.regime_registry.v0.4.5';

export const REGIMES=Object.freeze({
  OPERATIONAL:'operational',
  EXPERIMENTAL:'experimental',
  DISCOVERY:'discovery'
});

export const CONSTITUTION=Object.freeze([
  'One astronomical state, many explicit models.',
  'Tradition is prior knowledge, not unquestionable truth.',
  'Experimental models never silently modify operational models.',
  'Mathematical detection precedes interpretation.',
  'Structural novelty is not evidence of significance.',
  'Every research claim carries provenance, assumptions, and model identity.',
  'Null comparison precedes rarity language.',
  'The absence of an existing astrological name does not imply the absence of a real structure.',
  'The presence of a mathematically identifiable structure does not imply astrological meaning.',
  'The purpose of the instrument is both to illuminate inherited astrology and to make previously invisible questions askable.',
  'Noetic Atlas must remain capable of surprising its creators.'
]);

export const DEFAULT_MODEL_REGISTRY=Object.freeze([
  {
    model_id:'naf.model.operational.hellenistic_traditional.v1',
    version:'1',
    regime:REGIMES.OPERATIONAL,
    status:'active-default',
    label:'Hellenistic / traditional operational model',
    purpose:'Reproducible default model for Whole-Sign houses, traditional domicile rulership, major aspects, lots, and condition.',
    contamination_rule:'May not be mutated by experimental or discovery modules.'
  },
  {
    model_id:'naf.model.experimental.modern_outer_corulership.v1',
    version:'1',
    regime:REGIMES.EXPERIMENTAL,
    status:'active-overlay',
    label:'Modern outer co-rulership overlay',
    purpose:'Compare Scorpio/Mars+Pluto, Aquarius/Saturn+Uranus, and Pisces/Jupiter+Neptune without rewriting traditional routing.',
    contamination_rule:'Overlay only; traditional dispositor edges remain unchanged.'
  },
  {
    model_id:'naf.model.experimental.expanded_aspect_family.v1',
    version:'1',
    regime:REGIMES.EXPERIMENTAL,
    status:'active-overlay',
    label:'Expanded aspect-family projection',
    purpose:'Add named supplemental aspect families under an explicit orb policy.',
    contamination_rule:'Supplemental edges may not silently enter the canonical major-aspect graph.'
  },
  {
    model_id:'naf.model.discovery.cross_layer.v1',
    version:'1',
    regime:REGIMES.DISCOVERY,
    status:'active-no-null-model',
    label:'Cross-layer discovery search space',
    purpose:'Detect mathematically reproducible structures not necessarily represented in the inherited astrological vocabulary.',
    contamination_rule:'Detection may not be promoted to significance, rarity, doctrine, or operational interpretation without explicit testing.'
  }
]);

export function getModel(modelId, registry=DEFAULT_MODEL_REGISTRY){
  return registry.find(x=>x.model_id===modelId)||null;
}

export function annotateResearchObject(object,{model_id,regime,hypothesis_id=null,epistemic_state=null}={}){
  if(!object||typeof object!=='object')throw new Error('annotateResearchObject requires an object');
  if(!Object.values(REGIMES).includes(regime))throw new Error(`Unknown research regime: ${regime}`);
  if(!model_id)throw new Error('model_id is required');
  return {...object,research_identity:{model_id,regime,hypothesis_id,epistemic_state,registry_model:RESEARCH_REGIME_MODEL,registry_version:RESEARCH_REGIME_VERSION}};
}

export function assertRegimeIsolation({operational,experimental}={}){
  if(!operational||!experimental)return {pass:false,reasons:['Both operational and experimental snapshots are required.']};
  const keys=['astronomical_fingerprint','whole_sign_fingerprint','operational_dispositor_fingerprint'];
  const reasons=[];
  for(const k of keys){
    if(operational[k]!=null&&experimental[k]!=null&&operational[k]!==experimental[k])reasons.push(`${k} changed across experimental overlay`);
  }
  return {pass:reasons.length===0,reasons};
}
