# Noetic Atlas Documentation Index

This index is the recommended entry point for engineers, astrologers, researchers, and future collaborators.

## Start here

1. [`../README.md`](../README.md) — project overview and current implementation state.
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

The public visual layer now includes an interactive Natal Field, computed Aspect Matrix, directed Flow Map, terminal-SCC highlighting, house-route tracing, lot nodes, and graph-linked audit inspection.

## Current release closeout

- [`V03_CLOSEOUT_AND_V04_ENTRY.md`](V03_CLOSEOUT_AND_V04_ENTRY.md) — what v0.3.x proves, what it does not prove, and the formal gate into v0.4.
- [`V03_KERNEL_AND_INPUT.md`](V03_KERNEL_AND_INPUT.md) — v0.3 kernel and input details.
- [`../schemas/naf-analysis-v0.3.1.schema.json`](../schemas/naf-analysis-v0.3.1.schema.json) — frozen minimum serialization envelope.

## Next milestone

- [`CONDITION_ENGINE_SPEC.md`](CONDITION_ENGINE_SPEC.md) — detailed v0.4 Hellenistic condition-engine specification.
- [`ROADMAP.md`](ROADMAP.md) — ordered sequence: Structure → Condition → Time → Recurrence → Discovery.

## Astronomy and civil time

- [`ASTRONOMY_ADAPTERS.md`](ASTRONOMY_ADAPTERS.md) — current astronomy provider architecture.
- [`ASTRONOMY_VALIDATION_PLAN.md`](ASTRONOMY_VALIDATION_PLAN.md) — independent cross-provider validation requirements.

## Research program

- [`RESEARCH_PROGRAM.md`](RESEARCH_PROGRAM.md) — research layers, HCI evaluation, null models, replication, and theory-promotion rules.
- [`RESEARCH_DISCOVERY.md`](RESEARCH_DISCOVERY.md) — currently implemented exploratory descriptors and promotion hold.

## Product and interface

- [`PRODUCT.md`](PRODUCT.md) — product identity, user value, and product boundaries.
- [`GLOSSARY.md`](GLOSSARY.md) — engineering and astrological terminology.

## Scientific/technical rationale at a glance

The current design is supported by established methods in several domains:

| Design choice | Technical basis | Claim boundary |
|---|---|---|
| Strongly connected components | Tarjan’s linear graph algorithm | proves topology of the selected graph, not psychological/spiritual primacy |
| Node-link + matrix coordinated views | controlled graph-visualization task research | motivates task-specific views, not superiority of the current UI |
| Multiple relation layers | multilayer-network formalism | justifies separate edge types, not astrological causation |
| Derivation/provenance ledger | W3C PROV and FAIR-style provenance principles | supports reproducibility, not validity of the interpreted model |
| Null/randomized comparison | standard research methodology | can test descriptors; does not rescue poorly defined outcomes |

See [`CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md) for references and detailed limits.

## Review feedback and current disposition

| Review finding | Repository response | Current status |
|---|---|---|
| Traditional condition incomplete | `CONDITION_ENGINE_SPEC.md`; v0.4 gate | specified, not implemented |
| Astronomy adapter partial / not cross-validated | `ASTRONOMY_VALIDATION_PLAN.md` | validation plan defined; validation unfinished |
| Derivation ledger not navigable | `derivation_tree` + graph-linked audit inspection | data layer implemented; UI partially addressed |
| Research descriptors premature | `promotion_status: hold` + substrate flags | implemented |
| Visualization behind kernel | v0.3.2 Visual Observatory restoration | substantially addressed for structure; condition/time views still pending |
| Testing surface narrow | `tests/boundary_smoke.mjs` and CI suite | improved; browser/provider/condition matrices remain future work |
| Schema/versioning soft | `naf.analysis.v0.3.1` + `versions` manifest | implemented minimum contract |

## Reading by role

### Software engineer

```text
README
→ CURRENT_STATE_AND_SCIENTIFIC_RATIONALE
→ DEVELOPER_GUIDE
→ ARCHITECTURE
→ V03_CLOSEOUT_AND_V04_ENTRY
→ CONDITION_ENGINE_SPEC
→ tests/
```

### Traditional astrologer / domain reviewer

```text
CURRENT_STATE_AND_SCIENTIFIC_RATIONALE
→ THEORY_AND_PURPOSE
→ ASTROLOGICAL_MODEL
→ CONDITION_ENGINE_SPEC
→ INTEGRITY_AND_PROVENANCE
→ canonical fixtures
```

### Research collaborator

```text
CURRENT_STATE_AND_SCIENTIFIC_RATIONALE
→ RESEARCH_PROGRAM
→ RESEARCH_DISCOVERY
→ ASTRONOMY_VALIDATION_PLAN
→ schemas/
```

### Product / HCI collaborator

```text
README
→ CURRENT_STATE_AND_SCIENTIFIC_RATIONALE
→ PRODUCT
→ THEORY_AND_PURPOSE
→ ROADMAP
```

## Documentation rule

When implementation and documentation disagree, that disagreement is a defect.

A new rule, provider, schema, visualization claim, or research descriptor is not complete until its documentation, provenance identifier, epistemic status, and relevant tests are updated in the same development movement.
