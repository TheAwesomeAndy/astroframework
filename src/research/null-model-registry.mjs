export const NULL_MODEL_VERSION='0.4.6';
export const NULL_MODEL_REGISTRY='naf.research.null_model_registry.v0.4.6';
export const NULL_MODELS=Object.freeze({
  geometric:Object.freeze({id:'naf.null.geometric_independent_longitude.v1',family:'geometric'}),
  label:Object.freeze({id:'naf.null.label_permutation.v1',family:'label_permutation'}),
  network:Object.freeze({id:'naf.null.degree_preserving_aspect_rewire.v1',family:'network_rewire'}),
  topic:Object.freeze({id:'naf.null.topic_routing_permutation.v1',family:'topic_routing'})
});
export const NULL_BY_ID=Object.freeze(Object.fromEntries(Object.values(NULL_MODELS).map(x=>[x.id,x])));
export function getNullModel(id){const m=NULL_BY_ID[id];if(!m)throw new Error(`Unknown null model: ${id}`);return m;}
