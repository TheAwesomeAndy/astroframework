import {SIGN_ORDER,normalize360} from '../kernel/noetic-kernel.mjs';
import {CLASSICAL_PLANETS} from './primitive-condition-engine.mjs';

export const COMPOUND_CONDITION_VERSION='0.4.3';
export const COMPOUND_CONDITION_MODEL='naf.condition.compound.hellenistic.v0.4.3';
export const COMPOUND_RULE_REGISTRY='naf.rules.compound_condition.hellenistic.v0.4.3';

export const BENEFICS=['Venus','Jupiter'];
export const MALEFICS=['Mars','Saturn'];

export const COMPOUND_RULES={
  bonification_overcoming:'naf.compound.bonification.overcoming.hellenistic.v1',
  maltreatment_overcoming:'naf.compound.maltreatment.overcoming_square.hellenistic.v1',
  bonification_trine:'naf.compound.bonification.sign_trine.hellenistic_reconstruction.v1',
  maltreatment_opposition:'naf.compound.maltreatment.sign_opposition.hellenistic.v1',
  enclosure:'naf.compound.enclosure.ray.seven_degree.hellenistic.v1',
  sect_qualifier:'naf.compound.qualifier.sect.benefic_malefic.hellenistic.v1',
  reception_qualifier:'naf.compound.qualifier.reception.mitigation.hellenistic_medieval_bridge.v1'
};

export const COMPOUND_SOURCES={
  overcoming:'Christopher Brennan, Hellenistic Astrology (2017), ch. 14, Overcoming, pp. 466–470.',
  opposition_trine:'Christopher Brennan, Hellenistic Astrology (2017), ch. 14, Opposition and Trine, pp. 471–472.',
  enclosure:'Christopher Brennan, Hellenistic Astrology (2017), ch. 14, Enclosure, pp. 474–477; Porphyry, Introduction 15–16 as discussed there.',
  sect:'Christopher Brennan, Hellenistic Astrology (2017), ch. 14, Sect as a Mitigating Factor, pp. 467–468.',
  reception:'Christopher Brennan, Hellenistic Astrology (2017), ch. 14, Mitigating Conditions: Reception, pp. 491–494.'
};

const CLASSICAL_SET=new Set(CLASSICAL_PLANETS);
const RAY_ANGLES=[60,90,120,180];
const EPS=1e-9;
const signIndex=s=>SIGN_ORDER.indexOf(s);
const objectMap=analysis=>Object.fromEntries((analysis?.objects||[]).filter(o=>CLASSICAL_SET.has(o.id)).map(o=>[o.id,o]));
const derivationRef=id=>String(id).startsWith('derivation:')?String(id):`derivation:${id}`;
const pairKey=(a,b)=>[a,b].sort().join('|');
const signedDelta=(origin,target)=>((normalize360(target)-normalize360(origin)+540)%360)-180;

function signSeparation(a,b){
  const ai=signIndex(a),bi=signIndex(b);
  if(ai<0||bi<0)return null;
  const d=(bi-ai+12)%12;
  return Math.min(d,12-d);
}

function relationPairReception(agent,target,relational){
  const rows=(relational?.relations||[]).filter(r=>r.type==='reception'&&(
    (r.from===agent&&r.to===target)||(r.from===target&&r.to===agent)
  ));
  return {
    present:rows.length>0,
    relation_ids:rows.map(r=>r.id),
    derivation_refs:rows.map(r=>r.derivation_ref),
    effect:rows.length?null:'none'
  };
}

function sectQualifier(agent,condition,primitive){
  const status=primitive?.by_planet?.[agent]?.sect?.condition?.status||'indeterminate';
  let effect='indeterminate';
  if(condition==='bonification'){
    if(status==='in_sect')effect='amplified';
    else if(status==='out_of_sect')effect='restrained';
  }else if(condition==='maltreatment'){
    if(status==='out_of_sect')effect='amplified';
    else if(status==='in_sect')effect='restrained';
  }
  return {
    agent,agent_sect_condition:status,effect,
    rule_id:COMPOUND_RULES.sect_qualifier,
    source_reference:COMPOUND_SOURCES.sect,
    dependency:`condition:${agent}:sect_condition`
  };
}

function qualifierBundle(agents,target,condition,primitive,relational){
  const sect=agents.map(a=>sectQualifier(a,condition,primitive));
  const reception=agents.map(agent=>{
    const r=relationPairReception(agent,target,relational);
    return {
      agent,target,present:r.present,
      effect:r.present?(condition==='maltreatment'?'mitigates_maltreatment':'enhances_bonification'):'none',
      rule_id:COMPOUND_RULES.reception_qualifier,
      source_reference:COMPOUND_SOURCES.reception,
      relation_ids:r.relation_ids,
      derivation_refs:r.derivation_refs
    };
  });
  return {sect,reception};
}

