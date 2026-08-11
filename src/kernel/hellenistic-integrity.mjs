import {
  SIGN_ORDER, TRADITIONAL_RULERS, DEFAULT_ORB_POLICY,
  normalize360, wholeSignHouse, formatZodiac, computeMajorAspects, analyzeChart
} from './noetic-kernel.mjs';

export const INTEGRITY_VERSION='0.3.1';
export const HERMETIC_LOT_IDS=new Set(['Fortune','Spirit','Eros','Necessity','Courage','Victory','Nemesis']);

function signDegreeFromLongitude(longitude){
  const x=normalize360(longitude),si=Math.floor(x/30);
  return {sign:SIGN_ORDER[si],degree:x-si*30,longitude:x};
}
export function directedZodiacalDistance(fromLongitude,toLongitude){return normalize360(toLongitude-fromLongitude)}

export function determineSect(objects,angles,metadata={}){
  const sun=objects.find(o=>o.id==='Sun'),asc=angles?.ASC;
  if(!sun||!asc)return {sect:'unknown',reason:'Sun and Ascendant are required',near_horizon:null,proof:null};
  if(Number.isFinite(metadata.sun_altitude_deg)){
    const alt=Number(metadata.sun_altitude_deg),sect=alt>0?'day':alt<0?'night':'horizon';
    return {sect,method:'geometric_solar_altitude',near_horizon:Math.abs(alt)<1,
      proof:{sun_altitude_deg:alt,comparison:'altitude > 0° => day; altitude < 0° => night',refraction:'none'},
      provenance:{calculation:'naf.sect.horizon.v1',source:'geometric horizon',traditional_reference:'Christopher Brennan, Hellenistic Astrology, ch.7, pp.192–193'}};
  }
  const relative=normalize360(sun.longitude-asc.longitude),eps=1e-9;
  let sect;if(Math.abs(relative)<eps||Math.abs(relative-180)<eps)sect='horizon';else sect=(relative>0&&relative<180)?'night':'day';
  const horizonDistance=Math.min(relative,Math.abs(relative-180),360-relative);
  return {sect,method:'ecliptic_horizon_semicircle',near_horizon:horizonDistance<1,
    proof:{asc_longitude_deg:asc.longitude,sun_longitude_deg:sun.longitude,sun_minus_asc_normalized_deg:relative,horizon_distance_deg:horizonDistance,
      comparison:'0°<Sun−ASC<180° lies below the ASC→DSC ecliptic semicircle => night; 180°<Sun−ASC<360° => day'},
    provenance:{calculation:'naf.sect.horizon.v1',source:'Sun/ASC ecliptic geometry',traditional_reference:'Christopher Brennan, Hellenistic Astrology, ch.7, pp.192–193'}};
}

function lotObject(id,longitude,ascSign,formula,sect,proof,variant='Paulus/Panaretus'){
  const z=signDegreeFromLongitude(longitude);
  return {id,type:'lot',sign:z.sign,degree:z.degree,longitude:z.longitude,computed_house:wholeSignHouse(z.sign,ascSign),ruler:TRADITIONAL_RULERS[z.sign],sect,
    formula,proof,
    provenance:{derived:true,calculation:`naf.lot.${id.toLowerCase()}.paulus.v1`,tradition:'Hellenistic',variant,source_author:'Paulus of Alexandria',
      source_reference:'Paulus, Introduction 23; Christopher Brennan, Hellenistic Astrology, ch.16, pp.525–527'}};
}
function projectLot(id,asc,ascSign,from,to,sect,formula,variant){
  const arc=directedZodiacalDistance(from.longitude,to.longitude),raw=asc.longitude+arc,longitude=normalize360(raw);
  return lotObject(id,longitude,ascSign,formula,sect,
    {asc_longitude_deg:asc.longitude,from:{id:from.id,longitude_deg:from.longitude},to:{id:to.id,longitude_deg:to.longitude},directed_arc_deg:arc,unnormalized_result_deg:raw,normalized_result_deg:longitude},variant);
}

