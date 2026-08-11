# Noetic Atlas Framework — Software Architecture

## 1. Architectural purpose

The architecture of Noetic Atlas is a methodological constraint, not merely code organization.

The system is designed so that a user, astrologer, researcher, or engineer can trace a displayed result backward through every layer that produced it.

Core rule:

> **Civil time, astronomy, astrological rules, mathematical derivation, research descriptors, visualization, and interpretation are separate layers with explicit interfaces.**

No downstream layer may silently modify an upstream result.

Current public interface: **v0.3.2 Visual Observatory**.  
Current minimum analysis envelope: **`naf.analysis.v0.3.1`**.

---

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
houses, aspects, rulers, geometry, topology
src/kernel/noetic-kernel.mjs
        ↓
TRADITION-SPECIFIC RULES / INTEGRITY
sect, lots, provenance; later condition/timing
src/kernel/hellenistic-integrity.mjs
        ↓
CANONICAL ANALYSIS MODEL
        ├── graph/topology
        ├── derivation ledger/tree
        ├── validation/completeness
        └── version manifest
        ↓
+----------------------+----------------------+------------------+
| VISUAL OBSERVATORY   | RESEARCH LAB         | EXPORT / API     |
| Natal Field          | exploratory metrics  | structured JSON  |
| Aspect Matrix        | promotion-gated      | audit package    |
| Flow Map             |                      |                  |
| Sect & Lots          |                      |                  |
| Audit                |                      |                  |
+----------------------+----------------------+------------------+
        ↓
AI / HUMAN INTERPRETATION
strictly downstream
```

---

## 3. Dependency direction

Allowed:

```text
pipeline → time
pipeline → astronomy
pipeline → kernel
pipeline → tradition rules
research → canonical analysis
visualization → canonical analysis
AI → canonical analysis + provenance
```

Disallowed:

```text
astronomy → interpretation
kernel → UI DOM
UI → reimplemented aspect formula
research metric → rewrite natal longitude
visual style → change rule acceptance
AI → invent missing ephemeris values
```

A graph edge shown in the browser must be the same relationship object calculated by the kernel, not a visually convenient reimplementation.

---

## 4. Input and civil-time architecture

Canonical public birth input:

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

Responsibilities of `src/time/`:

- map coordinates to an approximate IANA time zone;
- allow expert override;
- resolve historical UTC offset;
- detect repeated DST times;
- reject nonexistent local times;
- return an unambiguous UTC instant or explicit ambiguity;
- preserve time-resolution provenance.

Astronomy consumes the resolved instant, not unresolved wall time.

---

## 5. Astronomy adapter layer

Directory:

```text
src/astronomy/
```

Current research adapter: Astronomy Engine.

Responsibilities:

- geocentric ecliptic longitude;
- longitudinal velocity / retrograde state;
- ASC;
- MC;
- geometric solar altitude;
- provider/convention metadata.

Current unsupported or incomplete areas remain explicit:

- Chiron;
- true/mean node variants;
- Black Moon Lilith/apogee variants;
- Vertex;
- fixed stars;
- completed independent cross-provider validation corpus.

A provider must not know about domicile rulership, lots, condition, house topics, or interpretation.

Required provider metadata should include:

```text
provider/version
license
coordinate frame
geocentric/topocentric convention
apparent/geometric convention
supported object definitions
precision/validation notes
```

See `ASTRONOMY_VALIDATION_PLAN.md`.

---

## 6. General astrological kernel

File:

```text
src/kernel/noetic-kernel.mjs
```

Current responsibilities:

- coordinate normalization;
- zodiac/sign conversion;
- chart-text/JSON parsing;
- Whole Sign house assignment;
- major-aspect calculation;
- orb-policy application;
- applying/separating phase from velocities;
- traditional domicile-ruler map;
- dispositor graph construction;
- Tarjan SCC detection;
- terminal-SCC detection;
- house-ruler routing;
- element/modality composition.

This module owns reusable geometry/topology, not historical interpretive prose.

---

## 7. Hellenistic integrity/rule layer

Current file:

```text
src/kernel/hellenistic-integrity.mjs
```

Current responsibilities:

- sect;
- seven Paulus/Panaretus Hermetic lots;
- formula proof objects;
- source/rule provenance;
- version manifest;
- completeness flags;
- derivation ledger/tree enrichment.

Planned v0.4 evolution should move condition rules toward source-controlled modules such as:

```text
src/rules/hellenistic/
  dignity.mjs
  triplicity.mjs
  bounds.mjs
  angularity.mjs
  reception.mjs
  overcoming.mjs
  bonification.mjs
