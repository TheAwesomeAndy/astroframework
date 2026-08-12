# Noetic Atlas — Integrity and Provenance Protocol

## 1. Purpose

Noetic Atlas is built as an inspectable research instrument, not a black-box horoscope generator.

> **Every displayed claim should be reversible to its input, formula/rule, model version, source tradition, mathematical derivation, applicability, and known limitation.**

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Frozen architecture:

```text
one chart state
→ many coordinated projections
```

No proof-bearing projection may silently create a second source of chart truth.

## 2. Epistemic classes

Noetic Atlas distinguishes six primary statement classes:

1. **Input** — user-supplied or explicitly imported values.
2. **Astronomical computation** — ephemeris positions, observer geometry, angles, velocities, civil-time resolution.
3. **Astrological rule** — Whole Sign assignment, aspect admission, domicile rulership, sect, lots, primitive condition, reception, exchange, overcoming, and later compound rules.
4. **Graph-derived / mathematical derivation** — SCCs, terminal basins, route depth, centrality, motifs, overlap, House River counts, and related properties of explicitly encoded graphs.
5. **Research-exploratory** — descriptors/comparisons whose astrological significance has not been established.
6. **Interpretive inference** — traditional, modern, transpersonal, energetic, spiritual, psychological, or AI-assisted meaning.

Interpretation never retroactively changes classes 1–5.

## 3. Current release evidence chain

The v0.4.2 public instrument is conceptually reversible through:

```text
visible relation / route / interpretation
→ projection model
→ condition / graph / house-route / interpretation evidence
→ rule or graph result
→ derivation object / ledger object
→ astronomical/chart coordinate(s)
→ civil-time resolution where applicable
→ original input
```

A user should not need to open every proof to understand a reading, but proof must remain available.

## 4. Civil-time provenance

The birth-input contract retains resolved IANA zone, historical UTC offset, UTC instant, lookup/conversion method, ambiguity alternatives when present, and expert override if used.

Repeated DST times are not guessed. Nonexistent local times are rejected.

## 5. Astronomy provenance

Current open adapter: Astronomy Engine 2.1.19.

Noetic Atlas records provider/version and coordinate/convention metadata for supported numerical primitives.

Automatic birth-time astronomy supports Sun through Pluto, ASC, MC, longitudinal motion, and solar altitude. It does **not** invent coordinates for Ceres, Chiron, lunar-node variants, Lilith/apogee variants, Vertex, or fixed stars.

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

Each lot retains sect, formula family, source/target points and longitudes, directed arc, ASC, raw/normalized result, Whole Sign house, ruler, source/rule identity, and validation/completeness state.

Historical variants are not silently merged.

## 8. Aspects

Each admitted aspect preserves endpoints, exact family/angle, measured separation, orb, active orb policy, applying/separating phase when motion exists, and provenance.

Rounded display coordinates never override full-precision calculations.

## 9. Rulership/topology provenance

Traditional domicile rulers create directed dispositor edges. SCCs are rediscovered algorithmically from submitted chart state.

Graph proof identifies graph scope/model before reporting SCC/terminal SCC, terminal basin, route depth, upstream capture, or nonterminal path bottleneck.

For example, `Mercury ↔ Venus is a terminal SCC` is incomplete unless it means the selected traditional-domicile classical dispositor graph.

## 10. Primitive condition provenance

Model:

```text
naf.condition.primitive.hellenistic.v0.4.0b
```

Each classical planet receives independent factor records for domicile, adversity, exaltation, depression/fall, triplicity, Egyptian bound, planetary sect family, in/out-of-sect relation, and Whole-Sign angular-triad class.

Each factor has its own rule/source identity and ledger reference. There is no opaque condition total.

## 11. Relational condition provenance

Model:

```text
naf.condition.relational.hellenistic.v0.4.2
```

Rule registry:

```text
naf.rules.relational_condition.hellenistic.v0.4.2
```

Every v0.4.2 relation object retains:

```text
id
type
endpoints / direction
model_id
rule_id
source_reference
tradition label
inputs
result
dependencies
derivation_ref
applicability / completeness context
```

Distinct relation types remain distinct:

```text
reception
exchange
mutual_reception compatibility
overcoming
domination
```

The later-tradition mutual-reception compatibility label never silently replaces Hellenistic exchange.

## 12. Condition Signature provenance

Model:

```text
naf.condition.signature.v0.4.2
```

A Condition Signature is a **projection** of already-computed primitive + relational condition. It is not an additional condition calculator.

Tokens retain their categorical identity and, where available, derivation references. No scalar-strength total is produced.

## 13. House River provenance

Model:

```text
naf.research.house_river.v0.4.2
```

House River consumes the deterministic Whole-Sign house routes and selected traditional dispositor graph.

