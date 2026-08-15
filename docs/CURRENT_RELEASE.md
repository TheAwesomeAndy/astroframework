# Noetic Atlas — Current Release Contract

## Canonical status

Noetic Atlas v0.4.7 is now aligned across the framework and public product.

| Release axis | Current state |
|---|---|
| Framework / research implementation | **v0.4.7 — Formal Configurations & Astrological Hypergraphs** |
| Public product baseline | **v0.4.7 — productized** |
| Package version | `0.4.7` |
| Deployed branch | `main` |
| Authoritative shell | `prototype/v047.html` |
| Public root entry | `index.html` → `prototype/v047.html` |
| Public productization gate | **CLOSED** |
| Live browser gate | **PASS** |

The release law introduced during v0.4.7 remains permanent:

```text
merged implementation ≠ deployed usable feature
```

A future feature is not publicly released merely because code is on `main` or CI is green. Public release requires agreement among repository state, deterministic integrity tests, Pages deployment, and browser behavior.

## Frozen architectural laws

```text
one astronomical/chart state → many explicit models → many coordinated projections
```

```text
Operational ≠ Experimental ≠ Discovery
```

```text
Detection ≠ Unexpectedness ≠ Population Frequency ≠ Interpretation
```

No downstream layer may silently rewrite deterministic chart authority. No research result may silently rewrite the Operational model. No counterfactual result may be described as real-population rarity.

## Current product contract

One current shell exposes seven coordinated views:

```text
Chart · Reading · Resonance · Network · House Flow · Condition · Proof
```

and one aperture control:

```text
Personal | Research
```

Personal is the default and keeps the Operational model primary. Research reveals versioned Experimental/Discovery machinery without creating a second chart or calculator.

The current shell embeds exactly one deterministic core iframe. Historical versioned shells remain in the repository for regression/history but do not compete for root ownership.

## Bootstrap contract

The current shell implements:

```text
Loading → Ready | Empty | Error
```

`Ready` requires both bound chart JSON and a rendered Natal Field. The shell does not present a populated outer truth state beside an unexplained blank core graph.

Canonical bootstrap can load the regression specimen. A visible Empty/Error state is used when the core cannot produce a usable chart.

Any core reload or chart-state change invalidates attached null and hypergraph-null results and terminates an active Research worker before new derived state is accepted.

## Implemented framework lineage

```text
v0.3.x deterministic kernel / input / astronomy / lots
        ↓
v0.4.0 primitive condition
        ↓
v0.4.1 graph analytics / explainable findings / energetic synthesis / resonance
        ↓
v0.4.2 relational condition / House River / derivation walker
        ↓
v0.4.3 compound condition
        ↓
v0.4.4 auditable Reading / discovery expansion / model overlays
        ↓
v0.4.5 Operational | Experimental | Discovery regimes
        ↓
v0.4.6 Null Model Laboratory
        ↓
v0.4.7 Formal Configurations & Astrological Hypergraphs
        ↓
v0.4.7 Public Productization
```

The accepted v0.4.6 `research-lab-engine.mjs` remains versioned as v0.4.6 for reproducibility. v0.4.7 extends it through `research-lab-v047.mjs`; the product shell surfaces that wrapper rather than rewriting the historical engine.

## v0.4.6 — Null Model Laboratory

Named counterfactuals:

- `N_G` — geometric null;
- `N_L` — class-preserving identity/label permutation;
- `N_D` — degree-preserving aspect-network rewire;
- `N_T` — rulership/routing-codebook permutation.

Core statistical rules:

```text
p_hat = (1 + exceedance_count) / (B + 1)
```

Therefore:

- `p = 0` is impossible;
- empirical percentile/effect position is first-class;
- BH-FDR adjustment is applied within declared null-model families;
- no cross-null pass count exists;
- every null retains its own counterfactual question and limitations;
- null-negative results remain valid outputs.

A Discovery object may advance from `detected-no-baseline` to `null-tested`, while:

```text
population_frequency = unknown
interpretation = withheld
```

### Public Research exposure

Research mode exposes:

- iteration choices `199 / 999 / 4999 / 9999`;
- explicit deterministic seed;
- **Run null tests** control;
- Web Worker execution;
- simulation ledger;
- per-candidate null profiles;
- raw/adjusted p-values and percentiles;
- simulation-quality state.

