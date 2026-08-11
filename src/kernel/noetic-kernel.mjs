export const VERSION = '0.3.0';

export const SIGN_ORDER = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
export const SIGN_INFO = {
  Aries:{element:'Fire',mode:'Cardinal'}, Taurus:{element:'Earth',mode:'Fixed'}, Gemini:{element:'Air',mode:'Mutable'},
  Cancer:{element:'Water',mode:'Cardinal'}, Leo:{element:'Fire',mode:'Fixed'}, Virgo:{element:'Earth',mode:'Mutable'},
  Libra:{element:'Air',mode:'Cardinal'}, Scorpio:{element:'Water',mode:'Fixed'}, Sagittarius:{element:'Fire',mode:'Mutable'},
  Capricorn:{element:'Earth',mode:'Cardinal'}, Aquarius:{element:'Air',mode:'Fixed'}, Pisces:{element:'Water',mode:'Mutable'}
};
export const TRADITIONAL_RULERS = {
  Aries:'Mars', Taurus:'Venus', Gemini:'Mercury', Cancer:'Moon', Leo:'Sun', Virgo:'Mercury', Libra:'Venus',
  Scorpio:'Mars', Sagittarius:'Jupiter', Capricorn:'Saturn', Aquarius:'Saturn', Pisces:'Jupiter'
};
export const MAJOR_ASPECTS = [
  {name:'conjunction', angle:0, symbol:'☌'}, {name:'sextile', angle:60, symbol:'⚹'}, {name:'square', angle:90, symbol:'□'},
  {name:'trine', angle:120, symbol:'△'}, {name:'opposition', angle:180, symbol:'☍'}
];
export const DEFAULT_ORB_POLICY = {
  id:'naf.orbs.research.v1',
  conjunction:10,
  sextile:6,
  square:10,
  trine:10,
  opposition:10
};

const PLANETS = new Set(['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto']);
const BODY_ALIASES = {
  'Part of Fortune':'Fortune', 'Lot of Fortune':'Fortune', 'North Node':'NorthNode', 'True Node':'NorthNode',
  'South Node':'SouthNode', 'Black Moon Lilith':'Lilith', 'Ascendant':'ASC', 'Midheaven':'MC'
};
const TYPE_BY_ID = {
  ASC:'angle', MC:'angle', DSC:'angle', IC:'angle', NorthNode:'node', SouthNode:'node', Lilith:'derived', Chiron:'minor_body',
  Fortune:'lot', Spirit:'lot', Vertex:'derived'
};

