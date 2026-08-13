import {buildOperationalModelSnapshot} from './model-comparison-engine.mjs';
import {buildCurrentExperimentSuite} from './current-experiment-suite.mjs';
import {buildResearchLab} from './research-lab-engine.mjs';
export const RESEARCH_APERTURE_UI_VERSION='0.4.5';
let lab=null;
export function buildApertureLab(state){
  if(!state?.analysis)return null;
  const operational=buildOperationalModelSnapshot({analysis:state.analysis,graph:state.graph,river:state.river,conditions:state.conditions});
  const suite=buildCurrentExperimentSuite({analysis:state.analysis,modern:state.modern,extended:state.extended,operational_snapshot:operational});
  lab=buildResearchLab({analysis:state.analysis,graph:state.graph,river:state.river,conditions:state.conditions,discoveries:state.discoveries,experiments:suite.experiments});
  return lab;
}
export function getApertureLab(){return lab;}
