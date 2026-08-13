export const NULL_METRIC_VERSION='0.4.6';
export const NULL_METRIC_MODEL='naf.research.null_metric_registry.v0.4.6';

const log2=x=>Math.log(x)/Math.log(2);
const round=(x,n=6)=>Number.isFinite(x)?Number(x.toFixed(n)):x;

export const NULL_METRICS=Object.freeze({
  'house_basin_entropy':Object.freeze({id:'house_basin_entropy',label:'House-route basin entropy',scope:'house_routing',formula:'H=-Σ p_i log2(p_i)',direction:'low_is_concentrated',definition:'Shannon entropy of Whole-Sign house routes across terminal dispositor basins.'}),
  'house_basin_concentration':Object.freeze({id:'house_basin_concentration',label:'House-route basin concentration',scope:'house_routing',formula:'C=Σ p_i^2',direction:'high_is_concentrated',definition:'Herfindahl-style concentration of Whole-Sign house routes across terminal dispositor basins.'}),
  'largest_house_basin_fraction':Object.freeze({id:'largest_house_basin_fraction',label:'Largest house-basin fraction',scope:'house_routing',formula:'max_i n_i / 12',direction:'high_is_extreme',definition:'Fraction of twelve Whole-Sign houses whose ruler routes terminate in the largest terminal basin.'}),
  'terminal_basin_count':Object.freeze({id:'terminal_basin_count',label:'Terminal basin count',scope:'dispositor_topology',formula:'|B_terminal|',direction:'two_sided',definition:'Number of terminal strongly connected components in the classical dispositor graph.'}),
  'max_route_capture':Object.freeze({id:'max_route_capture',label:'Maximum House River route capture',scope:'house_routing',formula:'max_e #{h: e∈path(h)}',direction:'high_is_extreme',definition:'Maximum number of Whole-Sign house-ruler routes traversing any single dispositor edge.'}),
  'aspect_triangle_count':Object.freeze({id:'aspect_triangle_count',label:'Aspect triangle count',scope:'aspect_topology',formula:'number of 3-cliques',direction:'high_is_extreme',definition:'Number of undirected three-node cliques in the admitted aspect graph.'}),
  'aspect_articulation_count':Object.freeze({id:'aspect_articulation_count',label:'Aspect articulation-point count',scope:'aspect_topology',formula:'number of articulation vertices',direction:'high_is_extreme',definition:'Number of vertices whose removal increases the number of connected components in the admitted aspect graph.'}),
  'max_multilayer_role_count':Object.freeze({id:'max_multilayer_role_count',label:'Maximum multilayer role count',scope:'cross_layer',formula:'max_v Σ_l I(v satisfies role_l)',direction:'high_is_extreme',definition:'Maximum number of independently defined structural roles carried by one planet across available graph/discovery layers.'})
});

function normalizeCounts(counts){const vals=Object.values(counts||{}).filter(x=>x>0),n=vals.reduce((a,b)=>a+b,0);return n?vals.map(x=>x/n):[];}
export function basinMetricsFromCounts(counts){const ps=normalizeCounts(counts),entropy=ps.length?-ps.reduce((s,p)=>s+p*log2(p),0):0,concentration=ps.reduce((s,p)=>s+p*p,0),largest=ps.length?Math.max(...ps):0;return {house_basin_entropy:round(entropy),house_basin_concentration:round(concentration),largest_house_basin_fraction:round(largest)};}
export function countTriangles(nodes,edges){const adj=Object.fromEntries(nodes.map(n=>[n,new Set()]));for(const [a,b] of edges){if(adj[a]&&adj[b]){adj[a].add(b);adj[b].add(a);}}let count=0;const ns=[...nodes].sort();for(let i=0;i<ns.length;i++)for(let j=i+1;j<ns.length;j++)for(let k=j+1;k<ns.length;k++)if(adj[ns[i]].has(ns[j])&&adj[ns[i]].has(ns[k])&&adj[ns[j]].has(ns[k]))count++;return count;}
export function countArticulationPoints(nodes,edges){const adj=Object.fromEntries(nodes.map(n=>[n,new Set()]));for(const [a,b] of edges){if(adj[a]&&adj[b]){adj[a].add(b);adj[b].add(a);}}let time=0;const disc={},low={},parent={},arts=new Set();const dfs=u=>{disc[u]=low[u]=++time;let children=0;for(const v of adj[u]){if(!disc[v]){children++;parent[v]=u;dfs(v);low[u]=Math.min(low[u],low[v]);if(parent[u]===undefined&&children>1)arts.add(u);if(parent[u]!==undefined&&low[v]>=disc[u])arts.add(u);}else if(v!==parent[u])low[u]=Math.min(low[u],disc[v]);}};for(const n of nodes)if(!disc[n])dfs(n);return arts.size;}

export function buildObservedMetricVector({analysis=null,graph=null,river=null,discoveries=null,house_terminal_counts=null}={}){
  let counts=house_terminal_counts;if(!counts){const finding=(discoveries?.findings||[]).find(f=>f.kind==='house_terminal_partition');if(finding?.measurement?.partitions)counts=Object.fromEntries(finding.measurement.partitions.map(p=>[String(p.terminal),Number(p.house_count)]));}
  const basin=basinMetricsFromCounts(counts||{}),aspect=graph?.graphs?.aspect||{},classical=graph?.graphs?.classical_dispositor||{};
  const rawEdges=(analysis?.aspects||[]).map(e=>[e.a,e.b]).filter(e=>e[0]&&e[1]&&e[0]!==e[1]),edges=[],seen=new Set();for(const [a,b] of rawEdges){const k=[a,b].sort().join('|');if(!seen.has(k)){seen.add(k);edges.push([a,b]);}}
  const nodes=[...new Set(edges.flat())].sort(),multi=(discoveries?.findings||[]).filter(f=>f.kind==='multi_role_planet').map(f=>Number(f.measurement?.role_count||0));
  return {...basin,terminal_basin_count:(classical.terminal_basins||[]).length,max_route_capture:Number(river?.max_route_count||0),aspect_triangle_count:countTriangles(nodes,edges),aspect_articulation_count:Array.isArray(aspect.articulation_points)?aspect.articulation_points.length:countArticulationPoints(nodes,edges),max_multilayer_role_count:multi.length?Math.max(...multi):0};
}
export function metricDefinition(id){const m=NULL_METRICS[id];if(!m)throw new Error(`Unknown null metric: ${id}`);return m;}
