# Noetic Atlas — Developer Guide

## 1. Current target

See [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md) first.

Current deployed branch: **`main`**.  
Current public release: **v0.4.1.2**.  
Current browser surface: **`prototype/v0412c.html`**.  
Current minimum deterministic envelope: **`naf.analysis.v0.3.1`**.

Current next astrological-engine milestone: **v0.4.2 relational condition**.

The present system already includes deterministic chart structure, primitive classical condition, graph analytics/findings, outer-planet interpretation, energetic whole-chart synthesis, and the v0412c resilient analysis bootstrap. Life Spectrum is not implemented yet.

## 2. Engineering contract

```text
input
→ civil-time resolution
→ astronomy
→ deterministic astrological rules
→ canonical analysis
→ primitive condition
→ graph derivation / research
→ interpretation
→ visualization
→ proof / provenance
```

> **No downstream layer may invent or silently alter an upstream fact.**

## 3. Repository map

```text
astroframework/
├── README.md
├── index.html                         # public redirect → prototype/v0412c.html
├── package.json
├── schemas/
├── data/
│   ├── canonical/
│   └── rules/hellenistic/
├── src/
│   ├── astronomy/
│   ├── time/
│   ├── kernel/
│   ├── pipeline/
│   ├── conditions/
│   │   └── primitive-condition-engine.mjs
│   ├── research/
│   │   ├── graph-analytics-engine.mjs
│   │   └── pattern-engine.mjs
│   └── interpretation/
│       ├── astrological-analysis-engine.mjs
│       ├── energetic-synthesis-engine.mjs
│       └── energetic-synthesis-display.mjs
├── prototype/
│   ├── index.html                     # graph-first visual core
│   ├── v040b.html                     # historical condition wrapper
│   ├── v041.html                      # historical graph/findings wrapper
│   ├── v0411.html                     # historical interpretation wrapper
│   ├── v0412.html / v0412b.html       # superseded v0.4.1.2 surfaces
│   └── v0412c.html                    # CURRENT public wrapper
├── tests/
├── docs/
└── .github/workflows/
```

## 4. Current browser data flow

```text
prototype/index.html computes / serializes chart state
        ↓
prototype/v0412c.html reads the state
        ↓
computePrimitiveConditions(...)
analyzeGraphArchitecture(...)
buildEnergeticSynthesis(...)
        ↓
Analysis / Findings / Metrics / Condition / Integrity
```

The wrapper must never become a second chart kernel.

v0412c startup contract:

- Analysis pane is visibly nonblank before iframe completion;
- canonical specimen loads automatically for the demo;
- chart JSON/status changes trigger resynchronization;
- synthesis failure produces an explicit error message;
- visual core remains usable independently.

## 5. Module ownership

### `src/time/`

Owns local civil time, IANA zone lookup/override, historical offsets, DST ambiguity/nonexistence, and UTC resolution.

### `src/astronomy/`

Owns Sun through Pluto astronomy, longitude, motion, ASC, MC, solar altitude, and provider/convention provenance.

Current automatic exclusions include Ceres, Chiron, node variants, Lilith/apogee variants, Vertex, and fixed stars.

### `src/kernel/noetic-kernel.mjs`

Owns reusable chart geometry/topology:

- normalization and parsing;
- sign conversion;
- Whole Sign houses;
- major aspects/orbs;
- applying/separating;
- traditional domicile rulership;
- dispositor graph;
- Tarjan SCC/terminal SCC;
- house-ruler routes;
- element/modality composition.

### `src/kernel/hellenistic-integrity.mjs`

Owns current Hellenistic integrity work such as sect, seven Hermetic lots, formula proof, version/completeness state, and derivation-ledger enrichment.

### `src/conditions/primitive-condition-engine.mjs`

Owns the implemented classical-seven primitive condition model:

```text
naf.condition.primitive.hellenistic.v0.4.0b
```

It computes nine independent primitive factors. It does not compute relational or compound condition and does not emit a scalar planet-strength score.

### `src/research/graph-analytics-engine.mjs`

Owns current graph analytics/findings:

- SCC condensation;
- terminal basin;
- route depth;
- upstream route capture;
- nonterminal bottleneck;
- aspect components/degree/clustering/betweenness;
- articulation points/bridges;
- typed three-node motifs;
- aspect × dispositor overlap.

### `src/research/pattern-engine.mjs`

Owns additional exploratory descriptors and integration of research outputs. Research outputs are read-only consumers of canonical state.

### `src/interpretation/`

Owns downstream astrological and energetic interpretation. It may consume deterministic state but may not mutate it.

Outer planets can be interpreted without inheriting Hellenistic essential dignity. Ceres can be interpreted only when a coordinate exists.

## 6. Running the project

```bash
npm install
npm test
```

Current `npm test` executes:

