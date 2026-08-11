# Noetic Atlas

**An auditable visual analytics framework for astrological structure, topology, and time.**

> **See the structure. Follow the flow. Watch it change. Show the work.**

Noetic Atlas is an experimental computational framework for representing astrology as a multilayer symbolic system rather than forcing every relationship into a single horoscope wheel.

The project has two linked goals:

1. build a useful consumer/professional product for exploring natal and temporal astrology;
2. build a research instrument capable of exposing and testing structural relationships that conventional astrological interfaces make difficult to observe.

The underlying research framework is the **Noetic Atlas Framework (NAF)**.

Current development branch: **`noetic-atlas-v0.3`**.

---

## Current status

v0.3 establishes the first end-to-end deterministic foundation.

Implemented now:

- local birth date/time + latitude/longitude input;
- historical civil-time/time-zone resolution with DST ambiguity handling;
- astronomical adapter for Sun through Pluto;
- independently calculated ASC and MC;
- planetary longitudinal velocity / retrograde state;
- whole-sign house calculation;
- major aspect calculation under explicit orb policy;
- applying/separating when motion data exist;
- traditional domicile rulership;
- generic dispositor graph;
- Tarjan strongly connected components and terminal SCCs;
- sect calculation;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- derivation/provenance ledger;
- experimental pattern engine;
- runtime chart import from pasted text or JSON;
- interactive browser prototype;
- automated integrity tests in GitHub Actions.

Current open-adapter limitations are documented explicitly; unsupported astronomical objects are not silently approximated.

---

# Start here

A new software engineer should read the documentation in this order:

1. **[Theory & Purpose](docs/THEORY_AND_PURPOSE.md)** — why Noetic Atlas exists and what claims it does and does not make.
2. **[Developer Guide](docs/DEVELOPER_GUIDE.md)** — repository onboarding, module ownership, invariants, tests, and extension rules.
3. **[Architecture](docs/ARCHITECTURE.md)** — actual v0.3 software boundaries and data flow.
4. **[Astrological Model](docs/ASTROLOGICAL_MODEL.md)** — explicit rule assumptions: whole-sign houses, sect, aspects, rulers, lots, and planned condition engine.
5. **[Integrity & Provenance](docs/INTEGRITY_AND_PROVENANCE.md)** — the audit contract and Derivation Ledger.
6. **[Research Program](docs/RESEARCH_PROGRAM.md)** — how new patterns are discovered, tested, compared with null models, and promoted or rejected.
7. **[Astronomy Adapters](docs/ASTRONOMY_ADAPTERS.md)** — provider choices, coordinate assumptions, precision, and licensing considerations.
8. **[Roadmap](docs/ROADMAP.md)** — development sequence from the current kernel toward condition, time, AI navigation, and research scale.

The repository should be understandable from these files without access to the original design conversation.

---

# Core idea

The horoscope wheel is not astrology itself. It is one historical encoding of astrological information.

The wheel is excellent at preserving:

- zodiacal longitude;
- sign placement;
- house placement;
- angular relationships.

But astrology also contains:

- directed rulership;
- dispositors;
- sect;
- dignity/condition;
- lots;
- multi-object configurations;
- hierarchical timing systems;
- continuously changing transits;
- recurrence across time.

These are not all the same mathematical object.

Noetic Atlas therefore represents an astrological system as a set of coordinated layers:

```text
A = {P, H, S, E, R, L, T}
```

where:

| Symbol | Meaning |
|---|---|
| `P` | planets, angles, nodes, selected points |
| `H` | houses/places |
| `S` | sign and qualitative states |
| `E` | aspects and other relations |
| `R` | rulers, dispositors, reception, dependencies |
| `L` | lots and derived coordinates |
| `T` | transits and timing regimes |

Different layers receive different visual representations.

---

# The four visual questions

## 1. Natal Field — Structure

**What is the natal architecture?**

The Natal Field exposes:

- clusters;
- oppositional axes;
- trine subnetworks;
- square complexes;
- conjunction structures;
- derived-point participation;
- angular concentration;
- later, higher-order motifs and condition.

