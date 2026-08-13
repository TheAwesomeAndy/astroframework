import {createSeededRng} from './deterministic-prng.mjs';
import {NULL_MODELS,getNullModel} from './null-model-registry.mjs';
import {metricDefinition,buildObservedMetricVector} from './null-metric-registry.mjs';
import {sampleIndependentGeometry,sampleLabelPermutation,sampleTopicPermutation} from './topology-null-samplers.mjs';
import {sampleNetworkControl} from './network-null-sampler.mjs';
import {createModelIdentity,createResearchStatus} from './research-regime-registry.mjs';

export const NULL_LAB_VERSION='0.4.6';
export const NULL_LAB_MODEL='naf.research.null_lab.v0.4.6';
export const NULL_TEST_MODEL='naf.research.null_test.v0.4.6';

export const NULL_MODEL_DETAILS=Object.freeze({
  [NULL_MODELS.geometric.id]:{preserves:['object inventory','Ascendant sign','traditional domicile rule','Whole-Sign house-sign sequence'],changes:['classical zodiacal longitudes'],can_test:['rulership and House-River concentration under independent geometric placement'],cannot_test:['real ephemeris frequency','real birth-chart population frequency','astrological meaning']},
  [NULL_MODELS.label.id]:{preserves:['observed classical longitude multiset','Ascendant sign'],changes:['planet labels assigned to observed classical longitudes'],can_test:['dependence of rulership topology on planetary identity'],cannot_test:['astronomical plausibility of relabeled planets','population frequency','astrological meaning']},
  [NULL_MODELS.network.id]:{preserves:['aspect graph nodes','edge count','degree sequence'],changes:['edge pairing'],can_test:['triangle and articulation structure conditional on degree sequence'],cannot_test:['zodiac geometry','aspect type/orb meaning','rulership topology','astrological meaning']},
  [NULL_MODELS.topic.id]:{preserves:['observed classical dispositorship','terminal basins','multiset of house entry rulers'],changes:['house/topic assignment of entry-ruler instances'],can_test:['topic concentration conditional on the observed planetary ruler graph'],cannot_test:['whether the planetary graph is itself unusual','astronomical geometry','astrological meaning']}
});

const MODEL_METRICS=Object.freeze({
  [NULL_MODELS.geometric.id]:['house_basin_entropy','house_basin_concentration','largest_house_basin_fraction','terminal_basin_count','max_route_capture'],
  [NULL_MODELS.label.id]:['house_basin_entropy','house_basin_concentration','largest_house_basin_fraction','terminal_basin_count','max_route_capture'],
  [NULL_MODELS.network.id]:['aspect_triangle_count','aspect_articulation_count'],
  [NULL_MODELS.topic.id]:['house_basin_entropy','house_basin_concentration','largest_house_basin_fraction','max_route_capture']
});

function sample(modelId,analysis,rng){const family=getNullModel(modelId).family;if(family==='geometric')return sampleIndependentGeometry(analysis,rng);if(family==='label_permutation')return sampleLabelPermutation(analysis,rng);if(family==='topic_routing')return sampleTopicPermutation(analysis,rng);if(family==='network_rewire')return sampleNetworkControl(analysis,rng);throw new Error(`No sampler for ${modelId}`);}
const mean=a=>a.length?a.reduce((s,x)=>s+x,0)/a.length:0;
const sd=a=>{if(a.length<2)return 0;const m=mean(a);return Math.sqrt(a.reduce((s,x)=>s+(x-m)*(x-m),0)/(a.length-1));};
const quantile=(a,q)=>{if(!a.length)return null;const s=[...a].sort((x,y)=>x-y),p=(s.length-1)*q,i=Math.floor(p),f=p-i;return s[i+1]!==undefined?s[i]+f*(s[i+1]-s[i]):s[i];};
function empirical(values,observed,direction){const n=values.length,le=values.filter(x=>x<=observed).length,ge=values.filter(x=>x>=observed).length;if(direction==='low_is_concentrated')return (1+le)/(n+1);if(direction==='two_sided')return Math.min(1,2*Math.min((1+le)/(n+1),(1+ge)/(n+1)));return (1+ge)/(n+1);}
function percentile(values,observed){return values.length?values.filter(x=>x<=observed).length/values.length:null;}
function digest(values){let h=2166136261>>>0;for(const x of values){const s=Number(x).toFixed(8);for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0;}}return h.toString(16).padStart(8,'0');}

