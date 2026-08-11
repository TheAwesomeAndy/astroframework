import {analyzeGraphArchitecture} from './graph-analytics-engine.mjs';

const TAU=2*Math.PI;

export function harmonicSpectrum(analysis,maxHarmonic=12){
  const points=analysis.objects.filter(o=>o.type==='planet' && Number.isFinite(o.longitude));
  return Array.from({length:maxHarmonic},(_,k)=>{
    const n=k+1; let re=0,im=0;
    for(const p of points){const th=TAU*p.longitude/360;re+=Math.cos(n*th);im+=Math.sin(n*th)}
    re/=points.length||1;im/=points.length||1;
    return {harmonic:n,amplitude:Math.hypot(re,im),phase_deg:((Math.atan2(im,re)*180/Math.PI/n)%360+360)%360,
      provenance:{calculation:'naf.research.circular_harmonic.v1',meaning:'descriptive circular concentration; not an astrological effect size'}};
  });
}

export function routeConvergence(analysis){
  const routes=analysis.topology.house_routes||[], buckets={};
  for(const r of routes){const tail=r.route?.slice(-2).join('↔')||'none';buckets[tail]=(buckets[tail]||0)+1}
  const counts=Object.values(buckets),total=counts.reduce((a,b)=>a+b,0),k=counts.length;
  const entropy=k<=1?0:-counts.reduce((s,c)=>{const p=c/total;return s+p*Math.log(p)},0)/Math.log(k);
  return {route_terminal_distribution:buckets,normalized_entropy:entropy,concentration:1-entropy,
    provenance:{calculation:'naf.research.route_convergence.v1',meaning:'graph-routing concentration only; interpretive significance unestablished'}};
}

export function multilayerParticipation(analysis){
  const scores={};
  const bump=(id,key,n=1)=>{scores[id]??={id,aspect_degree:0,dispositor_in:0,dispositor_out:0,house_entry_count:0,lot_ruler_count:0,total:0};scores[id][key]+=n;scores[id].total+=n};
  for(const e of analysis.aspects){bump(e.a,'aspect_degree');bump(e.b,'aspect_degree')}
  for(const e of analysis.topology.dispositor_graph.edges){bump(e.from,'dispositor_out');bump(e.to,'dispositor_in')}
  for(const r of analysis.topology.house_routes) bump(r.entry_ruler,'house_entry_count');
  for(const l of analysis.lots||[]) if(l.ruler) bump(l.ruler,'lot_ruler_count');
  return Object.values(scores).sort((a,b)=>b.total-a.total).map(x=>({...x,provenance:{calculation:'naf.research.multilayer_participation.v1',meaning:'unweighted participation count across selected symbolic layers; not a validated importance score'}}));
}

export function analyzeExploratoryPatterns(analysis,options={}){
  const conditionReady=Boolean(options.conditions)||analysis?.completeness?.condition_engine==='complete';
  const temporalReady=analysis?.completeness?.temporal_engine==='complete';
  const graphAnalytics=analyzeGraphArchitecture(analysis,options.conditions||null);
  return {
    status:'exploratory-not-interpretive',
    promotion_status:'hold',
    substrate:{condition_engine_complete:conditionReady,temporal_engine_complete:temporalReady,graph_analytics_model:graphAnalytics.model},
    restrictions:[
      'Do not expose these descriptors as validated natal strength, fate, prediction, or psychological meaning.',
      'Do not promote a descriptor into consumer interpretation until condition-aware replication and null-model testing are complete.',
      'Current descriptors characterize only the currently implemented structural substrate.',
      'Graph-theory findings are exact properties of the encoded graph; their interpretive hypotheses remain unvalidated and separately labeled.'
    ],
    harmonic_spectrum:harmonicSpectrum(analysis),
    route_convergence:routeConvergence(analysis),
    multilayer_participation:multilayerParticipation(analysis),
    graph_analytics:graphAnalytics
  };
}
