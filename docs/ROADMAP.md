# Noetic Atlas — Development Roadmap

## Governing principle

> **Do not visualize, weight, interpret, or time-activate a layer that the framework cannot derive and audit.**

> **The mathematics should not manufacture meaning. It should make claims testable.**

Current public release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).  
Research constitution: [`RESEARCH_CONSTITUTION.md`](RESEARCH_CONSTITUTION.md).  
Accepted long-range architecture: [`LONG_RANGE_RESEARCH_ARCHITECTURE.md`](LONG_RANGE_RESEARCH_ARCHITECTURE.md).

Frozen representation law:

```text
one chart state
→ many explicit models
→ many coordinated projections
```

## Dependency-ordered research arc

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

This is a dependency graph, not a calendar sprint.

The five system strata are:

```text
A — Astronomical substrate
B — Rule models
C — Structural mathematics
D — Research inference
E — Human synthesis
```

Downstream layers may consume upstream state but may not silently rewrite it.

---

## v0.1 — Visual hypothesis

**Status: complete historical milestone**

Delivered first Natal Field / Flow Map / Life Spectrum concepts, canonical specimen, and explicit distinction between mathematical representation and physical claims.

## v0.2 — Natal Field instrument

**Status: complete historical milestone**

Delivered interactive Natal Field, node inspector, Aspect Matrix, all-house ruler routing, composition views, and model/method surfaces.

## v0.3.0–v0.3.2 — Deterministic kernel + Visual Observatory

**Status: complete foundation milestone**

Delivered runtime chart parsing, birth-data input, IANA time-zone/DST handling, Astronomy Engine adapter, ASC/MC and planetary velocities, Whole Sign houses, major aspects/orb policy, applying/separating where possible, traditional domicile rulers, generic dispositor graph, Tarjan SCC/terminal SCC, sect, seven Hermetic lots, derivation ledger/tree, experimental pattern engine, schema/version manifest, tests/CI, and restored Natal Field/Aspect Matrix/Flow Map/Audit surfaces.

## v0.4.0a — Condition ontology

**Status: complete**

Delivered registry/schema/applicability/table definitions and synthetic fixture contract.

## v0.4.0b — Primitive Condition Engine

**Status: complete**

Delivered for Sun through Saturn: domicile, adversity, sign-level exaltation/depression, standard/Dorothean triplicity, Egyptian bounds, planetary sect family, in/out-of-sect relation, Whole-Sign angular-triad class, independent ledger entries, inspectable Condition UI, and boundary/canonical tests.

No scalar strength score.

## v0.4.1 — Graph Analytics + Explainable Findings

**Status: complete**

Delivered SCC condensation, terminal basin membership/fraction, route depth, upstream route capture, nonterminal path bottleneck, aspect components/degree/clustering/betweenness, articulation points, bridges, typed motifs, Grand Trine/T-square/triple-conjunction templates, exact ≤1° subset, aspect × dispositor overlap, and explainable metric/finding proof objects.

## v0.4.1.1 — Outer-planet interpretive restoration

**Status: complete compatibility milestone**

Delivered Uranus/Neptune/Pluto participation in downstream interpretation while keeping classical Hellenistic dignity `not_applicable` to them.

## v0.4.1.2 — Energetic Whole-Chart Synthesis

**Status: complete release milestone**

Delivered astrological-analysis, energetic-synthesis, and display layers; actual sign + Whole Sign house synthesis; optional modern natural-house overlay; ruler/dispositor routing; aspect-energy translation; topology translation into house/planet circuits; primitive condition qualifiers; balanced/depleted/excess framing; material-life examples; soul/spirit inquiry; outer-planet modern/transpersonal synthesis; and supplied-coordinate Ceres interpretation.

## v0.4.1.3 — Resonance Field

**Status: complete additive release milestone**

Delivered Whole-Sign Ascensional Phase Map, Element–Mode Resonance Lattice, actual-sign versus optional natural-house comparison, actual house-ruler continuation and ruler-placement context, all-twelve-house phase mapping, global phase signature, and preservation of the complete earlier observatory beneath the additive shell.

## v0.4.2 — Relational Condition + Qualified Routing

**Status: complete release milestone**

Delivered source-locked configured domicile reception; domicile exchange; separately identified later-tradition mutual-reception compatibility; right-hand sextile/square/trine overcoming; domination/upon-the-tenth; relation-level ledger entries and derivation refs; reusable categorical condition signatures; House River with integer route-count width; Derivation Walker infrastructure; and additive relation/flow/proof projections.

## v0.4.3 — Compound Condition

**Status: complete release milestone**

Delivered source-secure higher-order condition testimonies including selected bonification/maltreatment, overcoming, sign trine/opposition testimony, seven-degree ray enclosure, intervention, sect qualification, reception qualification, mixed-state preservation, compound ledger entries, proof walking, and explicit deferred variants.

No scalar strength score.

## v0.4.4 — Auditable Reading + Cross-Layer Discovery

**Status: complete foundation milestone**

Delivered auditable Evidence Pack Reading, reading-integrity gate, cross-layer discovery detectors, multi-basin preservation, modern-rulership overlay comparison, expanded aspect-family experimental projection, two-state multiplex contract, and proof-bearing discovery objects.

Discovery objects remain `detected-no-null-model` until research comparison is available.

## v0.4.5 — Research Regimes & Hypothesis Architecture

**Status: current public release**

Delivered:

