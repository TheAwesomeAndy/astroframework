export const EVIDENCE_PACK_VERSION='0.4.4';
export const EVIDENCE_PACK_MODEL='naf.reading.evidence_pack.v0.4.4';

const dref=id=>String(id||'').startsWith('derivation:')?String(id):`derivation:${id}`;
const unique=xs=>[...new Set((xs||[]).filter(Boolean))];
const ordinal=n=>{const x=Number(n),m=x%100;if(m>=11&&m<=13)return`${x}th`;if(x%10===1)return`${x}st`;if(x%10===2)return`${x}nd`;if(x%10===3)return`${x}rd`;return`${x}th`};

function placementRecord(o){
  return {
    evidence_id:`placement:${o.id}`,
    id:o.id,
    type:o.type||'planet',
    sign:o.sign,
    whole_sign_house:o.computed_house??null,
    house_label:Number.isFinite(o.computed_house)?`${ordinal(o.computed_house)} house`:null,
    traditional_ruler:o.ruler||null,
    motion:o.motion||null,
    derivation_refs:unique([dref(o.id),Number.isFinite(o.computed_house)?dref(o.id):null])
  };
}

function conditionRecord(signature){
  return {
    evidence_id:`condition:${signature.planet}`,
    planet:signature.planet,
    applicability:signature.applicability,
    tokens:(signature.tokens||[]).map(t=>({key:t.key,label:t.label,value:t.value,status:t.status,derivation_ref:t.derivation_ref||null})),
    derivation_refs:unique(signature.derivation_refs||[]),
    epistemic_boundary:signature.epistemic_boundary||null
  };
}

function relationRecord(r){
  return {
    evidence_id:`relation:${r.id}`,
    id:r.id,type:r.type,from:r.from||null,to:r.to||null,a:r.a||null,b:r.b||null,
    rule_id:r.rule_id,source_reference:r.source_reference,
    configuration:r.result?.configuration||r.inputs?.configuration||null,
    tradition:r.tradition||null,
    derivation_ref:r.derivation_ref
  };
}

function compoundRecord(t){
  return {
    evidence_id:`compound:${t.id}`,
    id:t.id,type:t.type,target:t.target,agents:[...(t.agents||[])],mechanism:t.mechanism,status:t.status,
    rule_id:t.rule_id,source_reference:t.source_reference,
    sect_effects:t.result?.sect_effects||[],reception_effects:t.result?.reception_effects||[],
    derivation_ref:t.derivation_ref
  };
}

function enclosureRecord(e){
  return {
    evidence_id:`enclosure:${e.id}`,
    id:e.id,target:e.target,agents:[...(e.agents||[])],enclosure_kind:e.enclosure_kind,
    mechanism:e.mechanism,status:e.status,intervention_count:e.result?.interventions?.length||0,
    rule_id:e.rule_id,source_reference:e.source_reference,derivation_ref:e.derivation_ref
  };
}

function routeRefs(route){
  const refs=[];
  for(let i=0;i<(route||[]).length-1;i++)refs.push(dref(`${route[i]}->${route[i+1]}`));
  return refs;
}

function frameRecord(card){
  const id=card.objects?.[0]||card.id||card.title;
  const s=card.sections||{};
  return {
    evidence_id:`interpretive_frame:${card.id||id}`,
    id:card.id||id,
    subject:id,
    title:card.title,
    core_energy:s.core_energy||s.plain_language||null,
    balanced_expression:s.balanced_expression||null,
    under_expression:s.under_expression||null,
    over_expression:s.over_expression||null,
    soul_question:s.soul_question||null,
    embodiment_practices:[...(s.embodiment_practices||[])],
    epistemic_layer:'interpretive-inference',
    source_model:'naf.interpretation.energetic_synthesis.v0.4.1.2'
  };
}

