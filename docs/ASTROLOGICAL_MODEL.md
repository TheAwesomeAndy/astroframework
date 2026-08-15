# Noetic Atlas — Astrological Model Specification

## 1. Purpose

This document defines the astrological domain model currently implemented or explicitly staged in Noetic Atlas.

Noetic Atlas treats astrological traditions as **versioned rule systems** layered on top of astronomical data. It does not assume one tradition is universally correct and does not permit techniques from different traditions to be mixed silently.

Current framework baseline: **v0.4.7**.  
Canonical release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Current Operational deterministic/traditional baseline:

```text
Tropical zodiac
+ Whole Sign houses
+ traditional domicile rulers
+ major aspects under named orb policy
+ day/night sect
+ seven Paulus/Panaretus Hermetic lots
+ primitive classical condition
+ relational classical condition
+ source-secure compound condition subset
```

Research layers additionally represent graph structure, named counterfactuals, and formal hyperedges without changing the Operational rule model.

## 2. Coordinate substrate

Current baseline:

```text
Tropical zodiac
0° Aries = 0° absolute ecliptic longitude
0 <= λ < 360
```

All calculations use full available numerical precision. Formatted sign-degree strings are display values.

Whole Sign house:

```text
house = ((object_sign_index - asc_sign_index + 12) mod 12) + 1
```

The MC remains an angle with its own longitude and occupies the Whole Sign house containing its sign. It does not redefine the 10th house.

## 3. Traditional domicile rulership

| Sign | Ruler |
|---|---|
| Aries | Mars |
| Taurus | Venus |
| Gemini | Mercury |
| Cancer | Moon |
| Leo | Sun |
| Virgo | Mercury |
| Libra | Venus |
| Scorpio | Mars |
| Sagittarius | Jupiter |
| Capricorn | Saturn |
| Aquarius | Saturn |
| Pisces | Jupiter |

This map is used for:

- house rulers;
- classical dispositors;
- lot rulers;
- directed routing graphs;
- terminal SCC/basin discovery;
- configured domicile reception/exchange;
- the Operational routing baseline used by research layers.

Uranus, Neptune, and Pluto do not replace Saturn/Jupiter/Mars under this rule set. Alternative ruler maps belong to explicitly named Experimental models.

## 4. Dispositor topology

For each eligible planet `p` in sign `s`:

```text
p → domicile_ruler(s)
```

Derived graph properties include:

```text
SCCs
SCC condensation
terminal SCCs
terminal basins
route depth
upstream capture
nonterminal bottlenecks
house-ruler routes
House River route counts
```

These are mathematical properties of the selected ruler model.

Relational condition qualifies this topology; it does not rewrite its edges by default.

## 5. Major aspects

The deterministic kernel currently recognizes named major aspects under an explicit orb policy:

```text
conjunction  0°
sextile     60°
square      90°
trine      120°
opposition 180°
```

Every admitted edge retains:

- endpoints;
- target angle;
- observed separation;
- orb;
- policy identity;
- applying/separating phase when motion data permit;
- provenance.

The pairwise aspect graph remains distinct from formal multi-body configuration/hypergraph detection.

## 6. Sect and Hermetic lots

Sect is calculated under an explicit geometric method where supported by birth-data astronomy.

The framework computes seven Paulus/Panaretus Hermetic lots with sect reversal and directed zodiacal arcs under named formulas/variants.

Each lot retains formula family, sect, inputs, directed arc, longitude, Whole Sign house, ruler, and provenance.

## 7. Primitive condition

Primitive condition applies to the classical seven under explicit historical-rule registries.

Current factors include:

- domicile/adversity;
- sign-level exaltation/depression;
- triplicity roles;
- Egyptian bound;
- planetary sect family;
- in/out-of-sect state;
- Whole-Sign angular-triad class.

Each factor is independent and provenance-bearing.

No scalar strength score is emitted.

## 8. Relational condition

Current source-locked relational families include:

```text
configured domicile reception
domicile exchange
separately identified later-tradition mutual-reception compatibility
right-hand overcoming
domination / upon-the-tenth
```

These relation types remain distinct.

A relation may qualify a planet/edge; it does not silently mutate the dispositor graph.

## 9. Compound condition

The current source-secure subset includes selected:

- bonification by benefic superior configuration;
- maltreatment by malefic superior square/domination;
- benefic/malefic sign-based testimony families;
- seven-degree ray enclosure;
- intervention breaking enclosure;
- sect qualification;
- reception qualification;
- mixed condition preservation.

Ambiguous historical variants remain deferred rather than guessed.

Compound testimony is multidimensional evidence, not a hidden total score.

## 10. Modern/transpersonal overlays

Uranus, Neptune, and Pluto may participate in modern/transpersonal interpretation through actual placement, aspects, and graph context.

