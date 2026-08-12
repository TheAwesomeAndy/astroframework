# Noetic Atlas — Development Roadmap

## Guiding principle

> **Do not visualize, weight, interpret, or time-activate a layer that the framework cannot derive and audit.**

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Current sequence:

```text
Geometry
→ Topology
→ Primitive Condition
→ Graph Analytics
→ Energetic / Explainable Synthesis
→ Relational Condition
→ Compound Condition
→ Time
→ Recurrence
→ Discovery
```

## v0.1 — Visual hypothesis

**Status: complete historical milestone**

Delivered first Natal Field/Flow Map/Life Spectrum concepts, canonical specimen, and explicit distinction between mathematical representation and physical claims.

## v0.2 — Natal Field instrument

**Status: complete historical milestone**

Delivered interactive Natal Field, node inspector, Aspect Matrix, all-house ruler routing, composition views, and model/method surfaces.

## v0.3.0–v0.3.2 — Deterministic kernel + Visual Observatory

**Status: complete foundation milestone**

Delivered:

- runtime chart parsing;
- birth-data input;
- IANA time-zone/DST handling;
- Astronomy Engine adapter;
- ASC/MC and planetary velocities;
- Whole Sign houses;
- major aspects/orb policy;
- applying/separating where possible;
- traditional domicile rulers;
- generic dispositor graph;
- Tarjan SCC/terminal SCC;
- sect;
- seven Hermetic lots;
- derivation ledger/tree;
- experimental pattern engine;
- schema/version manifest;
- tests and CI;
- restored Natal Field/Aspect Matrix/Flow Map/Audit surfaces.

## v0.4.0a — Condition ontology

**Status: complete**

Delivered registry/schema/applicability/table definitions and synthetic fixture contract.

## v0.4.0b — Primitive Condition Engine

**Status: complete**

Delivered for Sun through Saturn:

- domicile;
- adversity;
- sign-level exaltation/depression;
- standard/Dorothean triplicity;
- Egyptian bounds;
- planetary sect family;
- in/out-of-sect relation;
- Whole-Sign angular-triad class;
- independent ledger entries;
- inspectable Condition UI;
- boundary/canonical tests.

No scalar strength score.

## v0.4.1 — Graph Analytics + Explainable Findings

**Status: complete**

### Classical dispositor graph

Delivered:

- SCC condensation;
- terminal basin membership/fraction;
- route depth;
- upstream route capture;
- nonterminal path bottleneck.

### Aspect graph

Delivered:

- connected components;
- degree;
- local/mean clustering;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- typed closed three-node motifs;
- Grand Trine/T-square/triple-conjunction templates;
- exact ≤1° subset.

### Cross-layer

Delivered aspect × dispositor pair overlap.

### Explainability

Metrics/findings retain definition, formula, scope, observation, graph meaning, astrological context, limitations, and proof.

## v0.4.1.1 — Outer-planet interpretive restoration

**Status: complete compatibility milestone**

Delivered Uranus/Neptune/Pluto participation in downstream interpretation while keeping classical Hellenistic dignity `not_applicable` to them.

## v0.4.1.2 — Energetic Whole-Chart Synthesis

**Status: current public release**

Delivered:

- `astrological-analysis-engine.mjs`;
- `energetic-synthesis-engine.mjs`;
- `energetic-synthesis-display.mjs`;
- symbolic energy/current/field vocabulary with explicit nonphysical status;
- actual sign + Whole Sign house synthesis;
- optional modern natural-house overlay;
- ruler/dispositor routing in interpretation;
- aspect-energy translation;
- topology translation into house/planet circuits;
- primitive condition qualifiers;
- balanced/depleted/excess expression;
- material-life examples;
- soul/spirit inquiry and embodiment experiments;
- outer-planet modern/transpersonal synthesis;
- Ceres interpretation profile for supplied coordinates.

### v0412c operational surface

The current public browser for v0.4.1.2 is:

```text
prototype/v0412c.html
```

It supersedes v0412/v0412b as the public entry surface and adds:

- immediate nonblank loading state;
- automatic canonical specimen bootstrap;
- chart-state synchronization from `prototype/index.html`;
- `MutationObserver` updates after recalculation/pasted input;
- explicit downstream synthesis errors;
- continued availability of the visual core if interpretation fails;
- cache-busted root redirect.

