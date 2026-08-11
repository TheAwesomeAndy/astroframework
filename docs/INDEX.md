# Noetic Atlas Documentation Index

This index is the recommended entry point for engineers, astrologers, researchers, and future collaborators.

## Start here

1. [`../README.md`](../README.md) — project overview and current public implementation state.
2. [`CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md) — what Noetic Atlas genuinely establishes today, what is novel, what the technical literature justifies, and where the claims stop.
3. [`THEORY_AND_PURPOSE.md`](THEORY_AND_PURPOSE.md) — philosophical and epistemic mission.
4. [`DEVELOPER_GUIDE.md`](DEVELOPER_GUIDE.md) — repository invariants, tests, and extension rules.
5. [`ARCHITECTURE.md`](ARCHITECTURE.md) — software boundaries and data flow.
6. [`ASTROLOGICAL_MODEL.md`](ASTROLOGICAL_MODEL.md) — explicit rule assumptions and current astrological substrate.
7. [`INTEGRITY_AND_PROVENANCE.md`](INTEGRITY_AND_PROVENANCE.md) — auditability and the Derivation Ledger.

## Current public line

- **v0.3.2 Visual Observatory** — current public browser interface on top of the deterministic v0.3 kernel.
- **`naf.analysis.v0.3.1`** — current minimum deterministic analysis envelope.
- **`main`** — deployed default branch.

## Active development line

**Branch:** `noetic-atlas-v0.4`  
**Current milestone:** **v0.4.0a — Rule Registry + Condition Schema + Synthetic Test Specification**

Read in this order:

1. [`V040A_CONDITION_ONTOLOGY.md`](V040A_CONDITION_ONTOLOGY.md) — frozen ontology, source-lock decisions, applicability rules, boundary conventions, and exit criteria.
2. [`CONDITION_ENGINE_SPEC.md`](CONDITION_ENGINE_SPEC.md) — full v0.4 sequencing and engine contract.
3. [`../data/rules/hellenistic/condition-v1.registry.json`](../data/rules/hellenistic/condition-v1.registry.json) — machine-readable rule/source registry.
4. [`../schemas/naf-condition-record-v0.4.0a.schema.json`](../schemas/naf-condition-record-v0.4.0a.schema.json) — ConditionRecord serialization contract.
5. [`../tests/fixtures/condition/v0.4.0a-fixture-spec.json`](../tests/fixtures/condition/v0.4.0a-fixture-spec.json) — pre-implementation synthetic edge cases.
6. [`../tests/condition_registry_smoke.mjs`](../tests/condition_registry_smoke.mjs) — registry/schema/fixture contract test.

**Important:** v0.4.0a deliberately contains no dignity calculation engine. It freezes the contract before executable rules are introduced.

## v0.3 closeout

- [`V03_CLOSEOUT_AND_V04_ENTRY.md`](V03_CLOSEOUT_AND_V04_ENTRY.md) — what v0.3.x proves and does not prove.
- [`V03_KERNEL_AND_INPUT.md`](V03_KERNEL_AND_INPUT.md) — v0.3 kernel and input details.
- [`../schemas/naf-analysis-v0.3.1.schema.json`](../schemas/naf-analysis-v0.3.1.schema.json) — frozen minimum v0.3 analysis envelope.

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
