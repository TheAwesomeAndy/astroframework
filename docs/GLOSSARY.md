# Noetic Atlas — Glossary

This glossary defines terms as currently used inside Noetic Atlas. Historical traditions may use some words differently; where meaning is model-specific, the named versioned rule set is authoritative.

Current framework baseline: **v0.4.7**.

## Activation
A future model-defined time-dependent relationship between temporal input and characterized natal structure. Activation is not automatically a physical-energy measurement.

## Adjusted p-value
A p-value modified under a declared multiple-testing procedure. v0.4.6 uses Benjamini–Hochberg FDR within declared null-model families. Adjusted p remains distinct from raw p.

## Analysis / Energetic Analysis
Downstream interpretation layer that synthesizes placement, sign, Whole Sign house, ruler/dispositor routing, aspects, graph context, applicable condition, expression range, material examples, and contemplative questions. Epistemic status: interpretive inference.

## Applying
An aspect whose distance from exact perfection is decreasing under the selected motion model. Requires motion data.

## Articulation point
A node whose removal increases the number of connected components in the selected graph. Its graph meaning is exact; astrological meaning remains downstream.

## Aspect
An angular relationship between two astrological objects admitted under a named aspect/orb policy. Current deterministic major family: conjunction, sextile, square, trine, opposition.

## Aspect graph
Undirected typed graph whose nodes are selected chart objects and whose edges are admitted aspects.

## Aspect Matrix
Tabular representation of pairwise aspect relationships, useful for exact lookup and dense comparison.

## Astrological rule
A deterministic transformation defined by a selected astrological tradition/model, such as Whole Sign house assignment, domicile ruler lookup, lot formula, sect, condition, reception, or overcoming.

## Astronomy adapter
Software layer converting an unambiguous observation instant/location into astronomical quantities such as longitude, velocity, angles, and solar altitude. Current open adapter: Astronomy Engine 2.1.19.

## Baseline / counterfactual baseline
A named reference process against which an observed statistic is compared. In v0.4.6 a baseline is not synonymous with a real human population.

## Basin / terminal basin
For a terminal SCC `C`, the set of nodes whose directed ruler paths terminate in that SCC.

```text
B(C) = {v : v reaches C}
β(C) = |B(C)| / |V|
```

## Benjamini–Hochberg FDR
Multiple-testing procedure used as the default exploratory correction within declared null-model families in v0.4.6/v0.4.7 research runs.

## Betweenness centrality
Normalized unweighted graph metric describing how often a node lies on shortest paths between other nodes under the selected graph. Not an established planet-importance score.

## Bottleneck / nonterminal path bottleneck
A nonterminal node traversed by multiple dispositor routes before terminal entry.

## Bridge
An edge whose removal increases the number of connected components in the selected graph.

## Canonical analysis model
Structured deterministic analysis object passed among calculation, research, visualization, export, and downstream interpretation layers. Minimum current envelope: `naf.analysis.v0.3.1`.

## Canonical fixture
Stable chart/input used for regression testing. A fixture verifies software consistency, not astrological validity or population prevalence.

## Candidate / Discovery candidate
A reproducible structure registered in the Discovery regime without assuming interpretive meaning. Candidate status may advance to `null-tested` after admissible named counterfactual comparison.

## Ceres
Minor body recognized by downstream interpretation when a coordinate is supplied. Automatic validated Ceres astronomy is not currently part of the birth-time provider contract. Alternative sign-rulership hypotheses such as Ceres–Taurus belong to the future Experimental Model Laboratory.

## Clustering coefficient
Aspect-graph measure of how many possible neighbor-neighbor edges are present. Noetic Atlas does not label a coefficient high or rare without a baseline.

## Compound condition
Source-locked higher-order traditional condition testimony derived from deterministic geometry plus already-computed primitive/relational state. Current source-secure subset includes selected bonification, maltreatment, enclosure/intervention, sect qualification, reception qualification, and mixed-state preservation.

## Compound hybrid hyperedge
v0.4.7 higher-order object coupling a verified geometric configuration to independently derived routing/topological structure while preserving both parent layers in provenance.

## Condition
Multidimensional collection of rule-defined factors describing a planet's traditional state beyond simple placement.

Current state:

```text
primitive condition   implemented
relational condition  implemented
compound condition    implemented for source-secure v0.4.3 subset
scalar strength       intentionally not implemented
```

## Condition Signature
Reusable categorical projection of condition state across views. It is not a traffic-light or strength score.

## Condition System
Composition of primitive, relational, and compound condition while preserving the distinction among those layers.

## Contra-antiscia
Future v0.4.8 hidden-geometry relation derived from the antiscial transformation and its opposing point. Not currently implemented.

