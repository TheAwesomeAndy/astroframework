# Noetic Atlas — Research Discovery Layer

## 1. Goal

The Discovery layer searches for reproducible higher-order relationships that conventional chart displays or inherited naming schemes may obscure.

It must not manufacture astrological meaning from mathematical novelty.

```text
pattern detected ≠ unexpected under a null
unexpected under a null ≠ rare in real charts
rare in real charts ≠ meaningful
meaningful ≠ causal
```

Current framework baseline: **v0.4.7**.  
Canonical release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

## 2. Current capability state

```text
primitive_condition_complete              = true
relational_condition_complete             = true
compound_condition_complete               = true_for_source_secure_v043_subset
graph_analytics_complete                  = true_for_declared_scope
house_river_route_counts_complete         = true
research_regime_separation_complete       = true
null_model_laboratory_complete            = true
formal_hypergraph_core_complete           = true
hypergraph_null_integration_complete      = true
population_cohort_engine_complete         = false
external_association_layer_complete       = false
general_replication_layer_complete        = false
interpretive_validation_complete          = false
public_v047_product_shell_complete         = false
promotion_status_for_new_meaning          = hold
```

The framework has crossed an important line: novel structures can now be formally detected **and** compared against named counterfactuals. It has not crossed the population or interpretive line.

## 3. Research regimes

Discovery exists beside, not inside, the Operational model.

```text
Operational  → reproducible named astrological model
Experimental → named reversible alternative model
Discovery    → reproducible structure not assumed to have meaning
```

Detection may create a Discovery candidate. It may not silently modify Operational chart facts.

## 4. Current graph substrate

### Classical dispositor functional graph

Deterministic derivations include:

- SCC condensation;
- terminal SCCs;
- terminal basin membership/fraction;
- route depth;
- upstream route capture;
- largest nonterminal path bottleneck.

### Aspect graph

Current calculations include:

- connected components;
- degree;
- local/mean clustering;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- typed motifs;
- exact-edge subsets.

### Relational condition

Distinct source-backed layers include reception, exchange, separately identified mutual-reception compatibility, overcoming, and domination.

### House River

For each dispositor edge `e`:

```text
w(e) = number of Whole Sign house-ruler routes traversing e
```

This is routing evidence, not a strength score.

## 5. v0.4.6 — Null Model Laboratory

Discovery candidates no longer stop at detection.

The laboratory provides four named counterfactual families:

### N_G — geometric null

Broad independent-geometry randomization. Useful for questions about structures induced by angular/sign placement under a deliberately simple baseline.

It is **not** a model of the real natal population.

### N_L — class-preserving label/identity permutation

Preserves a selected structure while breaking identity alignment within declared object classes.

Useful for asking whether a cross-layer coincidence depends on the observed identity assignment.

### N_D — degree-preserving topology rewire

Preserves the declared aspect-network degree sequence and related graph constraints while randomizing adjacency.

Useful for asking whether a motif/role coincidence exceeds a constrained network baseline.

### N_T — routing-codebook permutation

Preserves selected chart occupancy/frame properties while permuting ruler labels under a multiplicity-preserving artificial codebook.

Useful for testing dependence on the observed traditional routing assignment.

It is not a proposed historical rulership system.

## 6. Statistical contract

For upper-tail statistics:

```text
p_hat = (1 + count(T_i >= T_obs)) / (B + 1)
```

The +1 correction is mandatory. `p = 0` is impossible.

Every completed comparison includes:

- raw p;
- BH-FDR-adjusted p where declared;
- family ID / family size / rank;
- empirical percentile;
- null mean/median/SD/range;
- standardized displacement when defined;
- seed and RNG identity;
- metric/null versions;
- distribution hash;
- preserved/randomized properties;
- assumptions/limitations;
- simulation-quality diagnostics.

The vocabulary is:

```text
departure-detected
no-departure-detected
```

not `passed` / `failed` astrology.

Different nulls answer different counterfactual questions. No cross-null vote, pass count, or universal significance score is allowed.

## 7. Candidate promotion after v0.4.6

A candidate may move:

```text
detected-no-baseline
→ null-tested
```

when an admissible counterfactual comparison is complete.

Only the null-comparison dimension advances.

The candidate retains:

```text
population_frequency = unknown
replication           = none unless separately established
interpretation        = withheld
```

## 8. v0.4.7 — Formal hyperedges

Discovery now has a first-class higher-order object model.

