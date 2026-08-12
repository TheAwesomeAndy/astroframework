# Noetic Atlas

**An auditable visual-analytics framework for astrological structure, topology, condition, energetic synthesis, graph analysis, and time.**

> **See the structure. Follow the flow. Understand the pattern. Show the work.**

Noetic Atlas is an experimental computational framework for representing astrology as a multilayer symbolic system rather than forcing every relationship into a single horoscope wheel. The underlying research framework is the **Noetic Atlas Framework (NAF)**.

The project has two linked goals:

1. build a useful public/professional instrument for exploring astrological structure, condition, interpretation, and timing;
2. build a research environment in which structural, interpretive, and temporal claims can be formulated, reproduced, compared with alternatives, and rejected when they fail.

## Current release

See [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md) for the canonical release contract.

**Current public release:** v0.4.1.2 — Energetic Whole-Chart Synthesis  
**Current browser surface:** `prototype/v0412c.html`  
**Deployed/default branch:** `main`

Current model identifiers:

```text
naf.interpretation.energetic_synthesis.v0.4.1.2
naf.interpretation.natural_house_overlay.modern.v1
naf.research.graph_analytics.v0.4.1
naf.condition.primitive.hellenistic.v0.4.0b
naf.condition.record.v0.4.0a
naf.analysis.v0.3.1
```

The root `index.html` redirects to the current v0412c wrapper. That wrapper embeds `prototype/index.html` as the graph-first visual core and reads its serialized chart state. It does not maintain a second chart calculator.

v0412c adds a resilient analysis bootstrap: an immediate loading state, automatic canonical specimen loading, chart-state resynchronization through `MutationObserver`, and explicit synthesis errors rather than a blank Analysis pane.

## Current architecture

```text
Civil input
→ time-zone / DST resolution
→ astronomy
→ deterministic astrological kernel
→ traditional integrity + lots
→ primitive condition
→ graph analytics / findings
→ energetic astrological synthesis
→ coordinated UI
→ proof / provenance
```

The governing epistemic rule is:

```text
graph ≠ reading
metric ≠ meaning
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
- Tarjan strongly connected components and terminal SCCs;
- all-house ruler routes;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- derivation/provenance ledger and derivation tree;
- interactive SVG Natal Field;
- computed Aspect Matrix;
- directed Flow Map with SCC and house-route inspection;
- automated integrity/boundary tests in GitHub Actions.

## Primitive condition

For Sun, Moon, Mercury, Venus, Mars, Jupiter, and Saturn, the condition engine independently computes:

- domicile;
- adversity/opposite domicile;
- sign-level exaltation;
- sign-level depression/fall;
- standard/Dorothean triplicity participation and active sect ruler;
- Egyptian bound/term under `[start,end)` degree conventions;
- planetary sect family;
- in-sect/out-of-sect relation;
- Whole-Sign angular-triad class.

Every factor is independently represented and provenance-bearing. **No scalar planet-strength score is calculated.**

## Graph analytics + explainable findings

### Classical dispositor functional graph

Current derivations include:

- SCC condensation;
- terminal basin membership and basin fraction;
- route depth to terminal SCC;
- upstream route capture;
- largest nonterminal path bottleneck.

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

Current calculations include:

- connected components;
- degree;
- local and mean clustering coefficient;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- closed three-node typed motifs;
- Grand Trine, T-square, and triple-conjunction templates;
- exact ≤1° edge subset.

### Cross-layer overlap

The first explicit multiplex comparison is:

```text
E_aspect ∩ E_dispositor
```

Layers remain separate. Noetic Atlas does not collapse aspect, rulership, condition, and interpretation into one opaque strength score.

## Energetic whole-chart synthesis

The current user-facing synthesis is:

```text
archetypal current
→ actual sign
→ actual Whole Sign house
→ optional modern natural-house resonance
→ sign ruler / dispositor route
→ aspect geometry
→ graph architecture
→ traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life manifestation
→ soul/spirit inquiry
→ evidence / proof
```

The actual sign and actual house remain primary. The twelve-letter/natural-house layer is optional and explicitly versioned as a modern correspondence model.

Uranus, Neptune, and Pluto participate in modern/transpersonal interpretation while remaining `not_applicable` to classical Hellenistic dignity rules.

Ceres is supported as an interpretive `minor_body` when a coordinate is supplied. The current birth-time astronomy adapter does **not** automatically generate a validated Ceres coordinate.

Energy/current/field vocabulary is symbolic/phenomenological language. It is not presented as experimentally established physical field mechanics.

## Public analysis hierarchy

The v0412c wrapper exposes:

```text
Energetic Analysis  → readable synthesis
Graph Findings      → structural claims
Metrics             → quantitative graph evidence
Condition           → classical rule-defined state
Integrity           → proof and provenance
```

A graph term is never the final interpretation.

## Current limitations

Still absent or intentionally blocked:

- automatic validated Ceres/small-body astronomy;
- Chiron, nodes, Lilith/apogee, Vertex, and fixed stars in the current birth-time adapter;
- complete independent cross-provider astronomy validation;
- reception/exchange graph;
- overcoming graph;
- bonification/maltreatment, enclosure, and selected mitigation;
- degree-based quadrant dynamic strength;
- graph null distributions;
- statistical motif enrichment;
- validated condition-weighted graph descriptors;
- Life Spectrum;
- production annual profections/zodiacal releasing;
- externally validated predictive interpretation model.

## Next engineering sequence

```text
v0.4.2  relational condition
v0.4.3  selected compound condition / condition-aware synthesis
research graph nulls and multilayer baselines
validated extended-body astronomy where justified
v0.5    Life Spectrum
v0.6    traditional timing systems
v0.7    recurrence / Life Space research
```

## Tests

```bash
npm install
npm test
```

The standard suite currently includes kernel, integrity, condition registry, primitive condition, graph analytics, astrological analysis, energetic synthesis, v041/v0411/v0412/v0412c UI contracts, geometry/boundary, timezone, and astronomy-adapter contract tests.

Serve locally:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/prototype/v0412c.html
```

## Design rules

1. Calculation before narration.
2. Structure before meaning.
3. Houses remain first-class life fields.
4. Ruler/dispositor pathways remain visible.
5. A graph term is never the final interpretation.
6. No naked graph metric.
7. No opaque condition/strength score.
8. Show the work.
9. Never manufacture missing coordinates or false precision.
10. Ambiguity and unsupported states are data.
11. Traditions are explicit rule models, not hidden mixtures.
12. Graph fact and interpretation remain separately labeled.
13. A graph is an encoded model, not evidence that astrology is a physical network.
14. Do not call a graph feature rare/high/unusual without a defined baseline.
15. The wheel remains a useful reference and future HCI control.
16. AI consumes deterministic state; it does not replace it.
17. A failed hypothesis is an acceptable result.
18. Energetic language may be spiritually useful without being mislabeled as experimental physics.

## Documentation

Start with:

1. [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md)
2. [`docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)
3. [`docs/V0412_ENERGETIC_SYNTHESIS.md`](docs/V0412_ENERGETIC_SYNTHESIS.md)
4. [`docs/V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](docs/V041_GRAPH_ANALYTICS_AND_FINDINGS.md)
5. [`docs/CONDITION_ENGINE_SPEC.md`](docs/CONDITION_ENGINE_SPEC.md)
6. [`docs/ROADMAP.md`](docs/ROADMAP.md)
7. [`docs/INDEX.md`](docs/INDEX.md)

Historical milestone docs are retained as historical records. Living docs must agree with the current release contract and implementation.