export function runNullTest({analysis,graph=null,river=null,discoveries=null,target_id='chart',model_id,metric_id,iterations=512,seed='naf-v046',observed_metrics=null}={}){
  if(!analysis)throw new Error('analysis is required');const allowed=MODEL_METRICS[model_id]||[];if(!allowed.includes(metric_id))throw new Error(`${metric_id} is not registered for ${model_id}`);
  const metric=metricDefinition(metric_id),obs=observed_metrics||buildObservedMetricVector({analysis,graph,river,discoveries}),observed=Number(obs[metric_id]);if(!Number.isFinite(observed))throw new Error(`Observed metric unavailable: ${metric_id}`);
  const effectiveSeed=`${seed}|${model_id}|${metric_id}|${target_id}`,rng=createSeededRng(effectiveSeed),values=[];
  for(let i=0;i<iterations;i++){const v=Number(sample(model_id,analysis,rng)[metric_id]);if(Number.isFinite(v))values.push(v);}
  const mu=mean(values),sigma=sd(values),raw_p=empirical(values,observed,metric.direction),q=percentile(values,observed),details=NULL_MODEL_DETAILS[model_id];
  return {id:`nulltest:${target_id}:${model_id}:${metric_id}`,model_id:NULL_TEST_MODEL,version:NULL_LAB_VERSION,target_id,null_model_id:model_id,metric_id,metric_label:metric.label,metric_formula:metric.formula,seed:effectiveSeed,n_iterations:iterations,n_valid:values.length,preserved_properties:details.preserves,randomized_properties:details.changes,what_this_null_can_test:details.can_test,what_this_null_cannot_test:details.cannot_test,observed_value:observed,null_distribution_summary:{mean:mu,sd:sigma,min:values.length?Math.min(...values):null,q05:quantile(values,.05),median:quantile(values,.5),q95:quantile(values,.95),max:values.length?Math.max(...values):null,digest:digest(values)},empirical_percentile:q,raw_p,adjusted_p:null,correction_family:null,correction_method:null,effect_position:{z:sigma?((observed-mu)/sigma):null},status:'complete',interpretive_limit:'A null comparison evaluates extremity under one declared counterfactual. It does not establish astrological meaning, causation, or population rarity.',model_identity:createModelIdentity({regime:'discovery',model_id:NULL_TEST_MODEL,status:createResearchStatus({geometry:'verified',derivation:'verified',null_comparison:'tested',population_frequency:'unknown',replication:'none',interpretation:'withheld'})})};
}

export function applyBenjaminiHochberg(tests,{family='v046-null-suite'}={}){const completed=tests.filter(t=>Number.isFinite(t.raw_p)),m=completed.length,sorted=[...completed].sort((a,b)=>a.raw_p-b.raw_p);let prev=1;for(let i=m-1;i>=0;i--){const rank=i+1,q=Math.min(prev,sorted[i].raw_p*m/rank);sorted[i].adjusted_p=Math.min(1,q);sorted[i].correction_family=family;sorted[i].correction_method='Benjamini-Hochberg FDR';prev=q;}return tests;}

export function runStandardNullSuite({analysis,graph=null,river=null,discoveries=null,iterations=512,seed='naf-v046'}={}){const observed=buildObservedMetricVector({analysis,graph,river,discoveries}),tests=[];for(const model of Object.values(NULL_MODELS))for(const metric_id of MODEL_METRICS[model.id])tests.push(runNullTest({analysis,graph,river,discoveries,target_id:'chart',model_id:model.id,metric_id,iterations,seed,observed_metrics:observed}));return {model_id:NULL_LAB_MODEL,version:NULL_LAB_VERSION,iterations,seed,observed_metrics:observed,tests:applyBenjaminiHochberg(tests),interpretation_status:'withheld',population_frequency_status:'not_measured'};}

export function candidateNullPlan(candidate){const k=candidate?.temporary_label||'';if(k==='house_terminal_partition')return [{model_id:NULL_MODELS.geometric.id,metric_ids:['largest_house_basin_fraction','house_basin_concentration']},{model_id:NULL_MODELS.label.id,metric_ids:['largest_house_basin_fraction','house_basin_concentration']},{model_id:NULL_MODELS.topic.id,metric_ids:['largest_house_basin_fraction','house_basin_concentration']}];if(k.includes('bottleneck')||k.includes('house_convergence'))return [{model_id:NULL_MODELS.geometric.id,metric_ids:['max_route_capture']},{model_id:NULL_MODELS.label.id,metric_ids:['max_route_capture']},{model_id:NULL_MODELS.topic.id,metric_ids:['max_route_capture']}];return [];}

export function runCandidateNullSuite({candidate,analysis,graph=null,river=null,discoveries=null,iterations=512,seed='naf-v046'}={}){const observed=buildObservedMetricVector({analysis,graph,river,discoveries}),tests=[];for(const plan of candidateNullPlan(candidate))for(const metric_id of plan.metric_ids)tests.push(runNullTest({analysis,graph,river,discoveries,target_id:candidate.candidate_id,model_id:plan.model_id,metric_id,iterations,seed,observed_metrics:observed}));applyBenjaminiHochberg(tests,{family:candidate.candidate_id});return {candidate_id:candidate.candidate_id,status:tests.length?'null-tested':'no-compatible-null-yet',tests,interpretation:'withheld',population_frequency:'unknown'};}
