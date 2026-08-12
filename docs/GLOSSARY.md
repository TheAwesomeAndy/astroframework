# Noetic Atlas — Glossary

This glossary defines terms as currently used inside Noetic Atlas. Historical traditions may use some words differently; where meaning is model-specific, the selected versioned rule set is authoritative.

## Activation

A future model-defined time-dependent relationship between temporal input and characterized natal structure. Activation is not automatically a physical energy measurement.

## Analysis / Energetic Analysis

The current user-facing interpretation layer in v0.4.1.2. It synthesizes placement, actual sign, Whole Sign house, ruler/dispositor routing, aspects, graph context, applicable primitive condition, expression range, material-life examples, and soul/spirit inquiry.

Epistemic status: `interpretive-inference`.

## Applying

An aspect whose distance from exact perfection is decreasing under the selected motion model. Requires motion data.

## Articulation point

A node whose removal increases the number of connected components in the selected graph. Current v0.4.1 aspect-graph analytic.

Its graph meaning is exact; astrological meaning remains downstream.

## Aspect

An angular relationship between two astrological objects admitted under a named aspect/orb policy.

Current major family: conjunction, sextile, square, trine, opposition.

## Aspect graph

Undirected typed graph whose nodes are selected chart objects and whose edges are admitted aspects.

Current analytics include components, degree, clustering, normalized unweighted betweenness, articulation points, bridges, typed motifs, and exact ≤1° subsets.

## Aspect Matrix

Tabular representation of pairwise aspect relationships, useful for exact lookup and dense comparison.

## Astrological rule

A deterministic transformation defined by a selected astrological tradition/model, such as Whole Sign house assignment, domicile ruler lookup, lot formula, sect, or primitive condition.

## Astronomy adapter

Software layer converting an unambiguous observation instant/location into astronomical quantities such as longitude, velocity, angles, and solar altitude.

Current open adapter: Astronomy Engine 2.1.19.

## Balanced / depleted / excessive expression

Three current interpretive modes used to prevent an archetype from becoming a command to express “more” of itself.

These are interpretive hypotheses, not measured energy levels.

## Betweenness centrality

Current v0.4.1 normalized unweighted aspect-graph metric describing how often a node lies on shortest paths between other nodes under the selected graph.

It is a research descriptor, not an established planet-importance score.

## Bottleneck / nonterminal path bottleneck

A nonterminal node traversed by multiple dispositor routes before those routes enter a terminal SCC. Current functional-digraph analytic.

The metric excludes terminal-cycle members from bottleneck ranking because terminal members trivially receive basin routes.

## Bridge

An edge whose removal increases the number of connected components in the selected graph.

## Canonical analysis model

Structured deterministic analysis object passed among calculation, research, visualization, export, and downstream interpretation layers.

Minimum current envelope: `naf.analysis.v0.3.1`.

## Canonical fixture

Stable input/chart used for regression testing. `NAF-CANON-0001` is the first canonical specimen.

A canonical fixture verifies software consistency, not astrological validity.

## Ceres

A minor body recognized by the current interpretation layer when a coordinate is supplied. Current custom/modern profile emphasizes nourishment, harvest, enoughness, support, resourcing, embodied pleasure, and conditions for growth.

Automatic validated Ceres astronomy is not currently implemented.

## Clustering coefficient

Aspect-graph measure of how many possible connections among a node's neighbors are actually present. Current v0.4.1 analytic.

Noetic Atlas does not label a coefficient high or low without a baseline.

## Condition

A multidimensional collection of rule-defined factors describing a planet's traditional state beyond simple placement.

Current primitive classical condition is implemented for Sun through Saturn and includes domicile/adversity, exaltation/depression, triplicity, Egyptian bound, sect family/condition, and Whole-Sign angular-triad class.

Reception/overcoming and compound condition are not yet implemented.

Condition is not automatically collapsed into one strength number.

## Coupling