## 2. Flow Map — Directed dependency

**Where does the chart route?**

The Flow Map represents relationships such as:

```text
house → sign → ruler → occupied sign → dispositor → ...
```

It makes visible:

- ruler pathways;
- mutual dispositions;
- terminal dispositors;
- strongly connected components;
- route convergence;
- house-to-house dependency.

## 3. Life Spectrum — Time

**Which parts of the natal architecture are activated, and when?**

Planned temporal representation:

```text
x-axis    = time
y-axis    = natal structures
intensity = explicit activation model
```

Channels may include transits, profections, zodiacal releasing, stations, eclipses, and other documented timing systems.

No temporal band should exist without a traceable calculation.

## 4. Life Space — State Space

**How does the complete symbolic configuration evolve?**

A future state vector may represent the chart at time `t`:

```text
x(t) = [x1(t), x2(t), ..., xn(t)]
```

Only after feature semantics are stable will dimensionality reduction, recurrence analysis, or chart manifolds be treated as legitimate research objects.

---

# Epistemic contract

Noetic Atlas distinguishes six statement classes.

| Layer | Type | Example |
|---|---|---|
| E0 | Input | birth time, location, imported placement |
| E1 | Astronomy | longitude, speed, ASC, MC, solar altitude |
| E2 | Astrological rule | whole-sign house, aspect, sect, lot, ruler |
| E3 | Mathematical derivation | SCC, route depth, centrality, motif |
| E4 | Research exploratory | harmonic concentration, convergence metric |
| E5 | Interpretation | Hellenistic delineation, modern archetype, AI synthesis |

A downstream layer cannot alter an upstream result.

AI belongs at E5 and as a navigator over E0–E4; it is not an ephemeris or hidden rule engine.

---

# Truth and provenance

The central engineering principle is:

> **Every displayed result should be reversible to its input, formula/rule, model version, intermediate values, output, and known uncertainty.**

The framework therefore maintains a **Derivation Ledger**.

A future UI should allow a user to click any result and ask:

```text
Why is this here?
```

and trace backward:

```text
interpretation
→ structural finding
→ astrological rule
→ mathematical derivation
→ astronomical coordinate
→ civil-time resolution
→ original input
```

This is the architectural definition of Noetic Atlas integrity.

---

# Birth-data pipeline

The public input is intentionally simple:

```json
{
  "local_datetime": "1984-10-03T21:17:00",
  "latitude": 40.789,
  "longitude": -73.135,
  "elevation_m": 0
}
```

Pipeline:

```text
local date/time + lat/lon
        ↓
IANA time-zone resolution
        ↓
historical UTC conversion
        ↓
astronomy provider
        ↓
planets + velocities + ASC + MC + solar altitude
        ↓
whole-sign houses + aspects + sect + lots
        ↓
rulership/topology
        ↓
research descriptors
        ↓
visualization/export/interpretation
```

Repeated DST times are treated as ambiguous rather than guessed. Nonexistent local times are rejected.

---

# Hellenistic baseline

The current baseline rule model uses:

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

The lot calculation stores the complete directed-distance proof and sect-specific formula direction.

Historical variants are to be implemented as separate rule IDs rather than silently blended.

See [Astrological Model](docs/ASTROLOGICAL_MODEL.md).

---

# Research mission

Noetic Atlas is not limited to reproducing mainstream astrology software.

The framework is deliberately designed to investigate structures that may be difficult to perceive manually, including:

- ruler-route convergence;
- terminal dispositor basins;
- higher-order graph motifs;
- harmonic organization beyond named aspects;
- lot/planet/ruler multilayer interaction;
- temporal recurrence;
- cross-technique timing convergence;
- structurally similar life periods;
- family/relationship graph interaction;
- population-level chart neighborhoods;
- agreement/disagreement across astrological traditions.

A mathematically interesting result is **not automatically an astrological discovery**.

Promotion path:

```text
formal definition
→ deterministic implementation
→ tests
→ cross-chart replication
→ null/randomized comparison
→ expert inspection
→ longitudinal/cohort validation
→ interpretive hypothesis
```

