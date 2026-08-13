import {RESEARCH_REGIMES,assertNoRegimeContamination,createModelIdentity,createResearchStatus} from './research-regime-registry.mjs';
import {buildDefaultHypothesisRegistry} from './hypothesis-pack.mjs';
import {buildOperationalSnapshot,buildOverlayComparison} from './model-comparison-engine.mjs';
import {buildDiscoveryCandidateRegistry} from './discovery-candidate-registry.mjs';

export const RESEARCH_LAB_VERSION='0.4.5';
export const RESEARCH_LAB_MODEL='naf.research.lab.v0.4.5';

export function buildResearchLab({analysis=null,graph=null,river=null,conditions=null,modern=null,extended=null,discoveries=null}={}){
  const operational=buildOperationalSnapshot({analysis,graph,river,conditions});
  const hypotheses=buildDefaultHypothesisRegistry();
  const comparisons=hypotheses.map(h=>buildOverlayComparison({hypothesis:h,operational,modern,extended,discoveries})).filter(Boolean);
  const executed=comparisons.filter(x=>x?.model_identity?.regime==='experimental');
  const discovery=buildDiscoveryCandidateRegistry(discoveries);
  const audit=assertNoRegimeContamination({operational_before:operational,operational_after:operational,experimental_results:executed});
  return {
    model_id:RESEARCH_LAB_MODEL,version:RESEARCH_LAB_VERSION,
    model_identity:createModelIdentity({regime:'operational',model_id:RESEARCH_LAB_MODEL,status:createResearchStatus({geometry:'verified',derivation:'verified'})}),
    regimes:RESEARCH_REGIMES,operational,hypotheses,comparisons,discovery,audit,
    aperture:{default:'personal',available:['personal','research'],personal_rule:'Operational model only by default; experimental/discovery information is hidden unless explicitly requested.',research_rule:'Research aperture may activate named experiments and discovery candidates but cannot overwrite the Operational model.'},
    lifecycle:['detect','describe','compare','test','replicate','interpret'],
    constitution_refs:['one astronomical state, many explicit models','tradition is prior knowledge, not unquestionable truth','experimental models never silently modify operational models','mathematical detection precedes interpretation','structural novelty is not evidence of significance','every research claim carries provenance, assumptions, and model identity','null comparison precedes rarity language','absence of an existing astrological name does not imply absence of a reproducible structure','presence of a reproducible structure does not imply astrological meaning','make inherited astrology clearer and previously invisible questions askable','Noetic Atlas must remain capable of surprising its creators.']
  };
}
