# Noetic Atlas Framework — Software Architecture

## 1. Architectural purpose

Noetic Atlas is designed so that a displayed claim can be traced backward through every layer that produced it.

Core rule:

> **Civil time, astronomy, astrological rules, graph derivation, condition, research descriptors, interpretation, visualization, and provenance are separate layers with explicit interfaces.**

No downstream layer may silently rewrite an upstream fact.

Frozen representation law:

```text
one chart state
→ many coordinated projections
```

A visualization is a projection of serialized state, not another calculator.

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).  
Current public release: **v0.4.2 — Relational Condition**.  
Current browser surface: **`prototype/v042.html`**.  
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
local classical condition factors
src/conditions/primitive-condition-engine.mjs
        ↓
RELATIONAL CONDITION
reception, exchange, overcoming, domination
src/conditions/relational-condition-engine.mjs
        ↓
CONDITION SYSTEM / SIGNATURES
src/conditions/condition-system.mjs
src/conditions/condition-signature.mjs
        ↓
GRAPH ANALYTICS
SCC condensation, basin/depth, aspect graph, motifs, overlap
src/research/graph-analytics-engine.mjs
        ↓
HOUSE RIVER / RESEARCH PROJECTIONS
src/research/house-river-engine.mjs
src/research/pattern-engine.mjs
        ↓
INTERPRETATION / RESONANCE
src/interpretation/
        ↓
DERIVATION INDEX / WALKER
src/integrity/derivation-walker.mjs
        ↓
CURRENT PUBLIC SHELL
prototype/v042.html
        ├── Existing Atlas
        ├── Qualified Resonance
        ├── Relations
        ├── Qualified Flow
        ├── House River
        └── Proof Walker
```

## 3. Preservation architecture

The public root `index.html` redirects to:

```text
prototype/v042.html
```

The current shell preserves the previous interfaces rather than replacing them:

```text
prototype/v042.html
└── prototype/v0413.html
    └── prototype/v0412c.html
        └── prototype/index.html
```

This means the v0.4.1.x wheel/core views, Natal Field, Aspect Matrix, Flow Map, Lots/Sect, Research Lab, Audit, energetic analysis, graph findings, metrics, condition, integrity, and Resonance Field remain available.

v042 reads the same nested core JSON state and attaches a `MutationObserver` so recalculation or imported chart state propagates into all new projections.

No v042 module reimplements birth astronomy, aspect admission, house assignment, lot formulas, or dispositor topology.

## 4. Dependency direction

Allowed:

```text
pipeline → time
pipeline → astronomy
pipeline → kernel
integrity → kernel outputs
primitive condition → deterministic analysis
relational condition → deterministic analysis + selected source-locked relation rules
condition signatures → primitive + relational condition
research → deterministic analysis + condition
House River → existing house routes / dispositor graph
interpretation → analysis + graph + condition
Derivation Walker → existing proof/ledger objects
visualization → canonical/output state
AI → structured state + provenance
```

Disallowed:

```text
astronomy → interpretation
kernel → UI DOM
UI → reimplemented aspect/lot/rulership formulas
relation view → mutate dispositor graph
House River width → become planet-strength score
interpretation → natal longitude
research metric → change a house or aspect
AI → invent missing ephemeris values or proof steps
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

`src/time/` owns approximate IANA zone lookup, expert override, historical UTC offset, repeated DST-time detection, nonexistent-time rejection, conversion to an unambiguous UTC instant, and provenance for the resolution path.

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

Current unsupported automatic objects include Ceres, Chiron, node variants, Black Moon Lilith/apogee variants, Vertex, and fixed stars.

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

It does not own psychological or spiritual prose, and v0.4.2 does not move relation doctrine into the kernel.

## 8. Hellenistic integrity layer

`src/kernel/hellenistic-integrity.mjs` owns sect, seven Paulus/Panaretus Hermetic lots, formula proof objects, version/completeness metadata, and Derivation Ledger/tree enrichment.

Tradition variants receive distinct rule/model identifiers rather than hidden toggles.

## 9. Condition architecture

### Primitive

```text
src/conditions/primitive-condition-engine.mjs
model = naf.condition.primitive.hellenistic.v0.4.0b
```

For the classical seven it computes separate records for domicile, adversity, sign-level exaltation/depression, triplicity, Egyptian bound, planetary sect family, in/out-of-sect relation, and Whole-Sign angular-triad class.

### Relational

```text
src/conditions/relational-condition-engine.mjs
model = naf.condition.relational.hellenistic.v0.4.2
registry = naf.rules.relational_condition.hellenistic.v0.4.2
```

Current typed relations:

```text
reception
exchange
mutual_reception compatibility label
overcoming
domination
```

Hellenistic exchange and later-tradition mutual-reception terminology remain separate rule IDs.

Reception, exchange, and overcoming qualify relationships; they do not alter the existing dispositor graph.

### Condition composition

```text
src/conditions/condition-system.mjs
model = naf.condition.system.v0.4.2
```

Combines primitive + relational state without flattening them.

### Condition signature

```text
src/conditions/condition-signature.mjs
model = naf.condition.signature.v0.4.2
```

Provides reusable categorical tokens for visual projections. No single edge weight or strength scalar is produced.

Future compound conditions consume already-computed primitive + relational facts.

## 10. Graph architecture

Noetic Atlas does not define one undifferentiated astrology graph.

### Dispositor graph

Directed:

```text
planet → traditional domicile ruler of occupied sign
```

