# Noetic Atlas

**An auditable visual-analytics framework for astrological structure, topology, condition, graph analysis, and time.**

> **See the structure. Follow the flow. Explain the pattern. Show the work.**

Noetic Atlas is an experimental computational framework for representing astrology as a multilayer symbolic system rather than forcing every relationship into a single horoscope wheel.

The project has two linked goals:

1. build a useful public/professional instrument for exploring astrological structure and timing;
2. build a research environment in which structural and temporal claims can be formulated, reproduced, compared with alternatives, and rejected when they fail.

The underlying research framework is the **Noetic Atlas Framework (NAF)**.

## Current development state

**Development candidate:** v0.4.1 — Graph Analytics + Explainable Findings  
**Development branch:** `noetic-atlas-v0.4.1-graph-findings`  
**Graph-analysis model:** `naf.research.graph_analytics.v0.4.1`  
**Finding model:** `naf.finding.explainable.v0.4.1`  
**Primitive condition model:** `naf.condition.primitive.hellenistic.v0.4.0b`  
**Condition record schema:** `naf.condition.record.v0.4.0a`  
**Structural analysis envelope:** `naf.analysis.v0.3.1`  
**Default/deployed branch:** `main`

The public Pages build follows `main`. Until v0.4.1 is explicitly promoted, the deployed site remains the latest tested `main` release.

Local v0.4.1 testing surface:

```text
prototype/v041.html
```

v0.4.1 changes the role of visualization in the product:

```text
graph ≠ conclusion

graph
→ derivation
→ measurement
→ readable finding
→ explicitly labeled interpretive hypothesis
→ proof
```

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

The earlier graph views exposed structure. v0.4.1 asks what additional structural facts can be **derived from the graph itself**, why those facts matter mathematically, and how any astrological interpretation should be separated from the derivation.

The implementation lives in:

```text
src/research/graph-analytics-engine.mjs
```

and is integrated into:

```text
src/research/pattern-engine.mjs
```

## 1. Classical dispositor functional-graph analysis

The condition-qualified rulership analysis uses a classical-seven subgraph rather than silently mixing the condition system with modern outer-planet nodes.

Under traditional domicile rulership each classical planet has one outgoing ruler edge when the full classical set is present. v0.4.1 therefore treats this as a functional directed graph and computes:

### SCC condensation

```text
G_dispositor → G_SCC
```

Strongly connected components are collapsed into supernodes, producing an acyclic condensation graph.

### Terminal basin capture

For terminal SCC `C`:

```text
B(C) = {v : v reaches C}
β(C) = |B(C)| / |V|
```

This measures routing concentration into a terminal component. It is **not** a strength score.

### Route depth

```text
d(v,C) = number of ruler transitions before first entry into terminal SCC C
```

This distinguishes immediate terminal membership from multi-step dependency chains.

### Upstream capture / preterminal bottleneck

```text
A(v) = {u : v occurs on route(u)}
```

The engine identifies the most traversed **nonterminal** node so that terminal-cycle members do not trivially dominate the measure.

For the canonical regression specimen, the current expected classical structure is:

```text
terminal SCC: Mercury ↔ Venus
terminal basin: 7 / 7
Jupiter route depth: 3
Saturn route depth: 2
Mars route depth: 1
largest nonterminal route bottleneck: Mars
Mars upstream capture: 3 routes
```

These are graph-derived facts under the selected rulership model. Their life meaning remains a separate hypothesis.

## 2. Aspect-network analysis

The aspect layer is treated as a different graph object:

```text
G_aspect = (V, E_aspect)
```

v0.4.1 currently computes:

- connected components;
- degree;
- local clustering coefficient;
- mean clustering coefficient;
- normalized unweighted betweenness centrality;
- articulation points;
- bridges;
- closed three-node typed motifs;
- exact ≤1° edge subset.

### Typed motif detection

Three-node cliques retain their edge types. Current named templates include:

```text
trine + trine + trine                    → Grand Trine
square + square + opposition             → T-square
conjunction + conjunction + conjunction  → triple conjunction
```

The engine does not infer motifs from visual proximity. It derives them from admitted aspect edges.

