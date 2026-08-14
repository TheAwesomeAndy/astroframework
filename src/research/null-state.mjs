import {SIGN_ORDER,TRADITIONAL_RULERS,normalize360,signIndex} from '../kernel/noetic-kernel.mjs';

export const NULL_STATE_VERSION='0.4.6';
export const NULL_STATE_MODEL='naf.research.null_state.v0.4.6';
export const CLASSICAL_PLANETS=Object.freeze(['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn']);
const CLASSICAL_SET=new Set(CLASSICAL_PLANETS);
const uniq=xs=>[...new Set((xs||[]).filter(Boolean))];
export const pairKey=(a,b)=>[a,b].sort().join('|');
export function signFromLongitude(longitude){return SIGN_ORDER[Math.floor(normalize360(longitude)/30)%12]}
export function buildDispositorEdges(objects,rulerMap=TRADITIONAL_RULERS){
  const byId=Object.fromEntries((objects||[]).map(o=>[o.id,o]));
  return (objects||[]).map(o=>({from:o.id,to:rulerMap[o.sign]})).filter(e=>e.to&&byId[e.to]);
}
function objectClass(id,objectMap){
  if(CLASSICAL_SET.has(id))return 'classical_planet';
  const t=objectMap[id]?.type;
  if(t==='planet')return 'outer_planet';
  if(t==='angle')return 'angle';
  if(t==='lot')return 'lot';
  if(t==='node')return 'node';
  if(t==='minor_body')return 'minor_body';
  return t||'derived';
}
function relationNodes(r){
  const xs=r?.from&&r?.to?[r.from,r.to]:[r?.a,r?.b];
  return uniq(xs);
}
function compoundParticipants(t){return uniq([t?.target,...(t?.agents||[])]);}
function sameEdgeSet(a,b){
  const f=xs=>[...(xs||[])].map(e=>`${e.from}->${e.to}`).sort().join(';');
  return f(a)===f(b);
}
export function buildNullResearchState({analysis=null,conditions=null,graph=null,river=null,discoveries=null}={}){
  if(!analysis?.angles?.ASC?.sign)throw new Error('Null Model Laboratory requires analysis.angles.ASC.sign');
  const rawObjects=[...(analysis.objects||[]),...(analysis.lots||[]),analysis.angles?.ASC,analysis.angles?.MC].filter(Boolean);
  const objectMap=Object.fromEntries(rawObjects.map(o=>[o.id,o]));
  const classicalObjects=CLASSICAL_PLANETS.map(id=>objectMap[id]).filter(Boolean).map(o=>({id:o.id,longitude:Number(o.longitude),sign:o.sign||signFromLongitude(o.longitude)}));
  if(classicalObjects.length<2)throw new Error('Null Model Laboratory requires at least two classical planets');
  const rulerMap={...TRADITIONAL_RULERS};
  const dispositorEdges=buildDispositorEdges(classicalObjects,rulerMap);
  const aspectEdges=(analysis.aspects||[]).map(e=>({a:e.a,b:e.b,aspect:e.aspect,orb_deg:Number(e.orb_deg),separation_deg:Number(e.separation_deg)})).filter(e=>e.a&&e.b&&e.aspect);
  const aspectNodes=uniq(aspectEdges.flatMap(e=>[e.a,e.b])).sort();
  const nodeClasses=Object.fromEntries(aspectNodes.map(id=>[id,objectClass(id,objectMap)]));
  const relations=(conditions?.relational?.relations||[]).map(r=>({id:r.id||null,type:r.type||null,nodes:relationNodes(r)})).filter(r=>r.nodes.length>=2);
  const compoundTestimonies=(conditions?.compound?.testimonies||[]).map(t=>({id:t.id||null,participants:compoundParticipants(t)})).filter(t=>t.participants.length);
  const compoundActive=CLASSICAL_PLANETS.filter(p=>{const presence=conditions?.compound?.by_planet?.[p]?.presence;return presence&&presence!=='none'});
  const operationalEdges=(analysis?.topology?.dispositor_graph?.edges||[]).filter(e=>CLASSICAL_SET.has(e.from)&&CLASSICAL_SET.has(e.to));
  return {
    model_id:NULL_STATE_MODEL,version:NULL_STATE_VERSION,
    asc_sign:analysis.angles.ASC.sign,
    classical_objects:classicalObjects,dispositor_nodes:classicalObjects.map(o=>o.id),dispositor_edges:dispositorEdges,ruler_map:rulerMap,
    aspect_nodes:aspectNodes,aspect_node_classes:nodeClasses,aspect_edges:aspectEdges,
    condition_relations:relations,compound_testimonies:compoundTestimonies,compound_active_planets:compoundActive,
    discovery_kinds:uniq((discoveries?.findings||[]).map(f=>f.kind)),
    source_models:{kernel:analysis.kernel_version||null,graph:graph?.model_id||null,river:river?.model_id||null,conditions:conditions?.model_id||null,discoveries:discoveries?.model_id||null},
    integrity:{classical_planet_count:classicalObjects.length,dispositor_matches_operational:sameEdgeSet(dispositorEdges,operationalEdges)}
  };
}
export function tarjanSCC(nodes,edges){
  const adj=Object.fromEntries((nodes||[]).map(n=>[n,[]]));for(const e of edges||[])(adj[e.from]||=[]).push(e.to);
  let index=0;const stack=[],onStack=new Set(),idx={},low={},comps=[];
  function visit(v){idx[v]=low[v]=index++;stack.push(v);onStack.add(v);for(const w of adj[v]||[]){if(idx[w]===undefined){visit(w);low[v]=Math.min(low[v],low[w])}else if(onStack.has(w))low[v]=Math.min(low[v],idx[w])}if(low[v]===idx[v]){const c=[];let w;do{w=stack.pop();onStack.delete(w);c.push(w)}while(w!==v);comps.push(c.sort())}}
  for(const v of nodes||[])if(idx[v]===undefined)visit(v);return comps;
}
export function functionalBasins(state){
  const nodes=state.dispositor_nodes||[],edges=state.dispositor_edges||[],sccs=tarjanSCC(nodes,edges),componentOf={};sccs.forEach((c,i)=>c.forEach(n=>componentOf[n]=i));
  const outgoing=sccs.map(()=>new Set());for(const e of edges){const a=componentOf[e.from],b=componentOf[e.to];if(a!==b)outgoing[a].add(b)}
  const terminals=sccs.map((members,id)=>({id,members})).filter(x=>outgoing[x.id].size===0),terminalSets=terminals.map(t=>new Set(t.members)),next=Object.fromEntries(edges.map(e=>[e.from,e.to]));
  const terminalOf={};for(const start of nodes){let p=start,seen=new Set(),ti=null;while(p&&!seen.has(p)){seen.add(p);const k=terminalSets.findIndex(s=>s.has(p));if(k>=0){ti=k;break}p=next[p]}terminalOf[start]=ti}
  const basins=terminals.map((t,i)=>{const members=nodes.filter(n=>terminalOf[n]===i);return {terminal_members:t.members,basin_members:members,basin_size:members.length,basin_fraction:nodes.length?members.length/nodes.length:0}});
  return {sccs,terminals,basins,terminal_members:new Set(terminals.flatMap(t=>t.members))};
}
export function routeUntilRepeat(start,state,maxSteps=50){
  const next=Object.fromEntries((state.dispositor_edges||[]).map(e=>[e.from,e.to])),route=[],seen=new Map();let p=start;
  for(let i=0;i<maxSteps&&p;i++){if(seen.has(p)){route.push(p);return route}seen.set(p,route.length);route.push(p);p=next[p]}return route;
}
export function houseRoutes(state){
  const rows=[];for(let h=1;h<=12;h++){const sign=SIGN_ORDER[(signIndex(state.asc_sign)+h-1)%12],entry=state.ruler_map?.[sign];if(!entry)continue;rows.push({house:h,sign,entry_ruler:entry,route:routeUntilRepeat(entry,state)})}return rows;
}
export function maxHouseRouteCapture(state){
  const counts=new Map(),routes=houseRoutes(state);for(const r of routes){for(let i=0;i<r.route.length-1;i++){const k=`${r.route[i]}->${r.route[i+1]}`;counts.set(k,(counts.get(k)||0)+1)}}
  const max=Math.max(0,...counts.values());return {count:max,fraction:routes.length?max/routes.length:0,route_count:routes.length};
}
export function aspectAdjacency(state){
  const nodes=uniq([...(state.aspect_nodes||[]),...(state.aspect_edges||[]).flatMap(e=>[e.a,e.b])]).sort(),adj=Object.fromEntries(nodes.map(n=>[n,new Set()]));for(const e of state.aspect_edges||[]){if(!adj[e.a]||!adj[e.b])continue;adj[e.a].add(e.b);adj[e.b].add(e.a)}return {nodes,adj};
}
export function articulationPoints(state){
  const {nodes,adj}=aspectAdjacency(state);let time=0;const disc={},low={},parent={},arts=new Set();
  const dfs=u=>{disc[u]=low[u]=++time;let children=0;for(const v of adj[u]||[]){if(!disc[v]){children++;parent[v]=u;dfs(v);low[u]=Math.min(low[u],low[v]);if(parent[u]===undefined&&children>1)arts.add(u);if(parent[u]!==undefined&&low[v]>=disc[u])arts.add(u)}else if(v!==parent[u])low[u]=Math.min(low[u],disc[v])}};for(const n of nodes)if(!disc[n])dfs(n);return [...arts].sort();
}
export function recognizedTriangleMotifs(state){
  const {nodes,adj}=aspectAdjacency(state),edgeBy=Object.fromEntries((state.aspect_edges||[]).map(e=>[pairKey(e.a,e.b),e])),out=[];
  for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++)for(let k=j+1;k<nodes.length;k++){const a=nodes[i],b=nodes[j],c=nodes[k];if(!adj[a]?.has(b)||!adj[a]?.has(c)||!adj[b]?.has(c))continue;const edges=[edgeBy[pairKey(a,b)],edgeBy[pairKey(a,c)],edgeBy[pairKey(b,c)]],types=edges.map(e=>e.aspect).sort();let recognized=null;if(types.every(x=>x==='trine'))recognized='grand_trine';else if(types.filter(x=>x==='square').length===2&&types.filter(x=>x==='opposition').length===1)recognized='t_square';else if(types.every(x=>x==='conjunction'))recognized='triple_conjunction';if(recognized)out.push({recognized,nodes:[a,b,c],edge_types:types})}return out;
}
export function motifIntersectionCount(state){
  let count=0;for(const m of recognizedTriangleMotifs(state)){const set=new Set(m.nodes),rel=(state.condition_relations||[]).some(r=>(r.nodes||[]).every(x=>set.has(x))),comp=(state.compound_testimonies||[]).some(t=>(t.participants||[]).some(x=>set.has(x)));if(rel||comp)count++}return count;
}
export function multiRoleCount(state){
  const arts=articulationPoints(state),basins=functionalBasins(state),bottlenecks=new Set((state.dispositor_nodes||[]).filter(n=>!basins.terminal_members.has(n))),active=new Set(state.compound_active_planets||[]);let count=0;
  for(const p of arts){let roles=1;if(bottlenecks.has(p))roles++;if(active.has(p))roles++;if(roles>=2)count++}return count;
}
export function degreeSequence(state){const {nodes,adj}=aspectAdjacency(state);return Object.fromEntries(nodes.map(n=>[n,adj[n].size]));}