Hyperedge classes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

### Pure geometric configurations

Initial k=3/k=4 templates:

- Grand Trine;
- T-Square;
- Yod;
- Grand Cross;
- Kite;
- T-Square Anchor Cluster.

The detector evaluates whole-pattern geometry rather than treating a named configuration as a loose bag of edges.

### Topological routing hyperedges

Promoted structures include:

- closed Tarjan SCCs;
- terminal basin-capture sets.

### Compound hybrid hyperedges

Hybrid objects record verified coupling between a geometric configuration and independently derived routing/topology.

The parent layers remain semantically intact.

## 9. Hyperedge research state

At detection:

```text
[D,V,B,P,I] = [1,1,0,0,0]
```

After all admissible candidate-specific null comparisons are complete:

```text
[D,V,B,P,I] = [1,1,1,0,0]
```

v0.4.7 cannot change `P` or `I`.

Every hyperedge retains an immutable SHA-256 derivation hash and explicit provenance.

## 10. Canonical specimen: regression, not evidence

The canonical specimen verifies implementation stability for structures including:

- Sun–Moon–Jupiter Grand Trine;
- Spirit-closed Kite;
- Venus–Mars / Uranus–Chiron T-Square Anchor Cluster;
- Mercury–Venus closed dispositor SCC;
- Mercury–Venus terminal basin;
- a compound geometry × routing hyperedge.

The negative regression is equally important: Sun + Mercury in Libra is two bodies and is **not** allowed to become a k≥3 hyperedge because a desired narrative calls it a cluster.

`NAF-CANON-0001` and related fixtures are regression instruments, not population evidence.

Do not tune thresholds to make the canonical chart interesting.

## 11. Population frequency is still blocked

The Null Model Laboratory answers:

> Compared with what explicitly defined counterfactual?

It does not answer:

> How often does this occur in real natal charts?

The latter requires v0.5.0 Population Cohort Engine with real comparison distributions, sampling design, provider consistency, cohort provenance, stratification/sensitivity analysis, and multiplicity control.

Until then, avoid:

```text
rare
uncommon among people
population-enriched
exceptional natal signature
```

when those words imply empirical prevalence.

## 12. Discovery protocol — current

```text
formal definition
→ deterministic implementation
→ unit/boundary regression
→ derivation proof
→ explicit named counterfactual
→ finite-Monte-Carlo comparison
→ sensitivity analysis
→ independent-chart replication
→ empirical population reference where appropriate
→ external criterion / phenomenology where appropriate
→ interpretive hypothesis
→ independent replication
```

A candidate can fail any gate and remain useful as a mathematical diagnostic.

## 13. Negative results are first-class

The Observatory should preserve:

- no-departure under a null;
- detector non-instantiation;
- sensitivity to orb/model choices;
- weak constrained-null mixing;
- non-replicating candidates;
- under-cardinality rejections;
- alternative models that do not improve a criterion.

A research framework that shows only interesting positive patterns is not behaving as an observatory.

## 14. Current public limitation

The browser product does not yet expose v0.4.7 hyperedges through the authoritative public entry.

Current observed public state:

```text
root → v0.4.5 shell
v0.4.6 side shell reachable
v0.4.7 shell absent
```

This blocks normal end-to-end Research-path use of hyperedge inspection + null profiles.

See [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

## 15. Next research dependencies

After the productization gate:

### v0.4.8 Hidden Geometry Engine

- midpoints;
- declination / parallels / contraparallels;
- antiscia / contra-antiscia.

These become additional formal geometry, not interpretation shortcuts.

### v0.4.9 Experimental Model Laboratory

- Ceres–Taurus hypothesis;
- alternative rulership tensors;
- other named model alternatives;
- reversible comparison against Operational control.

### v0.5.0 Population Cohort Engine

- 100k+ empirical reference distributions;
- prevalence estimates;
- stratified/reference cohorts;
- real sampling uncertainty;
- population-frequency research-status advancement.

## 16. Promotion rule

No Discovery descriptor becomes Operational because it is visually striking, historically suggestive, statistically displaced under one null, or intuitively persuasive.

Promotion requires the evidence appropriate to the intended claim.

`traditional-source-backed`, `counterfactually displaced`, `empirically prevalent`, `externally associated`, `replicated`, and `interpreted` are different states and must remain different states.

## 17. Research principle

> **The Observatory should make both invisible structure and negative evidence visible.**