For planetary routing edge `e`:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

Each House River source band and planetary routing band retains source house/topic, endpoints, contributing houses where applicable, route count, width semantics, model/version, and `derivation_ref`.

The route count is graph-derived evidence, not an energetic/fate/strength score.

## 14. Derivation Walker contract

Model:

```text
naf.integrity.derivation_walker.v0.4.2
```

The walker indexes:

- deterministic analysis ledger entries;
- primitive condition ledger entries;
- relational condition ledger entries;
- House River derivation entries;
- future explicitly supplied proof objects.

The desired proof direction is:

```text
visible claim
→ derivation_ref
→ rule/graph object
→ source + inputs + result
→ dependencies
→ coordinate / house / aspect / ruler proof
→ civil-time / astronomy provenance when relevant
```

Not every pre-v0.4.2 ledger object is normalized into the shared index yet. Missing legacy dependencies are explicitly returned as:

```text
external_or_unindexed_dependency
```

They are never fabricated.

## 15. Graph metric integrity

A complete metric object should retain ID, label, value/unit, scope, definition, formula, observation, graph-theory meaning, astrological-rule context, interpretive status, limits, integrity inputs/calculation/result, and ledger references.

A naked number is not a complete finding.

## 16. Explainable Finding integrity

A graph finding retains finding ID, title/category, statement, measurement, graph scope, mathematical meaning, astrological context, interpretive hypothesis if any, limits, proof formula, proof inputs/result, and ledger refs.

The UI should preserve:

```text
observation
→ measurement
→ mathematical meaning
→ astrological context
→ interpretive hypothesis
→ limits
→ proof
```

## 17. Energetic interpretation provenance

Model:

```text
naf.interpretation.energetic_synthesis.v0.4.1.2
```

Optional natural-house overlay:

```text
naf.interpretation.natural_house_overlay.modern.v1
```

Interpretive cards may consume actual sign, actual Whole Sign house, ruler/dispositor route, aspect geometry, graph findings, and condition.

Energy/current/field language is explicitly classified as symbolic/phenomenological `interpretive-inference`, not measured physics.

## 18. Resonance provenance

House-resonance model:

```text
naf.interpretation.house_resonance.v0.4.1.3
```

Qualified Resonance in v0.4.2 consumes this existing projection plus Condition Signatures. It does not recalculate signs/houses or elevate the optional natural-house correspondence into primary doctrine.

## 19. Outer planets and applicability

Uranus, Neptune, and Pluto can be valid modern/transpersonal interpretation objects while Hellenistic primitive/relational condition remains `not_applicable`.

Noetic Atlas never coerces `not_applicable` into neutral/zero condition.

## 20. Ceres provenance

Ceres can participate in interpretation only when a coordinate is supplied through an explicit input path.

Current Ceres profile is custom/modern and must be identified as such. Automatic Ceres astronomy is not implemented. Supplied and automatically calculated coordinates are distinct provenance states.

## 21. Public-shell operational integrity

Current preservation chain:

```text
v042
└── v0413
    └── v0412c
        └── deterministic visual core
```

The new shell must:

- preserve all earlier useful views;
- consume the same serialized chart state;
- resynchronize through observed chart-state changes;
- expose errors rather than blank state;
- keep relation layers visually distinguishable;
- preserve proof controls on v0.4.2 relations and route bands.

A blank panel or silent fallback is not an acceptable error representation.

## 22. Research-exploratory integrity

Graph descriptors are reproducible mathematical descriptions of encoded charts. They are not automatically astrological claims.

Noetic Atlas blocks prevalence language such as `rare`, `high`, `exceptional`, `dominant`, or `enriched` until an explicit comparison/null model exists.

Planned null families include geometric longitude randomization, label permutation, appropriate degree-preserving rewiring, and layer-overlap randomization.

## 23. Truth protocol

A new technique is not promoted because it looks compelling in the canonical specimen.

```text
formal definition
→ deterministic implementation
→ tests
→ cross-chart replication
→ null/comparison where applicable
→ sensitivity analysis
→ expert inspection
→ empirical/phenomenological testing where relevant
→ interpretive hypothesis
→ independent replication
```

A negative result is acceptable.

## 24. Completeness states

Use explicit states:

```text
valid
ambiguous
unsupported
invalid
not_implemented
not_applicable
indeterminate
external_or_unindexed_dependency
```

Never encode unsupported or nonapplicable as `0` or `false` merely to simplify a UI.

## 25. Documentation provenance

Living documentation is part of integrity.

`CURRENT_RELEASE.md` is the canonical human-readable release contract. README, INDEX, architecture, developer, product, astrological-model, research, glossary, and integrity docs must agree with it and with implementation.

Historical/release docs remain historical and should be labeled by their release context rather than rewritten as present-tense truth.
