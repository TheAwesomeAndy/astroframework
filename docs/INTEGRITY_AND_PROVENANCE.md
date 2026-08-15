# Noetic Atlas — Integrity and Provenance Protocol

## 1. Purpose

Noetic Atlas is built as an inspectable research instrument rather than a black-box horoscope generator.

> **Every displayed or research claim should be reversible to its input, formula/rule, model version, mathematical derivation, counterfactual where applicable, applicability, and known limitation.**

Current framework baseline: **v0.4.7**.  
Canonical release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Frozen architecture:

```text
one astronomical/chart state
→ many explicit models
→ many coordinated projections
```

No proof-bearing projection may silently create a second source of chart truth.

## 2. Epistemic statement classes

Noetic Atlas distinguishes at least these classes:

1. **Input** — user-supplied or explicitly imported values.
2. **Astronomical computation** — ephemeris positions, observer geometry, velocities, civil-time resolution.
3. **Astrological rule output** — house/sign assignment, aspect admission, rulership, sect, lots, primitive/relational/compound condition.
4. **Graph/hypergraph derivation** — SCCs, basins, routes, graph metrics, typed higher-order configurations, incidence structure.
5. **Counterfactual research result** — observed-versus-null comparison under an explicit generator/statistic.
6. **Population result** — empirical prevalence/reference-distribution claim from real comparison cohorts. **Not generally implemented yet.**
7. **External association / replication** — relation to independent criteria and repeated evidence. **Not generally implemented yet.**
8. **Interpretive inference** — traditional, modern, transpersonal, energetic, spiritual, psychological, or AI-assisted meaning.

Later classes may consume earlier classes; they may not rewrite them.

## 3. Current reversible evidence chain

The mature chain is now:

```text
visible reading / research claim
→ projection/model identity
→ hyperedge / graph / condition / route fact
→ null experiment where applicable
→ source-locked metric + named counterfactual
→ astrological rule/model
→ derivation object / ledger object
→ astronomical coordinate(s)
→ civil-time resolution where applicable
→ original input
```

A user should not need to inspect every proof to use the system, but the system should be capable of producing the proof.

## 4. Deterministic provenance

### Civil time

Record:

- local civil input;
- IANA zone or explicit override;
- historical UTC offset;
- UTC instant;
- ambiguity/nonexistence state;
- resolution method.

Repeated DST times are not guessed. Nonexistent local times are rejected or explicitly handled under a documented policy.

### Astronomy

Current provider: Astronomy Engine 2.1.19.

Record provider/version and coordinate/convention metadata. Unsupported automatic objects are not fabricated.

### Angles / sect / lots

ASC/MC derive from observer geometry. Sect and Hermetic lots retain formula/sect provenance, inputs, arcs, results, houses, rulers, and validation/completeness state.

### Aspects

Every admitted aspect retains endpoints, exact aspect family/angle, measured separation, orb, active policy identity, phase when computable, and provenance.

Rounded display values never override full-precision calculations.

## 5. Rulership/topology provenance

Traditional domicile rulership creates directed dispositor edges under an explicit ruler map.

SCCs and basin structure are algorithmically re-derived from the graph.

A statement such as:

```text
Mercury ↔ Venus is a terminal SCC
```

is incomplete unless its graph/model scope is identified.

House River additionally retains the contributing Whole-Sign house routes for each route-count band.

## 6. Condition provenance

Primitive, relational, and compound condition remain independently inspectable.

Noetic Atlas does not convert multidimensional condition into an opaque total.

Every implemented condition rule should preserve:

- model/rule ID;
- source/tradition or reconstruction label;
- applicability;
- inputs;
- result;
- limitations/variant boundaries;
- ledger/derivation reference.

## 7. Research-regime provenance

Every research object should identify whether it belongs to:

```text
Operational
Experimental
Discovery
```

Experimental objects require a hypothesis/model identity and reversible comparison against control.

Discovery objects may carry temporary labels and incomplete research status.

No research object is permitted to change its regime implicitly because later evidence is favorable.

## 8. v0.4.6 Null Model Laboratory provenance

Every null experiment must preserve enough information to reconstruct the comparison.

Required fields include:

- laboratory model/version;
- null model ID/version;
- metric ID/version;
- metric implementation fingerprint;
- observed-state fingerprint;
- base and derived seed;
- RNG algorithm/version;
- iteration count;
- observed statistic;
- null-distribution hash;
- finite-Monte-Carlo method;
- raw p;
- adjusted p;
- multiple-testing procedure/family/rank/size;
- empirical percentile/effect position;
- preserved properties;
- randomized properties;
- assumptions;
- limitations;
- constrained-generator diagnostics;
- simulation-quality state;
- population-frequency state;
- interpretation state.

The same executable statistic must evaluate observed and simulated state.

### Finite Monte Carlo integrity

Use +1 correction:

```text
p_hat = (1 + exceedance_count) / (B + 1)
```

`p = 0` is invalid under the v0.4.6 contract.

### Multiple testing

Raw and adjusted p-values must remain separately visible. A threshold decision cannot erase the underlying values or family definition.

### Cross-null integrity

N_G, N_L, N_D, and N_T answer different questions. They are not replicate trials of one universal null.

Do not create:

```text
3/4 nulls passed
universal null score
overall cosmic significance
```

## 9. v0.4.7 Hypergraph provenance

Every hyperedge is a first-class provenance-bearing object.

Required identity:

- hyperedge ID;
- hyperedge class;
- participant set;
- cardinality;
- template/model identity;
- exact measurements;
- derivation payload;
- SHA-256 derivation hash;
- research status;
- population-frequency state;
- interpretation state.

### Geometric hyperedges

Retain target-angle assignment, observed separations, residuals/orbs, max/RMS residual, symmetry/fidelity metric, and policy identity.

### Topological hyperedges

Retain SCC/basin identity, internal routing edges, terminal/closed-cycle state, basin membership/volume, and the ruler-map/model that produced the topology.

### Compound hybrid hyperedges

Retain both parent layers and the explicit rule for declaring their coupling. Never replace the parent objects with an opaque combined score.

### Cardinality integrity

A missing participant is not an uncertainty to fill with narrative. If a definition requires k≥3 and only two qualifying bodies exist, the hyperedge does not exist under that definition.

## 10. Hypergraph null-profile provenance

A hyperedge null profile must distinguish:

```text
completed
not-admissible
```

An inapplicable null is not an empty p-value and not a failed test.

Every completed row retains the candidate-specific metric identity and the named counterfactual that produced it.

Research status may advance baseline/null comparison only when the required admissible comparisons are complete under the current v0.4.7 rule.

Population and interpretation remain unchanged.

## 11. Population-frequency integrity

Counterfactual simulations are not real cohorts.

The following inference is invalid:

```text
99th percentile under N_G
→ occurs in only 1% of real natal charts
```

Population prevalence requires an empirical cohort/reference engine with sampling design, chart provenance, provider consistency, cohort identity, uncertainty, sensitivity, and multiplicity handling.

Until v0.5.0 Population Cohort Engine exists, population-frequency state remains unknown in the general framework.

## 12. Interpretation provenance

Interpretation should state:

- interpretation model/profile;
- evidence consumed;
- tradition/posture;
- applicability;
- uncertainty/limitations;
- distinction from deterministic or research facts.

Graph/hypergraph structure may inform interpretation but may not be presented as psychological, spiritual, medical, causal, or predictive validation merely because it is mathematically well-defined.

Energy/current/field vocabulary remains symbolic/phenomenological unless independent physical evidence exists.

## 13. Completeness states

Use explicit states such as:

```text
valid
ambiguous
unsupported
invalid
not_implemented
not_applicable
indeterminate
not_admissible
pending
completed
limited
```

Do not encode unsupported or not-admissible as zero/false.

## 14. Public-product provenance

A public release claim itself has provenance.

The product version displayed at the root entry must correspond to the shell and features actually exposed.

Current framework v0.4.7 is ahead of the public product, which remains on the v0.4.5 shell. Documentation therefore reports a release-packaging defect instead of pretending that a successful repository/Page deployment made the hypergraph UI public.

See [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

## 15. Reproducibility package

A publishable research result should ideally retain:

```text
commit SHA
schema/model versions
astronomy provider/version
rule IDs
orb/configuration policy
metric implementation fingerprints
null-model versions
seeds/RNG
iteration count
multiple-testing family
population cohort/version where applicable
input/data provenance
limitations
negative/sensitivity results
exact analysis command/notebook
```

## 16. Integrity principle

> **A result is not auditable merely because code exists. It is auditable when the system preserves the full chain of why this object exists, under which model, compared with what, and which claims remain unavailable.**