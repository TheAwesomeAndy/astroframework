# Noetic Atlas — Research Discovery Layer

## 1. Goal

The research layer searches for higher-order relationships that conventional chart displays may make difficult to notice. It must not manufacture astrological meaning from mathematical novelty.

```text
pattern detected ≠ astrological significance established
```

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

## 2. Current promotion status

The research layer is no longer accurately described as “condition engine incomplete.” Primitive condition is implemented for the classical seven, and v0.4.1 graph analytics are implemented.

Current status is better represented as:

```text
primitive_condition_complete = true
relational_condition_complete = false
compound_condition_complete = false
graph_analytics_complete_for_v0.4.1_scope = true
graph_null_models_complete = false
temporal_engine_complete = false
promotion_status_for_new_astrological_meaning = hold
```

The hold remains because reproducible graph calculations are not enough to establish psychological, predictive, spiritual, or causal meaning. Relevant descriptors must survive null/comparison tests, sensitivity analysis, replication, and domain review before interpretive promotion.

## 3. Implemented graph analytics

### Classical dispositor functional graph

Current deterministic derivations include:

- SCC condensation;
- terminal SCCs;
- terminal basin membership/fraction;
- route depth to terminal SCC;
- upstream route capture;
- largest nonterminal path bottleneck.

These are mathematical properties of the selected traditional domicile-ruler graph.

### Aspect graph

Current calculations include:

- connected components;
- degree;
- local and mean clustering;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- typed closed three-node motifs;
- Grand Trine, T-square, and triple-conjunction templates;
- exact ≤1° subset.

### Cross-layer overlap

Current explicit comparison:

```text
E_aspect ∩ E_dispositor
```

Layers remain semantically distinct.

## 4. Existing exploratory descriptors

### Circular harmonic spectrum

For longitudes `θ_i`:

```text
R_n = |(1/N) Σ exp(i n θ_i)|
```

This is an angular-organization descriptor, not an established astrological technique.

### Ruler-route convergence

Measures how strongly multiple house-ruler/dispositor paths terminate on common nodes/components under a selected ruler model.

The more specific v0.4.1 basin/depth/bottleneck analytics now provide additional interpretable graph structure around this older descriptor.

### Multilayer participation

Counts or records participation across distinct relation layers. It is not a planet-strength score.

Candidate layers include aspects, dispositors, house rulership, lots, condition relations, and future time activation.

## 5. What changed after v0.3

Earlier research notes treated bottleneck/bridge analysis and condition-aware graph work as future. That is no longer accurate.

Implemented now:

```text
articulation points
bridges
nonterminal path bottlenecks
primitive condition summaries available to downstream graph findings
```

Still future:

```text
reception/overcoming layers
compound condition
graph-null distributions
statistical motif enrichment
validated condition-weighted graph measures
temporal activation / recurrence
```

## 6. Null models are mandatory

Before qualitative claims such as `rare`, `high`, `unusual`, `dominant`, `exceptional`, or `enriched`, define an explicit baseline.

### Geometric longitude null

Randomize longitudes and recompute aspects under the same edge policy.

### Label permutation

Keep geometry fixed while permuting object identities.

### Degree-preserving graph null

Rewire edges while preserving degree sequence where the graph semantics make this mathematically appropriate.

### Layer-overlap null

Preserve layer sizes/densities while randomizing pair assignments.

### Matched astronomical null — later

Sample realistic birth instants/locations when independent random longitudes would destroy astronomy-specific dependencies relevant to the hypothesis.

The null must preserve what is irrelevant to the hypothesis and disrupt what is being tested.

## 7. Discovery protocol

Candidate structures progress through:

```text
formal definition
→ deterministic implementation
→ unit/boundary tests
→ cross-chart replication
→ explicit null/comparison
→ sensitivity analysis
→ expert inspection
→ longitudinal/cohort testing where appropriate
→ interpretive hypothesis
→ independent replication
```

A candidate can fail any gate and remain useful as a mathematical diagnostic.

## 8. Canonical-chart overfitting is prohibited

`NAF-CANON-0001` is a regression fixture, not evidence for theory.

Do not:

- tune thresholds to make the canonical specimen interesting;
- infer prevalence from one chart;
- call a canonical graph pattern rare without a population/null reference;
- convert regression stability into astrological validation.

Use synthetic fixtures for boundaries and independent charts for research.

## 9. Condition-aware research — current position

Primitive condition now exists, so research can already preserve statements such as:

```text
terminal SCC membership        → graph-derived
terminal basin fraction        → graph-derived
Venus depression in Virgo      → rule-defined primitive condition
```

What is **not** yet justified is collapsing these into one weighted importance score.

The next stronger design is comparative:

```text
topology only
vs
primitive condition only
vs
primitive condition + topology
vs
later relational/compound condition + topology
```

Each comparison needs an explicit target task or external criterion.

## 10. Future directions

High-priority research families:

- graph null distributions for current metrics;
- motif enrichment under defined nulls;
- layer-overlap baselines;
- sensitivity to orb/rulership/object-set choices;
- reception/overcoming multiplex motifs after v0.4.2;
- condition-aware house-route structures;
- comparative chart architecture;
- temporal activation motifs after Life Spectrum;
- family/synastry multiplex structures;
- cross-tradition agreement/disagreement;
- birth-time sensitivity/Monte Carlo analysis.

## 11. Promotion rule

A research descriptor may move toward interpretive use only when documentation records:

- formal definition;
- implementation version;
- graph/object scope;
- datasets/charts examined;
- rule-set versions;
- null models;
- sensitivity analyses;
- replication attempts;
- effect estimates/uncertainty where applicable;
- known failures;
- competing explanations;
- expert commentary;
- current confidence state.

Suggested labels:

```text
experimental
observational
replicated
provisional-theory
traditional-source-backed
retired
```

`traditional-source-backed` and `empirically replicated` are different statuses.

## 12. Research principle

> **The Observatory should make negative results visible.**

A graph feature that disappears under replication or null testing is information, not failure.
