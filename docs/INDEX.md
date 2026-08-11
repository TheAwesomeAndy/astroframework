# Noetic Atlas Documentation Index

This index is the recommended entry point for engineers, astrologers, researchers, and future collaborators.

## Start here

1. [`../README.md`](../README.md) — project overview and current public implementation state.
2. [`CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md) — what Noetic Atlas currently establishes, what is novel, what remains provisional, and where the claims stop.
3. [`V0412_ENERGETIC_SYNTHESIS.md`](V0412_ENERGETIC_SYNTHESIS.md) — v0.4.1.2 energetic interpretation contract: houses, sign-frequency synthesis, natural-house overlay, ruler routing, condition-aware interpretation, Ceres, and sample-ingestion rules.
4. [`V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](V041_GRAPH_ANALYTICS_AND_FINDINGS.md) — graph-analytics layer, explainable metric/finding contracts, formulas, epistemic boundaries, and null-model gate.
5. [`V040B_PRIMITIVE_CONDITION.md`](V040B_PRIMITIVE_CONDITION.md) — executable primitive-condition implementation and limitations.
6. [`V040A_CONDITION_ONTOLOGY.md`](V040A_CONDITION_ONTOLOGY.md) — frozen condition ontology, source-lock decisions, applicability rules, and schema contract.
7. [`THEORY_AND_PURPOSE.md`](THEORY_AND_PURPOSE.md) — philosophical and epistemic mission.
8. [`DEVELOPER_GUIDE.md`](DEVELOPER_GUIDE.md) — repository invariants, tests, and extension rules.
9. [`ARCHITECTURE.md`](ARCHITECTURE.md) — software boundaries and data flow.
10. [`ASTROLOGICAL_MODEL.md`](ASTROLOGICAL_MODEL.md) — explicit rule assumptions and current astrological substrate.
11. [`INTEGRITY_AND_PROVENANCE.md`](INTEGRITY_AND_PROVENANCE.md) — auditability and the Derivation Ledger.
12. [`ROADMAP.md`](ROADMAP.md) — current engineering/research sequence.

## Current release line

- **v0.4.1.2 — Energetic Whole-Chart Synthesis**
- **Promoted to `main`:** 2026-08-11.
- **`naf.interpretation.energetic_synthesis.v0.4.1.2`** — energetic interpretation model.
- **`naf.interpretation.natural_house_overlay.modern.v1`** — explicitly modern natural-house resonance layer.
- **`naf.research.graph_analytics.v0.4.1`** — graph-analysis model.
- **`naf.condition.primitive.hellenistic.v0.4.0b`** — primitive classical condition substrate.
- **`naf.condition.record.v0.4.0a`** — condition serialization contract.
- **`naf.analysis.v0.3.1`** — deterministic structural analysis envelope.
- **Public/deployed branch:** `main`.
- **Current browser surface:** `prototype/v0412b.html`.

The current release treats readable energetic synthesis as the primary interpretation layer while preserving graph metrics, rule derivations, and provenance as inspectable evidence.

The governing rule is:

> **The graph term is never the interpretation.**

## v0.4.1.2 interpretation stack

```text
coordinate
→ sign / Whole Sign house
→ archetypal current
→ sign frequency / modal-elemental style
→ modern natural-house resonance (secondary, labeled)
→ sign ruler and dispositor pathway
→ aspect geometry
→ graph architecture
→ traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life translation
→ soul/spirit inquiry
→ proof
```

### Houses are first-class again

The interpretation layer distinguishes:

```text
planet/point = what current?
sign         = how does it move?
house        = where does it become lived?
```

A secondary natural-house correspondence may be used, but is explicitly labeled as a modern interpretive overlay and never substitutes for the actual sign on the house.

### Ruler pathways are interpretive inputs

A placement is not treated as a sealed box.

```text
placement
→ sign ruler
→ ruler chain
→ terminal SCC / terminal planet
```

The houses occupied by the routed planets translate dependency topology into concrete life fields.

For the canonical specimen, Mercury in Libra/3H and Venus in Virgo/2H form the terminal recursive circuit under traditional domicile rulership. The graph fact is the Mercury ↔ Venus SCC; the energetic/lived interpretation is a downstream inquiry into how 3H communication/knowledge and 2H value/resources repeatedly feed one another.

### Traditional condition now qualifies interpretation

Classical-planet readings may incorporate:

- domicile/adversity;
- exaltation/depression;
- triplicity role;
- Egyptian bound;
- sect relation;
- Whole-Sign angular-triad class.

The system still refuses a single opaque planet-strength score.

### Ceres

