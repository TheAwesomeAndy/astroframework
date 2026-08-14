# Noetic Atlas v0.4.7 — Formal Configurations & Astrological Hypergraphs

Status: implementation candidate.

## Governing boundary

Layer E remains quarantined. v0.4.7 formalizes higher-order structure but does not authorize psychological, spiritual, causal, medical, or population claims.

The milestone extends the research arc:

```text
Observation → Detection → Derivation → Formal hyperedge → Counterfactual baseline
```

A completed null profile advances only the baseline/null-comparison dimension. Population frequency remains unknown. Interpretation remains withheld.

## Why a hypergraph

Pairwise graphs encode binary relations. A higher-order configuration is represented as an attributed hyperedge over k participants so the configuration itself can carry geometry, topology, provenance, and research status.

The implemented object model is:

- `geometric_polygon`
- `topological_basin`
- `compound_hybrid`

Every hyperedge carries:

- participating nodes and cardinality;
- exact geometric and/or routing metrics;
- a SHA-256 derivation hash;
- an explicit derivation object;
- research status `[D,V,B,P,I]`;
- a null profile after v0.4.6 counterfactual evaluation;
- `population_frequency: unknown`;
- `interpretation_status: withheld`.

## Source locking

The geometric substrate is source-locked at two distinct levels.

### Historical aspect geometry

Chris Brennan, *Hellenistic Astrology: The Study of Fate and Fortune* (2017), chapter 9, reconstructs the classical configuration doctrine and describes the sextile, square, trine, and opposition as 60°, 90°, 120°, and 180° relations, with the sextile/square/trine understood as sides of inscribed regular polygons. The same chapter distinguishes sign-based and degree-based configurations and treats exact degree intervals as perfected configurations.

This historical source supports the angular primitives. It does **not** imply that every modern named whole-pattern template was a named Hellenistic doctrine.

### Modern whole-pattern names

Joanna Martine Woolfolk, *The Only Astrology Book You’ll Ever Need* (2008), explicitly lists Grand Trine, Grand Cross, and T-square among modern aspect-pattern vocabulary. Noetic Atlas therefore records modern configuration labels separately from the classical angular substrate.

`yod`, `kite`, and `t_square_anchor_cluster` are versioned Noetic configuration templates. The last is explicitly a Discovery label, not an inherited historical doctrine.

## v1 configuration template registry

v0.4.7 deliberately ships k=3 and k=4 only.

### k=3

- Grand Trine: 120/120/120
- T-Square: 180/90/90
- Yod: 60/150/150

### k=4

- Grand Cross: four 90° sides + two 180° diagonals
- Kite: Grand Trine + one 180° axis + two 60° links
- T-Square Anchor Cluster: one close conjunction, one opposition axis, and four approximately 90° cross-links

k=5–6 configuration libraries remain a follow-on and are not silently inferred in this release.

## Orb policy

`naf.hypergraph.configuration_orbs.v1` is a Noetic research policy, not a historical truth claim.

Major-angle ceilings inherit or tighten the kernel default research-orb policy:

- conjunction <= 6°
- sextile <= 6°
- square <= 8°
- trine <= 8°
- opposition <= 8°
- quincunx <= 3°

A configuration must also satisfy a stricter RMS residual threshold. Exact values are versioned in the template registry. The detector tests every participant-role permutation and retains the minimum-RMS assignment, preventing a mere unordered collection of pairwise aspects from being mistaken for a typed whole-pattern configuration.

`geometric_metrics` include:

- target-angle vector;
- matched participant-role edges;
- maximum orb;
- RMS orb;
- residual standard deviation;
- normalized template-fidelity/symmetry index;
- orb-policy identity.

No scalar astrological “strength” score is produced.

## Topological hyperedges

The implementation reuses the accepted classical dispositor graph and Tarjan machinery rather than reimplementing topology.

### Closed dispositor SCC

Any classical strongly connected component with at least two members is promoted to a `topological_basin` hyperedge with:

- SCC identity;
- closed-cycle flag;
- terminal flag;
- basin volume and fraction when terminal;
- exact internal dispositor edges in the derivation proof.

### Terminal basin capture

Every terminal SCC with at least two upstream basin members receives a basin-capture hyperedge. The participant set is the full set of classical planets whose ruler walks terminate in that attractor.

## Compound hybrid hyperedges

A verified geometric hyperedge is coupled to the independently derived traditional dispositorship layer when at least two classical participants in the geometric configuration share the same terminal basin.

The resulting hybrid object records both parents without collapsing the layers. Geometry remains geometry; routing remains routing; their intersection is the derived fact.

## SHA-256 derivation proof

All hyperedge derivation hashes use a browser-compatible synchronous SHA-256 implementation over canonical derivation payloads. The core smoke test includes the standard `SHA256("abc")` regression vector.

