# Noetic Atlas Documentation Index

This index separates **living documentation** from **historical milestone/release records**. Living documents describe the current `main` implementation. Historical documents preserve what a specific release meant at the time and are not rewritten to impersonate the present.

## Current release

Read first:

1. [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md) — canonical current release contract, current browser, model IDs, implemented capabilities, and limitations.
2. [`V042_RELATIONAL_CONDITION.md`](V042_RELATIONAL_CONDITION.md) — v0.4.2 source lock, relational ontology, condition signatures, House River, Derivation Walker, and public projections.
3. [`../README.md`](../README.md) — project overview and current implementation summary.
4. [`CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md) — current scientific/epistemic posture and claim boundaries.
5. [`CONDITION_ENGINE_SPEC.md`](CONDITION_ENGINE_SPEC.md) — living condition architecture from primitive through relational, with compound condition next.
6. [`ROADMAP.md`](ROADMAP.md) — current engineering/research sequence.

### Current release identifiers

```text
public release                    v0.4.2 — Relational Condition
current browser surface           prototype/v042.html
deployed branch                   main
condition system                  naf.condition.system.v0.4.2
relational condition model        naf.condition.relational.hellenistic.v0.4.2
relational rule registry          naf.rules.relational_condition.hellenistic.v0.4.2
condition signature               naf.condition.signature.v0.4.2
House River                       naf.research.house_river.v0.4.2
Derivation Walker                 naf.integrity.derivation_walker.v0.4.2
house resonance                   naf.interpretation.house_resonance.v0.4.1.3
energetic synthesis               naf.interpretation.energetic_synthesis.v0.4.1.2
natural-house overlay             naf.interpretation.natural_house_overlay.modern.v1
graph analytics                   naf.research.graph_analytics.v0.4.1
primitive condition               naf.condition.primitive.hellenistic.v0.4.0b
condition schema                  naf.condition.record.v0.4.0a
minimum analysis envelope         naf.analysis.v0.3.1
```

The root `index.html` redirects to `prototype/v042.html`.

Preservation chain:

```text
v042
└── v0413
    └── v0412c
        └── prototype/index.html deterministic visual core
```

The governing architecture is:

```text
one chart state
→ many coordinated projections
```

No representation owns a second calculator.

## Current public projections

The v0.4.2 shell exposes:

```text
Existing Atlas       → complete preserved v0.4.1.3 interface
Qualified Resonance  → resonance + ruler/occupant condition signatures
Relations            → typed traditional relational-condition objects
Qualified Flow       → dispositor + reception/exchange/overcoming layers
House River          → lived-house domains through ruler/dispositor routes
Proof Walker         → reversible derivation traversal
```

Within the preserved Atlas, v0412c still exposes:

```text
Energetic Analysis
Graph Findings
Metrics
Condition
Integrity
```

and the deterministic core still exposes Natal Field, Aspect Matrix, Flow Map, Lots & Sect, Research Lab, and Audit.

## Living architecture and engineering docs

- [`ARCHITECTURE.md`](ARCHITECTURE.md) — layer boundaries, one-state/multi-projection rule, current module ownership, and preservation chain.
- [`DEVELOPER_GUIDE.md`](DEVELOPER_GUIDE.md) — repository map, tests, extension rules, and definition of done.
- [`ASTROLOGICAL_MODEL.md`](ASTROLOGICAL_MODEL.md) — tropical/Whole-Sign/traditional-rulership substrate, primitive + relational condition, modern overlays, and timing boundaries.
- [`INTEGRITY_AND_PROVENANCE.md`](INTEGRITY_AND_PROVENANCE.md) — epistemic classes, derivation ledger, relation proof, House River proof, and interpretation evidence chain.
- [`ASTRONOMY_ADAPTERS.md`](ASTRONOMY_ADAPTERS.md) — current Astronomy Engine adapter and extended-object limitations.
- [`ASTRONOMY_VALIDATION_PLAN.md`](ASTRONOMY_VALIDATION_PLAN.md) — independent provider-validation requirements.
- [`GLOSSARY.md`](GLOSSARY.md) — engineering, graph, astrological, primitive/relational condition, resonance, and proof vocabulary.

## Product, theory, and research

- [`PRODUCT.md`](PRODUCT.md) — product hierarchy, user value, product boundaries, and current release surface.
- [`THEORY_AND_PURPOSE.md`](THEORY_AND_PURPOSE.md) — philosophical/epistemic mission and geometry → topology → condition → synthesis → time progression.
- [`RESEARCH_PROGRAM.md`](RESEARCH_PROGRAM.md) — graph/null/HCI/astrological research program and promotion gates.
- [`RESEARCH_DISCOVERY.md`](RESEARCH_DISCOVERY.md) — current exploratory descriptors and their promotion status.

## Condition implementation

Read in this order:

1. [`V040A_CONDITION_ONTOLOGY.md`](V040A_CONDITION_ONTOLOGY.md) — historical v0.4.0a ontology freeze.
2. [`V040B_PRIMITIVE_CONDITION.md`](V040B_PRIMITIVE_CONDITION.md) — historical v0.4.0b primitive implementation milestone.
3. [`V042_RELATIONAL_CONDITION.md`](V042_RELATIONAL_CONDITION.md) — current relational implementation and source lock.
4. [`CONDITION_ENGINE_SPEC.md`](CONDITION_ENGINE_SPEC.md) — **living** condition specification and next compound-condition sequence.
5. [`../data/rules/hellenistic/condition-v1.registry.json`](../data/rules/hellenistic/condition-v1.registry.json) — primitive machine-readable registry.
6. [`../data/rules/hellenistic/relational-condition-v1.registry.json`](../data/rules/hellenistic/relational-condition-v1.registry.json) — relational machine-readable registry.
7. [`../schemas/naf-condition-record-v0.4.0a.schema.json`](../schemas/naf-condition-record-v0.4.0a.schema.json) — primitive condition record schema retained from v0.4.0a.

Current status:

```text
primitive condition      implemented
relational condition     implemented
compound condition       not implemented
scalar strength score    intentionally not implemented
```

Implemented relational distinctions:

```text
reception
exchange
later-tradition mutual-reception compatibility label
overcoming
domination / upon-the-tenth
```

Hellenistic exchange and later mutual-reception terminology remain separate rule identities.

## Resonance / interpretation hierarchy

The modern natural-house correspondence remains a labeled secondary overlay. It does not replace the actual Whole Sign, actual place doctrine, actual domicile ruler, or the ruler's condition/routing.

Current qualified read order:

```text
house domain
→ actual Whole Sign
→ actual ruler + placement
→ primitive condition
→ relational condition
→ dispositor routing
→ aspect / graph context
→ downstream energetic synthesis
→ proof
```

Ceres is interpreted only when a coordinate is supplied. The current birth-time astronomy adapter does not automatically calculate a validated Ceres position.

## Current graph families

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

### Relational-condition graphs

```text
G_reception      directed host → guest
G_exchange       undirected pair
G_mutual_reception  separate later-tradition compatibility pair
G_overcoming     directed superior → inferior, with domination typed separately
```

These qualify but do not rewrite dispositorship.

### House River

```text
house domain → entry ruler → dispositor route → terminal circuit
```

For planetary routing edges:

```text
width = integer number of Whole Sign house-ruler paths traversing the edge
```

This is routing evidence, not a strength score.

## Derivation Walker

Every relation and House River band introduced in v0.4.2 is created with a `derivation_ref`. The walker indexes existing deterministic, primitive-condition, relational-condition, and House River proof objects.

Unnormalized legacy dependencies are explicitly marked `external_or_unindexed_dependency` rather than fabricated.

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

## Historical/release documents

These are intentionally historical or release-scoped:

- [`NOETIC_ATLAS_V02_DEV_NOTES.md`](NOETIC_ATLAS_V02_DEV_NOTES.md)
- [`V03_KERNEL_AND_INPUT.md`](V03_KERNEL_AND_INPUT.md)
- [`V03_CLOSEOUT_AND_V04_ENTRY.md`](V03_CLOSEOUT_AND_V04_ENTRY.md)
- [`V040A_CONDITION_ONTOLOGY.md`](V040A_CONDITION_ONTOLOGY.md)
- [`V040B_PRIMITIVE_CONDITION.md`](V040B_PRIMITIVE_CONDITION.md)
- [`V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](V041_GRAPH_ANALYTICS_AND_FINDINGS.md)
- [`V0411_INTERPRETIVE_ANALYSIS.md`](V0411_INTERPRETIVE_ANALYSIS.md)
- [`V0412_ENERGETIC_SYNTHESIS.md`](V0412_ENERGETIC_SYNTHESIS.md)
- [`V0412C_RELEASE_CONTRACT.md`](V0412C_RELEASE_CONTRACT.md)
- [`V0413_RESONANCE_FIELD.md`](V0413_RESONANCE_FIELD.md)
- [`V042_RELATIONAL_CONDITION.md`](V042_RELATIONAL_CONDITION.md) — current release specification.

## Documentation rule

When living implementation and living documentation disagree, the disagreement is a defect.

A new rule, provider, schema, graph metric, relation, finding, interpretation profile, public browser surface, or release claim is not complete until documentation, provenance identity, epistemic status, and relevant tests are updated in the same development movement.