The run is explicit-only and never starts automatically.

## v0.4.7 — Formal Configurations & Astrological Hypergraphs

Implemented hyperedge classes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

Initial k=3/k=4 typed registry:

- Grand Trine;
- T-Square;
- Yod;
- Grand Cross;
- Kite;
- Noetic Discovery template: T-Square Anchor Cluster.

Topological promotion includes closed Tarjan SCCs and terminal basin-capture sets. Compound hybrid objects couple independently derived geometry and routing without flattening the parent layers.

Every hyperedge includes participants/cardinality, geometric and/or topological metrics, a SHA-256 derivation hash, provenance, and compact research state:

```text
[D,V,B,P,I]
```

At deterministic detection:

```text
[1,1,0,0,0]
```

After all admissible named null comparisons complete:

```text
[1,1,1,0,0]
```

`P` and `I` remain zero because neither real-population frequency nor interpretation is supplied by this subsystem.

### Public Research exposure

The v0.4.7 shell shows for every detected hyperedge:

- hyperedge ID/class/label;
- participants and cardinality;
- geometric/topological metrics;
- derivation hash;
- `[D,V,B,P,I]`;
- explicit candidate-specific null rows after a run;
- `not-admissible` when a null is mathematically inappropriate;
- raw/adjusted p-values, empirical percentile, departure state, and simulation quality;
- population frequency `unknown`;
- interpretation `withheld`.

No universal hypergraph-strength or cross-null significance score exists.

## Canonical regression structures

The canonical fixture continues to require:

```text
Sun–Moon–Jupiter Grand Trine
Spirit-closed Kite
Venus–Mars / Uranus–Chiron T-Square Anchor Cluster
Mercury–Venus closed dispositor SCC
Mercury–Venus terminal basin
compound geometry × routing hyperedge
```

It also requires the negative result that Sun + Mercury alone is not a k≥3 hyperedge. Cardinality rules outrank desired narrative output.

## Live productization evidence

The release gate was closed only after all four release surfaces agreed:

```text
repository main
CI
GitHub Pages deployment
public browser behavior
```

Implementation was merged as commit:

```text
0a4b425755fd347e6a9824fe7881e056eab478b3
```

That commit passed the deterministic integrity suite and GitHub Pages reported a successful build from the same SHA.

A Chromium live-browser gate then exercised the deployed public site and passed the release checklist, including:

- root landing on `prototype/v047.html`;
- current v0.4.7 chrome;
- canonical bootstrap reaching Ready with a rendered Natal Field;
- all seven views opening;
- Personal hiding Research null/hypergraph controls;
- Research exposing canonical hyperedges;
- a real 199-iteration v0.4.6 + v0.4.7 null run completing in the browser;
- simulation ledger/null profiles appearing;
- Proof showing claim ceiling, population unknown, and interpretation withheld;
- core reload invalidating the previously attached null batch.

Permanent live regression:

```text
tests/v047_live_pages_smoke.mjs
.github/workflows/v047-live-pages.yml
```

## Research-status firewall

The broader research registry preserves independent states for:

```text
geometry
derivation
historical analogue
population frequency
null comparison
phenomenological association
replication
interpretation
```

No scalar confidence/strength/significance score may replace these distinct dimensions.

A counterfactual departure means only that an observed statistic departs from a named simulated reference under that model. It does not establish real natal prevalence, astrological validity, psychological association, causality, spirituality, or prediction.

## Claim ceiling

Allowed now:

- detected under named formal rules;
- derivationally verified;
- null-tested under named counterfactuals;
- empirical percentile within a simulated reference;
- departure/no-departure under a declared multiple-testing family;
- candidate for later population-level investigation.

Not allowed now:

- rare among people;
- population-enriched;
- validated astrological signature;
- predictive of phenotype/outcome;
- causal;
- spiritually proven;
- experimentally established physical astrology.

## Next dependency chain

The v0.4.7 Public Productization Gate is closed. v0.4.8 is therefore the next engineering milestone, but **no v0.4.8 implementation is part of this release**.

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

Life Spectrum / production timing remains later work.

## Documentation rule

Living documentation must describe both repository reality and public-surface reality. Historical milestone documents remain historical records.

The release law remains:

> **A merge to `main` is necessary but not sufficient for public release.**
