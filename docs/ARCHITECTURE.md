# Noetic Atlas Framework — Software Architecture

## 1. Architectural purpose

Noetic Atlas is designed so that a displayed claim can be traced backward through every layer that produced it.

Core rule:

> **Civil time, astronomy, astrological rules, graph derivation, condition, research descriptors, interpretation, visualization, and provenance are separate layers with explicit interfaces.**

No downstream layer may silently rewrite an upstream fact.

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Current public release: **v0.4.1.2**.  
Current browser surface: **`prototype/v0412c.html`**.  
Current minimum deterministic analysis envelope: **`naf.analysis.v0.3.1`**.

## 2. End-to-end system

```text
USER INPUT
local date/time + latitude/longitude
OR imported calculated placements
        ↓
CIVIL TIME
IANA zone + DST/history
src/time/
        ↓
ASTRONOMY
longitudes, velocities, ASC, MC, solar altitude
src/astronomy/
        ↓
GENERAL ASTROLOGICAL KERNEL
signs, Whole Sign houses, aspects, rulers, topology
src/kernel/noetic-kernel.mjs
        ↓
HELLENISTIC INTEGRITY / DERIVED POINTS
sect, seven Hermetic lots, provenance
src/kernel/hellenistic-integrity.mjs
        ↓
PRIMITIVE CONDITION
classical seven, independent factors
src/conditions/primitive-condition-engine.mjs
        ↓
GRAPH ANALYTICS
SCC condensation, basin/depth, aspect graph, motifs, overlap
src/research/graph-analytics-engine.mjs
        ↓
PATTERN / RESEARCH DESCRIPTORS
src/research/pattern-engine.mjs
        ↓
ASTROLOGICAL / ENERGETIC INTERPRETATION
src/interpretation/
        ↓
CURRENT BROWSER WRAPPER
prototype/v0412c.html
        ├── Energetic Analysis
        ├── Graph Findings
        ├── Metrics
        ├── Condition
        └── Integrity
        ↓
VISUAL CORE
prototype/index.html
Natal Field / Aspect Matrix / Flow Map / Lots / Audit
```

The wrapper reads serialized state from the visual core. It must not reimplement astronomy, aspect admission, house assignment, lot formulas, or graph topology merely to satisfy presentation needs.

## 3. Current browser architecture

The public root `index.html` redirects to:

```text
prototype/v0412c.html
```

v0412c embeds:

```text
prototype/index.html?build=v0412c-core
```

The wrapper exists to add the current analysis/condition/findings stack without destroying the mature graph-first visual core.

Operational requirements implemented by v0412c:

- immediate nonblank loading state;
- automatic canonical specimen bootstrap;
- read-only consumption of core JSON state;
- `MutationObserver` resynchronization when chart JSON/status changes;
- explicit synthesis bridge errors;
- continued availability of the core if interpretation fails;
- cache-busted public redirect.

The core remains the source of chart state. The wrapper is a downstream consumer.

## 4. Dependency direction

Allowed:

```text
pipeline → time
pipeline → astronomy
pipeline → kernel
integrity → kernel outputs
condition → deterministic analysis
research → deterministic analysis + condition
interpretation → analysis + graph + condition
visualization → canonical/output state
AI → structured state + provenance
```

Disallowed:

```text
astronomy → interpretation
kernel → UI DOM
UI → reimplemented aspect/lot/rulership formulas
interpretation → natal longitude
research metric → change a house or aspect
AI → invent missing ephemeris values
```

## 5. Civil-time architecture

Canonical birth input:

```json
{
  "local_datetime": "YYYY-MM-DDTHH:MM:SS",
  "latitude": 0.0,
  "longitude": 0.0,
  "elevation_m": 0,
  "timezone_override": null,
  "ambiguity_index": null
}
```

`src/time/` owns:

- approximate IANA zone lookup;
- expert override;
- historical UTC offset;
- repeated DST-time detection;
- nonexistent-time rejection;
- conversion to an unambiguous UTC instant;
- provenance for the resolution path.

Astronomy consumes resolved time, never ambiguous wall time.

## 6. Astronomy layer

Current provider: Astronomy Engine 2.1.19.

Current automatic birth-time support:

- Sun through Pluto;
- geocentric ecliptic longitude;
- longitudinal velocity / retrograde state;
- ASC;
- MC;
- geometric solar altitude.

Current unsupported automatic objects include:

- Ceres;
- Chiron;
- true/mean lunar node variants;
- Black Moon Lilith/apogee variants;
- Vertex;
- fixed stars.

Precomputed/imported coordinates may be consumed only through explicit supported input paths. Unsupported values are never fabricated.

## 7. General astrological kernel

`src/kernel/noetic-kernel.mjs` owns reusable geometry/topology:

- longitude normalization;
- chart parsing;
- sign conversion;
- Whole Sign house assignment;
- major-aspect geometry and orb policy;
- applying/separating when motion exists;
- traditional domicile ruler map;
- dispositor graph construction;
- Tarjan SCC detection;
- terminal SCC detection;
- house-ruler routes;
- element/modality composition.

It does not own psychological or spiritual prose.

## 8. Hellenistic integrity layer

`src/kernel/hellenistic-integrity.mjs` currently owns:

- sect;
- seven Paulus/Panaretus Hermetic lots;
- formula proof objects;
- version/completeness metadata;
- Derivation Ledger/tree enrichment.

Tradition variants must receive distinct rule/model identifiers rather than becoming hidden toggles.

## 9. Condition architecture

Current executable primitive condition:

```text
src/conditions/primitive-condition-engine.mjs
model = naf.condition.primitive.hellenistic.v0.4.0b
```

For the classical seven it computes separate records for:

- domicile;
- adversity;
- sign-level exaltation;
- sign-level depression/fall;
- triplicity;
- Egyptian bound;
- planetary sect family;
- in/out-of-sect relation;
- Whole-Sign angular-triad class.

Condition is multidimensional. It is not a single edge weight or opaque strength scalar.

Future relational layers:

```text
G_reception
G_exchange / mutual reception variant
G_overcoming
```

Future compound conditions consume already-computed primitive + relational facts.

## 10. Graph architecture

Noetic Atlas does not define one undifferentiated astrology graph.

### Dispositor graph

Directed:

```text
planet → traditional domicile ruler of occupied sign
```

For the classical seven under the current ruler model it is a functional digraph. The graph-analysis layer derives SCC condensation, terminal basins, route depth, upstream capture, and nonterminal path bottlenecks.

### Aspect graph

Undirected typed graph under the current major-aspect/orb policy. Current analytics include connected components, degree, clustering, normalized unweighted betweenness, articulation points, bridges, typed triangle motifs, and exact ≤1° subset.

### House dependency

Directed topical routing:

```text
house → ruler → ruler's dispositor → ...
```

### Lot layer

Lots retain formula provenance, longitude, house, ruler, aspects, and future timing relations.

### Multiplex intent

```text
G = {
  G_aspect,
  G_dispositor,
  G_house,
  G_lot,
  G_reception,
  G_overcoming,
  G_temporal(t)
}
```

Relation types remain separate unless a research method explicitly defines an aggregation and its consequences.

## 11. Graph-analysis layer

`src/research/graph-analytics-engine.mjs` produces deterministic graph-derived facts and explainable research objects.

Current graph facts may be mathematically exact while their astrological significance remains unvalidated.

Example:

```text
Mercury ↔ Venus is the terminal SCC of the selected classical dispositor graph
```

is graph-derived.

```text
therefore Mercury/Venus is the deepest psychological circuit
```

is an interpretive hypothesis and must remain separately labeled.

No `rare`, `high`, `dominant`, or `enriched` language is permitted without an explicit comparison/null model.

## 12. Interpretation architecture

Current files:

```text
src/interpretation/astrological-analysis-engine.mjs
src/interpretation/energetic-synthesis-engine.mjs
src/interpretation/energetic-synthesis-display.mjs
```

Current energetic model:

```text
naf.interpretation.energetic_synthesis.v0.4.1.2
```

Interpretation consumes:

- actual placement;
- actual Whole Sign house;
- ruler/dispositor path;
- aspects;
- graph facts;
- primitive condition where applicable;
- optional explicit modern natural-house overlay.

Outer planets participate in modern/transpersonal interpretation without inheriting classical Hellenistic dignity.

Ceres can participate when a supplied coordinate exists. Automatic Ceres astronomy is not yet implemented.

Energy/current/field language is stored as symbolic/interpretive, not astronomical or physical measurement.

## 13. Canonical analysis and derivation

Minimum deterministic envelope:

```text
schemas/naf-analysis-v0.3.1.schema.json
```

The interface version can advance without breaking this minimum envelope when newer layers are additive/downstream.

The Derivation Ledger provides a parallel audit path:

```text
input fact
→ astronomical computation
→ astrological rule
→ mathematical derivation
→ condition / graph finding
→ interpretation evidence
→ displayed statement
```

The architectural north star is reversible navigation in both directions.

## 14. Research architecture

`src/research/` is a read-only consumer of deterministic state.

Current research families include:

- circular harmonic spectrum;
- ruler-route convergence;
- multilayer participation;
- graph analytics/findings.

Research descriptors must state definition, scope, assumptions, status, and null-model plan. They may not mutate natal facts.

## 15. Temporal architecture — planned

Conceptually:

```text
N_i = natal geometry + topology + condition + metadata
T(t) = temporal input
X_i(t) = F(N_i, T(t), rule-set versions)
```

Life Spectrum is not implemented yet. Temporal interpretation must remain downstream from exact time-dependent astronomy/rules.

## 16. AI architecture

AI may:

- navigate;
- explain;
- compare;
- trace provenance;
- synthesize selected interpretation profiles;
- generate research hypotheses.

AI may not:

- invent astronomical values;
- hide unsupported states;
- silently choose historical variants;
- rewrite houses/aspects/condition;
- promote exploratory metrics into established meaning.

## 17. Completeness states

Every layer should distinguish at least:

```text
valid
ambiguous
unsupported
invalid
not_implemented
not_applicable
```

Unsupported is never encoded as numeric zero or false.

## 18. Privacy

Birth data and life-event annotations are sensitive.

Production principles:

- minimize data;
- explicit retention/deletion;
- encryption;
- separate identity/profile from chart/research records;
- explicit research consent;
- avoid raw birth data in analytics logs;
- no training on private chart/event text without explicit permission.

## 19. Extension policy

Before adding a feature, identify its owner layer.

Examples:

- Ceres longitude → astronomy adapter;
- domicile ruler → astrological rule;
- SCC → graph derivation;
- reception → relational condition;
- graph-null percentile → research;
- readable meaning → interpretation;
- card layout → presentation.

If ownership is unclear, document the decision before implementation.

## 20. Architectural north star

The mature system should allow:

```text
interpretation
→ evidence object
→ graph/condition finding
→ astrological rule
→ mathematical derivation
→ astronomical coordinate
→ civil-time resolution
→ original input
```

and forward again into alternative rule models or visualizations without silently changing the source facts.