export function computeHermeticLots(objects,angles,metadata={}){
  const asc=angles?.ASC,byId=Object.fromEntries(objects.map(o=>[o.id,o])),sun=byId.Sun,moon=byId.Moon;
  if(!asc||!sun||!moon)return {sect:{sect:'unknown'},lots:[],warnings:['Hermetic lots require ASC, Sun, and Moon.']};
  const sect=determineSect(objects,angles,metadata);
  if(!['day','night'].includes(sect.sect))return {sect,lots:[],warnings:['Sect is indeterminate at the horizon; sect-reversing lots were not forced.']};
  const day=sect.sect==='day';
  const fortune=projectLot('Fortune',asc,asc.sign,day?sun:moon,day?moon:sun,sect.sect,day?'ASC + directed arc Sun→Moon':'ASC + directed arc Moon→Sun');
  const spirit=projectLot('Spirit',asc,asc.sign,day?moon:sun,day?sun:moon,sect.sect,day?'ASC + directed arc Moon→Sun':'ASC + directed arc Sun→Moon');
  const lots=[fortune,spirit],warnings=[];
  const req=id=>{if(!byId[id])warnings.push(`${id} missing: some Hermetic lots cannot be computed.`);return byId[id]};
  const venus=req('Venus'),mercury=req('Mercury'),mars=req('Mars'),jupiter=req('Jupiter'),saturn=req('Saturn');
  if(venus)lots.push(projectLot('Eros',asc,asc.sign,day?spirit:venus,day?venus:spirit,sect.sect,day?'ASC + directed arc Spirit→Venus':'ASC + directed arc Venus→Spirit','Paulus/Panaretus; differs from older Valens/Dorotheus Eros'));
  if(mercury)lots.push(projectLot('Necessity',asc,asc.sign,day?mercury:fortune,day?fortune:mercury,sect.sect,day?'ASC + directed arc Mercury→Fortune':'ASC + directed arc Fortune→Mercury','Paulus/Panaretus; differs from older Valens/Dorotheus Necessity'));
  if(mars)lots.push(projectLot('Courage',asc,asc.sign,day?mars:fortune,day?fortune:mars,sect.sect,day?'ASC + directed arc Mars→Fortune':'ASC + directed arc Fortune→Mars'));
  if(jupiter)lots.push(projectLot('Victory',asc,asc.sign,day?spirit:jupiter,day?jupiter:spirit,sect.sect,day?'ASC + directed arc Spirit→Jupiter':'ASC + directed arc Jupiter→Spirit'));
  if(saturn)lots.push(projectLot('Nemesis',asc,asc.sign,day?saturn:fortune,day?fortune:saturn,sect.sect,day?'ASC + directed arc Saturn→Fortune':'ASC + directed arc Fortune→Saturn'));
  warnings.push('Formula family is explicit: Paulus/Panaretus. Brennan notes older Valens/Dorotheus variants for Eros and Necessity; variants must be modeled separately rather than silently mixed.');
  return {sect,lots,warnings};
}

export function compareSuppliedLots(suppliedObjects,computedLots){
  const comparisons=[];
  for(const lot of computedLots){
    const supplied=suppliedObjects.find(o=>o.id===lot.id);if(!supplied)continue;
    const d=Math.abs(normalize360(supplied.longitude-lot.longitude));const delta=Math.min(d,360-d);
    comparisons.push({id:lot.id,supplied_longitude_deg:supplied.longitude,computed_longitude_deg:lot.longitude,difference_deg:delta,
      supplied_display:formatZodiac(supplied.longitude),computed_display:formatZodiac(lot.longitude),match_within_arcminute:delta<=1/60+1e-9});
  }
  return comparisons;
}

