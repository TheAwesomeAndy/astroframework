# Noetic Atlas

**An auditable visual-analytics framework for astrological structure, topology, condition, energetic synthesis, graph analysis, and time.**

> **See the structure. Follow the flow. Understand the pattern. Show the work.**

Noetic Atlas is an experimental computational framework for representing astrology as a multilayer symbolic system rather than forcing every relationship into a single horoscope wheel. The underlying research framework is the **Noetic Atlas Framework (NAF)**.

The project has two linked goals:

1. build a useful public/professional instrument for exploring astrological structure, condition, interpretation, and timing;
2. build a research environment in which structural, interpretive, and temporal claims can be formulated, reproduced, compared, and rejected when they fail.

## Current release

See [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md) for the canonical release contract.

**Current public release:** v0.4.3 — Compound Condition  
**Current browser surface:** `prototype/v043.html`  
**Deployed/default branch:** `main`

Current model identifiers include:

```text
naf.condition.system.v0.4.3
naf.condition.compound.hellenistic.v0.4.3
naf.rules.compound_condition.hellenistic.v0.4.3
naf.condition.relational.hellenistic.v0.4.2
naf.condition.signature.v0.4.2
naf.research.house_river.v0.4.2
naf.integrity.derivation_walker.v0.4.3
naf.interpretation.house_resonance.v0.4.1.3
naf.interpretation.energetic_synthesis.v0.4.1.2
naf.interpretation.natural_house_overlay.modern.v1
naf.research.graph_analytics.v0.4.1
naf.condition.primitive.hellenistic.v0.4.0b
naf.condition.record.v0.4.0a
naf.analysis.v0.3.1
```

The root `index.html` redirects to v043. v043 embeds the complete v042 Atlas, which embeds v0413, which embeds v0412c, which reads the serialized chart state from the existing deterministic visual core. There is still only **one chart calculator/state authority**.

## Frozen architecture law

```text
one chart state
→ many coordinated projections
```

A new representation does not get to recalculate the astronomical or kernel substrate. It must project the state already produced by the deterministic pipeline.

Preservation chain:

```text
v043 Compound Condition
└── v042 Relational Condition
    └── v0413 Resonance Field
        └── v0412c Energetic Analysis observatory
            └── prototype/index.html deterministic visual core
```

## Current architecture

```text
Civil input
→ time-zone / DST resolution
→ astronomy
→ deterministic astrological kernel
→ traditional integrity + lots
→ primitive condition
→ relational condition
→ compound condition
→ graph analytics / findings
→ resonance / House River / qualified flow projections
→ energetic astrological synthesis
→ proof / provenance
```

Governing epistemic rules:

```text
graph ≠ reading
metric ≠ meaning
relation type ≠ generic connection
route count ≠ strength
compound testimony ≠ net score
symbolic-energy language ≠ measured physical energy
```

## Implemented structural substrate

- local birth date/time + latitude/longitude input;
- historical civil-time/time-zone resolution with DST ambiguity handling;
- Astronomy Engine 2.1.19 adapter for Sun through Pluto;
- independently calculated ASC and MC;
- planetary longitudinal velocity / retrograde state;
- geometric solar altitude and sect;
- tropical zodiac;
- Whole Sign houses;
- major aspects under an explicit orb policy;
- applying/separating when motion data exist;
- traditional domicile rulership;
- directed dispositor graph;
- Tarjan SCCs and terminal SCCs;
- all-house ruler routes;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- derivation/provenance ledger and derivation tree;
- Natal Field, Aspect Matrix, Flow Map, Lots/Sect, Research Lab, and Audit surfaces;
- automated integrity/boundary tests in GitHub Actions.

## Primitive condition

For Sun through Saturn the primitive engine independently computes domicile/adversity, sign-level exaltation/depression, standard/Dorothean triplicity, Egyptian bound, planetary sect family, in/out-of-sect relation, and Whole-Sign angular-triad class.

Every factor is independently represented and provenance-bearing. **No scalar planet-strength score is calculated.**

## Relational condition — v0.4.2

Machine-readable source lock:

```text
data/rules/hellenistic/relational-condition-v1.registry.json
```

