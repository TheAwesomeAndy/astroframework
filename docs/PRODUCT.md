# Noetic Atlas — Product Definition

## One sentence

Noetic Atlas is an interactive visual-analytics and interpretation environment for seeing the formal structure of an astrological chart, tracing house/ruler pathways, inspecting primitive and relational traditional condition, translating structure into readable hypotheses, and walking the proof behind every displayed claim.

## Current product state

See [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Current public release: **v0.4.2 — Relational Condition**.  
Current public browser: **`prototype/v042.html`**.

Frozen product architecture:

```text
one chart state
→ many coordinated projections
```

The public shell preserves all earlier useful views through an explicit chain:

```text
v042
└── v0413 Resonance Field
    └── v0412c Structure & Analysis
        └── deterministic visual core
```

Current top-level projections:

```text
Existing Atlas
Qualified Resonance
Relations
Qualified Flow
House River
Proof Walker
```

## What exists today

The product provides:

- deterministic birth/chart input;
- civil-time/time-zone handling;
- Sun-through-Pluto astronomy plus ASC/MC/motion/sect geometry;
- interactive Natal Field;
- linked Aspect Matrix;
- directed dispositor Flow Map;
- SCC and house-route inspection;
- sect and seven Hermetic lots;
- primitive traditional condition for the classical seven;
- relational condition: reception, exchange, separately identified mutual-reception compatibility, overcoming, domination;
- reusable categorical condition signatures;
- graph analytics and explainable findings;
- outer-planet modern/transpersonal interpretation;
- energetic placement/aspect/topology synthesis;
- Resonance Field / Element–Mode phase representation;
- Qualified Resonance with actual-ruler and occupant condition state;
- Qualified Flow with distinct dispositor/reception/exchange/overcoming layers;
- House River with route-count band semantics;
- Derivation Walker infrastructure and public proof traversal;
- balanced/depleted/excess expression framing;
- material-life and soul/spirit inquiry layers;
- graph-linked proof/integrity access.

It does **not** yet provide:

- compound traditional condition such as bonification/maltreatment/enclosure;
- complete normalization of all legacy proof objects into the shared walker contract;
- graph null distributions or statistical motif enrichment;
- full motif + condition field geometry;
- side-by-side rule-set comparison;
- automatic validated Ceres/small-body astronomy;
- Life Spectrum;
- production traditional timing systems;
- validated predictive/psychological superiority.

## Why this product exists

Most astrology software calculates effectively but still presents nearly everything through a conventional wheel plus prose.

The wheel remains excellent for angular geometry. It is less efficient for:

- tracing long dispositor chains;
- identifying terminal cycles and basins;
- following house-to-ruler dependency;
- seeing which house routes repeatedly traverse the same planetary edge;
- distinguishing dispositorship from reception/exchange/overcoming;
- seeing local and relational condition together;
- auditing derived lots and condition rules;
- comparing exact pairwise aspect relations;
- separating graph facts from interpretation;
- exposing provenance;
- eventually representing multiple timing systems across decades.

The product claim is not that the wheel is wrong. It is:

> **Different questions deserve different coordinated views over the same explicit model.**

## Brand character

The product should feel intellectually serious, sparse rather than ornamental, curious rather than authoritative, technically inspectable, slightly strange without theatrical mysticism, and spiritually open without certainty theater.

It should not feel like zodiac lifestyle merchandise, generic AI polish, faux-mystical luxury branding, a fortune-telling chatbot, or an opaque engineering dashboard that forgets the human question.

## Current product vocabulary

### Natal Field
**See the relational architecture.** Status: implemented and preserved.

### Aspect Matrix
**Inspect exact pairwise geometry.** Status: implemented and preserved.

### Flow Map
**See where traditional dispositorship routes.** Status: implemented and preserved.

### Condition
**See the classical planet's multidimensional rule-defined state.** Status: primitive + relational condition implemented; compound condition pending.

### Resonance Field
**See how the actual Whole-Sign sequence transforms the optional natural-house element/mode sequence.** Status: implemented v0.4.1.3 and preserved.

### Qualified Resonance
**See sign/house resonance together with the actual ruler's condition and classical occupant state.** Status: implemented v0.4.2.

### Relations
**Inspect source-locked reception, exchange, mutual-reception compatibility, overcoming, and domination as distinct objects.** Status: implemented v0.4.2.

### Qualified Flow
**See routing and relational qualification simultaneously without collapsing edge types.** Status: implemented v0.4.2.

### House River
**Start with lived house domains and see how their ruler paths drain through the dispositor network.** Status: implemented v0.4.2.

Planetary band width means:

```text
# Whole Sign house-ruler paths traversing that dispositor edge
```

It does not mean strength or energetic intensity.

### Graph Findings
**See what follows mathematically from the encoded graph.** Status: implemented and preserved.

### Energetic Analysis
**Translate formal structure into a readable symbolic whole-chart hypothesis.** Status: implemented and preserved.

### Integrity / Proof Walker
**See why the system made the claim.** Existing integrity surfaces remain; v0.4.2 adds a shared derivation-reference infrastructure for all new relations and House River bands.

### Life Spectrum
**See when characterized natal structures activate.** Status: planned v0.5.

### Life Space
**See recurrent temporal states in a larger state space.** Status: long-term research surface.

## Core interaction model

A question should change explanation and visual context together.

Example:

> Why is the 11th house connected to Mercury and Venus under this model?

Desired current behavior:

1. select the 11th house;
2. show its actual Whole Sign sign and optional natural resonance separately;
3. identify its traditional ruler;
4. show the ruler's categorical primitive + relational condition;
5. trace the ruler's dispositor path;
6. reveal terminal SCC/basin structure;
7. show whether relevant planets receive, exchange with, overcome, or are overcome by others;
8. highlight the route in Qualified Flow / House River;
9. translate the route back into actual lived house fields;
10. open the derivation proof;
11. distinguish structural facts from interpretive hypotheses.

The answer becomes inspectable rather than merely persuasive.

## Initial target users

### Serious astrology learners
Need: understand rulership, primitive/relational condition, lots, graph topology, resonance, and whole-chart dependency without mentally chasing every path.

### Practicing astrologers
Need: rapid structural interrogation, source/rule provenance, qualified routing, readable client-facing synthesis, and eventually timing layers.

### Technically curious spiritual users
Need: explore symbolic systems with more rigor and less generic horoscope prose.

### Researchers / HCI practitioners
Need: test alternative representations of dense symbolic relational systems independently from claims about astrological causation.

## Current differentiation

The moat is not “AI astrology.”

The differentiating combination is:

```text
explicit astrological ontology
+ deterministic computation
+ directed graph topology
+ primitive + relational traditional condition
+ Resonance Field qualitative projection
+ House River lived-domain routing
+ coordinated visual grammar
+ derivation provenance
+ readable interpretation downstream from evidence
+ future temporal/research layers
```

The strongest product unit is an **evidence-backed finding/reading**, not a naked graph or naked paragraph.

## What is demonstrably useful now

Noetic Atlas already improves inspectability for:

- dispositor-chain tracing;
- terminal-SCC/basin detection;
- house-route inspection;
- nonterminal route bottleneck inspection;
- exact aspect lookup;
- typed motif detection;
- Hermetic-lot audit;
- primitive condition reconstruction;
- reception/exchange/overcoming reconstruction;
- natural-house versus actual-house phase comparison;
- house-route count inspection;
- rule/provider/version reconstruction;
- proof access for all new relational/House River objects.

What is not demonstrated is that the interface produces better psychological insight, forecasting, or self-knowledge than a skilled astrologer using conventional tools.

## Product research thesis

The interface should be evaluated empirically, with the conventional wheel as a control condition.

Candidate tasks now include:

- trace ruler chains;
- identify terminal routing;
- recover exact aspect relationships;
- identify motifs;
- reconstruct primitive condition;
- distinguish reception/exchange/overcoming;
- trace lived house domains through House River;
- distinguish calculation from interpretation;
- identify which evidence produced a displayed relation or reading.

Candidate outcomes include completion time, error rate, novice learning rate, recall, cognitive workload, and expert agreement.

## Minimum lovable product — updated

Before broad consumer release, Noetic Atlas should do these things exceptionally well:

1. calculate supported chart data reliably and disclose unsupported objects;
2. preserve/use the wheel, Natal Field, Aspect Matrix, Flow Map, Resonance Field, and qualified relational projections for their distinct questions;
3. trace house/ruler/dispositor structure interactively;
4. expose primitive, relational, and then compound traditional condition transparently;
5. translate graph structure into readable, house-aware analysis without hiding evidence;
6. make the Derivation Walker universal across old and new proof objects;
7. provide a legitimate multi-year Life Spectrum only after natal state is mature;
8. preserve privacy, provenance, and rule-model identity.

## Marketing thesis

Avoid:

- “the first AI astrologer”;
- “scientifically proven astrology”;
- “your chart’s true physical energy field”;
- opaque cosmic-strength/destiny scores;
- novelty claims based solely on having a graph.

Prefer demonstrable claims:

- astrology represented as geometry, dependency, condition, qualitative resonance, routing, interpretation, proof, and eventually time;
- distinct traditional relation types made inspectable;
- house/ruler paths made visible from lived-domain entry points;
- calculations and relations that can be reconstructed;
- source-controlled rule models;
- graph metrics separated from meaning;
- energetic interpretation explicitly labeled as symbolic;
- experimental research separated from established computation.

## Candidate landing language

### Hero

**See your chart as a system, not only a wheel.**

Noetic Atlas maps the structure of an astrological chart, traces the pathways and traditional relations between its parts, and shows the calculation and evidence behind what you see.

### Secondary

**The wheel shows geometry. The Atlas exposes dependency, condition, resonance, and routing.**

Follow a house to its ruler. Follow the ruler through its dispositor chain. See who receives or overcomes whom. Inspect condition, route counts, lots, and proof.

### Product proof

Click a node. Trace its relationships. Follow the ruler chain. Switch to Resonance or House River. Inspect condition. Walk the proof. See what changes and what remains invariant.

## Product principle

> **Sell resolution and better instrumentation, not artificial certainty.**

A feature that only makes astrology look impressive should be removed or deprioritized. A feature that makes a meaningful structural or experiential question easier to inspect, learn, reproduce, compare, or test is aligned with the product.
