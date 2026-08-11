# Noetic Atlas Documentation Index

This index is the recommended entry point for engineers, astrologers, researchers, and future collaborators.

## Start here

1. [`../README.md`](../README.md) — project overview and current implementation state.
2. [`THEORY_AND_PURPOSE.md`](THEORY_AND_PURPOSE.md) — why Noetic Atlas exists and what epistemic problem it is trying to solve.
3. [`DEVELOPER_GUIDE.md`](DEVELOPER_GUIDE.md) — how to work safely in the repository.
4. [`ARCHITECTURE.md`](ARCHITECTURE.md) — software boundaries, data flow, and module ownership.
5. [`ASTROLOGICAL_MODEL.md`](ASTROLOGICAL_MODEL.md) — domain model and current astrological rules.
6. [`INTEGRITY_AND_PROVENANCE.md`](INTEGRITY_AND_PROVENANCE.md) — auditability and truth protocol.

## Current release closeout

- [`V03_CLOSEOUT_AND_V04_ENTRY.md`](V03_CLOSEOUT_AND_V04_ENTRY.md) — what v0.3 proves, what it does not prove, and the formal gate into v0.4.
- [`V03_KERNEL_AND_INPUT.md`](V03_KERNEL_AND_INPUT.md) — v0.3 kernel and input details.
- [`../schemas/naf-analysis-v0.3.1.schema.json`](../schemas/naf-analysis-v0.3.1.schema.json) — frozen minimum serialization envelope.

## Next milestone

- [`CONDITION_ENGINE_SPEC.md`](CONDITION_ENGINE_SPEC.md) — detailed v0.4 Hellenistic condition-engine specification.
- [`ROADMAP.md`](ROADMAP.md) — ordered development path.

## Astronomy and civil time

- [`ASTRONOMY_ADAPTERS.md`](ASTRONOMY_ADAPTERS.md) — current astronomy provider architecture.
- [`ASTRONOMY_VALIDATION_PLAN.md`](ASTRONOMY_VALIDATION_PLAN.md) — independent cross-provider validation requirements.

## Research program

- [`RESEARCH_PROGRAM.md`](RESEARCH_PROGRAM.md) — theory-development, validation, null models, and research governance.
- [`RESEARCH_DISCOVERY.md`](RESEARCH_DISCOVERY.md) — currently implemented exploratory descriptors.

## Product and interface

- [`PRODUCT.md`](PRODUCT.md) — product identity, user value, and market framing.
- [`GLOSSARY.md`](GLOSSARY.md) — engineering and astrological terminology.

## Review feedback incorporated into v0.3

The formal review of v0.3 identified seven structural gaps. They map to repository actions as follows:

| Review finding | Repository response | Status |
|---|---|---|
| Traditional condition incomplete | `CONDITION_ENGINE_SPEC.md`; v0.4 gate | specified, not implemented |
| Astronomy adapter partial / not cross-validated | `ASTRONOMY_VALIDATION_PLAN.md` | validation plan defined |
| Derivation ledger not navigable | `derivation_tree` added to integrity analysis | data layer implemented; UI pending |
| Research descriptors premature | `promotion_status: hold` + substrate flags | implemented |
| Visualization behind kernel | v0.4 visual requirements documented | pending |
| Testing surface narrow | `tests/boundary_smoke.mjs` added; more matrices defined | partially addressed |
| Schema/versioning soft | `naf.analysis.v0.3.1` envelope + `versions` manifest | implemented minimum contract |

## Reading by role

### Software engineer

```text
README
→ DEVELOPER_GUIDE
→ ARCHITECTURE
→ V03_CLOSEOUT_AND_V04_ENTRY
→ CONDITION_ENGINE_SPEC
→ INTEGRITY_AND_PROVENANCE
→ tests/
```

### Traditional astrologer / domain reviewer

```text
THEORY_AND_PURPOSE
→ ASTROLOGICAL_MODEL
→ CONDITION_ENGINE_SPEC
→ INTEGRITY_AND_PROVENANCE
→ canonical fixtures
```

### Research collaborator

```text
THEORY_AND_PURPOSE
→ RESEARCH_PROGRAM
→ RESEARCH_DISCOVERY
→ V03_CLOSEOUT_AND_V04_ENTRY
→ schemas/
```

### Product collaborator

```text
README
→ PRODUCT
→ THEORY_AND_PURPOSE
→ ROADMAP
```

## Documentation rule

When implementation and documentation disagree, that disagreement is a defect.

A new rule, provider, schema, or research descriptor is not complete until its documentation, provenance identifier, and tests are updated in the same development movement.
