# Noetic Atlas

**An auditable visual-analytics framework for astrological structure, topology, condition, and time.**

> **See the structure. Follow the flow. Watch it change. Show the work.**

Noetic Atlas is an experimental computational framework for representing astrology as a multilayer symbolic system rather than forcing every relationship into a single horoscope wheel.

The project has two linked goals:

1. build a useful public/professional instrument for exploring astrological structure and timing;
2. build a research environment in which structural and temporal claims can be formulated, reproduced, compared with alternatives, and rejected when they fail.

The underlying research framework is the **Noetic Atlas Framework (NAF)**.

## Current state

**Public testing surface:** v0.4.0b — Primitive Condition Observatory  
**Structural analysis envelope:** `naf.analysis.v0.3.1`  
**Condition record schema:** `naf.condition.record.v0.4.0a`  
**Primitive condition model:** `naf.condition.primitive.hellenistic.v0.4.0b`  
**Default/deployed branch:** `main`

Public build:

`https://theawesomeandy.github.io/astroframework/`

The current site preserves the v0.3.2 graph-first Visual Observatory and adds a synchronized condition dock for the classical seven planets.

### Implemented structural substrate

- local birth date/time + latitude/longitude input;
- historical civil-time/time-zone resolution with DST ambiguity handling;
- astronomy adapter for Sun through Pluto;
- independently calculated ASC and MC;
- planetary longitudinal velocity / retrograde state;
- Whole Sign house calculation;
- major aspects under an explicit orb policy;
- applying/separating when motion data exist;
- traditional domicile rulership;
- directed dispositor graph;
- Tarjan strongly connected components and terminal SCCs;
- all-house ruler routes;
- chart sect;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- derivation/provenance ledger and derivation tree;
- experimental pattern engine;
- interactive SVG Natal Field;
- computed Aspect Matrix;
- directed Flow Map with SCC highlighting and house-route tracing;
- graph-linked node/edge inspection;
- automated integrity/boundary tests in GitHub Actions.

### Implemented primitive condition substrate — v0.4.0b

For Sun, Moon, Mercury, Venus, Mars, Jupiter, and Saturn, the condition engine independently computes:

- domicile;
- adversity/opposite domicile;
- sign-level exaltation;
- sign-level depression/fall;
- standard/Dorothean triplicity participation and active sect ruler;
- Egyptian bound/term under explicit `[start,end)` degree conventions;
- planetary sect family;
- in-sect / out-of-sect condition relative to chart sect;
- Whole-Sign angular-triad class: angular, succedent, declining.

Every factor creates an independent source- and rule-versioned ledger entry. **No scalar planet-strength score is calculated.**

Not yet implemented:

- reception / mutual reception as a condition layer;
- overcoming;
- bonification / maltreatment;
- enclosure / compound mitigation;
- degree-based quadrant dynamic strength;
- temporal Life Spectrum.

See **[v0.4.0b Primitive Condition](docs/V040B_PRIMITIVE_CONDITION.md)** and **[Condition Engine Specification](docs/CONDITION_ENGINE_SPEC.md)**.

---

## What is genuinely novel today

### 1. Rulership topology is computed as a directed graph

Noetic Atlas constructs the dispositor graph, traces routes, computes strongly connected components with Tarjan's algorithm, and surfaces terminal SCCs as explicit mathematical objects.

A terminal SCC is therefore a reproducible property of the selected rulership graph. Its psychological, spiritual, predictive, or metaphysical significance is a separate question.

### 2. Condition is modeled as a structured state, not a score

The project now separates:

```text
position
+ topology
+ primitive condition
```

A planet can therefore be inspected not only for where it sits and where its rulership path leads, but for the independent traditional conditions assigned under a named historical model.

This is the beginning of **qualified topology**: the graph can eventually know not merely that `A → B`, but what rule-defined state `B` is in and what relational conditions exist between them.

### 3. Calculation and interpretation are separated by provenance

The epistemic sequence is:

```text
Input
→ Astronomy
→ Astrological rule
→ Mathematical derivation
→ Exploratory research
→ Interpretation
```

Every important result is intended to remain reversible to its inputs, rule/formula, model version, intermediate values, output, and known uncertainty.

### 4. Different structures receive different visual representations

The wheel remains an excellent reference for angular geometry. Noetic Atlas uses coordinated views for other questions:

- **Natal Field** — relational aspect structure;
- **Aspect Matrix** — exact pairwise lookup;
- **Flow Map** — directed ruler/dispositor dependency;
- **Condition dock** — decomposed rule-defined planetary state;
- **Sect & Lots** — source-sensitive derived coordinates;
- **Audit** — provenance and derivation;
- later **Life Spectrum** — temporal activation.

For the detailed assessment and technical justification, see **[Current State and Scientific Rationale](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)**.

---

## Scientific and epistemic status

Noetic Atlas is justified today as a **formal, computational, and visual-analytics instrument**.