function testimony({id,condition,target,agents,mechanism,rule_id,source_reference,inputs,dependencies,primitive,relational}){
  const qualifiers=qualifierBundle(agents,target,condition,primitive,relational);
  const receptionDependencies=qualifiers.reception.flatMap(x=>x.relation_ids||[]);
  const sectDependencies=qualifiers.sect.map(x=>x.dependency).filter(Boolean);
  return {
    id,type:condition,target,agents,mechanism,status:'present',
    epistemic_layer:'astrological-rule',
    tradition:'Hellenistic reconstruction',
    model_id:COMPOUND_CONDITION_MODEL,rule_id,source_reference,
    inputs,qualifiers,
    result:{
      condition,mechanism,
      sect_effects:qualifiers.sect.map(x=>({agent:x.agent,effect:x.effect})),
      reception_effects:qualifiers.reception.filter(x=>x.present).map(x=>({agent:x.agent,effect:x.effect}))
    },
    dependencies:[...new Set([...(dependencies||[]),...sectDependencies,...receptionDependencies])],
    derivation_ref:derivationRef(id)
  };
}

function buildOvercomingTestimonies(analysis,primitive,relational){
  const out=[];
  for(const r of relational?.relations||[]){
    if(!['overcoming','domination'].includes(r.type)||!r.from||!r.to)continue;
    const cfg=r.result?.configuration||r.inputs?.configuration;
    if(BENEFICS.includes(r.from)&&['trine','square'].includes(cfg)){
      out.push(testimony({
        id:`compound:bonification:overcoming:${r.from}->${r.to}`,
        condition:'bonification',target:r.to,agents:[r.from],mechanism:'overcoming',
        rule_id:COMPOUND_RULES.bonification_overcoming,source_reference:COMPOUND_SOURCES.overcoming,
        inputs:{agent:r.from,target:r.to,configuration:cfg,relational_edge_id:r.id,sign_based:true},
        dependencies:[r.id],primitive,relational
      }));
    }
    if(MALEFICS.includes(r.from)&&cfg==='square'){
      out.push(testimony({
        id:`compound:maltreatment:overcoming:${r.from}->${r.to}`,
        condition:'maltreatment',target:r.to,agents:[r.from],mechanism:'overcoming_square',
        rule_id:COMPOUND_RULES.maltreatment_overcoming,source_reference:COMPOUND_SOURCES.overcoming,
        inputs:{agent:r.from,target:r.to,configuration:cfg,relational_edge_id:r.id,sign_based:true,domination:r.type==='domination'},
        dependencies:[r.id],primitive,relational
      }));
    }
  }
  return out;
}

function buildSignConfigurationTestimonies(analysis,primitive,relational){
  const objects=objectMap(analysis),out=[];
  for(const agent of BENEFICS){
    if(!objects[agent])continue;
    for(const target of CLASSICAL_PLANETS){
      if(target===agent||!objects[target])continue;
      if(signSeparation(objects[agent].sign,objects[target].sign)!==4)continue;
      out.push(testimony({
        id:`compound:bonification:sign_trine:${agent}->${target}`,
        condition:'bonification',target,agents:[agent],mechanism:'sign_based_trine',
        rule_id:COMPOUND_RULES.bonification_trine,source_reference:COMPOUND_SOURCES.opposition_trine,
        inputs:{agent,target,agent_sign:objects[agent].sign,target_sign:objects[target].sign,sign_separation:4,degree_orb_not_required:true},
        dependencies:[`coordinate:${agent}`,`coordinate:${target}`],primitive,relational
      }));
    }
  }
  for(const agent of MALEFICS){
    if(!objects[agent])continue;
    for(const target of CLASSICAL_PLANETS){
      if(target===agent||!objects[target])continue;
      if(signSeparation(objects[agent].sign,objects[target].sign)!==6)continue;
      out.push(testimony({
        id:`compound:maltreatment:sign_opposition:${agent}->${target}`,
        condition:'maltreatment',target,agents:[agent],mechanism:'sign_based_opposition',
        rule_id:COMPOUND_RULES.maltreatment_opposition,source_reference:COMPOUND_SOURCES.opposition_trine,
        inputs:{agent,target,agent_sign:objects[agent].sign,target_sign:objects[target].sign,sign_separation:6,degree_orb_not_required:true},
        dependencies:[`coordinate:${agent}`,`coordinate:${target}`],primitive,relational
      }));
    }
  }
  return out;
}

