# Noetic Atlas — Research Discovery Layer

## 1. Goal

The research layer searches for higher-order relationships that conventional chart displays may make difficult to notice. It must not manufacture astrological meaning from mathematical novelty.

```text
pattern detected ≠ astrological significance established
```

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

## 2. Current promotion status

Primitive and relational condition are now implemented for the classical seven, and v0.4.1 graph analytics plus v0.4.2 House River route counts are implemented.

Current status:

```text
primitive_condition_complete = true
relational_condition_complete = true
compound_condition_complete = false
graph_analytics_complete_for_v0.4.1_scope = true
house_river_route_counts_complete = true
derivation_walker_v042_objects_complete = true
graph_null_models_complete = false
temporal_engine_complete = false
promotion_status_for_new_astrological_meaning = hold
```

The hold remains because reproducible graph/rule calculations are not enough to establish psychological, predictive, spiritual, or causal meaning. Relevant descriptors must survive null/comparison tests, sensitivity analysis, replication, and domain review before interpretive promotion.

## 3. Implemented graph analytics

### Classical dispositor functional graph

Current deterministic derivations include SCC condensation, terminal SCCs, terminal basin membership/fraction, route depth, upstream route capture, and largest nonterminal path bottleneck.

### Aspect graph

Current calculations include connected components, degree, local/mean clustering, normalized unweighted betweenness, articulation points, bridges, typed closed three-node motifs, Grand Trine/T-square/triple-conjunction templates, and exact ≤1° subset.

### Cross-layer overlap

Current explicit comparison:

```text
E_aspect ∩ E_dispositor
```

Layers remain semantically distinct.

## 4. Relational-condition graphs — implemented

v0.4.2 adds source-locked relation objects for:

```text
G_reception
G_exchange
G_mutual_reception
G_overcoming
```

with domination separately typed inside the superiority relation family.

These relations are astrological-rule objects, not research-discovered correlations. Research may later examine their graph consequences, but must preserve their source/rule identity.

Relational condition **qualifies** the selected dispositor topology. It does not rewrite house/ruler routes by default.

## 5. House River — implemented graph-derived projection

House River starts with the 12 existing Whole-Sign house-ruler routes.

For each dispositor edge `e`:

```text
w(e) = number of house-ruler paths traversing e
```

This route count is reproducible and graph-derived. It is not currently interpreted as strength, destiny, soul power, energetic intensity, or statistical importance.

The canonical specimen currently serves as a regression fixture for the calculation, not evidence that a particular route-count distribution is rare or meaningful.

## 6. Existing exploratory descriptors

### Circular harmonic spectrum

For longitudes `θ_i`:

```text
R_n = |(1/N) Σ exp(i n θ_i)|
```

Angular-organization descriptor, not an established astrological technique.

### Ruler-route convergence

Measures how strongly multiple house-ruler/dispositor paths terminate on common nodes/components under a selected ruler model. v0.4.1 basin/depth/bottleneck analytics and v0.4.2 House River route counts now provide more explicit decompositions of this older descriptor.

### Multilayer participation

Counts or records participation across distinct relation layers. It is not a planet-strength score.

Candidate/current layers include aspects, dispositors, house rulership, lots, primitive condition, reception/exchange/overcoming, and future time activation.

## 7. What changed through v0.4.2

Earlier research notes treated bridge/bottleneck analysis, condition-aware graph work, reception/overcoming layers, and House River as future. That is no longer accurate.

Implemented now:

```text
articulation points
bridges
nonterminal path bottlenecks
primitive condition
relational condition
reception / exchange / overcoming / domination graph layers
House River route counts
proof references for all new v0.4.2 relation/river objects
```

Still future:

```text
compound condition
graph-null distributions
statistical motif enrichment
validated condition-weighted graph measures
motif + condition field geometry
comparative rule-set experiments
temporal activation / recurrence
```

## 8. Null models are mandatory

Before qualitative claims such as `rare`, `high`, `unusual`, `dominant`, `exceptional`, or `enriched`, define an explicit baseline.

### Geometric longitude null
Randomize longitudes and recompute aspects under the same edge policy.

### Label permutation
Keep geometry fixed while permuting object identities.

### Degree-preserving graph null
Rewire edges while preserving degree sequence where graph semantics make this mathematically appropriate.

### Layer-overlap null
Preserve layer sizes/densities while randomizing pair assignments.

### Relational-layer nulls
Future relation research must define what aspects of rulership, signs, and relation frequencies are preserved before claiming unusual reception/overcoming overlap or qualified motifs.

### Matched astronomical null — later
Sample realistic birth instants/locations when independent random longitudes would destroy astronomy-specific dependencies relevant to the hypothesis.

The null must preserve what is irrelevant to the hypothesis and disrupt what is being tested.

## 9. Discovery protocol

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

## 10. Canonical-chart overfitting is prohibited

`NAF-CANON-0001` is a regression fixture, not evidence for theory.

Do not tune thresholds to make it interesting, infer prevalence from one chart, call its relation/river pattern rare without a population/null reference, or convert regression stability into astrological validation.

Use synthetic fixtures for boundaries and independent charts for research.

## 11. Condition-aware research — current position

The system can now preserve distinct statements such as:

```text
terminal basin fraction                → graph-derived
Venus depression in Virgo              → primitive astrological rule
Jupiter receives another planet        → relational astrological rule
Mars dominates Jupiter                 → relational astrological rule
12 house routes traverse edge X        → graph-derived House River count
```

What is **not** justified is collapsing these into one weighted importance score.

High-value comparative research design:

```text
topology only
vs
primitive condition only
vs
relational condition only
vs
primitive + relational condition
vs
condition + topology
vs
condition + topology + resonance/House River presentation
```

Each comparison needs an explicit task or external criterion.

## 12. Future directions

High-priority research families:

- graph null distributions for current metrics;
- motif enrichment under defined nulls;
- layer-overlap baselines;
- reception/overcoming multiplex motifs;
- sensitivity to orb/rulership/object-set/relation-variant choices;
- condition-aware house-route structures;
- comparative chart architecture;
- HCI evaluation of House River versus tables/graphs;
- HCI evaluation of relation-type reconstruction;
- motif + condition field geometry;
- comparative rule-set visualization;
- temporal activation motifs after Life Spectrum;
- family/synastry multiplex structures;
- cross-tradition agreement/disagreement;
- birth-time sensitivity/Monte Carlo analysis.

## 13. Promotion rule

A research descriptor may move toward interpretive use only when documentation records formal definition, implementation version, graph/object scope, datasets/charts examined, rule-set versions, null models, sensitivity analyses, replication attempts, effect estimates/uncertainty where applicable, known failures, competing explanations, expert commentary, and current confidence state.

Suggested labels:

```text
experimental
observational
replicated
provisional-theory
traditional-source-backed
retired
```

`traditional-source-backed` and `empirically replicated` remain different statuses.

## 14. Research principle

> **The Observatory should make negative results visible.**

A graph feature that disappears under replication or null testing is information, not failure.
