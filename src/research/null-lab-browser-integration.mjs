import {runStandardNullSuite,runCandidateNullSuite} from './null-model-laboratory.mjs';
import {buildNullLabViewModel} from './null-lab-view-model.mjs';
import {buildDiscoveryCandidateRegistry} from './discovery-candidate-registry.mjs';

export const NULL_LAB_BROWSER_VERSION='0.4.6';
export const NULL_LAB_BROWSER_MODEL='naf.research.null_lab_browser.v0.4.6';

const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const short=x=>String(x||'').replace(/^naf\.null\./,'').replace(/\.v\d+$/,'');
let rendering=false;

function context(){return globalThis.__NAF_RESEARCH_CONTEXT__||null;}
function result(){return globalThis.__NAF_V046_NULL_RESULT__||null;}
function researchOpen(){return typeof document!=='undefined'&&document.body?.dataset?.aperture==='research';}

export function runBrowserNullSuite({iterations=256,seed='naf-v046-browser'}={}){
  const ctx=context();
  if(!ctx?.analysis)throw new Error('Research chart context is not available.');
  const args={analysis:ctx.analysis,graph:ctx.graph,river:ctx.river,conditions:ctx.conditions,discoveries:ctx.discoveries,iterations:Number(iterations),seed:String(seed)};
  const nulls=runStandardNullSuite(args),discovery=buildDiscoveryCandidateRegistry(ctx.discoveries);
  const candidate_nulls=(discovery.candidates||[]).map(candidate=>runCandidateNullSuite({candidate,...args}));
  const lab={model_id:'naf.research.lab.v0.4.6.browser',version:'0.4.6',discovery,nulls,candidate_nulls,null_policy:{population_frequency:'not measured by null models',interpretation:'withheld',reproducibility:'same source state + null-model registry version + metric registry version + iteration count + seed reproduces the result'}};
  globalThis.__NAF_V046_NULL_RESULT__=lab;
  renderNullLabPanels(true);
  return lab;
}

function networkMarkup(){
  const r=result(),vm=r?buildNullLabViewModel(r):null;
  if(!vm||!vm.rows.length)return `<h2>Null Model Laboratory <span class="tag disc">v0.4.6</span></h2><div class="call"><b>Compared with what?</b><br>Null simulations are opt-in. They do not run in Personal mode and do not measure real birth-chart population frequency.</div><div class="toolbar"><input id="v046NullSeed" value="naf-v046-browser" aria-label="Null seed" style="max-width:220px;background:#0b1117;color:#edf2f5;border:1px solid #293541;border-radius:6px;padding:7px"><button id="v046Run256">Run 256-iteration baselines</button><button id="v046Run1024">Run 1024-iteration baselines</button></div><div class="muted">Registered families: independent geometry · label permutation · degree-preserving aspect rewiring · topic/routing permutation. Interpretation remains withheld.</div>`;
  return `<h2>Null Model Laboratory <span class="tag disc">v0.4.6</span></h2><div class="summary"><div><b>${vm.summary.test_count}</b><span>null tests</span></div><div><b>${vm.summary.iterations_per_test}</b><span>iterations / test</span></div><div><b>${esc(vm.summary.interpretation)}</b><span>interpretation</span></div><div><b>${esc(vm.summary.population_frequency)}</b><span>population frequency</span></div></div><div class="call"><b>Scope.</b><br>A small p-value means only that a registered metric is extreme under its named counterfactual. It is not an astrological-validation probability and it is not population rarity.</div><table><thead><tr><th>Null</th><th>Metric</th><th>Observed</th><th>Null mean</th><th>Percentile</th><th>raw p</th><th>FDR p</th></tr></thead><tbody>${vm.rows.map(x=>`<tr><td>${esc(short(x.null_model_id))}</td><td>${esc(x.metric_label)}</td><td>${esc(x.observed)}</td><td>${esc(x.null_mean)}</td><td>${x.percentile==null?'—':(100*x.percentile).toFixed(1)+'%'}</td><td>${esc(x.raw_p)}</td><td>${esc(x.adjusted_p)}</td></tr>`).join('')}</tbody></table><h3>Discovery candidates</h3>${vm.candidate_rows.map(c=>`<div class="fact"><span><code>${esc(c.candidate_id)}</code></span><span>${esc(c.status)} · ${c.test_count} compatible tests · interpretation ${esc(c.interpretation)}</span></div>`).join('')||'<div class="muted">No compatible candidate null plans for this chart.</div>'}<div class="toolbar"><button id="v046Rerun">Re-run baselines</button></div>`;
}

