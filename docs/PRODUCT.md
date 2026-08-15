# Noetic Atlas — Product Definition

## One sentence

Noetic Atlas is an auditable astrological visual-analytics instrument that exposes geometry, house/ruler dependency, condition, higher-order configurations, research counterfactuals, interpretation, and proof through coordinated views over one deterministic chart state.

## Current product state

See [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

```text
framework baseline      v0.4.7
public product baseline v0.4.7 (productized)
current shell           prototype/v047.html
root entry              index.html → prototype/v047.html
productization gate     closed / live verified
```

The product architecture is:

```text
one chart state
→ many coordinated projections
```

and:

```text
Chart · Reading · Resonance · Network · House Flow · Condition · Proof
Personal | Research
```

Research is an aperture, not a second chart.

## Product identity

The product should feel intellectually serious, sparse rather than ornamental, curious rather than authoritative, technically inspectable, slightly strange without theatrical mysticism, and spiritually open without certainty theater.

It should not feel like zodiac lifestyle merchandise, generic AI polish, faux-mystical luxury branding, a fortune-telling chatbot, or an opaque engineering dashboard that forgets the human question.

## What exists today

The public v0.4.7 product provides:

- deterministic chart input and canonical specimen bootstrap;
- civil-time/time-zone handling;
- Sun-through-Pluto astronomy plus ASC/MC/motion/sect geometry;
- Whole Sign houses and traditional domicile rulers;
- interactive Natal Field and Aspect Matrix substrate;
- directed dispositor topology and SCC/basin analysis;
- sect and seven Hermetic lots;
- primitive, relational, and source-secure compound condition;
- graph analytics and explainable findings;
- House River routing;
- Resonance Field and secondary modern-rulership overlay;
- integrity-gated Operational Reading;
- Derivation/proof infrastructure;
- Operational / Experimental / Discovery separation;
- v0.4.6 Null Model Laboratory under Research;
- v0.4.7 Formal Astrological Hypergraphs under Research;
- candidate-specific hypergraph null profiles;
- deterministic Research-state invalidation on chart/core changes.

It does **not** provide:

- real natal population-frequency estimates;
- validated psychological or predictive superiority;
- k=5–6 hypergraph templates;
- hypergraph spectral/Laplacian analysis;
- midpoints, declination/parallels, or antiscia as v0.4.8 features;
- experimental Ceres routing/rulership execution;
- production Life Spectrum/timing systems.

## Personal mode

Personal is the default consumer path.

It emphasizes:

- Chart;
- auditable Operational Reading;
- Resonance;
- canonical Network;
- House Flow;
- Condition;
- Proof.

It conceals the primary research machinery:

- null-run controls;
- p-value/FDR tables;
- simulation ledgers;
- formal hypergraph research status as the main reading path.

Research results do not silently mutate the Personal fact set.

## Research mode

Research exposes the same chart through a wider epistemic aperture.

### Null Model Laboratory

The current product exposes:

- iterations `199 / 999 / 4999 / 9999`;
- explicit seed;
- explicit **Run null tests** control;
- Web Worker execution;
- named N_G / N_L / N_D / N_T counterfactuals;
- raw/adjusted p-values;
- empirical percentiles;
- simulation quality;
- per-candidate null profiles;
- no automatic simulation.

### Formal Hypergraphs

The current product exposes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

with:

- ID/class/label;
- participants/cardinality;
- geometric/topological metrics;
- derivation hash;
- research state `[D,V,B,P,I]`;
- named null rows after an explicit run;
- `not-admissible` where appropriate;
- population frequency `unknown`;
- interpretation `withheld`.

## Bootstrap behavior

The current shell does not present a half-attached chart as Ready.

```text
Loading → Ready | Empty | Error
```

Ready requires a valid serialized chart and a visibly rendered Natal Field. A core reload/chart-state change clears stale Research attachments and terminates an active worker.

## Product vocabulary

### Chart / Natal Field
See the chart's structural architecture.

### Reading
Read an integrity-gated Operational synthesis downstream from evidence.

### Resonance
Compare actual Whole Sign structure with explicitly secondary qualitative overlays.

### Network
Inspect aspects, dispositorship, formal topology, and—in Research—higher-order hyperedges/counterfactuals.

### House Flow
Trace lived house domains through ruler/dispositor routes. Width means route count, not strength.

### Condition
Inspect multidimensional primitive, relational, and compound traditional state without a scalar score.

### Proof
Trace claims back through rules, derivations, provenance, research status, and claim ceilings.

## Product research thesis

The interface should be evaluated against conventional wheels/tables for concrete information-recovery tasks, not marketed as superior because it contains graphs.

Candidate tasks include:

- ruler-chain recovery;
- terminal-SCC/basin identification;
- exact aspect lookup;
- configuration recognition;
- traditional-condition reconstruction;
- House River route recovery;
- relation-type discrimination;
- evidence-chain tracing;
- interpretation-versus-research boundary recognition.

## Live release verification

The v0.4.7 shell is not considered current merely because its source exists. The release passed a live Chromium test against GitHub Pages verifying root routing, version chrome, Ready bootstrap, seven-view navigation, Personal concealment, Research hyperedge exposure, an actual 199-iteration null execution, Proof claim ceiling, and reload invalidation.

Permanent gate:

```text
tests/v047_live_pages_smoke.mjs
.github/workflows/v047-live-pages.yml
```

## Marketing boundary

Avoid:

- “scientifically proven astrology”;
- “rare configuration” without a real population reference;
- “true physical energy field”;
- universal cosmic-strength/destiny scores;
- interpreting named-null departure as empirical prevalence.

Prefer demonstrable claims:

- source/model-controlled calculations;
- inspectable chart dependency;
- visible higher-order configuration;
- reversible proof;
- explicit counterfactual testing;
- strict separation of detection, unexpectedness, population frequency, and interpretation.

## Product principle

> **Sell resolution and instrumentation, not artificial certainty.**

A feature that only makes astrology look impressive should be removed or deprioritized. A feature that makes a structural or experiential question easier to inspect, reproduce, compare, or test is aligned with the product.
