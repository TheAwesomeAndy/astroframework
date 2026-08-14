import {functionalBasins,maxHouseRouteCapture,motifIntersectionCount,multiRoleCount} from './null-state.mjs';

export const NULL_METRIC_REGISTRY_VERSION='0.4.6';
export const NULL_METRIC_REGISTRY_MODEL='naf.research.null_metric_registry.v0.4.6';
function hashText(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)>>>0}return h.toString(16).padStart(8,'0').toUpperCase()}
function basinConcentration(state){const bs=functionalBasins(state).basins;return bs.reduce((s,b)=>s+b.basin_fraction*b.basin_fraction,0)}
function terminalBasinCount(state){return functionalBasins(state).basins.length}
function routeCapture(state){return maxHouseRouteCapture(state).fraction}
function motifIntersections(state){return motifIntersectionCount(state)}
function multiRoles(state){return multiRoleCount(state)}
const specs=[
 {metric_id:'naf.metric.dispositor.basin_concentration_hhi',version:'1.0.0',label:'Terminal-basin concentration',definition:'Herfindahl concentration of classical dispositor terminal-basin fractions.',formula:'sum_b p_b^2',direction:'upper_tail',normalization:'[1/k,1] for k nonempty basins; 1 means all routes drain to one terminal basin.',admissible_null_models:['N_G','N_T'],candidate_kinds:['conditioned_terminal','classical_basin_partition'],evaluate:basinConcentration},
 {metric_id:'naf.metric.dispositor.terminal_basin_count',version:'1.0.0',label:'Terminal-basin count',definition:'Number of terminal strongly connected components in the classical dispositor functional digraph.',formula:'|C_terminal|',direction:'two_sided',normalization:'integer count',admissible_null_models:['N_G','N_T'],candidate_kinds:['classical_basin_partition','house_terminal_partition'],evaluate:terminalBasinCount},
 {metric_id:'naf.metric.house.max_route_capture',version:'1.0.0',label:'Maximum House River route capture',definition:'Largest fraction of the twelve Whole-Sign house-ruler routes traversing the same directed dispositor edge.',formula:'max_e count(house routes traversing e) / number of routed houses',direction:'upper_tail',normalization:'fraction [0,1]',admissible_null_models:['N_G','N_T'],candidate_kinds:['house_convergence','house_terminal_partition'],evaluate:routeCapture},
 {metric_id:'naf.metric.cross_layer.motif_intersection_count',version:'1.0.0',label:'Recognized motif intersection count',definition:'Count of recognized major-aspect triangle motifs that intersect independently computed relational or compound-condition structure.',formula:'count(motif where relational_pair_subset(motif) OR compound_participant_intersects(motif))',direction:'upper_tail',normalization:'integer count',admissible_null_models:['N_L','N_D'],candidate_kinds:['motif_cross_layer'],evaluate:motifIntersections},
 {metric_id:'naf.metric.cross_layer.multi_role_count',version:'1.0.0',label:'Multi-role node count',definition:'Count of aspect articulation nodes that are also a nonterminal dispositor routing node and/or carry non-neutral compound condition.',formula:'count(p in articulation_points where role_count(p)>=2)',direction:'upper_tail',normalization:'integer count',admissible_null_models:['N_L','N_D'],candidate_kinds:['multi_role'],evaluate:multiRoles}
];
function publicDef(s){const implementation_hash=hashText([s.metric_id,s.version,s.formula,s.direction,s.normalization,s.evaluate.toString()].join('|'));return Object.freeze({metric_id:s.metric_id,version:s.version,label:s.label,definition:s.definition,formula:s.formula,direction:s.direction,normalization:s.normalization,admissible_null_models:Object.freeze([...s.admissible_null_models]),candidate_kinds:Object.freeze([...s.candidate_kinds]),implementation_hash,hash_algorithm:'fnv1a32'})}
const byId=Object.fromEntries(specs.map(s=>[s.metric_id,s]));
export const NULL_METRICS=Object.freeze(specs.map(publicDef));
export function getNullMetricDefinition(metricId){const d=NULL_METRICS.find(x=>x.metric_id===metricId);if(!d)throw new Error(`Unknown null metric: ${metricId}`);return d}
export function evaluateNullMetric(metricId,state){const s=byId[metricId];if(!s)throw new Error(`Unknown null metric: ${metricId}`);const v=Number(s.evaluate(state));if(!Number.isFinite(v))throw new Error(`Null metric ${metricId} returned a non-finite value`);return v}
