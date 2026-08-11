# Noetic Atlas v0.3.x Closeout and v0.4 Entry Criteria

## Purpose

This document defines what the v0.3 line has legitimately established, what remains incomplete, and what must be true before the project is allowed to claim the next level of capability.

The current public endpoint of the v0.3 line is **v0.3.2 — Visual Observatory**. The deterministic minimum serialization envelope remains **`naf.analysis.v0.3.1`**.

v0.3.2 is a visual restoration on top of the deterministic v0.3 kernel, not a new astrological theory layer.

---

## What v0.3.x legitimately establishes

The v0.3 line crosses the project from specimen-driven visualization into a deterministic computational and visual-analytics instrument.

Implemented chain:

```text
civil birth input or imported placements
→ time-zone resolution where applicable
→ astronomy adapter where applicable
→ longitude / velocity / angles
→ Whole Sign places
→ major aspects under explicit orb policy
→ traditional domicile dispositors
→ directed graph topology
→ sect
→ Paulus/Panaretus Hermetic lots
→ derivation ledger/tree
→ exploratory structural descriptors
→ coordinated visualization
```

The line therefore establishes that a supported displayed structural claim can be traced backward to explicit inputs and a deterministic rule or algorithm.

It also establishes several useful formal objects that a conventional wheel does not normally surface directly:

- generic dispositor graph;
- house-ruler routes;
- strongly connected components;
- terminal SCCs;
- route convergence descriptors;
- explicit lot derivation proofs;
- schema/rule/provider provenance.

This does **not** mean that the natal model is complete, that the astronomy layer is fully cross-validated, that exploratory descriptors have astrological meaning, or that the visual system has been empirically shown to outperform a traditional wheel for all users/tasks.

---

## v0.3.2 visual restoration

The earlier v0.3.1 browser surface became too close to an integrity/debug dashboard and obscured the graph-theoretic product thesis.

v0.3.2 corrects that regression while preserving the deterministic kernel.

Current visual capabilities include:

- interactive SVG Natal Field;
- computed weighted aspect edges;
- node-neighborhood isolation;
- clickable edge inspection;
- dynamic motifs;
- computed Aspect Matrix;
- directed Flow Map;
- terminal-SCC highlighting;
- clickable house-ruler routes;
- elemental/modal composition;
- graph-native Hermetic lots;
- graph-linked audit/provenance inspection.

The visual layer now consumes computed analysis rather than relying on specimen-specific hard-coded graph claims.

This materially addresses the previous “visualization behind kernel” review finding for **structure**.

It does not address the still-missing visual grammar for **condition** or **time**.

---

## Strengths that become invariants

1. Civil time, astronomy, astrological rules, graph mathematics, research descriptors, visualization, and interpretation remain separate layers.
2. Ambiguous/nonexistent civil times are surfaced rather than guessed.
3. Topological results are discovered from graph structure rather than asserted because the example chart is already known.
4. Sect-reversing lots preserve formula family, sect, directed arc, result, and provenance.
5. Unsupported astronomical objects remain explicitly unsupported.
6. Research descriptors remain exploratory until they survive a promotion protocol.
7. CI must reproduce deterministic kernel invariants on every relevant push.
8. Serialized analyses carry schema and independently versioned rule/provider identifiers.
9. The traditional wheel remains a reference/control visualization rather than being caricatured as obsolete.
10. The UI may simplify presentation but may not reimplement or silently alter kernel mathematics.

---

## What the science currently justifies

The technical rationale for v0.3.x is narrower and stronger than a claim that astrology itself is scientifically validated.

### Graph theory

Once traditional domicile rulership is encoded as a directed graph, SCC decomposition and path properties are ordinary graph mathematics. Tarjan’s algorithm provides a deterministic linear-time SCC method.

This justifies statements such as:

```text
{Mercury, Venus} is a terminal SCC under rule set R
```

It does not justify:

```text
{Mercury, Venus} is therefore the deepest psychological attractor
```

### Information visualization

Controlled graph-visualization research supports using node-link and matrix representations for different tasks. Path tracing tends to favor node-link views; matrices can be more effective for many denser/larger graph tasks.

This supports the coordinated Natal Field + Aspect Matrix architecture.

It does not establish that Noetic Atlas is already superior to the wheel. That remains an HCI question to test.

### Multilayer representation

Network-science formalism supports preserving different relation types as separate layers rather than collapsing them into a single edge set.

This supports conceptual separation such as:

```text
G_aspect
G_rulership
G_house
G_lot
later G_condition
later G_temporal
```

