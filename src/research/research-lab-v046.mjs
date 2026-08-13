import {buildResearchLab as buildV045ResearchLab} from './research-lab-engine.mjs';
import {runStandardNullSuite,runCandidateNullSuite,NULL_LAB_MODEL} from './null-model-lab.mjs';
export const RESEARCH_LAB_V046_VERSION='0.4.6';
export const RESEARCH_LAB_V046_MODEL='naf.research.lab.v0.4.6';
export function buildResearchLabV046(args={}){
  const base=buildV045ResearchLab(args),iterations=Number(args.null_iterations||0),seed=args.null_seed||'naf-v046';
  const nulls=iterations>0?runStandardNullSuite({analysis:args.analysis,graph:args.graph,river:args.river,discoveries:args.discoveries,iterations,seed}):{model_id:NULL_LAB_MODEL,version:'0.4.6',status:'not-run',tests:[],reason:'Null simulations are opt-in; Personal mode remains computation-light.'};
  const candidate_nulls=iterations>0?base.discovery.candidates.map(candidate=>runCandidateNullSuite({candidate,analysis:args.analysis,graph:args.graph,river:args.river,discoveries:args.discoveries,iterations,seed})):[];
  return {...base,model_id:RESEARCH_LAB_V046_MODEL,version:RESEARCH_LAB_V046_VERSION,nulls,candidate_nulls,null_policy:{population_frequency:'not measured by null models',interpretation:'withheld',reproducibility:'same source state + model version + metric version + iteration count + seed must reproduce the same result'}};
}
