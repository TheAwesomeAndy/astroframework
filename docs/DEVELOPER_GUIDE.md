# Noetic Atlas — Software Engineer Developer Guide

## 1. Read this first

Noetic Atlas is not a horoscope text generator. It is an auditable computational framework for representing astrological structure, deriving rule-based relationships, visualizing hidden topology, and eventually studying temporal dynamics.

The repository is intentionally organized so that a software engineer can work on the system without accepting any metaphysical claim about astrology.

The engineering contract is:

```text
input
→ civil-time resolution
→ astronomy
→ astrological rules
→ structured model
→ mathematical derivation
→ research descriptors
→ visualization
→ interpretation / AI
```

Each arrow is a boundary. Crossing a boundary must be explicit.

If you remember only one rule, remember this:

> **No downstream layer is allowed to invent or silently alter an upstream fact.**

---

## 2. Current development target

The current development line is the `noetic-atlas-v0.3` branch.

This branch establishes the first end-to-end deterministic foundation:

- simple birth-data input;
- time-zone resolution;
- astronomical calculations;
- whole-sign houses;
- sect;
- Hellenistic lots;
- major aspects;
- traditional domicile dispositors;
- graph topology;
- experimental research descriptors;
- derivation/provenance records;
- browser prototype;
- automated tests.

It is still a research prototype. Do not treat the current API or schema as frozen.

---

## 3. Repository map

```text
astroframework/
├── README.md
├── package.json
│
├── src/
│   ├── astronomy/
│   │   ├── astronomy-engine-core.mjs
│   │   └── astronomy-engine-adapter.mjs
│   │
│   ├── time/
│   │   ├── timezone-core.mjs
│   │   └── timezone-adapter.mjs
│   │
│   ├── kernel/
│   │   ├── noetic-kernel.mjs
│   │   └── hellenistic-integrity.mjs
│   │
│   ├── pipeline/
│   │   └── birth-chart.mjs
│   │
│   └── research/
│       └── pattern-engine.mjs
│
├── prototype/
│   ├── index.html
│   ├── noetic_atlas_v01.html
│   ├── noetic_atlas_v02.html
│   └── noetic_atlas_v03.html
│
├── data/
│   └── canonical/
│       ├── NAF-CANON-0001-input.txt
│       ├── NAF-CANON-0001-supplied.json
│       └── NAF-CANON-0001-lot-verification.json
│
├── tests/
│   ├── kernel_smoke.mjs
│   ├── integrity_smoke.mjs
│   ├── astronomy_contract_smoke.mjs
│   └── timezone_smoke.mjs
│
├── docs/
│   ├── THEORY_AND_PURPOSE.md
│   ├── DEVELOPER_GUIDE.md
│   ├── ASTROLOGICAL_MODEL.md
│   ├── RESEARCH_PROGRAM.md
│   ├── ARCHITECTURE.md
│   ├── INTEGRITY_AND_PROVENANCE.md
│   ├── ASTRONOMY_ADAPTERS.md
│   ├── RESEARCH_DISCOVERY.md
│   ├── PRODUCT.md
│   └── ROADMAP.md
│
└── .github/workflows/
    └── kernel-tests.yml
```

---

## 4. Runtime data flow

There are two supported entry paths.

### Path A — birth data

```text
local date/time + latitude + longitude
        ↓
time-zone lookup
        ↓
historical civil-time resolution
        ↓
UTC instant
        ↓
astronomy adapter
        ↓
planets + ASC + MC + velocities + solar altitude
        ↓
astrological integrity layer
        ↓
whole-sign houses + sect + lots + aspects + rulers
        ↓
graph topology
        ↓
research descriptors
        ↓
UI / exported analysis JSON
```

### Path B — already-calculated chart

