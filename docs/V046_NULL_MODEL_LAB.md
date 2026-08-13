# Noetic Atlas v0.4.6 — Null Model Laboratory

## Purpose

v0.4.6 answers the first serious research question after detection: **compared with what?**

It does not validate astrology, measure real-population frequency, or authorize interpretive promotion. It creates reproducible counterfactual baselines for already-defined structural metrics.

## Frozen epistemic distinction

```text
detected structure
!= unusual under a declared null
!= frequent or rare in real birth charts
!= astrologically meaningful
```

A null test may update only the `null_comparison` dimension of a research-status vector. Interpretation remains withheld.

## Null model families

### Independent geometric longitude control

Randomizes classical longitudes independently over 0–360° while preserving object inventory, Ascendant sign, Whole-Sign house-sign sequence, and the selected traditional domicile-ruler rule.

It can test global rulership/House-River concentration under independent geometric placement. It cannot represent the real solar-system ephemeris or human birth-time population.

### Classical label permutation

Preserves the observed classical longitude multiset and Ascendant sign while permuting which classical planet identity occupies each longitude.

It asks whether global rulership/topology results depend on planetary identity rather than only the observed angular skeleton.

### Degree-preserving aspect-network rewiring

Preserves the aspect-network node set, edge count, and degree sequence while rewiring pairings through deterministic edge swaps.

It can compare triangle and articulation structure conditional on connectivity. The rewired edges no longer carry zodiacal aspect-type/orb semantics.

### House-topic routing permutation

Preserves the observed classical ruler graph, terminal basins, and multiset of twelve house entry rulers while permuting which house labels receive those entry-ruler instances.

This null **cannot** test global twelve-house basin concentration or global maximum route capture: those counts are invariant when only house labels are permuted. v0.4.6 therefore gives this control a house-label-sensitive metric, **angular-house basin concentration**, using houses 1, 4, 7, and 10. This asks whether the angular topical subset is unusually concentrated conditional on the observed planetary ruler graph.

That correction is deliberate: a null model is not considered implemented merely because it produces randomized output. Its paired statistic must actually vary under the declared randomization.

## Frozen metrics

Machine-readable registry:

`data/rules/research/null-metrics-v046.registry.json`

Initial metrics:

- House-route basin entropy
- House-route basin concentration
- largest house-basin fraction
- angular-house basin concentration
- terminal-basin count
- maximum House River route capture
- aspect triangle count
- aspect articulation-point count
- maximum multilayer role count (registered; compatible null adapter still required)

Metrics are declared before simulation. None is an astrological strength score.

## Reproducibility

The simulator uses a deterministic seeded PRNG. A null result is reconstructible from:

```text
source chart state
+ null model/version
+ metric/version
+ iteration count
+ seed
```

Each result stores the effective seed, number of requested/valid iterations, observed value, null summary, distribution digest, empirical percentile, raw p, optional adjusted p, effect-position z where defined, preserved/randomized properties, and explicit scope limits.

## Monte Carlo extremity

For an upper-tail metric the empirical Monte Carlo probability uses the finite-sample correction:

```text
p = (1 + count(T_null >= T_observed)) / (N + 1)
```

Lower-tail and two-sided metrics use the registered metric direction. Benjamini–Hochberg FDR adjustment is available across an exploratory test family.

A small p-value means only that the observed metric is extreme under the named counterfactual and metric. It is not an astrological-validation probability.

## Candidate progression

v0.4.6 attaches only scientifically compatible null plans. A whole-chart house-terminal partition may be compared under geometric and label-permutation controls using largest-basin fraction and concentration. It is **not** compared against the topic-routing null because that null preserves the global partition counts by construction.

House-label-sensitive findings can use the topic-routing control, beginning with angular-house basin concentration. Candidates without a compatible null remain `no-compatible-null-yet`; the system does not force every discovery through an irrelevant baseline.

After a null comparison, population frequency remains `unknown` and interpretation remains `withheld`.

## Personal / Research boundary

Null simulations are opt-in and belong to Research aperture. Personal mode remains Operational by default and does not pay the simulation cost or display Monte Carlo tables.

`src/research/null-lab-view-model.mjs` provides a UI-facing projection of null-test results so the current seven-view app can surface them in Research aperture without teaching the interface how simulations work. The view model carries observed/null summaries, p/FDR values, seed/digest provenance, scope limits, and candidate status while keeping interpretation withheld.

## Deferred beyond v0.4.6

- astronomy-faithful ephemeris nulls
- real natal-population frequency estimates
- cohort infrastructure
- population stratification and demographic controls
- full cross-layer nulls for every discovery detector
- formal multiple-cohort replication
- interpretation promotion

The eventual high-value comparison remains:

```text
independent geometry
vs astronomical ephemeris
vs real natal population
```

These are separate research questions and must never be collapsed.
