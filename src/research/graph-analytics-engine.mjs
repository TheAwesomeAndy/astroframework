import {tarjanSCC,routeFromPlanet} from '../kernel/noetic-kernel.mjs';
import {CLASSICAL_PLANETS} from '../conditions/primitive-condition-engine.mjs';

export const GRAPH_ANALYTICS_VERSION='0.4.1';
export const GRAPH_ANALYTICS_MODEL='naf.research.graph_analytics.v0.4.1';
export const FINDING_MODEL='naf.finding.explainable.v0.4.1';

const CLASSICAL_SET=new Set(CLASSICAL_PLANETS);
const pairKey=(a,b)=>[a,b].sort().join('|');
const mean=xs=>xs.length?xs.reduce((a,b)=>a+b,0)/xs.length:0;
const round=(x,n=4)=>Number.isFinite(x)?Number(x.toFixed(n)):x;

function ledgerRef(kind,id){return `${kind}:${id}`}
function graphObjectMap(analysis){
  const all=[...(analysis.objects||[]),...(analysis.lots||[]),analysis.angles?.ASC,...(analysis.angles?.MC?[analysis.angles.MC]:[])].filter(Boolean);
  return Object.fromEntries(all.map(o=>[o.id,o]));
}
function graphFromEdges(nodes,edges,directed=false){
  const adj=Object.fromEntries(nodes.map(n=>[n,new Set()]));
  for(const e of edges){
    if(!adj[e.from||e.a]||!adj[e.to||e.b])continue;
    const a=e.from||e.a,b=e.to||e.b;adj[a].add(b);if(!directed)adj[b].add(a);
  }
  return {nodes:[...nodes],edges:[...edges],adj,directed};
}

export function classicalDispositorSubgraph(analysis){
  const source=analysis?.topology?.dispositor_graph||{nodes:[],edges:[]};
  const nodes=source.nodes.filter(n=>CLASSICAL_SET.has(n));
  const nodeSet=new Set(nodes);
  const edges=source.edges.filter(e=>nodeSet.has(e.from)&&nodeSet.has(e.to));
  return {nodes,edges,scope:'classical_seven'};
}

export function condensationGraph(graph){
  const sccs=tarjanSCC(graph),componentOf={};
  sccs.forEach((members,i)=>members.forEach(n=>componentOf[n]=i));
  const edgeKeys=new Set(),edges=[];
  for(const e of graph.edges){
    const from=componentOf[e.from],to=componentOf[e.to];
    if(from===to)continue;
    const key=`${from}->${to}`;
    if(!edgeKeys.has(key)){edgeKeys.add(key);edges.push({from,to})}
  }
  const outgoing=sccs.map(()=>new Set()),incoming=sccs.map(()=>new Set());
  edges.forEach(e=>{outgoing[e.from].add(e.to);incoming[e.to].add(e.from)});
  const nodes=sccs.map((members,id)=>({id,members,terminal:outgoing[id].size===0,out_degree:outgoing[id].size,in_degree:incoming[id].size}));
  return {nodes,edges,component_of:componentOf,sccs};
}

function routeUntilRepeat(start,graph,maxSteps=100){
  const next=Object.fromEntries(graph.edges.map(e=>[e.from,e.to])),route=[],seen=new Set();let p=start;
  while(p&&route.length<maxSteps&&!seen.has(p)){seen.add(p);route.push(p);p=next[p]}
  return route;
}

