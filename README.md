# Noetic Atlas

**An auditable visual-analytics and research framework for formal astrological structure, topology, condition, higher-order configuration, counterfactual testing, interpretation, and provenance.**

> **See the structure. Follow the flow. Test the pattern. Show the work.**

Noetic Atlas treats an astrological chart as a multilayer symbolic system rather than forcing every relation into one wheel or one prose reading. The underlying research framework is the **Noetic Atlas Framework (NAF)**.

The project has two linked purposes:

1. build a useful public instrument for exploring chart geometry, houses, rulership, condition, higher-order configuration, readable synthesis, and proof;
2. build a research environment in which structures can be formally defined, reproduced, compared against named counterfactuals, replicated, and rejected when they fail.

## Current release

See [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md) for the canonical contract.

| Release axis | Current state |
|---|---|
| Framework / research baseline | **v0.4.7 — Formal Configurations & Astrological Hypergraphs** |
| Public product baseline | **v0.4.7 — productized** |
| Package version | `0.4.7` |
| Authoritative shell | `prototype/v047.html` |
| Root entry | `index.html` → `prototype/v047.html` |
| Productization gate | **CLOSED** |
| Live browser verification | **PASS** |

The public product and framework baseline are now aligned. The distinction remains important as a permanent release law:

```text
merged implementation ≠ deployed usable feature
```

A future milestone is not publicly released until repository state, CI, Pages deployment, and browser behavior agree.

## Public application contract

The current application has one deterministic chart authority and seven coordinated views:

```text
Chart · Reading · Resonance · Network · House Flow · Condition · Proof
```

with one aperture switch:

```text
Personal | Research
```

Research is not an eighth chart and does not create a second calculator.

### Personal

Personal is the default aperture. It keeps the Operational model primary and conceals Monte Carlo controls, p-values, null-ledger tables, and formal hypergraph research machinery from the main reading path.

### Research

Research exposes the already accepted v0.4.6 and v0.4.7 machinery:

- explicit Null Model Laboratory controls;
- deterministic seed and iteration selection;
- Web Worker execution;
- Discovery candidate null profiles;
- formal hyperedges;
- candidate-specific hypergraph null profiles;
- research-status vectors;
- provenance and claim ceilings.

Null simulation is never automatic.

## Bootstrap contract

The current shell implements an explicit state machine:

```text
Loading
→ Ready
OR
→ Empty
OR
→ Error
```

The outer shell does not claim Ready until deterministic chart JSON is bound and the Natal Field is visibly rendered. Canonical bootstrap can load the regression specimen automatically; failures remain visible rather than silently producing a populated truth summary beside an empty graph.

A core reload or chart-state change terminates any running research worker and invalidates attached null/hypergraph results before new state is accepted.

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

A visualization, experiment, or interpretive layer may not recalculate or silently rewrite an upstream chart fact.

