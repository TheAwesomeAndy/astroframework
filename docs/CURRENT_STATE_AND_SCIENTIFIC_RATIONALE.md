# Noetic Atlas — Current State and Scientific Rationale

## Status

**Current public release:** v0.4.1.2 — Energetic Whole-Chart Synthesis  
**Current browser surface:** `prototype/v0412c.html`  
**Energetic interpretation model:** `naf.interpretation.energetic_synthesis.v0.4.1.2`  
**Natural-house overlay:** `naf.interpretation.natural_house_overlay.modern.v1`  
**Graph model:** `naf.research.graph_analytics.v0.4.1`  
**Primitive condition model:** `naf.condition.primitive.hellenistic.v0.4.0b`  
**Deterministic analysis envelope:** `naf.analysis.v0.3.1`  
**Default/deployed branch:** `main`

Canonical release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Noetic Atlas is currently best described as an **auditable visual-analytics, interpretation, and research framework for formalized astrological rule models**.

It is not a validated predictive theory, evidence that astrology operates through measured physical forces, or a replacement for expert judgment.

Its present strength is that relationships that are often implicit, hand-traced, or visually buried become explicit computational objects and then can be translated into readable hypotheses without discarding provenance.

Current sequence:

```text
Geometry
→ Topology
→ Primitive Condition
→ Graph Analytics
→ Energetic / Explainable Synthesis
→ Relational Condition
→ Compound Condition
→ Time
→ Recurrence / Discovery
```

## 1. Core representational claim

The horoscope wheel remains an excellent encoding for angular geometry, longitude, sign placement, and rapid aspect recognition.

Noetic Atlas does not treat the wheel as obsolete. It treats the wheel as one projection of a larger formal model:

```text
A = {P, H, S, E, R, L, C, T}
```

where:

- `P` — planets, angles, nodes, lots, selected points;
- `H` — houses/places;
- `S` — zodiacal/categorical state;
- `E` — aspects and pairwise geometric relations;
- `R` — rulers, dispositors, reception, directed dependencies;
- `L` — lots/derived coordinates;
- `C` — planetary/relational condition;
- `T` — time-dependent activation/timing regimes.

Different questions require different representations.

```text
Natal Field      → geometry / relational architecture
Aspect Matrix    → exact pairwise relations
Flow Map         → directed rulership dependency
Condition        → primitive traditional state
Graph Findings   → mathematical structure of encoded graphs
Energetic layer  → readable synthesis across sign/house/routing/aspects/condition
Integrity        → provenance and proof
Life Spectrum    → future temporal activation
```

## 2. What the current system genuinely adds

### 2.1 Directed rulership as explicit graph topology

Traditional domicile rulership is represented as a directed graph.

Noetic Atlas calculates SCCs, condensation, terminal components, basin membership, route depth, and upstream route capture.

For `NAF-CANON-0001` under the selected classical ruler model:

```text
terminal SCC: Mercury ↔ Venus
terminal basin: 7 / 7
Jupiter route depth: 3
Saturn route depth: 2
Mars route depth: 1
largest nonterminal path bottleneck: Mars
```

These are deterministic graph properties **conditional on the selected rule model**.

They do not prove psychological dominance, destiny, or physical causation.

### 2.2 Aspect graph as a distinct mathematical object

The aspect layer is analyzed separately from rulership.

Current v0.4.1 calculations include:

- connected components;
- degree;
- local/mean clustering;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- typed closed three-node motifs;
- Grand Trine/T-square/triple-conjunction templates;
- exact ≤1° subset.

Cross-layer overlap currently computes aspect × dispositor pair overlap while preserving the original relation types.

### 2.3 Primitive traditional condition

For Sun through Saturn the system computes independent condition factors rather than one strength score:

- domicile/adversity;
- sign-level exaltation/depression;
- standard/Dorothean triplicity;
- Egyptian bound;
- planetary sect family;
- in/out-of-sect relation;
- Whole-Sign angular-triad class.

Each factor is provenance-bearing.

### 2.4 Houses remain first-class

The current interpretation layer distinguishes:

```text
planet / point = what symbolic current?
sign           = how does it move?
house          = where does it become lived?
```

Graph topology is not allowed to erase houses.

For the canonical Mercury/Venus terminal SCC:

```text
Mercury in Libra, 3H
↔
Venus in Virgo, 2H
```

The graph-derived SCC can therefore be translated into a recurring 3H↔2H routed circuit within the selected model. The graph fact and downstream interpretation remain separately labeled.

### 2.5 Dedicated energetic interpretation layer

v0.4.1.2 translates deterministic state through:

```text
archetypal current
→ actual sign
→ actual Whole Sign house
→ optional modern natural-house overlay
→ ruler/dispositor route
→ aspect geometry
→ graph architecture
→ primitive condition where applicable
→ balanced / depleted / excessive expression
→ material-life examples
→ soul/spirit inquiry
→ proof
```

The governing design rule is:

> **The graph term is never the interpretation.**

### 2.6 v0412c operational reliability

The current public wrapper fixes a real application-layer defect: a blank Analysis pane could previously appear while the underlying visual core was functioning.

v0412c now:

- shows immediate loading state;
- automatically loads the canonical specimen;
- reads the core chart JSON rather than duplicating calculations;
- resynchronizes with `MutationObserver` after chart-state changes;
- shows explicit synthesis errors;
- keeps the visual core available if interpretation fails.

This is operational reliability, not a new astrological claim.

## 3. Energy language: symbolic, not measured physics

