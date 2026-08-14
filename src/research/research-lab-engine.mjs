import {RESEARCH_REGIMES,assertNoRegimeContamination,createModelIdentity,createResearchStatus} from './research-regime-registry.mjs';
import {buildDefaultHypothesisRegistry} from './hypothesis-pack.mjs';
import {buildOperationalSnapshot,buildOverlayComparison} from './model-comparison-engine.mjs';
import {buildDiscoveryCandidateRegistry} from './discovery-candidate-registry.mjs';
import {describeNullModelLaboratory,attachNullResultsToDiscoveryRegistry} from './null-model-laboratory.mjs';

export const RESEARCH_LAB_VERSION='0.4.6';
export const RESEARCH_LAB_MODEL='naf.research.lab.v0.4.6';

export function buildResearchLab({analysis=null,graph=null,river=null,conditions=null,modern=null,extended=null,discoveries=null,null_results=null}={}){
  const operational=buildOperationalSnapshot({analysis,graph,river,conditions});
  const hypotheses=buildDefaultHypothesisRegistry();
  const comparisons=hypotheses.map(h=>buildOverlayComparison({hypothesis:h,operational,modern,extended,discoveries})).filter(Boolean);
  const executed=comparisons.filter(x=>x?.model_identity?.regime==='experimental');
  const discoveryBase=buildDiscoveryCandidateRegistry(discoveries);
  const discovery=null_results?attachNullResultsToDiscoveryRegistry(discoveryBase,null_results):discoveryBase;
  const audit=assertNoRegimeContamination({operational_before:operational,operational_after:operational,experimental_results:executed});
  const nullLaboratory={...describeNullModelLaboratory(),result:null_results?{run_id:null_results.run_id,iterations:null_results.iterations,families:null_results.families,experiment_count:null_results.experiments.length,epistemic_contract:null_results.epistemic_contract}:null};
  return {
    model_id:RESEARCH_LAB_MODEL,version:RESEARCH_LAB_VERSION,
    model_identity:createModelIdentity({regime:'operational',model_id:RESEARCH_LAB_MODEL,version:RESEARCH_LAB_VERSION,status:createResearchStatus({geometry:'verified',derivation:'verified'})}),
    regimes:RESEARCH_REGIMES,operational,hypotheses,comparisons,discovery,null_laboratory:nullLaboratory,audit,
    aperture:{default:'personal',available:['personal','research'],personal_rule:'Operational model only by default; experimental, discovery, and Monte Carlo/null-model information is hidden unless explicitly requested.',research_rule:'Research aperture may activate named experiments, Discovery candidates, and explicit null comparisons but cannot overwrite the Operational model.'},
    lifecycle:['detect','describe','derive','compare-to-null','replicate','interpret'],
    counterfactual_boundary:{implemented_through:'counterfactual baseline',claim_ceiling:'Null-tested under named counterfactuals; no population rarity, external association, causal, spiritual, psychological, or astrological-validation claim follows.',population_frequency:'unknown-not-tested',interpretation:'withheld',not_implemented:['population baseline','external association','replication study','interpretive validation'],rule:'A completed null comparison advances only the null_comparison dimension of research status.'},
    constitution_refs:['one astronomical state, many explicit models','tradition is prior knowledge, not unquestionable truth','experimental models never silently modify operational models','mathematical detection precedes interpretation','structural novelty is not evidence of significance','every research claim carries provenance, assumptions, and model identity','null comparison precedes rarity language','different null models answer different counterfactual questions and may not be collapsed into a universal significance score','No cross-null pass count is permitted; a null profile is the research object','population frequency remains unknown until real comparison populations exist','absence of an existing astrological name does not imply absence of a reproducible structure','presence of a reproducible structure does not imply astrological meaning','make inherited astrology clearer and previously invisible questions askable','Noetic Atlas must remain capable of surprising its creators.']
  };
}
