# Noetic Atlas — Current State and Scientific Rationale

## Status

**Current public release:** v0.4.1.2 — Energetic Whole-Chart Synthesis  
**Current energetic interpretation model:** `naf.interpretation.energetic_synthesis.v0.4.1.2`  
**Current graph model:** `naf.research.graph_analytics.v0.4.1`  
**Current primitive condition model:** `naf.condition.primitive.hellenistic.v0.4.0b`  
**Current deterministic analysis envelope:** `naf.analysis.v0.3.1`  
**Default branch:** `main`

Noetic Atlas is currently best described as an **auditable visual-analytics, interpretation, and research framework for a formalized astrological rule model**.

It is not a validated predictive theory, evidence that astrology operates through measured physical forces, or a replacement for expert judgment. Its current strength is that it converts relationships that are often implicit, hand-traced, or visually buried into explicit computational objects and then translates those objects into readable astrological hypotheses without discarding provenance.

The current architectural sequence is:

```text
Geometry
→ Topology
→ Primitive Condition
→ Graph Analytics
→ Energetic / Explainable Synthesis
→ Relational Condition
→ Compound Condition
→ Activation
→ Recurrence / Discovery
```

---

## 1. The core claim

The horoscope wheel remains an excellent encoding for angular geometry, zodiacal longitude, sign placement, and rapid visual aspect recognition.

Noetic Atlas does not treat the wheel as obsolete. It treats the wheel as one projection of a larger formal model:

```text
A = {P, H, S, E, R, L, C, T}
```

where:

- `P` — planets, angles, nodes, lots, selected points;
- `H` — houses/places;
- `S` — zodiacal and categorical state;
- `E` — aspects and pairwise geometric relations;
- `R` — rulers, dispositors, reception, and dependency relations;
- `L` — lots and other derived coordinates;
- `C` — planetary and relational condition;
- `T` — time-dependent activation and timing regimes.

Different questions require different representations.

```text
Natal Field     → geometry / relational architecture
Flow Map        → dependency / rulership
Condition       → traditional planetary state
Energetic layer → readable synthesis across sign, house, routing and condition
Life Spectrum   → future temporal activation
Integrity       → provenance and derivation
```

The project therefore aims to formalize the model underneath the representations rather than merely redesign the wheel.

---

## 2. What is genuinely novel today

### 2.1 Rulership is a directed graph with explicit terminal structure

Traditional domicile rulership is represented as a directed graph:

```text
G_R = (V, E_R)
```

Noetic Atlas traces planetary and house-ruler paths, computes Tarjan strongly connected components, identifies terminal SCCs, and derives routing basins and path depth.

For the canonical specimen, the classical-seven graph produces:

```text
terminal SCC: Mercury ↔ Venus
terminal basin: 7 / 7
Jupiter route depth: 3
Saturn route depth: 2
Mars route depth: 1
largest nonterminal path bottleneck: Mars
```

Those are deterministic graph properties **conditional on the selected traditional-rulership model**.

The graph does not prove that Mercury or Venus dominates the psyche, causes life events, or possesses a measurable physical field. It proves that the encoded ruler pathways terminate in the same recursive component.

### 2.2 Houses are preserved as first-class life fields

v0.4.1.2 corrects an important interpretive weakness in earlier graph-first interfaces: topology is no longer allowed to erase the houses.

For each placement the interpretation distinguishes:

```text
planet / point = what symbolic current?
sign           = how does the current move?
house          = where does it become lived?
```

The house is not a decorative label appended after graph analysis. It is a primary astrological field that converts a network relation into a concrete domain of lived experience.

For the canonical Mercury–Venus terminal SCC:

```text
Mercury in Libra, 3H
↔
Venus in Virgo, 2H
```

The terminal graph structure can therefore be interpreted as a recurring **3H ↔ 2H circuit** inside the selected model: communication/knowledge and value/resources repeatedly route into one another.

The graph-derived fact and the house-level interpretation remain separately labeled.

