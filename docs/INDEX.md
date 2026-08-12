# Noetic Atlas Documentation Index

This index separates **living documentation** from **historical milestone records**. Living documents describe the current `main` implementation. Milestone documents preserve what a specific release meant at the time and should not be rewritten to pretend they are current.

## Current release

Read first:

1. [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md) — canonical current release contract, browser surface, model IDs, implemented capabilities, and present limitations.
2. [`../README.md`](../README.md) — project overview and current implementation summary.
3. [`CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md) — what the current system establishes, what remains provisional, and where claims stop.
4. [`V0412_ENERGETIC_SYNTHESIS.md`](V0412_ENERGETIC_SYNTHESIS.md) — current interpretation architecture and v0412c operational surface.
5. [`V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](V041_GRAPH_ANALYTICS_AND_FINDINGS.md) — graph-analysis/finding contracts and null-model gate.
6. [`CONDITION_ENGINE_SPEC.md`](CONDITION_ENGINE_SPEC.md) — current condition architecture and next relational-condition milestone.
7. [`ROADMAP.md`](ROADMAP.md) — current engineering/research sequence.

### Release identifiers

```text
public release                v0.4.1.2
current browser surface       prototype/v0412c.html
deployed branch               main
energetic synthesis model     naf.interpretation.energetic_synthesis.v0.4.1.2
natural-house overlay         naf.interpretation.natural_house_overlay.modern.v1
graph analytics model         naf.research.graph_analytics.v0.4.1
primitive condition model     naf.condition.primitive.hellenistic.v0.4.0b
condition schema              naf.condition.record.v0.4.0a
minimum analysis envelope     naf.analysis.v0.3.1
```

The root `index.html` redirects to `prototype/v0412c.html`. v0412c embeds the graph-first `prototype/index.html` core, displays a nonblank startup state, loads the canonical specimen automatically, resynchronizes when the core chart state changes, and surfaces downstream synthesis errors explicitly.

## Living architecture and engineering docs

- [`ARCHITECTURE.md`](ARCHITECTURE.md) — software layer boundaries, current module ownership, UI wrapper/core relationship, graph/condition/interpretation flow.
- [`DEVELOPER_GUIDE.md`](DEVELOPER_GUIDE.md) — current repository map, tests, extension rules, and definition of done.
- [`ASTROLOGICAL_MODEL.md`](ASTROLOGICAL_MODEL.md) — current tropical/Whole-Sign/traditional-rulership substrate, primitive condition, modern interpretation overlay, Ceres boundary, and future relation/time models.
- [`INTEGRITY_AND_PROVENANCE.md`](INTEGRITY_AND_PROVENANCE.md) — epistemic classes, derivation ledger, graph/finding proof, condition provenance, and interpretation evidence chain.
- [`ASTRONOMY_ADAPTERS.md`](ASTRONOMY_ADAPTERS.md) — current Astronomy Engine adapter and extended-object limitations.
- [`ASTRONOMY_VALIDATION_PLAN.md`](ASTRONOMY_VALIDATION_PLAN.md) — independent provider-validation requirements.
- [`GLOSSARY.md`](GLOSSARY.md) — current engineering, graph, astrological, condition, and interpretation terms.

## Product, theory, and research

- [`PRODUCT.md`](PRODUCT.md) — current product hierarchy, user value, product boundaries, and release surface.
- [`THEORY_AND_PURPOSE.md`](THEORY_AND_PURPOSE.md) — philosophical/epistemic mission and current structure → condition → graph analysis → synthesis → time progression.
- [`RESEARCH_PROGRAM.md`](RESEARCH_PROGRAM.md) — graph/null/HCI/astrological research program and promotion gates.
- [`RESEARCH_DISCOVERY.md`](RESEARCH_DISCOVERY.md) — current exploratory descriptors and their promotion status.

## Condition implementation

Read in this order:

1. [`V040A_CONDITION_ONTOLOGY.md`](V040A_CONDITION_ONTOLOGY.md) — historical v0.4.0a ontology freeze.
2. [`V040B_PRIMITIVE_CONDITION.md`](V040B_PRIMITIVE_CONDITION.md) — historical v0.4.0b primitive implementation milestone.
3. [`CONDITION_ENGINE_SPEC.md`](CONDITION_ENGINE_SPEC.md) — **living** condition specification and current next sequence.
4. [`../data/rules/hellenistic/condition-v1.registry.json`](../data/rules/hellenistic/condition-v1.registry.json) — machine-readable rule registry.
5. [`../schemas/naf-condition-record-v0.4.0a.schema.json`](../schemas/naf-condition-record-v0.4.0a.schema.json) — current condition record schema.

Current primitive condition is implemented for the classical seven. Reception/exchange and overcoming are not implemented yet; those are the next relational-condition milestone.

## Current interpretation hierarchy

The public v0412c analysis dock is organized as:

```text
Energetic Analysis  → readable whole-chart synthesis
Graph Findings      → graph-derived structural statements
Metrics             → quantitative graph measurements
Condition           → primitive classical condition
Integrity           → evidence/proof/provenance
```

Interpretation stack:

```text
coordinate
→ actual sign
→ actual Whole Sign house
→ optional modern natural-house resonance
→ ruler/dispositor routing
→ aspect geometry
→ graph architecture
→ primitive condition where applicable
→ balanced/depleted/excess expression
→ material-life translation
→ soul/spirit inquiry
→ proof
```

The natural-house correspondence is a labeled modern overlay. It does not replace the actual house sign and is not presented as universal Hellenistic doctrine.

Ceres is interpreted only when a coordinate is supplied. The current birth-time astronomy adapter does not automatically calculate Ceres.

## Current graph analytics

### Classical dispositor graph

```text
SCC condensation
terminal basin membership / fraction
route depth
upstream route capture
nonterminal path bottleneck
```

### Aspect graph

```text
connected components
degree
local / mean clustering
normalized unweighted betweenness
articulation points
bridges
typed closed three-node motifs
Grand Trine / T-square / triple conjunction
exact ≤1° subset
```

### Cross-layer

```text
aspect × dispositor pair overlap
```

No graph metric is treated as a validated planet-strength or destiny score.

## Current research gate

Claims such as `rare`, `high`, `dominant`, `exceptional`, or `statistically enriched` remain blocked until explicit comparison/null models exist.

Planned null families:

```text
geometric longitude randomization
label permutation
degree-preserving rewiring where mathematically appropriate
layer-overlap randomization
```

## Astronomy/extended-object boundary

Current birth-time adapter automatically supports Sun through Pluto, ASC, MC, motion state, and solar altitude. It does not yet automatically produce validated coordinates for Ceres, Chiron, node variants, Lilith/apogee variants, Vertex, or fixed stars.

Imported/precomputed positions can be consumed only through an explicit supported input path. Unsupported coordinates are never invented.

## Historical milestone documents

These are intentionally historical:

- [`NOETIC_ATLAS_V02_DEV_NOTES.md`](NOETIC_ATLAS_V02_DEV_NOTES.md)
- [`V03_KERNEL_AND_INPUT.md`](V03_KERNEL_AND_INPUT.md)
- [`V03_CLOSEOUT_AND_V04_ENTRY.md`](V03_CLOSEOUT_AND_V04_ENTRY.md)
- [`V040A_CONDITION_ONTOLOGY.md`](V040A_CONDITION_ONTOLOGY.md)
- [`V040B_PRIMITIVE_CONDITION.md`](V040B_PRIMITIVE_CONDITION.md)
- [`V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](V041_GRAPH_ANALYTICS_AND_FINDINGS.md)
- [`V0411_INTERPRETIVE_ANALYSIS.md`](V0411_INTERPRETIVE_ANALYSIS.md)

`V0412_ENERGETIC_SYNTHESIS.md` remains a release document but is also maintained to describe the current v0.4.1.2/v0412c surface.

## Documentation rule

When living implementation and living documentation disagree, the disagreement is a defect.

A new rule, provider, schema, graph metric, finding, interpretation profile, public browser surface, or release claim is not complete until documentation, provenance identity, epistemic status, and relevant tests are updated in the same development movement.
