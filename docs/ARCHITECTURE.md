# Noetic Atlas Framework — Software Architecture

## 1. Architectural purpose

The architecture of Noetic Atlas is a methodological constraint, not merely code organization.

The system is designed so that a user, astrologer, researcher, or engineer can trace a displayed conclusion backward through every layer that produced it.

The core rule is:

> **Astronomy, astrological rules, mathematical derivation, exploratory research, visualization, and interpretation are separate layers with explicit interfaces.**

No downstream layer may silently modify an upstream result.

---

## 2. End-to-end system

```text
┌────────────────────────────────────┐
│ USER INPUT                         │
│ local date/time + lat/lon          │
│ OR imported calculated chart       │
└─────────────────┬──────────────────┘
                  │
                  v
┌────────────────────────────────────┐
│ CIVIL TIME                         │
│ IANA zone + DST/history            │
│ src/time/                          │
└─────────────────┬──────────────────┘
                  │
                  v
┌────────────────────────────────────┐
│ ASTRONOMY                          │
│ longitudes, velocities, ASC, MC,   │
│ solar altitude                     │
│ src/astronomy/                     │
└─────────────────┬──────────────────┘
                  │
                  v
┌────────────────────────────────────┐
│ ASTROLOGICAL KERNEL                │
│ houses, aspects, rulers, geometry  │
│ src/kernel/noetic-kernel.mjs       │
└─────────────────┬──────────────────┘
                  │
                  v
┌────────────────────────────────────┐
│ TRADITION-SPECIFIC RULES           │
│ sect, lots, later dignity/timing   │
│ src/kernel/hellenistic-integrity   │
└─────────────────┬──────────────────┘
                  │
        ┌─────────┴───────────┐
        v                     v
┌───────────────────┐  ┌─────────────────────┐
│ GRAPH / TOPOLOGY  │  │ DERIVATION LEDGER   │
│ routes, SCCs      │  │ formulas/provenance │
└─────────┬─────────┘  └──────────┬──────────┘
          │                       │
          └──────────┬────────────┘
                     v
┌────────────────────────────────────┐
│ CANONICAL ANALYSIS MODEL           │
└──────────────┬─────────────────────┘
               │
      ┌────────┼───────────┐
      v        v           v
┌──────────┐ ┌──────────┐ ┌──────────────┐
│ RESEARCH │ │ VISUAL   │ │ EXPORT / API │
│ metrics  │ │ STATE    │ │ structured   │
└────┬─────┘ └────┬─────┘ └──────────────┘
     │            │
     └──────┬─────┘
            v
┌────────────────────────────────────┐
│ AI / HUMAN INTERPRETATION          │
│ strictly downstream                │
└────────────────────────────────────┘
```

---

## 3. Dependency direction

Dependencies should flow downward through the architecture.

Allowed examples:

```text
pipeline → time
pipeline → astronomy
pipeline → kernel
pipeline → tradition rules
research → canonical analysis
visualization → canonical analysis
AI → canonical analysis + provenance
```

Disallowed examples:

```text
astronomy → interpretation
kernel → UI DOM
UI → reimplemented aspect formula
research metric → rewrite natal longitude
AI → provide missing ephemeris value
```

Circular architectural dependencies should be treated as defects unless explicitly justified.

---

## 4. Input architecture

### 4.1 Public birth-data input

Canonical public contract:

```json
{
  "local_datetime": "1984-10-03T21:17:00",
  "latitude": 40.789,
  "longitude": -73.135,
  "elevation_m": 0,
  "timezone_override": null,
  "ambiguity_index": null
}
```

The public layer intentionally accepts local civil time because that is what users normally know.

It does **not** send local wall time directly to astronomy.

### 4.2 Calculated-chart input

Supported transitional formats:

- pasted placement text;
- canonical JSON.

The parser normalizes coordinates and treats imported aspects/houses as reference information where appropriate.

The kernel recomputes the structures it is capable of deriving.

---

## 5. Civil-time layer

Directory:

```text
src/time/
```

Responsibilities:

- map latitude/longitude to IANA zone;
- allow expert zone override;
- resolve historical UTC offset;
- detect repeated DST times;
- reject nonexistent civil times;
- return an unambiguous UTC timestamp or explicit ambiguity.

Output should include provenance such as:

```json
{
  "timezone": "America/New_York",
  "local_datetime": "...",
  "utc_datetime": "...Z",
  "offset_minutes": -240,
  "lookup_provider": "...",
  "lookup_version": "...",
  "ambiguity": null
}
```

Astronomy must consume the resolved instant, not the unresolved local time.

---

## 6. Astronomy adapter layer

Directory:

```text
src/astronomy/
```