```text
pasted chart text or canonical JSON
        ↓
parser
        ↓
normalized longitudes
        ↓
whole-sign houses recomputed
        ↓
aspects recomputed
        ↓
sect fallback if possible
        ↓
lots if required inputs exist
        ↓
graph topology
        ↓
research descriptors
        ↓
UI / exported analysis JSON
```

Imported aspect lists are not trusted as the source of truth. They may be retained as reference metadata, but the kernel derives aspects from longitude.

---

## 5. Module responsibilities

### `src/time/`

Responsible only for civil-time resolution.

Key concerns:

- local wall time;
- IANA time zone;
- historical UTC offset;
- DST ambiguity;
- nonexistent local times;
- expert time-zone override.

This layer must not calculate planets or astrological houses.

### `src/astronomy/`

Responsible only for astronomical quantities and observer geometry.

Current outputs include:

- geocentric longitudes for Sun through Pluto;
- approximate longitudinal velocities;
- ASC;
- MC;
- geometric solar altitude;
- provenance describing provider/version/calculation path.

This layer must not decide whether a planet is dignified, benefic, malefic, or ruler of a house.

### `src/kernel/noetic-kernel.mjs`

Core general-purpose astrological geometry and topology.

Responsibilities include:

- zodiac normalization;
- sign parsing;
- whole-sign house assignment;
- major aspect detection;
- orb handling;
- applying/separating when velocity is available;
- traditional domicile rulers;
- dispositor graphs;
- Tarjan SCC detection;
- terminal SCC derivation;
- house routing;
- elemental/modal composition;
- chart parsing.

This module should remain as tradition-neutral as practical. Tradition-specific logic belongs in dedicated rule modules.

### `src/kernel/hellenistic-integrity.mjs`

Hellenistic-specific deterministic rules that require explicit source/variant control.

Current responsibilities:

- sect classification;
- seven Hermetic lots in the selected Paulus/Panaretus family;
- step-by-step formula proofs;
- derivation-ledger entries.

Future responsibilities may include:

- essential dignity;
- triplicity rulers;
- bounds/terms;
- reception;
- overcoming;
- bonification/maltreatment;
- annual profections;
- zodiacal releasing.

Do not silently add modern rulership to this module.

### `src/pipeline/`

Orchestration only.

The pipeline should connect layers without reimplementing them.

A pipeline function may:

1. resolve birth time;
2. call astronomy;
3. call the kernel;
4. call the Hellenistic integrity layer;
5. attach research descriptors;
6. return the canonical analysis object.

A pipeline function should not contain a second copy of aspect calculation or lot formulas.

### `src/research/`

Experimental descriptors live here.

Outputs from this directory are **not traditional astrological doctrine by default**.

Current examples:

- harmonic spectrum;
- ruler-route convergence;
- multilayer participation.

Every descriptor must define:

- mathematical formula;
- input layer;
- normalization;
- expected range;
- provenance ID;
- whether it has been validated;
- what null/randomized comparison is appropriate.

---

## 6. Running the project

### Requirements

- Node.js compatible with the repository workflow;
- npm;
- modern browser for prototype UI.

### Install

```bash
npm install
```

Use pinned dependency versions. Avoid unversioned CDN imports in production code.

### Run tests

```bash
npm test
```

The exact scripts in `package.json` are the source of truth.

GitHub Actions also runs the integrity suite on repository pushes covered by the workflow.

### Run the prototype locally

Because the v0.3 prototype imports ES modules, use a local server instead of opening the file directly from `file://`.