The word **motif** is used cautiously. Network-science motif enrichment normally involves randomized comparison. v0.4.1 detects typed subgraphs but does not claim statistical enrichment until null models exist.

## 3. Cross-layer overlap

The first explicit multiplex comparison is:

```text
E_aspect ∩ E_dispositor
```

This asks which pairs are independently related by angular geometry and rulership dependency.

The underlying edges remain separate. Noetic Atlas does not convert overlap into an additive “connection strength.”

The intended future graph family is:

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

## Explainable metrics

A naked metric is not considered a complete analytical result.

Every v0.4.1 promoted metric carries:

```text
id
label
value
unit
scope
definition
formula
observation
graph_theory_meaning
astrological_context
interpretive_hypothesis
limits
calculation model
inputs
result
ledger references
```

The interface therefore avoids statements such as:

> clustering = 0.61

without explaining what clustering is, which graph was measured, what generated that graph, and what cannot be inferred from the value.

v0.4.1 also deliberately refuses labels such as:

```text
high
low
rare
dominant
exceptional
```

unless a comparison or null distribution exists.

## Explainable findings

A finding synthesizes one or more graph derivations into a readable evidence object.

The required presentation order is:

```text
Observation / statement
→ Measurement
→ Graph-theory meaning
→ Astrological rule context
→ Interpretive hypothesis — not validated
→ Limits
→ Proof
```

Finding objects include participating nodes/edges and ledger references so the UI can connect readable analysis back to the structure that generated it.

Examples currently generated include:

- terminal rulership architecture;
- preterminal ruler bottleneck;
- typed aspect motifs;
- aspect-network articulation structure;
- repeated pair coupling across aspect and dispositor layers.

When primitive condition is supplied, terminal-rulership findings can also carry the **separate condition records** of terminal SCC members without collapsing condition into topology.

---

## v0.4.1 interface

The new testing surface makes readable analysis the default right-hand workspace.

### Findings

Evidence-backed structural synthesis. Each finding displays graph meaning, astrological context, an explicitly unvalidated interpretive hypothesis, limits, participating nodes, and proof.

### Metrics

Every metric is shown with definition, formula, observation, interpretation boundary, and integrity object.

### Condition

The primitive condition substrate remains available as a separate node-state layer.

### Integrity

Displays the complete selected finding/metric proof object, model IDs, restrictions, and ledger references.

The visual graph remains interactive, but the governing product principle is now:

> **The visualization should expose the analysis. The visualization is not the novelty by itself.**

---

## Scientific and epistemic status

Noetic Atlas is currently best described as an **auditable visual-analytics and research framework for a formalized astrological rule model**.

Graph theory establishes mathematical properties of a graph **after the graph has been defined**. It does not establish the empirical validity of the astrological rules used to construct that graph.

Similarly:

```text
terminal SCC                 graph-derived fact
basin fraction               graph-derived metric
Venus in fall in Virgo       astrological-rule result
“this circuit dominates life” interpretive claim, not established
```

The framework maintains six epistemic categories:

```text
input
astronomical-computation
astrological-rule
graph-derived
research-exploratory
interpretive-inference
```

Graph findings in v0.4.1 remain `research-exploratory` and their interpretive text remains `hypothesis-not-validated`.

### Technical foundations

The graph-analytics program is informed by established graph/network methods, including:

- Robert Tarjan, “Depth-First Search and Linear Graph Algorithms,” *SIAM Journal on Computing* 1(2), 1972. DOI `10.1137/0201010` — strongly connected components and low-link graph structure.
- Ulrik Brandes, “A Faster Algorithm for Betweenness Centrality,” *Journal of Mathematical Sociology* 25(2), 2001. DOI `10.1080/0022250X.2001.9990249` — betweenness computation.
- Ron Milo et al., “Network Motifs: Simple Building Blocks of Complex Networks,” *Science* 298(5594), 2002. DOI `10.1126/science.298.5594.824` — motif analysis and the need for randomized comparison.
- Mikko Kivelä et al., “Multilayer Networks,” *Journal of Complex Networks* 2(3), 2014. DOI `10.1093/comnet/cnu016` — preserving multiple relation types rather than collapsing them into one network.