export function buildEvidencePack({analysis,conditions,graph,resonance,river,energy=null,discoveries=null}={}){
  if(!analysis)throw new Error('Evidence Pack requires deterministic analysis.');
  const placements=(analysis.objects||[]).map(placementRecord);
  const placementById=Object.fromEntries(placements.map(x=>[x.id,x]));
  const classicalGraph=graph?.graphs?.classical_dispositor||null;
  const planetRoutes=Object.fromEntries(Object.entries(classicalGraph?.node_routes||{}).map(([planet,route])=>[planet,{
    evidence_id:`planet_route:${planet}`,planet,route:[...route],derivation_refs:routeRefs(route)
  }]));
  const terminalBasins=(classicalGraph?.terminal_basins||[]).map((b,i)=>({
    evidence_id:`terminal_basin:${i}`,
    terminal_members:[...(b.terminal_members||[])],basin_members:[...(b.basin_members||[])],
    basin_size:b.basin_size,basin_fraction:b.basin_fraction,
    derivation_refs:[dref('SCCs')]
  }));
  const houseRoutes=(river?.houses||analysis.topology?.house_routes||[]).map(h=>({
    evidence_id:`house_route:${h.house}`,house:Number(h.house),topic:h.topic||null,sign:h.sign||null,
    entry_ruler:h.entry_ruler||h.route?.[0]||null,route:[...(h.route||[])],terminated:h.terminated||null,
    derivation_refs:unique([river?.source_bands?.find(b=>Number(b.house)===Number(h.house))?.derivation_ref,...routeRefs(h.route)])
  }));
  const conditionSignatures=Object.fromEntries(Object.entries(conditions?.signatures||{}).map(([p,s])=>[p,conditionRecord(s)]));
  const relations=(conditions?.relational?.relations||[]).map(relationRecord);
  const compound=(conditions?.compound?.testimonies||[]).map(compoundRecord);
  const enclosures=(conditions?.compound?.enclosures||[]).map(enclosureRecord);
  const resonanceHouses=(resonance?.houses||[]).map(h=>({
    evidence_id:`resonance:${h.house}`,house:h.house,
    natural:{sign:h.natural?.sign,ruler:h.natural?.ruler,element:h.natural?.element,mode:h.natural?.mode},
    actual:{sign:h.actual?.sign,ruler:h.actual?.ruler,element:h.actual?.element,mode:h.actual?.mode},
    actual_ruler_context:h.actual_ruler_context?{id:h.actual_ruler_context.id,sign:h.actual_ruler_context.sign,house:h.actual_ruler_context.house}:null,
    element_relation:h.element_relation,mode_relation:h.mode_relation,
    natural_house_secondary:true,
    derivation_refs:unique([dref('ASC'),h.actual_ruler_context?.id?dref(h.actual_ruler_context.id):null])
  }));
  const motifs=(graph?.graphs?.aspect?.recognized_motifs||[]).map((m,i)=>({
    evidence_id:`motif:${i}:${m.recognized}`,type:m.recognized,nodes:[...(m.nodes||[])],
    edges:(m.edges||[]).map(e=>({a:e.a,b:e.b,aspect:e.aspect,orb_deg:e.orb_deg,phase:e.phase,derivation_ref:dref(`${e.a}:${e.b}`)})),
    derivation_refs:(m.edges||[]).map(e=>dref(`${e.a}:${e.b}`))
  }));
  const houseRiverBands=(river?.planetary_bands||[]).map(b=>({
    evidence_id:`river_band:${b.id}`,id:b.id,from:b.from,to:b.to,count:b.count,houses:[...(b.houses||[])],topics:[...(b.topics||[])],
    width_basis:b.width_basis,derivation_ref:b.derivation_ref
  }));
  const graphFacts={
    metrics:(graph?.metrics||[]).map(m=>({id:m.id,label:m.label,value:m.value,unit:m.unit||null,definition:m.definition,interpretation_status:m.interpretation_status})),
    findings:(graph?.findings||[]).map(f=>({id:f.id,title:f.title,statement:f.statement,category:f.category,measurement:f.measurement,interpretation_status:f.interpretation_status}))
  };
  // Only placement-level energetic frames with a deterministic placement anchor are eligible for auditable Reading.
  // Graph/aspect aggregate cards remain available in their native views until they have normalized proof-bearing frame contracts.
  const interpretiveFrames=(energy?.placements||[]).map(frameRecord).filter(f=>Boolean(placementById[f.subject]));
  const discoveryRows=(discoveries?.findings||[]).map(f=>({
    evidence_id:`discovery:${f.id}`,id:f.id,kind:f.kind,title:f.title,statement:f.statement,measurement:f.measurement,
    participants:[...(f.participants||[])],epistemic_layer:f.epistemic_layer,interpretive_status:f.interpretive_status,
    derivation_ref:f.derivation_ref
  }));
  const evidenceIndex={};
  for(const row of [
    ...placements,...Object.values(planetRoutes),...terminalBasins,...houseRoutes,...Object.values(conditionSignatures),
    ...relations,...compound,...enclosures,...resonanceHouses,...motifs,...houseRiverBands,...interpretiveFrames,...discoveryRows
  ])if(row?.evidence_id)evidenceIndex[row.evidence_id]=row;
  return {
    model_id:EVIDENCE_PACK_MODEL,version:EVIDENCE_PACK_VERSION,
    contract:{
      generator_may_recompute:false,
      raw_longitudes_exposed:false,
      natural_house_overlay:'secondary_modern_comparison_only',
      structural_claims_require_derivation_refs:true,
      unsupported_or_deferred_rules_must_not_be_promoted:true
    },
    chart:{ascendant_sign:analysis.angles?.ASC?.sign||null,sect:analysis.sect?.sect||null},
    placements,placement_by_id:placementById,planet_routes:planetRoutes,terminal_basins:terminalBasins,house_routes:houseRoutes,
    condition_signatures:conditionSignatures,relations,compound_testimonies:compound,enclosures,
    resonance:{rotation:resonance?{ascendant_sign:resonance.ascendant_sign,sign_steps:resonance.rotation?.sign_steps,degrees:resonance.rotation?.degrees,element_preserved_count:resonance.rotation?.element_preserved_count,mode_preserved_count:resonance.rotation?.mode_preserved_count,phase_character:resonance.rotation?.phase_character}:null,houses:resonanceHouses},
    house_river:{width_semantics:river?.width_semantics||null,bands:houseRiverBands},
    motifs,graph_facts:graphFacts,interpretive_frames:interpretiveFrames,discoveries:discoveryRows,
    evidence_index:evidenceIndex,
    epistemic_boundary:'This pack exposes already-computed astrological facts and labeled downstream interpretive frames. It does not expose raw longitudes to the reading generator and does not authorize recomputation.'
  };
}
