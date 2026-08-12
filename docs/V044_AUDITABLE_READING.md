# v0.4.4 Candidate — Auditable Reading & Cross-Layer Discovery

v0.4.4 is a candidate milestone on `feat/v044-auditable-reading`. It does **not** own the public root until separately promoted.

## Architectural rule

```text
one chart state → many coordinated projections
```

The Reading layer is now subject to the same rule. It may not recalculate astronomy, houses, aspects, lots, dignities, dispositors, SCCs, reception, overcoming, compound condition, or House River routes.

## Pipeline

```text
deterministic chart state
        ↓
Evidence Pack
        ↓
Cross-Layer Discovery
        ↓
Typed Claim Planner
        ↓
Reading Integrity Gate
        ↓
approved claim objects
        ↓
optional future linguistic renderer
```

The browser candidate does not pretend that a free-form language model is trustworthy or available. The executable Reading is deterministic. A future model may paraphrase approved claim objects but may not originate structural claims.

## Evidence Pack

Model: `naf.reading.evidence_pack.v0.4.4`

Schema: `schemas/naf-reading-evidence-pack-v0.4.4.schema.json`

The generator-facing pack contains already-computed placements, Whole-Sign houses, ruler routes, terminal basins, condition signatures, typed relations, compound testimonies, House River bands, resonance mappings, typed motifs, graph facts, selected downstream phenomenological frames, and proof-bearing discoveries.

It deliberately omits raw longitude fields. Raw astronomical coordinates remain available through the deterministic provenance system and Proof Walker, not as material from which the Reading may silently recompute astrology.

## Typed claims

Model: `naf.reading.auditable_claims.v0.4.4`

Each claim contains:

- stable ID;
- claim type;
- rendered text;
- epistemic layer;
- evidence object IDs;
- `derivation_refs`;
- machine-checkable assertions;
- optional subject;
- explicit natural-house-secondary flag;
- its own `derivation_ref`.

The claim itself becomes an auditable object. A sentence is not trusted merely because it sounds fluent.

## Integrity gate

Model: `naf.integrity.reading.v0.4.4`

Hard failures include:

- wrong placement or Whole-Sign house;
- ruler route inconsistent with the evidence pack;
- relation or compound testimony absent from deterministic output;
- discovery absent from the discovery layer;
- unresolved proof references on structural/research claims;
- unsupported assertion types.

The checker also surfaces contradiction flags, including failure to acknowledge mixed compound condition and language that scalarizes a multi-planet terminal SCC into a single dominant planet.

Two provenance quantities remain separate:

```text
C_s = verified structural claims with valid proof / all structural claims
C_i = interpretive claims with declared evidence / all interpretive claims
```

They are not combined into a single credibility score.

## Cross-layer discovery

Model: `naf.research.cross_layer_discovery.v0.4.4`

Initial detectors:

1. condition-qualified terminal circuits;
2. house-topic convergence through nonterminal ruler bottlenecks;
3. aspect motifs that also contain relational or compound-condition structure;
4. planets occupying multiple independently computed graph/condition roles;
5. Ascensional Phase / natural-house resonance intersecting independently conditioned actual house rulers.

Every finding has a `derivation_ref`. These are exact structural intersections, not statistical claims. No finding may be called rare, powerful, fated, or a hidden soul signature until an explicit null/comparison model exists.

## Candidate UI

`prototype/v044.html`

The candidate remains a flat shell with one iframe pointing directly to `prototype/index.html`. The top-level views remain:

```text
Chart · Reading · Resonance · Network · House Flow · Condition · Proof
```

There is no new Discovery tab. Discoveries surface in Network and Reading, while Proof remains the universal inspection path.

## Promotion gate

Before v0.4.4 can become public:

- all legacy tests must remain green;
- Evidence Pack must contain no raw longitude fields;
- structural claim provenance coverage must be 1.0 for the deterministic candidate fixture;
- intentionally injected unsupported claims must be blocked;
- candidate UI must remain a one-iframe flat shell;
- current public functionality must be retained when v0.4.4 Reading is integrated into `prototype/app.html`.