### 2.3 The framework maintains epistemic layering and derivation provenance

Noetic Atlas separates:

```text
Input
→ Astronomy
→ Astrological rule
→ Mathematical derivation
→ Research-exploratory result
→ Interpretive inference
```

Every important result is intended to remain reversible to source input, rule/model version, intermediate calculation, and assumptions.

This is implemented through derivation ledgers, proof objects, and integrity metadata.

The methodological principle is compatible with broader provenance practice such as W3C PROV and FAIR-style emphasis on machine-readable lineage, while not claiming full formal compliance with those standards.

### 2.4 Graph analytics are explicit mathematical objects

v0.4.1 adds graph-derived objects that are rarely first-class in conventional astrology software:

- SCC condensation;
- terminal basin capture;
- route depth;
- upstream route capture;
- nonterminal path bottlenecks;
- aspect connected components;
- clustering coefficient;
- betweenness centrality;
- articulation points;
- bridges;
- typed three-node motifs;
- aspect/dispositor overlap.

These are mathematically real properties of the encoded graph. Their astrological/life significance remains a research and interpretation question.

### 2.5 v0.4.1.2 adds a dedicated energetic interpretation layer

Earlier versions could display a graph result such as:

```text
terminal basin = 7/7
```

but a non-specialist still had to understand graph theory before the result meant anything.

v0.4.1.2 introduces a downstream synthesis model:

```text
archetypal current
→ actual sign
→ actual Whole Sign house
→ natural-house resonance where selected
→ traditional sign ruler / dispositor route
→ aspect geometry
→ graph architecture
→ traditional condition where available
→ balanced / depleted / excessive expression
→ material-life examples
→ soul/spirit inquiry
→ proof
```

The governing design rule is:

> **The graph term is never the interpretation.**

---

## 3. Energy language: useful model, not measured physics

The current interpretation layer deliberately uses terms such as:

```text
energy
current
field
resonance
compression
expansion
permeability
friction
coherence
standing-wave polarity
quadrature torque
```

These terms provide an intuitive phenomenological vocabulary for relationships among astrological functions.

They are **symbolic/metaphorical interpretive language**. Noetic Atlas does not currently claim that zodiacal placements or aspects have been demonstrated to produce measurable physical energies, frequencies, or forces.

The integrity state therefore records the energetic language as interpretive rather than astronomical or physical measurement.

This distinction allows spiritually meaningful exploration without misclassifying the epistemic status of the claim.

---

## 4. Actual house versus natural-house overlay

v0.4.1.2 supports an explicitly modern natural-house correspondence model:

```text
1H  ↔ Aries / Mars
2H  ↔ Taurus / Venus
3H  ↔ Gemini / Mercury
4H  ↔ Cancer / Moon
5H  ↔ Leo / Sun
6H  ↔ Virgo / Mercury
7H  ↔ Libra / Venus
8H  ↔ Scorpio / Mars (+ Pluto in modern rulership)
9H  ↔ Sagittarius / Jupiter
10H ↔ Capricorn / Saturn
11H ↔ Aquarius / Saturn (+ Uranus in modern rulership)
12H ↔ Pisces / Jupiter (+ Neptune in modern rulership)
```

Model ID:

```text
naf.interpretation.natural_house_overlay.modern.v1
```

This layer is secondary.

It does **not** mean that the 3rd house literally becomes Gemini or that every historical tradition used the twelve-letter alphabet.

The interpretive sequence for a hypothetical Ceres in Libra in the 3rd house is therefore:

```text
Ceres = nourishment / resourcing current
Libra = actual zodiacal style/frequency
3H    = actual lived field
Gemini/Mercury = secondary modern natural-house resonance
Venus = actual traditional ruler of Libra
```

That is a layered synthesis rather than a sign-house conflation.

---

## 5. Traditional condition substrate

The primitive condition engine is now implemented for the seven classical planets.

It computes:

- domicile;
- adversity;
- sign-level exaltation;
- sign-level depression/fall;
- standard/Dorothean triplicity role;
- Egyptian bound;
- planetary sect family;
- in-sect/out-of-sect relation;
- Whole-Sign angular-triad class.

Each factor has its own rule/source identity and ledger entry.

No single scalar `planet strength` value is produced.

v0.4.1.2 begins integrating these condition facts into the energetic reading itself so condition no longer sits only in a separate inspector.

Example distinction:

```text
Mercury ↔ Venus terminal SCC = topology
Venus in depression/fall in Virgo = astrological-rule condition
Mercury/Venus 3H↔2H exchange = house/ruler interpretation
“this is the dominant psychological circuit” = not established
```

---

## 6. Aspect geometry and energetic translation

The framework retains exact major-aspect geometry as deterministic structure.

The interpretive layer may describe major aspects through symbolic field mechanics:

```text
0°   conjunction → phase fusion / superposition
60°  sextile     → catalytic channel
90°  square      → quadrature torque / orthogonal interference
120° trine       → low-impedance phase coherence
180° opposition  → standing-wave polarity
```

These phrases are interpretive models downstream from the actual measured angular separation.

The angle itself is astronomical/computational. The energetic description is interpretive.

---

## 7. Ceres support

v0.4.1.2 recognizes Ceres as a `minor_body` when its coordinate is present in chart input.

The current Ceres interpretation profile is custom/modern and emphasizes:

- nourishment;
- harvest;
- enoughness;
- receiving support;
- being resourced;
- embodied pleasure;
- conditions under which life can grow.

The profile is not presented as a consensus Hellenistic doctrine.

### Astronomy limitation

The current birth-time astronomy adapter generates the major planetary bodies through Pluto but does not yet output a validated Ceres coordinate automatically.

Noetic Atlas therefore accepts Ceres through precomputed/user-supplied coordinates until a separately validated small-body adapter is implemented.

Unsupported coordinates remain unsupported rather than being guessed.

---

## 8. What the current system actually computes

### Civil time and astronomy

Current birth-data flow supports:

- local civil date/time;
- latitude/longitude;
- elevation;
- approximate IANA time-zone lookup with expert override;
- historical offset resolution;
- rejection of nonexistent local times;
- explicit handling of repeated DST times;
- Sun through Pluto through the current Astronomy Engine adapter;
- geocentric ecliptic longitude;
- longitudinal velocity/retrograde state;
- independently solved ASC and MC;
- geometric solar altitude for sect.

Current astronomy limitations remain explicit:

- automatic Ceres calculation not yet validated;
- Chiron not generated by the current birth-time adapter;
- lunar-node variants not yet generated;
- Black Moon Lilith/apogee variants not yet generated;
- Vertex not yet generated;
- fixed stars not yet implemented;
- large independent cross-provider validation remains incomplete.

### Astrological rule layer

Current deterministic baseline includes:

- tropical zodiac;
- Whole Sign houses;
- traditional domicile rulers;
- explicit major-aspect/orb policy;
- applying/separating where motion data exist;
- day/night sect;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- primitive classical condition;
- explicit rule/source identities.

### Graph/mathematical layer

Current outputs include:

- dispositor graph;
- SCCs and terminal SCCs;
- all-house ruler routes;
- terminal basin statistics;
- route depth;
- upstream capture;
- aspect degree;
- clustering;
- betweenness;
- articulation points;
- bridges;
- typed motifs;
- cross-layer edge overlap;
- elemental/modal composition;
- circular harmonic spectrum;
- exploratory multilayer participation counts.

---

## 9. What is useful today

Noetic Atlas is already stronger than a conventional wheel for some narrow tasks:

- tracing long dispositor chains;
- identifying terminal ruler cycles;
- counting which planets/houses feed a terminal component;
- distinguishing topology from traditional condition;
- reconstructing Hermetic lot calculations;
- auditing Whole Sign house assignment;
- inspecting aspect edges numerically;
- translating graph structures back into linked house fields;
- preserving provenance across all of the above.

