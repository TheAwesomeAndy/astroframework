# Noetic Atlas — Developer Guide

## 1. Current target

See [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md) first.

Current deployed branch: **`main`**.  
Current public release: **v0.4.2 — Relational Condition**.  
Current browser surface: **`prototype/v042.html`**.  
Current minimum deterministic envelope: **`naf.analysis.v0.3.1`**.

Current next astrological-engine milestone: **v0.4.3 compound condition**.

The present system includes deterministic chart structure, primitive + relational classical condition, graph analytics/findings, outer-planet interpretation, energetic whole-chart synthesis, Resonance Field, Qualified Resonance/Flow, House River, and Derivation Walker infrastructure. Life Spectrum is not implemented yet.

## 2. Engineering contract

```text
input
→ civil-time resolution
→ astronomy
→ deterministic astrological rules
→ canonical analysis
→ primitive condition
→ relational condition
→ graph derivation / research
→ interpretation / resonance
→ coordinated projections
→ proof / provenance
```

> **No downstream layer may invent or silently alter an upstream fact.**

Frozen representation law:

```text
one chart state
→ many coordinated projections
```

## 3. Repository map

```text
astroframework/
├── README.md
├── index.html                         # public redirect → prototype/v042.html
├── package.json
├── schemas/
├── data/
│   ├── canonical/
│   └── rules/hellenistic/
│       ├── condition-v1.registry.json
│       └── relational-condition-v1.registry.json
├── src/
│   ├── astronomy/
│   ├── time/
│   ├── kernel/
│   ├── pipeline/
│   ├── conditions/
│   │   ├── primitive-condition-engine.mjs
│   │   ├── relational-condition-engine.mjs
│   │   ├── condition-signature.mjs
│   │   └── condition-system.mjs
│   ├── integrity/
│   │   └── derivation-walker.mjs
│   ├── research/
│   │   ├── graph-analytics-engine.mjs
│   │   ├── house-river-engine.mjs
│   │   └── pattern-engine.mjs
│   └── interpretation/
│       ├── astrological-analysis-engine.mjs
│       ├── energetic-synthesis-engine.mjs
│       ├── energetic-synthesis-display.mjs
│       └── house-resonance-engine.mjs
├── prototype/
│   ├── index.html                     # deterministic graph-first visual core
│   ├── v0412c.html                    # preserved Structure & Analysis
│   ├── v0413.html                     # preserved additive Resonance Field
│   └── v042.html                      # CURRENT public shell
├── tests/
├── docs/
└── .github/workflows/
```

Historical versioned surfaces remain in `prototype/` for regression/history purposes.

## 4. Current browser data flow

```text
prototype/index.html computes / serializes chart state
        ↓
prototype/v0412c.html consumes it for synthesis/findings/condition
        ↓
prototype/v0413.html consumes the same state for Resonance Field
        ↓
prototype/v042.html consumes the same state for relational projections
        ↓
computeConditionSystem(...)
buildHouseResonanceMap(...)
buildHouseRiver(...)
buildDerivationIndex(...)
        ↓
Existing Atlas / Qualified Resonance / Relations /
Qualified Flow / House River / Proof Walker
```

No wrapper is permitted to become a second chart kernel.

Preservation chain:

```text
v042 → v0413 → v0412c → deterministic core
```

## 5. Module ownership

### `src/time/`
Owns local civil time, IANA zone lookup/override, historical offsets, DST ambiguity/nonexistence, and UTC resolution.

### `src/astronomy/`
Owns Sun through Pluto astronomy, longitude, motion, ASC, MC, solar altitude, and provider/convention provenance. Automatic exclusions currently include Ceres, Chiron, node variants, Lilith/apogee variants, Vertex, and fixed stars.

### `src/kernel/noetic-kernel.mjs`
Owns normalization/parsing, sign conversion, Whole Sign houses, major aspects/orbs, applying/separating, traditional domicile rulership, dispositor graph, Tarjan SCC/terminal SCC, house-ruler routes, and element/modality composition.

### `src/kernel/hellenistic-integrity.mjs`
Owns sect, seven Hermetic lots, formula proof, version/completeness state, and deterministic derivation-ledger enrichment.

### `src/conditions/primitive-condition-engine.mjs`
Owns `naf.condition.primitive.hellenistic.v0.4.0b`: independent primitive factors for the classical seven. No scalar strength score.

### `src/conditions/relational-condition-engine.mjs`
Owns `naf.condition.relational.hellenistic.v0.4.2`: source-locked reception, exchange, later-tradition mutual-reception compatibility, overcoming, and domination relations. It consumes deterministic signs/configurations and does not rewrite dispositorship.

### `src/conditions/condition-system.mjs`
Composes primitive + relational condition while keeping layers separately inspectable.

### `src/conditions/condition-signature.mjs`
Projects categorical condition tokens across views. It is not a scoring engine.

### `src/research/graph-analytics-engine.mjs`
Owns SCC condensation, terminal basin, route depth, upstream route capture, nonterminal bottleneck, aspect components/degree/clustering/betweenness, articulation points/bridges, typed motifs, and aspect × dispositor overlap.

### `src/research/house-river-engine.mjs`
Consumes existing house routes and derives route-count bands. Width semantics are exactly `# house-ruler paths traversing the edge`.

### `src/integrity/derivation-walker.mjs`
Normalizes/indexes proof objects and traverses `derivation_ref` dependencies. Missing legacy dependencies stay explicit.

### `src/interpretation/`
Owns downstream astrological/energetic interpretation and Resonance Field modeling. It may consume deterministic state but may not mutate it. Outer planets can be interpreted without inheriting Hellenistic condition. Ceres can be interpreted only when a coordinate exists.

## 6. Running the project

```bash
npm install
npm test
```