export function normalize360(x){ return ((Number(x)%360)+360)%360; }
export function signIndex(sign){ const i=SIGN_ORDER.indexOf(sign); if(i<0) throw new Error(`Unknown zodiac sign: ${sign}`); return i; }
export function parseDegreeToken(token){
  if(typeof token === 'number') return token;
  const s=String(token).trim().replace(/[’']/g,'′').replace(/[”"]/g,'″');
  const m=s.match(/(-?\d+(?:\.\d+)?)\s*°(?:\s*(\d+(?:\.\d+)?)\s*′)?(?:\s*(\d+(?:\.\d+)?)\s*″)?/);
  if(!m) throw new Error(`Cannot parse degree token: ${token}`);
  return Number(m[1]) + (m[2]?Number(m[2])/60:0) + (m[3]?Number(m[3])/3600:0);
}
export function absoluteLongitude(sign, degree){ return normalize360(signIndex(sign)*30 + parseDegreeToken(degree)); }
export function formatZodiac(longitude, precision='minute'){
  const x=normalize360(longitude);
  if(precision==='degree') { const si=Math.floor(x/30), d=Math.floor(x-si*30); return `${d}° ${SIGN_ORDER[si]}`; }
  const totalMinutes=Math.round(x*60)%(360*60), si=Math.floor(totalMinutes/(30*60)), within=totalMinutes-si*30*60;
  const d=Math.floor(within/60), m=within%60;
  return `${d}°${String(m).padStart(2,'0')}′ ${SIGN_ORDER[si]}`;
}
export function shortestSeparation(a,b){ const d=Math.abs(normalize360(a)-normalize360(b)); return Math.min(d,360-d); }
export function wholeSignHouse(objectSign, ascSign){ return ((signIndex(objectSign)-signIndex(ascSign)+12)%12)+1; }

export function classifyPhase(a,b,aspectAngle,stepDays=0.01){
  if(!Number.isFinite(a.speed_deg_per_day) || !Number.isFinite(b.speed_deg_per_day)) return 'unknown';
  const current=Math.abs(shortestSeparation(a.longitude,b.longitude)-aspectAngle);
  const futureA=normalize360(a.longitude+a.speed_deg_per_day*stepDays);
  const futureB=normalize360(b.longitude+b.speed_deg_per_day*stepDays);
  const future=Math.abs(shortestSeparation(futureA,futureB)-aspectAngle);
  if(Math.abs(current-future)<1e-6) return 'stationary/indeterminate';
  return future < current ? 'applying' : 'separating';
}

export function computeMajorAspects(objects, orbPolicy=DEFAULT_ORB_POLICY){
  const out=[];
  for(let i=0;i<objects.length;i++) for(let j=i+1;j<objects.length;j++){
    const a=objects[i], b=objects[j];
    if(!Number.isFinite(a.longitude)||!Number.isFinite(b.longitude)) continue;
    const sep=shortestSeparation(a.longitude,b.longitude);
    let best=null;
    for(const asp of MAJOR_ASPECTS){
      const orb=Math.abs(sep-asp.angle), limit=orbPolicy[asp.name];
      if(Number.isFinite(limit) && orb<=limit && (!best || orb<best.orb_deg)) best={...asp,orb_deg:orb};
    }
    if(best){
      out.push({
        a:a.id,b:b.id,aspect:best.name,symbol:best.symbol,exact_angle_deg:best.angle,separation_deg:sep,orb_deg:best.orb_deg,
        phase:classifyPhase(a,b,best.angle),
        provenance:{derived:true,calculation:'naf.aspect.major.v1',orb_policy:orbPolicy.id||'custom',position_source:a.provenance?.source||'input'}
      });
    }
  }
  return out.sort((x,y)=>x.orb_deg-y.orb_deg);
}

function normalizeId(raw){ const t=String(raw).trim(); return BODY_ALIASES[t]||t.replace(/\s+/g,''); }
function normalizeType(id){ return PLANETS.has(id)?'planet':(TYPE_BY_ID[id]||'derived'); }

export function parseChartText(text){
  const lines=String(text).replace(/\r/g,'').split('\n').map(x=>x.trim()).filter(Boolean);
  const objects=[]; let asc=null, mc=null;
  const placement=/^(.+?)\s+in\s+(Aries|Taurus|Gemini|Cancer|Leo|Virgo|Libra|Scorpio|Sagittarius|Capricorn|Aquarius|Pisces)\s+(-?\d+(?:\.\d+)?°(?:\s*\d+(?:\.\d+)?[′’'])?(?:\s*\d+(?:\.\d+)?[″”"])?)(.*)$/i;
  for(const line of lines){
    if(/\b(?:Conjunction|Sextile|Square|Trine|Opposition|Quincunx|Quintile|Octile|Bi-Quintile|Semi-Sextile|Tri-Octile)\b/i.test(line)) continue;
    if(/^\d+(?:st|nd|rd|th)\s+House\s+in\s+/i.test(line)) continue;
    const m=line.match(placement); if(!m) continue;
    const rawId=m[1].trim(), sign=SIGN_ORDER.find(s=>s.toLowerCase()===m[2].toLowerCase()), degree=m[3], tail=m[4]||'';
    const id=normalizeId(rawId); if(!sign) continue;
    const suppliedHouse=(tail.match(/in\s+(\d+)(?:st|nd|rd|th)\s+House/i)||[])[1];
    const retrograde=/Retrograde|\bRx\b|\bR\b/i.test(tail);
    const speedMatch=tail.match(/speed\s*[:=]\s*(-?\d+(?:\.\d+)?)/i);
    const obj={id,display_name:rawId,sign,degree,longitude:absoluteLongitude(sign,degree),type:normalizeType(id),retrograde,
      provenance:{source:'pasted_chart_text',precision:'as_supplied'}};
    if(suppliedHouse) obj.supplied_house=Number(suppliedHouse);
    if(speedMatch) obj.speed_deg_per_day=Number(speedMatch[1]);
    if(id==='ASC') asc=obj; else if(id==='MC') mc=obj; else objects.push(obj);
  }
  if(!asc) throw new Error('No Ascendant found. Include a line such as "ASC in Leo 11°38′".');
  return {source_format:'text',objects,angles:{ASC:asc, ...(mc?{MC:mc}:{})},metadata:{raw_line_count:lines.length}};
}

export function parseChartJSON(input){
  const data=typeof input==='string'?JSON.parse(input):structuredClone(input);
  const objects=(data.objects||[]).map(o=>{
    const id=normalizeId(o.id||o.name); const sign=o.sign; if(!sign) throw new Error(`Missing sign for ${id}`);
    const longitude=Number.isFinite(o.longitude)?normalize360(o.longitude):absoluteLongitude(sign,o.degree);
    return {...o,id,type:o.type||normalizeType(id),longitude,provenance:o.provenance||{source:'json_input'}};
  });
  const angles={};
  for(const key of ['ASC','MC']){
    const a=data.angles?.[key]; if(!a) continue;
    angles[key]={id:key,type:'angle',...a,longitude:Number.isFinite(a.longitude)?normalize360(a.longitude):absoluteLongitude(a.sign,a.degree),provenance:a.provenance||{source:'json_input'}};
  }
  if(!angles.ASC){
    const embedded=objects.find(o=>o.id==='ASC'); if(embedded){ angles.ASC=embedded; objects.splice(objects.indexOf(embedded),1); }
  }
  if(!angles.ASC) throw new Error('JSON chart must contain angles.ASC or an ASC object.');
  return {source_format:'json',objects,angles,metadata:data.metadata||{},reference:data};
}

export function parseChartInput(input){
  const s=String(input).trim(); if(!s) throw new Error('Chart input is empty.');
  if(s.startsWith('{')||s.startsWith('[')) return parseChartJSON(s);
  return parseChartText(s);
}

export function buildDispositorGraph(objects, rulerMap=TRADITIONAL_RULERS){
  const planets=objects.filter(o=>PLANETS.has(o.id));
  const byId=Object.fromEntries(planets.map(o=>[o.id,o]));
  const edges=[];
  for(const o of planets){
    const ruler=rulerMap[o.sign]; if(ruler && byId[ruler]) edges.push({from:o.id,to:ruler,rule:`${o.sign} ruled by ${ruler}`,provenance:{derived:true,calculation:'naf.dispositor.traditional.v1'}});
  }
  return {nodes:planets.map(o=>o.id),edges};
}

export function tarjanSCC(graph){
  const adj=Object.fromEntries(graph.nodes.map(n=>[n,[]])); graph.edges.forEach(e=>{(adj[e.from] ||= []).push(e.to)});
  let index=0; const stack=[], onStack=new Set(), idx={}, low={}, comps=[];
  function visit(v){
    idx[v]=low[v]=index++; stack.push(v); onStack.add(v);
    for(const w of adj[v]||[]){ if(idx[w]===undefined){visit(w);low[v]=Math.min(low[v],low[w]);} else if(onStack.has(w)) low[v]=Math.min(low[v],idx[w]); }
    if(low[v]===idx[v]){ const comp=[]; let w; do{w=stack.pop();onStack.delete(w);comp.push(w);}while(w!==v); comps.push(comp.sort()); }
  }
  graph.nodes.forEach(v=>{if(idx[v]===undefined) visit(v)}); return comps;
}

export function terminalSCCs(graph){
  const comps=tarjanSCC(graph), compIndex={}; comps.forEach((c,i)=>c.forEach(n=>compIndex[n]=i));
  const outgoing=comps.map(()=>new Set()); graph.edges.forEach(e=>{const a=compIndex[e.from],b=compIndex[e.to]; if(a!==b) outgoing[a].add(b)});
  return comps.filter((c,i)=>outgoing[i].size===0);
}

export function routeFromPlanet(start, graph, maxSteps=25){
  const next={}; graph.edges.forEach(e=>next[e.from]=e.to); const route=[], seen=new Map(); let p=start;
  for(let i=0;i<maxSteps && p;i++){
    if(seen.has(p)){ route.push(p); return {route,cycle_start_index:seen.get(p),terminated:'cycle'}; }
    seen.set(p,route.length); route.push(p); p=next[p];
  }
  return {route,cycle_start_index:null,terminated:p?'max_steps':'terminal'};
}

export function routeHouse(house, ascSign, objects, rulerMap=TRADITIONAL_RULERS){
  const sign=SIGN_ORDER[(signIndex(ascSign)+Number(house)-1)%12], entry=rulerMap[sign];
  const graph=buildDispositorGraph(objects,rulerMap); const p=routeFromPlanet(entry,graph);
  return {house:Number(house),sign,entry_ruler:entry,...p};
}

export function composition(objects){
  const planets=objects.filter(o=>PLANETS.has(o.id)); const elements={Fire:0,Earth:0,Air:0,Water:0}, modes={Cardinal:0,Fixed:0,Mutable:0};
  planets.forEach(o=>{elements[SIGN_INFO[o.sign].element]++;modes[SIGN_INFO[o.sign].mode]++}); return {planet_count:planets.length,elements,modes};
}

export function analyzeChart(parsed, options={}){
  const orbPolicy=options.orbPolicy||DEFAULT_ORB_POLICY, rulerMap=options.rulerMap||TRADITIONAL_RULERS;
  const asc=parsed.angles.ASC, ascSign=asc.sign;
  const objects=parsed.objects.map(o=>({...o,computed_house:wholeSignHouse(o.sign,ascSign),
    provenance:{...(o.provenance||{}),house_calculation:'naf.house.whole_sign.v1'}}));
  const angles={...parsed.angles,ASC:{...asc,computed_house:1}};
  if(angles.MC) angles.MC={...angles.MC,computed_house:wholeSignHouse(angles.MC.sign,ascSign)};
  const aspectObjects=[...objects,angles.ASC,...(angles.MC?[angles.MC]:[])];
  const aspects=computeMajorAspects(aspectObjects,orbPolicy);
  const dispositorGraph=buildDispositorGraph(objects,rulerMap), sccs=tarjanSCC(dispositorGraph), terminals=terminalSCCs(dispositorGraph);
  const routes=Array.from({length:12},(_,i)=>routeHouse(i+1,ascSign,objects,rulerMap));
  const suppliedMismatches=objects.filter(o=>Number.isFinite(o.supplied_house)&&o.supplied_house!==o.computed_house).map(o=>({id:o.id,supplied:o.supplied_house,computed:o.computed_house}));
  return {
    framework:'Noetic Atlas Framework',kernel_version:VERSION,source_format:parsed.source_format,
    model:{zodiac:options.zodiac||'Tropical',house_system:'Whole Sign',rulership:'Traditional domicile',orb_policy:orbPolicy.id||'custom'},
    angles,objects,aspects,composition:composition(objects),
    topology:{dispositor_graph:dispositorGraph,sccs,terminal_sccs:terminals,house_routes:routes},
    validation:{supplied_house_mismatches:suppliedMismatches,phase_available:objects.some(o=>Number.isFinite(o.speed_deg_per_day))},
    provenance:{generated_at:new Date().toISOString(),kernel:'naf-kernel',input_source:parsed.source_format,derived_from_raw_positions:true}
  };
}

export function structuralReport(a){
  const t=a.topology.terminal_sccs.map(c=>c.join(' ↔ ')).join('; ')||'none';
  const tight=a.aspects.slice(0,8).map(x=>`${x.a} ${x.aspect} ${x.b} (${x.orb_deg.toFixed(2)}°)`).join('\n');
  return `NAF Structural Report\nKernel: ${a.kernel_version}\nInput: ${a.source_format}\nObjects: ${a.objects.length}\nComputed major aspects: ${a.aspects.length}\nTerminal SCC(s): ${t}\n\nElement composition: ${JSON.stringify(a.composition.elements)}\nMode composition: ${JSON.stringify(a.composition.modes)}\n\nTightest relationships:\n${tight}`;
}
