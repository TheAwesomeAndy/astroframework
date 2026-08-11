# Noetic Atlas

**An auditable visual-analytics framework for astrological structure, topology, condition, energetic synthesis, graph analysis, and time.**

> **See the structure. Follow the flow. Understand the pattern. Show the work.**

Noetic Atlas is an experimental computational framework for representing astrology as a multilayer symbolic system rather than forcing every relationship into a single horoscope wheel.

The project has two linked goals:

1. build a useful public/professional instrument for exploring astrological structure, condition, interpretation, and timing;
2. build a research environment in which structural, interpretive, and temporal claims can be formulated, reproduced, compared with alternatives, and rejected when they fail.

The underlying research framework is the **Noetic Atlas Framework (NAF)**.

## Current release

**Current public release:** v0.4.1.2 — Energetic Whole-Chart Synthesis  
**Energetic interpretation model:** `naf.interpretation.energetic_synthesis.v0.4.1.2`  
**Natural-house overlay:** `naf.interpretation.natural_house_overlay.modern.v1`  
**Graph-analysis model:** `naf.research.graph_analytics.v0.4.1`  
**Primitive condition model:** `naf.condition.primitive.hellenistic.v0.4.0b`  
**Condition record schema:** `naf.condition.record.v0.4.0a`  
**Structural analysis envelope:** `naf.analysis.v0.3.1`  
**Default/deployed branch:** `main`

The public Pages build follows `main`.

Current browser surface:

```text
prototype/v0412b.html
```

v0.4.1.2 changes the role of the interpretation layer:

```text
graph ≠ reading
metric ≠ meaning

coordinate / rule / graph fact
→ energetic translation
→ actual sign + actual Whole Sign house
→ ruler/dispositor routing
→ aspect geometry
→ traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life manifestation
→ soul/spirit inquiry
→ proof
```

The interface uses energy/current/field language as a **symbolic interpretive model**, not as a claim that astrology has been experimentally demonstrated to operate through measurable physical forces.

---

## Implemented structural substrate

- local birth date/time + latitude/longitude input;
- historical civil-time/time-zone resolution with DST ambiguity handling;
- astronomy adapter for Sun through Pluto;
- independently calculated ASC and MC;
- planetary longitudinal velocity / retrograde state;
- Whole Sign house calculation;
- major aspects under an explicit orb policy;
- applying/separating when motion data exist;
- traditional domicile rulership;
- directed dispositor graph;
- Tarjan strongly connected components and terminal SCCs;
- all-house ruler routes;
- chart sect;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- derivation/provenance ledger and derivation tree;
- interactive SVG Natal Field;
- computed Aspect Matrix;
- directed Flow Map with SCC highlighting and house-route tracing;
- graph-linked node/edge inspection;
- automated integrity/boundary tests in GitHub Actions.

## Primitive condition substrate

For Sun, Moon, Mercury, Venus, Mars, Jupiter, and Saturn, the condition engine independently computes:

- domicile;
- adversity/opposite domicile;
- sign-level exaltation;
- sign-level depression/fall;
- standard/Dorothean triplicity participation and active sect ruler;
- Egyptian bound/term under explicit `[start,end)` degree conventions;
- planetary sect family;
- in-sect / out-of-sect condition relative to chart sect;
- Whole-Sign angular-triad class: angular, succedent, declining.

Every factor creates an independent source- and rule-versioned ledger entry. **No scalar planet-strength score is calculated.**

See:

- [`docs/V040A_CONDITION_ONTOLOGY.md`](docs/V040A_CONDITION_ONTOLOGY.md)
- [`docs/V040B_PRIMITIVE_CONDITION.md`](docs/V040B_PRIMITIVE_CONDITION.md)
- [`docs/CONDITION_ENGINE_SPEC.md`](docs/CONDITION_ENGINE_SPEC.md)

---

# v0.4.1 — Graph Analytics + Explainable Findings