The current interpretation layer uses terms such as energy, current, field, resonance, compression, expansion, friction, coherence, standing-wave polarity, and quadrature torque.

These are **symbolic/phenomenological interpretive terms**.

Noetic Atlas does not currently claim that zodiacal placements/aspects have been experimentally demonstrated to produce measurable physical energies, frequencies, or forces.

The angular separation itself is an astronomical/computational quantity. The energetic description is interpretive.

## 4. Natural-house overlay

Current optional model:

```text
naf.interpretation.natural_house_overlay.modern.v1
```

This correspondence is secondary and explicitly modern.

It does not mean the 3rd house literally becomes Gemini or that the twelve-letter alphabet was universal historical doctrine.

The actual sign and actual Whole Sign house remain primary.

## 5. Outer planets and Ceres

### Outer planets

Uranus, Neptune, and Pluto participate in modern/transpersonal interpretation through actual placement, aspects, and graph context.

They do not inherit Hellenistic essential dignity.

### Ceres

Ceres is recognized as `minor_body` when a coordinate is supplied and receives a custom/modern profile.

Current astronomy limitation: the birth-time adapter does not automatically calculate a validated Ceres coordinate.

This means interpretive support and automatic astronomy support are separate capabilities.

## 6. What the current system actually computes

### Civil time / astronomy

Current birth-data path supports:

- local civil date/time;
- latitude/longitude/elevation;
- approximate IANA time-zone lookup plus expert override;
- historical offset resolution;
- repeated/nonexistent DST handling;
- Sun through Pluto via Astronomy Engine 2.1.19;
- geocentric ecliptic longitude;
- longitudinal motion/retrograde state;
- ASC/MC;
- geometric solar altitude.

Current automatic astronomy limitations include:

- Ceres;
- Chiron;
- node variants;
- Black Moon Lilith/apogee variants;
- Vertex;
- fixed stars;
- complete independent cross-provider validation corpus.

### Astrological rule layer

Current baseline includes:

- tropical zodiac;
- Whole Sign houses;
- traditional domicile rulers;
- named major-aspect/orb policy;
- applying/separating where motion exists;
- sect;
- seven Paulus/Panaretus Hermetic lots;
- primitive classical condition;
- explicit rule/model identities.

### Graph/mathematical layer

Current outputs include:

- dispositor graph;
- SCCs and terminal SCCs;
- SCC condensation;
- all-house ruler routes;
- terminal basin statistics;
- route depth/upstream capture/bottleneck;
- aspect degree/clustering/betweenness;
- articulation points/bridges;
- typed motifs;
- aspect/dispositor overlap;
- elemental/modal composition;
- circular harmonic spectrum;
- exploratory multilayer participation.

## 7. What is useful today

Noetic Atlas is already stronger than a conventional wheel for some narrow tasks:

- tracing long ruler chains;
- identifying terminal components/basins;
- measuring route depth and bottlenecks;
- distinguishing topology from traditional condition;
- reconstructing Hermetic lots;
- auditing Whole Sign house assignment;
- inspecting aspect edges numerically;
- identifying articulation/bridge/motif structures;
- translating graph routes back into actual houses;
- preserving provenance across all of the above.

The wheel remains faster for many trained astrologers when immediate angular-pattern recognition is the task.

## 8. What is not established

The current framework does **not** establish that:

- topology predicts life events better than traditional reading;
- SCC/basin concentration has validated psychological meaning;
- graph centrality equals planetary importance;
- energetic vocabulary describes measured physical forces;
- Ceres necessarily governs abundance/nourishment in an empirically validated sense;
- natural-house correspondence is historically universal;
- current interpretations are superior to expert practice;
- graph motifs are statistically enriched without null models;
- astrology as a whole is validated by using mathematics to represent it.

## 9. Scientific justification by layer

### Graph theory

SCC decomposition, path analysis, clustering, betweenness, articulation/bridge structure, and motif detection are legitimate mathematical operations on encoded graphs.

They validate statements about the graph, not astrology's causal truth.

### Information visualization

Different representations support different tasks. This motivates coordinated node-link/matrix/routing views and future HCI comparison with the wheel.

### Multilayer networks

Network science supports keeping distinct relation types separate rather than collapsing aspects, rulers, condition, and time into one undifferentiated graph.

### Provenance

W3C PROV/FAIR-style principles motivate explicit lineage/versioning. Noetic Atlas does not claim complete formal compliance merely by borrowing those principles.

## 10. Research gates

### HCI

Test whether users recover structural facts more reliably/quickly/consistently with Atlas versus conventional tools.

Candidate tasks:

- terminal dispositor identification;
- ruler-chain recovery;
- aspect lookup;
- motif identification;
- condition reconstruction;
- evidence-chain tracing.

### Graph null models

Required before rarity/enrichment language:

```text
randomized longitudes
label permutation
appropriate degree-preserving rewiring
layer-overlap randomization
```

### Interpretation research

Later work may test whether graph/condition/interpretation structures correlate reproducibly with independent criteria. Null results remain acceptable.

## 11. Current engineering priorities

```text
1. reception / exchange
2. overcoming
3. condition-aware house-ruler synthesis
4. selected compound condition
5. graph null models
6. curated interpretation profiles
7. validated extended-body astronomy where justified
8. Life Spectrum
```

## 12. Current product thesis

The strongest current description is:

> **Noetic Atlas is an instrumentation and interpretation layer that turns astrological geometry, directed dependency, condition, and graph structure into inspectable evidence-backed readings without claiming that the mathematics proves astrology's metaphysics.**