For example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/prototype/
```

---

## 7. Core data invariants

The following should be treated as engineering invariants.

### Longitude

Internal longitude is decimal degrees in:

```text
[0, 360)
```

Human-readable sign/degree strings are display representations, not calculation primitives.

### Time

Astronomy receives an unambiguous UTC instant.

A plain local timestamp is not an astronomical input until the civil-time layer resolves it.

### Houses

Whole-sign house assignment is computed from sign displacement relative to the Ascendant sign.

Imported house numbers are reference values only and may be compared against computed values.

### Aspects

An aspect edge must preserve:

- source and target;
- exact aspect angle;
- measured separation;
- orb;
- orb policy ID;
- phase if computable;
- provenance.

### Lots

A lot result must preserve:

- sect;
- formula family/variant;
- source point;
- target point;
- directed zodiacal distance;
- Ascendant longitude;
- unnormalized result;
- normalized result;
- whole-sign house;
- domicile ruler;
- source reference.

### Graph metrics

A topology result must identify the graph definition that produced it.

“Mercury–Venus is a terminal SCC” is incomplete unless the graph is identified as the traditional domicile dispositor graph under a specified rule set.

---

## 8. Derivation Ledger requirements

Every important derived value should be reconstructable.

A ledger entry should contain, where relevant:

```json
{
  "epistemic_layer": "astrological_rule",
  "id": "lot.spirit",
  "algorithm": "naf.hellenistic.lots.paulus.v1",
  "rule_set": "hellenistic.paulus-panaretus",
  "inputs": {},
  "intermediate": {},
  "output": {},
  "source_reference": {},
  "uncertainty": null
}
```

Do not store only the final number when intermediate values are necessary to reconstruct it.

---

## 9. How to add a new astrological rule

Before writing code, answer these questions in documentation or an ADR/issue:

1. Which tradition uses this rule?
2. What historical/technical source defines it?
3. Are there competing variants?
4. What astronomical inputs are required?
5. What exact mathematical transformation is performed?
6. What edge cases exist?
7. What provenance must be retained?
8. What canonical test can verify the implementation?

Implementation sequence:

```text
source definition
→ formal mathematical definition
→ pure function
→ unit tests
→ canonical fixture test
→ derivation-ledger output
→ UI exposure
→ interpretation only afterward
```

If the source tradition is disputed, preserve the variants as separate rule IDs.

---

## 10. How to add a research descriptor

A research descriptor is not an astrological rule.

Before merging one, define:

```text
name
mathematical definition
required input graph/state
output range
normalization
expected null distribution
known invariances
known sensitivities
interpretive status = exploratory
```

Then add:

- unit tests;
- at least one synthetic sanity test;
- canonical output for regression only;
- a proposed null/randomization procedure.

Never document a high descriptor value as psychologically meaningful until separate research supports that interpretation.

---

## 11. How to add an astronomy provider

The provider must be isolated behind an adapter.

Required metadata:

- library/provider name;
- version;
- license;
- coordinate frame;
- apparent vs geometric conventions;
- geocentric/heliocentric/topocentric choice;
- ephemeris basis where known;
- expected precision;
- validation source;
- supported bodies/points;
- unsupported bodies/points.

A new provider should be cross-validated against existing providers using a date/location corpus before becoming the default.

Do not change providers without changing provenance/version identifiers.

---

## 12. Testing philosophy

Tests should verify calculations, not desired interpretations.

### Unit tests

Examples:

- `normalize360(-1) == 359`;
- 359° and 1° are 2° apart;
- whole-sign house rollover works;
- a square exactly at the configured orb boundary is included/excluded according to policy;
- directed lot distance wraps correctly at 360°;
- Tarjan SCC output is stable for known graphs;
- ambiguous DST time returns two valid possibilities.

### Canonical regression tests

`NAF-CANON-0001` is a regression fixture, not proof of astrology.

It is useful because it contains known structures including:

- Mercury ↔ Venus terminal dispositor SCC;
- Fortune near Uranus;
- a complete Sun–Moon–Jupiter air trine;
- night-sect Fortune and Spirit formulas.

### Synthetic tests

Prefer synthetic charts for edge cases whenever possible. A synthetic chart can place objects exactly on 0°, sign boundaries, aspect boundaries, or horizon conditions without relying on autobiographical interpretation.

### Cross-provider tests

Eventually required for:

- planetary longitude;
- ASC/MC;
- station/retrograde boundaries;
- lunar nodes;
- other derived astronomical points.

---

## 13. Error and ambiguity policy

The preferred order is:

```text
explicit result
> explicit ambiguity
> explicit unsupported state
> silent guess
```

The final option is prohibited.

Examples:

- DST repeated hour → return alternatives;
- unsupported Chiron provider → report unsupported;
- unknown applying/separating because velocity absent → return `unknown`;
- disputed historical formula → expose variant;
- near-horizon sect → flag ambiguity.

---

## 14. AI integration rules

AI belongs downstream of deterministic computation.

The model may receive:

- canonical analysis JSON;
- selected tradition;
- selected UI objects;
- user question;
- source snippets/provenance.

AI may:

- summarize;
- compare;
- trace a dependency;
- explain a derivation;
- synthesize historical interpretations;
- generate a research hypothesis.

AI may not:

- invent a missing planetary coordinate;
- silently select an astrological variant;
- alter a computed house;
- hide a provenance conflict;
- promote an exploratory descriptor into fact.

---

## 15. Privacy and research data

Birth date/time/location is sensitive personal information in product practice.

Production requirements include:

- collect the minimum necessary data;
- explicit retention policy;
- deletion controls;
- encryption in transit and at rest;
- separate identifying profile information from research feature data;
- no model training on private charts without explicit consent;
- separate consent for anonymized research contribution;
- avoid irreversible identifiers derived directly from birth data.

Life-event annotations require even stronger care because they may contain health, relationship, financial, religious, or family information.

---

## 16. Performance priorities

Correctness and provenance outrank premature optimization.

Likely future performance pressure points:

- dense transit scans over decades;
- many-chart cohort analysis;
- graph motif enumeration;
- state-vector generation;
- interactive rendering of large time series.

When optimizing:

1. preserve deterministic equivalence;
2. preserve provenance;
3. add benchmark tests;
4. document approximation if introduced.

---

## 17. Coding conventions

Prefer:

- pure functions for calculations;
- explicit data transformation stages;
- immutable inputs when practical;
- named/versioned rule policies;
- small adapters around third-party libraries;
- machine-readable provenance;
- tests next to mathematical behavior;
- comments explaining conventions and edge cases, not restating obvious syntax.

Avoid:

- hidden global rule settings;
- duplicated formulas across UI and kernel;
- magic orb numbers inside rendering code;
- interpretation strings inside astronomy modules;
- calculations inside React/UI event handlers when they belong in the kernel;
- silent fallback across traditions.

---

## 18. Definition of done for a new computed feature

A computed feature is not complete until all of the following are true:

- [ ] formal definition exists;
- [ ] source/variant is identified;
- [ ] pure deterministic implementation exists;
- [ ] edge cases are tested;
- [ ] provenance is emitted;
- [ ] unsupported/ambiguous states are represented;
- [ ] canonical regression behavior is recorded;
- [ ] UI reads the computed output rather than reimplementing it;
- [ ] documentation is updated;
- [ ] interpretation, if any, is downstream and labeled.

---

## 19. Developer reading order

A new engineer should read in this order:

1. `README.md` — project orientation.
2. `docs/THEORY_AND_PURPOSE.md` — why the architecture exists.
3. `docs/DEVELOPER_GUIDE.md` — how to work in the repository.
4. `docs/ARCHITECTURE.md` — system boundaries and data flow.
5. `docs/ASTROLOGICAL_MODEL.md` — domain rules currently implemented.
6. `docs/INTEGRITY_AND_PROVENANCE.md` — audit contract.
7. `docs/RESEARCH_PROGRAM.md` — how novel patterns are investigated.
8. `docs/ASTRONOMY_ADAPTERS.md` — astronomical provider details.
9. `docs/ROADMAP.md` — planned expansion.

A developer should be able to understand the technical project from these files without access to the original design conversation.
