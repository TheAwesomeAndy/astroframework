# Noetic Atlas — Development Roadmap

## Guiding principle

> **Do not visualize, weight, interpret, or time-activate a layer that the framework cannot derive and audit.**

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Frozen representation law:

```text
one chart state
→ many coordinated projections
```

Current sequence:

```text
Geometry
→ Topology
→ Primitive Condition
→ Graph Analytics
→ Energetic / Explainable Synthesis
→ Resonance
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

Delivered runtime chart parsing, birth-data input, IANA time-zone/DST handling, Astronomy Engine adapter, ASC/MC and planetary velocities, Whole Sign houses, major aspects/orb policy, applying/separating where possible, traditional domicile rulers, generic dispositor graph, Tarjan SCC/terminal SCC, sect, seven Hermetic lots, derivation ledger/tree, experimental pattern engine, schema/version manifest, tests/CI, and restored Natal Field/Aspect Matrix/Flow Map/Audit surfaces.

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

Delivered SCC condensation, terminal basin membership/fraction, route depth, upstream route capture, and nonterminal path bottleneck.

### Aspect graph

Delivered connected components, degree, local/mean clustering, normalized unweighted betweenness, articulation points, bridges, typed closed three-node motifs, Grand Trine/T-square/triple-conjunction templates, and exact ≤1° subset.

### Cross-layer

Delivered aspect × dispositor pair overlap.

### Explainability

Metrics/findings retain definition, formula, scope, observation, graph meaning, astrological context, limitations, and proof.

## v0.4.1.1 — Outer-planet interpretive restoration

**Status: complete compatibility milestone**

Delivered Uranus/Neptune/Pluto participation in downstream interpretation while keeping classical Hellenistic dignity `not_applicable` to them.

## v0.4.1.2 — Energetic Whole-Chart Synthesis

**Status: complete release milestone**

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

Preserved at:

```text
prototype/v0412c.html
```

It adds a nonblank loading state, automatic canonical specimen bootstrap, chart-state synchronization, `MutationObserver` updates, explicit synthesis errors, and preservation of the deterministic visual core when downstream interpretation fails.

## v0.4.1.3 — Resonance Field

**Status: complete additive release milestone**

Delivered:

- `src/interpretation/house-resonance-engine.mjs`;
- Whole-Sign Ascensional Phase Map;
- Element–Mode Resonance Lattice;
- actual-sign versus optional natural-house comparison;
- actual house-ruler continuation and ruler-placement context;
- all-twelve-house phase mapping;
- global phase signature;
- preservation of the complete v0412c observatory beneath the additive shell.

Canonical Leo-rising result:

```text
rotation: +4 signs / 120°
element preserved: 12/12
mode preserved: 0/12
phase character: element-preserving / mode-rotating
```

## v0.4.2 — Relational Condition + Qualified Routing

**Status: current public release**

Purpose: qualify relations and house routing while preserving every previous representation.

### Relational condition — delivered

Source-locked registry:

```text
data/rules/hellenistic/relational-condition-v1.registry.json
```

Delivered distinct relation models:

```text
G_reception
G_exchange
G_mutual_reception
G_overcoming
```

with domination as a separately typed form of right-hand square superiority.

Implemented rules:

- configured domicile reception;
- domicile exchange;
- separately identified later-tradition mutual-reception compatibility label;
- right-hand sextile/square/trine overcoming;
- domination / upon-the-tenth.

Requirements satisfied:

- source/variant IDs;
- no silent Hellenistic/later-tradition blending;
- relation-level ledger entries;
- typed graph integration;
- `derivation_ref` on every relation;
- synthetic relation fixtures;
- explicit classical-seven applicability.

### Reusable condition signatures — delivered

`naf.condition.signature.v0.4.2` carries categorical primitive + relational state across Qualified Resonance and Qualified Flow. No scalar strength score.

### House River — delivered

`naf.research.house_river.v0.4.2` starts from lived Whole-Sign domains and follows existing ruler routes.

For each planetary dispositor edge:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

Band width is routing count, not energetic intensity or planet strength.

### Derivation Walker infrastructure — delivered

`naf.integrity.derivation_walker.v0.4.2` indexes deterministic, primitive-condition, relational-condition, and House River proof objects. New v0.4.2 relations and bands are born with proof references.

### Public shell — delivered

```text
prototype/v042.html
```

Preservation chain:

```text
v042
└── v0413
    └── v0412c
        └── deterministic visual core
```

Current coordinated projections:

```text
Existing Atlas
Qualified Resonance
Relations
Qualified Flow
House River
Proof Walker
```

## v0.4.3 — Compound Condition + condition-aware synthesis experiments

**Next astrological-engine milestone**

Planned candidates:

- bonification;
- maltreatment;
- enclosure;
- selected mitigation/counteraction;
- condition-aware house/topology experiments;
- deeper condition-aware energetic synthesis.

Compound rules must be pure functions over primitive + relational facts and must preserve source/variant identity.

No scalar strength score.

## Parallel representation-depth track

May proceed while preserving deterministic authority.

High-value candidates:

- motif + condition field geometry;
- side-by-side rule-set comparison;
- deeper ruler-path visualization;
- expanded Derivation Walker normalization for legacy proof objects;
- repeated-axis/configuration synthesis;
- curated versioned interpretation profiles;
- expanded selected minor-body profiles;
- yogic/Ayurvedic/contemplative practice layers with explicit source/posture labels;
- selectable lenses such as Traditional, Energetic, Psychological, Mystical, Research.

Every new view remains a projection of the single chart state.

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
condition-qualified graph hypotheses
```

Do not use rarity/enrichment language before comparison.

## Extended-body astronomy track

Potentially add Ceres, Chiron, node variants, Lilith/apogee variants, Vertex, and fixed stars only after definitions, provider provenance, licensing, validation, and boundary tests are explicit.

Ceres interpretation support exists for supplied coordinates; automatic astronomy remains separate future capability.

## v0.5 — Life Spectrum v1

Purpose: introduce continuous time only after natal state is structurally and conditionally mature.

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
N_i = geometry + topology + primitive condition + relational condition + resonance + metadata
T(t) = temporal input
X_i(t) = F(N_i, T(t), rule-set versions)
```

Interpretive prose remains downstream.

## v0.6 — Traditional timing systems

Planned annual profections, zodiacal releasing, and carefully source-locked return techniques after the relevant provider/rule definitions are frozen.

## v0.7 — Life Space / recurrence research

Potential research objects include state vectors through time, recurring activation motifs, condition-qualified ruler pathways, temporal clustering, event-annotation similarity, and state-space visualization.

Dimensionality reduction belongs here only after state semantics are stable.

## Research validation track

### HCI

Compare wheel versus Atlas on ruler-chain recovery, aspect lookup, motif identification, primitive/relational condition reconstruction, house-route recovery, and evidence-chain tasks.

### Astrological empirical research

Test graph/condition/timing descriptors against independent criteria only with appropriate nulls, controls, and replication. Null findings remain acceptable.

## Current immediate priorities

```text
1. compound condition source lock
2. bonification / maltreatment
3. enclosure / selected mitigation
4. deeper condition-aware synthesis
5. motif + condition field geometry
6. graph null models / multilayer baselines
7. rule-set comparison
8. validated extended-body astronomy where justified
9. Life Spectrum
```

## Governing product standard

> **If a feature merely makes astrology look interesting, it does not belong. If it exposes a structural or experiential question difficult to inspect, reproduce, compare, or test with traditional representation, it may belong.**
