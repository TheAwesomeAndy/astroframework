import {TRADITIONAL_RULERS} from '../kernel/noetic-kernel.mjs';

export const MODERN_RULERSHIP_VERSION='0.4.4';
export const MODERN_RULERSHIP_MODEL='naf.interpretation.modern_rulership_overlay.v0.4.4';

export const MODERN_OUTER_RULERS={Scorpio:'Pluto',Aquarius:'Uranus',Pisces:'Neptune'};
export const MODERN_COREGENCY={
  Aries:['Mars'],Taurus:['Venus'],Gemini:['Mercury'],Cancer:['Moon'],Leo:['Sun'],Virgo:['Mercury'],Libra:['Venus'],
  Scorpio:['Mars','Pluto'],Sagittarius:['Jupiter'],Capricorn:['Saturn'],Aquarius:['Saturn','Uranus'],Pisces:['Jupiter','Neptune']
};

const dref=id=>String(id||'').startsWith('derivation:')?String(id):`derivation:${id}`;
const objectMap=analysis=>Object.fromEntries((analysis?.objects||[]).map(o=>[o.id,o]));

function houseSign(analysis,house){
  const asc=analysis?.angles?.ASC?.sign;
  const order=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
  const ai=order.indexOf(asc);return ai<0?null:order[(ai+Number(house)-1)%12];
}

export function buildModernRulershipOverlay(analysis){
  if(!analysis)throw new Error('Modern rulership overlay requires deterministic analysis.');
  const objects=objectMap(analysis),placements=[],houses=[],ledger_entries=[];
  for(const o of analysis.objects||[]){
    const modernDomicile=MODERN_OUTER_RULERS[o.sign]===o.id;
    const coregents=MODERN_COREGENCY[o.sign]||[TRADITIONAL_RULERS[o.sign]].filter(Boolean);
    if(!modernDomicile&&!['Uranus','Neptune','Pluto'].includes(o.id))continue;
    const id=`modern_rulership:placement:${o.id}`;
    const row={
      id:o.id,sign:o.sign,whole_sign_house:o.computed_house??null,modern_domicile:modernDomicile,
      traditional_sign_ruler:TRADITIONAL_RULERS[o.sign]||null,modern_coregents:coregents,
      interpretation_status:'secondary-modern-model',derivation_ref:dref(id)
    };
    placements.push(row);
    ledger_entries.push({kind:'modern_rulership_overlay',id,epistemic_layer:'interpretive-inference',rule_id:'naf.rulership.modern_outer_domicile.overlay.v1',source_reference:'Modern outer-planet rulership convention represented as an explicit optional overlay; it does not alter the traditional domicile graph.',inputs:{object:o.id,sign:o.sign,traditional_ruler:row.traditional_sign_ruler,modern_coregents:coregents},result:{modern_domicile:modernDomicile},dependencies:[`coordinate:${o.id}`],derivation_ref:row.derivation_ref,provenance:{model:MODERN_RULERSHIP_MODEL,version:MODERN_RULERSHIP_VERSION}});
  }
  for(let h=1;h<=12;h++){
    const sign=houseSign(analysis,h),traditional=TRADITIONAL_RULERS[sign]||null,coregents=MODERN_COREGENCY[sign]||[traditional].filter(Boolean),modern=MODERN_OUTER_RULERS[sign]||null;
    houses.push({house:h,sign,traditional_ruler:traditional,modern_outer_ruler:modern,modern_coregents:coregents,variant:'coregency_overlay',ruler_contexts:coregents.map(id=>objects[id]?{id,sign:objects[id].sign,house:objects[id].computed_house}: {id,available:false})});
  }
  return {
    model_id:MODERN_RULERSHIP_MODEL,version:MODERN_RULERSHIP_VERSION,
    scope:'secondary_modern_rulership_and_outer_domicile_overlay',
    variants:{coregency:'Traditional domicile lord remains primary while Uranus/Neptune/Pluto are shown as explicit modern co-rulers of Aquarius/Pisces/Scorpio.',replacement:'Available conceptually but not used for the traditional dispositor graph in v0.4.4.'},
    placements,houses,ledger_entries,
    applicability:{traditional_graph_unchanged:true,modern_domicile_scope:'Only Uranus in Aquarius, Neptune in Pisces, and Pluto in Scorpio are tagged as modern outer-planet domicile in this overlay.',exaltations:'No modern outer-planet exaltation scheme is asserted.'}
  };
}