export function functionalDigraphAnalytics(graph){
  const condensation=condensationGraph(graph),terminalComponents=condensation.nodes.filter(c=>c.terminal);
  const outDegree=Object.fromEntries(graph.nodes.map(n=>[n,graph.edges.filter(e=>e.from===n).length]));
  const functional=Object.values(outDegree).every(x=>x===1);
  const terminalNodeSets=terminalComponents.map(c=>new Set(c.members));
  const routes=Object.fromEntries(graph.nodes.map(n=>[n,routeUntilRepeat(n,graph)]));
  const terminalForNode={},depthToTerminal={};
  for(const n of graph.nodes){
    const route=routes[n];let terminalIndex=-1,componentId=null;
    for(let i=0;i<route.length;i++){
      const cid=condensation.component_of[route[i]];
      if(condensation.nodes[cid]?.terminal){terminalIndex=i;componentId=cid;break}
    }
    terminalForNode[n]=componentId;
    depthToTerminal[n]=terminalIndex;
  }
  const basins=terminalComponents.map(c=>{
    const members=graph.nodes.filter(n=>terminalForNode[n]===c.id);
    return {component_id:c.id,terminal_members:c.members,basin_members:members,basin_size:members.length,basin_fraction:graph.nodes.length?members.length/graph.nodes.length:0};
  });
  const upstream={};
  for(const target of graph.nodes){
    const members=graph.nodes.filter(start=>routes[start].includes(target));
    upstream[target]={node:target,upstream_members:members,upstream_count:members.length,upstream_fraction:graph.nodes.length?members.length/graph.nodes.length:0,terminal_member:terminalNodeSets.some(s=>s.has(target))};
  }
  const nonterminalBottlenecks=Object.values(upstream).filter(x=>!x.terminal_member).sort((a,b)=>b.upstream_count-a.upstream_count||a.node.localeCompare(b.node));
  const depths=Object.values(depthToTerminal).filter(x=>x>=0);
  const deepest=graph.nodes.map(node=>({node,depth:depthToTerminal[node],route:routes[node]})).sort((a,b)=>b.depth-a.depth||a.node.localeCompare(b.node));
  return {
    graph_scope:graph.scope||'unspecified',functional_digraph:functional,out_degree:outDegree,
    condensation,terminal_basins:basins,node_routes:routes,node_depth_to_terminal:depthToTerminal,
    upstream_capture:upstream,nonterminal_bottlenecks:nonterminalBottlenecks,
    max_route_depth:deepest[0]?.depth??0,mean_route_depth:mean(depths),deepest_routes:deepest.filter(x=>x.depth===deepest[0]?.depth)
  };
}

function connectedComponents(graph){
  const seen=new Set(),components=[];
  for(const start of graph.nodes){
    if(seen.has(start))continue;const q=[start],c=[];seen.add(start);
    while(q.length){const v=q.shift();c.push(v);for(const w of graph.adj[v]||[])if(!seen.has(w)){seen.add(w);q.push(w)}}
    components.push(c.sort());
  }
  return components.sort((a,b)=>b.length-a.length);
}

function brandesBetweenness(graph){
  const C=Object.fromEntries(graph.nodes.map(v=>[v,0]));
  for(const s of graph.nodes){
    const S=[],P=Object.fromEntries(graph.nodes.map(v=>[v,[]])),sigma=Object.fromEntries(graph.nodes.map(v=>[v,0])),dist=Object.fromEntries(graph.nodes.map(v=>[v,-1]));
    sigma[s]=1;dist[s]=0;const Q=[s];
    while(Q.length){const v=Q.shift();S.push(v);for(const w of graph.adj[v]||[]){if(dist[w]<0){Q.push(w);dist[w]=dist[v]+1}if(dist[w]===dist[v]+1){sigma[w]+=sigma[v];P[w].push(v)}}}
    const delta=Object.fromEntries(graph.nodes.map(v=>[v,0]));
    while(S.length){const w=S.pop();for(const v of P[w])delta[v]+=(sigma[v]/sigma[w])*(1+delta[w]);if(w!==s)C[w]+=delta[w]}
  }
  const norm=graph.nodes.length>2?2/((graph.nodes.length-1)*(graph.nodes.length-2)):0;
  for(const v of graph.nodes)C[v]=C[v]/2*norm;
  return C;
}

function articulationAndBridges(graph){
  let time=0;const disc={},low={},parent={},arts=new Set(),bridges=[];
  const dfs=u=>{disc[u]=low[u]=++time;let children=0;for(const v of graph.adj[u]||[]){if(!disc[v]){children++;parent[v]=u;dfs(v);low[u]=Math.min(low[u],low[v]);if(parent[u]===undefined&&children>1)arts.add(u);if(parent[u]!==undefined&&low[v]>=disc[u])arts.add(u);if(low[v]>disc[u])bridges.push([u,v].sort())}else if(v!==parent[u])low[u]=Math.min(low[u],disc[v])}};
  graph.nodes.forEach(n=>{if(!disc[n])dfs(n)});
  return {articulation_points:[...arts].sort(),bridges:bridges.sort((a,b)=>pairKey(...a).localeCompare(pairKey(...b)))};
}

