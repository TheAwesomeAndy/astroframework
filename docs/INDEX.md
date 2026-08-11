# Noetic Atlas Documentation Index

This index is the recommended entry point for engineers, astrologers, researchers, and future collaborators.

## Start here

1. [`../README.md`](../README.md) — project overview and current public implementation state.
2. [`CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md) — what Noetic Atlas genuinely establishes, what is novel, what the technical literature justifies, and where the claims stop.
3. [`V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](V041_GRAPH_ANALYTICS_AND_FINDINGS.md) — graph-analytics layer, Explainable Metric/Finding contracts, formulas, epistemic boundaries, and null-model gate.
4. [`THEORY_AND_PURPOSE.md`](THEORY_AND_PURPOSE.md) — philosophical and epistemic mission.
5. [`DEVELOPER_GUIDE.md`](DEVELOPER_GUIDE.md) — repository invariants, tests, and extension rules.
6. [`ARCHITECTURE.md`](ARCHITECTURE.md) — software boundaries and data flow.
7. [`ASTROLOGICAL_MODEL.md`](ASTROLOGICAL_MODEL.md) — explicit rule assumptions and current astrological substrate.
8. [`INTEGRITY_AND_PROVENANCE.md`](INTEGRITY_AND_PROVENANCE.md) — auditability and the Derivation Ledger.

## Active development line

- **v0.4.1 Graph Analytics + Explainable Findings** — development candidate on `noetic-atlas-v0.4.1-graph-findings`.
- **`naf.research.graph_analytics.v0.4.1`** — graph-analysis model.
- **`naf.finding.explainable.v0.4.1`** — evidence-backed readable finding contract.
- **`naf.condition.primitive.hellenistic.v0.4.0b`** — current primitive condition substrate used to qualify classical graph findings.
- **`naf.analysis.v0.3.1`** — current deterministic structural analysis envelope.

The v0.4.1 surface makes readable findings the primary analysis pane. Graphs remain evidence/interaction views rather than being treated as conclusions by themselves.

### v0.4.1 implemented graph analytics

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

Every promoted metric carries definition, formula, observation, graph-theory meaning, astrological rule context, explicitly unvalidated interpretive hypothesis, limitations, calculation inputs/result, and ledger references.

Every promoted finding carries the same integrity chain plus participating nodes/edges and a full proof object.

### v0.4.1 research gate

The framework does **not** call a graph value high, low, rare, dominant, exceptional, or statistically enriched until an explicit comparison/null model exists.

Next research work after the first findings release:

```text
geometric longitude null
label-permutation null
degree-preserving graph null where appropriate
layer-overlap null
```

## Current deployed public line

Until v0.4.1 is explicitly promoted to `main`, the public Pages build remains the latest merged `main` release.

## Condition development

Read in this order:

1. [`V040A_CONDITION_ONTOLOGY.md`](V040A_CONDITION_ONTOLOGY.md) — frozen ontology, source-lock decisions, applicability rules, boundary conventions, and schema contract.
2. [`V040B_PRIMITIVE_CONDITION.md`](V040B_PRIMITIVE_CONDITION.md) — executable primitive-condition implementation, UI, tests, scope, and limitations.
3. [`CONDITION_ENGINE_SPEC.md`](CONDITION_ENGINE_SPEC.md) — full v0.4 sequencing and engine contract.
4. [`../data/rules/hellenistic/condition-v1.registry.json`](../data/rules/hellenistic/condition-v1.registry.json) — machine-readable rule/source registry.
5. [`../schemas/naf-condition-record-v0.4.0a.schema.json`](../schemas/naf-condition-record-v0.4.0a.schema.json) — ConditionRecord serialization contract.
6. [`../tests/fixtures/condition/v0.4.0a-fixture-spec.json`](../tests/fixtures/condition/v0.4.0a-fixture-spec.json) — synthetic edge-case specification.
7. [`../tests/condition_registry_smoke.mjs`](../tests/condition_registry_smoke.mjs) — registry/schema/fixture contract tests.
8. [`../tests/primitive_condition_smoke.mjs`](../tests/primitive_condition_smoke.mjs) — executable rule/boundary/canonical regression tests.

## v0.3 closeout

- [`V03_CLOSEOUT_AND_V04_ENTRY.md`](V03_CLOSEOUT_AND_V04_ENTRY.md) — what v0.3.x proves and does not prove.
- [`V03_KERNEL_AND_INPUT.md`](V03_KERNEL_AND_INPUT.md) — v0.3 kernel and input details.
- [`../schemas/naf-analysis-v0.3.1.schema.json`](../schemas/naf-analysis-v0.3.1.schema.json) — frozen minimum v0.3 structural analysis envelope.

## Astronomy and civil time

- [`ASTRONOMY_ADAPTERS.md`](ASTRONOMY_ADAPTERS.md) — current astronomy provider architecture.
- [`ASTRONOMY_VALIDATION_PLAN.md`](ASTRONOMY_VALIDATION_PLAN.md) — independent cross-provider validation requirements.

## Research program

- [`RESEARCH_PROGRAM.md`](RESEARCH_PROGRAM.md) — research layers, HCI evaluation, null models, replication, and theory-promotion rules.
- [`RESEARCH_DISCOVERY.md`](RESEARCH_DISCOVERY.md) — exploratory descriptors and promotion rules.
- [`V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](V041_GRAPH_ANALYTICS_AND_FINDINGS.md) — current graph-analysis implementation and explainable finding contract.

## Product and interface

- [`PRODUCT.md`](PRODUCT.md) — product identity, user value, and product boundaries.
- [`GLOSSARY.md`](GLOSSARY.md) — engineering and astrological terminology.

## Documentation rule

When implementation and documentation disagree, that disagreement is a defect. A new rule, provider, schema, visualization claim, research descriptor, graph metric, or finding is not complete until its documentation, provenance identifier, epistemic status, and relevant tests are updated in the same development movement.
