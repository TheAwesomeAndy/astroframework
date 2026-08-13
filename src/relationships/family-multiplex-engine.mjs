import {MAJOR_ASPECTS,shortestSeparation,classifyPhase} from '../kernel/noetic-kernel.mjs';
import {EXTENDED_ASPECTS,DEFAULT_EXTENDED_ORB_POLICY} from '../research/aspect-family-engine.mjs';

export const FAMILY_MULTIPLEX_VERSION='0.4.4';
export const FAMILY_MULTIPLEX_MODEL='naf.relationships.family_multiplex.v0.4.4';

const DEFAULT_MAJOR_ORBS={conjunction:8,sextile:5,square:8,trine:8,opposition:8};
const dref=id=>String(id||'').startsWith('derivation:')?String(id):`derivation:${id}`;
const uniq=xs=>[...new Set((xs||[]).filter(Boolean))];

function roleMap(bundle){
  const roles={};const add=(id,role,detail=null)=>{if(!id)return;(roles[id]??=[]).push({role,detail})};
  const fd=bundle?.graph?.graphs?.classical_dispositor;
  for(const b of fd?.terminal_basins||[])for(const p of b.terminal_members||[])add(p,'terminal_member',{basin_size:b.basin_size,basin_fraction:b.basin_fraction});
  for(const b of fd?.nonterminal_bottlenecks||[])add(b.node,'dispositor_bottleneck',{upstream_count:b.upstream_count,upstream_fraction:b.upstream_fraction});
  for(const p of bundle?.graph?.graphs?.aspect?.articulation_points||[])add(p,'aspect_articulation');
  for(const band of bundle?.river?.planetary_bands||[]){add(band.from,'house_route_gateway',{edge:`${band.from}->${band.to}`,route_count:band.count,houses:band.houses});add(band.to,'house_route_gateway_target',{edge:`${band.from}->${band.to}`,route_count:band.count,houses:band.houses})}
  for(const [p,c] of Object.entries(bundle?.conditions?.compound?.by_planet||{}))if(c?.presence&&c.presence!=='none')add(p,'compound_condition',{presence:c.presence});
  return roles;
}

function objects(bundle){return (bundle?.analysis?.objects||[]).filter(o=>Number.isFinite(o.longitude));}
function aspectCatalog(includeExtended,majorOrbs,extendedOrbs){
  const major=MAJOR_ASPECTS.map(a=>({...a,label:a.name,limit:majorOrbs[a.name],scope:'major'}));
  const ext=includeExtended?EXTENDED_ASPECTS.map(a=>({...a,limit:extendedOrbs[a.name],scope:'extended'})):[];
  return [...major,...ext].filter(a=>Number.isFinite(a.limit));
}

export function buildFamilyMultiplex(bundleA,bundleB,{labelA='Chart A',labelB='Chart B',includeExtended=false,majorOrbs=DEFAULT_MAJOR_ORBS,extendedOrbs=DEFAULT_EXTENDED_ORB_POLICY}={}){
  if(!bundleA?.analysis||!bundleB?.analysis)throw new Error('Family multiplex requires two already-computed Noetic Atlas state bundles.');
  const aObjects=objects(bundleA),bObjects=objects(bundleB),rolesA=roleMap(bundleA),rolesB=roleMap(bundleB),catalog=aspectCatalog(includeExtended,majorOrbs,extendedOrbs),contacts=[],ledger_entries=[];
  for(const a of aObjects)for(const b of bObjects){
    const separation=shortestSeparation(a.longitude,b.longitude);let best=null;
    for(const asp of catalog){const orb=Math.abs(separation-asp.angle);if(orb<=asp.limit&&(!best||orb<best.orb_deg))best={...asp,orb_deg:orb}}
    if(!best)continue;
    const aRoles=rolesA[a.id]||[],bRoles=rolesB[b.id]||[],structural=aRoles.length>0||bRoles.length>0;
    const id=`family_contact:${labelA}:${a.id}:${labelB}:${b.id}:${best.name}`.replace(/\s+/g,'_');
    const row={id,from:{chart:labelA,id:a.id,sign:a.sign,house:a.computed_house,roles:aRoles},to:{chart:labelB,id:b.id,sign:b.sign,house:b.computed_house,roles:bRoles},aspect:best.name,aspect_scope:best.scope,exact_angle_deg:best.angle,orb_deg:best.orb_deg,phase:classifyPhase(a,b,best.angle),structural_contact:structural,derivation_ref:dref(id)};
    contacts.push(row);
    ledger_entries.push({kind:'family_multiplex_contact',id,epistemic_layer:'astrological-rule',rule_id:`naf.relationship.cross_chart.${best.scope}.${best.name}.v1`,source_reference:'Cross-chart geometric contact between two independently computed Noetic Atlas states. Structural-role labels are inherited from each chart and do not change the aspect calculation.',inputs:{a_chart:labelA,a:a.id,b_chart:labelB,b:b.id,separation_deg:separation,aspect_angle_deg:best.angle,orb_limit_deg:best.limit},result:{aspect:best.name,orb_deg:best.orb_deg,structural_contact:structural,a_roles:aRoles,b_roles:bRoles},dependencies:[],derivation_ref:row.derivation_ref,provenance:{model:FAMILY_MULTIPLEX_MODEL,version:FAMILY_MULTIPLEX_VERSION}});
  }
  contacts.sort((x,y)=>(y.structural_contact?1:0)-(x.structural_contact?1:0)||x.orb_deg-y.orb_deg);
  const structuralContacts=contacts.filter(c=>c.structural_contact);
  return {
    model_id:FAMILY_MULTIPLEX_MODEL,version:FAMILY_MULTIPLEX_VERSION,
    charts:[{label:labelA,ascendant:bundleA.analysis.angles?.ASC?.sign},{label:labelB,ascendant:bundleB.analysis.angles?.ASC?.sign}],
    include_extended_aspects:includeExtended,contacts,structural_contacts:structuralContacts,ledger_entries,
    summary:{contact_count:contacts.length,structural_contact_count:structuralContacts.length,contacted_terminal_nodes:uniq(structuralContacts.flatMap(c=>[...c.from.roles.filter(r=>r.role==='terminal_member').map(()=>`${labelA}:${c.from.id}`),...c.to.roles.filter(r=>r.role==='terminal_member').map(()=>`${labelB}:${c.to.id}`)])),contacted_bottlenecks:uniq(structuralContacts.flatMap(c=>[...c.from.roles.filter(r=>r.role==='dispositor_bottleneck').map(()=>`${labelA}:${c.from.id}`),...c.to.roles.filter(r=>r.role==='dispositor_bottleneck').map(()=>`${labelB}:${c.to.id}`)]))},
    applicability:{two_state_contract:'Each chart must already be computed and auditable independently. This engine compares states; it does not recalculate either natal chart.',interpretation:'A contact to a terminal member or routing bottleneck is a cross-layer structural observation, not proof of compatibility, fate, or a family role.',parent_child:'No parent/father/mother designation is inferred from a 4th/10th house alone. Relationship labels are supplied externally and remain separate from natal house semantics.'}
  };
}
