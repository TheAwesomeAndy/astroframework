import { SIGN_INFO, SIGN_ORDER, normalize360 } from '../kernel/noetic-kernel.mjs';

export const CONDITION_ENGINE_VERSION = '0.4.0b';
export const CONDITION_MODEL_ID = 'naf.condition.primitive.hellenistic.v0.4.0b';
export const CONDITION_SCHEMA_ID = 'naf.condition.record.v0.4.0a';
export const CLASSICAL_PLANETS = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn'];

export const DOMICILES = {
  Sun:['Leo'], Moon:['Cancer'], Mercury:['Gemini','Virgo'], Venus:['Taurus','Libra'],
  Mars:['Aries','Scorpio'], Jupiter:['Sagittarius','Pisces'], Saturn:['Capricorn','Aquarius']
};

export const EXALTATIONS = {
  Sun:'Aries', Moon:'Taurus', Mercury:'Virgo', Venus:'Pisces', Mars:'Capricorn', Jupiter:'Cancer', Saturn:'Libra'
};

export const DEPRESSIONS = {
  Sun:'Libra', Moon:'Scorpio', Mercury:'Pisces', Venus:'Virgo', Mars:'Cancer', Jupiter:'Capricorn', Saturn:'Aries'
};

export const TRIPLICITY_TABLE = {
  Fire:{day:'Sun',night:'Jupiter',cooperating:'Saturn'},
  Earth:{day:'Venus',night:'Moon',cooperating:'Mars'},
  Air:{day:'Saturn',night:'Mercury',cooperating:'Jupiter'},
  Water:{day:'Venus',night:'Mars',cooperating:'Moon'}
};

// Half-open sign-local intervals [start,end), frozen in v0.4.0a.
export const EGYPTIAN_BOUNDS = {
  Aries:[['Jupiter',0,6],['Venus',6,12],['Mercury',12,20],['Mars',20,25],['Saturn',25,30]],
  Taurus:[['Venus',0,8],['Mercury',8,14],['Jupiter',14,22],['Saturn',22,27],['Mars',27,30]],
  Gemini:[['Mercury',0,6],['Jupiter',6,12],['Venus',12,17],['Mars',17,24],['Saturn',24,30]],
  Cancer:[['Mars',0,7],['Venus',7,13],['Mercury',13,19],['Jupiter',19,26],['Saturn',26,30]],
  Leo:[['Jupiter',0,6],['Venus',6,11],['Saturn',11,18],['Mercury',18,24],['Mars',24,30]],
  Virgo:[['Mercury',0,7],['Venus',7,17],['Jupiter',17,21],['Mars',21,28],['Saturn',28,30]],
  Libra:[['Saturn',0,6],['Mercury',6,14],['Jupiter',14,21],['Venus',21,28],['Mars',28,30]],
  Scorpio:[['Mars',0,7],['Venus',7,11],['Mercury',11,19],['Jupiter',19,24],['Saturn',24,30]],
  Sagittarius:[['Jupiter',0,12],['Venus',12,17],['Mercury',17,21],['Saturn',21,26],['Mars',26,30]],
  Capricorn:[['Mercury',0,7],['Jupiter',7,14],['Venus',14,22],['Saturn',22,26],['Mars',26,30]],
  Aquarius:[['Mercury',0,7],['Venus',7,13],['Jupiter',13,20],['Mars',20,25],['Saturn',25,30]],
  Pisces:[['Venus',0,12],['Jupiter',12,16],['Mercury',16,19],['Mars',19,28],['Saturn',28,30]]
};

export const SOURCE_REFERENCES = {
  domicile:'Christopher Brennan, Hellenistic Astrology (2017), ch. 8, Domicile Rulership, pp. 232–241.',
  adversity:'Christopher Brennan, Hellenistic Astrology (2017), ch. 8, Adversities, pp. 249–252.',
  exaltation:'Christopher Brennan, Hellenistic Astrology (2017), ch. 8, Exaltations and Depressions, pp. 242–249.',
  triplicity:'Christopher Brennan, Hellenistic Astrology (2017), Table 8.1, Standard Triplicity Rulership Scheme, p. 267.',
  bounds:'Christopher Brennan, Hellenistic Astrology (2017), Table 8.3, Egyptian Bounds, pp. 277–279.',
  sect:'Christopher Brennan, Hellenistic Astrology (2017), ch. 7, Sect, pp. 190–196; Morning/Evening Star, pp. 205–206.',
  angularity:'Christopher Brennan, Hellenistic Astrology (2017), ch. 10, Angular Triads, pp. 328–330.'
};

