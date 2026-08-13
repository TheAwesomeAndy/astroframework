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
function ensurePanel(){const host=document.querySelector('#network .scroll');if(!host)return null;let p=document.getElementById('researchLabPanel');if(!p){p=make('div');p.id='researchLabPanel';host.appendChild(p);}return p;}
function renderPanel(){const p=ensurePanel();if(!p)return;p.replaceChildren();p.style.display=aperture==='research'?'block':'none';if(aperture!=='research'||!lab)return;const intro=make('div','Operational is the immutable control. Experimental models are named hypotheses. Discovery may surface unnamed structures that were never pre-registered.','call');p.append(intro);const head=make('div',null,'summary');for(const [v,label] of [[lab.hypothesis_registry?.length||0,'hypotheses'],[lab.experiments?.length||0,'experiments'],[lab.discovery_candidates?.candidates?.length||0,'candidates'],[lab.integrity?.operational_isolation_pass?'PASS':'FAIL','isolation']]){const d=make('div');d.append(make('b',v));d.append(make('span',label));head.append(d);}p.append(head);const ex=make('div',null,'panel');ex.append(make('h2','Controlled model comparisons'));for(const x of lab.experiments||[])ex.append(make('div',`${x.hypothesis_id} · ${x.execution_status} · overlay ${x.variant?.overlay_count||0} · structural delta ${x.comparison?.structural_change_count||0} · isolation ${x.isolation?.pass?'PASS':'FAIL'}`,'research-regime-card'));p.append(ex);const cand=make('div',null,'panel');cand.append(make('h2','Open discovery candidates'));cand.append(make('div','Candidate IDs describe mathematical detections, not established astrological meanings. Null comparison is required before rarity language.','call'));for(const c of (lab.discovery_candidates?.candidates||[]).slice(0,18))cand.append(make('div',`${c.candidate_id} · ${c.title} · null ${c.status_vector?.null_comparison}`,'research-candidate'));p.append(cand);const life=make('div',null,'panel');life.append(make('h2','Research lifecycle'));life.append(make('div',(lab.lifecycle||[]).join(' → '),'proof'));p.append(life);}
export function setAperture(mode){aperture=mode==='research'?'research':'personal';applyAperture();}
