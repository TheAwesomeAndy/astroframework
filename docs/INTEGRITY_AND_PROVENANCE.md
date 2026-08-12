# Noetic Atlas — Integrity and Provenance Protocol

## 1. Purpose

Noetic Atlas is built as an inspectable research instrument, not a black-box horoscope generator.

> **Every displayed claim should be reversible to its input, formula/rule, model version, source tradition, mathematical derivation, applicability, and known limitation.**

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

## 2. Epistemic classes

Noetic Atlas distinguishes six primary statement classes:

1. **Input** — values supplied by the user or imported from an explicit source.
2. **Astronomical computation** — ephemeris positions, observer geometry, angles, velocities, civil-time resolution.
3. **Astrological rule** — Whole Sign assignment, aspect admission, domicile rulership, sect, lots, primitive condition, and later relational/compound rules.
4. **Graph-derived / mathematical derivation** — SCCs, terminal basins, route depth, centrality, motifs, overlap, and related exact properties of the encoded graph.
5. **Research-exploratory** — descriptors or comparisons whose astrological significance has not been established.
6. **Interpretive inference** — traditional, modern, transpersonal, energetic, spiritual, psychological, or AI-assisted meaning.

Interpretation never retroactively changes classes 1–5.

## 3. Current release evidence chain

The v0.4.1.2/v0412c public reading is conceptually reversible through:

```text
interpretive statement
→ interpretation model/profile
→ placement / house / aspect / graph / condition evidence
→ graph finding or rule result
→ deterministic ledger object(s)
→ astronomical/chart coordinate(s)
→ civil-time resolution where applicable
→ original input
```

A user should be able to understand the reading without opening all proof, but the proof must remain available.

## 4. Civil-time provenance

The public birth-input contract includes local date/time and observer coordinates, with optional expert time-zone override/ambiguity selection.

Noetic Atlas retains:

- resolved IANA zone;
- historical UTC offset;
- UTC instant;
- lookup/conversion method;
- ambiguity alternatives when present;
- expert override if used.

Repeated DST times are not guessed. Nonexistent local times are rejected.

## 5. Astronomy provenance

Current open adapter: Astronomy Engine 2.1.19.

Noetic Atlas records provider/version and coordinate/convention metadata for supported numerical primitives.

Current automatic birth-time astronomy supports Sun through Pluto, ASC, MC, longitudinal motion, and solar altitude.

It does **not** invent coordinates for Ceres, Chiron, lunar-node variants, Lilith/apogee variants, Vertex, or fixed stars.

## 6. Angles and sect

ASC/MC are computed from observer geometry, not supplied by an LLM.

Sect uses geometric solar altitude when birth-data astronomy is available:

```text
altitude > 0° → day
altitude < 0° → night
altitude = 0° → indeterminate/horizon
```

Fallback chart-geometry sect methods must identify themselves as fallback.

## 7. Hermetic lots

Current lot family: seven Paulus/Panaretus Hermetic lots with sect reversal and directed zodiacal arcs.

Each lot retains:

- sect;
- formula family;
- source/target points and longitudes;
- directed arc;
- ASC;
- raw/normalized result;
- Whole Sign house;
- ruler;
- source/rule identity;
- validation/completeness state.

Historical variants are not silently merged.

## 8. Aspects

Each admitted aspect preserves:

- endpoints;
- exact family/angle;
- measured separation;
- orb;
- active orb policy;
- applying/separating phase when motion exists;
- provenance.

Rounded display coordinates never override full-precision calculations.

## 9. Rulership/topology provenance

Traditional domicile rulers create directed dispositor edges. SCCs are rediscovered algorithmically from submitted chart state.

Current graph proof must identify graph scope/model before reporting:

- SCC/terminal SCC;
- terminal basin;
- route depth;
- upstream capture;
- nonterminal path bottleneck.

For example, `Mercury ↔ Venus is a terminal SCC` is incomplete unless it means the selected traditional-domicile classical dispositor graph.

## 10. Primitive condition provenance

Current model:

```text
naf.condition.primitive.hellenistic.v0.4.0b
```

Every classical planet receives independent factor records for:

- domicile;
- adversity;
- exaltation;
- depression/fall;
- triplicity;
- Egyptian bound;
- planetary sect family;
- in/out-of-sect relation;
- Whole-Sign angular-triad class.

Each factor has its own rule/source identity and ledger reference. There is no opaque condition total.

## 11. Graph metric integrity

A complete metric object should retain:

```text
id
label
value / unit
scope
definition
formula
observation
graph-theory meaning
astrological-rule context
interpretive status
limits
integrity.inputs
integrity.calculation
integrity.result
ledger references
```

A naked number is not a complete finding.

## 12. Explainable Finding integrity

A current graph finding should retain:

```text
finding id
title/category
statement
measurement
graph scope: nodes/edges
mathematical meaning
astrological context
interpretive hypothesis, if any
limits
proof formula
proof inputs/result
ledger refs
```

The UI should preserve the order:

```text
observation
→ measurement
→ mathematical meaning
→ astrological context
→ interpretive hypothesis
→ limits
→ proof
```

## 13. Energetic interpretation provenance

Current interpretation model:

```text
naf.interpretation.energetic_synthesis.v0.4.1.2
```

Current optional natural-house overlay:

```text
naf.interpretation.natural_house_overlay.modern.v1
```

Interpretive cards may consume actual sign, actual Whole Sign house, ruler/dispositor route, aspect geometry, graph findings, and primitive condition.

Energy/current/field language is explicitly classified as symbolic/phenomenological `interpretive-inference`, not measured physics.

A current card can include:

- core energy/archetype;
- sign/house synthesis;
- ruler routing;
- aspect modulation;
- graph/condition context;
- balanced expression;
- depletion/under-expression;
- excess/over-expression;
- material-life examples;
- soul/spirit inquiry;
- embodiment experiment;
- evidence object.

## 14. Outer planets and applicability

Uranus, Neptune, and Pluto can be valid modern/transpersonal interpretation objects while Hellenistic essential dignity remains `not_applicable`.

Noetic Atlas must never coerce `not_applicable` into neutral/zero condition.

## 15. Ceres provenance

Ceres can participate in interpretation only when a coordinate is supplied through an explicit input path.

Current Ceres profile is custom/modern and must be identified as such.

Automatic Ceres astronomy is not implemented. A supplied coordinate and an automatically calculated coordinate are distinct provenance states.

## 16. v0412c operational integrity

The current browser wrapper adds integrity at the application boundary:

- displays loading state before chart synchronization;
- attempts automatic canonical bootstrap;
- reads existing core JSON state;
- observes core JSON/status mutations;
- reports downstream synthesis failures explicitly;
- preserves access to the core if analysis initialization fails.

A blank panel is not an acceptable representation of an error state.

## 17. Research-exploratory integrity

Graph descriptors are reproducible mathematical descriptions of encoded charts. They are not automatically astrological claims.

Noetic Atlas blocks prevalence language such as `rare`, `high`, `exceptional`, `dominant`, or `enriched` until an explicit comparison/null model exists.

Planned null families include geometric longitude randomization, label permutation, appropriate degree-preserving rewiring, and layer-overlap randomization.

## 18. Truth protocol

A new technique is not promoted because it looks compelling in the canonical specimen.

```text
formal definition
→ deterministic implementation
→ tests
→ cross-chart replication
→ null/comparison
→ sensitivity analysis
→ expert inspection
→ empirical/phenomenological testing where relevant
→ interpretive hypothesis
→ independent replication
```

A negative result is acceptable.

## 19. Completeness states

Use explicit states:

```text
valid
ambiguous
unsupported
invalid
not_implemented
not_applicable
indeterminate
```

Never encode unsupported or nonapplicable as `0` or `false` merely to simplify a UI.

## 20. Documentation provenance

Living documentation is itself part of integrity.

`CURRENT_RELEASE.md` is the canonical human-readable release contract. README, INDEX, architecture, developer, product, astrological-model, research, and integrity docs must agree with it and with implementation.

Historical milestone docs remain historical and should be labeled by their release context rather than rewritten as present-tense truth.