function localClustering(graph){
  const out={};
  for(const v of graph.nodes){
    const ns=[...(graph.adj[v]||[])],k=ns.length;if(k<2){out[v]=0;continue}let links=0;
    for(let i=0;i<ns.length;i++)for(let j=i+1;j<ns.length;j++)if(graph.adj[ns[i]]?.has(ns[j]))links++;
    out[v]=2*links/(k*(k-1));
  }
  return out;
}

function triangleMotifs(graph,edgeByPair){
  const nodes=[...graph.nodes].sort(),triangles=[];
  for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++)for(let k=j+1;k<nodes.length;k++){
    const a=nodes[i],b=nodes[j],c=nodes[k];
    if(!graph.adj[a]?.has(b)||!graph.adj[a]?.has(c)||!graph.adj[b]?.has(c))continue;
    const edges=[edgeByPair[pairKey(a,b)],edgeByPair[pairKey(a,c)],edgeByPair[pairKey(b,c)]],types=edges.map(e=>e.aspect).sort();
    let recognized='typed_triangle';
    if(types.every(x=>x==='trine'))recognized='grand_trine';
    else if(types.filter(x=>x==='square').length===2&&types.filter(x=>x==='opposition').length===1)recognized='t_square';
    else if(types.every(x=>x==='conjunction'))recognized='triple_conjunction';
    triangles.push({nodes:[a,b,c],edge_types:types,recognized,edges:edges.map(e=>({a:e.a,b:e.b,aspect:e.aspect,orb_deg:e.orb_deg,phase:e.phase}))});
  }
  return triangles;
}

export function aspectGraphAnalytics(analysis){
  const objectMap=graphObjectMap(analysis),edges=(analysis.aspects||[]).filter(e=>objectMap[e.a]&&objectMap[e.b]);
  const nodes=[...new Set(edges.flatMap(e=>[e.a,e.b]))].sort(),graph=graphFromEdges(nodes,edges,false),components=connectedComponents(graph);
  const degree=Object.fromEntries(nodes.map(n=>[n,graph.adj[n].size])),clustering=localClustering(graph),betweenness=brandesBetweenness(graph),cuts=articulationAndBridges(graph);
  const edgeByPair=Object.fromEntries(edges.map(e=>[pairKey(e.a,e.b),e])),triangles=triangleMotifs(graph,edgeByPair);
  const n=nodes.length,m=edges.length,density=n>1?2*m/(n*(n-1)):0;
  const degreeRanking=nodes.map(node=>({node,degree:degree[node],betweenness:betweenness[node],clustering:clustering[node]})).sort((a,b)=>b.degree-a.degree||b.betweenness-a.betweenness||a.node.localeCompare(b.node));
  return {
    graph_scope:'all_objects_with_admitted_major_aspects',node_count:n,edge_count:m,density,
    connected_components:components,component_count:components.length,degree,local_clustering:clustering,mean_clustering:mean(Object.values(clustering)),
    betweenness,articulation_points:cuts.articulation_points,bridges:cuts.bridges,degree_ranking:degreeRanking,
    triangle_motifs:triangles,recognized_motifs:triangles.filter(t=>t.recognized!=='typed_triangle'),tight_edges_1deg:edges.filter(e=>e.orb_deg<=1)
  };
}

export function crossLayerOverlap(analysis){
  const aspectPairs=new Map((analysis.aspects||[]).map(e=>[pairKey(e.a,e.b),e]));
  const disposition=(analysis.topology?.dispositor_graph?.edges||[]).map(e=>({...e,pair:pairKey(e.from,e.to)}));
  const overlaps=disposition.filter(e=>aspectPairs.has(e.pair)).map(e=>({pair:e.pair,dispositor:{from:e.from,to:e.to},aspect:aspectPairs.get(e.pair)}));
  return {layers:['aspect','dispositor'],overlap_pairs:overlaps,overlap_count:overlaps.length};
}

function conditionSummary(record){
  if(!record)return null;const e=record.essential;
  return {
    planet:record.planet,sect_condition:record.sect?.condition?.status||'unknown',angularity:record.positional?.angularity?.class||'unknown',bound_ruler:e?.bound?.bound_ruler||null,
    present_essential:[['domicile',e?.domicile],['adversity',e?.adversity],['exaltation',e?.exaltation],['depression',e?.depression]].filter(([,v])=>v?.present).map(([k])=>k),
    triplicity_roles:e?.triplicity?.planet_roles||[],active_triplicity_ruler:Boolean(e?.triplicity?.active_for_chart)
  };
}

