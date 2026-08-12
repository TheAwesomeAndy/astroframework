export const AUDITABLE_READING_VERSION='0.4.4';
export const AUDITABLE_READING_MODEL='naf.reading.auditable_claims.v0.4.4';

const dref=id=>String(id||'').startsWith('derivation:')?String(id):`derivation:${id}`;
const raw=ref=>String(ref||'').replace(/^derivation:/,'');
const uniq=xs=>[...new Set((xs||[]).filter(Boolean))];
const ordinal=n=>{const x=Number(n),m=x%100;if(m>=11&&m<=13)return`${x}th`;if(x%10===1)return`${x}st`;if(x%10===2)return`${x}nd`;if(x%10===3)return`${x}rd`;return`${x}th`};

function claim({id,claim_type,text,epistemic_layer,evidence_ids=[],derivation_refs=[],assertions=[],subject=null,natural_house_secondary=false,section='architecture'}){
  return {
    id,claim_type,text,epistemic_layer,evidence_ids:uniq(evidence_ids),derivation_refs:uniq(derivation_refs),assertions,
    subject,natural_house_secondary,section,status:'candidate',derivation_ref:dref(id)
  };
}
function claimLedger(c){return{
  kind:'reading_claim',id:c.id,epistemic_layer:c.epistemic_layer,rule_id:'naf.reading.claim.from_evidence_pack.v1',
  source_reference:'Generated deterministically from naf.reading.evidence_pack.v0.4.4; linguistic rendering is not permitted to originate structural facts.',
  inputs:{claim_type:c.claim_type,evidence_ids:c.evidence_ids},result:{text:c.text,status:c.status},
  dependencies:c.derivation_refs.map(raw),derivation_ref:c.derivation_ref,
  provenance:{model:AUDITABLE_READING_MODEL,version:AUDITABLE_READING_VERSION}
}}

function placementClaims(pack){const out=[];
  for(const p of pack.placements||[]){
    if(!p.sign||!Number.isFinite(p.whole_sign_house))continue;
    out.push(claim({id:`reading:placement:${p.id}`,claim_type:'structural',text:`${p.id} occupies ${p.sign} in the ${ordinal(p.whole_sign_house)} Whole-Sign house.`,epistemic_layer:'astrological-rule',evidence_ids:[p.evidence_id],derivation_refs:p.derivation_refs,subject:p.id,section:'placements',assertions:[{type:'placement',planet:p.id,sign:p.sign,house:p.whole_sign_house}]}));
    const r=pack.planet_routes?.[p.id];if(r?.route?.length>1){
      out.push(claim({id:`reading:route:${p.id}`,claim_type:'structural',text:`Under traditional domicile rulership, ${p.id}'s dispositor route is ${r.route.join(' → ')}.`,epistemic_layer:'graph-derived',evidence_ids:[r.evidence_id],derivation_refs:r.derivation_refs,subject:p.id,section:'placements',assertions:[{type:'planet_route',planet:p.id,route:r.route}]}));
    }
    const sig=pack.condition_signatures?.[p.id];if(sig?.tokens?.length){
      const ctoken=sig.tokens.find(t=>t.key==='compound_presence');
      const refs=uniq(sig.derivation_refs);
      if(ctoken?.value==='mixed'){
        const bons=(pack.compound_testimonies||[]).filter(t=>t.target===p.id&&t.type==='bonification');
        const mals=(pack.compound_testimonies||[]).filter(t=>t.target===p.id&&t.type==='maltreatment');
        out.push(claim({id:`reading:condition:${p.id}:mixed`,claim_type:'condition',text:`${p.id} has mixed compound condition: bonification and maltreatment coexist as separate testimonies and are not averaged into a net score.`,epistemic_layer:'astrological-rule',evidence_ids:[sig.evidence_id,...bons.map(x=>x.evidence_id),...mals.map(x=>x.evidence_id)],derivation_refs:[...refs,...bons.map(x=>x.derivation_ref),...mals.map(x=>x.derivation_ref)],subject:p.id,section:'condition',assertions:[{type:'compound_presence',planet:p.id,presence:'mixed'}]}));
      }else{
        const selected=sig.tokens.filter(t=>['domicile','exaltation','adversity','depression','sect','angularity','bound','triplicity','bonification_received','maltreatment_received','enclosure'].includes(t.key));
        if(selected.length)out.push(claim({id:`reading:condition:${p.id}`,claim_type:'condition',text:`${p.id}'s categorical condition signature includes ${selected.map(t=>`${t.label}: ${t.value}`).join('; ')}.`,epistemic_layer:'astrological-rule',evidence_ids:[sig.evidence_id],derivation_refs:selected.map(t=>t.derivation_ref),subject:p.id,section:'condition',assertions:[{type:'condition_signature',planet:p.id,token_keys:selected.map(t=>t.key)}]}));
      }
    }
  }
  return out;
}

