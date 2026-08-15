# Noetic Atlas — Developer Guide

## 1. Current target

Read [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md) first.

```text
framework / research baseline   v0.4.7
package                         0.4.7-alpha.1
deployed branch                 main
public product                  stale at v0.4.5 shell
v0.4.7 public shell             absent
active engineering priority     v0.4.7 productization gate
next research milestone         v0.4.8 only after gate closes
```

The immediate target is **not** to start v0.4.8. It is to close [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

## 2. Engineering contract

```text
input
→ civil-time resolution
→ astronomy
→ deterministic astrological rules
→ canonical analysis
→ primitive / relational / compound condition
→ graph / routing derivation
→ Operational reading / interpretation projections
→ research-regime boundary
→ counterfactual inference
→ hypergraph derivation / hypergraph null profiles
→ coordinated projections
→ proof / provenance
```

> **No downstream layer may invent or silently alter an upstream fact.**

Frozen representation law:

```text
one astronomical/chart state
→ many explicit models
→ many coordinated projections
```

## 3. Repository map — current research surface

```text
astroframework/
├── README.md
├── index.html                         # CURRENTLY redirects to stale v0.4.5 app
├── package.json                       # 0.4.7-alpha.1
├── schemas/
│   ├── naf-null-laboratory-result-v0.4.6.schema.json
│   └── naf-hypergraph-result-v0.4.7.schema.json
├── data/
│   ├── canonical/
│   └── rules/hellenistic/
├── src/
│   ├── astronomy/
│   ├── time/
│   ├── kernel/
│   ├── pipeline/
│   ├── conditions/
│   ├── integrity/
│   ├── interpretation/
│   └── research/
│       ├── graph-analytics-engine.mjs
│       ├── house-river-engine.mjs
│       ├── research-regime-registry.mjs
│       ├── research-lab-engine.mjs       # accepted v0.4.6 artifact
│       ├── null-state.mjs
│       ├── null-metric-registry.mjs
│       ├── null-model-registry.mjs
│       ├── null-model-laboratory.mjs
│       ├── null-model-worker.mjs
│       ├── hypergraph-engine.mjs
│       ├── hypergraph-null-evaluator.mjs
│       └── research-lab-v047.mjs         # v0.4.7 wrapper
├── prototype/
│   ├── index.html                        # deterministic visual core
│   ├── historical v041*–v045 shells
│   ├── app.html                          # current root target, still v0.4.5
│   └── v046.html                         # reachable null-lab shell
│       # v047.html does not yet exist
├── tests/
│   ├── null_model_laboratory_v046_smoke.mjs
│   ├── research_lab_v046_smoke.mjs
│   ├── v046_ui_contract_smoke.mjs
│   ├── hypergraph_v047_smoke.mjs
│   ├── hypergraph_nulls_v047_smoke.mjs
│   └── research_lab_v047_smoke.mjs
├── docs/
└── .github/workflows/
```

## 4. Current version-preservation rule

Do not “fix” provenance by rewriting accepted subsystem versions.

`research-lab-engine.mjs` remains v0.4.6 because it is an accepted historical executable contract.

v0.4.7 extends it through:

```text
research-lab-v047.mjs
```

This is the preferred pattern when a new layer extends a stable subsystem without changing its old semantics.

Product chrome may say v0.4.7 while subsystem provenance still truthfully says v0.4.6 where that subsystem is the one producing the result.

## 5. Module ownership

### `src/time/`

Owns civil-time resolution, IANA zone lookup/override, historical offsets, DST ambiguity/nonexistence, and UTC provenance.

### `src/astronomy/`

Owns numerical celestial coordinates and observer geometry under explicit provider/convention identity.

### `src/kernel/`

Owns reusable deterministic zodiac/house/aspect/rulership/topology primitives.

### `src/conditions/`

Owns primitive, relational, and compound astrological condition as typed provenance-bearing rule outputs.

No universal strength scalar.

### `src/research/graph-analytics-engine.mjs`

Owns graph-derived structure such as SCC/basin/depth, aspect connectivity, motifs, and overlap.

### `src/research/house-river-engine.mjs`

Owns route-count projection over already-computed house/ruler paths.

### `src/research/research-regime-registry.mjs`

Owns Operational / Experimental / Discovery identity and research-status dimensions.

### `src/research/null-*.mjs`

Owns v0.4.6 counterfactual state, source-locked metrics, named null generators, deterministic RNG/seed handling, finite Monte Carlo inference, FDR families, and experiment ledgers.

### `src/research/hypergraph-engine.mjs`

Owns formal higher-order configuration detection and topological/hybrid hyperedge construction.

### `src/research/hypergraph-null-evaluator.mjs`

Owns candidate-specific admissible null evaluation for hyperedges. It reuses the accepted v0.4.6 inference contract.

### `src/research/research-lab-v047.mjs`

Owns the v0.4.7 research wrapper over the accepted v0.4.6 lab.

### `src/interpretation/`

Owns downstream readable meaning. It may consume evidence but may not mutate coordinates, houses, aspects, condition, graph/hypergraph facts, null experiments, or research status.

### `src/integrity/`

Owns normalization/indexing/walking of proof and derivation references.

## 6. Running the project

```bash
npm install
npm test
```

The current suite includes historical tests plus:

```text
v0.4.6 null model laboratory
v0.4.6 research lab integration
v0.4.6 UI contract
v0.4.7 formal hypergraph core
v0.4.7 hypergraph null integration
v0.4.7 research lab wrapper
```

Serve locally:

```bash
python -m http.server 8000
```

Current public-equivalent root behavior is **not** the desired v0.4.7 development target. For research-module inspection, use direct module/tests or the v0.4.6 shell as appropriate until the productization gate is implemented.

## 7. Core invariants

### Chart authority

There is one current astronomical/chart state.

### Longitude

Decimal degrees in `[0,360)` internally.

### Time

Astronomy receives an unambiguous UTC instant.

### Houses

Whole Sign house assignment derives from sign displacement relative to the Ascendant sign.

### Aspects

Every admitted relation preserves endpoints, family/angle, separation/orb, policy identity, phase where computable, and provenance.

### Lots

Every lot preserves sect, formula family, directed arc, result, house, ruler, and provenance.

### Topology

Every graph/hypergraph result names its scope and rule/model.

### Condition

Primitive, relational, and compound factors remain separately reconstructible.

### House River

Band width is route count only.

### Research regimes

Experimental/Discovery results cannot overwrite Operational facts.

### Null inference

A null must declare preserves/randomizes/question/limitations and use the same statistic on observed and simulated state.

### Monte Carlo

Use +1 finite correction. No p=0.

### Multiple testing

Raw and adjusted p remain distinct. Family/procedure/rank/size are explicit.

### Cross-null semantics

No `N of 4 nulls passed` field or universal score.

### Population firewall

Counterfactual percentile is not population prevalence.

### Hyperedge cardinality

Do not create missing participants to satisfy a named pattern.

### Hyperedge provenance

Every v0.4.7 hyperedge carries a SHA-256 derivation hash and explicit derivation payload.

### Interpretation

Interpretation remains downstream and cannot change formal research state.

## 8. Adding an astrological rule

Specify before code:

1. tradition/source;
2. reconstruction/variant;
3. required inputs;
4. exact transformation;
5. boundaries;
6. applicability;
7. model/rule ID;
8. provenance fields;
9. fixtures;
10. derivation contract.

Do not silently blend traditions.

## 9. Adding a graph metric

Declare:

- name/version;
- graph scope;
- mathematical definition;
- normalization;
- invariances/sensitivities;
- executable implementation fingerprint when used in inference;
- admissible nulls;
- interpretation status.

Do not label a value rare/high/dominant without the relevant baseline.

## 10. Adding a null model

A new null requires:

```text
id + version
question
preserves
randomizes
assumptions
limitations
admissible metrics
quality diagnostics
```

The generator must be deterministic under the recorded seed/RNG.

Preservation violations are errors, not caveats to hide.

Constrained mixing limitations must be surfaced.

## 11. Adding a hyperedge type

Declare:

- hyperedge class;
- participant roles;
- minimum/exact cardinality;
- geometric/topological template;
- orb/residual policy;
- permutation/assignment semantics;
- derivation payload;
- hash contract;
- admissible null models;
- compact research-state semantics;
- negative fixtures.

A visually suggestive group is not sufficient.

## 12. Adding hidden geometry — v0.4.8 rule

The future Hidden Geometry Engine must keep coordinate systems explicit.

Examples:

```text
midpoint longitude relation      ≠ ordinary major aspect
parallel/contraparallel          ≠ ecliptic longitude aspect
antiscia transformation          ≠ physical conjunction
```

Each relation needs explicit geometry, provider/convention where astronomical, source/tradition where astrological, proof, and integration contract into graphs/hypergraphs.

## 13. Public-shell development rules

The next engineering movement must create/promote one authoritative v0.4.7 shell.

Required:

- seven coordinated views;
- Personal | Research;
- one chart authority;
- v0.4.6 null laboratory in Research;
- v0.4.7 hyperedge list/inspector + null profiles;
- coherent product version chrome;
- preserved subsystem provenance labels;
- loading/ready/empty/error state machine;
- stale null/hypergraph invalidation after chart changes;
- root redirect update;
- UI regression of the end-to-end Research path.

Historical shells remain regression artifacts, not competing current apps.

## 14. Bootstrap state machine

Required public bootstrap:

```text
loading
→ ready
OR empty
OR error
```

Forbidden presentation state:

```text
truth summary appears current
while Natal Field / derived research state is uninitialized
without a loading explanation
```

Treat bootstrap ordering as data-integrity behavior, not cosmetic UX.

## 15. AI integration rules

AI may:

- explain;
- navigate;
- compare explicit models;
- trace provenance;
- summarize null profiles;
- formulate hypotheses;
- generate interpretation from labeled evidence.

AI may not:

- invent coordinates;
- silently choose variants;
- modify chart facts;
- collapse relation types;
- fabricate proof;
- convert counterfactual percentile into population rarity;
- convert graph/hypergraph novelty into meaning;
- promote Experimental/Discovery results into Operational state.

## 16. Privacy

Birth data and life-event annotations are sensitive. Population-cohort work will require stronger consent, provenance, retention, pseudonymization, and access controls than the current synthetic/canonical research workflow.

## 17. Definition of done

A framework feature is not complete until:

- [ ] owner layer identified;
- [ ] formal definition/model ID exists;
- [ ] deterministic implementation exists where applicable;
- [ ] boundaries and negative cases are tested;
- [ ] provenance/applicability represented;
- [ ] research-status effects are explicit;
- [ ] null semantics are declared where used;
- [ ] unsupported/not-admissible states explicit;
- [ ] interpretation remains downstream;
- [ ] living documentation updated.

A **public product feature** additionally requires:

- [ ] current shell exposes it;
- [ ] root entry reaches that shell;
- [ ] version chrome is coherent;
- [ ] bootstrap state is coherent;
- [ ] historical shells no longer compete for current status;
- [ ] public/UI contract tests exercise the feature;
- [ ] Pages deployment is successful;
- [ ] real browser behavior is verified.

## 18. Reading order

```text
README
→ CURRENT_RELEASE
→ V047_PUBLIC_PRODUCTIZATION_GATE
→ V047_FORMAL_CONFIGURATIONS_HYPERGRAPHS
→ V046_NULL_MODEL_LABORATORY
→ RESEARCH_CONSTITUTION
→ CURRENT_STATE_AND_SCIENTIFIC_RATIONALE
→ ARCHITECTURE
→ RESEARCH_DISCOVERY
→ RESEARCH_PROGRAM
→ PRODUCT
→ ROADMAP
→ tests/
```

When implementation, living documentation, and public behavior disagree, treat the disagreement as a defect.