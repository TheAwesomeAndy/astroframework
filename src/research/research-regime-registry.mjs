export const RESEARCH_REGIME_VERSION='0.4.5';
export const RESEARCH_REGIME_MODEL='naf.research.regime_registry.v0.4.5';

export const RESEARCH_REGIMES=Object.freeze({
  operational:Object.freeze({id:'operational',purpose:'Reproducible techniques inside an explicitly named astrological model.',contamination_rule:'Experimental and discovery objects may reference operational facts but may not overwrite or silently alter them.'}),
  experimental:Object.freeze({id:'experimental',purpose:'Named and versioned hypotheses evaluated against an operational control model.',contamination_rule:'Every result must carry hypothesis_id and model identity; activation is explicit and reversible.'}),
  discovery:Object.freeze({id:'discovery',purpose:'Search for unnamed but mathematically reproducible structures.',contamination_rule:'Detection precedes naming; null comparison precedes rarity or significance language.'})
});

export const RESEARCH_STATUS_KEYS=Object.freeze([
  'geometry','derivation','historical_analogue','population_frequency',
  'null_comparison','phenomenological_association','replication','interpretation'
]);

export function createResearchStatus(overrides={}){
  const base={geometry:'unknown',derivation:'unknown',historical_analogue:'unknown',population_frequency:'unknown',null_comparison:'pending',phenomenological_association:'exploratory',replication:'none',interpretation:'provisional'};
  return Object.fromEntries(RESEARCH_STATUS_KEYS.map(k=>[k,overrides[k]??base[k]]));
}

export function createModelIdentity({regime='operational',model_id,version=RESEARCH_REGIME_VERSION,hypothesis_id=null,tradition=null,status=null}={}){
  if(!RESEARCH_REGIMES[regime])throw new Error(`Unknown research regime: ${regime}`);
  if(!model_id)throw new Error('model_id is required');
  if(regime==='experimental'&&!hypothesis_id)throw new Error('experimental model identity requires hypothesis_id');
  if(regime==='operational'&&hypothesis_id)throw new Error('operational model identity may not carry hypothesis_id');
  return Object.freeze({registry_model:RESEARCH_REGIME_MODEL,regime,model_id,version,hypothesis_id,tradition,status:status||createResearchStatus({geometry:'verified',derivation:'verified'})});
}

export function assertNoRegimeContamination({operational_before,operational_after,experimental_results=[]}={}){
  const a=JSON.stringify(operational_before??null),b=JSON.stringify(operational_after??null);
  const mutations=[];
  if(a!==b)mutations.push('operational_state_changed');
  for(const r of experimental_results||[]){if(r?.model_identity?.regime!=='experimental')mutations.push(`untyped_experimental_result:${r?.id||'unknown'}`);if(!r?.model_identity?.hypothesis_id)mutations.push(`missing_hypothesis_id:${r?.id||'unknown'}`)}
  return {pass:mutations.length===0,mutations,rule:'Experimental and discovery layers may only produce projections/deltas over the operational state.'};
}