Ceres is recognized as a `minor_body` and receives a custom/modern interpretation profile when a coordinate is supplied. The current profile emphasizes nourishment, harvest, enoughness, receiving support, embodied pleasure, and resourcing.

The birth-time astronomy adapter does not yet automatically generate a validated Ceres coordinate. Noetic Atlas therefore accepts precomputed/user-supplied Ceres positions and does not invent unsupported coordinates.

## v0.4.1 graph analytics

Classical dispositor functional graph:

```text
SCC condensation graph
terminal basin membership and basin fraction
node route to terminal SCC
route depth
upstream route capture
nonterminal path bottleneck
```

Aspect graph:

```text
connected components
degree
local / mean clustering
normalized unweighted betweenness
articulation points
bridges
typed three-node motifs
Grand Trine / T-square / triple-conjunction templates
```

Cross-layer:

```text
aspect × dispositor pair overlap
```

Metrics and findings remain auditable. A naked graph statistic is not considered a complete user-facing interpretation.

## Research gate

The framework does **not** call a graph value high, low, rare, dominant, exceptional, or statistically enriched until an explicit comparison/null model exists.

Next graph-research work:

```text
geometric longitude null
label-permutation null
degree-preserving graph null where appropriate
layer-overlap null
```

## Condition development

Read in this order:

1. [`V040A_CONDITION_ONTOLOGY.md`](V040A_CONDITION_ONTOLOGY.md)
2. [`V040B_PRIMITIVE_CONDITION.md`](V040B_PRIMITIVE_CONDITION.md)
3. [`CONDITION_ENGINE_SPEC.md`](CONDITION_ENGINE_SPEC.md)
4. [`../data/rules/hellenistic/condition-v1.registry.json`](../data/rules/hellenistic/condition-v1.registry.json)
5. [`../schemas/naf-condition-record-v0.4.0a.schema.json`](../schemas/naf-condition-record-v0.4.0a.schema.json)
6. [`../tests/fixtures/condition/v0.4.0a-fixture-spec.json`](../tests/fixtures/condition/v0.4.0a-fixture-spec.json)
7. [`../tests/condition_registry_smoke.mjs`](../tests/condition_registry_smoke.mjs)
8. [`../tests/primitive_condition_smoke.mjs`](../tests/primitive_condition_smoke.mjs)

Next condition layers:

```text
reception / exchange
→ overcoming
→ selected compound condition
→ bonification / maltreatment / enclosure / mitigation
```

## Astronomy and civil time

- [`ASTRONOMY_ADAPTERS.md`](ASTRONOMY_ADAPTERS.md) — current astronomy provider architecture.
- [`ASTRONOMY_VALIDATION_PLAN.md`](ASTRONOMY_VALIDATION_PLAN.md) — independent cross-provider validation requirements.

Current extended-object limitation includes Ceres, Chiron, node variants, Lilith/apogee variants, Vertex, and fixed stars unless supplied through an explicit supported/precomputed input path.

## Research program

- [`RESEARCH_PROGRAM.md`](RESEARCH_PROGRAM.md) — research layers, HCI evaluation, null models, replication, and theory-promotion rules.
- [`RESEARCH_DISCOVERY.md`](RESEARCH_DISCOVERY.md) — exploratory descriptors and promotion rules.
- [`V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](V041_GRAPH_ANALYTICS_AND_FINDINGS.md) — current graph-analysis implementation.
- [`V0412_ENERGETIC_SYNTHESIS.md`](V0412_ENERGETIC_SYNTHESIS.md) — current interpretation architecture and sample-ingestion protocol.

## Product and interface

- [`PRODUCT.md`](PRODUCT.md) — product identity, user value, and product boundaries.
- [`GLOSSARY.md`](GLOSSARY.md) — engineering and astrological terminology.

## Historical milestones

- [`V03_CLOSEOUT_AND_V04_ENTRY.md`](V03_CLOSEOUT_AND_V04_ENTRY.md) — v0.3.x closeout and v0.4 entry.
- [`V03_KERNEL_AND_INPUT.md`](V03_KERNEL_AND_INPUT.md) — v0.3 kernel and input details.
- [`../schemas/naf-analysis-v0.3.1.schema.json`](../schemas/naf-analysis-v0.3.1.schema.json) — frozen minimum v0.3 structural analysis envelope.

## Documentation rule

When implementation and documentation disagree, that disagreement is a defect.

A new rule, provider, schema, visualization claim, research descriptor, graph metric, finding, or interpretation profile is not complete until its documentation, provenance identifier, epistemic status, and relevant tests are updated in the same development movement.
