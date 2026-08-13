import {shortestSeparation,classifyPhase} from '../kernel/noetic-kernel.mjs';

export const EXTENDED_ASPECT_VERSION='0.4.4';
export const EXTENDED_ASPECT_MODEL='naf.research.aspect_family.extended.v0.4.4';

export const EXTENDED_ASPECTS=[
  {name:'semi_sextile',label:'semi-sextile',angle:30,symbol:'⚺',family:'minor_harmonic'},
  {name:'octile',label:'octile / semi-square',angle:45,symbol:'∠',family:'eighth_harmonic'},
  {name:'quintile',label:'quintile',angle:72,symbol:'Q',family:'fifth_harmonic'},
  {name:'tri_octile',label:'tri-octile / sesquiquadrate',angle:135,symbol:'⚼',family:'eighth_harmonic'},
  {name:'bi_quintile',label:'bi-quintile',angle:144,symbol:'bQ',family:'fifth_harmonic'},
  {name:'quincunx',label:'quincunx / inconjunct',angle:150,symbol:'⚻',family:'inconjunct'}
];

export const DEFAULT_EXTENDED_ORB_POLICY={
  id:'naf.orbs.extended_family.prototype.v1',
  semi_sextile:2,octile:2,quintile:2,tri_octile:2,bi_quintile:2,quincunx:2
};

const dref=id=>String(id||'').startsWith('derivation:')?String(id):`derivation:${id}`;

export function computeExtendedAspects(analysis,{orbPolicy=DEFAULT_EXTENDED_ORB_POLICY,objects=null}={}){
  if(!analysis)throw new Error('Extended aspect overlay requires deterministic analysis.');
  const source=objects||[...(analysis.objects||[]),...(analysis.lots||[]),analysis.angles?.ASC,...(analysis.angles?.MC?[analysis.angles.MC]:[])].filter(Boolean);
  const aspects=[],ledger_entries=[];
  for(let i=0;i<source.length;i++)for(let j=i+1;j<source.length;j++){
    const a=source[i],b=source[j];if(!Number.isFinite(a.longitude)||!Number.isFinite(b.longitude))continue;
    const separation=shortestSeparation(a.longitude,b.longitude);let best=null;
    for(const asp of EXTENDED_ASPECTS){
      const limit=orbPolicy[asp.name],orb=Math.abs(separation-asp.angle);
      if(Number.isFinite(limit)&&orb<=limit&&(!best||orb<best.orb_deg))best={...asp,orb_deg:orb};
    }
    if(!best)continue;
    const id=`extended_aspect:${a.id}:${b.id}:${best.name}`;
    const row={id,a:a.id,b:b.id,aspect:best.name,label:best.label,symbol:best.symbol,family:best.family,exact_angle_deg:best.angle,separation_deg:separation,orb_deg:best.orb_deg,phase:classifyPhase(a,b,best.angle),orb_limit_deg:orbPolicy[best.name],epistemic_layer:'astrological-rule',interpretation_status:'optional-expanded-aspect-model',derivation_ref:dref(id)};
    aspects.push(row);
    ledger_entries.push({kind:'extended_aspect',id,epistemic_layer:'astrological-rule',rule_id:`naf.aspect.extended.${best.name}.v1`,source_reference:'Optional expanded aspect-family projection. Aspect angle and orb policy are explicit; this layer does not alter the canonical major-aspect graph unless the user elects to inspect it.',inputs:{a:a.id,b:b.id,separation_deg:separation,exact_angle_deg:best.angle,orb_limit_deg:orbPolicy[best.name]},result:{aspect:best.name,orb_deg:best.orb_deg,phase:row.phase},dependencies:[`coordinate:${a.id}`,`coordinate:${b.id}`],derivation_ref:row.derivation_ref,provenance:{model:EXTENDED_ASPECT_MODEL,version:EXTENDED_ASPECT_VERSION,orb_policy:orbPolicy.id||'custom'}});
  }
  aspects.sort((x,y)=>x.orb_deg-y.orb_deg||x.a.localeCompare(y.a)||x.b.localeCompare(y.b));
  return {
    model_id:EXTENDED_ASPECT_MODEL,version:EXTENDED_ASPECT_VERSION,orb_policy:{...orbPolicy},
    status:'optional_expanded_aspect_projection',aspects,ledger_entries,
    applicability:{canonical_major_graph_unchanged:true,phase:'Applying/separating is available only when both objects carry motion; pasted degree-only charts may return unknown.',orb_policy_boundary:'Minor-aspect orbs are not universal. The selected policy is always displayed and can be replaced rather than silently treated as doctrine.'}
  };
}