See [Research Program](docs/RESEARCH_PROGRAM.md).

---

# Repository structure

```text
astroframework/
├── README.md
├── package.json
├── src/
│   ├── astronomy/
│   ├── time/
│   ├── kernel/
│   ├── pipeline/
│   └── research/
├── prototype/
├── data/canonical/
├── tests/
├── docs/
└── .github/workflows/
```

Detailed ownership is documented in [Developer Guide](docs/DEVELOPER_GUIDE.md) and [Architecture](docs/ARCHITECTURE.md).

---

# Run locally

Install dependencies:

```bash
npm install
```

Run the deterministic test suite:

```bash
npm test
```

Serve the browser prototype:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/prototype/
```

The current prototype supports birth-data input and imported-chart input and renders computed analysis from the framework.

---

# Canonical regression fixture

`NAF-CANON-0001` is the permanent first regression specimen.

It is useful because the chart contains known structural invariants that exercise multiple parts of the framework.

Examples include:

- Mercury ↔ Venus terminal dispositor SCC;
- complete Sun–Moon–Jupiter air trine under the current major-aspect policy;
- Fortune near Uranus;
- night-sect Fortune/Spirit calculations;
- multiple house routes converging on the same terminal structure.

The fixture verifies software behavior.

It is **not evidence that a new astrological theory is correct**.

Synthetic fixtures should be preferred for boundary-condition testing.

---

# Current research descriptors

Experimental descriptors currently include:

- circular harmonic spectrum;
- ruler-route convergence;
- multilayer participation.

These outputs are explicitly labeled exploratory.

Do not interpret them as new astrological doctrine without separate research.

---

# Design principles

1. **Calculation before narration.**
2. **Resolution over prophecy.**
3. **Show the structure before telling the story.**
4. **Show the work.**
5. **Never manufacture precision.**
6. **Ambiguity is data.**
7. **Unsupported is better than guessed.**
8. **Traditions are explicit rule models, not hidden mixtures.**
9. **Every quantitative score needs a definition.**
10. **Research descriptors are not interpretation by default.**
11. **The wheel remains a reference, not the sole visual grammar.**
12. **AI navigates and explains deterministic state; it does not replace it.**
13. **A failed hypothesis is an acceptable research result.**
14. **The consumer interface may be simple; the underlying methodology must remain inspectable.**

---

# Product direction

The commercial moat is not generative horoscope prose.

It is the combination:

```text
Astrological Data Model
+ Deterministic Calculation Kernel
+ Provenance / Derivation Ledger
+ Visual Grammar
+ Longitudinal Life Map
+ Research Observatory
+ Explainable AI
```

Potential surfaces include:

- individual self-exploration;
- professional astrologer workspaces;
- astrological education;
- anonymized/consented research tooling;
- future comparative-tradition analysis.

The product should increase agency rather than dependence.

---

# What the project does not claim

Noetic Atlas does not currently claim that astrological relationships are measured physical forces or fields.

Network science, signal-processing, state-space, phase, resonance, coupling, and field language are used as **formal representations and analytical metaphors unless independent evidence establishes a literal physical counterpart**.

The mathematics of the representation can be exact while the metaphysical interpretation remains open.

---

# Next engineering movement

The next major framework layer is the **Astrological Condition Engine**.

Before building Life Spectrum at scale, the natal model should gain a richer traditional condition representation, including source-controlled versions of:

- dignity;
- triplicity;
- bounds/terms;
- angularity;
- sect condition;
- reception;
- overcoming;
- bonification/maltreatment;
- other documented Hellenistic condition techniques.

The goal is not an opaque “strength score.”

The goal is a richer, inspectable field in which each condition remains independently traceable.

See [Roadmap](docs/ROADMAP.md).

---

# North star

The intended experience is no longer:

> “Here is your horoscope.”

It is:

> **Here is the structure. Here is how it was calculated. Here is how it is connected. Here is how it changes. Here is what different models say about it. Explore it.**