A mathematical or visualization relationship between objects. Unless independently established otherwise, coupling in NAF is model-relative symbolic language rather than a measured physical force.

## Derivation Ledger

Machine-readable audit trail preserving how a result was produced: input, rule/formula, intermediate values, version, output, source/model, dependencies, and limitations.

## Directed zodiacal distance

Forward zodiacal distance:

```text
directed_arc(A → B) = (B - A + 360) mod 360
```

Used in current Hermetic-lot formulas.

## Dispositor

Traditional domicile ruler of the sign occupied by a planet/point.

Example: Mercury in Libra → Venus disposits Mercury.

## Dispositor graph

Directed graph in which a planet points to the traditional domicile ruler of the sign it occupies.

The classical-seven version is a functional digraph under the current rule model.

## Domicile ruler

Planet assigned rulership over a sign under a named rule model. Current Hellenistic/traditional model uses seven classical rulers.

## Energetic synthesis

Current interpretation model `naf.interpretation.energetic_synthesis.v0.4.1.2`.

It uses energy/current/field language symbolically to translate astrological structure. It is not an experimentally established physical-energy model.

## Ephemeris

Astronomical data/model used to calculate celestial positions through time.

## Epistemic layer

Classification of what kind of statement a result is:

```text
input
astronomical computation
astrological rule
graph/mathematical derivation
research-exploratory
interpretive inference
```

## Exact aspect

Ideal angular separation defining an aspect before orb.

## Explainable Finding

Structured graph-derived synthesis object containing statement, measurement, graph scope, mathematical meaning, astrological context, limitations, and proof.

A finding is not synonymous with an interpretation.

## Explainable Metric

Metric object containing definition, formula, value, graph scope, observation, graph-theory meaning, astrological context, limitations, and proof.

A naked number is not considered complete.

## Flow Map

Noetic Atlas visualization of directed rulership/dependency pathways.

## Graph-derived

A statement that follows mathematically from an explicitly defined graph, such as terminal SCC, route depth, bridge, or clustering coefficient.

Graph-derived does not mean empirically validated astrology.

## Harmonic spectrum

Exploratory circular-geometry descriptor using complex harmonics. It is not currently an established interpretive technique.

## House / Place

A twelvefold astrological field. Current baseline uses Whole Sign houses, where the Ascendant sign is the first place.

## House ruler

Domicile ruler of the sign occupying a house under the selected house/rulership model.

## Integrity

Current proof/provenance surface linking a displayed claim back to evidence, formulas/rules, model IDs, and lower-layer data.

## Interpretation

Meaning assigned to calculated structure by a historical tradition, modern school, astrologer, or AI-assisted synthesis layer.

Interpretation is downstream of calculation.

## Life Space

Planned long-term representation of symbolic state trajectories and recurrence in a larger state-space research model.

## Life Spectrum

Planned longitudinal time visualization in which characterized natal targets become lanes/channels and temporal activations are shown across windows from years to days.

## Lot

Derived zodiacal point calculated from relationships among chart points. Current support includes seven Paulus/Panaretus Hermetic lots.

## Motif / typed motif

Higher-order graph pattern involving multiple nodes/edges. Current v0.4.1 detects typed three-node closed patterns such as Grand Trine and T-square templates.

Statistical motif enrichment is not claimed until null models exist.

## Multilayer / multiplex graph

Model in which distinct relation types remain separate layers, e.g. aspects, dispositors, houses, lots, reception, overcoming, and future time.

Noetic Atlas does not collapse these into one edge soup by default.

## Natural-house overlay

Optional explicitly modern correspondence model `naf.interpretation.natural_house_overlay.modern.v1` linking houses with conventional sign/planet analogies.

It is secondary and never replaces the actual sign on the actual Whole Sign house.

## Natal Field

Noetic Atlas node-link structural visualization of chart objects and relationships.

## Node

