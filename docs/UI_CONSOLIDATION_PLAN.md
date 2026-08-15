# UI Consolidation Plan

Status: living UI law; current v0.4.7 public implementation is **not yet compliant**. The concrete release blocker is [`V047_PUBLIC_PRODUCTIZATION_GATE.md`](V047_PUBLIC_PRODUCTIZATION_GATE.md).

The live application preserves capabilities, not historical release shells as competing current interfaces.

## Frozen UI rule

```text
one current application shell
→ one deterministic chart state
→ many coordinated projections
```

Historical HTML surfaces remain in the repository for regression/history, but the public application should not present them as multiple competing current products.

## Intended unified application

The authoritative current shell:

- embeds only the deterministic visual core (`prototype/index.html`) as the chart-calculation authority;
- exposes current capabilities through one navigation system;
- preserves seven coordinated views: Chart, Reading, Resonance, Network, House Flow, Condition, Proof;
- preserves `Personal | Research` as an aperture control rather than an eighth workspace;
- renders energetic analysis, graph findings, resonance, relational/compound condition, House River, proof, and integrity as sibling projections;
- exposes v0.4.6 null-model controls only in Research mode;
- exposes v0.4.7 hyperedges and candidate-specific null profiles in Research mode;
- preserves existing computational modules and rule models;
- removes visible stacked release wrappers as current-product chrome;
- distinguishes current product version from preserved subsystem/model versions;
- gives non-chart panels appropriate independent scrolling;
- remains responsive on mobile and desktop;
- uses an explicit loading → ready/empty/error bootstrap state machine;
- invalidates stale research results when chart state changes.

Historical release surfaces are implementation history, not current UI chrome.

## Current violation

As of the v0.4.7 framework baseline:

```text
root index.html → prototype/app.html?build=research-045
current root shell → v0.4.5
prototype/v046.html → separately reachable
prototype/v047.html → absent
```

Therefore the one-current-application rule exists architecturally but is not yet satisfied by the deployed public surface.

## Release criterion

The UI consolidation requirement is complete only when:

```text
root entry
= authoritative current shell
= current product version
= current feature exposure
= coherent bootstrap behavior
= regression-tested public Research path
```

See the v0.4.7 productization gate for the executable acceptance checklist.