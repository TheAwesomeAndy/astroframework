# Noetic Atlas — Product Definition

## One sentence

Noetic Atlas is an auditable astrological visual-analytics environment for seeing chart structure as geometry, dependency, condition, higher-order configuration, and evidence — with a separate Research aperture for testing detected structures against explicit counterfactuals.

## Current product state

See [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

The framework and product are currently out of sync:

```text
framework / research implementation = v0.4.7
public root application              = v0.4.5 shell
v0.4.6 null shell                    = separately reachable
v0.4.7 hypergraph shell              = absent
```

Therefore v0.4.7 is **not yet a fully productized public release**, even though its implementation is merged and CI-green.

The active product release blocker is [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

## Product architecture

Frozen product law:

```text
one chart state
→ many explicit models
→ many coordinated projections
```

The intended current application has seven coordinated views:

```text
Chart
Reading
Resonance
Network
House Flow
Condition
Proof
```

with one aperture switch:

```text
Personal | Research
```

Research is not an eighth workspace and not a second chart calculator.

## What exists in the framework today

### Deterministic chart instrument

- birth/chart input;
- civil-time and time-zone handling;
- Sun-through-Pluto astronomy plus ASC/MC/motion/sect geometry;
- tropical zodiac / Whole Sign houses;
- major aspects under named orb policy;
- sect and seven Hermetic lots;
- directed traditional dispositorship;
- all-house ruler routing;
- SCC/terminal-basin derivation.

### Traditional condition

- primitive condition;
- relational reception/exchange/overcoming families;
- source-secure compound-condition subset;
- categorical condition signatures;
- no universal strength score.

### Structure and interpretation

- Natal Field;
- Aspect Matrix;
- Flow Map;
- graph analytics/findings;
- House River;
- Resonance Field;
- energetic/readable synthesis;
- auditable Reading/evidence infrastructure;
- proof / derivation traversal.

### Research architecture

- Operational / Experimental / Discovery regimes;
- hypothesis/model comparison;
- Discovery candidate registry;
- multidimensional research status;
- Personal / Research aperture;
- v0.4.6 Null Model Laboratory;
- v0.4.7 formal astrological hypergraphs.

## v0.4.6 product capability — intended Research surface

The Null Model Laboratory lets a researcher ask a different question from ordinary chart reading:

> A structure exists. Is it unexpected relative to a named counterfactual?

Research-mode capabilities include:

- explicit null-test runs;
- N_G / N_L / N_D / N_T definitions;
- deterministic seed and iteration controls;
- finite Monte Carlo +1 p-values;
- raw and BH-FDR-adjusted p-values;
- percentile/effect position;
- departure/no-departure language;
- simulation-quality diagnostics;
- experiment ledger;
- candidate status transition to `null-tested` where admissible.

It explicitly does **not** provide real population rarity.

## v0.4.7 product capability — intended Research surface

The hypergraph layer makes higher-order structure inspectable as an object.

User-facing research objects should include:

### Pure geometry

```text
Grand Trine
T-Square
Yod
Grand Cross
Kite
T-Square Anchor Cluster
```

### Topological routing

```text
closed dispositor SCC
terminal basin-capture set
```

### Compound hybrid

```text
verified geometry × independently derived routing
```

A hyperedge inspector should show:

- configuration ID/class;
- participant set/cardinality;
- target-angle / orb / RMS / symmetry metrics where applicable;
- SCC/basin metrics where applicable;
- derivation hash;
- research state `[D,V,B,P,I]`;
- admissible named null profiles;
- population frequency = unknown;
- interpretation = withheld.

The product must make `not-admissible` preferable to a meaningless number.

## Why this product exists

Most astrology software calculates effectively but still compresses nearly everything into a wheel, tables, or prose.

The wheel remains excellent for angular geometry. It is less efficient for:

- tracing long ruler chains;
- identifying terminal cycles/basins;
- seeing which lived house domains repeatedly traverse the same dependency edge;
- distinguishing dispositorship from reception/exchange/overcoming;
- auditing rule provenance;
- inspecting graph-derived structure;
- treating a multi-body pattern as one higher-order object;
- separating “detected” from “unexpected”;
- inspecting a null profile without turning it into a significance score;
- understanding which claim is calculation and which is interpretation.

The product thesis is:

> **Different questions deserve different coordinated views over the same explicit model.**

## The strongest product unit

The strongest unit is not a graph, a paragraph, or a p-value.

It is an **evidence-backed research/reading object** with an inspectable chain:

```text
visible claim
→ formal structure
→ derivation
→ rule/model identity
→ named counterfactual where relevant
→ research status
→ interpretation only when explicitly requested
```

## Brand character

The product should feel:

- intellectually serious;
- sparse rather than ornamental;
- curious rather than authoritative;
- technically inspectable;
- slightly strange without theatrical mysticism;
- spiritually open without certainty theater.

It should not feel like:

- zodiac lifestyle merchandise;
- generic AI polish;
- faux-mystical luxury branding;
- a fortune-telling chatbot;
- an opaque engineering dashboard that forgets the human question.

## Current public-product defect

A normal visitor does not currently receive the v0.4.7 experience.

Observed problems:

1. root redirects to `prototype/app.html?build=research-045`;
2. current root/application chrome says v0.4.5;
3. `prototype/v046.html` is a side entry and still says candidate;
4. no `prototype/v047.html` exists;
5. no public hyperedge inspector/list exists;
6. version labels across outer/inner shells disagree;
7. bootstrap can transiently show populated truth state with a blank/partially initialized graph;
8. historical shells compete with the notion of one current application.

These are product bugs, not merely documentation inconsistencies.

## Required productization movement

Before v0.4.8:

```text
create/promote v0.4.7 current shell
→ wire existing seven views
→ preserve Personal | Research
→ expose null laboratory in Research
→ expose hypergraphs + null profiles in Research
→ unify product-version chrome
→ distinguish subsystem versions from product version
→ harden bootstrap state machine
→ redirect root to current shell
→ run public Research-path regression
→ deploy Pages
→ verify real browser behavior
```

## Bootstrap UX contract

First paint must have an explicit state:

```text
Loading chart…
```

followed by one of:

```text
ready
explicit empty state
explicit error state
```

The product must not visually claim one coherent chart state while its major projections are attached to different initialization moments.

Chart changes invalidate stale null/hypergraph research state before new derived results can attach.

## Version-chrome contract

Two kinds of version identity should be visible but not confused:

### Product release

Example:

```text
Noetic Atlas v0.4.7
```

### Subsystem/model provenance

Examples:

```text
naf.condition.primitive.hellenistic.v0.4.0b
naf.research.null_model_laboratory.v0.4.6
naf.research.hypergraph.v0.4.7
```

A preserved subsystem can legitimately retain an older model version. It should not look like the current product itself is an older release.

## Personal mode

Personal should emphasize:

- Chart;
- Reading;
- Resonance;
- Network/Flow as useful structure;
- House Flow;
- Condition;
- Proof.

Monte Carlo details, p-values, null generators, and exploratory research tables remain hidden by default.

## Research mode

Research should expose:

- model identities;
- hypothesis packs;
- Discovery candidates;
- null definitions;
- null experiment controls;
- hyperedges;
- candidate-specific null profiles;
- research-status vectors;
- derivation and simulation ledgers;
- explicit claim ceilings.

Research should never overwrite Personal/Operational chart state.

## What is demonstrably useful now

The framework already improves inspectability for:

- ruler-chain tracing;
- terminal-SCC/basin detection;
- house-route inspection;
- exact aspect lookup;
- traditional-condition reconstruction;
- relation-type reconstruction;
- Hermetic-lot audit;
- graph articulation/motif analysis;
- House River route counts;
- provenance reconstruction;
- formal higher-order configuration detection;
- conditional unexpectedness under named nulls.

It is **not** demonstrated that this produces superior psychological insight, prediction, or spiritual truth.

## Product research questions

Potential HCI comparisons now include:

- wheel vs Atlas for ruler-chain recovery;
- wheel vs hyperedge list for multi-body configuration recognition;
- ordinary “special pattern” language vs explicit null profile for understanding unexpectedness;
- table vs House River for house-routing recovery;
- hidden provenance vs Proof Walker for confidence calibration.

Outcomes may include completion time, error rate, learning, recall, workload, confidence calibration, and expert agreement.

## Locked next product/research milestones

After the public v0.4.7 gate closes:

```text
v0.4.8 Hidden Geometry Engine
v0.4.9 Experimental Model Laboratory
v0.5.0 Population Cohort Engine
```

Life Spectrum remains a future product direction but no longer occupies v0.5.0.

## Marketing boundary

Avoid:

- “scientifically proven astrology”;
- “rare” when only a counterfactual percentile exists;
- “your chart's true physical energy field”;
- universal cosmic strength/significance scores;
- calling a merged backend module a public feature when users cannot reach it.

Prefer demonstrable claims:

- explicit rule models;
- inspectable chart dependencies;
- higher-order structures represented as first-class objects;
- named counterfactual testing;
- derivation/provenance;
- separation of mathematical result from interpretation;
- explicit uncertainty and unavailable claims.

## Product principle

> **Sell resolution and better instrumentation, not artificial certainty.**

And now an additional release principle:

> **Do not call a feature public until the public instrument actually exposes it.**