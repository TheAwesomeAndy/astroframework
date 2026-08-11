# Noetic Atlas

**An auditable visual-analytics framework for astrological structure, topology, condition, and time.**

> **See the structure. Follow the flow. Watch it change. Show the work.**

Noetic Atlas is an experimental computational framework for representing astrology as a multilayer symbolic system rather than forcing every relationship into a single horoscope wheel.

The project has two linked goals:

1. build a useful public/professional instrument for exploring astrological structure and timing;
2. build a research environment in which structural and temporal claims can be formulated, reproduced, compared with alternatives, and rejected when they fail.

The underlying research framework is the **Noetic Atlas Framework (NAF)**.

## Current state

**Public prototype:** v0.3.2 — Visual Observatory  
**Deterministic analysis schema:** `naf.analysis.v0.3.1`  
**Default branch:** `main`  
**Next major milestone:** v0.4 Condition Engine

The current public browser build is served through GitHub Pages from `main`:

`https://theawesomeandy.github.io/astroframework/`

v0.3.x establishes a deterministic structure-and-provenance foundation and restores the graph-first visual language on top of that kernel.

Implemented now:

- local birth date/time + latitude/longitude input;
- historical civil-time/time-zone resolution with DST ambiguity handling;
- astronomy adapter for Sun through Pluto;
- independently calculated ASC and MC;
- planetary longitudinal velocity / retrograde state;
- Whole Sign house calculation;
- major aspect calculation under an explicit orb policy;
- applying/separating when motion data exist;
- traditional domicile rulership;
- generic dispositor graph;
- Tarjan strongly connected components and terminal SCCs;
- all-house ruler routes;
- sect calculation;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- derivation/provenance ledger and derivation tree;
- experimental pattern engine;
- interactive SVG Natal Field;
- computed Aspect Matrix;
- directed Flow Map with SCC highlighting and house-route tracing;
- graph-linked node/edge inspection;
- automated integrity and boundary tests in GitHub Actions.

The traditional condition engine and temporal Life Spectrum are **not yet implemented**. Unsupported astronomical objects are not silently approximated.

---

## What is actually novel

The current framework makes three contributions that are unusual in astrology software.

### 1. Rulership topology is computed as a directed graph

Noetic Atlas constructs the dispositor graph, traces routes, computes strongly connected components with Tarjan’s algorithm, and surfaces terminal SCCs as explicit mathematical objects.

This can make structures such as mutual-disposition cycles and route convergence mechanically inspectable rather than dependent on manually chasing rulers.

### 2. Calculation and interpretation are separated by provenance

The system distinguishes:

```text
Input
→ Astronomy
→ Astrological rule
→ Mathematical derivation
→ Exploratory research
→ Interpretation
```

Every important result is intended to be reversible to its inputs, rule/formula, model version, intermediate values, output, and known uncertainty.

### 3. Different structures receive different visual representations

The horoscope wheel remains useful for angular geometry. Noetic Atlas adds coordinated views for questions that are awkward on the wheel:

- **Natal Field** — node-link relational structure;
- **Aspect Matrix** — exact pairwise lookup and dense comparison;
- **Flow Map** — directed rulership/dispositor dependency;
- **Sect & Lots** — source-sensitive derived coordinates;
- **Audit** — derivation/provenance;
- later **Condition** and **Life Spectrum** views.

This is not merely a prettier horoscope. It is an attempt to expose the model underneath the historical visualization.

For a detailed evaluation and the technical literature supporting these design choices, see **[Current State and Scientific Rationale](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)**.

---

## Scientific and epistemic status

Noetic Atlas is currently justified as a **formal, computational, and visual-analytics instrument**.

Graph theory justifies SCCs, paths, and related topology once the astrological rulership graph has been defined. Information-visualization research justifies using node-link and matrix views for different graph tasks. Multilayer-network theory provides a formal language for preserving different relation types. Provenance standards and FAIR principles support the engineering requirement that results retain explicit lineage.

Those literatures do **not** establish astrological causation, predictive validity, psychological truth, or a physical energy mechanism.

The project therefore distinguishes:

```text
exact mathematics inside a selected symbolic model
from
empirical validity of the model’s interpretation
```

A terminal SCC can be a reproducible graph fact without being proven to be a psychological or spiritual attractor. A harmonic descriptor can be mathematically defined without being established as an astrological meaning.

This distinction is foundational.

---

# Start here

Recommended documentation order:

1. **[Current State and Scientific Rationale](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)** — what the framework genuinely establishes today and the technical basis for its design.
2. **[Theory & Purpose](docs/THEORY_AND_PURPOSE.md)** — why Noetic Atlas exists and what claims it does and does not make.
3. **[Developer Guide](docs/DEVELOPER_GUIDE.md)** — repository onboarding, invariants, tests, and extension rules.
4. **[Architecture](docs/ARCHITECTURE.md)** — software boundaries and data flow.
5. **[Astrological Model](docs/ASTROLOGICAL_MODEL.md)** — explicit rule assumptions.
6. **[Integrity & Provenance](docs/INTEGRITY_AND_PROVENANCE.md)** — the audit contract and Derivation Ledger.
7. **[Research Program](docs/RESEARCH_PROGRAM.md)** — null models, replication, HCI evaluation, and theory-promotion rules.
8. **[Roadmap](docs/ROADMAP.md)** — Structure → Condition → Time → Recurrence → Discovery.

The repository should be understandable from these files without access to the original design conversation.

---

# Core formal model

A current abstract ontology is:

```text
A = {P, H, S, E, R, L, C, T}
```

| Symbol | Meaning |
|---|---|
| `P` | planets, angles, nodes, lots, selected points |
| `H` | houses/places |
| `S` | sign and categorical states |
| `E` | aspects and other pairwise relations |
| `R` | rulers, dispositors, reception, dependencies |
| `L` | lots and derived coordinates |
| `C` | planetary/relational condition |
| `T` | transits and timing regimes |

`C` and `T` are included in the ontology even though their full engines are incomplete. Missing layers are represented as explicit completeness states rather than hidden assumptions.

---

# Four visual questions

## Natal Field — Structure

**What relationships are present?**

Current v0.3.2 includes an interactive SVG field, computed weighted aspect edges, selectable object layers, node-neighborhood isolation, edge inspection, dynamic motifs, and linked provenance.

## Flow Map — Directed dependency

**Where does the chart route?**

The Flow Map represents:

```text
house → ruler → dispositor → ... → terminal node/component
```

and makes SCCs, cycles, house routes, and convergence inspectable.

## Life Spectrum — Time

**Which characterized natal structures are activated, and when?**

Planned after the Condition Engine. No temporal band should exist without a traceable calculation.

## Life Space — State space

**How does the complete modeled configuration evolve through time?**

This remains a later research layer. Dimensionality reduction is deferred until feature semantics are stable.

---

# Epistemic contract

Noetic Atlas distinguishes six statement classes.

| Layer | Type | Example |
|---|---|---|
| E0 | Input | birth time, location, imported placement |
| E1 | Astronomy | longitude, speed, ASC, MC, solar altitude |
| E2 | Astrological rule | Whole Sign house, aspect, sect, lot, ruler |
| E3 | Mathematical derivation | SCC, route depth, graph degree |
| E4 | Research exploratory | harmonic concentration, convergence metric |
| E5 | Interpretation | traditional delineation, modern archetype, AI synthesis |

A downstream layer cannot alter an upstream result.

AI belongs downstream as a navigator, explainer, comparator, and synthesis layer. It is not an ephemeris or hidden rule engine.

---

# Hellenistic baseline

Current deterministic baseline:

```text
Tropical zodiac
Whole Sign houses
Traditional domicile rulers
Day/night sect
Major aspects under named orb policy
Paulus/Panaretus seven Hermetic lots
```

Implemented lots:

- Fortune;
- Spirit;
- Eros;
- Necessity;
- Courage;
- Victory;
- Nemesis.

Historical variants must receive separate rule IDs rather than being silently blended.

The next major layer is a source-controlled traditional **Condition Engine** covering dignity, triplicity, bounds, angularity, reception, overcoming, bonification/maltreatment, and related conditions without collapsing them into one opaque strength score.

---

# Research mission

The framework is designed to investigate questions that conventional chart interfaces make difficult to formalize, including:

- ruler-route convergence;
- terminal dispositor basins;
- higher-order motifs;
- lot/planet/ruler multilayer interaction;
- harmonic organization beyond named aspects;
- temporal recurrence;
- cross-technique timing convergence;
- structurally similar periods;
- agreement/disagreement across astrological traditions;
- whether the visualizations themselves improve task accuracy or reduce cognitive load.

A mathematically interesting result is **not automatically an astrological discovery**.

Promotion path:

```text
formal definition
→ deterministic implementation
→ tests
→ cross-chart replication
→ null/randomized comparison
→ expert inspection
→ blinded/preregistered evaluation where feasible
→ independent replication
→ candidate interpretive theory
```

Negative results are legitimate outcomes.

---

# Run locally

```bash
npm install
npm test
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/prototype/
```

For ordinary visual testing, use the public GitHub Pages deployment instead.

---

# Canonical regression fixture

`NAF-CANON-0001` is the permanent first regression specimen.

It exercises known structural invariants including:

- Mercury ↔ Venus terminal dispositor SCC;
- complete Sun–Moon–Jupiter air trine under the current aspect policy;
- Fortune near Uranus;
- night-sect Fortune/Spirit calculations;
- multiple house routes converging on the same terminal structure.

The fixture verifies software behavior. It is **not evidence that a new astrological theory is correct**.

Synthetic fixtures should be preferred for mathematical boundary testing.

---

# Design rules

1. Calculation before narration.
2. Resolution over prophecy.
3. Structure before meaning.
4. Show the work.
5. Never manufacture precision.
6. Ambiguity is data.
7. Unsupported is better than guessed.
8. Traditions are explicit rule models, not hidden mixtures.
9. Every quantitative score needs a definition.
10. Research descriptors are not interpretation by default.
11. The wheel remains a reference, not an enemy.
12. AI navigates deterministic state; it does not replace it.
13. A failed hypothesis is an acceptable research result.
14. A feature that only makes astrology look interesting does not belong.
15. A feature that makes a structural question easier to inspect, reproduce, compare, or test may belong.

---

# Development sequence

```text
v0.3.2  deterministic structure + restored Visual Observatory
   ↓
v0.4    traditional Condition Engine
   ↓
v0.5    provenance-backed Life Spectrum
   ↓
traditional timing layers
   ↓
controlled HCI + structural research
   ↓
comparative traditions + longitudinal state research
```

See **[Roadmap](docs/ROADMAP.md)** for the complete sequence.

---

# North star

The intended experience is not:

> “Here is your horoscope.”

It is:

> **Here is the structure. Here is how it was calculated. Here is how it is connected. Here is what the selected rule model says. Here is what remains unknown. Explore it.**