Object represented in a graph. Depending on graph scope this may include planets, lots, angles, houses, or other supported points.

## Not applicable

A rule does not conceptually apply to the object under the selected model, e.g. Hellenistic essential dignity for Pluto in the current condition model.

Distinct from `not_implemented` and `unsupported`.

## Not implemented

The model/rule is defined or planned but executable support does not yet exist.

## Null model

Randomized/comparison model used to determine whether an observed structure is unusual relative to a defined baseline.

Current null-model work is planned; population rarity/enrichment language remains blocked until implemented.

## Orb

Angular deviation from exact aspect:

```text
orb = |measured separation - exact angle|
```

## Orb policy

Named/versioned set of admission rules defining which orbs are accepted.

## Overcoming

Traditional directional relation involving superior/inferior sign-based geometry under a specific historical model. Planned v0.4.2 relational condition feature.

## Phase

Context-dependent term. For aspects, generally applying/separating. In symbolic interpretation it may describe phase relationships metaphorically. Modules must state which meaning applies.

## Profection

Traditional time-lord technique advancing one Whole Sign house per year of life. Planned future timing module.

## Provenance

Metadata describing where a value came from and how it was produced, including provider/version, rule/model ID, source tradition, inputs, intermediate values, uncertainty/applicability, and dependencies.

## Reception

Tradition-specific directed relationship in which one planet is received into another planet's dignity/domain under a selected definition. Planned v0.4.2 relational condition feature.

## Research descriptor

Reproducible mathematical feature introduced to investigate structure but not automatically part of historical doctrine or validated interpretation.

## Retrograde

Apparent reversal of geocentric zodiacal longitudinal motion under the selected astronomy model.

## Route depth

Number of ruler transitions from a node before first entry into its terminal SCC. Current v0.4.1 classical-dispositor analytic. Terminal-cycle members have depth 0 by convention.

## Route convergence

Exploratory descriptor of how strongly ruler/dispositor pathways converge on common nodes/components.

## SCC condensation graph

Directed acyclic graph created by collapsing each strongly connected component of a directed graph into one supernode.

## Sect

Hellenistic day/night classification based primarily on the Sun relative to the horizon. Sect also affects current lots and primitive condition.

## Separating

An aspect whose distance from exact perfection is increasing under the motion model.

## Strongly connected component (SCC)

Maximal set of nodes in a directed graph where every node is reachable from every other node.

## Symbolic energy

Interpretive vocabulary for describing astrological relationships in terms such as current, field, compression, expansion, resonance, and friction.

It is explicitly not a claim of measured physical energy.

## Terminal basin

For terminal SCC `C`:

```text
B(C) = {v : v reaches C}
β(C) = |B(C)| / |V|
```

Current v0.4.1 functional-dispositor analytic.

## Terminal SCC

SCC with no outgoing edge to another SCC in the condensation graph.

## Topology

Structural properties of a graph independent of drawing/layout.

## Transit

Time-varying astronomical position related to natal objects/structures. Full Life Spectrum support is planned.

## Tropical zodiac

Seasonal/equinoctial zodiac. Current western baseline.

## Unsupported

Required data/provider capability is absent. Unsupported values are never silently invented or encoded as zero.

## Upstream capture

Set/count of nodes whose ruler routes traverse a selected nonterminal node before terminal entry. Current v0.4.1 functional-dispositor analytic.

## Validation

Checking a calculation or hypothesis against an independent fixture, provider, manual reconstruction, expert judgment, null model, or dataset.

## v0412c

Current operational browser wrapper for public v0.4.1.2. It provides immediate loading state, canonical bootstrap, chart-state resynchronization, and explicit downstream analysis errors.

## Whole Sign houses

House model where each zodiac sign is one entire house beginning with the Ascendant sign as the first.

## Zodiacal releasing

Hellenistic lot-based time-lord technique with nested sign periods and Loosing of the Bond. Planned future timing module.
