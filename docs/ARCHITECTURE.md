# Noetic Atlas Framework — Software Architecture

## 1. Architectural purpose

Noetic Atlas is designed so that a displayed claim can be traced backward through the layers that produced it.

Core rule:

> **Civil time, astronomy, astrological rules, condition, graph/hypergraph derivation, research inference, interpretation, visualization, and provenance are separate layers with explicit interfaces.**

No downstream layer may silently rewrite an upstream fact.

Frozen representation law:

```text
one astronomical/chart state
→ many explicit models
→ many coordinated projections
```

Current framework baseline: **v0.4.7 — Formal Configurations & Astrological Hypergraphs**.

Current public browser product: **not yet packaged to v0.4.7**. The root still reaches the v0.4.5 shell. See [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md) and [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

## 2. End-to-end system

```text
USER INPUT
local date/time + latitude/longitude
or imported calculated placements
        ↓
CIVIL TIME
IANA zone + DST/history
src/time/
        ↓
ASTRONOMY
longitudes, velocities, ASC, MC, solar altitude
src/astronomy/
        ↓
DETERMINISTIC ASTROLOGICAL KERNEL
signs, Whole Sign houses, major aspects, rulers, topology
src/kernel/noetic-kernel.mjs
        ↓
HELLENISTIC INTEGRITY / DERIVED POINTS
sect, seven Hermetic lots, provenance
src/kernel/hellenistic-integrity.mjs
        ↓
CONDITION SYSTEM
primitive → relational → compound
src/conditions/
        ↓
GRAPH / ROUTING DERIVATION
dispositor topology, aspect graph, House River, findings
src/research/graph-analytics-engine.mjs
src/research/house-river-engine.mjs
        ↓
OPERATIONAL READING / INTERPRETIVE PROJECTIONS
src/interpretation/
        ↓
RESEARCH REGIME BOUNDARY
Operational | Experimental | Discovery
src/research/research-regime-registry.mjs
        ↓
NULL MODEL LABORATORY v0.4.6
N_G · N_L · N_D · N_T
src/research/null-*.mjs
        ↓
FORMAL HYPERGRAPH LAYER v0.4.7
geometric_polygon · topological_basin · compound_hybrid
src/research/hypergraph-engine.mjs
src/research/hypergraph-null-evaluator.mjs
        ↓
RESEARCH LAB WRAPPER v0.4.7
src/research/research-lab-v047.mjs
        ↓
DERIVATION / PROOF
src/integrity/
        ↓
PUBLIC APPLICATION SHELL
currently stale at v0.4.5; v0.4.7 shell pending
```

## 3. Authority and dependency direction

Allowed:

```text
pipeline → time
pipeline → astronomy
pipeline → kernel
integrity → kernel outputs
condition → deterministic analysis
research graph derivation → deterministic analysis + condition
null laboratory → frozen research state + named metrics/null generators
hypergraph → deterministic geometry/topology
hypergraph null evaluator → hyperedges + accepted v0.4.6 inference machinery
interpretation → analysis + condition + research facts
visualization → serialized state / explicit research result
AI → structured state + provenance
```

Disallowed:

```text
astronomy → interpretation
kernel → UI DOM
UI → reimplemented aspect/lot/rulership formulas
Experimental → mutate Operational facts
Discovery → silently become Operational
null result → become population prevalence
counterfactual percentile → become psychological/spiritual meaning
hypergraph detector → invent missing participants
interpretation → rewrite coordinates/houses/aspects
AI → invent missing ephemeris values or proof steps
```

## 4. Deterministic substrate

### Civil time

`src/time/` owns local civil input, approximate IANA zone lookup, expert override, historical offset resolution, repeated/nonexistent DST handling, UTC conversion, and provenance.

Astronomy consumes an unambiguous UTC instant.

### Astronomy

Current provider: Astronomy Engine 2.1.19.

Current automatic support:

- Sun through Pluto;
- geocentric ecliptic longitude;
- longitudinal velocity / retrograde state;
- ASC;
- MC;
- geometric solar altitude.

Automatic validated coordinates for Ceres, Chiron, node variants, Lilith/apogee variants, Vertex, and fixed stars remain outside the present provider contract unless explicitly supplied through supported import paths.

### Kernel

`src/kernel/noetic-kernel.mjs` owns:

- longitude normalization;
- chart parsing;
- sign conversion;
- Whole Sign house assignment;
- major-aspect geometry and orb policy;
- applying/separating where motion exists;
- traditional domicile rulership;
- dispositor graph construction;
- Tarjan SCC / terminal SCC;
- house-ruler routes;
- element/modality composition.

It does not own psychological, spiritual, or research-significance claims.

### Hellenistic integrity

`src/kernel/hellenistic-integrity.mjs` owns sect, seven Paulus/Panaretus Hermetic lots, formula proof objects, completeness metadata, and deterministic ledger/tree enrichment.

## 5. Condition architecture

Noetic Atlas keeps condition multidimensional.

```text
primitive
→ relational
→ compound
```

Primitive condition covers local classical factors. Relational condition covers typed reception/exchange/overcoming families. Compound condition composes source-secure higher-order testimonies such as selected bonification, maltreatment, and enclosure rules.

No condition layer emits a hidden universal planet-strength scalar.

Dispositorship, reception, exchange, mutual-reception compatibility, overcoming, domination, and compound testimony remain distinct typed objects.

## 6. Graph architecture

Noetic Atlas does not define one undifferentiated astrology graph.

### Classical dispositor graph

Directed:

```text
planet → traditional domicile ruler of occupied sign
```

Derived properties include SCC condensation, terminal basins, route depth, upstream capture, and nonterminal bottlenecks.

### Aspect graph

Undirected typed graph under the current major-aspect/orb policy. Analytics include components, degree, clustering, betweenness, articulation points, bridges, typed motifs, and exact-edge subsets.

### Relational graphs

Examples:

```text
G_reception
G_exchange
G_mutual_reception
G_overcoming
```

These qualify relationships without silently replacing dispositorship.

### House River

House River projects already-computed Whole-Sign house-ruler routes into route-count bands.

For dispositor edge `e`:

```text
w(e) = number of house-ruler paths traversing e
```

Width means routing count only.

## 7. Research-regime architecture — v0.4.5

Three regimes are first-class:

```text
Operational
Experimental
Discovery
```

Operational is the reproducible control model. Experimental models are named reversible alternatives. Discovery contains reproducible structures whose meaning is not assumed in advance.

The registry preserves independent research-status dimensions rather than collapsing them into one confidence score.

Personal mode exposes Operational material by default. Research mode opens the aperture to Experimental/Discovery information without creating a second chart.

## 8. Null Model Laboratory architecture — v0.4.6

The Null Model Laboratory is an explicit-run research subsystem.

Core modules:

```text
src/research/null-state.mjs
src/research/null-metric-registry.mjs
src/research/null-model-registry.mjs
src/research/null-model-laboratory.mjs
src/research/null-model-worker.mjs
```

Named nulls:

```text
N_G geometric
N_L label/identity permutation
N_D degree-preserving topology rewire
N_T routing-codebook permutation
```

Every null declares preserves/randomizes/question/assumptions/limitations/admissible metrics.

The same source-locked executable statistic `T(C)` is applied to observed and simulated state.

Finite Monte Carlo uses +1 correction; multiple testing uses BH-FDR per declared null family; empirical percentile/effect position is retained; deterministic seed/RNG/version/hash metadata is stored; p=0 and cross-null pass counts are forbidden.

A null result may advance only the null-comparison/baseline status. Population frequency and interpretation remain unchanged.

## 9. Hypergraph architecture — v0.4.7

Pairwise graphs cannot represent a k-body structure as one first-class object. v0.4.7 therefore introduces attributed hyperedges.

Classes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

Initial geometric registry is deliberately k=3 / k=4:

```text
Grand Trine
T-Square
Yod
Grand Cross
Kite
T-Square Anchor Cluster
```

Topological hyperedges promote:

- closed classical dispositor SCCs;
- terminal basin-capture sets.

Compound hybrid hyperedges couple independently derived geometry and routing while preserving both parent models in provenance.

Every hyperedge contains participants, cardinality, metrics, derivation object, SHA-256 derivation hash, research status, and null-profile readiness.

The engine rejects under-cardinality expectations rather than satisfying desired narratives.

### Incidence representation

Implemented deterministic outputs:

```text
H   binary incidence matrix
D_v vertex-degree structure
D_e hyperedge-cardinality structure
```

Hypergraph-Laplacian eigensystems are explicitly deferred.

## 10. Hypergraph null integration

`src/research/hypergraph-null-evaluator.mjs` reuses the v0.4.6 RNG/statistical contract.

Not every null is admissible for every hyperedge. An inapplicable counterfactual is represented as `not-admissible`, not forced into a four-number score.

Examples:

- pure geometry primarily uses geometric/identity counterfactuals;
- routing objects use routing-relevant counterfactuals;
- compound hybrids can additionally use degree-preserving and routing-codebook tests where semantically justified.

Research-state progression is limited to baseline/null completion. Population frequency and interpretation cannot advance in v0.4.7.

## 11. Version-preservation architecture

The accepted v0.4.6 `research-lab-engine.mjs` remains v0.4.6. v0.4.7 adds `research-lab-v047.mjs` as a wrapper.

This preserves the historical executable contract:

```text
v0.4.6 research lab
        ↓ extended by
v0.4.7 hypergraph research surface
```

A newer version does not have permission to falsify the provenance of an accepted older model simply to make version labels aesthetically uniform.

## 12. Interpretation boundary

Interpretation remains downstream.

A useful read order is:

```text
archetypal current
→ actual sign
→ actual Whole Sign house
→ actual ruler / dispositor route
→ aspect geometry
→ condition
→ graph/hypergraph structure
→ optional explicit modern overlays
→ readable interpretive hypothesis
→ proof
```

Graph/hypergraph terms are not the final interpretation. Energy/current/field language remains symbolic/phenomenological unless separately supported as physical measurement.

## 13. Provenance architecture

The mature reversible path is:

```text
interpretation
→ evidence object
→ hyperedge / graph / condition / route fact
→ null experiment where applicable
→ source-locked metric + named counterfactual
→ astrological rule
→ mathematical derivation
→ astronomical coordinate
→ civil-time resolution
→ original input
```

Unsupported or unindexed states remain explicit; they are never fabricated.

## 14. Public application architecture — current defect

The intended product contract is:

```text
Chart · Reading · Resonance · Network · House Flow · Condition · Proof
Personal | Research
```

But the root public entry still reaches the v0.4.5 shell, `prototype/v046.html` is a side surface, and there is no v0.4.7 shell exposing hypergraphs.

This means the current architecture is **implemented below the presentation boundary but incomplete at the product boundary**.

The remediation contract is frozen in [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

## 15. Bootstrap architecture requirement

The current application must use an explicit initialization state machine:

```text
loading
→ ready
OR empty
OR error
```

A populated truth summary may not be presented as coherent current state while the graph or derived research layers are still unattached.

Changing chart state invalidates stale attached null/hypergraph research results before new ones are calculated.

## 16. Completeness states

Every layer should distinguish at least:

```text
valid
ambiguous
unsupported
invalid
not_implemented
not_applicable
indeterminate
not_admissible
```

Unsupported is never encoded as zero or false.

## 17. Extension policy

Before adding a feature, identify its owner layer.

Examples:

```text
Ceres longitude                  → astronomy adapter
midpoint / antiscia              → hidden-geometry research engine
parallel/contraparallel          → declination geometry
alternative rulership tensor    → Experimental model laboratory
SCC / basin                      → graph/hypergraph derivation
counterfactual percentile        → inference research layer
population prevalence            → future cohort engine
readable meaning                 → interpretation
card layout                      → presentation
```

If ownership is unclear, document the decision before implementation.

## 18. Locked next dependency chain

```text
v0.4.6 Null Model Laboratory                         DONE
v0.4.7 Formal Configurations & Hypergraphs            DONE — implementation
PUBLIC PRODUCTIZATION GATE                            BLOCKING
v0.4.8 Hidden Geometry Engine                         NEXT
v0.4.9 Experimental Model Laboratory                  LATER
v0.5.0 Population Cohort Engine                       LATER
```

No population-frequency field may become authoritative before the cohort engine exists.

## 19. Architectural north star

Noetic Atlas should allow movement backward and forward across evidence without losing model identity:

```text
input
↔ astronomy
↔ astrological rule state
↔ graph / hypergraph structure
↔ named counterfactual comparison
↔ research status
↔ interpretation
↔ coordinated visualization
```

The system should make both positive and negative results inspectable, and it must remain possible for the instrument to disagree with its creators' expectations.