function architectureClaims(pack){const out=[];const basin=[...(pack.terminal_basins||[])].sort((a,b)=>b.basin_size-a.basin_size)[0];
  if(basin?.terminal_members?.length)out.push(claim({id:'reading:architecture:terminal',claim_type:'structural',text:`The classical dispositor graph routes ${basin.basin_size} starting planets into the terminal ${basin.terminal_members.join(' ↔ ')} circuit. This is a routing fact, not a planetary dominance score.`,epistemic_layer:'graph-derived',evidence_ids:[basin.evidence_id],derivation_refs:basin.derivation_refs,section:'architecture',assertions:[{type:'terminal_basin',members:basin.terminal_members,basin_size:basin.basin_size}]}));
  const rot=pack.resonance?.rotation;if(rot)out.push(claim({id:'reading:architecture:resonance',claim_type:'structural',text:`In the optional modern natural-house comparison, the Whole-Sign sequence is rotated by ${rot.sign_steps} signs (${rot.degrees}°); the observed phase character is ${rot.phase_character}.`,epistemic_layer:'interpretive-inference',evidence_ids:(pack.resonance?.houses||[]).map(x=>x.evidence_id),derivation_refs:[dref('ASC')],section:'architecture',natural_house_secondary:true,assertions:[{type:'resonance_rotation',sign_steps:rot.sign_steps,degrees:rot.degrees}]}));
  return out;
}

function discoveryClaims(pack){return(pack.discoveries||[]).map((f,i)=>claim({
  id:`reading:discovery:${i}:${f.id}`,claim_type:'research_discovery',text:f.statement,epistemic_layer:'research-exploratory',
  evidence_ids:[f.evidence_id],derivation_refs:[f.derivation_ref],section:'discoveries',subject:f.participants?.[0]||null,
  assertions:[{type:'discovery',id:f.id}]
}));}

function phenomenologyClaims(pack){const out=[];
  for(const f of pack.interpretive_frames||[]){
    const p=pack.placement_by_id?.[f.subject],refs=p?.derivation_refs||[];
    if(f.core_energy)out.push(claim({id:`reading:phenomenology:${f.id}:core`,claim_type:'phenomenological',text:f.core_energy,epistemic_layer:'interpretive-inference',evidence_ids:[f.evidence_id,p?.evidence_id].filter(Boolean),derivation_refs:refs,subject:f.subject,section:'phenomenology'}));
    if(f.balanced_expression)out.push(claim({id:`reading:phenomenology:${f.id}:balanced`,claim_type:'phenomenological',text:`Balanced expression: ${f.balanced_expression}`,epistemic_layer:'interpretive-inference',evidence_ids:[f.evidence_id,p?.evidence_id].filter(Boolean),derivation_refs:refs,subject:f.subject,section:'phenomenology'}));
    if(f.soul_question)out.push(claim({id:`reading:phenomenology:${f.id}:inquiry`,claim_type:'phenomenological',text:`Inquiry: ${f.soul_question}`,epistemic_layer:'interpretive-inference',evidence_ids:[f.evidence_id,p?.evidence_id].filter(Boolean),derivation_refs:refs,subject:f.subject,section:'phenomenology'}));
  }
  return out;
}

export function buildAuditableReading(evidencePack){
  if(!evidencePack||evidencePack.model_id!=='naf.reading.evidence_pack.v0.4.4')throw new Error('Auditable Reading requires the frozen v0.4.4 Evidence Pack.');
  const claims=[...architectureClaims(evidencePack),...placementClaims(evidencePack),...discoveryClaims(evidencePack),...phenomenologyClaims(evidencePack)];
  return {
    model_id:AUDITABLE_READING_MODEL,version:AUDITABLE_READING_VERSION,
    generator_mode:'deterministic_claim_planner_no_free_form_structural_generation',
    claims,derivation_entries:claims.map(claimLedger),
    sections:{architecture:claims.filter(c=>c.section==='architecture').map(c=>c.id),placements:claims.filter(c=>c.section==='placements').map(c=>c.id),condition:claims.filter(c=>c.section==='condition').map(c=>c.id),discoveries:claims.filter(c=>c.section==='discoveries').map(c=>c.id),phenomenology:claims.filter(c=>c.section==='phenomenology').map(c=>c.id)},
    constraints:['A future language model may paraphrase approved claim objects but may not originate structural facts.','Structural and condition claims must carry derivation references.','Natural-house language remains explicitly secondary.','Balanced/depleted/excessive language is downstream interpretive framing only.']
  };
}