Graph theory justifies SCCs and path calculations once a graph has been defined. Visualization research supports task-specific coordinated graph/matrix views. Multilayer-network formalism provides a language for preserving different relation types. Provenance standards support reconstructable calculation lineage.

Those facts do **not** establish astrological causation, predictive validity, psychological truth, or a physical energy mechanism.

Similarly, v0.4.0b establishes that selected Hellenistic condition rules can be represented deterministically and audited. It does not establish that those rule-defined states correspond to measured physical quantities or validated psychological traits.

The project therefore distinguishes:

```text
exact mathematics inside a selected symbolic model
from
empirical validity of the model's interpretation
```

---

## Formal ontology

A current abstract representation is:

```text
A = {P, H, S, E, R, L, C, T}
```

| Symbol | Meaning |
|---|---|
| `P` | planets, angles, nodes, lots, selected points |
| `H` | houses/places |
| `S` | sign and categorical states |
| `E` | aspects and pairwise relations |
| `R` | rulers, dispositors, reception, dependencies |
| `L` | lots and derived coordinates |
| `C` | planetary/relational condition |
| `T` | transits and timing regimes |

Current development sequence:

```text
Geometry → Topology → Condition → Activation → Recurrence → Discovery
```

Geometry and topology are implemented. Primitive condition is now implemented for the classical seven. Relational/compound condition remains next. Activation/time follows only after the natal condition substrate is sufficiently complete.

---

## Hellenistic baseline

Current deterministic baseline:

```text
Tropical zodiac
Whole Sign houses
Traditional domicile rulers
Day/night sect
Major aspects under named orb policy
Paulus/Panaretus seven Hermetic lots
Source-locked primitive condition for the classical seven
```

The condition layer currently uses separate versioned rules for domicile/adversity, sign-level exaltation/depression, standard triplicity, Egyptian bounds, planetary sect family, sect match, and Whole-Sign angular triads.

Historical variants are never silently blended. Ptolemaic bounds, alternative triplicity schemes, later Medieval reception definitions, and modern outer-planet dignity systems require independent rule IDs.

---

## Research mission

The framework is designed to make difficult structural questions inspectable and testable, including:

- ruler-route convergence and terminal basins;
- higher-order graph motifs;
- lot/planet/ruler multilayer interaction;
- condition-aware topology;
- harmonic organization beyond named aspects;
- temporal recurrence;
- cross-technique timing convergence;
- structurally similar life periods;
- agreement/disagreement across traditions;
- whether Noetic Atlas visualizations improve task accuracy, learning, or cognitive load relative to a traditional wheel.

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

## Documentation

Recommended starting points:

1. [Current State and Scientific Rationale](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)
2. [Theory & Purpose](docs/THEORY_AND_PURPOSE.md)
3. [Developer Guide](docs/DEVELOPER_GUIDE.md)
4. [Architecture](docs/ARCHITECTURE.md)
5. [Astrological Model](docs/ASTROLOGICAL_MODEL.md)
6. [v0.4.0a Condition Ontology](docs/V040A_CONDITION_ONTOLOGY.md)
7. [v0.4.0b Primitive Condition](docs/V040B_PRIMITIVE_CONDITION.md)
8. [Condition Engine Specification](docs/CONDITION_ENGINE_SPEC.md)
9. [Research Program](docs/RESEARCH_PROGRAM.md)
10. [Roadmap](docs/ROADMAP.md)

---

## Run locally

```bash
npm install
npm test
python -m http.server 8000
```

Open the current combined testing surface:

```text
http://localhost:8000/prototype/v040b.html
```

The underlying v0.3.2 Visual Observatory remains available at:

```text
http://localhost:8000/prototype/
```

---

## Design rules

1. Calculation before narration.
2. Resolution over prophecy.
3. Structure before meaning.
4. Show the work.
5. Never manufacture precision.
6. Ambiguity is data.
7. Unsupported is better than guessed.
8. Traditions are explicit rule models, not hidden mixtures.
9. No opaque condition/strength score.
10. Research descriptors are not interpretation by default.
11. The wheel remains a reference, not an enemy.
12. AI navigates deterministic state; it does not replace it.
13. A failed hypothesis is an acceptable result.
14. A feature that only makes astrology look interesting does not belong.
15. A feature that makes a structural question easier to inspect, reproduce, compare, or test may belong.

---

## Next engineering gate

The next condition movement is **relational condition**:

```text
G_reception
G_exchange
G_overcoming
```

Reception and overcoming should become distinct relation layers rather than attributes silently folded into the dispositor graph. Compound techniques such as bonification, maltreatment, enclosure, and mitigation remain downstream pure functions over already-computed primitive and relational facts.

Life Spectrum remains downstream of that work.

---

## North star

The intended experience is not:

> "Here is your horoscope."

It is:

> **Here is the structure. Here is how it was calculated. Here is how it is connected. Here is its rule-defined condition. Here is what remains unknown. Explore it.**
