# Noetic Atlas — Development Roadmap

## Guiding principle

> **Do not visualize, weight, interpret, or time-activate a layer that the framework cannot derive and audit.**

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Current progression:

```text
Geometry
→ Topology
→ Primitive Condition
→ Graph Analytics
→ Energetic / Explainable Synthesis
→ Coordinated Representation
→ Relational Condition
→ Compound Condition
→ Time
→ Recurrence
→ Discovery
```

## Completed foundation

### v0.1 — Visual hypothesis
Complete historical milestone.

### v0.2 — Natal Field instrument
Complete historical milestone: interactive Natal Field, node inspector, Aspect Matrix, all-house ruler routing, composition views, and method surfaces.

### v0.3.0–v0.3.2 — Deterministic kernel + Visual Observatory
Complete foundation: runtime parsing, birth input, IANA/DST handling, astronomy adapter, ASC/MC, Whole Sign houses, aspects, traditional rulership, dispositor graph, Tarjan SCC, sect, seven Hermetic lots, ledger/tree, pattern engine, and interactive core surfaces.

### v0.4.0a — Condition ontology
Complete.

### v0.4.0b — Primitive Condition Engine
Complete for the classical seven: domicile, adversity, exaltation/depression, triplicity, Egyptian bounds, sect family, in/out-of-sect, Whole-Sign angular-triad class, ledger entries, UI and tests. No scalar strength score.

### v0.4.1 — Graph Analytics + Explainable Findings
Complete: SCC condensation, terminal basin, route depth, upstream capture, nonterminal bottleneck; aspect components, degree, clustering, normalized unweighted betweenness, articulation points, bridges, typed motifs, Grand Trine/T-square/triple-conjunction templates, exact ≤1° subset, and aspect × dispositor overlap.

### v0.4.1.1 — Outer-planet interpretive restoration
Complete compatibility milestone: Uranus/Neptune/Pluto restored to downstream interpretation while remaining outside classical Hellenistic dignity applicability.

### v0.4.1.2 — Energetic Whole-Chart Synthesis
Complete and preserved. Delivered actual sign + Whole Sign house synthesis, optional natural-house overlay, ruler routing, aspect-energy translation, graph/house translation, primitive condition qualifiers, balanced/depleted/excess expression, material-life examples, soul/spirit inquiry, outer-planet synthesis, Ceres supplied-coordinate profile, and the resilient `v0412c` browser surface.

## v0.4.1.3 — Resonance Field

**Status: current public release**

Purpose: add a phenomenological representation **on top of** the existing observatory without replacing its graphs, analysis, condition, audit, or core chart views.

Delivered:

- `house-resonance-engine.mjs`;
- `prototype/v0413.html` coordination shell;
- preserved `prototype/v0412c.html` as the Structure & Analysis workspace;
- Resonance Field synchronized to the same serialized chart state;
- Ascensional Phase Map;
- Element–Mode Resonance Lattice;
- 12-house natural-resonance ↔ actual Whole-Sign mapping;
- actual traditional ruler and ruler-placement context;
- house occupants;
- chart-wide phase-rotation summary;
- explicit element-preserved/changed and mode-preserved/rotated states;
- new engine/UI regression contracts while retaining every prior contract.

Whole-Sign identity:

```text
S_actual(h)  = A + (h - 1) mod 12
S_natural(h) = h - 1
Delta(h)     = A mod 12
```

Canonical Leo-rising result:

```text
+4 signs / 120°
12/12 elemental correspondence preserved
0/12 modal position preserved
element-preserving / mode-rotating
```

The natural-house layer remains optional, modern, and secondary to actual sign, actual house, actual ruler, condition, aspects, and graph routing.

## v0.4.2 — Relational Condition

**Next astrological-engine milestone**

Planned distinct relation layers:

```text
G_reception
exchange / mutual-reception variant
G_overcoming
```

Requirements: source/variant IDs, no silent Hellenistic/Medieval blending, relation-level ledger entries, typed graph integration, readable downstream translation, and synthetic edge fixtures.

### Representation work unlocked by v0.4.2

1. **Condition-qualified Flow Map** — show primitive node condition together with reception/overcoming relation types.
2. **House River / alluvial routing** — house topic → ruler → dispositor → terminal circuit; band width may encode route-count only, never mystical strength.
3. **Derivation-path walker** — interpretation → graph/condition fact → rule/source → numerical input → coordinate/time provenance.
4. **Motif + condition field geometry** — T-square, Grand Trine and other motif objects shown with participating condition states.
5. **Side-by-side rule-set comparison** — synchronized explicit model comparison without hidden rule blending.

## v0.4.3 — Compound Condition + condition-aware synthesis

Planned candidates: bonification, maltreatment, enclosure, selected mitigation, condition-aware house/topology experiments. Compound rules must be pure functions over primitive + relational facts. No scalar strength score.

## Parallel interpretation / representation track

May proceed while preserving deterministic authority:

- deeper house-ruler synthesis;
- richer Resonance Field small multiples;
- aspect standing-wave / torque representations;
- repeated-axis/configuration synthesis;
- curated versioned interpretation profiles;
- selected minor-body profiles;
- explicitly labeled yogic/Ayurvedic/contemplative practice layers;
- selectable Traditional / Energetic / Psychological / Mystical / Research lenses.

## Parallel graph-research track

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

Potentially add Ceres, Chiron, node variants, Lilith/apogee variants, Vertex, and fixed stars only after definitions, provider provenance, licensing, validation, and boundary tests are explicit. Ceres interpretation support already exists for supplied coordinates; automatic astronomy remains separate future work.

## v0.5 — Life Spectrum v1

Purpose: continuous time after natal state is structurally and conditionally characterized.

Planned: transit ephemeris, exact hits, stations, applying/separating evolution, natal-target lanes, house activation lanes, activated ruler pathways, explicit activation functions, multi-scale zoom, event annotations, and provenance for every marker/band.

## v0.6 — Traditional timing systems

Annual profections, zodiacal releasing, and only later solar returns/related annual techniques after definitions/providers are frozen.

## v0.7 — Life Space / recurrence research

Potential state vectors through time, recurring activation motifs, condition-qualified pathways, temporal clustering, event similarity, and state-space visualization after temporal semantics are stable.

## Current immediate priorities

```text
1. reception / exchange
2. overcoming
3. condition-qualified Flow Map
4. House River / alluvial routing
5. derivation-path walker
6. motif + condition field geometry
7. selected compound condition
8. graph null models
9. Life Spectrum
```

## Governing product standard

> **If a feature merely makes astrology look interesting, it does not belong. If it exposes a structural or experiential question difficult to inspect, reproduce, compare, or test with traditional representation, it may belong.**