const RULE_IDS = {
  domicile:'naf.condition.domicile.hellenistic.v1',
  adversity:'naf.condition.adversity.hellenistic.v1',
  exaltation:'naf.condition.exaltation.sign.hellenistic.v1',
  depression:'naf.condition.depression.sign.hellenistic.v1',
  triplicity:'naf.condition.triplicity.standard.v1',
  bounds:'naf.condition.bounds.egyptian.v1',
  planetarySect:'naf.condition.sect.planetary_family.porphyry.v1',
  sectCondition:'naf.condition.sect.match.v1',
  angularity:'naf.condition.angularity.whole_sign_triads.v1'
};

function oppositeSign(sign){
  const i=SIGN_ORDER.indexOf(sign);
  if(i<0) throw new Error(`Unknown sign: ${sign}`);
  return SIGN_ORDER[(i+6)%12];
}

export function lookupEgyptianBound(sign, degreeInSign){
  const d=Number(degreeInSign);
  if(!EGYPTIAN_BOUNDS[sign]) throw new Error(`Unknown sign for Egyptian bounds: ${sign}`);
  if(!(d>=0 && d<30)) throw new Error(`Bound degree must be in [0,30): ${degreeInSign}`);
  const row=EGYPTIAN_BOUNDS[sign].find(([,start,end])=>d>=start && d<end);
  if(!row) throw new Error(`No Egyptian bound found for ${sign} ${d}°`);
  return {ruler:row[0],start_deg:row[1],end_deg:row[2],interval:'[start,end)'};
}

export function lookupEgyptianBoundByLongitude(longitude){
  const x=normalize360(longitude), si=Math.floor(x/30), sign=SIGN_ORDER[si], degree=x-si*30;
  return {sign,degree_in_sign:degree,...lookupEgyptianBound(sign,degree)};
}

export function wholeSignAngularity(house){
  const h=Number(house);
  if([1,4,7,10].includes(h)) return 'angular';
  if([2,5,8,11].includes(h)) return 'succedent';
  if([3,6,9,12].includes(h)) return 'declining';
  return 'indeterminate';
}

export function mercurySectFamily(mercuryLongitude,sunLongitude){
  if(!Number.isFinite(mercuryLongitude)||!Number.isFinite(sunLongitude)) return {family:'indeterminate',phase:'indeterminate',signed_delta_deg:null};
  const delta=((normalize360(mercuryLongitude)-normalize360(sunLongitude)+540)%360)-180;
  if(Math.abs(delta)<1e-9) return {family:'indeterminate',phase:'conjunct_sun',signed_delta_deg:delta};
  // Selected v0.4.0a reconstruction: west/earlier zodiacal longitude = morning star = diurnal;
  // east/later longitude = evening star = nocturnal.
  return delta<0
    ? {family:'diurnal',phase:'morning_star',signed_delta_deg:delta}
    : {family:'nocturnal',phase:'evening_star',signed_delta_deg:delta};
}

export function planetarySectFamily(planet,objects=[]){
  if(['Sun','Jupiter','Saturn'].includes(planet)) return {family:'diurnal',basis:'fixed_classical_sect'};
  if(['Moon','Venus','Mars'].includes(planet)) return {family:'nocturnal',basis:'fixed_classical_sect'};
  if(planet==='Mercury'){
    const mercury=objects.find(o=>o.id==='Mercury'),sun=objects.find(o=>o.id==='Sun');
    const m=mercurySectFamily(mercury?.longitude,sun?.longitude);
    return {...m,basis:'morning_evening_star_rule_selected_in_v0.4.0a'};
  }
  return {family:'not_applicable',basis:'not_classical_planet'};
}

function factorEntry(planet,factor,ruleId,source,inputs,result,dependencies=[]){
  return {
    kind:`condition_${factor}`,
    id:`condition:${planet}:${factor}`,
    epistemic_layer:'astrological-rule',
    rule_id:ruleId,
    tradition:'Hellenistic reconstruction',
    source_reference:source,
    inputs,
    result,
    dependencies,
    provenance:{condition_model:CONDITION_MODEL_ID,engine_version:CONDITION_ENGINE_VERSION}
  };
}