Distinct layers remain separate:

```text
G_dispositor
G_reception
G_exchange
G_mutual_reception
G_overcoming
```

Current relation types include configured domicile reception, domicile exchange, a separately identified later-tradition mutual-reception compatibility label, right-hand overcoming, and right-hand-square domination/upon-the-tenth.

Dispositorship, reception, exchange, and overcoming never collapse into one generic astrological edge.

## Compound condition — v0.4.3

Machine-readable source lock:

```text
data/rules/hellenistic/compound-condition-v1.registry.json
```

Executable model:

```text
naf.condition.compound.hellenistic.v0.4.3
```

Implemented source-secure subset:

- bonification by benefic overcoming through superior trine/square;
- maltreatment by malefic superior square/domination;
- benefic sign-based trine testimony;
- malefic sign-based opposition testimony;
- degree-based seven-degree ray enclosure;
- intervention that can break enclosure;
- sect qualification of the acting benefic/malefic;
- reception qualification that may enhance bonification or mitigate maltreatment;
- mixed condition when bonification and maltreatment coexist.

Noetic Atlas does **not** average these into a hidden strength number. Independent testimonies remain inspectable.

Selected historically ambiguous variants remain explicitly deferred rather than guessed, including unresolved bodily/sign-containment enclosure variants and not-yet-source-locked adherence, engagement, striking-with-a-ray, and related compound testimonies.

## Reusable condition signatures

Categorical condition tokens continue to follow classical planets across views. Primitive and relational state remain visible without red/green compression or scalar scoring. Compound testimonies are presented as separate evidence objects rather than folded into a single token score.

## Graph analytics + explainable findings

### Classical dispositor graph

Implemented derivations include SCC condensation, terminal basin membership/fraction, route depth, upstream route capture, and the largest nonterminal path bottleneck.

For `NAF-CANON-0001` under traditional domicile rulership:

```text
terminal SCC: Mercury ↔ Venus
terminal basin: 7 / 7
Jupiter route depth: 3
Saturn route depth: 2
Mars route depth: 1
largest nonterminal route bottleneck: Mars
```

These are graph-derived facts conditional on the selected ruler model, not claims of psychological or spiritual primacy.

### Aspect graph

Current calculations include connected components, degree, local/mean clustering, normalized unweighted betweenness, articulation points, bridges, typed closed three-node motifs, Grand Trine/T-square/triple-conjunction templates, and an exact ≤1° subset.

## Resonance Field

The v0.4.1.3 Resonance Field remains preserved. Under Whole Sign houses it makes the chart-wide rotation between the optional modern natural-house sequence and the actual house-sign sequence explicit.

For the canonical Leo-rising chart:

```text
rotation: +4 signs / 120°
element preserved: 12 / 12
mode preserved: 0 / 12
phase character: element-preserving / mode-rotating
```

The natural-house overlay remains secondary and explicitly modern; it never replaces the actual Whole Sign or actual domicile ruler.

## House River

House River begins from lived Whole-Sign domains and traces their existing ruler routes into the traditional dispositor network.

For every planetary dispositor edge `e`:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

Band thickness therefore has a precise integer routing meaning. It does **not** mean soul power, fate, energetic intensity, or planet strength.

## Derivation Walker

The shared proof infrastructure is now versioned as:

```text
naf.integrity.derivation_walker.v0.4.3
```

It indexes deterministic, primitive, relational, compound, and House River proof objects. Every v0.4.3 compound testimony is born with a `derivation_ref`.

Visible proof can traverse:

```text
claim / testimony / relation / band
→ derivation object
→ rule ID + source
→ inputs / result
→ dependencies
→ deterministic proof where indexed
```

Missing legacy dependencies remain explicit; they are never fabricated.

## Energetic whole-chart synthesis

The preserved energetic synthesis remains downstream:

```text
archetypal current
→ actual sign
→ actual Whole Sign house
→ optional natural-house resonance
→ ruler / dispositor route
→ aspect geometry
→ graph architecture
→ traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life manifestation
→ soul/spirit inquiry
→ evidence / proof
```

