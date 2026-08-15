# Noetic Atlas v0.4.6 — Null Model Laboratory

Status: **merged framework milestone**. The inference subsystem is part of `main`; the dedicated `prototype/v046.html` shell remains a historical/side surface and has not been promoted to the authoritative current public application.

## Objective

v0.4.6 adds the first statistical-inference subsystem to Noetic Atlas. Its governing separation is:

```text
Detection != Unexpectedness
```

A detected structure is a deterministic fact about the selected model. Unexpectedness is a conditional statement relative to a named counterfactual generator. The Null Model Laboratory is the machinery that keeps those claims separate.

The implemented research arc advances only through:

```text
Observation -> Detection -> Derivation -> Counterfactual baseline
```

Population frequency, external association, replication, and interpretation remain later research stages.

## New modules

- `src/research/null-state.mjs`
- `src/research/null-metric-registry.mjs`
- `src/research/null-model-registry.mjs`
- `src/research/null-model-laboratory.mjs`
- `src/research/null-model-worker.mjs`
- `schemas/naf-null-laboratory-result-v0.4.6.schema.json`
- `tests/null_model_laboratory_v046_smoke.mjs`
- `tests/research_lab_v046_smoke.mjs`
- `tests/v046_ui_contract_smoke.mjs`
- `prototype/v046.html`

`research-lab-engine.mjs` is advanced to v0.4.6 and can accept an explicit `null_results` object. It never runs simulations automatically.

## Counterfactual registry

Every null is a versioned object with an explicit question, preserved properties, randomized properties, assumptions, limitations, admissible metrics, and statements of what it can and cannot test.

### N_G — Geometric null

Preserves the classical object identities, object count, Ascendant/Whole-Sign frame, and traditional sign-to-ruler codebook. Classical planetary longitudes are generated independently and uniformly on the circle; sign occupancy and classical dispositor topology are consequently regenerated.

Question: would routing concentration at least this extreme arise under this broad independent-geometry counterfactual?

This is not an astronomical population model and deliberately does not preserve real planetary dependencies.

### N_L — Cross-layer label-permutation null

Preserves aspect adjacency, aspect type placement, node-class counts, and the routing/condition layers. Object labels on the aspect layer are permuted only within object class, breaking the observed correspondence between aspect-network identities and the fixed condition/routing identities while preserving internal aspect topology.

Question: does the observed cross-layer coincidence depend on the particular identity alignment?

### N_D — Degree-preserving topology rewire

Preserves the aspect node set, degree sequence, edge count, aspect-type multiset, and the routing/condition layers. Double-edge swaps randomize adjacency subject to simple-graph degree constraints; aspect types are then permuted across the rewired edge set.

Question: does motif/role coincidence exceed what is expected from a degree-sequence-constrained aspect network?

The runner reports swap diagnostics because sparse graphs can constrain the reachable ensemble. Preservation-invariant failure aborts the run; weak swap mixing is surfaced as `simulation_quality = limited` rather than silently treated as a clean reference ensemble.

### N_T — Routing-codebook permutation null

Preserves observed planetary positions/sign occupancies, the Ascendant and Whole-Sign house signs, and the multiset of traditional rulership multiplicities. It randomizes which ruler label is assigned to which zodiac sign, then regenerates the classical dispositor and house-entry routing.

Question: does the observed routing concentration depend on the particular traditional sign-to-ruler codebook more than an artificial multiplicity-preserving routing assignment would?

This is not a proposed historical rulership system and cannot establish or refute traditional rulership.

## Frozen metric registry

The initial v0.4.6 registry contains five source-locked statistics. The same executable function `T(C)` is applied to the observed research state and every simulated counterpart.

1. `naf.metric.dispositor.basin_concentration_hhi`
   - Herfindahl concentration of terminal-basin fractions.
   - Upper-tail test.
   - Admissible under N_G and N_T.

2. `naf.metric.dispositor.terminal_basin_count`
   - Number of terminal SCCs in the classical dispositor functional digraph.
   - Two-sided empirical test.
   - Admissible under N_G and N_T.

3. `naf.metric.house.max_route_capture`
   - Largest fraction of the twelve house-ruler routes traversing the same directed dispositor edge.
   - Upper-tail test.
   - Admissible under N_G and N_T.

4. `naf.metric.cross_layer.motif_intersection_count`
   - Number of recognized major-aspect triangle motifs intersecting independently computed relational or compound-condition structure.
   - Upper-tail test.
   - Admissible under N_L and N_D.