## Contraparallel
Future v0.4.8 declination relation between objects at similar declination magnitude on opposite sides of the celestial equator. Distinct from ecliptic longitude opposition.

## Counterfactual
An explicitly defined alternate reference state/process used to ask what would happen if a selected property were randomized while others were preserved.

## Coupling
A formal relationship between objects or layers. Unless independently established otherwise, coupling in NAF is model-relative symbolic/mathematical language rather than measured physical force.

## Degree-preserving rewire / N_D
v0.4.6 null model that randomizes aspect-network adjacency under degree-sequence constraints while preserving declared graph properties and fixed external layers.

## Departure-detected / no-departure-detected
Thresholded descriptions of a completed null comparison after the declared multiple-testing procedure. They are not universal pass/fail judgments about astrology.

## Derivation hash
Immutable fingerprint of a canonical derivation payload. v0.4.7 hyperedges use SHA-256 derivation hashes.

## Derivation Ledger
Machine-readable audit trail preserving how a result was produced: input, rule/formula, intermediate values, version, output, model/source, dependencies, and limitations.

## Derivation reference (`derivation_ref`)
Stable reference attached to a proof-bearing object so the interface can open the derivation that produced it.

## Derivation Walker
Shared proof infrastructure that indexes and traverses deterministic, condition, routing, and other proof objects. Unindexed legacy dependencies remain explicit rather than being invented.

## Directed zodiacal distance
Forward zodiacal distance:

```text
directed_arc(A → B) = (B - A + 360) mod 360
```

Used in current Hermetic-lot formulas.

## Discovery regime
Research regime for reproducible structures whose significance/meaning is not assumed in advance. Detection precedes naming; baseline precedes unexpectedness language; population data precede rarity language.

## Dispositor
Traditional domicile ruler of the sign occupied by a planet/point.

## Dispositor graph
Directed graph in which a planet points to the traditional domicile ruler of the sign it occupies.

## Domicile ruler
Planet assigned rulership over a sign under a named rule model. Current Operational baseline uses seven classical rulers.

## Domination / upon-the-tenth
Directional relational-condition type for the right-hand square under the current source-locked model. Distinct from an undirected square aspect edge.

## Effect position
Descriptive location of the observed statistic inside a simulated null distribution, including empirical percentile and related distribution summaries. It is not population prevalence.

## Energetic synthesis
Interpretive model using energy/current/field language symbolically to translate astrological structure. It is not an experimentally established physical-energy model.

## Ephemeris
Astronomical data/model used to calculate celestial positions through time.

## Epistemic layer
Classification of what kind of statement a result is. Current useful hierarchy includes:

```text
input
astronomical computation
astrological rule
graph / hypergraph derivation
counterfactual research result
population result (future general layer)
external association / replication (future general layer)
interpretive inference
```

## Empirical percentile
Percentage position of an observed statistic inside the simulated reference distribution under a named null. It does not estimate the percentage of real people/charts with the feature.

## Exchange
Relational-condition object emitted under the source-locked model when two classical planets occupy one another's domiciles. Kept separate from later mutual-reception terminology.

## Experimental regime
Named/versioned alternative model evaluated against Operational control. It must remain reversible and may not silently overwrite Operational state.

## Explainable Finding
Structured graph/research object containing statement, measurement, scope, mathematical meaning, astrological context, limitations, and proof.

## Explainable Metric
Metric object containing definition, formula, value, scope, context, limitations, and proof. A naked number is not considered complete.

## Finite Monte Carlo +1 correction
v0.4.6 inference rule:

```text
p_hat = (1 + exceedance_count) / (B + 1)
```

ensuring p=0 is impossible.

## Flow Map
Visualization of directed rulership/dependency pathways.

## Geometric null / N_G
Broad counterfactual that randomizes selected geometry while preserving declared object/frame/model properties. It is deliberately not an empirical natal-population model.

## Geometric polygon hyperedge
v0.4.7 hyperedge class for typed k-body angular configurations under explicit target-angle, orb, RMS residual, cardinality, and assignment policies.

## Grand Cross
Current k=4 geometric hyperedge template defined by four approximately square sides and two approximately opposition diagonals under the v0.4.7 configuration policy.

## Grand Trine
Current k=3 geometric hyperedge template defined by a closed approximately 120°/120°/120° configuration under the v0.4.7 policy.

## Graph-derived
Statement following mathematically from an explicitly defined graph. Graph-derived does not mean empirically validated astrology.

## Harmonic spectrum
Exploratory circular-geometry descriptor using complex harmonics. Not currently an established interpretive technique.

## Hidden Geometry Engine
Planned v0.4.8 layer for midpoints, declination/parallels/contraparallels, and antiscia/contra-antiscia.