The wheel remains faster for many trained astrologers when the task is immediate angular-pattern recognition.

The current claim is therefore not:

> Noetic Atlas replaces the wheel.

It is:

> Noetic Atlas exposes some structural questions that the wheel does not make easy to inspect, reproduce, compare, or audit.

---

## 10. What is not established

The current framework does **not** establish that:

- topology predicts life events better than traditional chart reading;
- SCC concentration has validated psychological meaning;
- graph centrality equals planetary importance;
- energetic language describes measured physical forces;
- Ceres necessarily governs abundance;
- natural-house correspondence is historically universal;
- visualization itself produces transformational insight;
- current interpretation profiles predict external outcomes;
- astrology as a whole is empirically validated by the mathematics used to represent it.

These distinctions are not rhetorical disclaimers. They define the research boundary.

---

## 11. Scientific justification by layer

### Graph theory

Tarjan SCC decomposition, path analysis, clustering, betweenness, articulation structure, and related measures are legitimate mathematical operations on encoded graphs.

They validate statements about the graph, not about astrology's causal truth.

### Information visualization

Graph/matrix research supports the use of coordinated representations for different tasks. This motivates Natal Field + Aspect Matrix + Flow Map rather than a claim that any one representation is universally superior.

### Multilayer networks

Network-science literature supports keeping relation layers separate rather than indiscriminately collapsing aspects, dispositors, reception, houses, lots, and time into one edge soup.

### Provenance

W3C PROV and FAIR-style principles motivate reversible derivation lineage, explicit model identifiers, and machine-readable metadata.

None of these fields independently validates astrological interpretation.

---

## 12. Research gates

### HCI / information-design validation

The first relatively tractable validation question is:

> Does Noetic Atlas allow astrologers or users to recover structural astrological information more reliably, quickly, or consistently than a conventional wheel?

Candidate tasks:

- identify terminal dispositors;
- trace ruler chains;
- identify mutual receptions;
- reconstruct exact aspects;
- reproduce lot calculations;
- follow activated ruler paths.

Candidate measures:

- error rate;
- completion time;
- inter-rater agreement;
- cognitive load;
- learning rate.

This can test representational value without validating astrology itself.

### Graph null models

Claims such as `rare`, `high`, `unusual`, or `enriched` remain blocked until explicit baselines exist.

Candidate nulls:

```text
randomized longitudes
label permutation
appropriate degree-preserving rewiring
layer-overlap randomization
```

### Interpretation research

Later work may ask whether new descriptors or condition-qualified patterns correlate reproducibly with external life phenomena.

Null findings must remain acceptable outcomes.

---

## 13. Current engineering priorities

### Relational condition

```text
reception / exchange
→ overcoming
→ selected compound condition
```

### Interpretive depth

```text
house-ruler synthesis
→ whole-chart motif synthesis
→ curated interpretation profiles
→ yoga/Ayurvedic practice layer
→ selectable interpretive postures
```

### Graph research

```text
null models
→ motif enrichment
→ multilayer overlap baselines
→ comparative chart architecture
```

### Time

Only after the natal state is structurally and semantically characterized should Life Spectrum activate it:

```text
N_i = geometry + topology + condition + interpretation metadata
T(t) = temporal input
X_i(t) = F(N_i, T(t), rule-set versions)
```

The interpretation itself must not become an input that silently changes deterministic astronomy or rule calculations.

---

## 14. Current product thesis

The strongest current description is:

> **Noetic Atlas is an instrumentation layer for astrology that is becoming an explainable interpretive system.**

Its strongest accomplishment is not that it has discovered a new theory of the psyche.

It is that it can turn implicit relations into explicit objects, keep the mathematics/rules auditable, and then translate those structures into readable house-aware hypotheses without pretending the interpretation has the same epistemic status as the calculation.

The conceptual pipeline is:

```text
Astrological model
→ formal structures
→ observable representations
→ readable synthesis
→ testable questions
```

That is the standard against which future features should be judged.
