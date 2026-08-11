# Noetic Atlas — Software Engineer Developer Guide

## 1. Read this first

Noetic Atlas is not a horoscope text generator. It is an auditable computational and visual-analytics framework for astrological structure, topology, condition, time, and research.

A software engineer should be able to work on the repository without accepting any metaphysical claim about astrology.

Engineering contract:

```text
input
→ civil-time resolution
→ astronomy
→ astrological rules
→ canonical model
→ mathematical derivation
→ research descriptors
→ visualization
→ interpretation / AI
```

Each arrow is a boundary.

> **No downstream layer may invent or silently alter an upstream fact.**

---

## 2. Current target

Default/deployed branch: **`main`**.

Current public browser: **v0.3.2 — Visual Observatory**.

Current minimum deterministic envelope: **`naf.analysis.v0.3.1`**.

Next major implementation milestone: **v0.4 Condition Engine**.

The current system already supports deterministic structure, graph topology, sect/lots, provenance, a graph-first browser interface, and exploratory research descriptors. It does not yet contain a complete traditional condition engine or Life Spectrum.

Start with:

1. `CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`
2. `THEORY_AND_PURPOSE.md`
3. this guide
4. `ARCHITECTURE.md`
5. `CONDITION_ENGINE_SPEC.md`

---

## 3. Repository map

```text
astroframework/
├── README.md
├── index.html                  # GitHub Pages entry redirect
├── package.json
├── schemas/
│   └── naf-analysis-v0.3.1.schema.json
├── src/
│   ├── astronomy/
│   ├── time/
│   ├── kernel/
│   ├── pipeline/
│   └── research/
├── prototype/
│   ├── index.html              # v0.3.2 Visual Observatory
│   └── historical prototypes
├── data/canonical/
├── tests/
├── docs/
└── .github/workflows/
```

Current important modules:

```text
src/time/timezone-core.mjs
src/time/timezone-adapter.mjs
src/astronomy/astronomy-engine-core.mjs
src/astronomy/astronomy-engine-adapter.mjs
src/kernel/noetic-kernel.mjs
src/kernel/hellenistic-integrity.mjs
src/pipeline/birth-chart.mjs
src/research/pattern-engine.mjs
```

---

## 4. Runtime data flow

### Birth-data path

```text
local civil date/time + coordinates
→ time-zone lookup/history
→ unambiguous UTC instant
→ astronomy adapter
→ planets + velocities + ASC + MC + solar altitude
→ astrological kernel
→ Whole Sign houses + aspects + rulers
→ Hellenistic integrity layer
→ sect + lots + provenance
→ graph topology
→ exploratory descriptors
→ Visual Observatory / export
```

### Imported-chart path

```text
pasted placements or canonical JSON
→ parser
→ normalized longitudes
→ supported houses/aspects/rulers recomputed
→ sect/lots where required inputs exist
→ topology/research
→ Visual Observatory / export
```

Imported aspect lists or house numbers are reference data, not upstream truth when the kernel can recompute them.

---

## 5. Module ownership

### `src/time/`

Owns civil-time resolution only:

- local wall time;
- IANA zone;
- historical UTC offset;
- DST ambiguity;
- nonexistent times;
- expert override.

It must not calculate planets or astrological rules.

### `src/astronomy/`

Owns astronomical/observer geometry:

- Sun through Pluto in the current adapter;
- longitude;
- velocity/retrograde state;
- ASC;
- MC;
- geometric solar altitude;
- provider/convention provenance.

It must not decide dignity, rulership meaning, house topics, or interpretation.

### `src/kernel/noetic-kernel.mjs`

Owns reusable astrological geometry/topology:

- normalization;
- parsing;
- Whole Sign houses;
- major aspects;
- orb policy;
- phase from velocity;
- traditional domicile rulers;
- dispositor graph;
- Tarjan SCCs;
- terminal SCCs;
- house-ruler routes;
- element/modality composition.

### `src/kernel/hellenistic-integrity.mjs`

Currently owns source-controlled Hellenistic integrity logic:

- sect;
- seven Paulus/Panaretus Hermetic lots;
- formula proof objects;
- version manifest;
- completeness state;
- Derivation Ledger/tree.

v0.4 condition work should be modularized into explicit rule families rather than making this file a permanent monolith.

### `src/research/`

Owns experimental descriptors.

Current descriptors include:

- circular harmonic spectrum;
- ruler-route convergence;
- multilayer participation.

They are read-only consumers of canonical state and currently remain promotion-gated.

### `prototype/index.html`

Owns presentation and interaction only.

It currently renders:

- Natal Field;
- Aspect Matrix;
- Flow Map;
- Sect & Lots;
- Research Lab;
- Audit.

The UI must never contain a second aspect calculator, lot formula, rulership table, or topology algorithm.

---

## 6. Running the project

Install:

```bash
npm install
```

Run deterministic tests:

```bash
npm test
```