## House / Place
Twelvefold astrological field. Current Operational baseline uses Whole Sign houses.

## House River
Projection beginning from Whole-Sign house domains and following existing ruler/dispositor routes.

For dispositor edge `e`:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

Band width is routing count, not strength/fate/physical energy.

## House resonance
Model comparing the optional modern natural-house sequence to actual Whole-Sign houses as an explicit secondary overlay.

## House ruler
Domicile ruler of the sign occupying a house under the selected model.

## Hyperedge
A higher-order relation among a set of vertices rather than only a pair. In v0.4.7 every hyperedge is typed, provenance-bearing, and derivationally hashed.

## Hyperedge cardinality
Number of participating vertices. Cardinality is a hard formal constraint; missing participants are not supplied by interpretation.

## Hypergraph
Attributed structure `H = (V, E_H)` in which `E_H` contains set-valued hyperedges representing geometric, topological, or compound higher-order structure.

## Hypergraph incidence matrix
Binary matrix `H` whose rows are vertices and columns are hyperedges, with `H(v,e)=1` when vertex `v` participates in hyperedge `e`.

## Hypergraph Laplacian
Future spectral operator over the hypergraph incidence/degree structure. Eigenanalysis is explicitly deferred beyond v0.4.7.

## Hypergraph null profile
Collection of candidate-specific named null comparisons for a hyperedge. Rows may be `completed` or `not-admissible`; they are not collapsed into a cross-null score.

## Incidence degree (`D_v`)
Number of hyperedges incident on a vertex in the current hypergraph representation.

## Interpretation
Meaning assigned to calculated/research structure by a historical tradition, modern school, astrologer, or AI-assisted synthesis. Interpretation is downstream.

## Kite
Current k=4 geometric template built around a Grand Trine with an opposition axis and two supporting sextile relations under the v0.4.7 policy.

## Label/identity permutation null / N_L
Counterfactual preserving declared object-class and structural properties while permuting identity correspondence, used to test whether observed cross-layer alignment depends on the specific identities.

## Life Space
Planned long-term representation of symbolic state trajectories and recurrence in a larger state-space research model.

## Life Spectrum
Planned future temporal visualization/analysis layer. It no longer owns the v0.5.0 milestone slot; v0.5.0 is reserved for Population Cohort Engine.

## Lot
Derived zodiacal point calculated from relationships among chart points. Current support includes seven Paulus/Panaretus Hermetic lots.

## Metric implementation fingerprint
Version/fingerprint identifying the executable statistic used for observed and simulated states in research inference.

## Midpoint
Future v0.4.8 circular-geometry relation derived from two positions under an explicit midpoint convention and wrap-safe arithmetic.

## Motif / typed motif
Formal multi-node pattern in a graph. v0.4.7 distinguishes pairwise graph motifs from first-class hyperedges.

## Multilayer / multiplex graph
Model in which distinct relation types remain separate layers, e.g. aspect, dispositor, reception, exchange, overcoming, condition, and future time.

## Mutual-reception compatibility label
Separate later-tradition relation label kept distinct from Hellenistic exchange under the current source model.

## Natural-house overlay
Optional explicitly modern correspondence model linking houses with conventional sign/planet analogies. Secondary to actual Whole Sign/ruler state.

## Natal Field
Node-link structural visualization of chart objects and relationships.

## Node
Object represented in a graph/hypergraph. Scope determines whether nodes include planets, lots, angles, houses, or other supported objects.

## No cross-null aggregate
Constitutional rule forbidding reduction of separate N_G/N_L/N_D/N_T questions to a single vote/pass count/significance score.

## Not admissible
A null model or statistic is semantically inappropriate for a particular candidate/question. Distinct from failed, unsupported, or not implemented.

## Not applicable
A rule does not conceptually apply to the object under the selected model.

## Not implemented
A defined/planned model or capability does not yet have executable support.

## Null model
Named counterfactual generator used to compare an observed statistic with a defined reference process. v0.4.6 includes N_G, N_L, N_D, and N_T.

## Null profile
Set of separate named null-comparison rows attached to a candidate. It is the research object; there is no universal null score.

## Operational regime
Reproducible calculations inside the selected control astrological model. Operational does not mean empirically proven as physical law.

## Orb
Angular deviation from an exact target angle.

## Orb policy
Named/versioned set of admission rules defining accepted residual/orb limits.

## Overcoming
Traditional directional relation under the current source-locked model, distinct from the undirected aspect edge.

## Parallel
Future v0.4.8 declination relation between objects at similar declination on the same side of the celestial equator. Distinct from ecliptic longitude conjunction.

