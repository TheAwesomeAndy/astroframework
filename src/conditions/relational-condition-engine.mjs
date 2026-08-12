import {SIGN_ORDER,TRADITIONAL_RULERS} from '../kernel/noetic-kernel.mjs';
import {CLASSICAL_PLANETS,DOMICILES} from './primitive-condition-engine.mjs';

export const RELATIONAL_CONDITION_VERSION='0.4.2';
export const RELATIONAL_CONDITION_MODEL='naf.condition.relational.hellenistic.v0.4.2';
export const RELATIONAL_RULE_REGISTRY='naf.rules.relational_condition.hellenistic.v0.4.2';

export const RELATION_RULES={
  reception:'naf.relation.reception.domicile_configured.hellenistic.v1',
  exchange:'naf.relation.exchange.domicile.hellenistic.v1',
  mutual_reception:'naf.relation.mutual_reception.domicile_configured.later_tradition.v1',
  overcoming:'naf.relation.overcoming.right_hand.hellenistic.v1',
  domination:'naf.relation.domination.tenth_sign.hellenistic.v1'
};

export const RELATION_SOURCES={
  reception:'Christopher Brennan, Hellenistic Astrology (2017), glossary: reception; ch. 14, pp. 491–494.',
  exchange:'Christopher Brennan, Hellenistic Astrology (2017), glossary: exchange.',
  mutual_reception:'Christopher Brennan, Hellenistic Astrology (2017), glossary: mutual reception and exchange.',
  overcoming:'Christopher Brennan, Hellenistic Astrology (2017), glossary: overcoming/right; ch. 14, pp. 466–470.',
  domination:'Christopher Brennan, Hellenistic Astrology (2017), glossary: domination; ch. 14, pp. 466–470.'
};

const CLASSICAL_SET=new Set(CLASSICAL_PLANETS);
const CONFIG_BY_STEPS={2:'sextile',3:'square',4:'trine',6:'opposition',8:'trine',9:'square',10:'sextile'};
const RIGHT_HAND_STEPS=new Set([2,3,4]);
const pairKey=(a,b)=>[a,b].sort().join('|');
const signIndex=s=>SIGN_ORDER.indexOf(s);
const configuredAspect=(a,b)=>{
  const d=(signIndex(b)-signIndex(a)+12)%12;
  return {steps:d,aspect:CONFIG_BY_STEPS[d]||null};
};
const objectMap=analysis=>Object.fromEntries((analysis?.objects||[]).filter(o=>CLASSICAL_SET.has(o.id)).map(o=>[o.id,o]));
const derivationRef=id=>`derivation:${id}`;

function relationBase({id,type,rule_id,source_reference,from=null,to=null,a=null,b=null,inputs,result,dependencies=[]}){
  return {
    id,type,from,to,a,b,
    epistemic_layer:'astrological-rule',
    tradition:type==='mutual_reception'?'later-tradition compatibility label':'Hellenistic reconstruction',
    model_id:RELATIONAL_CONDITION_MODEL,
    rule_id,source_reference,inputs,result,dependencies,
    derivation_ref:derivationRef(id)
  };
}

function buildReceptionRelations(analysis){
  const objects=objectMap(analysis),relations=[];
  for(const guest of CLASSICAL_PLANETS){
    const go=objects[guest]; if(!go)continue;
    const host=TRADITIONAL_RULERS[go.sign];
    if(!CLASSICAL_SET.has(host)||host===guest||!objects[host])continue;
    const cfg=configuredAspect(objects[host].sign,go.sign);
    if(!['sextile','square','trine','opposition'].includes(cfg.aspect))continue;
    const id=`relation:reception:${host}->${guest}`;
    relations.push(relationBase({
      id,type:'reception',from:host,to:guest,
      rule_id:RELATION_RULES.reception,source_reference:RELATION_SOURCES.reception,
      inputs:{host,guest,host_sign:objects[host].sign,guest_sign:go.sign,guest_domicile_ruler:host,configuration:cfg.aspect,sign_steps:cfg.steps},
      result:{host_receives_guest:true,configuration:cfg.aspect},
      dependencies:[`coordinate:${host}`,`coordinate:${guest}`]
    }));
  }
  return relations;
}

function buildExchangeRelations(analysis,receptions){
  const objects=objectMap(analysis),pairs=[],mutual=[];
  for(let i=0;i<CLASSICAL_PLANETS.length;i++)for(let j=i+1;j<CLASSICAL_PLANETS.length;j++){
    const a=CLASSICAL_PLANETS[i],b=CLASSICAL_PLANETS[j],ao=objects[a],bo=objects[b];
    if(!ao||!bo)continue;
    const exchange=DOMICILES[b]?.includes(ao.sign)&&DOMICILES[a]?.includes(bo.sign);
    if(!exchange)continue;
    const cfg=configuredAspect(ao.sign,bo.sign),id=`relation:exchange:${pairKey(a,b)}`;
    pairs.push(relationBase({
      id,type:'exchange',a,b,rule_id:RELATION_RULES.exchange,source_reference:RELATION_SOURCES.exchange,
      inputs:{a,b,a_sign:ao.sign,b_sign:bo.sign,a_in_b_domicile:true,b_in_a_domicile:true,configuration:cfg.aspect},
      result:{exchange:true,configuration:cfg.aspect},dependencies:[`coordinate:${a}`,`coordinate:${b}`]
    }));
    const reciprocal=receptions.some(r=>r.from===a&&r.to===b)&&receptions.some(r=>r.from===b&&r.to===a);
    if(reciprocal){
      const mid=`relation:mutual_reception:${pairKey(a,b)}`;
      mutual.push(relationBase({
        id:mid,type:'mutual_reception',a,b,rule_id:RELATION_RULES.mutual_reception,source_reference:RELATION_SOURCES.mutual_reception,
        inputs:{a,b,exchange_ref:derivationRef(id),reciprocal_receptions:[derivationRef(`relation:reception:${a}->${b}`),derivationRef(`relation:reception:${b}->${a}`)]},
        result:{mutual_reception:true,configuration:cfg.aspect},dependencies:[id,`relation:reception:${a}->${b}`,`relation:reception:${b}->${a}`]
      }));
    }
  }
  return {exchange:pairs,mutual};
}

