# Noetic Atlas

**An auditable visual-analytics and research framework for formal astrological structure, topology, condition, higher-order configuration, counterfactual testing, interpretation, and provenance.**

> **See the structure. Follow the flow. Test the pattern. Show the work.**

Noetic Atlas treats an astrological chart as a multilayer symbolic system rather than forcing every relationship into one wheel or one prose reading. The underlying research framework is the **Noetic Atlas Framework (NAF)**.

The project has two linked purposes:

1. build a useful instrument for exploring chart geometry, houses, rulership, condition, configurations, readable synthesis, and proof;
2. build a research environment in which astrological structures can be formally defined, reproduced, compared against named counterfactuals, replicated, and rejected when they fail.

## Current state

See [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md) for the canonical release contract.

There are currently **two release axes that must not be conflated**:

| Axis | Current state |
|---|---|
| Framework / research implementation | **v0.4.7 — Formal Configurations & Astrological Hypergraphs** |
| `main` package identifier | `0.4.7-alpha.1` |
| Public browser product | **not yet packaged to v0.4.7** |
| Root public entry | currently redirects to `prototype/app.html?build=research-045` |
| Reachable null-lab shell | `prototype/v046.html` |
| v0.4.7 public shell | **not yet implemented** |

That distinction is intentional documentation truth, not release polish. v0.4.6 and v0.4.7 research code are merged, CI-green, and present on `main`, but the public application shell has not yet been advanced to expose the full Null Model Laboratory + Hypergraph research surface.

The packaging defect is tracked in [`docs/V047_PUBLIC_PRODUCTIZATION_GATE.md`](docs/V047_PUBLIC_PRODUCTIZATION_GATE.md). **v0.4.8 is blocked until that gate is green.**

## Frozen architectural laws

```text
one astronomical/chart state
→ many explicit models
→ many coordinated projections
```

```text
Operational ≠ Experimental ≠ Discovery
```

```text
Detection ≠ Unexpectedness ≠ Population Frequency ≠ Interpretation
```

A visualization, experiment, or interpretive layer does not get to recalculate or silently rewrite upstream chart facts.

## Current implemented stack

```text
Civil input
→ time-zone / DST resolution
→ astronomy
→ deterministic astrological kernel
→ Hellenistic integrity + sect + lots
→ primitive condition
→ relational condition
→ compound condition
→ graph analytics / House River / derivation
→ auditable Reading + interpretation projections
→ research-regime separation
→ v0.4.6 Null Model Laboratory
→ v0.4.7 Formal Configurations / Hypergraphs
→ proof / provenance
```

### Deterministic substrate

Implemented foundations include:

- local civil date/time + latitude/longitude input;
- IANA time-zone and DST ambiguity handling;
- Astronomy Engine 2.1.19 adapter for Sun through Pluto;
- ASC/MC, planetary longitudinal velocity, retrograde state, and solar altitude;
- tropical zodiac and Whole Sign houses;
- major aspects under a named orb policy;
- traditional domicile rulership;
- directed dispositor graph, Tarjan SCCs, terminal SCCs, and all-house ruler routes;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- primitive, relational, and source-secure compound condition;
- Derivation Ledger / Walker and proof-bearing downstream objects;
- graph analytics, House River, Resonance, Reading, and research projections.

Noetic Atlas does **not** emit a hidden scalar planet-strength score.

## Research regimes — v0.4.5

The research layer distinguishes three first-class regimes.

| Regime | Purpose | Contamination rule |
|---|---|---|
| Operational | reproducible techniques inside an explicitly named astrological model | experiments may not silently rewrite it |
| Experimental | named/versioned alternative models and hypotheses | results remain reversible deltas from Operational |
| Discovery | search for reproducible structures not assumed in advance | detection precedes naming; baseline precedes rarity language |

The research-status registry keeps independent dimensions for geometry, derivation, historical analogue, population frequency, null comparison, phenomenological association, replication, and interpretation. These dimensions are never collapsed into one confidence score.

## Null Model Laboratory — v0.4.6

v0.4.6 introduced the first statistical-inference subsystem.

Named counterfactuals:

- **N_G** — geometric randomization;
- **N_L** — class-preserving identity/label permutation;
- **N_D** — degree-preserving aspect-network rewire;
- **N_T** — rulership/routing-codebook permutation.

Every null states what it preserves, what it randomizes, what question it can answer, and what it cannot establish.

Finite Monte Carlo inference uses the +1 correction:

```text
p_hat = (1 + count(T_i >= T_obs)) / (B + 1)
```

so `p = 0` is impossible. Results retain raw and BH-FDR-adjusted p-values, family/rank metadata, empirical percentile/effect position, generator diagnostics, deterministic seeds, implementation/version identities, and distribution hashes.

Different nulls answer different questions. **There is no `3/4 nulls passed` score and no universal significance number.**

A Discovery candidate may advance to `null-tested` while population frequency remains unknown and interpretation remains withheld.

## Formal Configurations & Astrological Hypergraphs — v0.4.7

Standard graphs encode pairwise relations. v0.4.7 makes higher-order structures first-class attributed hyperedges.

Implemented classes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

