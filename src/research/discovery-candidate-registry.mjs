import {REGIMES} from './research-regime-registry.mjs';

export const DISCOVERY_CANDIDATE_VERSION='0.4.5';
export const DISCOVERY_CANDIDATE_MODEL='naf.research.discovery_candidate_registry.v0.4.5';

export const DEFAULT_DISCOVERY_STATUS=Object.freeze({
  detection:'detected',
  mathematical_description:'pending',
  historical_analogue:'unknown',
  population_frequency:'unknown',
  null_comparison:'not-run',
  replication:'none',
  interpretation:'withheld'
});

export function createDiscoveryCandidate({
  candidate_id,
  title='Unnamed structural candidate',
  detector_id,
  mathematical_signature,
  participants=[],
  source_layers=[],
  derivation_refs=[],
  measurements={},
  status_vector={},
  notes=[]
}={}){
  if(!candidate_id)throw new Error('candidate_id is required');
  if(!detector_id)throw new Error('detector_id is required');
  if(!mathematical_signature)throw new Error('mathematical_signature is required');
  return {
    model_id:DISCOVERY_CANDIDATE_MODEL,
    version:DISCOVERY_CANDIDATE_VERSION,
    regime:REGIMES.DISCOVERY,
    candidate_id,
    title,
    detector_id,
    mathematical_signature,
    participants:[...new Set(participants)],
    source_layers:[...new Set(source_layers)],
    derivation_refs:[...new Set(derivation_refs)],
    measurements:{...measurements},
    status_vector:{...DEFAULT_DISCOVERY_STATUS,...status_vector},
    notes:[...notes],
    naming_rule:'A mathematical candidate may receive a stable candidate ID before it receives an astrological name.',
    significance_rule:'Detection is not significance. No rarity, causal, destiny, or soul-signature language is permitted before explicit baseline testing.'
  };
}

export function candidateFromFinding(finding,index=0){
  const signature={
    kind:finding?.kind||'unknown',
    participant_count:(finding?.participants||[]).length,
    source_measurement_keys:Object.keys(finding?.measurement||{}).sort()
  };
  return createDiscoveryCandidate({
    candidate_id:`NAF-CANDIDATE-${String(index+1).padStart(4,'0')}`,
    title:finding?.title||'Unnamed structural candidate',
    detector_id:finding?.kind||'unknown-detector',
    mathematical_signature:signature,
    participants:finding?.participants||[],
    source_layers:['cross-layer-discovery'],
    derivation_refs:[finding?.derivation_ref].filter(Boolean),
    measurements:finding?.measurement||{},
    status_vector:{mathematical_description:'available'},
    notes:['Generated from an existing proof-bearing detector. Candidate numbering is provisional within a result set and is not a claim of astrological meaning.']
  });
}

export function buildDiscoveryCandidateSet(findings=[]){
  return {
    model_id:DISCOVERY_CANDIDATE_MODEL,
    version:DISCOVERY_CANDIDATE_VERSION,
    regime:REGIMES.DISCOVERY,
    candidates:(findings||[]).map(candidateFromFinding),
    rule:'The search space is allowed to return structures not present in the named motif or hypothesis registries.'
  };
}