## Implemented stack

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
→ Operational / Experimental / Discovery separation
→ v0.4.6 Null Model Laboratory
→ v0.4.7 Formal Configurations / Hypergraphs
→ proof / provenance
```

### Deterministic substrate

Implemented foundations include:

- local civil date/time + latitude/longitude input;
- IANA time-zone and DST ambiguity handling;
- Astronomy Engine 2.1.19 adapter for Sun through Pluto;
- ASC/MC, longitudinal velocity, retrograde state, and solar altitude;
- tropical zodiac and Whole Sign houses;
- major aspects under a named orb policy;
- traditional domicile rulership;
- directed dispositor graph, Tarjan SCCs, terminal SCCs, and all-house ruler routes;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- primitive, relational, and source-secure compound condition;
- Derivation Ledger / Walker and proof-bearing downstream objects;
- graph analytics, House River, Resonance, Reading, and research projections.

Noetic Atlas does **not** emit an opaque scalar planet-strength score.

## Research regimes — v0.4.5

| Regime | Purpose | Contamination rule |
|---|---|---|
| Operational | reproducible techniques inside an explicitly named astrological model | experiments may not silently rewrite it |
| Experimental | named/versioned alternative models and hypotheses | results remain reversible deltas from Operational |
| Discovery | search for reproducible structures not assumed in advance | detection precedes naming; baseline precedes rarity language |

The research registry keeps independent states for geometry, derivation, historical analogue, population frequency, null comparison, phenomenological association, replication, and interpretation. These dimensions are never collapsed into one confidence score.

## Null Model Laboratory — v0.4.6

Named counterfactuals:

- **N_G** — geometric randomization;
- **N_L** — class-preserving identity/label permutation;
- **N_D** — degree-preserving aspect-network rewire;
- **N_T** — rulership/routing-codebook permutation.

Every null declares what it preserves, what it randomizes, what it can test, and what it cannot establish.

Finite Monte Carlo inference uses the +1 correction:

```text
p_hat = (1 + count(T_i >= T_obs)) / (B + 1)
```

so `p = 0` is impossible. Results retain raw and BH-FDR-adjusted p-values, empirical percentile/effect position, deterministic seeds, generator diagnostics, implementation identities, and distribution hashes.

Different nulls answer different questions. There is no cross-null pass count and no universal significance number.

## Formal Configurations & Astrological Hypergraphs — v0.4.7

Implemented hyperedge classes:

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

Topology is also elevated into formal hyperedges through closed dispositor SCCs and terminal basin-capture sets. Hybrid objects couple independently derived geometry and routing while preserving the distinction between those layers.

Every hyperedge carries participants/cardinality, geometric and/or topological metrics, a SHA-256 derivation hash, provenance, research status, and—after an explicit run—candidate-specific null rows.

Canonical regression includes:

```text
Sun–Moon–Jupiter Grand Trine
Spirit-closed Kite
Venus–Mars / Uranus–Chiron T-Square Anchor Cluster
Mercury–Venus closed dispositor SCC
Mercury–Venus terminal basin
compound geometry × routing hyperedge
```

and explicitly rejects Sun + Mercury alone as a k≥3 hyperedge. Formal cardinality outranks desired narrative output.

## Claim ceiling

The current framework may establish that a typed structure was detected under a named policy, its derivation is reproducible, and it occupies a stated position under a named simulated counterfactual.

It may **not** infer from that alone that a structure is:

- rare among real people;
- a validated psychological or spiritual signature;
- predictive or causal;
- a measured physical energy field.

Population frequency remains unknown until a real empirical cohort layer exists. Interpretation remains downstream and separately labeled.

## Live release verification

The v0.4.7 productization gate was closed only after the deployed Pages build was exercised with a headless Chromium browser against the public URL. The live smoke verifies:

- root routing to `prototype/v047.html`;
- v0.4.7 version chrome;
- Ready bootstrap with a rendered Natal Field;
- all seven views;
- Personal concealment of null/hypergraph research controls;
- Research exposure of canonical hyperedges;
- completion of a real 199-iteration v0.4.6 + v0.4.7 null run;
- Proof claim ceiling and withheld population/interpretation states;
- invalidation of attached null results after core reload.

The permanent regression lives in:

```text
tests/v047_live_pages_smoke.mjs
.github/workflows/v047-live-pages.yml
```

## Locked next dependency chain

The public productization gate is complete. The next research milestone is now unblocked, but no v0.4.8 implementation is included in this release.

```text
v0.4.6  Null Model Laboratory                         DONE
v0.4.7  Formal Configurations & Hypergraphs            DONE
         Public Productization Gate                    CLOSED
v0.4.8  Hidden Geometry Engine                         NEXT
         Midpoints · Declination/Parallels · Antiscia
v0.4.9  Experimental Model Laboratory
         Ceres–Taurus · Alternative Rulership Tensors
v0.5.0  Population Cohort Engine
         empirical natal reference distributions
```

Life Spectrum and production timing remain later work.

## Tests

```bash
npm install
npm test
```

The standard integrity suite covers historical kernel/condition/reading/UI contracts plus v0.4.6 null inference, v0.4.7 hypergraph detection/null evaluation, the v0.4.7 public shell contract, and the Research wrapper.

Live deployed behavior is separately exercised by the Pages browser gate.

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

Historical milestone documents remain historical records. Living documents must agree with repository state, Pages deployment, and the current public contract.