function proofMarkup(){
  const r=result(),vm=r?buildNullLabViewModel(r):null;
  if(!vm||!vm.rows.length)return `<h2>Null-test provenance <span class="tag disc">v0.4.6</span></h2><p class="muted">Run the Null Model Laboratory from Research → Network to create a reproducible experiment record.</p>`;
  return `<h2>Null-test provenance <span class="tag disc">v0.4.6</span></h2>${vm.rows.map(x=>`<details class="testimony"><summary><b>${esc(x.metric_label)}</b> · ${esc(short(x.null_model_id))} · FDR p ${esc(x.adjusted_p)}</summary><div class="proof">test_id: ${esc(x.test_id)}\nsource_state: ${esc(x.source_state_fingerprint)}\nnull_registry: ${esc(x.null_model_registry)} @ ${esc(x.null_model_registry_version)}\nmetric_registry: ${esc(x.metric_registry)} @ ${esc(x.metric_registry_version)}\nseed: ${esc(x.seed)}\ndistribution_digest: ${esc(x.digest)}\nobserved: ${esc(x.observed)}\nnull_mean: ${esc(x.null_mean)}\nnull_sd: ${esc(x.null_sd)}\nempirical_percentile: ${esc(x.percentile)}\nraw_p: ${esc(x.raw_p)}\nadjusted_p: ${esc(x.adjusted_p)}\ninterpretation: withheld</div><div class="fact"><span class="muted">Preserves</span><span>${x.preserves.map(esc).join(' · ')}</span></div><div class="fact"><span class="muted">Randomizes</span><span>${x.randomizes.map(esc).join(' · ')}</span></div><div class="fact"><span class="muted">Can test</span><span>${x.can_test.map(esc).join(' · ')}</span></div><div class="fact"><span class="muted">Cannot test</span><span>${x.cannot_test.map(esc).join(' · ')}</span></div></details>`).join('')}`;
}

function wire(panel){
  const seed=()=>document.getElementById('v046NullSeed')?.value||'naf-v046-browser';
  panel.querySelector('#v046Run256')?.addEventListener('click',()=>runBrowserNullSuite({iterations:256,seed:seed()}),{once:true});
  panel.querySelector('#v046Run1024')?.addEventListener('click',()=>runBrowserNullSuite({iterations:1024,seed:seed()}),{once:true});
  panel.querySelector('#v046Rerun')?.addEventListener('click',()=>{globalThis.__NAF_V046_NULL_RESULT__=null;renderNullLabPanels(true);});
}

export function renderNullLabPanels(force=false){
  if(typeof document==='undefined'||rendering||!researchOpen())return false;
  rendering=true;
  try{
    const network=document.getElementById('networkContent'),proof=document.getElementById('proofContent');
    if(network){let p=document.getElementById('v046NullLabPanel');if(!p){p=document.createElement('div');p.id='v046NullLabPanel';p.className='researchOnly panel';network.appendChild(p);}if(force||!p.dataset.ready){p.innerHTML=networkMarkup();p.dataset.ready='1';wire(p);}}
    if(proof){let p=document.getElementById('v046NullProofPanel');if(!p){p=document.createElement('div');p.id='v046NullProofPanel';p.className='researchOnly panel';proof.appendChild(p);}if(force||!p.dataset.ready){p.innerHTML=proofMarkup();p.dataset.ready='1';}}
    return true;
  }finally{rendering=false;}
}

function schedule(){if(typeof document==='undefined')return;setTimeout(()=>renderNullLabPanels(false),0);}
export function notifyResearchContext(){schedule();}

if(typeof document!=='undefined'){
  const boot=()=>{new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['data-aperture']});schedule();};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
}