## Personal aperture
Default application mode emphasizing Operational chart/reading content while hiding Monte Carlo/research details by default.

## Population Cohort Engine
Planned v0.5.0 empirical reference-distribution layer, targeted at 100k+ charts where data provenance/quality permit. Required for general population-frequency claims.

## Population frequency
Empirical prevalence of a feature in a real reference population. Currently `unknown` in the general research framework; cannot be inferred from a simulated null percentile.

## Profection
Traditional time-lord technique advancing one Whole Sign house per year. Future timing work.

## Provenance
Metadata describing where a value/result came from and how it was produced, including provider/version, rule/model ID, source tradition, inputs, uncertainty/applicability, dependencies, hashes, seeds, and limitations where relevant.

## Qualified Flow
View keeping routing and relational qualification simultaneously visible without collapsing edge types.

## Qualified Resonance
Projection attaching condition/ruler context to the optional house-resonance comparison.

## Raw p-value
Finite-Monte-Carlo p-value before multiple-testing adjustment.

## Reception
Source-locked directed relational condition describing a configured host/guest relationship under the current model.

## Relational condition
Rule-defined state describing how classical planets qualify one another rather than only each planet locally.

## Research aperture
Application mode exposing Experimental/Discovery models, null laboratory, hypergraphs, research status, provenance, and simulation controls while consuming the same chart authority.

## Research status
Multidimensional representation of which evidence stages a candidate has completed. It is not one confidence score.

General registry includes fields such as geometry, derivation, historical analogue, population frequency, null comparison, phenomenological association, replication, and interpretation.

## Route depth
Number of ruler transitions before first entry into the terminal SCC under the selected routing convention.

## Route count
Integer number of Whole Sign house-ruler routes traversing a selected dispositor edge.

## Routing-codebook permutation null / N_T
Artificial v0.4.6 counterfactual that permutes sign-to-ruler assignments while preserving declared multiplicity/frame properties. Not a proposed historical tradition.

## SCC condensation graph
Directed acyclic graph created by collapsing each strongly connected component into one supernode.

## Sect
Hellenistic day/night classification based primarily on the Sun relative to the horizon under the selected method.

## Separating
An aspect whose distance from exact perfection is increasing under the motion model.

## SHA-256 derivation hash
Cryptographic hash used by v0.4.7 hyperedges over canonical derivation payloads to make derivation identity immutable/verifiable.

## Simulation quality
Diagnostic status of a null ensemble, e.g. adequate, limited, invalid, based on preservation checks and constrained-generator diagnostics.

## Strongly connected component (SCC)
Maximal set of nodes in a directed graph where every node is reachable from every other node.

## Symbolic energy
Interpretive vocabulary for astrological relationships in terms such as current, field, compression, expansion, resonance, or friction. Explicitly not measured physical energy under the current framework.

## T-Square
Current k=3 geometric hyperedge template combining an opposition with two square relations under the v0.4.7 configuration policy.

## T-Square Anchor Cluster
Deliberately named Noetic Discovery template combining one close conjunction, one opposition axis, and four approximately square cross-links under a versioned k=4 policy. Not presented as an inherited historical doctrine.

## Terminal SCC
SCC with no outgoing edge to another SCC in the condensation graph.

## Topological basin hyperedge
v0.4.7 hyperedge class elevating closed routing SCCs and terminal basin-capture sets into first-class higher-order objects.

## Topology
Structural properties of a graph independent of drawing/layout.

## Transit
Time-varying astronomical position related to natal objects/structures. Production temporal systems remain future work.

## Tropical zodiac
Seasonal/equinoctial zodiac. Current western Operational baseline.

## Unexpectedness
Conditional displacement of an observed statistic relative to a named counterfactual distribution. Distinct from real population rarity.

## Unsupported
Required data/provider capability is absent. Unsupported values are never silently invented or encoded as zero.

## Upstream capture
Set/count of nodes whose ruler routes traverse a selected nonterminal node before terminal entry.

## Validation
Context-sensitive term. May mean calculation verification, source reconstruction, null comparison, external criterion testing, replication, or product/UI verification. Documentation should state which form is intended.

## Version chrome
User-facing indication of the current product release. Distinct from subsystem/model provenance versions.

Current defect: the public product chrome remains v0.4.5 while the framework baseline is v0.4.7.

## Whole Sign houses
House model where each zodiac sign is one entire house beginning with the Ascendant sign as the first.

## Yod
Current k=3 geometric hyperedge template using one sextile and two approximately quincunx relations under the v0.4.7 configuration policy.

## Zodiacal releasing
Hellenistic lot-based time-lord technique with nested sign periods and Loosing of the Bond. Future timing module.