It does not establish a physical network mechanism for astrology.

### Provenance

W3C PROV and FAIR-style research principles support the engineering value of explicit lineage, versions, and detailed provenance.

This justifies the Derivation Ledger as a reproducibility mechanism.

It does not make an interpreted claim true merely because the computation is reproducible.

See [`CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md) for references and detailed boundaries.

---

## Remaining v0.3 integrity gaps

### 1. Traditional condition is incomplete

The current model knows **where** planets are and **how** they are connected. It does not yet model enough of their traditional condition.

Missing/incomplete families include:

- domicile/exaltation/adversity;
- sect-aware triplicity;
- bounds/terms;
- angularity;
- reception/exchange;
- overcoming / superior-inferior geometry;
- enclosure/engagement where selected;
- bonification/maltreatment;
- mitigating conditions.

A chart can be topologically rich while remaining condition-blind.

### 2. Astronomy coverage and independent validation remain incomplete

Current open-adapter gaps include:

- true/mean lunar node;
- Chiron;
- Black Moon Lilith / lunar apogee under explicit definitions;
- Vertex;
- fixed stars;
- large independent cross-provider validation.

These must not be filled by undocumented approximations.

### 3. Derivation UX is only partially complete

The serialized model includes:

```text
derivation_ledger
derivation_tree
```

v0.3.2 links graph inspection back to audit context, which is a substantial improvement.

A complete click-any-result-and-walk-the-entire-dependency-tree experience remains unfinished.

### 4. Research descriptors remain substrate-limited

The pattern engine remains mathematically useful but carries:

```text
promotion_status = hold
condition_engine_complete = false
temporal_engine_complete = false
```

No harmonic, convergence, participation, centrality, or similar descriptor may be converted into a consumer-facing fate/strength/psychological/spiritual claim without separate research.

### 5. Visualization now leads structure but not condition/time

The v0.3.2 visual grammar now exposes structure well enough to proceed.

Still absent:

- condition encodings;
- reception visualization;
- condition-aware routing;
- temporal activation lanes;
- birth-time uncertainty bands;
- cross-technique timing overlays.

### 6. Testing remains incomplete as a full-system gate

Boundary coverage has improved, but future matrices still need:

- browser/UI integration tests;
- cross-provider astronomy fixtures;
- extended object definitions;
- condition-rule boundaries;
- rule-variant sensitivity;
- timing-system boundaries;
- accessibility/HCI testing.

---

## Frozen minimum serialization envelope

Current minimum integrity envelope:

```text
naf.analysis.v0.3.1
```

See:

```text
schemas/naf-analysis-v0.3.1.schema.json
```

The schema freezes the minimum requirement that an analysis identify:

- schema version;
- kernel version;
- rule/provider versions;
- model configuration;
- angles;
- objects;
- aspects;
- topology;
- validation;
- explicit completeness state;
- provenance.

The public interface version can advance independently from the analysis schema when a release changes visualization without changing the minimum serialized contract.

That is why the current browser can be v0.3.2 while the minimum analysis envelope remains v0.3.1.

---

## v0.4 entry criterion

v0.4 begins only when the next work is explicitly treated as a **condition engine**, not generic feature expansion.

The engineering question is:

> Given a deterministic natal structure, what is the traditional condition of each classical planet and relevant relation under a named, source-controlled Hellenistic rule set?

The answer must remain decomposed. No single hidden planet-strength number is allowed to replace the underlying conditions.

---

## v0.4 exit criterion

A v0.4 analysis should allow an expert to select a classical planet and reconstruct from structured data/provenance:

1. zodiacal placement and Whole Sign place;
2. domicile/exaltation state;
3. adversity/depression state where applicable;
4. sect-aware triplicity rulers;
5. bound/term ruler;
6. angularity/dynamic-strength classification;
7. receptions/exchanges;
8. superior/inferior or overcoming configurations;
9. relevant bonification/maltreatment;
10. mitigating conditions;
11. exact rule IDs and source references.

Only after that state is stable should temporal activation use condition-sensitive logic.

---

## Sequence after v0.4

```text
v0.3.2  deterministic structure + Visual Observatory
   ↓
v0.4    condition engine
   ↓
v0.5    minimal provenance-backed Life Spectrum
   ↓
traditional timing systems
   ↓
controlled HCI + structural research
   ↓
recurrence / comparative-model research
```

The order is intentional.

Time should activate a richly characterized natal field, and discovery should be evaluated against controls rather than promoted from attractive one-chart patterns.
