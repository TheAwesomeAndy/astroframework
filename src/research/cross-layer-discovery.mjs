export const CROSS_LAYER_DISCOVERY_VERSION='0.4.4';
export const CROSS_LAYER_DISCOVERY_MODEL='naf.research.cross_layer_discovery.v0.4.4';

const dref=id=>String(id||'').startsWith('derivation:')?String(id):`derivation:${id}`;
const raw=ref=>String(ref||'').replace(/^derivation:/,'');
const uniq=xs=>[...new Set((xs||[]).filter(Boolean))];

function mk({id,kind,title,statement,measurement,participants=[],dependencies=[],limits=[]}){
  const derivation_ref=dref(id);
  const finding={
    id,kind,title,statement,measurement,participants:uniq(participants),
    epistemic_layer:'research-exploratory',interpretive_status:'detected-no-null-model',
    derivation_ref,limits:[...limits,'No rarity, destiny, causal, or soul-signature claim is made without an explicit comparison/null model.']
  };
  const derivation_entry={
    kind:'cross_layer_discovery',id,epistemic_layer:'research-exploratory',
    rule_id:`naf.discovery.${kind}.v1`,source_reference:'Derived only from already-computed Noetic Atlas graph, condition, resonance, and House River objects.',
    inputs:{participants:finding.participants},result:{statement,measurement},dependencies:uniq(dependencies.map(raw)),
    derivation_ref,provenance:{model:CROSS_LAYER_DISCOVERY_MODEL,version:CROSS_LAYER_DISCOVERY_VERSION}
  };
  return {finding,derivation_entry};
}

function terminalConditioned({conditions,graph}){
  const fd=graph?.graphs?.classical_dispositor;if(!fd)return[];
  const basin=[...(fd.terminal_basins||[])].sort((a,b)=>b.basin_size-a.basin_size)[0];
  if(!basin?.terminal_members?.length)return[];
  const members=basin.terminal_members;
  const memberSet=new Set(members);
  const compound=members.map(p=>({planet:p,presence:conditions?.compound?.by_planet?.[p]?.presence||'none'}));
  const relations=(conditions?.relational?.relations||[]).filter(r=>{
    const nodes=r.from&&r.to?[r.from,r.to]:[r.a,r.b];return nodes.filter(Boolean).every(x=>memberSet.has(x));
  });
  const superiority=(conditions?.relational?.relations||[]).filter(r=>['overcoming','domination'].includes(r.type)&&((memberSet.has(r.from)&&!memberSet.has(r.to))||(!memberSet.has(r.from)&&memberSet.has(r.to))));
  const testimonies=(conditions?.compound?.testimonies||[]).filter(t=>memberSet.has(t.target)||(t.agents||[]).some(a=>memberSet.has(a)));
  const deps=['SCCs',...relations.map(x=>x.id),...superiority.map(x=>x.id),...testimonies.map(x=>x.id)];
  const {finding,derivation_entry}=mk({
    id:`discovery:conditioned_terminal:${members.slice().sort().join('.')}`,kind:'conditioned_terminal',title:'Condition-qualified terminal circuit',
    statement:`The terminal dispositor circuit ${members.join(' ↔ ')} captures ${basin.basin_size} classical starting routes and also carries independently computed relational/compound state.`,
    measurement:{terminal_members:members,basin_fraction:basin.basin_fraction,compound_state:compound,internal_relations:relations.map(r=>r.id),boundary_superiority_relations:superiority.map(r=>r.id),compound_testimonies:testimonies.map(t=>t.id)},
    participants:uniq([...members,...relations.flatMap(r=>[r.from,r.to,r.a,r.b]),...testimonies.flatMap(t=>[t.target,...(t.agents||[])])]),dependencies:deps,
    limits:['Terminal-basin membership is routing structure, not proof that a planet dominates the native.']
  });
  return [{finding,derivation_entry}];
}

function houseConvergence({graph,river}){
  const fd=graph?.graphs?.classical_dispositor;if(!fd||!river)return[];const out=[];
  for(const b of (fd.nonterminal_bottlenecks||[]).slice(0,6)){
    const houses=(river.houses||[]).filter(h=>(h.route||[]).includes(b.node)).map(h=>Number(h.house));
    if(houses.length<2)continue;
    const depBands=(river.planetary_bands||[]).filter(x=>x.from===b.node||x.to===b.node).map(x=>x.id);
    const deps=[...depBands,...(river.source_bands||[]).filter(x=>houses.includes(Number(x.house))).map(x=>x.id)];
    const {finding,derivation_entry}=mk({
      id:`discovery:house_convergence:${b.node}`,kind:'house_convergence',title:`House-topic convergence through ${b.node}`,
      statement:`${houses.map(h=>`${h}H`).join(', ')} share ${b.node} as a nonterminal ruler-route checkpoint before terminal entry.`,
      measurement:{node:b.node,houses,house_count:houses.length,upstream_count:b.upstream_count,upstream_fraction:b.upstream_fraction},
      participants:[b.node],dependencies:deps,
      limits:['Shared routing does not mean the houses have identical meanings or outcomes.']
    });out.push({finding,derivation_entry});
  }
  return out;
}