function rayPointsForObject(o){
  const rows=[],seen=new Set();
  for(const angle of RAY_ANGLES){
    for(const direction of angle===180?[1]:[1,-1]){
      const longitude=normalize360(o.longitude+direction*angle),key=longitude.toFixed(9);
      if(seen.has(key))continue;seen.add(key);
      rows.push({source:o.id,source_longitude_deg:o.longitude,aspect_angle_deg:angle,direction:direction>0?'forward':'backward',ray_longitude_deg:longitude});
    }
  }
  return rows;
}

function liesBetween(delta,boundary){
  return boundary>0
    ? delta>EPS&&delta<boundary-EPS
    : delta<-EPS&&delta>boundary+EPS;
}

function interventionsFor(target,targetObj,left,right,objects){
  const excluded=new Set([target,left.source,right.source]),hits=[];
  for(const planet of CLASSICAL_PLANETS){
    const o=objects[planet]; if(!o||excluded.has(planet))continue;
    const bodyDelta=signedDelta(targetObj.longitude,o.longitude);
    if(liesBetween(bodyDelta,left.delta_deg)||liesBetween(bodyDelta,right.delta_deg)){
      hits.push({planet,kind:'body',longitude_deg:o.longitude,delta_from_target_deg:bodyDelta});
    }
    for(const ray of rayPointsForObject(o)){
      const d=signedDelta(targetObj.longitude,ray.ray_longitude_deg);
      if(liesBetween(d,left.delta_deg)||liesBetween(d,right.delta_deg)){
        hits.push({planet,kind:'ray',aspect_angle_deg:ray.aspect_angle_deg,direction:ray.direction,longitude_deg:ray.ray_longitude_deg,delta_from_target_deg:d});
      }
    }
  }
  const unique=new Map();
  for(const h of hits)unique.set(`${h.planet}|${h.kind}|${Number(h.longitude_deg).toFixed(8)}`,h);
  return [...unique.values()];
}

function enclosureCandidateFor(target,targetObj,enclosers,label,objects){
  const [a,b]=enclosers;
  if(!objects[a]||!objects[b])return null;
  const rays=[];
  for(const source of enclosers){
    for(const ray of rayPointsForObject(objects[source])){
      const d=signedDelta(targetObj.longitude,ray.ray_longitude_deg);
      if(Math.abs(d)<=7+EPS&&Math.abs(d)>EPS)rays.push({...ray,delta_deg:d});
    }
  }
  const left=rays.filter(r=>r.delta_deg<0),right=rays.filter(r=>r.delta_deg>0),pairs=[];
  for(const l of left)for(const rr of right){
    if(l.source===rr.source)continue;
    const interventions=interventionsFor(target,targetObj,l,rr,objects);
    pairs.push({left:l,right:rr,interventions,span_deg:Math.abs(l.delta_deg)+Math.abs(rr.delta_deg),status:interventions.length?'intervened':'active'});
  }
  if(!pairs.length)return null;
  pairs.sort((x,y)=>(x.status==='active'?0:1)-(y.status==='active'?0:1)||x.span_deg-y.span_deg);
  const best=pairs[0],id=`compound:enclosure:${label}:${target}`;
  return {
    id,type:'enclosure',enclosure_kind:label,target,agents:enclosers,
    mechanism:'degree_based_ray_enclosure',status:best.status,
    epistemic_layer:'astrological-rule',tradition:'Hellenistic reconstruction',
    model_id:COMPOUND_CONDITION_MODEL,rule_id:COMPOUND_RULES.enclosure,source_reference:COMPOUND_SOURCES.enclosure,
    inputs:{target,target_longitude_deg:targetObj.longitude,seven_degree_range:true,enclosers,ray_sides:{left:best.left,right:best.right}},
    result:{status:best.status,condition:label==='benefic'?'bonification':'maltreatment',interventions:best.interventions,span_deg:best.span_deg},
    dependencies:[`coordinate:${target}`,...enclosers.map(x=>`coordinate:${x}`),...best.interventions.map(x=>`coordinate:${x.planet}`)],
    derivation_ref:derivationRef(id)
  };
}

function buildEnclosures(analysis,primitive,relational){
  const objects=objectMap(analysis),states=[],testimonies=[];
  for(const target of CLASSICAL_PLANETS){
    const to=objects[target]; if(!to)continue;
    const benefic=enclosureCandidateFor(target,to,BENEFICS,'benefic',objects);
    const malefic=enclosureCandidateFor(target,to,MALEFICS,'malefic',objects);
    for(const state of [benefic,malefic]){
      if(!state)continue;states.push(state);
      if(state.status!=='active')continue;
      const condition=state.enclosure_kind==='benefic'?'bonification':'maltreatment';
      testimonies.push(testimony({
        id:`compound:${condition}:ray_enclosure:${pairKey(state.agents[0],state.agents[1])}->${target}`,
        condition,target,agents:state.agents,mechanism:'degree_based_ray_enclosure',
        rule_id:COMPOUND_RULES.enclosure,source_reference:COMPOUND_SOURCES.enclosure,
        inputs:{enclosure_id:state.id,enclosure_kind:state.enclosure_kind,ray_sides:state.inputs.ray_sides,intervention_status:state.status},
        dependencies:[state.id],primitive,relational
      }));
    }
  }
  return {states,testimonies};
}