The graph layer asks what additional structural facts can be **derived from the graph itself**, why those facts matter mathematically, and how any astrological interpretation should remain downstream from the derivation.

The implementation lives in:

```text
src/research/graph-analytics-engine.mjs
```

and is integrated into:

```text
src/research/pattern-engine.mjs
```

## Classical dispositor functional graph

Under traditional domicile rulership the classical-seven network is treated as a functional directed graph. Current derivations include:

- SCC condensation;
- terminal basin membership and basin fraction;
- route depth to terminal SCC;
- upstream route capture;
- largest nonterminal path bottleneck.

For the canonical regression specimen:

```text
terminal SCC: Mercury ↔ Venus
terminal basin: 7 / 7
Jupiter route depth: 3
Saturn route depth: 2
Mars route depth: 1
largest nonterminal route bottleneck: Mars
Mars upstream capture: 3 routes
```

Those are graph-derived facts under the selected rulership model. They are not, by themselves, claims of psychological dominance, destiny, causation, or spiritual superiority.

## Aspect-network analysis

The aspect layer is treated as a separate graph:

```text
G_aspect = (V, E_aspect)
```

Current calculations include:

- connected components;
- degree;
- local and mean clustering coefficient;
- normalized unweighted betweenness centrality;
- articulation points;
- bridges;
- closed three-node typed motifs;
- exact ≤1° edge subset;
- Grand Trine, T-square, and triple-conjunction templates.

The word **motif** is used cautiously. The engine detects typed subgraphs but does not claim statistical motif enrichment until explicit null models exist.

## Cross-layer overlap

The first explicit multiplex comparison is:

```text
E_aspect ∩ E_dispositor
```

The relation layers remain separate. Noetic Atlas does not collapse overlap into a single opaque connection-strength score.

The intended graph family is:

```text
G = {
  G_aspect,
  G_dispositor,
  G_reception,
  G_overcoming,
  G_house,
  G_lot,
  G_temporal(t)
}
```

---

# v0.4.1.2 — Energetic Whole-Chart Synthesis

v0.4.1.2 introduces a dedicated interpretation layer:

```text
src/interpretation/energetic-synthesis-engine.mjs
src/interpretation/energetic-synthesis-display.mjs
```

The core requirement is:

> **The graph term is never the interpretation.**

A technical statement such as `terminal basin = 7/7` remains available in the proof layer. The public reading must translate it into the planetary functions, signs, houses, ruler pathways, aspect geometry, and condition states that make the structure meaningful inside the selected astrological model.

## Placement synthesis

For a placement `P` in sign `S` and Whole Sign house `H`, the reading separates:

```text
P = what archetypal current is being described?
S = how does that current move or organize itself?
H = where does that current repeatedly become lived?
```

The actual sign and actual Whole Sign house remain primary.

A secondary **modern natural-house overlay** may add:

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

This overlay is explicitly versioned as a modern correspondence model. It does **not** replace the actual house sign and is not presented as a universal Hellenistic doctrine.

Example:

```text
Mercury in Libra in 3H
```

is interpreted as:

```text
Mercury current
carried through Libra
operating in the concrete 3H field
with a secondary Gemini/Mercury natural-house resonance
then routed through Libra's ruler Venus
```

## Houses and ruler routing

Every placement is treated as part of a dependency system rather than as a sealed paragraph.

```text
placement
→ sign ruler
→ ruler of that ruler
→ ...
→ terminal circuit
```

The houses occupied by routed planets convert abstract topology into linked life fields.

For the canonical specimen:

```text
Mercury in Libra, 3H
↔
Venus in Virgo, 2H
```

The Mercury–Venus terminal SCC is therefore also a recurring **3H ↔ 2H house circuit**. The graph proves the routing structure conditional on traditional domicile rulers; the downstream energetic interpretation asks how communication/knowledge and value/resources repeatedly feed one another in lived experience.

## Condition-aware interpretation

