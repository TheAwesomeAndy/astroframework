import {buildOperationalModelSnapshot} from './model-comparison-engine.mjs';
import {buildCurrentExperimentSuite} from './current-experiment-suite.mjs';
import {buildResearchLab} from './research-lab-engine.mjs';
export const RESEARCH_APERTURE_UI_VERSION='0.4.5';
let lab=null,aperture='personal';
const make=(tag,text,cls='')=>{const e=document.createElement(tag);if(text!=null)e.textContent=String(text);if(cls)e.className=cls;return e;};
export function buildApertureLab(state){
  if(!state?.analysis)return null;
  const operational=buildOperationalModelSnapshot({analysis:state.analysis,graph:state.graph,river:state.river,conditions:state.conditions});
  const suite=buildCurrentExperimentSuite({analysis:state.analysis,modern:state.modern,extended:state.extended,operational_snapshot:operational});
  lab=buildResearchLab({analysis:state.analysis,graph:state.graph,river:state.river,conditions:state.conditions,discoveries:state.discoveries,experiments:suite.experiments});
  return lab;
}
export function getApertureLab(){return lab;}
function ensureControls(){
  const header=document.querySelector('header');if(!header||document.getElementById('researchMode'))return;
  const wrap=make('div');wrap.className='research-aperture';
  const personal=make('button','Personal'),research=make('button','Research');personal.id='personalMode';research.id='researchMode';personal.classList.add('active');
  personal.onclick=()=>setAperture('personal');research.onclick=()=>setAperture('research');wrap.append(personal,research);header.insertBefore(wrap,header.querySelector('nav')||null);
}
export function setAperture(mode){aperture=mode==='research'?'research':'personal';applyAperture();}