## Incidence representation

v0.4.7 includes the binary incidence matrix `H`, vertex degrees `D_v`, and hyperedge cardinalities `D_e` as deterministic research outputs.

The normalized hypergraph Laplacian eigensystem is explicitly deferred. No spectral claim is made in this milestone.

## v0.4.6 Null Model Laboratory integration

`runHypergraphNullLaboratory()` depends explicitly on the deployed v0.4.6 Null Model Laboratory contract and RNG system.

Every detected hyperedge receives a four-row null profile. Rows are either `completed` or `not-admissible`; an inappropriate null is never forced merely to obtain a four-number display.

### N_G — geometric counterfactual

For hypergraph work, N_G v1 randomizes all included chart-object longitudes independently while preserving object identities/classes and the Whole-Sign frame. Classical dispositorship is regenerated from randomized classical sign occupancy.

This is a broad geometric counterfactual, not a natal population model.

### N_L — within-class identity permutation

Preserves the observed longitude multiset and object-class counts while permuting identity-to-longitude correspondence within class. Routing/condition layers remain fixed.

### N_D — degree-preserving aspect rewire

Reuses the accepted v0.4.6 degree-preserving rewire for compound hybrid motifs. It is not treated as an appropriate test of a pure geometric polygon or pure dispositor basin.

### N_T — routing-codebook permutation

Reuses the accepted v0.4.6 rulership-codebook permutation for topological and hybrid routing coupling.

## Candidate-specific statistics

Each admissible hyperedge/null pair receives a frozen metric definition with:

- metric ID and version;
- candidate hyperedge ID;
- explicit formula;
- upper-tail direction;
- SHA-256 implementation fingerprint.

The identical executable function is applied to the observed state and every simulated state.

Primary statistics are normalized fidelity scores derived from:

- RMS geometric-template residual;
- typed major-edge template match fraction;
- terminal-basin/SCC routing fidelity;
- products of independently defined geometric and routing terms for hybrid configurations.

## Monte Carlo contract

v0.4.7 preserves the v0.4.6 statistical rules:

```text
p = (1 + count(T_i >= T_obs)) / (B + 1)
```

Therefore p=0 is impossible.

For every named null, all admissible detected hyperedges in the run form a declared exploratory test family and receive Benjamini–Hochberg FDR adjustment.

Nulls are never pseudo-replicated. No cross-null pass count or universal significance score exists.

## Research status

At deterministic detection:

```text
[D,V,B,P,I] = [1,1,0,0,0]
```

After all admissible null rows for the hyperedge are complete:

```text
[D,V,B,P,I] = [1,1,1,0,0]
```

No code path in v0.4.7 changes P or I.

## Canonical specimen regression

The repository includes a canonical specimen fixture based on the October 4, 1985 1:58 AM EDT chart coordinates used throughout Noetic Atlas development.

The v0.4.7 regression requires the engine to instantiate:

- the Sun–Moon–Jupiter Grand Trine;
- the Spirit-closed Kite over that Grand Trine;
- the Venus–Mars / Uranus–Chiron T-Square Anchor Cluster;
- the Mercury–Venus closed traditional dispositor SCC;
- the Mercury–Venus terminal basin capture;
- a compound aspect–routing hyperedge over the mutable anchor structure.

It also asserts a negative result: Sun + Mercury in Libra is a two-body copresence and must **not** be promoted to a k>=3 geometric hyperedge simply because an expected narrative calls it a “cluster.” Cardinality rules outrank desired output.

## Compatibility strategy

The accepted `research-lab-engine.mjs` remains v0.4.6 so its historical contract and smoke test stay reproducible.

v0.4.7 adds `research-lab-v047.mjs`, a wrapper that exposes the formal hypergraph research surface while preserving the v0.4.6 operational/null machinery unchanged underneath.

This is deliberate provenance, not duplication.

## Deferred work

Not implemented in v0.4.7:

- k=5–6 template library;
- hypergraph Laplacian eigensystem/spectral clustering;
- midpoints, declination/parallels, or antiscia (v0.4.8);
- alternative rulership tensors (v0.4.9);
- real natal population frequencies (v0.5.0);
- external phenotype or outcome association;
- interpretive validation.

## Claim ceiling

Allowed:

- detected as a typed hyperedge under configuration registry v1;
- derivationally verified;
- null-tested under named counterfactual N;
- observed at an empirical percentile of a simulated reference distribution;
- departure/no-departure under a declared FDR-controlled family;
- worth population-level investigation.

Forbidden:

- rare among people;
- validated astrological signature;
- causal;
- predictive of a phenotype;
- spiritually proven;
- psychologically established.

That boundary is the milestone.