Primitive traditional condition is no longer only a separate inspector. Classical-planet energetic readings now receive explicit qualifiers from:

- domicile/adversity;
- exaltation/depression;
- triplicity role;
- Egyptian bound;
- chart sect relation;
- Whole-Sign angular-triad class.

These factors qualify how a planetary function is situated in the selected traditional model without collapsing the chart into a scalar `strength` score.

## Balanced, depleted, and excessive expression

Major placement analyses distinguish:

```text
balanced / proportionate expression
under-expression / depletion
over-driven / excessive expression
```

This prevents an archetype from being turned into a command to express more of itself. The purpose is regulation and intelligibility, not moral ranking.

## Material and soul-level translation

The reading layer now explicitly asks:

- Where could this energy become visible in ordinary life?
- Which skills/resources may be available through the configuration?
- What does depletion look like?
- What does excess look like?
- What is the house-level material field involved?
- What soul/spirit-level question may be worth investigating?
- What small experiment could let the user test the interpretation against lived experience?

Material examples are downstream manifestations of the symbolic model; they are not the definition of the placement.

---

## Ceres

v0.4.1.2 recognizes Ceres as a `minor_body` when a coordinate is supplied and includes a dedicated custom/modern interpretation profile centered on:

- nourishment;
- harvest;
- enoughness;
- being resourced;
- receiving support;
- embodied pleasure;
- conditions that allow life to grow.

This profile is explicitly identified as a modern/custom interpretive model rather than a consensus Hellenistic doctrine.

### Current astronomy limitation

The birth-time astronomy adapter currently generates the major planetary bodies through Pluto. It does **not** yet emit a validated Ceres coordinate automatically.

Noetic Atlas therefore supports Ceres through precomputed or user-supplied coordinates until a separately validated small-body astronomy adapter is added. Unsupported coordinates are not invented.

See [`docs/V0412_ENERGETIC_SYNTHESIS.md`](docs/V0412_ENERGETIC_SYNTHESIS.md).

---

## Explainability and epistemic status

Noetic Atlas is currently best described as an **auditable visual-analytics and interpretation framework for a formalized astrological rule model**.

Graph theory establishes mathematical properties of a graph **after the graph has been defined**. It does not establish the empirical validity of the astrological rules used to construct that graph.

The framework maintains six epistemic categories:

```text
input
astronomical-computation
astrological-rule
graph-derived
research-exploratory
interpretive-inference
```

Energetic interpretation is downstream `interpretive-inference`. The system deliberately preserves the evidence chain beneath the reading.

The core pipeline is:

```text
Astrological model
→ formal structures
→ observable representations
→ readable synthesis
→ testable questions
```

not:

```text
birth data → proven mystical truth
```

The energetic vocabulary is phenomenological/symbolic language for interacting astrological functions, not a claim of established physical field mechanics.

---

## Null-model gate

The next major graph-research requirement remains explicit baselines:

### Geometric null

Randomize longitudes and recompute aspects.

### Label null

Keep geometry fixed while permuting body identities.

### Degree-preserving graph null

Rewire edges while preserving degree sequence where mathematically appropriate.

### Layer-overlap null

Preserve layer size/density while randomizing pair assignments.

Only after comparison may the interface make statistical claims about unusualness or enrichment.

---

## Formal ontology

The current abstract representation remains:

```text
A = {P, H, S, E, R, L, C, T}
```

| Symbol | Meaning |
|---|---|
| `P` | planets, angles, nodes, lots, selected points |
| `H` | houses/places |
| `S` | sign and categorical states |
| `E` | aspects and pairwise relations |
| `R` | rulers, dispositors, reception, dependencies |
| `L` | lots and derived coordinates |
| `C` | planetary/relational condition |
| `T` | transits and timing regimes |

Current development sequence:

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

## Still not implemented

