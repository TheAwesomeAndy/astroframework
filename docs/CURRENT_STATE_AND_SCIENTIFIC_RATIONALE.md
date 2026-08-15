# Noetic Atlas — Current State and Scientific Rationale

## Status

**Framework / research baseline:** v0.4.7 — Formal Configurations & Astrological Hypergraphs  
**Package:** `0.4.7-alpha.1`  
**Deployed branch:** `main`  
**Public product surface:** currently stale at v0.4.5; v0.4.7 productization is blocked pending [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md)  
**Minimum deterministic analysis envelope:** `naf.analysis.v0.3.1`

Canonical release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Noetic Atlas is currently best described as an **auditable computational observatory for formal astrological rule models, multilayer graph/hypergraph structure, named counterfactual testing, and downstream interpretation**.

It is not a validated predictive theory, proof that astrology acts through measured physical forces, or evidence that a mathematically unusual chart structure has psychological or spiritual meaning.

Its scientific value at the present stage is narrower and more defensible: the framework makes rule-dependent structures explicit, provenance-bearing, reproducible, and testable against declared counterfactuals while preventing those tests from silently becoming claims they cannot support.

## 1. The central epistemic ladder

The current project is governed by:

```text
Observation
→ Detection
→ Derivation
→ Counterfactual Comparison
→ Population Frequency
→ External Association
→ Replication
→ Interpretation
```

Only the first four stages are currently implemented as general research infrastructure.

The critical separations are:

```text
Detection ≠ Unexpectedness
Unexpectedness ≠ Population Rarity
Population Rarity ≠ Astrological Meaning
Astrological Meaning ≠ Physical Causation
```

v0.4.6 operationalized the second line by introducing named null models. v0.4.7 extended the object model so higher-order configurations themselves can be detected, derived, and counterfactually tested.

## 2. One chart state, many models

Frozen architecture:

```text
one astronomical/chart state
→ many explicit models
→ many coordinated projections
```

The same astronomical state can be inspected through traditional rulership, graph topology, condition, modern overlays, experimental hypotheses, Discovery candidates, null models, and hypergraph structures without any one of those layers rewriting the source state.

This makes model disagreement observable rather than hiding it in prose.

## 3. Current deterministic substrate

### Civil time and astronomy

The birth-data path supports:

- local civil date/time;
- latitude/longitude/elevation;
- approximate IANA time-zone lookup plus expert override;
- historical UTC-offset resolution;
- repeated/nonexistent DST handling;
- Sun through Pluto via Astronomy Engine 2.1.19;
- geocentric ecliptic longitude;
- longitudinal velocity / retrograde state;
- ASC and MC;
- geometric solar altitude.

Unsupported automatic objects remain explicit. Ceres, Chiron, node variants, Lilith/apogee variants, Vertex, fixed stars, and other extended bodies require a separately validated provider/definition path or explicit supported import.

### Baseline astrological model

The operational substrate includes:

- tropical zodiac;
- Whole Sign houses;
- traditional domicile rulers;
- major aspects under a named orb policy;
- applying/separating where motion exists;
- sect;
- seven Paulus/Panaretus Hermetic lots;
- primitive classical condition;
- relational condition;
- source-secure compound condition;
- explicit model/rule identities and proof objects.

## 4. Directed topology as an explicit model

Traditional domicile rulership produces a directed graph.

The framework derives:

```text
SCCs
condensation graph
terminal components
terminal basins
route depth
upstream route capture
nonterminal bottlenecks
all-house ruler routes
House River traversal counts
```

For the canonical specimen, Mercury ↔ Venus forms the classical terminal SCC under the selected traditional-domicile model.

That is a graph-derived fact **conditional on the model**. It is not evidence that Mercury/Venus is psychologically dominant or physically causal.

## 5. Aspect graph and multilayer structure

The aspect layer remains distinct from rulership.

Current graph analytics include:

- connected components;
- degree;
- clustering;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- typed motifs;
- exact-edge subsets;
- aspect/dispositor overlap;
- selected cross-layer Discovery descriptors.

Relational layers such as reception, exchange, mutual-reception compatibility, overcoming, and domination remain separate typed graphs or relations rather than being collapsed into a generic connection network.

## 6. Condition is multidimensional

The condition architecture separates:

```text
primitive condition
relational condition
compound condition
```

Primitive factors include domicile/adversity, exaltation/depression, triplicity, bound, sect family, in/out-of-sect state, and Whole-Sign angular-triad class.

Relational rules include source-locked reception/exchange/overcoming families.

Compound condition preserves independent higher-order testimonies such as the current source-secure bonification, maltreatment, and enclosure subset.

No universal strength scalar is emitted.

## 7. Research regimes — v0.4.5

Noetic Atlas distinguishes:

### Operational
Reproducible calculations inside an explicitly named astrological model.

### Experimental
Named/versioned alternatives evaluated against the Operational control. They may produce deltas but may not overwrite the control state.

### Discovery
Open search for reproducible structures whose meaning is not assumed in advance.

The default Personal aperture keeps Operational material primary. Research opens the Experimental/Discovery apparatus over the same chart state.

## 8. Null Model Laboratory — v0.4.6

v0.4.6 changed the research program from “detect interesting structure” to “detect structure and ask whether it departs from an explicit counterfactual.”

Named nulls:

```text
N_G  geometric randomization
N_L  class-preserving identity/label permutation
N_D  degree-preserving aspect-network rewire
N_T  routing-codebook permutation
```

Each null declares what it preserves, what it randomizes, the question it answers, its assumptions, and its limitations.

The same source-locked statistic is evaluated on observed and simulated state.

Finite Monte Carlo uses:

```text
p_hat = (1 + exceedances) / (B + 1)
```

so p=0 cannot occur.

Every experiment retains:

- deterministic seed and RNG identity;
- null and metric versions;
- observed statistic;
- distribution hash;
- empirical percentile/effect position;
- raw p;
- BH-FDR-adjusted p;
- family/rank metadata;
- preservation/randomization declarations;
- simulation-quality diagnostics;
- population-frequency status;
- interpretation status.

There is no cross-null pass count. N_G, N_L, N_D, and N_T are not pseudo-replicates of one universal hypothesis.

A no-departure result is evidence about the chosen counterfactual, not a failed feature.

## 9. Formal Configurations & Astrological Hypergraphs — v0.4.7

Pairwise graphs cannot represent a Grand Trine, Grand Cross, Kite, SCC basin, or hybrid aspect-routing motif as one provenance-bearing higher-order object.

v0.4.7 introduces an attributed hypergraph with three object classes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

Initial typed k=3/k=4 geometry:

- Grand Trine;
- T-Square;
- Yod;
- Grand Cross;
- Kite;
- Noetic Discovery template: T-Square Anchor Cluster.

Topological hyperedges promote:

- closed Tarjan SCCs;
- terminal basin-capture sets.

Compound hybrids couple verified geometry with independently derived routing while preserving both parent layers and their derivation identities.

Each hyperedge carries:

- participant set;
- cardinality;
- geometric and/or topological metrics;
- configuration/orb policy identity;
- immutable SHA-256 derivation hash;
- explicit derivation payload;
- compact research state;
- candidate-specific null profile when evaluated.

The detector is allowed to say **no**. The canonical regression explicitly refuses to invent a k≥3 “Sun–Mercury 3H cluster” from two bodies.

## 10. Hypergraph counterfactuals

Hypergraph null evaluation reuses the accepted v0.4.6 inference machinery.

Not every null is meaningful for every hyperedge. Inapplicable rows remain `not-admissible`.

This preserves semantic integrity:

```text
pure geometric hyperedge → geometry/identity questions
pure routing hyperedge    → routing questions
compound hybrid           → geometry + identity + topology/routing questions where admissible
```

The compact hyperedge research state advances from:

```text
[D,V,B,P,I] = [1,1,0,0,0]
```

to:

```text
[D,V,B,P,I] = [1,1,1,0,0]
```

when admissible null comparison is complete.

Population and interpretation cannot advance in v0.4.7.

## 11. What the mathematics establishes

Graph theory, hypergraph construction, Tarjan SCCs, Monte Carlo sampling, empirical percentiles, FDR procedures, and deterministic hashing are legitimate mathematical/computational methods.

They establish claims about the encoded model and named reference process.

For example:

```text
The observed hyperedge statistic lies above 99% of N_G simulations.
```

can be well-defined.

It does not imply:

```text
This configuration occurs in only 1% of real people.
```

because N_G is not a natal-population cohort.

That distinction is foundational to the research program.

## 12. Population frequency remains unavailable

The word `rare` remains prohibited as a population claim because no real natal reference-distribution engine exists yet.

The locked future dependency is:

```text
v0.5.0 Population Cohort Engine
→ 100k+ empirical reference distributions
```

Only that layer can begin answering real prevalence questions, subject to sampling design, astronomical realism, demographic/data provenance, uncertainty, and multiple testing.

## 13. Interpretation remains downstream

The energetic/psychological/spiritual layer may translate formal structure into human-readable hypotheses, but it remains epistemically separate.

Energy/current/field language is symbolic/phenomenological unless independent physical evidence is supplied. Angular geometry is computational; “quadrature torque,” “resonance,” or similar field vocabulary is an interpretive formalism rather than established planetary physics.

## 14. What is genuinely innovative here

The innovation is not the use of graph vocabulary by itself.

The more substantial contribution is the integration of:

```text
explicit astrological ontology
+ deterministic chart authority
+ source-locked historical rule models
+ multilayer graphs
+ higher-order hyperedges
+ immutable derivation
+ named counterfactual generators
+ source-locked executable statistics
+ finite Monte Carlo inference
+ research-status firewalls
+ coordinated visualization
+ downstream interpretation kept separate
```

This turns astrological structures into objects that can be inspected, disagreed with, reproduced, counterfactually challenged, and eventually compared across populations.

## 15. Current product limitation

The browser product has not caught up to the framework.

Observed current state:

```text
root → v0.4.5 shell
v0.4.6 shell reachable separately
v0.4.7 shell absent
hypergraph research UI absent
```

This is a release-blocking packaging defect. It prevents researchers from exercising the newest accepted research objects through the normal public entry.

See [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

## 16. Scientific priorities

Immediate:

```text
1. productize v0.4.7 public shell
2. verify end-to-end Research path and bootstrap coherence
```

Then:

```text
v0.4.8 Hidden Geometry Engine
  midpoints
  declination / parallels / contraparallels
  antiscia / contra-antiscia

v0.4.9 Experimental Model Laboratory
  Ceres–Taurus
  alternative rulership tensors
  explicitly reversible model comparisons

v0.5.0 Population Cohort Engine
  100k+ empirical reference distributions
  real prevalence estimation
  sampling/stratification/sensitivity machinery
```

Incidence-matrix spectral tools, k=5–6 hyperedge libraries, timing/Life Spectrum, and broader empirical association work follow only when their dependencies are ready.

## 17. Current scientific claim

> **Noetic Atlas is a provenance-first computational observatory that formalizes astrological models deeply enough to distinguish what is detected, what is unexpected under a named counterfactual, what is prevalent in a real population, and what is merely interpreted — even though only the first two of those research questions are currently implemented.**