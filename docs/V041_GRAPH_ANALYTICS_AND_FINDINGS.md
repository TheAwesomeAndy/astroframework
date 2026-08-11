# Noetic Atlas v0.4.1 — Graph Analytics + Explainable Findings

## Purpose

v0.4.1 changes the role of graph visualization in Noetic Atlas.

The graph is no longer treated as the product conclusion. It is an encoded substrate from which additional structural facts can be derived, measured, explained, inspected, and later tested.

The intended pipeline is:

```text
astrological rule model
→ graph construction
→ graph derivation
→ graph measurement
→ explainable finding
→ explicitly labeled interpretive hypothesis
```

A finding is therefore not synonymous with a metric and a metric is not synonymous with an interpretation.

## Models

```text
naf.research.graph_analytics.v0.4.1
naf.finding.explainable.v0.4.1
```

Status:

```text
research-exploratory
hypothesis-not-validated
```

v0.4.1 does not claim that graph centrality, route depth, motif membership, or basin capture are empirically validated measures of personality, fate, spiritual development, predictive importance, or physical energy.

## Why this layer exists

Earlier versions could expose:

- aspect geometry;
- directed dispositor routing;
- strongly connected components;
- terminal SCCs;
- primitive planetary condition.

Those are useful structural facts, but presenting them as diagrams still leaves most synthesis to the user.

v0.4.1 introduces a second analytical layer that asks:

1. What higher-order structure follows from the graph?
2. What does the metric mean mathematically?
3. What astrological rule produced the graph being measured?
4. What interpretive hypothesis, if any, is reasonable to investigate?
5. What would be an overclaim?
6. Can the complete calculation be reconstructed?

## Graph scopes

### Classical dispositor graph

The condition engine is source-defined for the classical seven planets. Therefore v0.4.1 creates a separate classical dispositor subgraph:

```text
Sun
Moon
Mercury
Venus
Mars
Jupiter
Saturn
```

Under traditional domicile rulership each classical node has one outgoing ruler edge when all classical rulers are present. This makes the graph a functional digraph under the current model.

The broader all-planet dispositor graph remains available elsewhere in the framework, but it must not be silently conflated with the classical condition-qualified graph.

### Aspect graph

The aspect graph is a different mathematical object:

```text
G_aspect = (V, E_aspect)
```

It is treated as an undirected typed graph for v0.4.1. An edge contains the admitted major aspect type, orb, phase, and provenance from the existing aspect engine.

Objects such as lots, angles, and Chiron can participate when they exist in the computed aspect layer. This broader object scope is stated explicitly in every affected metric.

## Dispositor analytics

### SCC condensation

Every strongly connected component is collapsed to one supernode to create the condensation graph.

```text
G → G_SCC
```

The condensation graph is acyclic. Terminal SCCs are components with no outgoing edge to another component.

Noetic Atlas already used Tarjan SCC detection. v0.4.1 now exposes the condensation structure as an analytical object rather than only highlighting SCC members visually.

Reference:

- Robert Tarjan, “Depth-First Search and Linear Graph Algorithms,” *SIAM Journal on Computing* 1(2), 1972. DOI `10.1137/0201010`.

### Terminal basin capture

For a terminal component `C`:

```text
B(C) = {v : v reaches C}
β(C) = |B(C)| / |V|
```

This measures what fraction of the selected graph drains into the same terminal SCC.

It is a routing fact. It is not a planetary-strength score.

### Route depth

For node `v`:

```text
d(v,C) = number of ruler transitions before first entry into terminal SCC C
```

Cycle members receive depth `0` by convention.

Route depth distinguishes immediate terminal membership from multi-step ruler dependency. It does not state that longer routes are weaker or worse.

### Upstream capture / preterminal bottleneck

For node `v`:

```text
A(v) = {u : v occurs on route(u)}
```

v0.4.1 ranks nonterminal nodes by the number of classical ruler routes that traverse them before terminal entry.

Terminal-cycle members are excluded from this bottleneck ranking because every route in their basin eventually enters the cycle, which would make the result structurally trivial.

This metric is designed specifically for the functional dispositor graph rather than importing a generic centrality score with unclear semantics.

## Aspect analytics

### Connected components

The engine computes the connected components of the admitted aspect graph.

### Degree

For node `v`:

```text
d(v) = number of admitted aspect neighbors
```

Degree remains a structural count only.

### Local and mean clustering

For a node of degree `k_v` with `T_v` links among its neighbors:

```text
C_v = 2 T_v / (k_v (k_v - 1))
```

The reported mean clustering is the arithmetic mean over nodes in the current aspect graph.

Noetic Atlas does not label the observed coefficient high or low until a comparison or null distribution is defined.

### Betweenness centrality

v0.4.1 computes unweighted normalized betweenness for the admitted aspect graph using the Brandes dependency-accumulation method.

Reference:

- Ulrik Brandes, “A Faster Algorithm for Betweenness Centrality,” *The Journal of Mathematical Sociology* 25(2), 2001. DOI `10.1080/0022250X.2001.9990249`.

Betweenness is retained as a research descriptor. It is not currently elevated into a consumer-facing claim that a planet is more important.

### Articulation points and bridges

