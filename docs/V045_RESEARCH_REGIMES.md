# Noetic Atlas v0.4.5 — Research Regimes & Hypothesis Architecture

Status: feature-branch candidate

## Purpose

v0.4.5 formalizes Noetic Atlas as both a consumer-facing astrological instrument and a research laboratory.

The milestone does **not** add a new astrology calculator. It adds epistemic/model infrastructure above the existing deterministic state:

```text
one chart state
→ Operational model
→ Experimental hypothesis variants
→ Discovery search space
```

The central safeguard is that Experimental and Discovery layers may not silently rewrite the Operational control state.

## Three regimes

### Operational

- default Personal aperture;
- reproducible rules under named model identities;
- current Hellenistic/traditional control model;
- stable chart, condition, routing, and proof substrate.

### Experimental

- named and versioned hypotheses;
- explicit control and variant identity;
- model-comparison output;
- explicit execution state;
- no implicit promotion into Operational astrology.

### Discovery

- mathematically reproducible candidate structures;
- candidates need not originate in the hypothesis registry;
- provisional candidate IDs are permitted before human naming;
- no significance/rarity language before a baseline/null comparison.

## New modules

### `src/research/research-regime-registry.mjs`

Defines:

- `operational`;
- `experimental`;
- `discovery`;
- default model registry;
- constitutional principles;
- regime annotation helper;
- isolation check for invariant Operational fingerprints.

### `src/research/research-hypothesis-pack.mjs`

Defines a generic machine-readable Research Hypothesis Pack with:

- `hypothesis_id`;
- proposition;
- control model;
- variants;
- expected structural effects;
- execution state;
- cohort/null state;
- eight-part epistemic status vector.

The current seed registry includes modern outer co-rulership, expanded aspect family, and a Ceres–Taurus family. These are seed examples, not the research boundary.

### `src/research/model-comparison-engine.mjs`

Builds an Operational snapshot and compares it to an Experimental variant.

The snapshot currently freezes fingerprints and objects for:

- astronomical coordinates supplied by the analysis state;
- Whole-Sign assignments;
- traditional dispositor edges;
- terminal basins;
- House River routes;
- compound-condition summary.

The comparison reports structural deltas without deciding which model is astrologically superior.

### `src/research/current-experiment-suite.mjs`

Adapts currently executable overlays to the generic model-comparison system.

The suite presently demonstrates:

- modern outer co-rulership overlay;
- expanded aspect-family overlay;
- a Ceres–Taurus secondary-significator seed when a Ceres coordinate is actually present.

The Ceres adapter is explicitly marked as an example rather than the center of Research Mode.

### `src/research/discovery-candidate-registry.mjs`

Converts proof-bearing detections into provisional Discovery candidates.

A candidate carries:

- provisional candidate ID;
- detector identity;
- mathematical signature;
- participants;
- source layers;
- derivation references;
- measurements;
- status vector;
- explicit no-significance rule.

A candidate need not correspond to a historically named aspect/configuration or to any pre-registered hypothesis.

### `src/research/research-lab-engine.mjs`

Generic composition layer joining:

- model registry;
- hypothesis registry;
- immutable Operational snapshot;
- experiment results supplied by adapters;
- open Discovery candidates;
- regime-isolation integrity state;
- formal research lifecycle.

The laboratory core intentionally contains no special-case knowledge of Ceres, Neptune, Pluto, or any other specific experiment.

## Research lifecycle

v0.4.5 freezes:

```text
Detect → Describe → Compare → Test → Replicate → Interpret
```

Interpretation is deliberately last.

## Research status vector

Hypothesis Packs track independent states for:

```text
geometry
derivation
historical analogue
population frequency
null comparison
phenomenological association
replication
interpretation
```

No single confidence/strength score is produced.

## Ceres–Taurus boundary

Ceres–Taurus exists in v0.4.5 as one useful example of the research architecture.

Current variants are registered as:

- T0 — traditional Venus control;
- T1 — secondary significator overlay;
- T2 — Venus + Ceres co-rulership hypothesis;
- T3 — Ceres-primary alternative.

Only variants that the current engine can honestly execute are reported as executed. A future multi-ruler experimental router is required before T2/T3 may alter dispositorship or House River routing.

Noetic Atlas does not infer that Ceres rules Taurus merely because the hypothesis exists.

## Open discovery boundary

The research program is intentionally broader than named hypotheses.

Discovery may eventually investigate:

- unnamed multilayer motifs;
- hypergraph configurations;
- aspect-motif × condition intersections;
- terminal-basin partition classes;
- resonance × condition structures;
- House River entropy/concentration;
- orb persistence;
- network spectra;
- cross-chart multiplex structures;
- fixed-star, asteroid, node, lot, and calculated-point interactions;
- historical model equivalence;
- new mathematical representations not presently in the repository.

The requirement is computability + provenance, not prior recognition by conventional astrology.

## Null-model boundary

v0.4.5 does **not** implement population null models.

All Discovery candidates therefore retain states equivalent to:

```text
null_comparison: not-run
population_frequency: unknown
interpretation: withheld
```

This is intentional. Geometric, label-permutation, and topology/degree-preserving null infrastructure is the next research milestone before rarity language is permitted.

## UI contract

The intended current application remains one flat shell with one deterministic-core iframe and seven existing views.

v0.4.5 adds an aperture distinction rather than an eighth top-level Research tab:

```text
Personal → Operational default
Research → model/hypothesis/delta/candidate visibility
```

The Research aperture must never create a second chart calculator.

## Constitutional source

See `docs/RESEARCH_CONSTITUTION.md`.

The non-negotiable research standard is:

> **Noetic Atlas must remain capable of surprising its creators.**