- Operational / Experimental / Discovery model identities;
- Research Hypothesis Packs;
- generic structural model comparison;
- Discovery candidate registry;
- independent research-status dimensions;
- Personal / Research aperture separation;
- research constitution;
- lifecycle `Detect → Describe → Compare → Test → Replicate → Interpret`.

Detection does not imply significance. Experimental models do not overwrite Operational state.

## v0.4.6 — Null Model Laboratory

**Status: implementation candidate on `feat-v046-null-model-lab`**

Purpose: supply the first serious answer to **“compared with what?”**

Implemented candidate architecture:

- `N_G` independent geometric longitude control;
- `N_L` classical label permutation;
- `N_D` degree-preserving aspect-network rewiring;
- `N_T` house-topic routing permutation;
- frozen null-metric registry;
- deterministic seeded PRNG;
- source-state fingerprint;
- null-model and metric registry provenance;
- empirical Monte Carlo probabilities;
- Benjamini–Hochberg FDR family adjustment;
- effect-position z where defined;
- explicit preserved/randomized/can-test/cannot-test contracts;
- Personal mode opt-out / Research mode opt-in browser surface;
- candidate null plans only where the metric actually varies under the null;
- research-status update limited to `null_comparison → tested`;
- population frequency unknown, replication absent, interpretation withheld.

Cross-layer `N_D` metrics include structural aspect-motif/condition intersections and maximum articulation+bottleneck+compound role coincidence while holding non-aspect layers fixed.

A low null probability is not population rarity and is not astrological validation.

---

# Next dependency gates

## 1. Formal Configuration Grammar + Hypergraphs

Next major structural milestone after nulls.

Build configurations as first-class predicate trees rather than hard-coded name checks.

A configuration contract may include:

```text
participants
spatial predicates
sign predicates
house predicates
rulership predicates
condition predicates
orb policy
source/model identity
```

Represent multi-body configurations as hyperedges/configuration objects so proof, condition, discovery, null testing, and later interpretation can attach to the configuration itself.

Do not infer meaning from configuration existence.

## 2. Hidden Geometry

Near-term geometry priority:

```text
declination + parallels/contra-parallels
→ antiscia/contra-antiscia
→ midpoints
→ additional validated geometries
```

These precede continuous 3D potential topographies because they create new explicit predicates without requiring a field equation.

## 3. Experimental Model Laboratory

Compare named alternate models against Operational controls:

- rulership variants;
- historical rule variants;
- expanded aspect policies;
- additional celestial objects;
- harmonic descriptors;
- field kernels;
- reconstructed scoring algorithms.

Every model remains reversible and separately identified.

## 4. Persistence / Sensitivity

Once structural semantics are stable, test which properties survive:

- orb policy;
- model choice;
- coordinate uncertainty;
- birth-time uncertainty;
- nearby parameter changes;
- competing field kernels.

Persistence is a descriptor, not automatic validation.

## 5. Population Baselines

Only after metrics and null contracts are stable:

- real natal-population frequency;
- sampling-frame provenance;
- demographic/time/geographic structure;
- astronomy-aware baselines;
- cohort stratification;
- uncertainty estimates.

Never collapse null-model frequency into population frequency.

## 6. Interpretive Research

Only after comparison and replication infrastructure:

- phenomenological association;
- external outcomes;
- replicated interpretive hypotheses;
- learned embeddings;
- graph neural networks or other learned systems.

Learned systems stay late because they amplify the epistemology of their inputs.

---

# Parallel substrate track

## Astronomical enrichment

Potential future additions include declination, validated additional bodies, node variants, Lilith/apogee variants, Vertex, and fixed stars only after provider provenance, definitions, validation, and boundary tests are explicit.

Ceres interpretation support exists for supplied coordinates; automatic astronomy remains a separate capability.

## Field mathematics laboratory — later

A formal field may be defined as:

```text
Φ_M(x)
```

under explicit model `M` and kernel choice.

Gradients, interference, extrema, phase, spectra, and persistence are legitimate properties of the representation. They are not laboratory-confirmed planetary physical forces unless independent evidence exists.

Multiple competing kernels should be compared. No single field becomes “the planetary energy field” by default.

## Harmonics — descriptors before interpretation

Circular statistics such as

```text
Z_k = Σ_j w_j exp(i k θ_j)
R_k = |Z_k|
```

may be introduced as explicit descriptors under frozen object/weight policies.

“Harmonic 5 = genius” or “harmonic 7 = mysticism” remains an interpretive hypothesis and must pass the same research lifecycle as any Discovery candidate.

---

# Timing track

Life Spectrum and traditional timing remain valuable but should not outrun the research dependency graph.

Future work may include transit ephemerides, exact hits, stations, applying/separating temporal evolution, activated ruler pathways, profections, zodiacal releasing, and recurrence/state-space research once the natal structural and provenance layers are sufficiently mature.

---

# Validation track

## HCI

Compare wheel versus Atlas on ruler-chain recovery, aspect lookup, motif/configuration identification, condition reconstruction, house-route recovery, proof recovery, and model-comparison tasks.

## Astrological empirical research

Test graph/condition/configuration/timing descriptors against independent criteria only with appropriate nulls, controls, cohort definitions, and replication. Null findings remain acceptable results.

---

## Governing product standard

> **If a feature merely makes astrology look interesting, it does not belong. If it exposes a structural or experiential question difficult to inspect, reproduce, compare, or test with traditional representation, it may belong.**