The current research adapter is Astronomy Engine–based.

### Provider interface responsibilities

Return only astronomical/observer quantities:

- geocentric ecliptic longitude;
- velocity / retrograde state;
- ASC;
- MC;
- geometric solar altitude;
- provider metadata.

A provider should not know about:

- domicile rulership;
- sect interpretation;
- lots;
- dignity;
- house topics;
- AI text.

### Required provider provenance

```text
provider name
provider version
license
coordinate frame
apparent/geometric convention
geocentric/topocentric convention
supported objects
unsupported objects
precision/validation notes
```

The adapter boundary exists so another provider, including a commercial Swiss Ephemeris implementation, can later be cross-validated without rewriting the astrological kernel.

---

## 7. General astrological kernel

File:

```text
src/kernel/noetic-kernel.mjs
```

Current responsibilities:

- coordinate normalization;
- sign conversion;
- chart-text/JSON parsing;
- whole-sign house assignment;
- major aspect calculation;
- orb policy application;
- phase calculation from velocities;
- traditional ruler map;
- dispositor graph construction;
- Tarjan SCC detection;
- terminal SCC detection;
- house-ruler routing;
- element/modality composition.

### Design constraint

Keep this module focused on reusable geometry/topology.

A historical technique with multiple source variants should normally live in a tradition-specific module rather than being buried in general helpers.

---

## 8. Hellenistic integrity/rule layer

File:

```text
src/kernel/hellenistic-integrity.mjs
```

Current responsibilities:

- sect;
- Paulus/Panaretus Hermetic lots;
- detailed formula proof objects;
- derivation-ledger enrichment.

Expected future expansion:

```text
sect membership/condition
essential dignity
triplicity rulers
bounds/terms
reception
overcoming
bonification/maltreatment
annual profections
zodiacal releasing
```

Each technique should have its own rule/version identifiers even if implemented in the same physical module initially.

As complexity grows, split this into:

```text
src/rules/hellenistic/
  sect.mjs
  lots.mjs
  dignity.mjs
  reception.mjs
  condition.mjs
  profections.mjs
  zodiacal-releasing.mjs
```

---

## 9. Graph architecture

Noetic Atlas should not use one undifferentiated “astrology graph.”

Different semantics require distinct graph layers.

### 9.1 Aspect graph

```text
nodes = selected astrological objects
edges = aspects admitted by selected aspect/orb policy
```

Usually geometrically undirected, with directional metadata when a tradition supplies it.

### 9.2 Dispositor graph

```text
planet → ruler of occupied sign
```

Directed.

### 9.3 House dependency graph

```text
house → sign ruler → planet → dispositor route
```

Directed and useful for topical routing.

### 9.4 Lot graph

A lot can connect to:

- source formula points;
- its sign ruler;
- aspects;
- timing regimes.

### 9.5 Future temporal graph

Time-varying graph:

```text
G(t)
```

where edge/node activation can vary with transits and timing systems.

### 9.6 Future multiplex model

A more complete representation may be a multiplex graph:

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

Do not collapse layers until an analysis explicitly requires a combined representation.

---

## 10. Hypergraph/motif architecture

Some astrological structures are inherently multi-node.

Examples:

- grand trine;
- T-square;
- grand cross;
- yod;
- multi-planet stellium structures.

Representing them only as independent edges can lose configuration identity.

Future architecture may use:

- motif objects;
- hyperedges;
- graph pattern instances.

A motif object should preserve the edge policy that caused it to be detected.

---

## 11. Canonical analysis model

The exact JSON schema is still evolving, but conceptually the analysis object should separate raw, derived, and interpretive layers.

Suggested target:

```json
{
  "schema_version": "...",
  "framework_version": "...",
  "input": {},
  "civil_time": {},
  "astronomy": {
    "provider": {},
    "objects": [],
    "angles": {}
  },
  "models": {
    "zodiac": "tropical",
    "houses": "whole_sign",
    "rulership": "traditional_domicile",
    "sect": "...",
    "lots": "...",
    "aspects": "...",
    "orb_policy": "..."
  },
  "placements": [],
  "aspects": [],
  "lots": [],
  "topology": {},
  "condition": {},
  "research": {},
  "derivation_ledger": [],
  "validation": {},
  "interpretation": null
}
```

Interpretation should remain optional and downstream.

---

## 12. Derivation Ledger architecture

The Derivation Ledger is a parallel audit graph over the calculation pipeline.

Conceptually:

```text
input facts
   ↓
derivation node
   ↓
derived fact
   ↓
derivation node
   ↓
further derived fact
```

A future implementation may explicitly represent dependencies between ledger entries so the UI can show a calculation tree.

Example:

