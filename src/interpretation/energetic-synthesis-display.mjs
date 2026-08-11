import {buildEnergeticSynthesis as buildRaw,ENERGETIC_SYNTHESIS_VERSION,ENERGETIC_SYNTHESIS_MODEL,NATURAL_HOUSE_MODEL} from './energetic-synthesis-engine.mjs';

export {ENERGETIC_SYNTHESIS_VERSION,ENERGETIC_SYNTHESIS_MODEL,NATURAL_HOUSE_MODEL};

const HOUSE_SHORT={
  1:'identity, embodiment and autonomy',2:'money, skills, resources and self-support',3:'communication, learning, siblings/peers and information exchange',
  4:'home, family roots and private foundations',5:'children, creativity, pleasure and personally generated works',6:'work routines, health practice, maintenance and craft',
  7:'partners, clients, contracts and consequential one-to-one exchange',8:'shared resources, dependency, intimacy, loss and entanglement',9:'higher learning, religion/philosophy, publication and truth-seeking',
  10:'career, authority, reputation and public consequence',11:'friends, collaborators, communities, patrons and future projects',12:'withdrawal, hidden processes, sacrifice, solitude and private struggle'
};

function ordinal(n){
  const x=Number(n),mod100=x%100;
  if(mod100>=11&&mod100<=13)return `${x}th`;
  if(x%10===1)return `${x}st`;
  if(x%10===2)return `${x}nd`;
  if(x%10===3)return `${x}rd`;
  return `${x}th`;
}
function normalizeString(s){return String(s).replace(/\b(\d{1,2})th house\b/gi,(_,n)=>`${ordinal(n)} house`);}
function normalize(value){
  if(typeof value==='string')return normalizeString(value);
  if(Array.isArray(value))return value.map(normalize);
  if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,normalize(v)]));
  return value;
}

function conditionText(record){
  if(!record)return'';
  const e=record.essential||{},s=record.sect||{},p=record.positional?.angularity||{};
  const present=[];
  if(e.domicile?.present)present.push('domicile');
  if(e.exaltation?.present)present.push('exaltation');
  if(e.adversity?.present)present.push('adversity/detriment');
  if(e.depression?.present)present.push('depression/fall');
  if(e.bound?.self_ruled)present.push('its own Egyptian bound');
  if(e.triplicity?.active_for_chart)present.push('active sect triplicity rulership');
  const sect=s.condition?.status||'indeterminate',ang=p.class||'indeterminate';
  const dignity=present.length?`The traditional condition layer marks ${record.planet} with ${present.join(', ')}.`:`The current primitive condition layer does not place ${record.planet} in domicile, exaltation, adversity, or depression at this position.`;
  const sectText=sect==='in_sect'?`${record.planet} is in sect, so its planetary family matches the chart sect under the selected rule model.`:sect==='out_of_sect'?`${record.planet} is out of sect, so its function operates outside the chart's sect family and may require more deliberate regulation under the selected traditional model.`:`Its sect match is indeterminate in the current state.`;
  const angularText=ang==='angular'?`Its Whole-Sign place is angular, giving the function an action-producing and topically prominent place classification.`:ang==='succedent'?`Its Whole-Sign place is succedent, emphasizing continuity, accumulation, support and what develops from prior action.`:ang==='declining'?`Its Whole-Sign place is declining/cadent, emphasizing dispersal, preparation, learning, service, transition or movement away from an angular pivot.`:`Its Whole-Sign angular-triad class is indeterminate.`;
  const bound=e.bound?.bound_ruler?` At ${record.identity?.degree_in_sign?.toFixed?.(2)??record.identity?.degree_in_sign}° of ${record.identity?.sign}, its Egyptian bound ruler is ${e.bound.bound_ruler}${e.bound.self_ruled?' itself':''}.`:'';
  return `${dignity} ${sectText} ${angularText}${bound} These facts qualify how the planetary function is situated inside the selected traditional model; they do not replace sign, house, aspects, or ruler routing.`;
}

function enrichPlacementConditions(out,conditions){
  for(const card of out.placements||[]){
    const id=card.objects?.[0],record=conditions?.by_planet?.[id];
    if(!record)continue;
    const text=conditionText(record);
    card.sections.traditional_condition=text;
    card.sections.graph_context=[card.sections.graph_context,`Traditional condition qualifier: ${text}`].filter(Boolean).join(' ');
  }
}

function enrichTerminalCircuit(out,analysis,graph,conditions){
  const card=(out.graph_cards||[]).find(x=>x.id==='energy.graph.terminal_basin');
  const fd=graph?.graphs?.classical_dispositor;if(!card||!fd)return;
  const basin=[...(fd.terminal_basins||[])].sort((a,b)=>b.basin_size-a.basin_size)[0];
  if(!basin?.terminal_members?.length)return;
  const map=Object.fromEntries((analysis?.objects||[]).map(o=>[o.id,o]));
  const members=basin.terminal_members.map(id=>map[id]).filter(Boolean);
  const descriptors=members.map(o=>`${o.id} in ${o.sign}, ${ordinal(o.computed_house)} house (${HOUSE_SHORT[o.computed_house]||'its house field'})`);
  const edgeSet=new Set((analysis?.topology?.dispositor_graph?.edges||[]).map(e=>`${e.from}->${e.to}`));
  const reciprocal=members.length===2&&edgeSet.has(`${members[0].id}->${members[1].id}`)&&edgeSet.has(`${members[1].id}->${members[0].id}`);
  const conditionBits=members.map(o=>conditionText(conditions?.by_planet?.[o.id])).filter(Boolean);
  const houseLoop=members.map(o=>`${ordinal(o.computed_house)} house: ${HOUSE_SHORT[o.computed_house]||'house field'}`).join(' ↔ ');
  card.sections.energetic_synthesis += ` In this specific chart, the terminal processors are ${descriptors.join(' and ')}.${reciprocal?` Their rulership is recursive: each planet occupies a sign ruled by the other, so neither function reaches a one-way stopping point; the circuit keeps handing the agenda back across the pair.`:''} This makes the graph result a house circuit as well as a planet circuit: ${houseLoop}.`;
  if(members.length===2){
    const [a,b]=members;
    card.sections.material_expression=`The material translation is a repeated feedback loop between ${ordinal(a.computed_house)}-house ${HOUSE_SHORT[a.computed_house]||'themes'} and ${ordinal(b.computed_house)}-house ${HOUSE_SHORT[b.computed_house]||'themes'}. An issue may begin somewhere else in the chart, but once its ruler path reaches this circuit, the practical question often becomes: what has to be decided, exchanged, valued, communicated, organized or made usable across these two house fields before the larger issue can settle? This does not mean every event is “about” these houses. It means the selected rulership model repeatedly routes disparate topics through them.`;
  }
  if(conditionBits.length){
    const c=conditionBits.join(' ');
    card.sections.traditional_condition=c;
    card.sections.energetic_synthesis+=` The terminal circuit is also asymmetrically conditioned rather than abstractly equal: ${c}`;
  }
}

export function buildEnergeticSynthesis(analysis,graph,conditions=null){
  const out=normalize(buildRaw(analysis,graph,conditions));
  enrichPlacementConditions(out,conditions);
  enrichTerminalCircuit(out,analysis,graph,conditions);
  return normalize(out);
}