Initial k=3 / k=4 configuration registry:

- Grand Trine;
- T-Square;
- Yod;
- Grand Cross;
- Kite;
- Noetic Discovery template: T-Square Anchor Cluster.

Topology is also elevated into hyperedges:

- closed dispositor SCCs;
- terminal basin-capture sets.

Hybrid objects couple verified geometry to independently derived routing while preserving the distinction between those layers.

Every hyperedge carries participant/cardinality data, geometric and/or topological metrics, an immutable SHA-256 derivation hash, provenance, and a compact research state. Hypergraph null evaluation reuses the accepted v0.4.6 counterfactual machinery.

Canonical regressions require, among other structures:

```text
Sun–Moon–Jupiter Grand Trine
Spirit-closed Kite
Venus–Mars / Uranus–Chiron T-Square Anchor Cluster
Mercury–Venus closed dispositor SCC
Mercury–Venus terminal basin
compound geometry × routing hyperedge
```

and explicitly reject a two-body Sun–Mercury copresence as a k≥3 hyperedge. Cardinality rules outrank desired narrative output.

Binary incidence matrix `H`, vertex degree `D_v`, and hyperedge cardinality `D_e` are implemented. Hypergraph-Laplacian eigenanalysis and k=5–6 libraries are deferred.

## Epistemic ceiling

The framework may currently establish statements such as:

- a typed structure was detected under a named rule/configuration policy;
- its derivation is reproducible;
- it occupies a given percentile under a named counterfactual;
- a departure or no-departure was observed under a declared FDR-controlled family.

It may **not** infer from those facts alone that a configuration is:

- rare among real people;
- a validated psychological or spiritual signature;
- predictive or causal;
- a measured physical energy field.

Population prevalence is deliberately unavailable until a real cohort/reference-distribution engine exists.

Energy/current/field vocabulary in interpretation remains symbolic or phenomenological unless separately supported by physical evidence.

## Personal and Research apertures

The product contract remains:

```text
Personal | Research
```

Personal keeps Operational material primary and hides Monte Carlo/research machinery by default. Research exposes model identities, candidates, null profiles, provenance, and experimental/discovery state without creating a second chart authority.

The current public shell does not yet expose the complete v0.4.7 research surface. That is the active release blocker.

## Immediate release gate

Before v0.4.8 begins, the public product must provide one authoritative current shell that:

1. preserves the seven coordinated views;
2. preserves `Personal | Research`;
3. exposes the v0.4.6 Null Model Laboratory in Research mode;
4. exposes v0.4.7 hyperedges and candidate-specific null profiles;
5. uses one coherent version label;
6. has deterministic loading/empty/error bootstrap states;
7. prevents a populated truth summary from coexisting with an uninitialized graph;
8. redirects the root entry to the true current shell;
9. preserves Personal-mode hiding of Monte Carlo data;
10. passes a public-surface regression before release is called productized.

See [`docs/V047_PUBLIC_PRODUCTIZATION_GATE.md`](docs/V047_PUBLIC_PRODUCTIZATION_GATE.md).

## Locked research dependency chain

```text
v0.4.6 Null Model Laboratory                         DONE
        ↓
v0.4.7 Formal Configurations & Astrological Hypergraphs DONE (implementation)
        ↓
PUBLIC PRODUCTIZATION GATE                           BLOCKING
        ↓
v0.4.8 Hidden Geometry Engine
        Midpoints · Declination/Parallels · Antiscia
        ↓
v0.4.9 Experimental Model Laboratory
        Ceres–Taurus · Alternative Rulership Tensors
        ↓
v0.5.0 Population Cohort Engine
        100k+ empirical reference distributions
```

Life Spectrum and production timing systems remain later work; v0.5.0 is now reserved for the Population Cohort Engine because population-frequency claims require an actual empirical reference layer.

## Tests

```bash
npm install
npm test
```

The current suite includes the historical kernel/condition/reading/UI contracts plus:

```text
v0.4.6 null model laboratory
v0.4.6 research lab integration
v0.4.7 formal hypergraph core
v0.4.7 hypergraph null integration
v0.4.7 research lab wrapper
```

Feature completion is not equivalent to public productization. Public entrypoint and shell behavior require their own release contract and regression coverage.

## Documentation

Start with:

1. [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md)
2. [`docs/V047_PUBLIC_PRODUCTIZATION_GATE.md`](docs/V047_PUBLIC_PRODUCTIZATION_GATE.md)
3. [`docs/V047_FORMAL_CONFIGURATIONS_HYPERGRAPHS.md`](docs/V047_FORMAL_CONFIGURATIONS_HYPERGRAPHS.md)
4. [`docs/V046_NULL_MODEL_LABORATORY.md`](docs/V046_NULL_MODEL_LABORATORY.md)
5. [`docs/RESEARCH_CONSTITUTION.md`](docs/RESEARCH_CONSTITUTION.md)
6. [`docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)
7. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
8. [`docs/ROADMAP.md`](docs/ROADMAP.md)
9. [`docs/INDEX.md`](docs/INDEX.md)

Historical milestone documents remain historical records. Living documents must describe repository and public-surface reality, even when that reality exposes an incomplete release.