function booleanFactor(status,rule_id,source_reference,details={}){
  return {status:status?'present':'absent',present:Boolean(status),rule_id,source_reference,...details};
}

export function computePlanetPrimitiveCondition(planet,analysis){
  const objects=analysis?.objects||[];
  const o=objects.find(x=>x.id===planet);
  if(!o) return null;
  if(!CLASSICAL_PLANETS.includes(planet)) return {planet,applicability:'not_applicable'};
  const chartSect=analysis?.sect?.sect||'unknown';
  const sign=o.sign,degreeInSign=normalize360(o.longitude)%30,element=SIGN_INFO[sign]?.element;
  const domicileSigns=DOMICILES[planet],adversitySigns=domicileSigns.map(oppositeSign);
  const domicile=booleanFactor(domicileSigns.includes(sign),RULE_IDS.domicile,SOURCE_REFERENCES.domicile,{domicile_signs:domicileSigns});
  const adversity=booleanFactor(adversitySigns.includes(sign),RULE_IDS.adversity,SOURCE_REFERENCES.adversity,{adversity_signs:adversitySigns});
  const exaltation=booleanFactor(EXALTATIONS[planet]===sign,RULE_IDS.exaltation,SOURCE_REFERENCES.exaltation,{exaltation_sign:EXALTATIONS[planet]});
  const depression=booleanFactor(DEPRESSIONS[planet]===sign,RULE_IDS.depression,SOURCE_REFERENCES.exaltation,{depression_sign:DEPRESSIONS[planet],modern_label:'fall'});
  const tri=TRIPLICITY_TABLE[element];
  const activeSectRuler=chartSect==='day'?tri?.day:chartSect==='night'?tri?.night:null;
  const triplicityRoles=[];
  if(tri?.day===planet)triplicityRoles.push('day_ruler');
  if(tri?.night===planet)triplicityRoles.push('night_ruler');
  if(tri?.cooperating===planet)triplicityRoles.push('cooperating_ruler');
  const triplicity={status:triplicityRoles.length?'present':'absent',element,chart_sect:chartSect,day_ruler:tri?.day||null,night_ruler:tri?.night||null,cooperating_ruler:tri?.cooperating||null,active_sect_ruler:activeSectRuler,planet_roles:triplicityRoles,active_for_chart:activeSectRuler===planet,rule_id:RULE_IDS.triplicity,source_reference:SOURCE_REFERENCES.triplicity};
  const boundLookup=lookupEgyptianBound(sign,degreeInSign);
  const bound={status:boundLookup.ruler===planet?'present':'absent',self_ruled:boundLookup.ruler===planet,bound_ruler:boundLookup.ruler,start_deg:boundLookup.start_deg,end_deg:boundLookup.end_deg,degree_in_sign:degreeInSign,interval:boundLookup.interval,rule_id:RULE_IDS.bounds,source_reference:SOURCE_REFERENCES.bounds};
  const sectFamily=planetarySectFamily(planet,objects);
  const sectStatus=!['day','night'].includes(chartSect)||!['diurnal','nocturnal'].includes(sectFamily.family)
    ? 'indeterminate'
    : ((chartSect==='day'&&sectFamily.family==='diurnal')||(chartSect==='night'&&sectFamily.family==='nocturnal')?'in_sect':'out_of_sect');
  const sect={chart_sect:chartSect,planetary_family:{...sectFamily,rule_id:RULE_IDS.planetarySect,source_reference:SOURCE_REFERENCES.sect},condition:{status:sectStatus,rule_id:RULE_IDS.sectCondition,source_reference:SOURCE_REFERENCES.sect}};
  const angularityClass=wholeSignAngularity(o.computed_house);
  const angularity={class:angularityClass,house:o.computed_house,rule_id:RULE_IDS.angularity,source_reference:SOURCE_REFERENCES.angularity,note:'Whole-sign angular-triad class only; quadrant degree-based dynamic strength is not implemented in v0.4.0b.'};

  const ledger=[];
  ledger.push(factorEntry(planet,'domicile',RULE_IDS.domicile,SOURCE_REFERENCES.domicile,{planet,sign,domicile_signs:domicileSigns},{status:domicile.status,present:domicile.present},[`coordinate:${planet}`]));
  ledger.push(factorEntry(planet,'adversity',RULE_IDS.adversity,SOURCE_REFERENCES.adversity,{planet,sign,adversity_signs:adversitySigns},{status:adversity.status,present:adversity.present},[`coordinate:${planet}`]));
  ledger.push(factorEntry(planet,'exaltation',RULE_IDS.exaltation,SOURCE_REFERENCES.exaltation,{planet,sign,exaltation_sign:EXALTATIONS[planet]},{status:exaltation.status,present:exaltation.present},[`coordinate:${planet}`]));
  ledger.push(factorEntry(planet,'depression',RULE_IDS.depression,SOURCE_REFERENCES.exaltation,{planet,sign,depression_sign:DEPRESSIONS[planet]},{status:depression.status,present:depression.present},[`coordinate:${planet}`]));
  ledger.push(factorEntry(planet,'triplicity',RULE_IDS.triplicity,SOURCE_REFERENCES.triplicity,{planet,sign,element,chart_sect:chartSect,table:tri},{status:triplicity.status,planet_roles:triplicityRoles,active_sect_ruler:activeSectRuler,active_for_chart:triplicity.active_for_chart},[`coordinate:${planet}`,'sect:Sect']));
  ledger.push(factorEntry(planet,'bound',RULE_IDS.bounds,SOURCE_REFERENCES.bounds,{planet,sign,longitude_deg:o.longitude,degree_in_sign:degreeInSign,interval_convention:'[start,end)'},{status:bound.status,bound_ruler:bound.bound_ruler,start_deg:bound.start_deg,end_deg:bound.end_deg,self_ruled:bound.self_ruled},[`coordinate:${planet}`]));
  ledger.push(factorEntry(planet,'planetary_sect',RULE_IDS.planetarySect,SOURCE_REFERENCES.sect,{planet,planet_longitude_deg:o.longitude,sun_longitude_deg:objects.find(x=>x.id==='Sun')?.longitude??null},{family:sectFamily.family,basis:sectFamily.basis,phase:sectFamily.phase??null,signed_delta_deg:sectFamily.signed_delta_deg??null},[`coordinate:${planet}`,'coordinate:Sun']));
  ledger.push(factorEntry(planet,'sect_condition',RULE_IDS.sectCondition,SOURCE_REFERENCES.sect,{planet,chart_sect:chartSect,planetary_family:sectFamily.family},{status:sectStatus},['sect:Sect',`condition:${planet}:planetary_sect`]));
  ledger.push(factorEntry(planet,'angularity',RULE_IDS.angularity,SOURCE_REFERENCES.angularity,{planet,whole_sign_house:o.computed_house},{class:angularityClass},[`whole_sign_house:${planet}`]));

  const ledgerRefs=ledger.map(e=>e.id);
  return {
    planet,
    schema_version:CONDITION_SCHEMA_ID,
    model_id:CONDITION_MODEL_ID,
    applicability:'full',
    identity:{sign,longitude_deg:o.longitude,degree_in_sign:degreeInSign,computed_house:o.computed_house},
    essential:{domicile,adversity,exaltation,depression,triplicity,bound},
    sect,
    positional:{angularity},
    relational:{status:'not_implemented',receptions:[],mutual_receptions:[],overcoming:[]},
    compound:{status:'not_implemented',bonifications:[],maltreatments:[],enclosures:[],mitigations:[]},
    ledger_refs:ledgerRefs,
    ledger_entries:ledger
  };
}

export function computePrimitiveConditions(analysis){
  const by_planet={};
  const ledger_entries=[];
  for(const planet of CLASSICAL_PLANETS){
    const record=computePlanetPrimitiveCondition(planet,analysis);
    if(!record)continue;
    by_planet[planet]=record;
    ledger_entries.push(...(record.ledger_entries||[]));
  }
  return {
    model_id:CONDITION_MODEL_ID,
    engine_version:CONDITION_ENGINE_VERSION,
    schema_version:CONDITION_SCHEMA_ID,
    scope:'classical_seven_primitive_condition',
    completeness:{primitive:'implemented',relational:'not_implemented',compound:'not_implemented',quadrant_dynamic_strength:'not_implemented'},
    by_planet,
    ledger_entries
  };
}
