# Noetic Atlas Documentation Index

This index is the recommended entry point for engineers, astrologers, researchers, and future collaborators.

## Start here

1. [`../README.md`](../README.md) — project overview and current public implementation state.
2. [`CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md) — what Noetic Atlas genuinely establishes, what is novel, what the technical literature justifies, and where the claims stop.
3. [`THEORY_AND_PURPOSE.md`](THEORY_AND_PURPOSE.md) — philosophical and epistemic mission.
4. [`DEVELOPER_GUIDE.md`](DEVELOPER_GUIDE.md) — repository invariants, tests, and extension rules.
5. [`ARCHITECTURE.md`](ARCHITECTURE.md) — software boundaries and data flow.
6. [`ASTROLOGICAL_MODEL.md`](ASTROLOGICAL_MODEL.md) — explicit rule assumptions and current astrological substrate.
7. [`INTEGRITY_AND_PROVENANCE.md`](INTEGRITY_AND_PROVENANCE.md) — auditability and the Derivation Ledger.

## Current public testing line

- **v0.4.0b Primitive Condition Observatory** — v0.3.2 Visual Observatory plus synchronized primitive-condition dock.
- **`naf.analysis.v0.3.1`** — current structural analysis envelope.
- **`naf.condition.record.v0.4.0a`** — frozen condition-record schema.
- **`naf.condition.primitive.hellenistic.v0.4.0b`** — executable primitive condition model.
- **`main`** — deployed default branch after tested development changes are promoted.

The graph-first v0.3.2 interface remains the structural core. v0.4.0b adds source-locked condition inspection without replacing that visual grammar.

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

### v0.4.0b implemented factors

For the classical seven planets:

```text
domicile
adversity / opposite domicile
sign-level exaltation
depression / fall
standard triplicity
Egyptian bound
planetary sect family
in-sect / out-of-sect condition
Whole-Sign angular-triad class
```

Every factor produces an independent rule/source/provenance record. No scalar condition or strength score exists.

### Still pending

```text
reception
mutual reception / exchange
overcoming
bonification / maltreatment
enclosure / mitigation
quadrant degree-based dynamic strength
Life Spectrum / temporal activation
```

## v0.3 closeout

- [`V03_CLOSEOUT_AND_V04_ENTRY.md`](V03_CLOSEOUT_AND_V04_ENTRY.md) — what v0.3.x proves and does not prove.
- [`V03_KERNEL_AND_INPUT.md`](V03_KERNEL_AND_INPUT.md) — v0.3 kernel and input details.
- [`../schemas/naf-analysis-v0.3.1.schema.json`](../schemas/naf-analysis-v0.3.1.schema.json) — frozen minimum v0.3 structural analysis envelope.

## Astronomy and civil time

- [`ASTRONOMY_ADAPTERS.md`](ASTRONOMY_ADAPTERS.md) — current astronomy provider architecture.
- [`ASTRONOMY_VALIDATION_PLAN.md`](ASTRONOMY_VALIDATION_PLAN.md) — independent cross-provider validation requirements.

## Research program

- [`RESEARCH_PROGRAM.md`](RESEARCH_PROGRAM.md) — research layers, HCI evaluation, null models, replication, and theory-promotion rules.
- [`RESEARCH_DISCOVERY.md`](RESEARCH_DISCOVERY.md) — currently implemented exploratory descriptors and promotion hold.

## Product and interface

- [`PRODUCT.md`](PRODUCT.md) — product identity, user value, and product boundaries.
- [`GLOSSARY.md`](GLOSSARY.md) — engineering and astrological terminology.

## Documentation rule

When implementation and documentation disagree, that disagreement is a defect. A new rule, provider, schema, visualization claim, or research descriptor is not complete until its documentation, provenance identifier, epistemic status, and relevant tests are updated in the same development movement.