function motifCrossLayer({conditions,graph}){
  const out=[];
  for(const m of graph?.graphs?.aspect?.recognized_motifs||[]){
    const set=new Set(m.nodes||[]);
    const rels=(conditions?.relational?.relations||[]).filter(r=>{
      const nodes=r.from&&r.to?[r.from,r.to]:[r.a,r.b];return nodes.filter(Boolean).length===2&&nodes.filter(Boolean).every(x=>set.has(x));
    });
    const comp=(conditions?.compound?.testimonies||[]).filter(t=>set.has(t.target)||(t.agents||[]).some(a=>set.has(a)));
    if(!rels.length&&!comp.length)continue;
    const edgeDeps=(m.edges||[]).map(e=>`${e.a}:${e.b}`);
    const {finding,derivation_entry}=mk({
      id:`discovery:motif_cross_layer:${m.recognized}:${(m.nodes||[]).join('.')}`,kind:'motif_cross_layer',title:`${m.recognized.replaceAll('_',' ')} with condition/relationship overlay`,
      statement:`The ${m.recognized.replaceAll('_',' ')} formed by ${(m.nodes||[]).join(', ')} also contains independently computed relational or compound-condition structure.`,
      measurement:{motif:m.recognized,nodes:m.nodes,relations:rels.map(r=>r.id),compound_testimonies:comp.map(t=>t.id)},
      participants:m.nodes,dependencies:[...edgeDeps,...rels.map(r=>r.id),...comp.map(t=>t.id)],
      limits:['Cross-layer coincidence is reported exactly; no additive strength or statistical unusualness is inferred.']
    });out.push({finding,derivation_entry});
  }
  return out;
}

function multiRole({conditions,graph}){
  const fd=graph?.graphs?.classical_dispositor,ag=graph?.graphs?.aspect;if(!fd||!ag)return[];const out=[];
  const bottlenecks=new Set((fd.nonterminal_bottlenecks||[]).map(x=>x.node));
  for(const p of ag.articulation_points||[]){
    const comp=conditions?.compound?.by_planet?.[p];
    const roles=['aspect_articulation'];if(bottlenecks.has(p))roles.push('dispositor_bottleneck');if(comp?.presence&&comp.presence!=='none')roles.push(`compound_${comp.presence}`);
    if(roles.length<2)continue;
    const deps=[...(graph?.findings||[]).filter(f=>f.scope?.nodes?.includes?.(p)).flatMap(f=>f.integrity?.ledger_refs||[]),...(comp?.bonifications_received||[]).map(t=>t.id),...(comp?.maltreatments_received||[]).map(t=>t.id)];
    const {finding,derivation_entry}=mk({
      id:`discovery:multi_role:${p}`,kind:'multi_role',title:`${p} occupies multiple independently computed structural roles`,
      statement:`${p} simultaneously appears as ${roles.join(', ')} across separate graph/condition layers.`,
      measurement:{planet:p,roles},participants:[p],dependencies:deps,
      limits:['Role intersection is a structural observation, not a ranking of planetary importance.']
    });out.push({finding,derivation_entry});
  }
  return out;
}

function resonanceCondition({conditions,resonance}){
  if(!resonance?.rotation)return[];
  const notable=[];
  for(const h of resonance.houses||[]){
    const ruler=h.actual?.ruler;if(!ruler)continue;const sig=conditions?.signatures?.[ruler];
    const tokens=(sig?.tokens||[]).filter(t=>['adversity','depression','bonification_received','maltreatment_received','enclosure','reception_given','reception_received'].includes(t.key));
    if(tokens.length)notable.push({house:h.house,ruler,tokens:tokens.map(t=>({key:t.key,value:t.value,ref:t.derivation_ref}))});
  }
  if(!notable.length)return[];
  const deps=notable.flatMap(x=>x.tokens.map(t=>t.ref));
  const {finding,derivation_entry}=mk({
    id:'discovery:resonance_condition:global',kind:'resonance_condition',title:'Ascensional phase pattern intersects conditioned house rulers',
    statement:`The chart's ${resonance.rotation.phase_character||'Whole-Sign phase'} resonance pattern is carried by actual house rulers whose condition states are independently non-neutral in ${notable.length} house mapping(s).`,
    measurement:{phase_character:resonance.rotation.phase_character,element_preserved_count:resonance.rotation.element_preserved_count,mode_preserved_count:resonance.rotation.mode_preserved_count,conditioned_house_rulers:notable},
    participants:uniq(notable.map(x=>x.ruler)),dependencies:deps,
    limits:['Natural-house correspondence remains a secondary modern phenomenological comparison, not a competing traditional house system.']
  });return[{finding,derivation_entry}];
}

export function buildCrossLayerDiscoveries({analysis=null,conditions=null,graph=null,resonance=null,river=null}={}){
  const rows=[...terminalConditioned({conditions,graph}),...houseConvergence({graph,river}),...motifCrossLayer({conditions,graph}),...multiRole({conditions,graph}),...resonanceCondition({conditions,resonance})];
  return {
    model_id:CROSS_LAYER_DISCOVERY_MODEL,version:CROSS_LAYER_DISCOVERY_VERSION,
    status:'research-exploratory-no-null-model',
    findings:rows.map(x=>x.finding),derivation_entries:rows.map(x=>x.derivation_entry),
    restrictions:['Detectors report exact cross-layer intersections only.','No detector may label a pattern rare, fated, powerful, or a hidden soul signature without an explicit comparison/null model.','Discovered objects must remain proof-bearing before they are eligible for Reading.']
  };
}