The right-hand hierarchy is:

```text
Energetic Analysis
Graph Findings
Metrics
Condition
Integrity
```

## v0.4.2 — Relational Condition

**Next astrological-engine milestone**

Purpose: qualify relations rather than only node-local condition.

Planned:

```text
G_reception
exchange / mutual-reception variant
G_overcoming
```

Requirements:

- source/variant IDs;
- no silent Hellenistic/Medieval blending;
- relation-level ledger entries;
- typed graph integration;
- readable downstream translation;
- synthetic edge fixtures before promotion.

Exit criterion: an expert can reconstruct every relation from serialized result + source/model + proof.

## v0.4.3 — Compound Condition + condition-aware synthesis experiments

Planned candidates:

- bonification;
- maltreatment;
- enclosure;
- selected mitigation;
- condition-aware house/topology experiments.

Compound rules must be pure functions over primitive + relational facts.

No scalar strength score.

## Parallel interpretation-depth track

May proceed while preserving deterministic authority.

Planned:

- deeper house-ruler synthesis;
- condition-aware whole-chart motifs;
- repeated-axis/configuration synthesis;
- curated versioned interpretation profiles;
- expanded selected minor-body profiles;
- yogic/Ayurvedic/contemplative practice layers with explicit source/posture labels;
- selectable lenses such as Traditional, Energetic, Psychological, Mystical, Research.

## Parallel graph-research track

High-priority next gates:

```text
geometric longitude nulls
label-permutation nulls
degree-preserving nulls where appropriate
layer-overlap nulls
motif enrichment
multilayer baselines
comparative chart architecture
```

Do not use rarity/enrichment language before comparison.

## Extended-body astronomy track

Potentially add Ceres, Chiron, node variants, Lilith/apogee variants, Vertex, and fixed stars only after definitions, provider provenance, licensing, validation, and boundary tests are explicit.

Ceres interpretation support already exists for supplied coordinates; automatic astronomy remains a separate future capability.

## v0.5 — Life Spectrum v1

Purpose: introduce continuous time after natal state is structurally/conditionally characterized.

Planned:

- transit ephemeris over arbitrary windows;
- exact transit hits;
- stations;
- applying/separating temporal evolution;
- stable natal-target lanes;
- house activation lanes;
- activated ruler pathways;
- explicit activation functions;
- decades-to-days zoom;
- life-event annotations;
- provenance for every marker/band;
- birth-time sensitivity where relevant.

Concept:

```text
N_i = geometry + topology + condition + metadata
T(t) = temporal input
X_i(t) = F(N_i, T(t), rule-set versions)
```

Interpretive prose remains downstream.

## v0.6 — Traditional timing systems

Planned:

### Annual profections

- activated Whole Sign house;
- lord of year;
- natal condition/routing of lord;
- current activation context.

### Zodiacal releasing

- lot selection;
- nested sign periods;
- peak periods;
- Loosing of the Bond;
- angular transitions;
- provenance for period boundaries.

### Solar returns / related annual techniques

Only after provider/rule definitions are frozen.

## v0.7 — Life Space / recurrence research

Potential research objects:

- state vectors through time;
- recurring activation motifs;
- condition-qualified ruler pathways;
- temporal clustering;
- event-annotation similarity;
- state-space visualization.

Dimensionality reduction belongs here only after state semantics are stable.

## Research validation track

### HCI

Compare wheel versus Atlas on ruler-chain recovery, aspect lookup, motif identification, condition reconstruction, and evidence-chain tasks.

### Astrological empirical research

Test graph/condition/timing descriptors against independent criteria only with appropriate nulls, controls, and replication.

Null findings remain acceptable.

## Current immediate priorities

```text
1. reception / exchange
2. overcoming
3. condition-aware house-ruler synthesis
4. selected compound condition
5. graph null models
6. curated interpretation-profile expansion
7. validated extended-body astronomy where justified
8. Life Spectrum
```

## Governing product standard

> **If a feature merely makes astrology look interesting, it does not belong. If it exposes a structural or experiential question difficult to inspect, reproduce, compare, or test with traditional representation, it may belong.**
