# Noetic Atlas v0.4.7 — Public Productization Gate

Status: **CLOSED — LIVE VERIFIED**

The v0.4.7 Public Productization Gate was created after live testing exposed a real divergence between the framework on `main` and the product reached by a normal visitor. The framework had advanced through v0.4.6/v0.4.7 while the root browser surface still behaved as v0.4.5.

That gap is now closed.

## 1. Release law

The governing lesson remains permanent:

```text
merged implementation ≠ deployed usable feature
```

A milestone is not a complete public release merely because:

- code is on `main`;
- unit/integration tests are green;
- Pages built the repository successfully.

Public release additionally requires:

```text
current code
+ current entrypoint
+ current shell
+ current version chrome
+ current feature exposure
+ current bootstrap behavior
+ current UI regression coverage
+ deployed browser verification
```

## 2. Pre-gate defect

Before productization, repository and product state disagreed:

```text
framework baseline: v0.4.7
root product surface: effectively v0.4.5
v0.4.6 null laboratory: code present, partial side-door shell only
v0.4.7 hypergraphs: code/tests present, no public shell
```

The defect was therefore not missing research code. It was missing product integration and release semantics.

## 3. Implementation delivered

The productization implementation added:

```text
prototype/v047.html
prototype/v047-research-worker.mjs
tests/v047_ui_contract_smoke.mjs
```

and updated:

```text
index.html
package.json
tests/unified_app_ui_contract_smoke.mjs
```

The implementation was merged to `main` as:

```text
0a4b425755fd347e6a9824fe7881e056eab478b3
```

No v0.4.8 hidden-geometry work, new detector, new null model, new metric, population inference, or research-engine rewrite was included.

## 4. Authoritative current shell

The public application now has one current shell:

```text
prototype/v047.html
```

Root ownership:

```text
/index.html → /prototype/v047.html
```

Historical shells remain directly reachable for regression/history but do not compete for current-product status.

The current shell contains exactly one deterministic chart iframe and does not recursively embed historical release wrappers.

## 5. Current chrome

The current public shell identifies itself as:

```text
Noetic Atlas v0.4.7
ONE CHART STATE · AUDITABLE READING · OPERATIONAL / EXPERIMENTAL / DISCOVERY
DETECTION ≠ UNEXPECTEDNESS · NAMED COUNTERFACTUALS · NO POPULATION CLAIM
```

The deterministic inner core is identified by subsystem role rather than by a stale product-release label.

This preserves the distinction between:

1. **product release identity** — v0.4.7;
2. **subsystem/model identity** — independently versioned provenance-bearing components.

## 6. Seven-view contract

The public shell preserves exactly:

```text
Chart
Reading
Resonance
Network
House Flow
Condition
Proof
```

and:

```text
Personal | Research
```

Research remains an aperture over one chart authority, not an eighth top-level workspace.

## 7. Bootstrap contract — implemented

The current shell implements:

```text
Loading
→ Ready
OR
→ Empty
OR
→ Error
```

`Ready` requires both:

- valid serialized deterministic chart state;
- a rendered Natal Field in the core.

The iframe remains visually gated until those conditions agree. The shell can request the canonical specimen during bootstrap; if initialization cannot succeed, it surfaces Empty/Error instead of silently showing an inconsistent chart.

A core reload or chart-state change:

- terminates any active Research worker;
- invalidates v0.4.6 null results;
- invalidates v0.4.7 hypergraph null results;
- requires newly derived state before Research attachments can reappear.

## 8. Personal aperture — verified

Personal is the default.

It exposes Operational chart/reading/resonance/network/house-flow/condition/proof material while concealing the primary Research machinery:

- Run null tests control;
- Monte Carlo p-value/FDR tables;
- simulation ledger;
- formal hypergraph research-status machinery.

Research findings do not silently contaminate the Personal reading.

## 9. Research aperture — v0.4.6 null laboratory

Research mode exposes the accepted Null Model Laboratory contract:

- iterations `199 / 999 / 4999 / 9999`;
- explicit seed;
- **Run null tests** button;
- explicit-only execution;
- dedicated Web Worker;
- simulation ledger;
- candidate null profiles;
- raw and adjusted p-values;
- empirical percentile;
- departure/no-departure state;
- simulation-quality state;
- named counterfactual identity;
- no cross-null pass count;
- no population-frequency claim.

The Research worker calls the existing v0.4.6 laboratory. No statistical method was duplicated in the UI.

## 10. Research aperture — v0.4.7 hypergraphs

Research mode exposes formal hyperedges as first-class research entities.

For detected hyperedges the UI shows:

- hyperedge ID;
- class;
- label/template;
- participants and cardinality;
- geometric or topological metrics;
- SHA-256 derivation hash;
- compact `[D,V,B,P,I]` status;
- candidate-specific null rows after an explicit run;
- raw/adjusted p-values and percentile;
- departure state;
- simulation quality;
- explicit `not-admissible` rows;
- population frequency `unknown`;
- interpretation `withheld`.

