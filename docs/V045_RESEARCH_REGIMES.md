# Noetic Atlas v0.4.5 — Research Regimes & Hypothesis Architecture

Status: feature-branch candidate. Public release remains v0.4.4 until separately promoted.

## Objective

v0.4.5 formalizes Noetic Atlas as both a personal astrological instrument and a research laboratory. It does not add a single privileged research hypothesis. Instead it adds generic machinery capable of representing contested rulerships, expanded aspect policies, recovered historical techniques, novel celestial objects, new mathematical models, and unnamed candidate structures under one explicit epistemic contract.

## New modules

- `src/research/research-regime-registry.mjs`
- `src/research/hypothesis-pack.mjs`
- `src/research/model-comparison-engine.mjs`
- `src/research/discovery-candidate-registry.mjs`
- `src/research/research-lab-engine.mjs`
- `schemas/naf-research-hypothesis-pack-v0.4.5.schema.json`
- `prototype/v045.html`

## Three first-class regimes

`operational` — reproducible techniques in a named model.

`experimental` — versioned hypotheses evaluated against an Operational control.

`discovery` — unnamed reproducible structures awaiting baselines, replication, and interpretation.

Regime identity is carried in code objects, not merely implied by UI labels.

## Research status vector

Every research model can carry separate status fields for geometry, derivation, historical analogue, population frequency, null comparison, phenomenological association, replication, and interpretation. These are intentionally not combined into a scalar confidence score.

## Hypothesis Pack

A Hypothesis Pack contains:

- `hypothesis_id`
- title and research question
- domain
- Operational control model
- model variants
- expected structural effects
- sources
- execution status
- lifecycle state
- research-status vector
- model identity
- contamination rule

The initial registry demonstrates breadth rather than a single research agenda:

1. modern outer co-rulership overlay — executable comparison;
2. expanded aspect-family policy — executable comparison;
3. Ceres–Taurus rulership/significator family — registered but not executed until a validated Ceres coordinate and alternate routing model exist;
4. historical-model equivalence protocol — research template;
5. mathematical field-language formalization protocol — research template.

Ceres–Taurus is explicitly documented as an example hypothesis, not the organizing program.

## Model comparison

`model-comparison-engine.mjs` snapshots the Operational architecture and produces typed deltas for an Experimental variant. Current comparison dimensions include:

- dispositor edges
- terminal basins
- House River routes
- canonical aspects
- compound testimonies
- overlay annotations
- supplemental aspects
- discovery findings

A model delta is descriptive. It is not evidence that the Experimental model is superior.

Current executable adapters demonstrate the contamination rule:

- modern co-rulership adds annotations without modifying traditional dispositor edges;
- expanded aspects add supplemental aspect objects without rewriting the canonical major-aspect graph.

Registered hypotheses without executable adapters return `registered-not-executed`; they do not fabricate alternate states.

## Discovery candidates

Existing proof-bearing cross-layer findings can now be wrapped as stable temporary `NAF-CANDIDATE-*` objects. Each candidate retains its measurement, participants, derivation reference, Discovery regime identity, and null-comparison state.

The default promotion state is `detected-no-baseline`.

Detection alone cannot promote a candidate into Operational astrology.

## Personal / Research aperture

`prototype/v045.html` remains a seven-view instrument:

**Chart · Reading · Resonance · Network · House Flow · Condition · Proof**

Research is not an eighth top-level workspace. It is an aperture control.

Personal mode is the default and displays Operational astrology.

Research mode reveals hypothesis identifiers, Experimental model deltas, Discovery candidates, status vectors, and the hypothesis registry within the same views.

The candidate uses exactly one iframe, directly to the deterministic chart core. No historical release wrapper is embedded.

## Research lifecycle

```text
Detect -> Describe -> Compare -> Test -> Replicate -> Interpret
```

v0.4.5 implements the bookkeeping and comparison layers needed before v0.4.6 null-model infrastructure. It deliberately does not claim population rarity, causal force, or empirical validation for current Discovery findings.

## Next research milestones

### v0.4.6 — Null Model Laboratory

- geometric controls
- label-permutation controls
- degree/topology-preserving controls where mathematically appropriate
- baseline distributions for existing detectors
- explicit separation of observed frequency, null expectation, and effect/enrichment measures

### v0.4.7 — Controlled Experimental Programs

Use the generic Hypothesis Pack and null infrastructure to run multiple research programs. Ceres–Taurus may be one, but the architecture is intended equally for historical rule variants, alternative aspect families, outer-planet models, new objects, and subsequently discovered questions.

### Later

- hypergraph configuration objects
- orb-persistence measurements
- routing entropy and related network statistics
- multilayer intersection discovery
- historical-model equivalence studies
- population-scale candidate motif discovery

The standing constitutional principle is: **Noetic Atlas must remain capable of surprising its creators.**