Uranus, Neptune, and Pluto participate in modern/transpersonal interpretation while remaining outside classical Hellenistic dignity applicability. Ceres is supported as an interpretive minor body when a coordinate is supplied; the birth-time astronomy adapter does not automatically generate a validated Ceres coordinate.

Energy/current/field vocabulary is symbolic/phenomenological language, not experimentally established field physics.

## Public v0.4.3 hierarchy

```text
Existing Atlas        → all prior Structure/Analysis + Resonance + Relational work
Compound Condition    → independent compound testimonies
Compound Map          → condition-qualified compound relationships
Proof Walker          → compound-aware reversible derivation infrastructure
Source Boundary       → implemented versus deferred source reconstructions
```

Nothing in v0412c, v0413, or v042 is deleted.

## Current limitations

Still absent or intentionally blocked:

- automatic validated Ceres/small-body astronomy;
- complete Chiron/node/Lilith/Vertex/fixed-star birth-time support;
- complete independent cross-provider astronomy validation;
- deferred compound-condition variants described above;
- degree-based quadrant dynamic strength;
- graph null distributions;
- statistical motif enrichment;
- validated condition-weighted graph descriptors;
- full motif + condition field geometry;
- side-by-side rule-set comparison;
- complete normalization of all legacy derivation entries into the shared walker contract;
- Life Spectrum;
- production annual profections/zodiacal releasing;
- externally validated predictive interpretation.

## Next engineering sequence

```text
source-lock remaining compound variants where justified
condition-aware synthesis
motif + condition field geometry
side-by-side rule-set comparison
research graph nulls / multilayer baselines
validated extended-body astronomy where justified
v0.5 Life Spectrum
v0.6 traditional timing systems
v0.7 recurrence / Life Space research
```

## Tests

```bash
npm install
npm test
```

The standard suite includes kernel, integrity, condition registry, primitive condition, relational condition, compound condition, graph analytics, astrological analysis, energetic synthesis, house resonance, House River/Derivation Walker, all preserved UI contracts through v042, the v043 UI/public-entry contract, boundary geometry, timezone, and astronomy-adapter tests.

Serve locally:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/prototype/v043.html
```

## Design rules

1. Calculation before narration.
2. One chart state, many coordinated projections.
3. Structure before meaning.
4. Houses remain first-class life fields.
5. Ruler/dispositor pathways remain visible.
6. Relation types remain distinct.
7. Compound testimonies remain distinct.
8. A graph term is never the final interpretation.
9. No naked graph metric.
10. No opaque condition/strength score.
11. Route count is routing evidence, not energetic strength.
12. Show the work.
13. New relational/compound/flow objects are born with provenance and derivation references.
14. Never manufacture missing coordinates or false precision.
15. Ambiguity and unsupported states are data.
16. Traditions are explicit rule models, not hidden mixtures.
17. Graph fact and interpretation remain separately labeled.
18. A graph is an encoded model, not evidence that astrology is a physical network.
19. Do not call a graph feature rare/high/unusual without a defined baseline.
20. The wheel remains a useful reference and future HCI control.
21. AI consumes deterministic state; it does not replace it.
22. A failed hypothesis is an acceptable result.
23. Energetic language may be spiritually useful without being mislabeled as experimental physics.

## Documentation

Start with:

1. [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md)
2. [`docs/V043_COMPOUND_CONDITION.md`](docs/V043_COMPOUND_CONDITION.md)
3. [`docs/V042_RELATIONAL_CONDITION.md`](docs/V042_RELATIONAL_CONDITION.md)
4. [`docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)
5. [`docs/V0413_RESONANCE_FIELD.md`](docs/V0413_RESONANCE_FIELD.md)
6. [`docs/V0412_ENERGETIC_SYNTHESIS.md`](docs/V0412_ENERGETIC_SYNTHESIS.md)
7. [`docs/CONDITION_ENGINE_SPEC.md`](docs/CONDITION_ENGINE_SPEC.md)
8. [`docs/ROADMAP.md`](docs/ROADMAP.md)
9. [`docs/INDEX.md`](docs/INDEX.md)

Historical milestone docs remain historical records. Living docs must agree with the current release contract and implementation.