The UI preserves:

```text
geometric_polygon
≠ topological_basin
≠ compound_hybrid
```

No universal hypergraph-strength score exists.

## 11. Canonical structures — live verified

The live Research surface exposes the canonical higher-order structure, including:

- Sun–Moon–Jupiter Grand Trine;
- Spirit-closed Kite;
- Venus–Mars / Uranus–Chiron T-Square Anchor Cluster;
- Mercury–Venus topological structures;
- at least one compound hybrid.

The deterministic core regression separately retains the negative cardinality rule:

> Sun + Mercury alone is not a k≥3 hyperedge.

## 12. Proof contract

The public Proof view exposes:

```text
Observation → Detection → Derivation → Counterfactual baseline
```

and keeps the claim ceiling explicit:

```text
population_frequency = unknown
interpretation = withheld
```

When a Research run is attached, Proof displays ledger summaries for the v0.4.6 and v0.4.7 runs without promoting them into population or interpretive claims.

## 13. Static/UI contract verification

The productization branch added `tests/v047_ui_contract_smoke.mjs` to the standard integrity suite.

That contract verifies, among other things:

- root ownership;
- exactly one core iframe;
- exactly seven top-level views;
- Personal/Research aperture;
- explicit bootstrap state vocabulary;
- required existing-module imports;
- null controls under Research;
- formal hypergraph exposure;
- research invalidation code;
- no automatic null run;
- claim ceiling/proof text;
- current v0.4.7 chrome.

Branch integrity and post-merge main integrity both passed.

## 14. GitHub Pages deployment

GitHub Pages successfully built the productization commit:

```text
0a4b425755fd347e6a9824fe7881e056eab478b3
```

The Pages build record reported `status = built` and no deployment error.

This satisfied the deployment-SHA requirement but did not, by itself, close the gate.

## 15. Live browser verification

Because release acceptance required actual browser behavior, the gate was exercised against:

```text
https://theawesomeandy.github.io/astroframework/
```

using headless Chromium running in GitHub Actions.

The live test passed the following end-to-end sequence:

```text
open public root
→ land on prototype/v047.html
→ verify v0.4.7 chrome
→ canonical bootstrap reaches Ready
→ Natal Field is rendered
→ all seven views open
→ Personal hides null/hypergraph research controls
→ switch Research
→ canonical hyperedges are visible
→ choose 199 iterations + deterministic seed
→ Run null tests
→ v0.4.6 simulation ledger appears
→ v0.4.7 hypergraph null profiles appear
→ inspect raw/adjusted p, percentile, not-admissible, quality
→ Proof preserves population unknown / interpretation withheld
→ reload deterministic core
→ attached null state is invalidated
```

Live browser run:

```text
v0.4.7 live Pages gate #1
result: SUCCESS
```

Permanent regression files:

```text
tests/v047_live_pages_smoke.mjs
.github/workflows/v047-live-pages.yml
```

## 16. Binary acceptance matrix

| Acceptance condition | Result |
|---|---|
| One authoritative current shell | **PASS** |
| Root routes only to that shell | **PASS** |
| Coherent v0.4.7 product chrome | **PASS** |
| Loading → Ready \| Empty \| Error bootstrap | **PASS** |
| Personal \| Research preserved | **PASS** |
| Usable v0.4.6 null laboratory | **PASS — live execution** |
| Usable v0.4.7 hyperedge list/null profiles | **PASS — live execution** |
| New core/chart state invalidates old Research attachment | **PASS — live reload test** |
| Pages built accepted implementation SHA | **PASS** |
| Live browser verification | **PASS** |

**Gate result: CLOSED.**

## 17. Claim ceiling after gate closure

Productization changes availability, not epistemic status.

The system may say:

- detected;
- derivationally verified;
- null-tested under named counterfactual N;
- observed at an empirical percentile of that simulated reference;
- departure/no-departure under the declared FDR family.

It may not say on this basis alone:

- rare among people;
- population-enriched;
- validated astrological signature;
- causal;
- predictive of phenotype;
- spiritually proven.

## 18. Dependency transition

Before closure:

```text
v0.4.8 Hidden Geometry Engine = BLOCKED
```

After successful live closure:

```text
v0.4.8 Hidden Geometry Engine = NEXT / UNBLOCKED
```

This document does **not** start v0.4.8. It records only that the preceding public-release dependency has been satisfied.

## 19. Final release state

All four release authorities now agree:

```text
repository main          v0.4.7
CI                       green
GitHub Pages             v0.4.7 shell deployed
public browser behavior  v0.4.7 gate passed
```

Therefore it is now accurate to state:

```text
Framework baseline:      v0.4.7
Public product baseline: v0.4.7 (productized)
```