An articulation point is a node whose removal increases the number of connected components. A bridge is an edge whose removal disconnects previously connected graph regions.

These are useful because their graph meaning is exact and intelligible:

> this object literally connects aspect regions that otherwise separate under the active edge policy.

Any astrological meaning assigned to that structural fact remains downstream interpretation.

### Typed triangle motifs

v0.4.1 searches all three-node cliques and preserves the aspect type of each edge.

Recognized templates include:

```text
trine + trine + trine                 → Grand Trine
square + square + opposition          → T-square
conjunction + conjunction + conjunction → triple conjunction
```

Other closed triangles remain typed triangles without being forced into a named astrological configuration.

The broader network-science concept of a motif normally includes comparison with randomized networks. v0.4.1 therefore uses the phrase **typed motif detection**, but it does not claim statistical motif enrichment yet.

Reference:

- Ron Milo et al., “Network Motifs: Simple Building Blocks of Complex Networks,” *Science* 298(5594), 2002. DOI `10.1126/science.298.5594.824`.

## Cross-layer analysis

v0.4.1 introduces the first explicit layer-overlap calculation:

```text
E_aspect ∩ E_dispositor
```

The comparison is performed on unordered node pairs while preserving the original directed dispositor record and typed aspect record in the proof object.

This answers a precise question:

> Which pairs are related under more than one independently defined astrological relation layer?

It does not collapse those layers into a single “strong connection” score.

The intended future graph model remains multiplex:

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

## Explainable Metric object

Every promoted v0.4.1 metric carries:

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
integrity.calculation
integrity.inputs
integrity.result
integrity.ledger_refs
```

A naked number is not considered a complete analytical result.

## Explainable Finding object

A finding is a synthesis object built from one or more graph derivations.

Every finding carries:

```text
id
title
category
statement
measurement
scope.nodes
scope.edges
graph_theory_meaning
astrological_context
interpretive_hypothesis
limits
proof formula
proof inputs
proof result
ledger references
```

The interface presents these in the explicit order:

```text
Observation / statement
→ Measurement
→ Graph-theory meaning
→ Astrological rule context
→ Interpretive hypothesis — not validated
→ Limits
→ Proof
```

This ordering is part of the epistemic contract.

## Condition-qualified findings

When the primitive condition substrate is supplied, a terminal-rulership finding can include separate condition summaries for the terminal SCC members.

For example, the system may establish all of the following without collapsing them:

```text
Mercury ↔ Venus is a terminal SCC                  graph-derived
7/7 classical planets route into that SCC          graph-derived
Venus has depression/fall in Virgo                 astrological-rule result
Mercury is the active Air night triplicity ruler   astrological-rule result
```

A downstream finding may then propose an interpretive hypothesis about the qualified terminal circuit while preserving the derivation boundary between those statements.

## Canonical regression specimen

For `NAF-CANON-0001`, the v0.4.1 test suite currently expects:

```text
classical terminal SCC: Mercury ↔ Venus
terminal basin capture: 7 / 7 = 1.0
Jupiter route depth: 3
Saturn route depth: 2
Mars route depth: 1
largest nonterminal path bottleneck: Mars
Mars upstream capture: 3 classical routes
Sun–Moon–Jupiter: Grand Trine typed motif
at least one T-square typed motif in the full-object aspect graph
```

These expectations are regression facts under the active input, rule, and orb models. They are not population-level findings.

## User interface

The v0.4.1 prototype adds four first-class analysis panes:

### Findings

Readable structural synthesis is the default surface.

### Metrics

Every value is accompanied by definition, formula, observation, graph meaning, astrological context, hypothesis, limits, and calculation proof.

### Condition

Primitive condition remains available as a separate node-state layer.

### Integrity

Shows the selected finding/metric proof object, graph/finding model identifiers, restrictions, and relation to the underlying Derivation Ledger.

The interface deliberately states:

> The graph is not the conclusion.

## What v0.4.1 does not do

It does not yet provide:

- graph null models;
- population distributions;
- statistical motif enrichment;
- reception graph;
- overcoming graph;
- compound condition;
- temporal activation;
- condition-weighted graph centrality;
- a validated interpretation model.

## Required next research gate: null models

Graph analytics can generate arbitrarily interesting numbers if no baseline exists. Before qualitative descriptors such as unusual, concentrated, rare, dominant, or exceptional are promoted, the framework needs explicit null models.

Candidate nulls include:

### Geometric null

Randomize longitudes, then recompute aspects.

### Label null

Keep geometry fixed while permuting body labels.

### Degree-preserving graph null

Rewire graph edges while preserving degree sequence where mathematically appropriate.

### Layer-overlap null

Preserve layer sizes/densities while randomizing pair assignments.

For a metric `M`:

```text
M_observed
vs
{M_null^(1), ..., M_null^(N)}
```

Only after such comparison should the main interface call an observed graph feature statistically unusual.

## Design constraint

A graph metric belongs in Noetic Atlas only when all three questions have answers:

1. What exact structural question does it answer?
2. Why is that question difficult or tedious to recover from the conventional representation?
3. Can the result be explained and reconstructed without turning the metric into a mystical score?

If those questions cannot be answered, the metric should remain absent.
