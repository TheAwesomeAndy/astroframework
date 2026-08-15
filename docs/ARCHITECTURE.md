# Noetic Atlas Framework — Software Architecture

## 1. Architectural purpose

Noetic Atlas is designed so that a displayed claim can be traced backward through the layers that produced it.

Core rule:

> **Civil time, astronomy, astrological rules, condition, graph/hypergraph derivation, research comparison, interpretation, visualization, and provenance are separate layers with explicit interfaces.**

No downstream layer may silently rewrite an upstream fact.

Current release:

```text
framework baseline       v0.4.7
public product baseline  v0.4.7 (productized)
current shell            prototype/v047.html
root entry               index.html → prototype/v047.html
```

## 2. Frozen architecture

```text
one astronomical/chart state
→ many explicit models
→ many coordinated projections
```

Research separation:

```text
Operational ≠ Experimental ≠ Discovery
```

Epistemic separation:

```text
Detection ≠ Unexpectedness ≠ Population Frequency ≠ Interpretation
```

A view is a projection of serialized state, not another calculator.

## 3. End-to-end system

```text
USER INPUT
local civil date/time + location
OR explicitly imported placements
        ↓
CIVIL TIME
IANA zone + DST/history
        ↓
ASTRONOMY
longitudes, velocities, ASC, MC, solar altitude
        ↓
DETERMINISTIC ASTROLOGICAL KERNEL
signs, Whole Sign houses, aspects, rulers, topology
        ↓
HELLENISTIC INTEGRITY / DERIVED POINTS
sect, seven Hermetic lots, provenance
        ↓
PRIMITIVE CONDITION
        ↓
RELATIONAL CONDITION
        ↓
COMPOUND CONDITION
        ↓
GRAPH / HOUSE ROUTING
SCCs, basins, routes, House River, aspect analytics
        ↓
READING / INTERPRETATION PROJECTIONS
integrity-gated Operational synthesis
        ↓
RESEARCH REGIMES
Operational | Experimental | Discovery
        ↓
NULL MODEL LABORATORY v0.4.6
named counterfactual comparison
        ↓
FORMAL HYPERGRAPH LAYER v0.4.7
geometric + topological + hybrid hyperedges
        ↓
PROOF / PROVENANCE
        ↓
CURRENT SHELL
prototype/v047.html
```

## 4. Current browser architecture

The public shell contains exactly one iframe:

```text
prototype/v047.html
└── prototype/index.html  # deterministic chart authority
```

Historical shells remain regression/history artifacts and are not nested into the current product.

Seven views:

```text
Chart · Reading · Resonance · Network · House Flow · Condition · Proof
```

Aperture:

```text
Personal | Research
```

## 5. Dependency direction

Allowed:

```text
pipeline → time → astronomy → kernel
condition → deterministic analysis
research → deterministic analysis + condition + graph state
hypergraph → deterministic analysis + accepted topology
null evaluator → accepted research state
interpretation → deterministic evidence
visualization → computed objects
proof → existing derivations / ledgers
```

Disallowed:

```text
UI → reimplemented astrology formulas
UI → reimplemented null generators
UI → reimplemented hypergraph detector
interpretation → natal coordinate
research result → Operational mutation
route count → planet-strength score
artificial null percentile → real-population rarity
AI → invented ephemeris/proof dependency
```

## 6. Deterministic chart authority

`prototype/index.html` remains the browser calculator/state authority. It serializes chart state consumed by v047.

The core owns supported chart input, sign/house/aspect/ruler state, graph substrate, lots, and deterministic provenance. The public wrapper may change visual chrome to identify the core by subsystem role, but it does not alter calculation semantics.

## 7. Condition architecture

Condition remains multidimensional:

```text
primitive
relational
compound
```

No hidden net strength scalar is produced.

Relational types remain distinguishable from dispositorship. Compound testimonies remain independent evidence objects.

## 8. Graph architecture

Noetic Atlas does not define one undifferentiated astrology graph.

Current relation families include:

```text
G_aspect
G_dispositor
G_house
G_lot
G_reception
G_exchange
G_overcoming
```

House River projects existing house-ruler routes. Band width is an integer route count only.

## 9. Research-regime architecture

