# Noetic Atlas — Developer Guide

## 1. Current target

Canonical release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

```text
framework baseline      v0.4.7
public product baseline v0.4.7 (productized)
current shell           prototype/v047.html
root entry              index.html → prototype/v047.html
package version         0.4.7
productization gate     closed / live verified
```

The next engineering milestone is **v0.4.8 Hidden Geometry Engine**, but no v0.4.8 implementation belongs in the v0.4.7 release.

## 2. Engineering contract

```text
input
→ civil-time resolution
→ astronomy
→ deterministic astrological rules
→ canonical analysis
→ primitive condition
→ relational condition
→ compound condition
→ graph/House River derivation
→ auditable Reading / interpretation
→ Operational | Experimental | Discovery research aperture
→ named null comparison
→ formal hypergraph research
→ proof / provenance
```

> **No downstream layer may invent or silently alter an upstream fact.**

Frozen law:

```text
one chart state → many explicit models → many coordinated projections
```

Research law:

```text
Detection ≠ Unexpectedness ≠ Population Frequency ≠ Interpretation
```

## 3. Repository map — current release

```text
astroframework/
├── README.md
├── index.html                         # current root → prototype/v047.html
├── package.json                       # 0.4.7
├── schemas/
├── data/
├── src/
│   ├── astronomy/
│   ├── time/
│   ├── kernel/
│   ├── pipeline/
│   ├── conditions/
│   ├── interpretation/
│   ├── integrity/
│   ├── reading/
│   └── research/
│       ├── research-lab-engine.mjs   # preserved v0.4.6 contract
│       ├── research-lab-v047.mjs
│       ├── null-model-laboratory.mjs
│       ├── hypergraph-engine.mjs
│       └── hypergraph-null-evaluator.mjs
├── prototype/
│   ├── index.html                    # deterministic chart authority
│   ├── app.html                      # preserved v0.4.5 shell
│   ├── v046.html                     # historical v0.4.6 shell
│   ├── v047.html                     # CURRENT public shell
│   └── v047-research-worker.mjs      # product worker over existing labs
├── tests/
│   ├── v047_ui_contract_smoke.mjs
│   └── v047_live_pages_smoke.mjs
├── docs/
└── .github/workflows/
    ├── kernel-tests.yml
    └── v047-live-pages.yml
```

Historical shells remain available for regression/history. They do not own the root route.

## 4. Current browser architecture

The current shell contains exactly one iframe:

```text
prototype/v047.html
        ↓
prototype/index.html
```

The core owns chart calculation and serialization. `v047.html` consumes that state and derives coordinated projections using existing modules. It must not reimplement astronomy, houses, lots, aspect admission, dispositorship, condition rules, null generators, or hypergraph detection.

Current views:

```text
Chart · Reading · Resonance · Network · House Flow · Condition · Proof
```

Current aperture:

```text
Personal | Research
```

## 5. Bootstrap invariant

The outer product state machine is:

```text
Loading → Ready | Empty | Error
```

`Ready` requires:

1. serialized deterministic chart JSON;
2. successful downstream binding;
3. rendered Natal Field in the core.

Do not expose a populated outer state beside an unexplained blank graph.

Any core reload/chart change must:

- terminate an active Research worker;
- clear `nullResult`;
- clear `hyperNullResult`;
- rebuild research objects from the new deterministic state.

## 6. Personal / Research boundary

### Personal

Personal is default. It must not expose live Monte Carlo controls, p/FDR tables, simulation ledger, or hypergraph research-status machinery as the primary reading path.

### Research

Research may expose:

- hypothesis/model identities;
- Discovery candidates;
- v0.4.6 null controls/results;
- v0.4.7 hyperedges/null profiles;
- provenance and research-status vectors.

Research may not silently mutate Operational chart facts or Personal Reading.

## 7. Null execution contract

Null runs are explicit-only.

UI execution goes through:

```text
prototype/v047-research-worker.mjs
```

which calls the existing research modules:

```text
runNullModelLaboratory(...)
runHypergraphNullLaboratory(...)
```

Do not duplicate statistical logic in the UI.

Required visible semantics include:

- named null identity;
- metric identity;
- raw p;
- adjusted p;
- empirical percentile;
- departure/no-departure;
- simulation quality;
- `not-admissible` when appropriate;
- population `unknown`;
- interpretation `withheld`.

Never create a cross-null pass count.

## 8. Hypergraph UI contract

Research hyperedge cards expose:

```text
hyperedge_id
hyperedge_class
label/template
participants
cardinality
geometric/topological metrics
derivation hash
[D,V,B,P,I]
null profile
```

Current classes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

The UI is a projection of `hypergraph-engine.mjs`; it does not invent configurations.

## 9. Running tests

```bash
npm install
npm test
```

The deterministic integrity suite includes the v0.4.7 public-shell contract and all preserved historical/kernel/research regressions.

### Live Pages gate

The deployed public application is separately tested with Chromium:

```text
tests/v047_live_pages_smoke.mjs
.github/workflows/v047-live-pages.yml
```

The live test opens the real GitHub Pages root and verifies routing, Ready bootstrap, Natal Field rendering, seven views, Personal concealment, Research hyperedges, a 199-iteration null execution, Proof boundaries, and reload invalidation.

A future release is not public until its equivalent live gate passes.

## 10. Adding an astrological rule

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
→ provenance output
→ projection/UI
→ interpretation afterward
```

Do not silently blend Hellenistic, medieval, modern, or Jyotish definitions.

## 11. Adding a graph/hypergraph metric

Declare:

- name/version;
- graph/hypergraph scope;
- mathematical definition;
- invariances/sensitivities;
- counterfactual requirement;
- interpretation status.

Do not label a value high/rare/dominant without an explicit appropriate baseline. Artificial null departure is not population rarity.

## 12. Adding interpretation

Interpretation must declare its model/profile, evidence consumed, applicability, posture/tradition, and limitations. It may enrich prose without changing coordinates, houses, aspects, topology, condition, null results, or provenance.

## 13. UI development rules

When changing the public surface:

- preserve one deterministic chart authority;
- do not duplicate calculations in wrappers;
- preserve exactly documented view/aperture semantics unless intentionally versioned;
- keep Loading/Ready/Empty/Error explicit;
- preserve Personal/Research contamination boundaries;
- make stale research invalidation deterministic;
- add/update static UI contracts;
- add/update live Pages regression when behavior changes;
- update `CURRENT_RELEASE.md`, README, INDEX, PRODUCT, ROADMAP, and relevant milestone docs in the same release movement.

## 14. Release law

A feature may be:

```text
implemented
CI-green
merged
```

and still not be publicly released.

Public release requires:

```text
repository
+ CI
+ Pages deployment
+ live browser behavior
```

The v0.4.7 productization incident established this as a permanent engineering rule.

## 15. Definition of done

A feature/release is not complete until:

- [ ] owner layer identified;
- [ ] formal definition/source identity exists where applicable;
- [ ] deterministic implementation exists;
- [ ] edge cases tested;
- [ ] provenance/applicability represented;
- [ ] unsupported/ambiguous states explicit;
- [ ] UI consumes computed output rather than reimplementing it;
- [ ] Personal/Research boundaries preserved;
- [ ] static UI contract green;
- [ ] living documentation updated;
- [ ] public root/version contract updated if applicable;
- [ ] Pages deploys accepted SHA;
- [ ] live browser gate passes for public behavior.

## 16. Reading order

```text
README
→ CURRENT_RELEASE
→ V047_PUBLIC_PRODUCTIZATION_GATE
→ V047_FORMAL_CONFIGURATIONS_HYPERGRAPHS
→ V046_NULL_MODEL_LABORATORY
→ RESEARCH_CONSTITUTION
→ CURRENT_STATE_AND_SCIENTIFIC_RATIONALE
→ ARCHITECTURE
→ PRODUCT
→ ROADMAP
→ tests/
```