```text
birth local time
→ UTC conversion
→ Sun longitude
→ sect determination
→ Spirit formula direction
→ directed arc
→ Spirit longitude
→ Spirit whole-sign house
→ Spirit ruler
```

A master astrologer should be able to inspect this path without reading source code.

---

## 13. Research module architecture

Directory:

```text
src/research/
```

Research descriptors are read-only consumers of canonical analysis state.

They may compute:

- graph metrics;
- harmonics;
- recurrence;
- similarity;
- feature vectors;
- null-model comparisons.

They may not mutate natal calculations.

Recommended future descriptor interface:

```js
{
  id,
  version,
  status: 'experimental',
  required_inputs,
  compute(analysis, options),
  null_model,
  provenance
}
```

This makes research features discoverable and testable without mixing them into traditional rules.

---

## 14. Visualization architecture

Current prototypes are intentionally simple.

The production visualization layer should consume the canonical model and shared UI selection state.

Shared selection example:

```json
{
  "selected_objects": [],
  "selected_houses": [],
  "selected_lots": [],
  "aspect_filter": {},
  "tradition": "hellenistic",
  "time_window": null,
  "focus_path": []
}
```

Views:

- Natal Field;
- Aspect Matrix;
- Flow Map;
- Derivation/Audit view;
- future Life Spectrum;
- future Life Space.

Brushing/selection should synchronize across views.

The UI should never contain a second implementation of a calculation.

---

## 15. AI architecture

AI is a consumer of canonical structured state.

Input to AI should include:

- user question;
- selected chart/period;
- computed objects/relations;
- provenance entries;
- selected tradition(s);
- allowed interpretation sources.

AI output can include:

```text
view action
calculation explanation
traditional interpretation
cross-model comparison
research hypothesis
```

The response should be capable of identifying which statements are calculation versus interpretation.

The LLM must not be responsible for ephemeris or rule calculations that already have deterministic implementations.

---

## 16. Temporal architecture — planned

Future temporal state:

```text
N = natal structural kernel
u(t) = astronomical/transit environment
τ(t) = timing-system state
X(t) = F(N, u(t), τ(t))
```

This is a computational representation, not an assertion of physical causality.

Potential temporal outputs:

```text
transit_events[]
station_events[]
profection_periods[]
releasing_periods[]
activation_series[target][t]
```

Every Life Spectrum pixel/band must be traceable to source events or a named continuous scoring function.

---

## 17. State-space architecture — planned

Do not build a state-space embedding until feature semantics are stable.

Candidate block structure:

```text
x(t) = [
  geometry_block,
  aspect_activation_block,
  house_activation_block,
  ruler_block,
  condition_block,
  lot_block,
  timing_block
]
```

Each block requires its own normalization policy.

Dimensionality reduction parameters, random seeds, preprocessing, and model versions must be preserved in provenance.

---

## 18. Versioning

Version independently:

- framework;
- canonical schema;
- time-zone provider/data;
- astronomy provider;
- coordinate conventions;
- house model;
- aspect family;
- orb policy;
- tradition rules;
- lots variant;
- condition model;
- research descriptor;
- temporal activation model;
- visualization grammar;
- interpretation prompts/models.

A conclusion should eventually be reproducible from stored version metadata alone.

---

## 19. Privacy architecture

Birth data and life-event annotations must be treated as sensitive product data.

Production design should separate:

```text
identity/profile database
from
chart computational data
from
consented research features
```

Recommended principles:

- minimum retention;
- explicit user deletion;
- encryption;
- separate research consent;
- pseudonymous research IDs;
- no training on private chart text without explicit permission;
- avoid exposing raw birth data in analytics logs.

---

## 20. Error handling

Every layer should distinguish:

```text
valid
ambiguous
unsupported
invalid
```

Examples:

- repeated local DST time → ambiguous;
- missing provider support for Chiron → unsupported;
- malformed latitude → invalid;
- sect near exact horizon → valid calculation + ambiguity warning.

Do not represent unsupported as zero or false.

---

## 21. Extension policy

When adding a feature, ask which architectural layer owns it.

Examples:

- lunar node longitude → astronomy;
- node domicile ruler (if a model defines one) → rule layer;
- node betweenness centrality → graph/research layer;
- “what does this mean?” → interpretation layer;
- transit heat-map color → visualization layer.

If ownership is unclear, document the decision before implementation.

---

## 22. Architectural north star

The system should eventually allow a user to click any claim and move backward:

```text
interpretation
→ structural finding
→ astrological rule
→ mathematical calculation
→ astronomical coordinate
→ civil-time resolution
→ original input
```

That reverse path is the architectural definition of Noetic Atlas integrity.