### Operational
Named reproducible astrological model used by Personal mode.

### Experimental
Named/versioned alternatives compared reversibly against Operational state.

### Discovery
Mathematically reproducible candidate structures. Detection precedes interpretation; null comparison precedes unexpectedness language; population frequency remains a separate later dimension.

## 10. Null Model Laboratory — v0.4.6

The laboratory is a research subsystem, not a UI algorithm.

Named nulls:

```text
N_G
N_L
N_D
N_T
```

The UI calls the accepted laboratory through a dedicated Web Worker. Each result retains model/metric identity, deterministic seed, simulation diagnostics, raw/adjusted p-values, empirical percentile/effect position, and limitations.

No cross-null aggregation is permitted.

## 11. Hypergraph architecture — v0.4.7

Higher-order objects are attributed hyperedges:

```text
geometric_polygon
topological_basin
compound_hybrid
```

Every hyperedge carries:

- participants/cardinality;
- geometric/topological metrics;
- derivation proof/hash;
- model identity;
- research status;
- optional null profile after explicit evaluation.

The incidence representation includes `H`, vertex degrees, and hyperedge cardinalities. Spectral/Laplacian work remains deferred.

## 12. Public Research worker

`prototype/v047-research-worker.mjs` is intentionally thin.

It invokes:

```text
runNullModelLaboratory(...)
runHypergraphNullLaboratory(...)
```

and returns the two existing research outputs to the UI.

The worker does not define new nulls, metrics, detectors, or interpretations.

## 13. Bootstrap / state consistency

Public shell state:

```text
Loading → Ready | Empty | Error
```

Ready requires valid deterministic JSON and a rendered Natal Field.

A chart/core state change increments the Research epoch, terminates an active worker, clears base and hypergraph null results, and rebuilds downstream projections. Stale research attachments cannot silently survive a new state.

## 14. Personal / Research projection boundary

Personal:

- Operational chart/reading/condition/routing/proof;
- no primary Monte Carlo controls/ledgers;
- no hypergraph research-status machinery as the main reading path.

Research:

- null controls and ledgers;
- Discovery candidates;
- formal hyperedges;
- candidate-specific null profiles;
- model/status/provenance metadata.

Both apertures consume the same deterministic chart authority.

## 15. Derivation / proof architecture

The mature direction remains reversible:

```text
visible claim
→ reading/research object
→ graph/hypergraph/condition result
→ rule/metric/null identity
→ derivation/proof object
→ astronomical/chart state
→ civil-time resolution
→ original input
```

Missing dependencies remain explicit; they are never fabricated.

## 16. Epistemic classes

At minimum distinguish:

```text
input
astronomical computation
astrological rule
graph/hypergraph mathematical derivation
research counterfactual result
interpretive inference
```

Interpretation may consume prior classes; it may not retroactively alter them.

## 17. Public release architecture

The v0.4.7 productization incident added a release layer to architecture itself.

A public milestone is complete only when:

```text
repository implementation
+ deterministic CI
+ authoritative current shell/root
+ coherent version chrome
+ Pages deployment
+ live browser verification
```

The v0.4.7 live gate is now permanent:

```text
tests/v047_live_pages_smoke.mjs
.github/workflows/v047-live-pages.yml
```

## 18. Privacy

Birth data and life-event annotations are sensitive. Production principles include data minimization, explicit retention/deletion, encryption where stored, separation of identity from research records, explicit research consent, and no private-text training without permission.

## 19. Current extension policy

Before adding a feature, identify its owner layer.

Examples:

```text
midpoint transform        → v0.4.8 hidden-geometry derivation
astronomical declination  → astronomy adapter
parallel detector         → hidden-geometry rule layer
alternative rulership     → v0.4.9 Experimental model
population prevalence     → v0.5.0 cohort layer
readable meaning          → interpretation
layout/card rendering     → presentation
```

If ownership is unclear, document the decision before implementation.

## 20. Next architecture milestone

The v0.4.7 public gate is closed. v0.4.8 Hidden Geometry is next, with no implementation included here.

Its architecture must preserve deterministic circular midpoint mathematics, trustworthy declination input, exact antiscia transforms, provenance, explicit missing-data states, and null-model applicability decisions before interpretation.