```

Physical file organization may evolve, but rule IDs and provenance must remain stable enough for reconstruction.

---

## 8. Graph architecture

Noetic Atlas does not define one undifferentiated “astrology graph.”

Different semantics belong to distinct graph layers.

### Aspect graph

```text
G_aspect = (objects, admitted aspects)
```

Primarily geometrically undirected, with phase/directional metadata where defined.

### Dispositor graph

```text
planet → traditional domicile ruler of occupied sign
```

Directed.

### House dependency graph

```text
house → house ruler → ruler's dispositor → ...
```

Directed and useful for topical routing.

### Lot layer

A lot participates through:

- source formula objects;
- calculated longitude/house;
- ruler;
- accepted aspects;
- later timing relations.

### Future condition layer

Condition is not simply another edge weight. It includes node and relational state such as dignity, sect, angularity, reception, overcoming, and bonification/maltreatment.

### Future temporal layer

```text
G_temporal(t)
```

or equivalent activation structures where node/edge state changes through time.

### Multiplex view

Conceptually:

```text
G = {
  G_aspect,
  G_rulership,
  G_house,
  G_lot,
  G_condition,
  G_temporal(t)
}
```

Do not collapse layers unless an analysis explicitly defines why and how.

The multilayer formulation is a formal modeling strategy, not a claim that astrology is a physical network.

---

## 9. Graph algorithms and interpretation boundary

SCCs, path lengths, graph degree, component membership, and route convergence are mathematical properties of the selected encoded graph.

For example:

```text
Mercury ↔ Venus is a terminal SCC
```

can be a deterministic E3 graph result.

Statements such as:

```text
therefore this is the soul's primary processing circuit
```

belong downstream as interpretive hypotheses.

The code and UI must preserve this boundary.

---

## 10. Canonical analysis model

The current minimum envelope is defined by:

```text
schemas/naf-analysis-v0.3.1.schema.json
```

Major families include:

```json
{
  "schema_version": "naf.analysis.v0.3.1",
  "framework": {},
  "versions": {},
  "model": {},
  "angles": {},
  "objects": [],
  "aspects": [],
  "topology": {},
  "validation": {},
  "derivation_ledger": [],
  "derivation_tree": {},
  "completeness": {},
  "provenance": {}
}
```

Future condition/time blocks should be additive and explicitly versioned.

The interface version can advance independently of this minimum schema when presentation changes without altering the serialized contract.

---

## 11. Derivation architecture

The Derivation Ledger is a parallel audit structure over the calculation pipeline.

Conceptually:

```text
input fact
→ calculation/rule activity
→ derived fact
→ graph/research derivation
→ displayed result
```

The `derivation_tree` organizes dependencies for navigability.

Example lot chain:

```text
birth local time
→ UTC instant
→ Sun/Moon/ASC longitudes
→ sect
→ sect-specific lot formula direction
→ directed arc
→ lot longitude
→ Whole Sign house
→ lot ruler
```

Example topology chain:

```text
planet longitude
→ occupied sign
→ domicile ruler
→ dispositor edge
→ SCC algorithm
→ terminal-component classification
```

v0.3.2 begins linking selected graph objects back to audit context. Full click-through dependency navigation remains future UI work.

---

## 12. Visual Observatory architecture

Current browser entry point:

```text
prototype/index.html
```

v0.3.2 restores a graph-first UI while preserving the canonical analysis object as the only computational source.

Current coordinated views:

### Natal Field

- SVG node-link graph;
- computed aspect edges;
- edge width/opacity driven by explicit geometric values;
- selectable object layers;
- node-neighborhood isolation;
- dynamic motif controls;
- node/edge inspector;
- graph-linked audit context.

### Aspect Matrix

- exact pairwise relation inspection;
- synchronized selection with graph edges;
- complementary view for denser relation lookup.

### Flow Map

- directed dispositor topology;
- SCC/terminal-SCC highlighting;
- clickable house-ruler routes;
- route inspection.

### Sect & Lots

- sect state;
- Hermetic-lot formulas/proofs;
- lot nodes linked back to graph structure.

### Research Lab

- explicitly exploratory descriptors;
- no promotion into interpretation.

### Audit

- Derivation Ledger;
- serialized analysis model;
- version/completeness context.

Shared selection state should continue evolving so brushing/selection stays synchronized across views.

The UI must never contain a second calculation engine.

---

## 13. Why multiple visual representations are architectural

The multi-view design is not cosmetic.

Different graph tasks favor different representations. The project therefore keeps:

```text
node-link view → paths, neighborhoods, topology
matrix view    → pairwise lookup and dense comparison
```

The traditional wheel remains useful for angular geometry and should remain available as a reference/control view in later HCI evaluation.

See `CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md` for supporting visualization literature and claim boundaries.

---

## 14. Research module architecture

Directory:

```text
src/research/
```

Research descriptors are read-only consumers of canonical analysis state.

Current examples:

- circular harmonic spectrum;
- ruler-route convergence;
- multilayer participation.

Required descriptor behavior:

```text
formal definition
version
required inputs
completeness dependencies
status = exploratory unless promoted
null-model plan
provenance
```

The research layer may not mutate natal facts.

---

## 15. Condition architecture — next

v0.4 should represent condition as structured dimensions rather than one scalar.

Candidate node/relational state:

```text
domicile/exaltation/adversity
sect
triplicity
bound
angularity
reception
overcoming
bonification/maltreatment
mitigation
```

Each output requires:

- rule ID;
- tradition/variant;
- source reference;
- inputs;
- result;
- dependencies;
- ambiguity/unsupported state.

Only after this state stabilizes should the temporal layer use condition-sensitive activation logic.

---

## 16. Temporal architecture — planned

Conceptually:

```text
N_i = natal geometry + topology + condition
T(t) = transit/time-lord input
X_i(t) = F(N_i, T(t), versions)
```

Potential outputs:

```text
transit_events[]
station_events[]
profection_periods[]
releasing_periods[]
activation_series[target][t]
```

Every Life Spectrum marker/band must be traceable to source events or a named continuous function.

Natal targets should maintain stable visual identity through time; layouts should not randomly rearrange at each timestamp.

---

## 17. AI architecture

AI is a consumer of structured state and provenance.

It may provide:

- navigation;
- explanation;
- comparison;
- source synthesis;
- interpretive options;
- research-hypothesis generation.

It must not:

- invent ephemeris values;
- silently alter rule variants;
- hide unsupported states;
- promote exploratory metrics into established meaning;
- overwrite upstream calculations.

---

## 18. Versioning

Version independently where appropriate:

- framework;
- public UI;
- analysis schema;
- time-zone provider/data;
- astronomy provider;
- coordinate conventions;
- house model;
- aspect family;
- orb policy;
- rulership model;
- lot formula family;
- condition rules;
- temporal model;
- research descriptors;
- interpretation model/prompt.

A stored analysis should contain enough version metadata to reconstruct its supported claims.

---

## 19. Error and completeness states

Every layer should distinguish at least:

```text
valid
ambiguous
unsupported
invalid
not_implemented
```

Examples:

- repeated DST time → ambiguous;
- unsupported Chiron provider → unsupported;
- malformed latitude → invalid;
- condition engine before v0.4 → not_implemented.

Never encode unsupported as numeric zero or Boolean false.

---

## 20. Privacy architecture

Birth data and life-event annotations are sensitive.

Production should separate:

```text
identity/profile
chart computational data
consented research features
```

Principles:

- data minimization;
- explicit deletion;
- encryption;
- separate research consent;
- pseudonymous research IDs;
- avoid raw birth data in analytics logs;
- no training on private chart/event text without explicit permission.

---

## 21. Extension policy

When adding a feature, identify its owner layer first.

Examples:

- lunar-node longitude → astronomy;
- domicile ruler → astrological rule;
- SCC membership → graph derivation;
- reception → condition rule;
- transit heat-map color → visualization;
- “what does this mean?” → interpretation.

If ownership is unclear, document the decision before implementation.

---

## 22. Architectural north star

The system should eventually allow a user to click any displayed claim and move backward:

```text
interpretation
→ visualization selection
→ structural/temporal finding
→ astrological rule
→ mathematical derivation
→ astronomical coordinate
→ civil-time resolution
→ original input
```

and forward again into alternative visualizations or rule models without changing the underlying facts.

That reversible path is the architectural definition of Noetic Atlas integrity.
