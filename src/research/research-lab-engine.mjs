import {DEFAULT_MODEL_REGISTRY,REGIMES} from './research-regime-registry.mjs';
import {DEFAULT_HYPOTHESIS_REGISTRY} from './research-hypothesis-pack.mjs';
import {buildOperationalModelSnapshot} from './model-comparison-engine.mjs';
import {buildDiscoveryCandidateSet} from './discovery-candidate-registry.mjs';

export const RESEARCH_LAB_VERSION='0.4.5';
export const RESEARCH_LAB_MODEL='naf.research.lab.v0.4.5';

export function buildResearchLab({analysis,graph,river,conditions,discoveries,experiments=[]}={}){
  if(!analysis)throw new Error('buildResearchLab requires analysis');
  const operational_snapshot=buildOperationalModelSnapshot({analysis,graph,river,conditions});
  const isolation_failures=(experiments||[]).filter(x=>x?.isolation?.pass===false).map(x=>x.hypothesis_id||x.model_id||'unknown');
  return {
    model_id:RESEARCH_LAB_MODEL,
    version:RESEARCH_LAB_VERSION,
    regime_architecture:{operational:REGIMES.OPERATIONAL,experimental:REGIMES.EXPERIMENTAL,discovery:REGIMES.DISCOVERY},
    model_registry:DEFAULT_MODEL_REGISTRY,
    hypothesis_registry:DEFAULT_HYPOTHESIS_REGISTRY,
    operational_snapshot,
    experiments:[...(experiments||[])],
    discovery_candidates:buildDiscoveryCandidateSet(discoveries?.findings||[]),
    integrity:{operational_isolation_pass:isolation_failures.length===0,isolation_failures},
    lifecycle:['Detect','Describe','Compare','Test','Replicate','Interpret'],
    rules:['Operational state is immutable under experiments.','Discovery may return unnamed structures that were never pre-registered as hypotheses.','No rarity or significance language is allowed before explicit baseline comparison.','Noetic Atlas must remain capable of surprising its creators.']
  };
}