They do not inherit classical Hellenistic dignity applicability merely because they appear in the chart.

The modern natural-house correspondence remains an explicitly secondary comparison model. It does not replace the actual Whole Sign, actual traditional ruler, or historical house doctrine.

Ceres may be interpreted when a supported coordinate is supplied; automatic validated Ceres astronomy is a separate capability.

## 11. Research regimes are not astrological facts

v0.4.5 distinguishes:

```text
Operational
Experimental
Discovery
```

The Operational astrological model is the explicit control model.

Experimental models can represent alternative rulers, aspect policies, objects, or historical variants.

Discovery structures can be mathematically reproducible without being adopted as astrological doctrine.

Research regime is therefore metadata about how a model/object is being used, not another astrological dignity or chart feature.

## 12. Counterfactual models — v0.4.6

The Null Model Laboratory introduces research reference processes, not additional astrological traditions.

### N_G

Broad geometric randomization.

### N_L

Class-preserving identity/label permutation.

### N_D

Degree-preserving aspect-network rewire.

### N_T

Artificial routing-codebook permutation.

These answer conditional questions about structure and model dependence.

They do not become chart layers and do not define a new natal chart.

## 13. Formal configurations — v0.4.7

A multi-body configuration is represented as a higher-order hyperedge rather than merely as a collection of pairwise aspect edges.

Hyperedge classes:

```text
geometric_polygon
topological_basin
compound_hybrid
```

### Geometric polygon registry — current k=3/k=4

```text
Grand Trine
T-Square
Yod
Grand Cross
Kite
T-Square Anchor Cluster
```

The registry distinguishes historical angular primitives from modern/Noetic whole-pattern naming.

A configuration definition includes:

- participant roles;
- cardinality;
- target angles;
- orb ceilings;
- RMS residual policy;
- role/permutation matching semantics;
- configuration identity/version.

No scalar astrological strength is inferred from template fidelity.

## 14. Topological hyperedges

The existing traditional dispositor topology is promoted into first-class set-valued objects where appropriate.

Current topological hyperedges include:

- closed SCCs with at least two members;
- terminal basin-capture sets.

These retain the traditional ruler model that generated them.

A basin is not an independent astrological doctrine. It is a mathematical property of the encoded rulership graph.

## 15. Compound hybrid hyperedges

A hybrid may couple a verified geometric hyperedge to an independently derived routing/topological structure.

The layers remain separate in provenance:

```text
geometry fact
+
routing fact
→ explicit coupling fact
```

This is not permission to collapse all graph layers into one power score.

## 16. Hyperedge research state

Every v0.4.7 hyperedge carries:

- ID/class;
- participant set;
- cardinality;
- metrics;
- derivation payload;
- SHA-256 derivation hash;
- research status;
- population-frequency state;
- interpretation state.

At deterministic detection:

```text
[D,V,B,P,I] = [1,1,0,0,0]
```

After required admissible null comparison:

```text
[D,V,B,P,I] = [1,1,1,0,0]
```

Population and interpretation remain unavailable.

## 17. Incidence representation

The formal hypergraph can be represented with binary incidence matrix `H`.

Current deterministic research output includes:

```text
H
D_v
D_e
```

where `D_v` records vertex incidence degree and `D_e` hyperedge cardinality.

Hypergraph-Laplacian eigenanalysis is deferred.

## 18. Hidden geometry — v0.4.8 boundary

The next astrological/geometric research layer, after public v0.4.7 productization, will formalize:

- midpoints;
- declination parallels/contraparallels;
- antiscia/contra-antiscia.

These are separate geometric relations with their own coordinate transformations, policies, sources, and provenance.

They must not be treated as ordinary longitude major aspects merely for UI convenience.

## 19. Experimental model laboratory — v0.4.9 boundary

Alternative rulerships or object-signership hypotheses, such as Ceres–Taurus, belong to named Experimental models.

An Experimental model must produce explicit deltas from the Operational control and remain reversible.

No alternative rulership silently changes the baseline chart.

## 20. Population cohort boundary — v0.5.0

A counterfactual null model is not a natal population.

Real prevalence statements require empirical cohort/reference distributions.

Therefore:

```text
counterfactual percentile ≠ population percentile
```

Population frequency remains `unknown` until the future cohort layer provides the relevant empirical evidence.

## 21. Interpretation boundary

The framework may describe formal structure using symbolic/phenomenological energy language downstream, but astrological interpretation remains a separate versioned layer.

The current model specification does not claim that chart geometry causes measurable physical energetic forces.

## 22. Current public-surface caveat

The framework above exists on `main`, but the root public browser still reaches the v0.4.5 shell and does not expose the complete v0.4.7 hypergraph/null-profile interface.

That packaging gap is tracked in [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

The domain model and public product must eventually agree, but documentation must not pretend they already do.