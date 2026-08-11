# Noetic Atlas — Development Roadmap

## Guiding sequence

The roadmap follows one principle:

> **Do not visualize or interpret a layer that the framework cannot yet derive and audit.**

Development therefore proceeds from deterministic foundations toward richer astrological state, then time, then AI, then large-scale research.

---

# v0.1 — Visual hypothesis

**Status: complete historical milestone**

Purpose:

Demonstrate that astrology can be represented as more than a horoscope wheel.

Delivered:

- canonical specimen;
- first Natal Field network;
- first Flow Map concept;
- Life Spectrum placeholder;
- Life Space placeholder;
- explicit distinction between mathematical representation and physical claims;
- product/framework identity.

Lesson:

The wheel contains structure that becomes easier to perceive when aspect geometry and rulership topology are separated.

---

# v0.2 — Natal Field instrument

**Status: complete historical milestone**

Purpose:

Make the natal chart inspectable as structure before interpretation.

Delivered:

- interactive Natal Field;
- node inspector;
- aspect matrix;
- all-house ruler routing;
- elemental/modal composition;
- model/method view;
- clear “resolution over prophecy” principle.

Lesson:

The visualization should expose calculable topology before generating interpretive prose.

---

# v0.3 — Noetic Kernel + integrity foundation

**Status: current development line**

Purpose:

Turn the framework from a canonical-chart prototype into a general-purpose deterministic instrument.

Delivered or in active v0.3 scope:

- runtime chart parsing;
- public birth-data input;
- IANA time-zone resolution;
- DST ambiguity/nonexistent-time handling;
- astronomy adapter;
- ASC/MC calculation;
- planetary velocities;
- whole-sign houses;
- major aspects;
- explicit orb policies;
- applying/separating where velocity exists;
- traditional domicile rulers;
- generic dispositor graph;
- Tarjan SCC/terminal SCC derivation;
- sect;
- seven Paulus/Panaretus Hermetic lots;
- lot formula proof objects;
- derivation ledger;
- experimental pattern engine;
- canonical and synthetic regression tests;
- GitHub Actions integrity workflow;
- comprehensive engineering/research documentation.

Exit criteria:

- a new chart can be generated from birth data without an external astrology site;
- every supported displayed relationship can be traced to its calculation source;
- imported charts and birth-generated charts converge on the same canonical downstream analysis model;
- unsupported values are explicit rather than guessed;
- current integrity tests pass automatically.

---

# v0.4 — Astrological Condition Engine

**Next major milestone**

Purpose:

Represent not only where planets are connected, but the traditional quality and hierarchy of those conditions.

Planned rule families:

- domicile/exaltation;
- detriment/fall where selected rule set uses them;
- triplicity rulers;
- bounds/terms;
- angularity;
- sect membership/condition;
- reception;
- overcoming / superior-inferior geometry;
- enclosure;
- bonification/maltreatment;
- selected solar-phase conditions;
- configurable traditional variants.

Engineering requirements:

- source-controlled rule IDs;
- separate condition dimensions rather than one opaque strength number;
- ledger entry for every condition;
- canonical and synthetic tests;
- expert-verifiable condition table in UI.

Research additions:

- condition-aware graph edges;
- multilayer planet participation;
- compare graph topology with and without condition metadata;
- test whether expert-identified “dominant” planets correspond to measurable cross-layer structure.

Exit criterion:

An expert astrologer can inspect a planet and reconstruct its major Hellenistic condition factors independently from the UI.

---

# v0.5 — Life Spectrum v1

Purpose:

Introduce time only after the natal field is richly characterized and auditable.

Planned components:

- transit ephemeris over arbitrary windows;
- exact transit hits;
- station events;
- applying/separating temporal evolution;
- house activation lanes;
- natal-target activation functions;
- slow/fast planet scale handling;
- zoom from decades to days;
- event annotations;
- provenance for every rendered band/marker.

Important design rule:

The visual system should preserve spatial/semantic stability across time. Natal targets should not randomly rearrange because a force-directed layout recalculated at each timestamp.

Exit criterion:

A user can inspect 30+ years of transit structure without relying on a transit bi-wheel, and every activation is traceable.

---

# v0.6 — Hellenistic Timing Systems

Purpose:

Layer discrete/hierarchical timing regimes onto the continuous transit model.

Planned:

### Annual profections

- age/year calculation;
- profected whole-sign house;
- lord of the year;
- natal condition of lord;
- transit interactions with lord/house.

### Zodiacal releasing

- selectable releasing lot;
- period lengths;
- nested levels;
- angular periods;
- loosing of the bond;
- complete period-boundary provenance.

### Additional timing methods

Only after source/algorithm definition:

- selected progressions;
- directions;
- other traditional period methods.

Exit criterion:

Life Spectrum can display continuous astronomical activation and discrete time-lord regimes simultaneously without conflating them.

---

# v0.7 — Conversational Observatory

Purpose:

Use AI as an interface to deterministic structure rather than as a hidden astrologer/calculator.

Planned structured actions:

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
- traditional source synthesis;
- research-hypothesis generation.

AI prohibitions:

- inventing ephemeris values;
- silently changing rule variants;
- hiding uncertainty;
- presenting exploratory metrics as established meanings.

Exit criterion:

A user can ask “why?” and receive both a visual path and an auditable derivation.

---

# v0.8 — Comparative Tradition Framework

Purpose:

Treat traditions as switchable models over a common astronomical substrate.

Planned adapters:

### Hellenistic

- current tropical/whole-sign foundation;
- condition;
- lots;
- timing;
- source variants.

### Medieval/traditional

- separate dignity/reception/timing variations where justified.

### Modern/transpersonal

- outer-planet archetypal interpretation;
- optional modern rulership;
- explicit psychological framing.

### Jyotish

Requires independent model definition:

- sidereal zodiac;
- ayanamsha;
- graha model;
- nakshatras;
- drishti;
- dashas;
- divisional charts;
- separate dignity logic.

Exit criterion:

The same birth event can be processed under multiple transparent rule systems without hidden mixing.

---

# v0.9 — Research Observatory

Purpose:

Make experimental pattern discovery a first-class but epistemically isolated environment.

Planned:

- descriptor registry;
- harmonic analyses;
- route-convergence metrics;
- topology motif census;
- hypergraph motifs;
- null/randomized chart generators;
- cross-chart batch analysis;
- statistical comparison tools;
- birth-time sensitivity analysis;
- reproducible research export.

Exit criterion:

A new structural hypothesis can be formally defined, tested against nulls, replicated across charts, and documented without contaminating the interpretation layer.

---

# v1.0 — Consumer/Professional Product Foundation

Purpose:

Ship a durable product while preserving the research architecture.

Consumer features:

- account/chart management;
- birth-data entry;
- Natal Field;
- Flow Map;
- condition inspector;
- Life Spectrum;
- explain-why interaction;
- saved explorations;
- privacy/deletion controls.

Professional tier:

- client workspace;
- consultation mode;
- multiple charts;
- comparison views;
- exportable reports;
- configurable rule sets;
- visible provenance;
- education mode.

Commercial principle:

> Sell resolution and better instrumentation, not artificial certainty.

---

# v1.x — Life Space and Longitudinal State Research

Prerequisite:

The feature semantics entering the state vector must be stable.

Planned:

- explicit block-structured state vectors;
- normalization policies;
- PCA baseline;
- UMAP exploratory embeddings;
- recurrence plots;
- state similarity search;
- period clustering;
- sensitivity to feature-model choices.

Every embedding must preserve:

- feature definitions;
- preprocessing;
- random seeds;
- model/library versions;
- distance metric;
- dimensionality-reduction parameters.

Exit criterion:

A “similar period” claim can be reconstructed from the feature space that produced it.

---

# v2+ — Population, Relationships, and Research Scale

Potential directions:

- synastry as interacting graph systems;
- family-system topology;
- chart-neighborhood search;
- structural similarity across cohorts;
- historical-figure comparison;
- longitudinal event studies;
- HCI expert-vs-novice experiments;
- preregistered astrological hypothesis tests;
- public research datasets where consent/licensing permit;
- Observatory/Archive product surfaces.

---

# Cross-cutting workstreams

These run throughout all versions.

## Integrity

- derivation ledger coverage;
- cross-provider validation;
- source variant tracking;
- ambiguity handling;
- reproducibility metadata.

## Testing

- unit tests;
- synthetic boundaries;
- canonical regression fixtures;
- provider cross-checks;
- UI integration tests;
- research reproducibility tests.

## Documentation

Every new computed technique requires:

- domain definition;
- source/variant;
- algorithm;
- edge cases;
- provenance;
- tests;
- current epistemic status.

## Privacy

- data minimization;
- deletion;
- encryption;
- research consent;
- separation of identity and research features.

## Research methodology

- null models;
- replication;
- preregistration where feasible;
- multiple-comparison awareness;
- negative-result retention;
- explicit promotion status for new theory.

---

# Decision rule for sequencing

When deciding what to build next, prefer the feature that increases one of these:

1. **derivability** — can the framework calculate more of the chart itself?
2. **auditability** — can an expert verify more of the result?
3. **structural visibility** — can a previously hidden relationship be seen?
4. **research testability** — can a hypothesis be compared against a null or independent sample?
5. **user comprehension** — can the interface communicate more without adding false certainty?

Features that mainly add aesthetic novelty without improving these dimensions should be deprioritized.