These references justify the mathematics and research design. They do not validate astrology as a causal physical theory.

---

## Null-model gate

The next major **research** requirement is explicit graph baselines.

Candidate nulls include:

### Geometric null

Randomize longitudes and recompute aspects.

### Label null

Keep geometry fixed while permuting body identities.

### Degree-preserving graph null

Rewire edges while preserving degree sequence where mathematically appropriate.

### Layer-overlap null

Preserve layer size/density while randomizing pair assignments.

For graph descriptor `M`:

```text
M_observed
vs
{M_null^(1), ..., M_null^(N)}
```

Only after that comparison may the main interface make statistical claims about unusualness or enrichment.

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

The development sequence is now more precisely:

```text
Geometry
→ Topology
→ Primitive Condition
→ Graph Analytics / Explainable Findings
→ Relational Condition
→ Compound Condition
→ Activation
→ Recurrence / Discovery
```

The analytics layer is inserted before additional astrological relation layers because adding more facts without improving synthesis would merely enlarge the dashboard.

---

## Still not implemented

- reception / mutual reception graph;
- overcoming graph;
- bonification / maltreatment;
- enclosure / compound mitigation;
- degree-based quadrant dynamic strength;
- graph null distributions;
- statistical motif enrichment;
- condition-weighted centrality;
- temporal Life Spectrum;
- validated interpretation model.

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
- v0.4.1 UI contract and browser-module parse check;
- geometry/boundary tests;
- timezone tests;
- astronomy adapter contract tests.

Run locally:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/prototype/v041.html
```

---

## Design rules

1. Calculation before narration.
2. Resolution over prophecy.
3. Structure before meaning.
4. Show the work.
5. Never manufacture precision.
6. Ambiguity is data.
7. Unsupported is better than guessed.
8. Traditions are explicit rule models, not hidden mixtures.
9. No opaque condition/strength score.
10. No naked graph metric.
11. Graph fact and interpretive hypothesis must remain separately labeled.
12. A graph is an encoded model, not evidence that astrology is a physical network.
13. Do not call a graph feature unusual without a defined baseline.
14. The wheel remains a reference, not an enemy.
15. AI navigates deterministic state; it does not replace it.
16. A failed hypothesis is an acceptable result.
17. A feature that only makes astrology look interesting does not belong.
18. A feature that exposes a structural question difficult to inspect, reproduce, compare, or test may belong.

---

## Next engineering gates

Two tracks now proceed in controlled sequence.

### Graph research

```text
null models
→ motif enrichment
→ multilayer overlap baselines
→ comparative chart architecture
```

### Astrological condition

```text
G_reception
→ G_overcoming
→ selected compound condition
```

The two tracks meet before Life Spectrum so that temporal activation operates on a natal architecture that is both semantically richer and analytically inspectable.

---

## Documentation

Recommended starting points:

1. [`docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)
2. [`docs/V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](docs/V041_GRAPH_ANALYTICS_AND_FINDINGS.md)
3. [`docs/THEORY_AND_PURPOSE.md`](docs/THEORY_AND_PURPOSE.md)
4. [`docs/DEVELOPER_GUIDE.md`](docs/DEVELOPER_GUIDE.md)
5. [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
6. [`docs/ASTROLOGICAL_MODEL.md`](docs/ASTROLOGICAL_MODEL.md)
7. [`docs/V040A_CONDITION_ONTOLOGY.md`](docs/V040A_CONDITION_ONTOLOGY.md)
8. [`docs/V040B_PRIMITIVE_CONDITION.md`](docs/V040B_PRIMITIVE_CONDITION.md)
9. [`docs/RESEARCH_PROGRAM.md`](docs/RESEARCH_PROGRAM.md)
10. [`docs/ROADMAP.md`](docs/ROADMAP.md)

---

## North star

The intended experience is not:

> “Here is your horoscope.”

Nor is it merely:

> “Here is your graph.”

It is:

> **Here is the structure. Here is what the structure implies mathematically. Here is the astrological rule that produced it. Here is one hypothesis worth investigating. Here is what remains unknown. Here is the proof.**
