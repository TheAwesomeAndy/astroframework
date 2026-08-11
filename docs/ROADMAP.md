# Noetic Atlas — Development Roadmap

## Guiding sequence

The roadmap follows one principle:

> **Do not visualize, weight, or interpret a layer that the framework cannot derive and audit.**

The current sequence is:

```text
Structure
→ Condition
→ Time
→ Recurrence
→ Discovery
```

This replaces a simpler “natal chart → transits” sequence. Time should activate a richly characterized natal state, not an incomplete geometry-only model.

---

# v0.1 — Visual hypothesis

**Status: complete historical milestone**

Purpose: demonstrate that astrology can be represented as more than a horoscope wheel.

Delivered:

- canonical specimen;
- first Natal Field network;
- first Flow Map concept;
- Life Spectrum placeholder;
- Life Space placeholder;
- explicit distinction between mathematical representation and physical claims;
- product/framework identity.

Lesson: the wheel contains structure that can become easier to inspect when aspect geometry and directed rulership are separated.

---

# v0.2 — Natal Field instrument

**Status: complete historical milestone**

Delivered:

- interactive Natal Field;
- node inspector;
- aspect matrix;
- all-house ruler routing;
- elemental/modal composition;
- model/method view;
- “resolution over prophecy” principle.

Lesson: visualization should expose calculable structure before generating interpretation.

---

# v0.3.0–v0.3.1 — Deterministic kernel + integrity foundation

**Status: complete foundation milestone**

Purpose: move from a specimen-driven prototype to a general deterministic instrument.

Delivered:

- runtime chart parsing;
- birth-data input;
- IANA time-zone resolution;
- DST ambiguity/nonexistent-time handling;
- Astronomy Engine adapter;
- ASC/MC calculation;
- planetary velocities;
- Whole Sign houses;
- major aspects;
- explicit orb policy;
- applying/separating where velocity exists;
- traditional domicile rulers;
- generic dispositor graph;
- Tarjan SCC and terminal-SCC derivation;
- sect;
- seven Paulus/Panaretus Hermetic lots;
- lot proof objects;
- derivation ledger and derivation tree;
- experimental pattern engine;
- version manifest and minimum analysis schema;
- canonical and synthetic/boundary tests;
- GitHub Actions integrity workflow;
- astronomy cross-provider validation plan;
- formal v0.4 Condition Engine specification.

Persistent limitations:

- traditional condition remains incomplete;
- extended astronomical objects remain incomplete;
- independent cross-provider validation remains unfinished;
- research descriptors remain exploratory and promotion-gated.

---

# v0.3.2 — Visual Observatory restoration

**Status: current public prototype**

Purpose: restore the visual intelligence of v0.2 without giving up the deterministic v0.3 kernel.

Delivered:

- interactive SVG Natal Field driven by computed analysis;
- weighted aspect edges;
- node selection and neighborhood isolation;
- edge inspection with separation, orb, phase, and derivation context;
- dynamic graph motifs rather than specimen-only hard-coded patterns;
- computed Aspect Matrix linked to the same relationships;
- directed Flow Map;
- terminal-SCC highlighting;
- clickable house-ruler routes;
- element/modality composition;
- Hermetic lots as graph-native objects;
- graph-linked audit/provenance inspection;
- public GitHub Pages deployment from `main`.

Current judgment:

v0.3.2 is a **serious structural and educational instrument**, but not yet a condition-aware or temporal astrological system. Its strongest current value is formal inspection, teaching, verification, and research instrumentation.

See [Current State and Scientific Rationale](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md).

---

# v0.4 — Astrological Condition Engine

**Next major milestone**

Purpose: represent not only where planets are connected, but their traditional condition under explicit source-controlled rules.

Initial planned rule families:

- domicile/exaltation;
- adversity/depression where applicable;
- sect-aware triplicity;
- Egyptian bounds/terms;
- angularity;
- reception/exchange;
- overcoming / superior-inferior geometry;
- selected enclosure/engagement rules;
- bonification/maltreatment;
- mitigating conditions.

Engineering requirements:

- separate source-controlled rule IDs;
- no hidden tradition blending;
- no single opaque “planet strength” score;
- ledger entry for every condition;
- explicit null/unsupported states;
- canonical and synthetic boundary tests;
- expert-verifiable condition table and graph-linked condition inspector.

Research requirements:

- compare topology-only versus condition-only versus topology+condition models;
- do not reinterpret graph centrality as traditional strength;
- record variant sensitivity;
- keep exploratory descriptors on promotion hold until the substrate is stable.

Exit criterion:

An expert can select any classical planet and independently reconstruct its major modeled Hellenistic condition factors, rule IDs, and source references from serialized output and UI.

---

# v0.5 — Life Spectrum v1

Purpose: introduce time after the natal field is structurally and conditionally characterized.

Planned components:

- transit ephemeris over arbitrary windows;
- exact transit hits;
- stations;
- applying/separating temporal evolution;
- stable natal-target lanes;
- house activation lanes;
- explicit activation functions;
- zoom from decades to days;
- life-event annotations;
- provenance for every band/marker;
- uncertainty/sensitivity where birth time matters.

Design rule:

A transit should activate a **characterized natal state**, not merely a longitude.