Current `npm test` executes kernel, integrity, primitive and relational condition, graph analytics, astrological/energetic analysis, house resonance, House River/Derivation Walker, every preserved UI contract through v0413, the v042 UI contract, geometry/boundary, timezone, and astronomy-adapter tests.

Serve locally:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/prototype/v042.html
```

## 7. Core invariants

### Longitude
Decimal degrees in `[0,360)` internally.

### Time
Astronomy receives an unambiguous UTC instant.

### Houses
Whole Sign house is derived from sign displacement relative to Ascendant sign.

### Aspects
Each admitted relation retains endpoints, aspect family, separation/orb, orb-policy identity, phase when computable, and provenance.

### Lots
Each lot retains sect, formula family, directed arc, ASC, result, house, ruler, and provenance.

### Topology
A graph result is incomplete unless graph definition/rule model is identified.

### Condition
Primitive and relational facts remain independently reconstructable. Do not hide them in one strength number.

### Relation layers
Dispositorship, reception, exchange, mutual-reception compatibility, overcoming, and domination remain distinguishable objects.

### House River
Band width is a route count, never an energetic-strength proxy.

### Provenance
Every new v0.4.2 relation/band is created with a `derivation_ref`.

### Interpretation
Interpretation is `interpretive-inference`; it cannot rewrite deterministic state.

### Completeness
Use explicit states such as `valid`, `ambiguous`, `unsupported`, `invalid`, `not_implemented`, `not_applicable`, and `indeterminate`. Never encode unsupported as zero/false.

## 8. Adding an astrological rule

Specify before code:

1. tradition;
2. source/reconstruction;
3. competing variants;
4. required astronomical inputs;
5. exact transformation;
6. boundaries;
7. applicability;
8. provenance fields;
9. synthetic fixtures;
10. derivation-reference contract.

Implementation order:

```text
source definition
→ formal rule/model ID
→ pure deterministic function
→ edge tests
→ independent/manual verification
→ provenance + derivation output
→ graph/UI exposure
→ interpretation afterward
```

Do not silently blend Hellenistic, medieval, modern, or Jyotish definitions.

## 9. Adding a relation type

A relation type must declare directionality, endpoints, configuration prerequisites, tradition/source, rule ID, applicability, proof inputs/results, and whether it changes routing or merely qualifies it.

Default rule: **relational condition qualifies dispositorship; it does not rewrite the dispositor graph.**

## 10. Adding a graph metric

Define name/version, graph scope, mathematical definition, input graph, normalization, invariances/sensitivities, null-model requirement, and interpretive status.

Do not label values high/rare/dominant without an explicit baseline.

## 11. Adding an interpretation feature

Declare interpretation model/profile ID, epistemic status, deterministic evidence consumed, tradition/posture, applicability, and limitations. It may enrich prose without changing coordinates, houses, aspects, topology, condition, or provenance.

## 12. Current condition development contract

Implemented:

```text
v0.4.0a ontology/schema
v0.4.0b primitive condition
v0.4.2  relational condition
```

Next:

```text
v0.4.3 compound condition
```

Compound rules must be pure consumers of primitive + relational facts.

## 13. Current graph research contract

Implemented descriptive graph math does not establish astrology's causal truth.

Required next gate:

```text
geometric longitude null
label-permutation null
degree-preserving null where appropriate
layer-overlap null
```

Null findings are acceptable.

## 14. UI development rules

When changing the public surface:

- preserve the single-state authority;
- do not duplicate calculations in wrappers;
- preserve prior useful projections unless deliberately deprecated and documented;
- keep relation layers visually distinct;
- preserve explicit loading/error states;
- keep reading, finding, metric, condition, route, and proof semantics distinct;
- preserve graph-linked proof access;
- add/update UI contract tests;
- transfer root ownership only to the newest public-contract test while keeping older surface tests intact;
- update `CURRENT_RELEASE.md`, README, INDEX, ROADMAP, and affected architecture/product docs in the same movement.

## 15. AI integration rules

AI may explain, navigate, compare, trace, synthesize, and hypothesize. It may not invent coordinates, silently pick variants, change chart facts, conceal unsupported states, collapse relation types, fabricate proof dependencies, or convert research descriptors into established meaning.

## 16. Privacy

Birth data and life-event annotations are sensitive. Production work must include data minimization, deletion/retention controls, encryption, separate research consent, pseudonymous research IDs, and no private-text training without explicit permission.

## 17. Definition of done

A feature is not complete until:

- [ ] owner layer is identified;
- [ ] formal definition exists;
- [ ] source/model ID exists where applicable;
- [ ] deterministic implementation exists where applicable;
- [ ] edge cases are tested;
- [ ] provenance/applicability is represented;
- [ ] new relational/route facts have derivation references;
- [ ] unsupported/ambiguous states are explicit;
- [ ] UI consumes computed output rather than reimplementing it;
- [ ] prior useful views remain regression-protected;
- [ ] living documentation is updated;
- [ ] interpretation remains downstream;
- [ ] release-entry contract is updated if public behavior changed.

## 18. Reading order

```text
README
→ CURRENT_RELEASE
→ V042_RELATIONAL_CONDITION
→ CURRENT_STATE_AND_SCIENTIFIC_RATIONALE
→ THEORY_AND_PURPOSE
→ DEVELOPER_GUIDE
→ ARCHITECTURE
→ ASTROLOGICAL_MODEL
→ CONDITION_ENGINE_SPEC
→ INTEGRITY_AND_PROVENANCE
→ V041_GRAPH_ANALYTICS_AND_FINDINGS
→ V0413_RESONANCE_FIELD
→ V0412_ENERGETIC_SYNTHESIS
→ ROADMAP
→ tests/
```

When implementation and living documentation disagree, treat the disagreement as a defect.