function metric({id,label,value,unit=null,scope,definition,formula,observation,graphMeaning,astrologicalContext,hypothesis,limits=[],inputs={},ledgerRefs=[]}){
  return {id,label,value,unit,epistemic_layer:'research-exploratory',interpretation_status:'hypothesis-not-validated',scope,definition,formula,
    readable_analysis:{observation,graph_theory_meaning:graphMeaning,astrological_context:astrologicalContext,interpretive_hypothesis:hypothesis,limits},
    integrity:{calculation:GRAPH_ANALYTICS_MODEL,inputs,result:value,ledger_refs:ledgerRefs}}
}

function finding({id,title,category,statement,measurement,graphMeaning,astrologicalContext,hypothesis,scope,nodes=[],edges=[],limits=[],proof}){
  return {id,title,category,epistemic_layer:'research-exploratory',interpretation_status:'hypothesis-not-validated',statement,measurement,
    readable_analysis:{graph_theory_meaning:graphMeaning,astrological_context:astrologicalContext,interpretive_hypothesis:hypothesis,limits},
    scope:{...scope,nodes,edges},integrity:{model:FINDING_MODEL,...proof}}
}

export function buildExplainableFindings(analysis,conditions=null){
  const classicalGraph=classicalDispositorSubgraph(analysis),fd=functionalDigraphAnalytics(classicalGraph),aspect=aspectGraphAnalytics(analysis),overlap=crossLayerOverlap(analysis);
  const metrics=[],findings=[];
  const edgeRefs=classicalGraph.edges.map(e=>ledgerRef('dispositor_edge',`${e.from}->${e.to}`));
  const largestBasin=[...fd.terminal_basins].sort((a,b)=>b.basin_size-a.basin_size)[0];
  metrics.push(metric({id:'dispositor.terminal_basin_fraction',label:'Largest terminal basin capture',value:round(largestBasin?.basin_fraction??0),unit:'fraction',scope:'classical dispositor graph',
    definition:'Fraction of classical planets whose directed ruler path reaches the same terminal SCC.',formula:'|B(C)| / |V|',
    observation:`${largestBasin?.basin_size??0} of ${classicalGraph.nodes.length} classical planets route to ${largestBasin?.terminal_members?.join(' ↔ ')||'no terminal component'}.`,
    graphMeaning:'In a functional digraph, terminal SCCs are cycles or fixed points fed by directed in-trees. Basin capture measures how much of the graph drains into one terminal component.',
    astrologicalContext:'Edges are defined only by the selected traditional domicile-rulership model.',
    hypothesis:'A large single basin may be worth treating as a recurrent integration pathway in delineation, but the graph statistic does not establish psychological dominance or causation.',
    limits:['No population/null baseline is applied.','Changing the rulership model can change the graph.'],inputs:{nodes:classicalGraph.nodes,edges:classicalGraph.edges},ledgerRefs:[...edgeRefs,ledgerRef('topology','SCCs')]}));
  metrics.push(metric({id:'dispositor.max_route_depth',label:'Maximum ruler-route depth',value:fd.max_route_depth,unit:'edges',scope:'classical dispositor graph',
    definition:'Maximum number of ruler transitions required before a classical planet first enters a terminal SCC.',formula:'max_v d(v,C_terminal)',
    observation:`Deepest route depth is ${fd.max_route_depth}; ${fd.deepest_routes.map(x=>`${x.node}: ${x.route.join(' → ')}`).join('; ')}.`,
    graphMeaning:'Depth distinguishes nodes already inside the terminal cycle from nodes whose dependency path passes through several intermediate rulers.',
    astrologicalContext:'A longer route is a longer chain of traditional dispositorship, not a statement that a planet is weaker.',
    hypothesis:'Longer chains may require more intermediate conditions to be considered during delineation; this is a structural hypothesis, not a validated interpretive law.',
    limits:['Depth is model-dependent.','Cycle members are assigned depth 0 by convention.'],inputs:{depths:fd.node_depth_to_terminal,routes:fd.node_routes},ledgerRefs:edgeRefs}));
  const bottleneck=fd.nonterminal_bottlenecks[0];
  metrics.push(metric({id:'dispositor.preterminal_capture',label:'Largest nonterminal upstream capture',value:bottleneck?.upstream_count??0,unit:'nodes',scope:'classical dispositor graph',
    definition:'Number of classical starting nodes whose route passes through the most traversed nonterminal planet.',formula:'max_{v not in terminal SCC} |{u : v ∈ route(u)}|',
    observation:bottleneck?`${bottleneck.node} lies on ${bottleneck.upstream_count} of ${classicalGraph.nodes.length} classical ruler routes before terminal entry.`:'No nonterminal bottleneck exists.',
    graphMeaning:'This is an exact path-bottleneck property of the functional digraph, not generic PageRank or an arbitrary centrality score.',
    astrologicalContext:'The bottleneck is created by domicile-ruler routing.',
    hypothesis:'A nonterminal bottleneck may be a useful place to inspect how several ruler chains are qualified by the same planetary condition.',
    limits:['Terminal-cycle members are excluded because every basin route eventually reaches them.','No empirical meaning is assigned to upstream capture.'],inputs:{upstream:fd.upstream_capture},ledgerRefs:edgeRefs}));
  metrics.push(metric({id:'aspect.mean_clustering',label:'Aspect-network mean clustering',value:round(aspect.mean_clustering),unit:'coefficient',scope:aspect.graph_scope,
    definition:'Mean local fraction of each node’s aspect-neighbors that are also aspect-connected to one another.',formula:'mean_v 2T_v / (k_v(k_v−1))',
    observation:`Mean clustering is ${round(aspect.mean_clustering)} across ${aspect.node_count} nodes with admitted major-aspect edges.`,
    graphMeaning:'Clustering measures triangle closure in the admitted aspect graph. It does not distinguish traditional motif types by itself.',
    astrologicalContext:'The graph depends on the active major-aspect and orb policy; lots and angles may participate when they have admitted edges.',
    hypothesis:'High or low clustering could eventually characterize whether aspect relationships organize into tightly interlinked local complexes, but this requires null-model comparison before qualitative labels are justified.',
    limits:['No null distribution is currently used.','Changing orb policy changes edges and clustering.'],inputs:{node_count:aspect.node_count,edge_count:aspect.edge_count,local_clustering:aspect.local_clustering},ledgerRefs:(analysis.aspects||[]).map(e=>ledgerRef('aspect',`${e.a}:${e.b}`))}));
  metrics.push(metric({id:'aspect.articulation_count',label:'Aspect articulation points',value:aspect.articulation_points.length,unit:'nodes',scope:aspect.graph_scope,
    definition:'Count of nodes whose removal increases the number of connected components in the admitted undirected aspect graph.',formula:'Tarjan articulation-point criterion on G_aspect',
    observation:aspect.articulation_points.length?`Structural cut nodes: ${aspect.articulation_points.join(', ')}.`:'No articulation point is present in the admitted aspect graph.',
    graphMeaning:'An articulation point is a literal bridge between otherwise disconnected regions of the encoded graph.',
    astrologicalContext:'This property refers to admitted aspect connectivity only; it does not mean the planet is causally indispensable.',
    hypothesis:'When present, an articulation planet is a strong candidate for whole-chart synthesis because it geometrically connects otherwise separable aspect regions.',
    limits:['Depends on which objects/aspects are included.','Connectivity does not establish interpretive importance.'],inputs:{components:aspect.connected_components,articulation_points:aspect.articulation_points},ledgerRefs:(analysis.aspects||[]).map(e=>ledgerRef('aspect',`${e.a}:${e.b}`))}));
  metrics.push(metric({id:'cross_layer.aspect_dispositor_overlap',label:'Aspect–dispositor pair overlap',value:overlap.overlap_count,unit:'pairs',scope:'aspect × dispositor',
    definition:'Number of unordered pairs connected both by an admitted aspect and by a directed dispositorship relation.',formula:'|E_aspect(pair) ∩ E_dispositor(pair)|',
    observation:`${overlap.overlap_count} planet pair(s) are coupled in both the aspect and dispositor layers.`,
    graphMeaning:'Layer overlap identifies repeated pairwise coupling without collapsing qualitatively different edge types into one relation.',
    astrologicalContext:'An aspect and a dispositor edge remain separate astrological rule results even when they involve the same pair.',
    hypothesis:'Repeated coupling across independent rule layers may deserve closer synthesis than a single-layer connection, but no additive “strength” is implied.',
    limits:['Only aspect and dispositor layers are compared in v0.4.1.','Reception/overcoming are not yet implemented.'],inputs:{overlap_pairs:overlap.overlap_pairs},ledgerRefs:overlap.overlap_pairs.flatMap(x=>[ledgerRef('dispositor_edge',`${x.dispositor.from}->${x.dispositor.to}`),ledgerRef('aspect',`${x.aspect.a}:${x.aspect.b}`)])}));

  if(largestBasin){
    const term=largestBasin.terminal_members;
    const conditionData=conditions?term.map(p=>conditionSummary(conditions.by_planet?.[p])).filter(Boolean):[];
    findings.push(finding({id:'finding.dispositor.terminal_architecture',title:'Terminal rulership architecture',category:'rulership-topology',
      statement:`${largestBasin.basin_size} of ${classicalGraph.nodes.length} classical planets terminate in the ${term.join(' ↔ ')} strongly connected component.`,
      measurement:{basin_fraction:round(largestBasin.basin_fraction),terminal_scc_size:term.length,max_route_depth:fd.max_route_depth},
      graphMeaning:`The classical dispositor graph is ${fd.functional_digraph?'a functional digraph':'not strictly functional'}; its directed paths converge into terminal SCCs. This basin contains ${largestBasin.basin_size} starting nodes.`,
      astrologicalContext:'The result is a mathematical property of the graph produced by traditional domicile rulership. The SCC itself is graph-derived; any life meaning is downstream interpretation.',
      hypothesis:`Within the selected rulership model, ${term.join(' and ')} form a recurrent terminal routing circuit. Their separately computed condition records should therefore be inspected when qualifying the routes that converge there.`,
      scope:{graph:'G_dispositor_classical'},nodes:largestBasin.basin_members,edges:classicalGraph.edges.map(e=>[e.from,e.to]),
      limits:['This does not prove that the terminal planets “control” the life.','Alternative rulership systems can yield different topology.','Condition is descriptive under a historical rule model, not a measured physical state.'],
      proof:{calculation:'functional-digraph basin analysis',formula:'B(C)={v:v→*C}; β=|B(C)|/|V|',inputs:{graph:classicalGraph},result:{basin:largestBasin,condition_of_terminal_members:conditionData},ledger_refs:[...edgeRefs,ledgerRef('topology','SCCs'),...conditionData.flatMap(x=>conditions.by_planet[x.planet]?.ledger_refs||[])]}}));
  }
  if(bottleneck){findings.push(finding({id:'finding.dispositor.bottleneck',title:'Preterminal ruler bottleneck',category:'rulership-topology',
    statement:`${bottleneck.node} lies on ${bottleneck.upstream_count} classical ruler route(s) before terminal entry.`,measurement:{upstream_count:bottleneck.upstream_count,upstream_fraction:round(bottleneck.upstream_fraction)},
    graphMeaning:'This node is the largest nonterminal path bottleneck: multiple upstream branches merge through it before reaching the terminal cycle.',
    astrologicalContext:'The merge is created by traditional domicile-ruler dependencies.',hypothesis:`The condition of ${bottleneck.node} may qualify several otherwise distinct ruler chains simultaneously, making it a useful synthesis checkpoint.`,
    scope:{graph:'G_dispositor_classical'},nodes:bottleneck.upstream_members,edges:classicalGraph.edges.map(e=>[e.from,e.to]),limits:['Path capture is not planetary strength.','Terminal SCC members are excluded from bottleneck ranking.'],
    proof:{calculation:'upstream route membership',formula:'A(v)={u:v∈route(u)}',inputs:{routes:fd.node_routes},result:bottleneck,ledger_refs:edgeRefs}}))}
  for(const motif of aspect.recognized_motifs.slice(0,8)){
    const label=motif.recognized==='grand_trine'?'Grand Trine':motif.recognized==='t_square'?'T-square':motif.recognized==='triple_conjunction'?'Triple conjunction':motif.recognized;
    findings.push(finding({id:`finding.aspect.motif.${motif.recognized}.${motif.nodes.join('.')}`,title:`Typed aspect motif · ${label}`,category:'aspect-motif',
      statement:`${motif.nodes.join(', ')} form a ${label} under the active major-aspect/orb policy.`,measurement:{edge_types:motif.edge_types,edges:motif.edges},
      graphMeaning:'This is a three-node typed subgraph whose edge labels satisfy an explicit motif template; it is not inferred from visual proximity.',
      astrologicalContext:`The motif name is assigned from aspect-rule edges: ${motif.edge_types.join(' + ')}.`,
      hypothesis:'Typed motif participation can become a basis for whole-chart synthesis and later null-model comparison; its interpretive importance is not inferred solely from motif existence.',
      scope:{graph:'G_aspect'},nodes:motif.nodes,edges:motif.edges.map(e=>[e.a,e.b]),limits:['Motif membership depends on orb policy.','No statistical unusualness is claimed until a null model exists.'],
      proof:{calculation:'typed triangle motif detection',formula:'3-clique + edge-type template',inputs:{nodes:motif.nodes},result:motif,ledger_refs:motif.edges.map(e=>ledgerRef('aspect',`${e.a}:${e.b}`))}}))
  }
  if(aspect.articulation_points.length){findings.push(finding({id:'finding.aspect.articulation',title:'Aspect-network bridge nodes',category:'aspect-connectivity',
    statement:`${aspect.articulation_points.join(', ')} ${aspect.articulation_points.length===1?'is an articulation point':'are articulation points'} in the admitted aspect graph.`,measurement:{articulation_points:aspect.articulation_points,bridges:aspect.bridges},
    graphMeaning:'Removing an articulation node increases the number of connected components, so it literally links graph regions that otherwise separate.',
    astrologicalContext:'The statement concerns aspect connectivity only and does not collapse rulership or condition into the same network.',
    hypothesis:'Articulation nodes are candidates for synthesis because multiple aspect regions depend on them for graph connectivity.',scope:{graph:'G_aspect'},nodes:aspect.articulation_points,edges:aspect.bridges,
    limits:['This is sensitive to object inclusion and orb policy.','Graph connectivity is not causal importance.'],proof:{calculation:'Tarjan articulation/bridge analysis',formula:'DFS low-link articulation criterion',inputs:{node_count:aspect.node_count,edge_count:aspect.edge_count},result:{articulation_points:aspect.articulation_points,bridges:aspect.bridges},ledger_refs:(analysis.aspects||[]).map(e=>ledgerRef('aspect',`${e.a}:${e.b}`))}}))}
  if(overlap.overlap_count){findings.push(finding({id:'finding.multilayer.overlap',title:'Repeated coupling across graph layers',category:'multilayer',
    statement:`${overlap.overlap_count} pair(s) occur in both the aspect and dispositor layers.`,measurement:{pairs:overlap.overlap_pairs.map(x=>x.pair)},
    graphMeaning:'The same node pair is related under two independently defined edge systems. The layers remain separate; overlap is itself the derived fact.',
    astrologicalContext:'An aspect describes angular geometry while dispositorship describes sign-ruler dependency.',hypothesis:'Cross-layer repetition may identify relationships worth prioritizing for synthesis, subject to later replication and null-model testing.',
    scope:{graph:'multiplex overlap'},nodes:[...new Set(overlap.overlap_pairs.flatMap(x=>x.pair.split('|')))],edges:overlap.overlap_pairs.map(x=>x.pair.split('|')),
    limits:['Only two layers are compared.','No additive score or “strength” is produced.'],proof:{calculation:'pairwise layer intersection',formula:'E_aspect ∩ E_dispositor on unordered pairs',inputs:{layers:overlap.layers},result:overlap,ledger_refs:overlap.overlap_pairs.flatMap(x=>[ledgerRef('dispositor_edge',`${x.dispositor.from}->${x.dispositor.to}`),ledgerRef('aspect',`${x.aspect.a}:${x.aspect.b}`)])}}))}
  return {status:'exploratory-not-validated',model:GRAPH_ANALYTICS_MODEL,finding_model:FINDING_MODEL,metrics,findings,graphs:{classical_dispositor:fd,aspect,overlap},
    restrictions:['Metrics are exact properties of the encoded graph under the selected rule model, not validated measures of fate, personality, spiritual development, or physical energy.','Qualitative claims such as unusually high/low require explicit null or comparison models and are not made in v0.4.1.','Interpretive hypotheses are deterministic explanatory text downstream of graph facts and remain epistemically labeled.']};
}

export function analyzeGraphArchitecture(analysis,conditions=null){return buildExplainableFindings(analysis,conditions)}