For the classical seven it is a functional digraph. Graph analysis derives SCC condensation, terminal basins, route depth, upstream capture, and nonterminal path bottlenecks.

### Aspect graph

Undirected typed graph under the current major-aspect/orb policy. Current analytics include connected components, degree, clustering, normalized unweighted betweenness, articulation points, bridges, typed triangle motifs, and exact ≤1° subset.

### Relational-condition graphs

```text
G_reception       directed host → guest
G_exchange        undirected pair
G_mutual_reception separate compatibility pair
G_overcoming      directed superior → inferior
```

Domination is a typed overcoming relation for the right-hand square.

### House dependency

Directed topical routing:

```text
house → ruler → ruler's dispositor → ...
```

### House River

House River is a projection of the already-computed house routes. It does not calculate a new ruler graph.

For planetary routing edge `e`:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

Width is an integer route-count encoding only.

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
  G_exchange,
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

is interpretive and remains separately labeled.

No `rare`, `high`, `dominant`, or `enriched` language is permitted without an explicit comparison/null model.

## 12. House River architecture

```text
src/research/house-river-engine.mjs
model = naf.research.house_river.v0.4.2
```

House River consumes `analysis.topology.house_routes` and aggregates edge traversal counts. Source bands retain house number/topic/sign/entry ruler; planetary bands retain route count and contributing houses.

Every new band has a `derivation_ref` and derivation entry.

## 13. Interpretation and resonance architecture

Current files include:

```text
src/interpretation/astrological-analysis-engine.mjs
src/interpretation/energetic-synthesis-engine.mjs
src/interpretation/energetic-synthesis-display.mjs
src/interpretation/house-resonance-engine.mjs
```

Current models:

```text
naf.interpretation.energetic_synthesis.v0.4.1.2
naf.interpretation.house_resonance.v0.4.1.3
naf.interpretation.natural_house_overlay.modern.v1
```

Interpretation consumes actual placement, actual Whole Sign house, ruler/dispositor path, aspects, graph facts, condition, and optional explicit modern natural-house overlay.

v0.4.2 Qualified Resonance attaches the reusable condition signature to actual rulers and classical occupants. It does not alter the v0.4.1.3 house-resonance engine.

Outer planets participate in modern/transpersonal interpretation without inheriting classical Hellenistic condition. Ceres can participate when a supplied coordinate exists; automatic Ceres astronomy remains unimplemented.

Energy/current/field language remains symbolic/interpretive, not astronomical or physical measurement.

## 14. Derivation Walker

```text
src/integrity/derivation-walker.mjs
model = naf.integrity.derivation_walker.v0.4.2
```

The walker normalizes/indexes:

- deterministic analysis ledger;
- primitive condition ledger;
- relational condition ledger;
- House River derivations;
- future explicit proof objects.

Every v0.4.2 relation and House River band is born with a derivation reference.

Traversal is designed to move:

```text
visible claim / relation / band
→ proof object
→ rule/source
→ inputs/result
→ dependencies
→ deterministic coordinate/house/aspect/ruler proof where indexed
```

Legacy dependencies that have not yet been normalized are surfaced as `external_or_unindexed_dependency`, never fabricated.

## 15. Canonical analysis envelope

Minimum deterministic envelope:

```text
schemas/naf-analysis-v0.3.1.schema.json
```

The public interface can advance through additive downstream layers without breaking this minimum envelope.

## 16. Research architecture

`src/research/` is a read-only consumer of deterministic state.

Current research families include circular harmonic spectrum, ruler-route convergence, multilayer participation, graph analytics/findings, and House River route counts.

Research descriptors must state definition, scope, assumptions, status, and null-model plan. They may not mutate natal facts.

## 17. Temporal architecture — planned

Conceptually:

```text
N_i = natal geometry + topology + primitive condition + relational condition + resonance + metadata
T(t) = temporal input
X_i(t) = F(N_i, T(t), rule-set versions)
```

Life Spectrum is not implemented yet. Temporal interpretation remains downstream from exact time-dependent astronomy/rules.

## 18. AI architecture

AI may navigate, explain, compare, trace provenance, synthesize selected interpretation profiles, and generate research hypotheses.

AI may not invent astronomical values, hide unsupported states, silently choose historical variants, rewrite houses/aspects/condition, collapse relation types, invent proof dependencies, or promote exploratory metrics into established meaning.

## 19. Completeness states

Every layer should distinguish at least:

```text
valid
ambiguous
unsupported
invalid
not_implemented
not_applicable
indeterminate
```

Unsupported is never encoded as numeric zero or false.

## 20. Privacy

Birth data and life-event annotations are sensitive. Production principles include data minimization, explicit retention/deletion, encryption, separation of identity from chart/research records, explicit research consent, no raw birth data in analytics logs, and no training on private chart/event text without explicit permission.

## 21. Extension policy

Before adding a feature, identify its owner layer.

Examples:

- Ceres longitude → astronomy adapter;
- domicile ruler → kernel/rule substrate;
- SCC → graph derivation;
- reception → relational condition;
- condition signature → presentation projection of condition;
- House River count → graph-derived research projection;
- graph-null percentile → research;
- readable meaning → interpretation;
- card layout → presentation.

If ownership is unclear, document the decision before implementation.

## 22. Architectural north star

The mature system should allow:

```text
interpretation
→ evidence object
→ graph/condition/route finding
→ astrological rule
→ mathematical derivation
→ astronomical coordinate
→ civil-time resolution
→ original input
```

and forward again into alternative rule models or visualizations without silently changing source facts.
