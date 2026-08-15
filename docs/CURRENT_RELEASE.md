# Noetic Atlas — Current Release Contract

## Canonical status

Noetic Atlas currently has a **framework implementation baseline** that is ahead of its **public product surface**. These are separate release axes and must be reported separately.

| Release axis | Current state |
|---|---|
| Framework / research implementation | **v0.4.7 — Formal Configurations & Astrological Hypergraphs** |
| Package implementation identifier | `0.4.7-alpha.1` |
| Deployed branch | `main` |
| Public Pages source | `main` repository root |
| Public root entry | currently redirects to `prototype/app.html?build=research-045` |
| Root-visible product version | effectively **v0.4.5** |
| Reachable v0.4.6 shell | `prototype/v046.html` |
| v0.4.7 shell | **not implemented** |
| Release-packaging status | **BLOCKED / incomplete** |

Therefore the correct statement is:

> **v0.4.7 is the current computational and research baseline on `main`; the public browser instrument has not yet been productized to v0.4.7.**

The public productization gate is specified in [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

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

No downstream layer may silently rewrite the deterministic chart authority. No research result may silently rewrite the Operational model. No counterfactual result may be described as real-population rarity.

## Implemented framework stack

The current `main` branch contains the complete lineage through v0.4.7:

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
```

The accepted v0.4.6 `research-lab-engine.mjs` remains versioned as v0.4.6 for reproducibility. v0.4.7 extends it through `research-lab-v047.mjs` rather than rewriting the accepted artifact.

## Current coordinated product contract

The intended current application architecture remains seven coordinated views with a research aperture:

```text
Chart · Reading · Resonance · Network · House Flow · Condition · Proof

Personal | Research
```

Research is an aperture, not an eighth chart or a second calculator.

However, the browser entrypoint currently lands on the v0.4.5 shell. The v0.4.7 implementation is therefore **not yet a complete public release** under the product definition.

## v0.4.6 — Null Model Laboratory

v0.4.6 is merged and part of the framework baseline.

Named counterfactuals:

- `N_G` geometric null;
- `N_L` class-preserving label/identity permutation;
- `N_D` degree-preserving aspect-network rewire;
- `N_T` rulership/routing-codebook permutation.

Core statistical rules:

```text
p_hat = (1 + exceedance_count) / (B + 1)
```

- p=0 is impossible;
- empirical percentile/effect position is first-class;
- BH-FDR adjustment is applied within declared null-model families;
- no cross-null pass count exists;
- each null preserves its own explicit counterfactual meaning;
- a failed/null-negative result remains informative.

A candidate can advance from `detected-no-baseline` to `null-tested`, while:

```text
population_frequency = unknown
interpretation = withheld
```

## v0.4.7 — Formal Configurations & Astrological Hypergraphs

v0.4.7 is merged and CI-green as the current implementation baseline.

Implemented hyperedge classes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

Initial k=3 / k=4 typed registry:

- Grand Trine;
- T-Square;
- Yod;
- Grand Cross;
- Kite;
- Noetic Discovery template: T-Square Anchor Cluster.

Topological promotion includes closed Tarjan SCCs and terminal basin-capture sets. Hybrid objects couple independently derived geometry and routing without collapsing the layers.

Every hyperedge is provenance-bearing and includes an immutable SHA-256 derivation hash. Candidate-specific null profiles reuse v0.4.6 inference. A completed baseline comparison advances only the baseline/null-comparison dimension.

Compact hyperedge status:

```text
[D,V,B,P,I]
```

At detection:

```text
[1,1,0,0,0]
```

After all admissible named null comparisons complete:

```text
[1,1,1,0,0]
```

`P` and `I` remain zero because population frequency and interpretation are not implemented at this layer.

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

No single confidence/strength/significance score may replace this vector.

A counterfactual departure means only that the observed statistic departs from a named simulated reference under that model. It does not establish prevalence in real natal charts, astrological validity, psychological association, causality, spirituality, or prediction.

## Public-surface defect

The following are current release blockers:

1. root `index.html` still identifies/routes the current application as v0.4.5;
2. no `prototype/v047.html` exists;
3. `prototype/v046.html` remains labeled as a candidate even though v0.4.6 is merged;
4. the outer shell, inner core, and repository version labels disagree;
5. canonical bootstrap can expose transient empty/partially attached chart state;
6. no public shell exposes both the v0.4.6 null laboratory and v0.4.7 hypergraph objects/null profiles;
7. multiple historical shells remain reachable without one authoritative current-app redirect.

These facts are not documentation trivia. They mean the research framework is ahead of the public product.

## Release-completion gate

v0.4.7 becomes a fully productized public release only after all of the following are true:

- one authoritative current shell exists;
- root redirects to it;
- the seven views remain available;
- Personal/Research aperture remains intact;
- Research mode exposes v0.4.6 null controls and v0.4.7 hyperedges/null profiles;
- Personal mode hides Monte Carlo details;
- version chrome is coherent;
- bootstrap has explicit loading/empty/error states;
- chart/truth/graph state cannot visibly desynchronize;
- Research-path UI tests exercise hyperedge detection → null run → status transition;
- Pages deploys the exact accepted commit successfully.

See [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

## Locked next dependency chain

No v0.4.8 design/implementation should outrun the release gate above.

```text
v0.4.6  Null Model Laboratory                         DONE
v0.4.7  Formal Configurations & Hypergraphs            DONE — implementation
         Public Productization Gate                    BLOCKING
v0.4.8  Hidden Geometry Engine                         NEXT AFTER GATE
         Midpoints · Declination/Parallels · Antiscia
v0.4.9  Experimental Model Laboratory
         Ceres–Taurus · Alternative Rulership Tensors
v0.5.0  Population Cohort Engine
         100k+ empirical reference distributions
```

Life Spectrum / production timing is deferred beyond this locked dependency chain rather than occupying v0.5.0.

## Claim ceiling

Allowed now:

- detected under named formal rules;
- derivationally verified;
- null-tested under named counterfactuals;
- empirical percentile within a simulated reference;
- departure/no-departure under a declared multiple-testing family;
- candidate for population-level investigation.

Not allowed now:

- rare among people;
- population-enriched;
- validated astrological signature;
- predictive of phenotype/outcome;
- causal;
- spiritually proven;
- experimentally established physical astrology.

## Documentation rule

Living documentation must describe both **repository reality** and **public-surface reality**. A merge to `main` is not, by itself, sufficient to call a feature publicly available.

Historical milestone documents remain historical. Their status headers may be advanced from `candidate` to `merged implementation milestone`, but their technical definitions must not be rewritten to impersonate newer models.