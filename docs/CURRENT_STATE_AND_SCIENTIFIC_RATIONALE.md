# Noetic Atlas — Current State and Scientific Rationale

## Status

**Current public release:** v0.4.2 — Relational Condition  
**Current browser surface:** `prototype/v042.html`  
**Condition system:** `naf.condition.system.v0.4.2`  
**Relational condition:** `naf.condition.relational.hellenistic.v0.4.2`  
**Condition signature:** `naf.condition.signature.v0.4.2`  
**House River:** `naf.research.house_river.v0.4.2`  
**Derivation Walker:** `naf.integrity.derivation_walker.v0.4.2`  
**House resonance:** `naf.interpretation.house_resonance.v0.4.1.3`  
**Energetic interpretation:** `naf.interpretation.energetic_synthesis.v0.4.1.2`  
**Graph model:** `naf.research.graph_analytics.v0.4.1`  
**Primitive condition:** `naf.condition.primitive.hellenistic.v0.4.0b`  
**Deterministic analysis envelope:** `naf.analysis.v0.3.1`  
**Default/deployed branch:** `main`

Canonical release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Noetic Atlas is currently best described as an **auditable visual-analytics, interpretation, and research framework for formalized astrological rule models**.

It is not a validated predictive theory, evidence that astrology operates through measured physical forces, or a replacement for expert judgment.

Its present strength is that relationships that are often implicit, hand-traced, or visually buried become explicit computational objects and then can be compared, qualified, visualized, and translated into readable hypotheses without discarding provenance.

Frozen architecture:

```text
one chart state
→ many coordinated projections
```

Current sequence:

```text
Geometry
→ Topology
→ Primitive Condition
→ Graph Analytics
→ Energetic / Explainable Synthesis
→ Resonance
→ Relational Condition
→ Compound Condition
→ Time
→ Recurrence / Discovery
```

## 1. Core representational claim

The horoscope wheel remains an excellent encoding for angular geometry, longitude, sign placement, and rapid aspect recognition.

Noetic Atlas treats the wheel as one projection of a larger formal model:

```text
A = {P, H, S, E, R, L, C, T}
```

where:

- `P` — planets, angles, nodes, lots, selected points;
- `H` — houses/places;
- `S` — zodiacal/categorical state;
- `E` — aspects and pairwise geometric relations;
- `R` — rulers, dispositors, reception, exchange, overcoming, directed dependencies;
- `L` — lots/derived coordinates;
- `C` — primitive and relational planetary condition;
- `T` — time-dependent activation/timing regimes.

Different questions require different projections:

```text
Natal Field         → geometry / relational architecture
Aspect Matrix       → exact pairwise geometry
Flow Map            → directed dispositorship
Condition           → primitive traditional state
Resonance Field     → qualitative sign/house phase comparison
Relations           → source-locked relational condition
Qualified Flow      → routing + condition + relation layers
House River         → lived house-domain drainage
Graph Findings      → mathematical structure of encoded graphs
Energetic layer     → readable synthesis
Integrity / Walker  → provenance and proof
Life Spectrum       → future temporal activation
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

These are deterministic graph properties **conditional on the selected rule model**. They do not prove psychological dominance, destiny, or physical causation.

### 2.2 Aspect graph as a distinct mathematical object

The aspect layer remains separate from rulership.

Current calculations include connected components, degree, local/mean clustering, normalized unweighted betweenness, articulation points, bridges, typed closed three-node motifs, Grand Trine/T-square/triple-conjunction templates, and an exact ≤1° subset.

Aspect × dispositor pair overlap is computed while preserving original relation types.

### 2.3 Primitive traditional condition

For Sun through Saturn the system independently computes domicile/adversity, sign-level exaltation/depression, standard/Dorothean triplicity, Egyptian bound, planetary sect family, in/out-of-sect relation, and Whole-Sign angular-triad class.

Each factor is provenance-bearing and no scalar strength score is emitted.

### 2.4 Relational traditional condition — v0.4.2

The current source-locked relation ontology includes:

```text
configured domicile reception
domicile exchange
separate later-tradition mutual-reception compatibility
right-hand overcoming
domination / upon-the-tenth
```

These are distinct relation objects with distinct rule IDs, sources, inputs, results, applicability, ledger entries, and derivation references.

Hellenistic exchange is not silently relabeled as later mutual reception.

Relational condition currently applies only to the classical seven and qualifies, rather than replaces, the dispositor graph.

### 2.5 Houses remain first-class

The interpretation architecture distinguishes:

```text
planet / point = what symbolic current?
sign           = how does it move?
house          = where does it become lived?
ruler          = where is the house agenda handed next?
condition      = under what astrological state does it operate?
```

Graph topology is not allowed to erase houses.

For the canonical terminal circuit:

```text
Mercury in Libra, 3H
↔
Venus in Virgo, 2H
```

The graph fact can therefore be translated into a recurrent 3H↔2H routed circuit within the selected model while graph fact and interpretation remain separately labeled.

### 2.6 Resonance Field

v0.4.1.3 formalized the optional natural-house comparison under Whole Sign houses as one chart-wide rotation determined by the Ascendant.

For the canonical Leo-rising chart:

```text
rotation: +4 signs / 120°
element preserved: 12/12
mode preserved: 0/12
phase character: element-preserving / mode-rotating
```

This is a property of the explicitly selected modern comparison model, not universal Hellenistic doctrine.

v0.4.2 Qualified Resonance attaches actual-ruler and classical-occupant condition signatures while keeping the actual house/sign/ruler primary.

### 2.7 House River

House River begins with lived Whole-Sign domains and traces their already-computed ruler routes.

For planetary dispositor edge `e`:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

Band width therefore has an exact integer routing semantics. It is not a strength, fate, soul-power, or physical-energy measure.

### 2.8 Derivation Walker

Every new v0.4.2 relation and House River band is born with a `derivation_ref`.

The walker indexes deterministic ledger entries, primitive condition, relational condition, and House River derivations. Older unnormalized dependencies remain explicitly visible rather than being fabricated.

This moves Noetic Atlas closer to reversible navigation:

```text
visible statement
→ relation / graph / condition fact
→ rule ID + source
→ numerical/categorical inputs
→ deterministic dependency
→ coordinate / civil-time provenance where indexed
```

### 2.9 Dedicated energetic interpretation layer

The preserved energetic synthesis translates deterministic state through:

```text
archetypal current
→ actual sign
→ actual Whole Sign house
→ optional modern natural-house overlay
→ ruler/dispositor route
→ aspect geometry
→ graph architecture
→ traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life examples
→ soul/spirit inquiry
→ proof
```

The governing rule remains:

> **The graph term is never the interpretation.**

## 3. Energy language: symbolic, not measured physics

Terms such as energy, current, field, resonance, compression, expansion, friction, coherence, standing-wave polarity, and quadrature torque are **symbolic/phenomenological interpretive terms**.

Noetic Atlas does not claim that zodiacal placements/aspects have been experimentally demonstrated to produce measurable physical energies, frequencies, or forces.

Angular separation is astronomical/computational. Energetic description is interpretive.

## 4. Natural-house overlay

Model:

```text
naf.interpretation.natural_house_overlay.modern.v1
```

This correspondence is secondary and explicitly modern. It does not mean the 3rd house literally becomes Gemini or that the twelve-letter alphabet was universal historical doctrine.

The actual sign, actual Whole Sign house, actual ruler, and ruler condition remain primary.

## 5. Outer planets and Ceres

Uranus, Neptune, and Pluto participate in modern/transpersonal interpretation through actual placement, aspects, and graph context. They do not inherit Hellenistic primitive or relational condition.

Ceres is recognized as `minor_body` when a coordinate is supplied and receives a custom/modern profile. The birth-time adapter does not automatically calculate a validated Ceres coordinate.

Interpretive support and automatic astronomy support remain separate capabilities.

## 6. What the current system actually computes

### Civil time / astronomy

Current birth-data path supports local civil date/time, latitude/longitude/elevation, approximate IANA time-zone lookup plus expert override, historical offset resolution, repeated/nonexistent DST handling, Sun through Pluto via Astronomy Engine 2.1.19, geocentric ecliptic longitude, longitudinal motion/retrograde state, ASC/MC, and geometric solar altitude.

Current automatic limitations include Ceres, Chiron, node variants, Black Moon Lilith/apogee variants, Vertex, fixed stars, and a complete independent cross-provider validation corpus.

### Astrological rule layer

Current baseline includes tropical zodiac, Whole Sign houses, traditional domicile rulers, named major-aspect/orb policy, applying/separating where motion exists, sect, seven Paulus/Panaretus Hermetic lots, primitive condition, relational condition, and explicit rule/model identities.

### Graph/mathematical layer

Current outputs include dispositor graph, SCCs/terminal SCCs, SCC condensation, all-house ruler routes, terminal basin statistics, route depth/upstream capture/bottleneck, aspect degree/clustering/betweenness, articulation points/bridges, typed motifs, aspect/dispositor overlap, relational-condition graphs, House River route counts, elemental/modal composition, circular harmonic spectrum, and exploratory multilayer participation.

## 7. What is useful today

Noetic Atlas is already stronger than a conventional wheel for some narrow tasks:

- tracing long ruler chains;
- identifying terminal components/basins;
- measuring route depth and bottlenecks;
- distinguishing primitive from relational condition;
- reconstructing reception/exchange/overcoming rules;
- reconstructing Hermetic lots;
- auditing Whole Sign house assignment;
- inspecting aspect edges numerically;
- identifying articulation/bridge/motif structures;
- comparing natural-house versus actual-house phase;
- translating house domains into ruler-route drainage;
- preserving provenance across all new relational/House River objects.

The wheel remains faster for many trained astrologers when immediate angular-pattern recognition is the task.

## 8. What is not established

The framework does **not** establish that:

- topology predicts life events better than traditional reading;
- SCC/basin concentration has validated psychological meaning;
- graph centrality or House River width equals planetary importance;
- reception/overcoming formalization proves their empirical efficacy;
- energetic vocabulary describes measured physical forces;
- Ceres necessarily governs abundance/nourishment in an empirically validated sense;
- natural-house correspondence is historically universal;
- current interpretations are superior to expert practice;
- graph motifs are statistically enriched without null models;
- astrology as a whole is validated by using mathematics to represent it.

## 9. Scientific justification by layer

### Graph theory

SCC decomposition, path analysis, clustering, betweenness, articulation/bridge structure, motif detection, and route counting are legitimate mathematical operations on encoded graphs. They validate statements about the graph, not astrology's causal truth.

### Information visualization

Different representations support different tasks. This motivates coordinated wheel/node-link/matrix/routing/resonance/river views and future HCI comparison.

### Multilayer networks

Network science supports keeping aspect, dispositor, reception, exchange, overcoming, condition, and time layers separate rather than collapsing them into one opaque graph.

### Provenance

W3C PROV/FAIR-style principles motivate explicit lineage/versioning. Noetic Atlas does not claim complete formal compliance merely by borrowing those principles.

## 10. Research gates

### HCI

Candidate tasks now include terminal-dispositor identification, ruler-chain recovery, aspect lookup, motif identification, primitive/relational condition reconstruction, House River route recovery, resonance interpretation, and evidence-chain tracing.

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
1. compound condition source lock
2. bonification / maltreatment
3. enclosure / selected mitigation
4. deeper condition-aware synthesis
5. motif + condition field geometry
6. graph null models
7. side-by-side rule-set comparison
8. validated extended-body astronomy where justified
9. Life Spectrum
```

## 12. Current product thesis

> **Noetic Atlas is an instrumentation and interpretation layer that turns astrological geometry, directed dependency, primitive and relational condition, qualitative resonance, and house routing into inspectable evidence-backed readings without claiming that the mathematics proves astrology's metaphysics.**