5. `naf.metric.cross_layer.multi_role_count`
   - Number of aspect articulation nodes that also occupy a nonterminal dispositor role and/or a non-neutral compound-condition role.
   - Upper-tail test.
   - Admissible under N_L and N_D.

Each definition includes an implementation fingerprint. Adding or changing a statistic requires a new metric version rather than silently altering the experiment after simulation.

## Finite Monte Carlo inference

For an upper-tail statistic the laboratory uses:

```text
p_hat = (1 + count(T_i >= T_obs)) / (B + 1)
```

The analogous corrected lower tail is used when declared. Two-sided metrics use twice the smaller corrected empirical tail, capped at one.

The laboratory therefore never reports `p = 0`. With 9,999 counterparts the smallest attainable one-sided p-value is 0.0001.

## Effect position

Every experiment records:

- observed statistic;
- null mean and median;
- null standard deviation;
- empirical percentile;
- standardized displacement when the null SD is nonzero;
- null minimum and maximum;
- a declaration that no Gaussian assumption is being made.

These are descriptive positions inside the simulated reference distribution, not population estimates.

## Multiple testing

The default exploratory correction is Benjamini-Hochberg FDR.

The declared family is *per null model within a run*. This is deliberate: N_G, N_L, N_D, and N_T ask different counterfactual questions and are not pseudo-replicates of one universal hypothesis.

Every experiment records:

- raw p;
- adjusted p;
- correction procedure;
- family ID;
- family size;
- within-family rank;
- exploratory alpha used for the `departure-detected` / `no-departure-detected` descriptor.

No cross-null pass count is produced.

## Reproducibility and immutable ledger

The batch result and nested experiment records are deeply frozen before return.

Every experiment records:

- laboratory, null-model, and metric versions;
- metric implementation fingerprint;
- base seed and derived per-null seed;
- RNG algorithm (`mulberry32-v1`);
- iteration count;
- observed value;
- null-distribution hash;
- finite-Monte-Carlo method;
- raw and adjusted p;
- percentile/effect position;
- preserved and randomized properties;
- assumptions and limitations;
- constrained-generator diagnostics and simulation-quality status;
- population-frequency status;
- interpretation status.

Null draws do not need to be stored to be reconstructible; `retain_null_values=true` optionally retains them. The seed, model versions, metric fingerprint, state fingerprint, and distribution hash are sufficient to rerun and verify a reported result.

## Discovery integration

A null batch may be attached to the v0.4.5 Discovery registry. Candidate kinds are mapped only to predeclared detector-class statistics. Candidates with an admissible completed comparison move from:

```text
detected-no-baseline
```

to:

```text
null-tested
```

and only the `null_comparison` research-status dimension changes to `completed`.

The candidate retains:

```text
population_frequency = unknown
interpretation = withheld
```

The candidate record exposes a *null profile*: each comparison remains separate with its null question, metric identity, raw/adjusted p, percentile, effect position, preserved/randomized properties, and limitations.

There is deliberately no `3/4 nulls passed` field and no universal significance score.

Candidates for which v0.4.6 has no admissible detector statistic remain `detected-no-baseline`.

## Personal / Research aperture

Null simulation is explicit-run-only. The browser milestone shell executes the Monte Carlo batch in a dedicated module Web Worker so larger research runs do not block the chart interface. A new chart state invalidates the attached batch rather than silently reusing it.

Personal mode does not display null models, Monte Carlo controls, p-values, or research tables.

Research mode can launch a deterministic batch and open a Discovery candidate's null profile. This preserves the product architecture: Research is an aperture over the seven views, not an eighth workspace.

The current authoritative public root does not yet expose this full v0.4.6 surface; see the v0.4.7 productization gate.

## Claim ceiling

After v0.4.6 the framework may say:

- detected;
- derivationally verified;
- null-tested under N_G / N_L / N_D / N_T;
- at a stated percentile of a named simulated reference distribution;
- departure detected under a declared FDR-controlled test family;
- worthy of population-level investigation.

It may not say:

- rare among people;
- uncommon in natal charts;
- validated astrological signature;
- associated with a phenotype;
- predictive;
- causal;
- spiritually proven.

The word **rare** remains outside the research claim vocabulary until real natal comparison populations are implemented.

## Scientific boundary

v0.4.6 answers the question:

> Compared with what counterfactual model?

It does not yet answer:

> How often does this occur in real charts?

or:

> Does this residual structure correspond to anything outside the chart?

That separation is the milestone.
