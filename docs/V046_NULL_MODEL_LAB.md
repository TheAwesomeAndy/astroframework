# Noetic Atlas v0.4.6 — Null Model Laboratory

## Purpose

v0.4.6 answers the first serious research question after detection: **compared with what?**

It does not validate astrology, measure real-population frequency, or authorize interpretive promotion. It creates reproducible counterfactual baselines for already-defined structural metrics.

Accepted long-range architecture: [`LONG_RANGE_RESEARCH_ARCHITECTURE.md`](LONG_RANGE_RESEARCH_ARCHITECTURE.md).

## Frozen epistemic distinction

```text
detected structure
!= unusual under a declared null
!= frequent or rare in real birth charts
!= astrologically meaningful
```

A completed compatible null test updates only the `null_comparison` dimension of a research-status vector to `tested`. Population frequency remains unknown, replication remains absent, and interpretation remains withheld.

## Null model families

### N_G — Independent geometric longitude control

Model:

```text
naf.null.geometric_independent_longitude.v1
```

Randomizes classical longitudes independently over 0–360° while preserving object inventory, Ascendant sign, Whole-Sign house-sign sequence, and the selected traditional domicile-ruler rule.

It can test global rulership/House-River concentration under independent geometric placement. It cannot represent the real solar-system ephemeris or human birth-time population.

### N_L — Classical label permutation

Model:

```text
naf.null.label_permutation.v1
```

Preserves the observed classical longitude multiset and Ascendant sign while permuting which classical planet identity occupies each longitude.

It asks whether global rulership/topology results depend on planetary identity rather than only the observed angular skeleton.

### N_D — Degree-preserving aspect-network rewiring

Model:

```text
naf.null.degree_preserving_aspect_rewire.v1
```

Preserves the aspect-network node set, edge count, and degree sequence while rewiring pairings through deterministic edge swaps.

For cross-layer tests it also holds the observed dispositor graph and observed relational/compound-condition layers fixed. It can therefore ask whether aspect-network structure intersects those fixed layers more strongly than expected conditional on degree sequence.

It can compare:

- aspect triangle count;
- articulation-point count;
- structural three-node motif × relation/condition intersection count;
- maximum cross-layer role coincidence.

The rewired edges no longer carry zodiacal aspect-type/orb semantics. Therefore the v0.4.6 cross-layer motif metric is explicitly **untyped 3-clique structure**, not a null test of “Grand Trine meaning,” “T-square meaning,” or another typed astrological configuration.

### N_T — House-topic routing permutation

Model:

```text
naf.null.topic_routing_permutation.v1
```

Preserves the observed classical ruler graph, terminal basins, and multiset of twelve house entry rulers while permuting which house labels receive those entry-ruler instances.

This null **cannot** test global twelve-house basin concentration or global maximum route capture: those counts are invariant when only house labels are permuted. v0.4.6 therefore gives this control a house-label-sensitive metric, **angular-house basin concentration**, using houses 1, 4, 7, and 10.

That correction is deliberate: a null model is not considered implemented merely because it produces randomized output. Its paired statistic must actually vary under the declared randomization.

## Frozen metrics

Machine-readable registry:

```text
data/rules/research/null-metrics-v046.registry.json
```

Initial metrics:

- House-route basin entropy;
- House-route basin concentration;
- largest house-basin fraction;
- angular-house basin concentration;
- terminal-basin count;
- maximum House River route capture;
- aspect triangle count;
- aspect articulation-point count;
- structural motif-overlay intersection count;
- maximum multilayer role count.

The cross-layer role metric is decomposed as:

```text
I(aspect articulation)
+ I(dispositor bottleneck)
+ I(non-neutral compound condition)
```

with the aspect-articulation role recomputed under N_D while the other two layers remain fixed.

Metrics are declared before simulation. None is an astrological strength score.

## Reproducibility

The simulator uses a deterministic seeded PRNG. A null result is reconstructible from:

```text
source chart/research state
+ source-state fingerprint
+ null model registry/version
+ metric registry/version
+ iteration count
+ seed
```

Each result stores:

- test ID and target ID;
- source-state fingerprint;
- null model ID;
- null-model registry ID/version;
- metric ID and formula;
- metric registry ID/version;
- effective deterministic seed;
- requested and valid iteration count;
- preserved properties;
- randomized properties;
- what the null can test;
- what the null cannot test;
- observed value;
- null mean, SD, quantiles, min/max, and deterministic distribution digest;
- empirical percentile;
- raw Monte Carlo probability;
- optional adjusted probability;
- correction family/method;
- effect-position z where defined;
- explicit interpretive limit;
- research-status vector with interpretation withheld.

Schema:

```text
schemas/naf-null-test-v0.4.6.schema.json
```

## Monte Carlo extremity

For an upper-tail metric the empirical Monte Carlo probability uses the finite-sample correction:

```text
p = (1 + count(T_null >= T_observed)) / (N + 1)
```

Lower-tail and two-sided metrics use the registered metric direction. Benjamini–Hochberg FDR adjustment is applied across the exploratory suite/family where requested.

A small p-value means only that the observed metric is extreme under the named counterfactual and metric. It is not an astrological-validation probability.

## Candidate progression

v0.4.6 attaches only scientifically compatible null plans.

Examples:

- a whole-chart house-terminal partition can be compared under N_G and N_L using largest-basin fraction and concentration;
- House River convergence/bottleneck candidates can be compared under N_G and N_L using maximum route capture;
- a house-label-sensitive angular-house candidate can use N_T.

A candidate without a compatible statistic/null remains:

```text
no-compatible-null-yet
```

The system does not force every discovery through an irrelevant baseline.

When a compatible candidate null is executed, the candidate changes only:

```text
null_comparison: pending → tested
```

while preserving:

```text
population_frequency: unknown
replication: none
interpretation: withheld
```

The candidate is therefore not promoted into Operational astrology merely because one or more null tests were completed or statistically small.

## Personal / Research boundary

Null simulations are opt-in and belong to Research aperture. Personal mode remains Operational by default and does not pay the simulation cost or display Monte Carlo tables.

Browser integration:

```text
src/research/null-lab-browser-integration.mjs
```

View projection:

```text
src/research/null-lab-view-model.mjs
```

Research view surfaces observed/null summaries, raw/FDR probabilities, source fingerprint, registry versions, seed/digest provenance, and scope limits. Personal mode does not run the simulation suite by default.

## What v0.4.6 still does not measure

- real human birth-chart population frequency;
- astronomical ephemeris frequency;
- demographic or cohort prevalence;
- external outcome association;
- replication across independent datasets;
- astrological validity;
- physical planetary energy;
- spiritual or psychological meaning.

The eventual high-value comparison remains:

```text
independent geometry
vs astronomical ephemeris
vs real natal population
```

These are separate research questions and must never be collapsed.

## Dependency after v0.4.6

The accepted long-range order is:

```text
Nulls
→ Formal Configurations / Hypergraphs
→ New Geometry
→ Experimental Models
→ Persistence
→ Population Baselines
→ Interpretive Research
```

Near-term geometry priority is declination/parallels, antiscia, and midpoints before speculative continuous field topographies.

Formal fields and harmonics may be developed as explicit mathematical representations, but interpretation remains downstream of comparison and replication.

> **The mathematics should not manufacture meaning. It should make claims testable.**