```text
kernel_smoke
integrity_smoke
condition_registry_smoke
primitive_condition_smoke
graph_analytics_smoke
astrological_analysis_smoke
energetic_synthesis_smoke
v041_ui_contract_smoke
v0411_ui_contract_smoke
v0412_ui_contract_smoke
v0412c_ui_contract_smoke
boundary_smoke
timezone_smoke
astronomy_contract_smoke
```

Serve locally:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/prototype/v0412c.html
```

## 7. Core invariants

### Longitude

Decimal degrees in `[0,360)` internally.

### Time

Astronomy receives an unambiguous UTC instant.

### Houses

Whole Sign house is derived from sign displacement relative to Ascendant sign.

### Aspects

Each admitted relation must retain endpoints, aspect family, separation/orb, orb-policy identity, phase when computable, and provenance.

### Lots

Each lot retains sect, formula family, directed arc, ASC, result, house, ruler, and provenance.

### Topology

A graph result is incomplete unless the graph definition/rule model is identified.

### Condition

Each primitive factor remains independently reconstructable. No hidden aggregation into a single strength number.

### Interpretation

Interpretation is `interpretive-inference`; it cannot rewrite deterministic state.

### Completeness

Use explicit states such as:

```text
valid
ambiguous
unsupported
invalid
not_implemented
not_applicable
```

Never encode unsupported as zero/false.

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
9. synthetic fixtures.

Implementation order:

```text
source definition
→ formal rule/model ID
→ pure deterministic function
→ edge tests
→ independent/manual verification
→ provenance output
→ graph/UI exposure
→ interpretation afterward
```

Do not silently blend Hellenistic, medieval, modern, or Jyotish definitions.

## 9. Adding a graph metric

Define:

```text
name/version
graph scope
mathematical definition
input graph
normalization
invariances/sensitivities
null-model requirement
interpretive status
```

A generic network statistic is not useful merely because a library exposes it. Prefer metrics that answer a specific astrological structural question.

Do not label values high/rare/dominant without an explicit baseline.

## 10. Adding an interpretation feature

An interpretation feature must declare:

- interpretation model/profile ID;
- epistemic status;
- deterministic evidence consumed;
- tradition/posture;
- applicability;
- limitations.

It may enrich prose without changing coordinates, houses, aspects, topology, condition, or provenance.

## 11. Current condition development contract

Implemented:

```text
v0.4.0a ontology/schema
v0.4.0b primitive condition
```

Next:

```text
v0.4.2 reception / exchange / overcoming
v0.4.3 selected compound condition
```

Relational condition must be represented as typed relation objects/layers, not hidden flags on dispositor edges.

Compound rules must be pure consumers of primitive + relational facts.

## 12. Current graph research contract

Implemented descriptive graph math does not establish astrology's causal truth.

Required next gate:

```text
geometric longitude null
label-permutation null
degree-preserving null where appropriate
layer-overlap null
```

Null findings are acceptable.

## 13. UI development rules

When changing the public surface:

- preserve `prototype/index.html` as the source of computed visual-core state unless architecture is deliberately refactored;
- do not duplicate calculations in wrappers;
- preserve explicit loading/error states;
- keep Analysis, Findings, Metrics, Condition, and Integrity semantically distinct;
- preserve graph-linked proof access;
- add/update UI contract tests;
- update `CURRENT_RELEASE.md`, README, INDEX, ROADMAP, and any affected architecture/product docs in the same movement.

## 14. AI integration rules

AI may explain/navigate/compare/trace/synthesize. It may not invent coordinates, silently pick variants, change chart facts, conceal unsupported states, or convert research descriptors into established meaning.

## 15. Privacy

Birth data and life-event annotations are sensitive. Production work must include data minimization, deletion/retention controls, encryption, separate research consent, pseudonymous research IDs, and no private-text training without explicit permission.

## 16. Definition of done

A feature is not complete until:

- [ ] owner layer is identified;
- [ ] formal definition exists;
- [ ] source/model ID exists where applicable;
- [ ] deterministic implementation exists where applicable;
- [ ] edge cases are tested;
- [ ] provenance/applicability is represented;
- [ ] unsupported/ambiguous states are explicit;
- [ ] UI consumes the computed output rather than reimplementing it;
- [ ] living documentation is updated;
- [ ] interpretation remains downstream;
- [ ] release-entry contract is updated if public behavior changed.

## 17. Reading order

```text
README
→ CURRENT_RELEASE
→ CURRENT_STATE_AND_SCIENTIFIC_RATIONALE
→ THEORY_AND_PURPOSE
→ DEVELOPER_GUIDE
→ ARCHITECTURE
→ ASTROLOGICAL_MODEL
→ CONDITION_ENGINE_SPEC
→ INTEGRITY_AND_PROVENANCE
→ V041_GRAPH_ANALYTICS_AND_FINDINGS
→ V0412_ENERGETIC_SYNTHESIS
→ ROADMAP
→ tests/
```

When implementation and living documentation disagree, treat the disagreement as a defect.
