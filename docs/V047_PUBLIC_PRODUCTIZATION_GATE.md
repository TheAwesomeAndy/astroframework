# Noetic Atlas v0.4.7 — Public Productization Gate

Status: **ACTIVE RELEASE BLOCKER**

This document exists because the framework implementation and the public browser product diverged after v0.4.6/v0.4.7 were merged.

The repository can be CI-green while the public instrument still exposes an older contract. That state is now treated as a release defect, not an acceptable transitional ambiguity.

## 1. Current observed state

Framework / repository:

```text
main contains v0.4.6 Null Model Laboratory
main contains v0.4.7 Formal Configurations & Astrological Hypergraphs
package version = 0.4.7-alpha.1
historical + v0.4.6 + v0.4.7 test suites pass
```

Public product:

```text
root index.html → prototype/app.html?build=research-045
app.html chrome → v0.4.5
prototype/v046.html → reachable, still labeled candidate
prototype/v047.html → absent
v0.4.7 hypergraph UI → absent
```

Therefore:

> **v0.4.7 is implemented, merged, and testable in code; it is not yet productized in the public browser instrument.**

## 2. Release law introduced by this gate

A milestone is not a complete public release merely because:

- code is on `main`;
- unit/integration tests are green;
- Pages built the repository successfully.

A public release also requires:

```text
current code
+ current entrypoint
+ current shell
+ current version chrome
+ current feature exposure
+ current bootstrap behavior
+ current UI regression coverage
```

If any of those disagree, documentation must report the disagreement explicitly.

## 3. Required v0.4.7 public shell

Create one authoritative current shell, preferably:

```text
prototype/v047.html
```

or deliberately promote `prototype/app.html` to the v0.4.7 contract.

The current shell must preserve the seven coordinated views:

```text
Chart
Reading
Resonance
Network
House Flow
Condition
Proof
```

and the aperture:

```text
Personal | Research
```

Research remains an aperture over the same chart authority, not a second calculator and not an eighth top-level workspace.

## 4. Required v0.4.6 exposure

Research mode must expose the accepted Null Model Laboratory contract:

- explicit null-test run control;
- iterations including accepted research sizes;
- explicit seed;
- dedicated Web Worker execution;
- candidate null profiles;
- raw and adjusted p-values;
- empirical percentile/effect position;
- departure/no-departure labels;
- preserved/randomized property disclosures;
- limitations and simulation-quality status;
- proof/experiment ledger access;
- no cross-null pass count;
- no population-frequency claim.

Personal mode must hide Monte Carlo/null machinery by default.

## 5. Required v0.4.7 exposure

Research mode must expose formal hypergraph objects as first-class research entities.

Minimum inspector/list requirements:

- hyperedge ID;
- hyperedge class;
- configuration/template label;
- participant set and cardinality;
- geometric metrics where applicable;
- topological metrics where applicable;
- derivation hash/ref;
- compact research state `[D,V,B,P,I]`;
- candidate-specific null profile;
- population frequency = unknown;
- interpretation = withheld.

The UI must distinguish:

```text
geometric polygon
≠ topological routing object
≠ compound hybrid
```

and must not collapse the four null models into a universal score.

## 6. Version-chrome contract

The active outer shell, current application title, Research surface, and documentation must agree on the current product contract.

Historical inner modules may retain historical implementation/model identifiers when those identifiers are semantically meaningful, but the UI must make clear that they are preserved components inside the current application rather than competing current releases.

Forbidden current-state experience:

```text
outer shell says v0.4.7
inner header appears to claim current product is v0.4.0b
research page says candidate for a merged milestone
root still advertises v0.4.5
```

The user should be able to answer two questions immediately:

1. Which product release am I using?
2. Which versioned subsystem produced this specific result?

Those are different questions and both must be legible.

## 7. Bootstrap contract

First paint must never imply a fully initialized chart when the chart graph has not attached.

Required state machine:

```text
loading
→ ready(canonical or calculated chart)
OR
→ explicit empty state
OR
→ explicit error state
```

Forbidden transient state:

```text
Truth state populated
+ Natal Field blank/uninitialized
+ no loading explanation
```

A new chart calculation must invalidate stale derived research state, including null results and hypergraph profiles, before new results are attached.

## 8. Root-entry contract

When the v0.4.7 shell is accepted:

```text
/index.html
```

must redirect only to the authoritative current application.

Historical shells may remain directly reachable for regression and archival purposes, but they must not compete for current-app status.

## 9. Required public-surface smoke test

The release gate is not green until a browser/UI contract verifies at least:

```text
open current root
→ canonical/loading state resolves coherently
→ seven views present
→ Personal default
→ Research aperture available
→ Network/Discovery exposes hyperedges
→ expected canonical hyperedges present
→ launch null run
→ null profile attaches to admissible hyperedges
→ research status advances baseline/null only
→ population remains unknown
→ interpretation remains withheld
→ switch Personal
→ Monte Carlo/null details hidden
→ recalculate/change chart
→ stale null/hypergraph result invalidated
```

The canonical fixture must continue to verify:

- Sun–Moon–Jupiter Grand Trine;
- Spirit-closed Kite;
- Venus–Mars / Uranus–Chiron T-Square Anchor Cluster;
- Mercury–Venus closed dispositor SCC;
- Mercury–Venus terminal basin;
- compound geometry × routing hyperedge;
- rejection of a two-body Sun–Mercury copresence as a k≥3 hyperedge.

## 10. Documentation acceptance criteria

At the same commit that productizes the shell:

- `README.md` must no longer report the packaging gap;
- `CURRENT_RELEASE.md` must mark the public product as v0.4.7;
- `PRODUCT.md` and `DEVELOPER_GUIDE.md` must point to the current shell;
- `INDEX.md` must identify v0.4.7 as both framework and browser release;
- `prototype/v046.html` must no longer present a merged milestone as an active candidate;
- historical milestone docs remain preserved as historical contracts.

## 11. Dependency block

Until this gate is green:

```text
v0.4.8 Hidden Geometry Engine = BLOCKED
```

This is deliberate. Adding midpoints, declination/parallels, or antiscia while the public instrument cannot expose the already-merged null/hypergraph layers would increase architectural debt and make release semantics less trustworthy.

## 12. Final release criterion

The gate closes only when all four agree:

```text
repository main
CI
GitHub Pages deployment
public browser behavior
```

At that moment v0.4.7 may accurately be called both the **framework baseline** and the **public product baseline**.