function buildOvercomingRelations(analysis){
  const objects=objectMap(analysis),relations=[];
  for(let i=0;i<CLASSICAL_PLANETS.length;i++)for(let j=i+1;j<CLASSICAL_PLANETS.length;j++){
    const a=CLASSICAL_PLANETS[i],b=CLASSICAL_PLANETS[j],ao=objects[a],bo=objects[b];
    if(!ao||!bo)continue;
    const ab=configuredAspect(ao.sign,bo.sign),ba=configuredAspect(bo.sign,ao.sign);
    let superior=null,inferior=null,cfg=null,steps=null;
    if(RIGHT_HAND_STEPS.has(ab.steps)){superior=a;inferior=b;cfg=ab.aspect;steps=ab.steps}
    else if(RIGHT_HAND_STEPS.has(ba.steps)){superior=b;inferior=a;cfg=ba.aspect;steps=ba.steps}
    else continue;
    const domination=cfg==='square'&&steps===3;
    const id=`relation:${domination?'domination':'overcoming'}:${superior}->${inferior}`;
    relations.push(relationBase({
      id,type:domination?'domination':'overcoming',from:superior,to:inferior,
      rule_id:domination?RELATION_RULES.domination:RELATION_RULES.overcoming,
      source_reference:domination?RELATION_SOURCES.domination:RELATION_SOURCES.overcoming,
      inputs:{superior,inferior,superior_sign:objects[superior].sign,inferior_sign:objects[inferior].sign,configuration:cfg,right_hand_sign_steps:steps},
      result:{superior_position:true,configuration:cfg,domination},dependencies:[`coordinate:${superior}`,`coordinate:${inferior}`]
    }));
  }
  return relations;
}

function ledgerEntry(r){
  return {
    kind:`condition_relation_${r.type}`,id:r.id,epistemic_layer:r.epistemic_layer,rule_id:r.rule_id,
    tradition:r.tradition,source_reference:r.source_reference,inputs:r.inputs,result:r.result,
    dependencies:r.dependencies,derivation_ref:r.derivation_ref,
    provenance:{condition_model:RELATIONAL_CONDITION_MODEL,engine_version:RELATIONAL_CONDITION_VERSION,registry:RELATIONAL_RULE_REGISTRY}
  };
}

function byPlanet(records){
  const out=Object.fromEntries(CLASSICAL_PLANETS.map(p=>[p,{planet:p,receptions_given:[],receptions_received:[],exchanges:[],mutual_receptions:[],overcoming_given:[],overcoming_received:[],domination_given:[],domination_received:[]}]))
  for(const r of records){
    if(r.type==='reception'){out[r.from]?.receptions_given.push(r);out[r.to]?.receptions_received.push(r)}
    else if(r.type==='exchange'){out[r.a]?.exchanges.push(r);out[r.b]?.exchanges.push(r)}
    else if(r.type==='mutual_reception'){out[r.a]?.mutual_receptions.push(r);out[r.b]?.mutual_receptions.push(r)}
    else if(r.type==='overcoming'){out[r.from]?.overcoming_given.push(r);out[r.to]?.overcoming_received.push(r)}
    else if(r.type==='domination'){out[r.from]?.domination_given.push(r);out[r.to]?.domination_received.push(r)}
  }
  return out;
}

export function computeRelationalConditions(analysis){
  const receptions=buildReceptionRelations(analysis);
  const {exchange,mutual}=buildExchangeRelations(analysis,receptions);
  const overcoming=buildOvercomingRelations(analysis);
  const records=[...receptions,...exchange,...mutual,...overcoming];
  return {
    model_id:RELATIONAL_CONDITION_MODEL,
    engine_version:RELATIONAL_CONDITION_VERSION,
    rule_registry:RELATIONAL_RULE_REGISTRY,
    scope:'classical_seven_relational_condition',
    completeness:{reception:'implemented',exchange:'implemented',mutual_reception:'implemented_as_separate_compatibility_label',overcoming:'implemented',opposition_superiority:'not_encoded_as_directional_overcoming',compound_condition:'not_implemented'},
    graphs:{
      reception:{directed:true,nodes:CLASSICAL_PLANETS,edges:receptions},
      exchange:{directed:false,nodes:CLASSICAL_PLANETS,edges:exchange},
      mutual_reception:{directed:false,nodes:CLASSICAL_PLANETS,edges:mutual},
      overcoming:{directed:true,nodes:CLASSICAL_PLANETS,edges:overcoming}
    },
    relations:records,
    by_planet:byPlanet(records),
    ledger_entries:records.map(ledgerEntry),
    applicability:{
      classical_only:'Reception/exchange/overcoming in this model are evaluated only for Sun through Saturn.',
      configuration:'Reception requires recognized sign-based sextile, square, trine, or opposition. Exchange does not require configuration.',
      overcoming:'Directional overcoming is encoded for right-hand sextile, square, and trine. Opposition is retained as a configuration but not forced into an arbitrary directional superiority.',
      terminology:'Hellenistic exchange and the later mutual-reception compatibility label remain separate relation types and rule identifiers.'
    }
  };
}