function ledgerEntry(record){
  return {
    kind:record.type==='enclosure'?'condition_compound_enclosure':'condition_compound_testimony',
    id:record.id,epistemic_layer:record.epistemic_layer,rule_id:record.rule_id,tradition:record.tradition,
    source_reference:record.source_reference,inputs:record.inputs,result:record.result,
    dependencies:record.dependencies,derivation_ref:record.derivation_ref,
    provenance:{condition_model:COMPOUND_CONDITION_MODEL,engine_version:COMPOUND_CONDITION_VERSION,registry:COMPOUND_RULE_REGISTRY}
  };
}

function byPlanet(testimonies,enclosures){
  const out=Object.fromEntries(CLASSICAL_PLANETS.map(p=>[p,{planet:p,bonifications_received:[],maltreatments_received:[],bonifications_given:[],maltreatments_given:[],enclosure_states:[],presence:'none'}]));
  for(const e of enclosures)out[e.target]?.enclosure_states.push(e);
  for(const t of testimonies){
    if(t.type==='bonification')out[t.target]?.bonifications_received.push(t);
    if(t.type==='maltreatment')out[t.target]?.maltreatments_received.push(t);
    for(const agent of t.agents||[]){
      if(t.type==='bonification')out[agent]?.bonifications_given.push(t);
      if(t.type==='maltreatment')out[agent]?.maltreatments_given.push(t);
    }
  }
  for(const r of Object.values(out)){
    const b=r.bonifications_received.length>0,m=r.maltreatments_received.length>0;
    r.presence=b&&m?'mixed':b?'bonification_present':m?'maltreatment_present':'none';
  }
  return out;
}

export function computeCompoundConditions(analysis,primitive,relational){
  if(!analysis)throw new Error('Compound condition requires deterministic analysis state.');
  if(!primitive||!relational)throw new Error('Compound condition requires already-computed primitive and relational condition.');
  const overcoming=buildOvercomingTestimonies(analysis,primitive,relational);
  const signBased=buildSignConfigurationTestimonies(analysis,primitive,relational);
  const enclosure=buildEnclosures(analysis,primitive,relational);
  const testimonies=[...overcoming,...signBased,...enclosure.testimonies];
  const records=[...enclosure.states,...testimonies];
  return {
    model_id:COMPOUND_CONDITION_MODEL,engine_version:COMPOUND_CONDITION_VERSION,rule_registry:COMPOUND_RULE_REGISTRY,
    scope:'selected_source_secure_compound_condition_classical_seven',
    completeness:{
      bonification_overcoming:'implemented',maltreatment_overcoming:'implemented',
      bonification_sign_trine:'implemented',maltreatment_sign_opposition:'implemented',
      degree_ray_enclosure:'implemented',intervention:'implemented',sect_qualification:'implemented',reception_qualification:'implemented',
      counteraction:'deferred_for_separate_source_lock',bodily_enclosure:'deferred_due_range_ambiguity',sign_containment:'deferred',
      adherence:'deferred_due_application_direction_ambiguity',striking_with_a_ray:'deferred_due_reconstruction_ambiguity',
      engagement:'deferred_until_motion_phase_contract_v2',scalar_strength:'intentionally_not_implemented'
    },
    testimonies,enclosures:enclosure.states,records,
    by_planet:byPlanet(testimonies,enclosure.states),
    ledger_entries:records.map(ledgerEntry),
    epistemic_boundary:'Independent source-defined testimonies are preserved even when they conflict. No net strength, goodness, fate, health, or causal score is computed.',
    implementation_notes:{
      overlapping_testimonies:'A target may be simultaneously bonified and maltreated. The engine records both rather than averaging them.',
      enclosure:'Only explicit seven-degree ray enclosure with two distinct benefics or two distinct malefics is promoted in v1. Intervention can occur bodily or by degree-based ray.',
      sect:'Sect is a categorical qualifier on the acting benefic/malefic, not a numerical multiplier.',
      reception:'Reception is a categorical mitigation/enhancement qualifier and never deletes the underlying maltreatment/bonification testimony.'
    }
  };
}