export function buildDerivationLedger({objects,angles,sect,lots,aspects,topology,orbPolicy}){
  const entries=[];
  for(const o of [...objects,angles.ASC,...(angles.MC?[angles.MC]:[])]) entries.push({kind:'coordinate',id:o.id,formula:'longitude supplied by input/provider; display formatting downstream',inputs:{sign:o.sign,degree:o.degree,source:o.provenance?.source},result:{longitude_deg:o.longitude,display:formatZodiac(o.longitude)},provenance:o.provenance});
  for(const o of objects) entries.push({kind:'whole_sign_house',id:o.id,formula:'((objectSignIndex - ascSignIndex + 12) mod 12) + 1',inputs:{object_sign:o.sign,asc_sign:angles.ASC.sign},result:{house:o.computed_house},provenance:{calculation:'naf.house.whole_sign.v1'}});
  entries.push({kind:'sect',id:'Sect',formula:sect.method==='geometric_solar_altitude'?'Sun altitude above/below geometric horizon':'Sun position relative to ASC–DSC ecliptic horizon semicircle',inputs:sect.proof,result:{sect:sect.sect,near_horizon:sect.near_horizon},provenance:sect.provenance});
  for(const l of lots) entries.push({kind:'lot',id:l.id,formula:l.formula,inputs:l.proof,result:{longitude_deg:l.longitude,display:formatZodiac(l.longitude),house:l.computed_house,ruler:l.ruler},provenance:l.provenance});
  for(const e of aspects) entries.push({kind:'aspect',id:`${e.a}:${e.b}`,formula:'δ=min(|λa−λb|,360−|λa−λb|); orb=|δ−aspectAngle|; accept if orb≤policy',inputs:{a:e.a,b:e.b,separation_deg:e.separation_deg,exact_angle_deg:e.exact_angle_deg,orb_limit_deg:orbPolicy[e.aspect]},result:{aspect:e.aspect,orb_deg:e.orb_deg,phase:e.phase},provenance:e.provenance});
  for(const e of topology.dispositor_graph.edges) entries.push({kind:'dispositor_edge',id:`${e.from}->${e.to}`,formula:'planet occupying sign → traditional domicile lord of that sign',inputs:{from:e.from,rule:e.rule},result:{to:e.to},provenance:e.provenance});
  entries.push({kind:'topology',id:'SCCs',formula:'Tarjan strongly connected components on directed dispositor graph; terminal SCC has no outgoing edge to another SCC',inputs:{nodes:topology.dispositor_graph.nodes,edges:topology.dispositor_graph.edges.map(e=>[e.from,e.to])},result:{sccs:topology.sccs,terminal_sccs:topology.terminal_sccs},provenance:{calculation:'naf.graph.tarjan_scc.v1'}});
  return entries;
}

export function analyzeChartWithIntegrity(parsed,options={}){
  const orbPolicy=options.orbPolicy||DEFAULT_ORB_POLICY;
  const suppliedLots=parsed.objects.filter(o=>HERMETIC_LOT_IDS.has(o.id));
  const baseParsed={...parsed,objects:parsed.objects.filter(o=>!HERMETIC_LOT_IDS.has(o.id))};
  const base=analyzeChart(baseParsed,options);
  const hermetic=computeHermeticLots(base.objects,base.angles,parsed.metadata||{});
  const aspectObjects=[...base.objects,...hermetic.lots,base.angles.ASC,...(base.angles.MC?[base.angles.MC]:[])];
  const aspects=computeMajorAspects(aspectObjects,orbPolicy);
  const comparisons=compareSuppliedLots(parsed.objects,hermetic.lots);
  const ledger=buildDerivationLedger({objects:base.objects,angles:base.angles,sect:hermetic.sect,lots:hermetic.lots,aspects,topology:base.topology,orbPolicy});
  return {...base,kernel_version:INTEGRITY_VERSION,aspects,lots:hermetic.lots,reference_lots:suppliedLots,sect:hermetic.sect,
    model:{...base.model,lot_model:'Paulus/Panaretus seven Hermetic lots; sect-reversing formulas'},
    validation:{...base.validation,supplied_lot_comparisons:comparisons,lot_warnings:hermetic.warnings},derivation_ledger:ledger,
    integrity:{labels:['input','astronomical-computation','astrological-rule','graph-derived','research-exploratory','interpretive-inference'],
      principle:'Every displayed result must be reversible to inputs, formula/rule version, source tradition, and computational provenance.',
      cautions:['Rounded degree-minute inputs can differ slightly from full-precision ephemeris calculations.','Sect near the horizon is historically and observationally ambiguous; NAF flags near-horizon cases.','Astrological interpretation is not treated as a measured physical quantity.']},
    provenance:{...base.provenance,integrity_extension:'naf-hellenistic-integrity',integrity_version:INTEGRITY_VERSION,epistemic_contract:'Every derived field exposes its rule, numerical inputs, output and provenance in the derivation ledger.'}};
}
