import {CLASSICAL_PLANETS} from './primitive-condition-engine.mjs';

export const CONDITION_SIGNATURE_VERSION='0.4.2';
export const CONDITION_SIGNATURE_MODEL='naf.condition.signature.v0.4.2';

function presentEssential(e={}){
  const out=[];
  if(e.domicile?.present)out.push({key:'domicile',label:'domicile',status:'present',derivation_ref:`derivation:condition:${e.planet||''}:domicile`});
  if(e.exaltation?.present)out.push({key:'exaltation',label:'exaltation',status:'present'});
  if(e.adversity?.present)out.push({key:'adversity',label:'adversity',status:'present'});
  if(e.depression?.present)out.push({key:'depression',label:'fall/depression',status:'present'});
  return out;
}

export function buildConditionSignature(planet,primitiveConditions,relationalConditions){
  if(!CLASSICAL_PLANETS.includes(planet))return {planet,model_id:CONDITION_SIGNATURE_MODEL,applicability:'not_applicable',tokens:[],derivation_refs:[]};
  const p=primitiveConditions?.by_planet?.[planet],r=relationalConditions?.by_planet?.[planet];
  if(!p)return {planet,model_id:CONDITION_SIGNATURE_MODEL,applicability:'missing_primitive_record',tokens:[],derivation_refs:[]};
  const tokens=[];
  const add=(key,label,value,status,ref=null)=>tokens.push({key,label,value,status,derivation_ref:ref});
  for(const x of presentEssential({...p.essential,planet}))add(x.key,x.label,'present','present',`derivation:condition:${planet}:${x.key}`);
  add('sect','sect',p.sect?.condition?.status||'unknown',p.sect?.condition?.status||'unknown',`derivation:condition:${planet}:sect_condition`);
  add('angularity','house state',p.positional?.angularity?.class||'unknown',p.positional?.angularity?.class||'unknown',`derivation:condition:${planet}:angularity`);
  if(p.essential?.bound?.bound_ruler)add('bound','bound',p.essential.bound.bound_ruler,p.essential.bound.self_ruled?'self_ruled':'other_ruled',`derivation:condition:${planet}:bound`);
  if(p.essential?.triplicity?.planet_roles?.length)add('triplicity','triplicity',p.essential.triplicity.planet_roles.join(', '),p.essential.triplicity.active_for_chart?'active':'participating',`derivation:condition:${planet}:triplicity`);
  if(r){
    if(r.receptions_given.length)add('reception_given','receives',r.receptions_given.map(x=>x.to).join(', '),'relational',r.receptions_given[0].derivation_ref);
    if(r.receptions_received.length)add('reception_received','received by',r.receptions_received.map(x=>x.from).join(', '),'relational',r.receptions_received[0].derivation_ref);
    if(r.exchanges.length)add('exchange','exchange',r.exchanges.map(x=>x.a===planet?x.b:x.a).join(', '),'relational',r.exchanges[0].derivation_ref);
    if(r.mutual_receptions.length)add('mutual_reception','mutual reception',r.mutual_receptions.map(x=>x.a===planet?x.b:x.a).join(', '),'relational',r.mutual_receptions[0].derivation_ref);
    if(r.overcoming_given.length)add('overcoming_given','overcomes',r.overcoming_given.map(x=>x.to).join(', '),'relational',r.overcoming_given[0].derivation_ref);
    if(r.overcoming_received.length)add('overcoming_received','overcome by',r.overcoming_received.map(x=>x.from).join(', '),'relational',r.overcoming_received[0].derivation_ref);
    if(r.domination_given.length)add('domination_given','dominates',r.domination_given.map(x=>x.to).join(', '),'relational',r.domination_given[0].derivation_ref);
    if(r.domination_received.length)add('domination_received','dominated by',r.domination_received.map(x=>x.from).join(', '),'relational',r.domination_received[0].derivation_ref);
  }
  return {
    planet,model_id:CONDITION_SIGNATURE_MODEL,version:CONDITION_SIGNATURE_VERSION,applicability:'full',
    tokens,
    compact:tokens.map(t=>`${t.label}:${t.value}`).join(' | '),
    derivation_refs:[...new Set(tokens.map(t=>t.derivation_ref).filter(Boolean))],
    epistemic_boundary:'Categorical condition signature only; no scalar planet-strength score is computed.'
  };
}

export function buildConditionSignatures(primitiveConditions,relationalConditions){
  return Object.fromEntries(CLASSICAL_PLANETS.map(p=>[p,buildConditionSignature(p,primitiveConditions,relationalConditions)]));
}

export function renderConditionSignatureHTML(signature,{compact=false}={}){
  if(!signature||signature.applicability!=='full')return '<span class="condSig na">condition n/a</span>';
  const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const tokens=compact?signature.tokens.slice(0,5):signature.tokens;
  return `<span class="condSig" data-planet="${esc(signature.planet)}">${tokens.map(t=>`<span class="condToken" data-derivation="${esc(t.derivation_ref||'')}"><b>${esc(t.label)}</b> ${esc(t.value)}</span>`).join('')}</span>`;
}
