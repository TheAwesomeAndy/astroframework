# Noetic Atlas — Development Roadmap

## Guiding principle

> **Do not visualize, weight, interpret, null-test, population-rank, or time-activate a layer that the framework cannot derive and audit.**

Canonical release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Frozen laws:

```text
one astronomical/chart state
→ many explicit models
→ many coordinated projections
```

```text
Detection ≠ Unexpectedness ≠ Population Frequency ≠ Interpretation
```

## Current position

Framework/research implementation is complete through **v0.4.7**.

The immediate blocker is not new theory. It is **public productization of the already-merged v0.4.6/v0.4.7 stack**.

```text
v0.4.6 Null Model Laboratory                         DONE
        ↓
v0.4.7 Formal Configurations & Astrological Hypergraphs DONE — implementation
        ↓
PUBLIC PRODUCTIZATION GATE                           BLOCKING
        ↓
v0.4.8 Hidden Geometry Engine                        NEXT
        ↓
v0.4.9 Experimental Model Laboratory
        ↓
v0.5.0 Population Cohort Engine
```

See [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

---

## v0.1 — Visual hypothesis

**Status: complete historical milestone**

Introduced Natal Field, Flow Map, Life Spectrum concepts, canonical specimen work, and the distinction between mathematical representation and physical claims.

## v0.2 — Natal Field instrument

**Status: complete historical milestone**

Delivered interactive Natal Field, node inspector, Aspect Matrix, house-ruler routing, composition views, and explicit model/method surfaces.

## v0.3.x — Deterministic kernel + input/astronomy foundation

**Status: complete foundation milestone**

Delivered chart parsing, civil-time input, IANA time-zone/DST handling, Astronomy Engine adapter, ASC/MC, planetary velocities, Whole Sign houses, major-aspect/orb policy, applying/separating where possible, traditional domicile rulers, dispositor topology, Tarjan SCCs, house routes, sect, seven Hermetic lots, derivation ledger/tree, tests, CI, and deterministic visual-core restoration.

## v0.4.0a/b — Condition ontology + primitive condition

**Status: complete**

Delivered source/model registries and multidimensional primitive condition for the classical seven.

No scalar planet-strength score.

## v0.4.1.x — Graph analytics, interpretation, resonance

**Status: complete**

Delivered graph analytics/findings, terminal basin/depth/bottleneck structure, aspect graph metrics, typed motifs, energetic whole-chart synthesis, outer-planet downstream interpretation, and the Resonance Field / natural-house comparison model.

## v0.4.2 — Relational Condition + House River

**Status: complete**

Delivered source-locked reception/exchange/overcoming families, reusable condition signatures, House River route counts, qualified relational projections, and Derivation Walker infrastructure.

## v0.4.3 — Compound Condition

**Status: complete**

Delivered the source-secure subset of compound testimonies including selected bonification, maltreatment, enclosure/intervention, sect qualification, reception qualification, mixed-state preservation, and proof/derivation integration.

Ambiguous historical variants remain deferred rather than guessed.

## v0.4.4 — Auditable Reading + expanded Discovery substrate

**Status: complete**

Delivered auditable Reading/Evidence Pack behavior, model overlays, multi-basin preservation, expanded aspect-family research projections, cross-layer Discovery candidates, and integrity boundaries that kept explanatory prose downstream from formal evidence.

## v0.4.5 — Research Regimes & Hypothesis Architecture

**Status: complete**

Delivered explicit first-class regimes:

```text
Operational
Experimental
Discovery
```

with hypothesis packs, reversible model comparisons, Discovery candidate registry, independent research-status dimensions, Personal/Research aperture, and contamination guards.

Research status includes independent fields for geometry, derivation, historical analogue, population frequency, null comparison, phenomenological association, replication, and interpretation.

## v0.4.6 — Null Model Laboratory

**Status: complete framework milestone; merged to `main`**

Delivered the first statistical-inference subsystem.

Named counterfactuals:

```text
N_G geometric randomization
N_L class-preserving identity/label permutation
N_D degree-preserving aspect-network rewire
N_T routing-codebook permutation
```

Core contract:

- explicit preserves/randomizes/question/limitations for every null;
- source-locked executable statistics;
- identical `T(C)` on observed and simulated state;
- finite Monte Carlo +1 correction;
- no p=0;
- empirical percentile/effect position;
- raw + BH-FDR-adjusted p-values;
- family/rank metadata;
- deterministic seeds and RNG identity;
- simulation-quality diagnostics;
- immutable experiment ledger;
- no cross-null pass count;
- null comparison advances only the null-comparison research dimension;
- population frequency remains unknown;
- interpretation remains withheld.

## v0.4.7 — Formal Configurations & Astrological Hypergraphs

**Status: complete framework milestone; merged to `main`; public shell not yet productized**

Delivered first-class higher-order structure.

Hyperedge classes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

Initial k=3/k=4 configuration registry:

- Grand Trine;
- T-Square;
- Yod;
- Grand Cross;
- Kite;
- T-Square Anchor Cluster.

Also delivered:

- closed Tarjan SCC hyperedges;
- terminal basin-capture hyperedges;
- compound aspect-routing hyperedges;
- immutable SHA-256 derivation hashes;
- candidate-specific null profiles using v0.4.6 machinery;
- compact `[D,V,B,P,I]` research state;
- binary incidence matrix and degree structures;
- canonical positive and negative regression cases;
- preservation of the accepted v0.4.6 research-lab artifact through a v0.4.7 wrapper.

Deferred:

- k=5–6 template library;
- hypergraph-Laplacian eigensystem;
- spectral clustering/connectivity claims.

---

# Immediate blocker — v0.4.7 Public Productization Gate

**Status: active / must close before v0.4.8**

Current defect:

```text
repository main = v0.4.7 implementation
root public app = v0.4.5 shell
v0.4.6 = side shell
v0.4.7 shell = absent
```

Required work:

1. create/promote one authoritative v0.4.7 shell;
2. preserve seven coordinated views;
3. preserve Personal | Research;
4. expose v0.4.6 Null Model Laboratory in Research mode;
5. expose v0.4.7 hyperedges + null profiles;
6. unify current-product version chrome;
7. distinguish current product version from historical subsystem/model versions;
8. harden loading/empty/error bootstrap;
9. prevent truth-state/graph desynchronization;
10. invalidate stale null/hypergraph state after chart changes;
11. point root `index.html` to the accepted current shell;
12. add a public Research-path UI regression;
13. deploy Pages and verify the real public behavior.

Only after this gate is green may documentation call v0.4.7 the public product baseline.

---

## v0.4.8 — Hidden Geometry Engine

**Status: next milestone, blocked until public productization gate closes**

Purpose: formalize important geometric relations that are not visible as ordinary longitude major-aspect edges.

Initial scope:

### Midpoints

- direct and indirect midpoint definitions;
- circular wrap-safe arithmetic;
- midpoint trees/chains where formally justified;
- explicit orb policies;
- derivation/provenance;
- sensitivity to object set and orb policy.

### Declination

- declination coordinates under explicit astronomical provider/convention;
- parallels;
- contraparallels;
- orb policy;
- distinction between ecliptic longitude geometry and equatorial geometry.

### Antiscia

- antiscia;
- contra-antiscia;
- exact transformation definitions;
- sign/degree derivation;
- proof objects;
- explicit tradition/source model identity.

Architectural requirement: hidden geometry must become first-class formal structure and may feed graphs/hypergraphs only through explicit provenance-bearing interfaces.

It must not be smuggled directly into interpretation.

## v0.4.9 — Experimental Model Laboratory

**Status: planned**

Purpose: generalize the current hypothesis architecture into an explicit experimental-model execution environment.

Initial targets:

- Ceres–Taurus hypothesis;
- alternative rulership tensors;
- alternative aspect/configuration policies;
- historically attested alternate rule models;
- named modern hypotheses.

Every experimental model must:

```text
name the control
name the hypothesis
produce reversible deltas
preserve Operational state
carry assumptions/provenance
support appropriate counterfactual comparison
```

No experimental result becomes Operational by default.

## v0.5.0 — Population Cohort Engine

**Status: planned; replaces the old v0.5 Life Spectrum slot**

Purpose: provide the first real empirical prevalence/reference-distribution layer.

Target scale:

```text
100k+ charts where data provenance and quality permit
```

Core requirements:

- cohort identity/version;
- birth-data provenance and consent/legal basis;
- astronomy-provider/version consistency;
- birth-time quality metadata;
- stratified/reference sampling;
- population frequency and uncertainty;
- matched-cohort logic where needed;
- multiple-testing handling;
- sensitivity to cohort construction;
- null-versus-population distinction;
- reproducible feature extraction;
- privacy/data-minimization architecture.

Only this milestone can generally advance:

```text
population_frequency: unknown
→ population_frequency: characterized
```

A population frequency still does not establish interpretation or causality.

---

## Parallel research tracks after v0.5.0

### Hypergraph spectral track

Potential work:

- normalized hypergraph Laplacian;
- eigenspectrum;
- multi-body connectivity/bottlenecks;
- spectral sensitivity under configuration policies;
- null/population baselines for spectral descriptors.

### Extended k-body configuration track

Potential k=5/k=6 typed configurations only after the object model and baselines remain stable.

### Timing / Life Spectrum track

Life Spectrum remains an important future product/research direction but is no longer the v0.5 milestone.

Future timing work may include:

- transit ephemeris;
- exact hits/stations;
- time-dependent activation;
- profections;
- zodiacal releasing;
- returns;
- recurring state motifs;
- event annotations;
- time-shift nulls;
- birth-time sensitivity.

Temporal research should consume the mature natal/research state rather than racing ahead of it.

### HCI validation

Compare the wheel, tables, graph views, House River, hyperedge inspectors, and null-profile displays on tasks such as:

- ruler-chain recovery;
- exact aspect lookup;
- multi-body configuration recognition;
- condition reconstruction;
- house-route tracing;
- distinction between detected and unexpected;
- evidence/proof recovery.

## Governing release standard

> **A feature is not finished when code exists. It is finished when its formal definition, implementation, tests, provenance, release documentation, and intended public surface agree.**

And the product standard remains:

> **If a feature merely makes astrology look interesting, it does not belong. If it exposes a structural or experiential question that becomes easier to inspect, reproduce, compare, or test, it may belong.**