Conceptually:

```text
N_i = geometry + topology + condition
T(t) = temporal input
X_i(t) = F(N_i, T(t), rule-set versions)
```

Exit criterion:

A user can inspect long temporal structure without a transit bi-wheel and reconstruct every displayed activation.

---

# v0.6 — Traditional timing systems

Purpose: layer discrete/hierarchical timing regimes onto continuous transits.

### Annual profections

- age/year;
- profected Whole Sign house;
- lord of the year;
- natal condition of lord;
- ruler-route context;
- transit interactions.

### Zodiacal releasing

- selectable lot;
- period lengths;
- nested levels;
- angular periods;
- loosing of the bond;
- provenance for every boundary.

Additional timing methods require independent source/algorithm definitions before implementation.

Exit criterion:

Life Spectrum can display continuous astronomical activation and discrete time-lord regimes without collapsing them into one opaque score.

---

# v0.7 — Controlled HCI and structural research

Purpose: test whether Noetic Atlas is actually a better information instrument for defined tasks.

Primary control condition:

- conventional horoscope wheel.

Candidate tasks:

- trace a dispositor chain;
- identify terminal routing;
- locate exact pairwise relationships;
- recognize aspect motifs;
- distinguish computation from interpretation.

Candidate outcomes:

- task time;
- error rate;
- recall;
- cognitive workload;
- novice learning rate;
- expert inter-rater agreement.

The question is not “does the UI look sophisticated?”

It is:

> **Does this representation improve measurable structural comprehension for specific tasks?**

---

# v0.8 — Conversational Observatory

Purpose: use AI as an interface to deterministic structure rather than as a hidden calculator.

Planned actions:

```text
trace_house_ruler(house)
show_derivation(object_or_edge)
show_condition(planet)
compare_periods(t1, t2)
highlight_structure(pattern)
show_lot_formula(lot)
show_model_difference(model_a, model_b)
```

AI responsibilities:

- navigation;
- explanation;
- comparison;
- source synthesis;
- research-hypothesis generation.

AI prohibitions:

- inventing astronomy;
- silently changing rule variants;
- hiding uncertainty;
- presenting exploratory metrics as established meanings.

---

# v0.9 — Comparative tradition framework

Purpose: treat traditions as switchable models over a common astronomical substrate.

Potential model families:

- Hellenistic;
- medieval/traditional;
- modern/transpersonal;
- Jyotish as an independently defined sidereal/graha/nakshatra/dasha system rather than a patch to the tropical model.

Exit criterion:

The same birth event can be processed under multiple transparent rule systems without hidden mixing, and agreement/disagreement can be inspected directly.

---

# v1.0 — Product foundation

Consumer/professional requirements should include:

- reliable chart calculation;
- Natal Field;
- Flow Map;
- condition inspector;
- Life Spectrum;
- explain-why/provenance interaction;
- chart/account management;
- privacy/deletion controls;
- saved explorations;
- export/report capabilities.

Commercial principle:

> **Sell resolution and better instrumentation, not artificial certainty.**

---

# v1.x — Research Observatory and recurrence/state space

Prerequisites:

- stable structural semantics;
- stable condition semantics;
- stable temporal semantics.

Planned:

- descriptor registry;
- null/randomized chart generators;
- cross-chart batch analysis;
- topology motif census;
- condition-aware graph metrics;
- birth-time sensitivity analysis;
- reproducible research export;
- explicit block-structured temporal state vectors;
- recurrence plots;
- state similarity search;
- PCA baseline and later exploratory embeddings where justified.

Every embedding must preserve feature definitions, preprocessing, random seeds, distance metrics, and model versions.

---

# v2+ — Relationships, populations, and research scale

Potential directions:

- synastry as interacting graph systems;
- family-system topology;
- chart-neighborhood search;
- historical-figure comparison;
- longitudinal event studies;
- preregistered hypothesis tests;
- public research datasets where consent/licensing permit;
- Observatory/Archive surfaces.

---

# Cross-cutting workstreams

## Integrity

- derivation coverage;
- cross-provider astronomy validation;
- source-variant tracking;
- ambiguity handling;
- reproducibility metadata.

## Testing

- unit tests;
- boundary/synthetic fixtures;
- canonical regression;
- provider cross-checks;
- browser/UI integration tests;
- research reproducibility tests.

## Documentation

Every new computed technique requires:

- domain definition;
- source/variant;
- algorithm;
- edge cases;
- provenance;
- tests;
- epistemic status.

## Research methodology

- null models;
- replication;
- preregistration where feasible;
- multiple-comparison awareness;
- effect-size/uncertainty reporting;
- negative-result retention;
- explicit theory-promotion status.

## Privacy

- data minimization;
- deletion;
- encryption;
- research consent;
- identity/research separation.

---

# Decision rule for sequencing

Prefer work that increases at least one of:

1. **derivability** — the framework can calculate more of the model itself;
2. **auditability** — an expert can independently reconstruct more results;
3. **structural visibility** — a difficult relation becomes inspectable;
4. **research testability** — a claim can be compared with a null/control;
5. **user comprehension** — a defined task becomes easier without adding false certainty.

Features that mainly add aesthetic novelty without improving these dimensions should be deprioritized.
