import {buildResearchLab} from './research-lab-engine.mjs';

export const RESEARCH_LAB_V047_VERSION='0.4.7';
export const RESEARCH_LAB_V047_MODEL='naf.research.lab.v0.4.7';
const deepFreeze=x=>{if(!x||typeof x!=='object'||Object.isFrozen(x))return x;for(const v of Object.values(x))deepFreeze(v);return Object.freeze(x)};

export function buildResearchLabV047({hypergraph=null,hypergraph_null_results=null,...args}={}){
  const base=buildResearchLab(args),formal=hypergraph_null_results?.hypergraph||hypergraph||null;
  const hypergraphLaboratory=formal?{model_id:formal.model_id,version:formal.version,regime:'discovery',hyperedge_count:formal.hyperedges?.length||0,classes:formal.classes||null,null_result:hypergraph_null_results?{run_id:hypergraph_null_results.run_id,iterations:hypergraph_null_results.iterations,families:hypergraph_null_results.families,experiment_count:hypergraph_null_results.experiments?.length||0}:null,promotion_rule:'A hyperedge advances its baseline dimension only when its named admissible null profile is complete. Population frequency and interpretation remain withheld.'}:null;
  return deepFreeze({...base,model_id:RESEARCH_LAB_V047_MODEL,version:RESEARCH_LAB_V047_VERSION,parent_research_lab:{model_id:base.model_id,version:base.version},formal_hypergraph:hypergraphLaboratory,aperture:{...base.aperture,personal_rule:'Operational model only by default; experimental, discovery, hypergraph, and Monte Carlo/null-model information is hidden unless explicitly requested.',research_rule:'Research aperture may activate named experiments, Discovery candidates, formal hyperedges, and explicit null comparisons but cannot overwrite the Operational model.'},lifecycle:['detect','describe','derive','formalize-hyperedge','compare-to-null','replicate','interpret'],constitution_refs:[...base.constitution_refs,'pairwise edges and higher-order hyperedges are distinct research objects','formal configurations are model-relative and provenance-bearing','a hyperedge has no baseline status until its admissible null profile is complete']});
}
