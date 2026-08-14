import {buildResearchLab as buildV045ResearchLab} from './research-lab-engine.mjs';
import {runStandardNullSuite,runCandidateNullSuite,NULL_LAB_MODEL} from './null-model-laboratory.mjs';
export const RESEARCH_LAB_V046_VERSION='0.4.6';
export const RESEARCH_LAB_V046_MODEL='naf.research.lab.v0.4.6';
function applyCandidateNullStatus(candidate,result){if(!result?.tests?.length)return candidate;const status={...(candidate?.model_identity?.status||{}),null_comparison:'tested',population_frequency:'unknown',replication:'none',interpretation:'withheld'};return {...candidate,model_identity:{...(candidate.model_identity||{}),status},promotion_state:'null-tested-awaiting-population-and-replication',null_comparison_summary:{status:'tested',test_count:result.tests.length,min_raw_p:Math.min(...result.tests.map(t=>t.raw_p)),min_adjusted_p:Math.min(...result.tests.map(t=>t.adjusted_p)),source_state_fingerprint:result.source_state_fingerprint,interpretation:'withheld'}};}
export function buildResearchLabV046(args={}){
  const base=buildV045ResearchLab(args),iterations=Number(args.null_iterations||0),seed=args.null_seed||'naf-v046';
  const suiteArgs={analysis:args.analysis,graph:args.graph,river:args.river,conditions:args.conditions,discoveries:args.discoveries,iterations,seed};
  const nulls=iterations>0?runStandardNullSuite(suiteArgs):{model_id:NULL_LAB_MODEL,version:'0.4.6',status:'not-run',tests:[],reason:'Null simulations are opt-in; Personal mode remains computation-light.'};
  const candidate_nulls=iterations>0?base.discovery.candidates.map(candidate=>runCandidateNullSuite({candidate,...suiteArgs})):[];
  const byCandidate=new Map(candidate_nulls.map(x=>[x.candidate_id,x])),discovery={...base.discovery,candidates:base.discovery.candidates.map(c=>applyCandidateNullStatus(c,byCandidate.get(c.candidate_id)))};
  return {...base,discovery,model_id:RESEARCH_LAB_V046_MODEL,version:RESEARCH_LAB_V046_VERSION,nulls,candidate_nulls,null_policy:{population_frequency:'not measured by null models',interpretation:'withheld',reproducibility:'same source state + null-model registry version + metric registry version + iteration count + seed must reproduce the same result',status_rule:'Executing a compatible null updates only the null_comparison dimension to tested; population frequency, replication, and interpretation remain unresolved.'}};
}