Serve locally when needed:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/prototype/
```

Ordinary visual testing can use the GitHub Pages deployment from `main`.

---

## 7. Core invariants

### Longitude

Internal longitude is decimal degrees in `[0, 360)`.

Human-readable sign-degree strings are display values.

### Time

Astronomy receives an unambiguous UTC instant.

### Houses

Whole Sign house assignment is computed from sign displacement relative to the Ascendant sign.

### Aspects

An aspect edge should preserve:

- endpoints;
- aspect family/angle;
- measured separation;
- orb;
- orb-policy ID;
- phase when computable;
- provenance.

### Lots

A lot result should preserve:

- sect;
- formula family;
- source/target points;
- directed zodiacal arc;
- ASC;
- raw/normalized result;
- house;
- ruler;
- source/rule provenance.

### Topology

A graph result is incomplete unless the graph definition/rule model is identified.

“Mercury–Venus is a terminal SCC” must mean terminal SCC **of a specified dispositor graph**.

### Completeness

Use explicit states such as:

```text
valid
ambiguous
unsupported
invalid
not_implemented
```

Never encode unsupported as zero/false.

---

## 8. Derivation/provenance requirement

Every important derived result should be reconstructable.

Typical ledger information:

```json
{
  "kind": "astrological_rule",
  "id": "...",
  "algorithm_or_rule": "...",
  "inputs": {},
  "intermediate": {},
  "result": {},
  "provenance": {},
  "ambiguity": null
}
```

Store intermediate values when they are required to independently reproduce the output.

The future ideal is click-any-result → dependency path → original input.

---

## 9. Adding an astrological rule

Before code, specify:

1. tradition;
2. source;
3. competing variants;
4. required astronomical inputs;
5. mathematical/logical transformation;
6. boundary cases;
7. provenance fields;
8. test fixtures.

Implementation order:

```text
source definition
→ formal rule
→ pure deterministic function
→ boundary tests
→ independent/reference verification
→ provenance output
→ UI exposure
→ interpretation afterward
```

Do not silently blend variants.

---

## 10. Adding a research descriptor

A research descriptor is not an astrological rule.

Define:

```text
name/version
mathematical definition
required substrate
output range
normalization
invariances/sensitivities
null model
promotion status
```

Add:

- unit tests;
- synthetic sanity checks;
- canonical regression output only for stability;
- proposed null/randomization strategy.

Never infer psychological significance merely because a graph metric sounds important.

---

## 11. v0.4 Condition Engine development contract

Condition should remain multidimensional.

Initial families:

```text
domicile/exaltation/adversity
sect
triplicity
bounds
angularity
reception
overcoming
bonification/maltreatment
mitigation
```

Each condition result requires:

- rule ID;
- tradition/variant;
- source reference;
- inputs;
- result;
- dependencies;
- ambiguity/unsupported state.

No single opaque “planet strength” number is allowed to replace these conditions.

See `CONDITION_ENGINE_SPEC.md`.

---

## 12. Testing philosophy

Tests verify calculations and contracts, not desired interpretations.

### Unit/boundary tests

Examples:

- longitude wraparound;
- sign boundaries;
- exact aspect and orb cutoff ± epsilon;
- applying/separating/stationary neighborhoods;
- near-horizon sect;
- directed lot wraparound;
- known SCC graphs;
- DST repeated/gap times.

### Canonical regression

`NAF-CANON-0001` preserves known expected software structures.

It is not evidence for astrological validity.

### Synthetic fixtures

Prefer synthetic values for exact boundaries.

### Cross-provider validation

Required before stronger production astronomy claims.

See `ASTRONOMY_VALIDATION_PLAN.md`.

---

## 13. Visual-development rules

The v0.3.2 restoration makes the visualization a serious application surface again.

When changing it:

- consume canonical computed objects;
- preserve synchronized selection across views;
- keep node-link and matrix views complementary;
- preserve edge/node provenance access;
- do not hard-code motifs specific to the canonical specimen;
- distinguish graph-derived from research-exploratory overlays;
- preserve the traditional wheel as a possible reference/control rather than claiming it is obsolete;
- add browser/UI tests as the interface stabilizes.

---

## 14. AI integration rules

AI is downstream.

It may:

- navigate;
- explain;
- compare;
- trace provenance;
- synthesize source-backed interpretations;
- generate research hypotheses.

It may not:

- invent astronomical values;
- silently select rule variants;
- alter computed houses/aspects;
- hide provenance conflicts;
- promote exploratory descriptors into established meaning.

---

## 15. Privacy

Birth data and life-event annotations are sensitive product data.

Production requirements include:

- data minimization;
- explicit retention/deletion;
- encryption;
- separation of identity and research data;
- explicit consent for research use;
- no private chart/event-text training without permission;
- avoid raw birth data in analytics logs.

---

## 16. Definition of done

A computed feature is not complete until:

- [ ] formal definition exists;
- [ ] source/variant is identified;
- [ ] deterministic implementation exists;
- [ ] edge cases are tested;
- [ ] provenance is emitted;
- [ ] ambiguity/unsupported states are represented;
- [ ] regression behavior is recorded;
- [ ] UI consumes the computed output;
- [ ] documentation is updated;
- [ ] interpretation remains downstream and labeled.

---

## 17. Developer reading order

```text
README
→ CURRENT_STATE_AND_SCIENTIFIC_RATIONALE
→ THEORY_AND_PURPOSE
→ DEVELOPER_GUIDE
→ ARCHITECTURE
→ ASTROLOGICAL_MODEL
→ INTEGRITY_AND_PROVENANCE
→ V03_CLOSEOUT_AND_V04_ENTRY
→ CONDITION_ENGINE_SPEC
→ ROADMAP
→ tests/
```

When implementation and documentation disagree, treat the disagreement as a defect.