- automatic validated Ceres/small-body astronomy;
- reception / mutual reception graph;
- overcoming graph;
- bonification / maltreatment;
- enclosure / compound mitigation;
- degree-based quadrant dynamic strength;
- graph null distributions;
- statistical motif enrichment;
- condition-weighted graph experiments;
- temporal Life Spectrum;
- externally validated predictive interpretation model.

---

## Tests

```bash
npm install
npm test
```

The standard suite includes:

- kernel regression;
- integrity regression;
- condition registry/schema tests;
- primitive condition tests;
- graph-analytics regression;
- astrological-analysis regression;
- energetic-synthesis regression, including Ceres and house-overlay fixtures;
- v0.4.1 / v0.4.1.1 legacy UI contracts;
- v0.4.1.2 UI contract and browser-module parse check;
- geometry/boundary tests;
- timezone tests;
- astronomy adapter contract tests.

Run locally:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/prototype/v0412b.html
```

---

## Design rules

1. Calculation before narration.
2. Resolution over prophecy.
3. Structure before meaning.
4. A graph term is never the final interpretation.
5. Houses must remain first-class astrological fields.
6. Ruler/dispositor pathways must remain visible in interpretation.
7. Show the work.
8. Never manufacture precision.
9. Ambiguity is data.
10. Unsupported is better than guessed.
11. Traditions are explicit rule models, not hidden mixtures.
12. The modern natural-house correspondence is a labeled overlay, not a historical universal.
13. No opaque condition/strength score.
14. No naked graph metric.
15. Graph fact and interpretation must remain separately labeled.
16. A graph is an encoded model, not evidence that astrology is a physical network.
17. Do not call a graph feature unusual without a defined baseline.
18. The wheel remains a reference, not an enemy.
19. AI navigates deterministic state; it does not replace it.
20. A failed hypothesis is an acceptable result.
21. A feature that only makes astrology look interesting does not belong.
22. A feature that exposes a structural question difficult to inspect, reproduce, compare, or test may belong.
23. Energetic language may be spiritually and phenomenologically useful without being mislabeled as experimental physics.

---

## Next engineering gates

### Astrological condition

```text
G_reception
→ exchange / mutual reception
→ G_overcoming
→ selected compound condition
```

### Interpretive depth

```text
house-ruler synthesis
→ condition-aware whole-chart motifs
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

These tracks meet before Life Spectrum so that temporal activation operates on a natal architecture that is mathematically inspectable, traditionally characterized, and humanly intelligible.

---

## Documentation

Recommended starting points:

1. [`docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)
2. [`docs/V0412_ENERGETIC_SYNTHESIS.md`](docs/V0412_ENERGETIC_SYNTHESIS.md)
3. [`docs/V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](docs/V041_GRAPH_ANALYTICS_AND_FINDINGS.md)
4. [`docs/V040B_PRIMITIVE_CONDITION.md`](docs/V040B_PRIMITIVE_CONDITION.md)
5. [`docs/V040A_CONDITION_ONTOLOGY.md`](docs/V040A_CONDITION_ONTOLOGY.md)
6. [`docs/THEORY_AND_PURPOSE.md`](docs/THEORY_AND_PURPOSE.md)
7. [`docs/DEVELOPER_GUIDE.md`](docs/DEVELOPER_GUIDE.md)
8. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
9. [`docs/ASTROLOGICAL_MODEL.md`](docs/ASTROLOGICAL_MODEL.md)
10. [`docs/RESEARCH_PROGRAM.md`](docs/RESEARCH_PROGRAM.md)
11. [`docs/ROADMAP.md`](docs/ROADMAP.md)

---

## North star

The intended experience is not:

> “Here is your horoscope.”

Nor is it merely:

> “Here is your graph.”

It is:

> **Here is the architecture. Here is how the energy is modeled. Here is where it lives in the houses. Here is how the rulers route it. Here is what the mathematics establishes. Here is the traditional condition that qualifies it. Here is what may be worth investigating in lived experience. Here is the proof.**
