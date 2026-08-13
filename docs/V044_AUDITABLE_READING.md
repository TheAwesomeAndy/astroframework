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

The generator-facing pack contains already-computed placements, Whole-Sign houses, ruler routes, **all terminal basins**, condition signatures, typed relations, compound testimonies, House River bands, resonance mappings, typed motifs, graph facts, selected downstream phenomenological frames, and proof-bearing discoveries.

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

## Qualified proof references

v0.4.4 adds a compatibility walker that indexes legacy derivation objects under qualified identities such as:

```text
coordinate:Sun
whole_sign_house:Sun
aspect:Sun:Moon
dispositor_edge:Sun->Mars
```

This prevents old bare identifiers from allowing one proof type to masquerade as another. Reading claims are normalized to these qualified references before the integrity gate runs.

## Cross-layer discovery

Base model: `naf.research.cross_layer_discovery.v0.4.4`

v0.4.4 discovery suite: `naf.research.discovery_suite.v0.4.4`

Initial detectors include:

1. condition-qualified terminal circuits;
2. house-topic convergence through nonterminal ruler bottlenecks;
3. aspect motifs that also contain relational or compound-condition structure;
4. planets occupying multiple independently computed graph/condition roles;
5. Ascensional Phase / natural-house resonance intersecting independently conditioned actual house rulers;
6. **multiple classical terminal basins**, preserving every terminal center rather than only the largest;
7. full-planet basin partitions while retaining the selected traditional domicile-rulership graph;
8. House River partitions showing how many Whole-Sign house routes terminate in each basin;
9. parallel traditional/modern domicile overlaps under explicitly separate rulership models;
10. optional expanded-aspect contacts that geometrically bridge otherwise distinct dispositor basins.

Every finding has a `derivation_ref`. These are exact structural intersections, not statistical claims. No finding may be called rare, powerful, fated, or a hidden soul signature until an explicit null/comparison model exists.

### Multi-basin rule

A chart with more than one terminal basin must never be summarized as though only the largest basin exists. The candidate regression fixture requires the Reading/Discovery layer to preserve all basins and their separate House River catchments.

## Parallel modern rulership overlay

Model: `naf.interpretation.modern_rulership_overlay.v0.4.4`

This is a **secondary model overlay**, not a replacement of the traditional graph.

The current modern co-rulership comparison is:

```text
Scorpio  → Mars + Pluto
Aquarius → Saturn + Uranus
Pisces   → Jupiter + Neptune
```

The deterministic traditional dispositor graph remains:

```text
Scorpio  → Mars
Aquarius → Saturn
Pisces   → Jupiter
```

The overlay may therefore report, for example, that Jupiter occupies its traditional domicile in Pisces while Neptune occupies its modern outer-planet domicile in Pisces. It may also report that both fall in the same Whole-Sign house. It may **not** rewrite `Pisces → Jupiter` in traditional routing.

No modern outer-planet exaltation scheme is asserted in v0.4.4.

## Expanded aspect-family projection

Model: `naf.research.aspect_family.extended.v0.4.4`

The canonical major-aspect graph remains conjunction, sextile, square, trine, and opposition. An optional supplemental projection adds:

- semi-sextile — 30°;
- octile / semi-square — 45°;
- quintile — 72°;
- tri-octile / sesquiquadrate — 135°;
- bi-quintile — 144°;
- quincunx / inconjunct — 150°.

The prototype minor-aspect orb policy is explicit (`naf.orbs.extended_family.prototype.v1`) and currently uses a 2° limit for each supplemental aspect. This is not treated as a universal doctrinal orb standard; the policy must remain named and replaceable.

Applying/separating is available only when motion exists. Degree-only pasted charts may therefore show `unknown` phase even when the geometry itself is valid.

## Extended-object capability boundary

Imported/precomputed objects and automatic astronomy are different capabilities.

The parser can admit supplied coordinates for objects such as North Node, Lilith, Chiron, and Vertex, and those imported coordinates can participate in geometric calculations. This does **not** mean the birth-time astronomy adapter automatically calculated or independently validated those objects.

The UI must therefore distinguish:

```text
imported coordinate usable
≠
automatically computed and validated astronomy
```

## Two-state family / synastry multiplex engine

Model: `naf.relationships.family_multiplex.v0.4.4`

The engine accepts **two independently computed Noetic Atlas state bundles** and computes cross-chart contacts while inheriting structural roles from each natal state. It can identify contacts to:

- terminal-basin members;
- dispositor bottlenecks;
- aspect-graph articulation points;
- House River gateways;
- planets carrying compound-condition state.

This is a comparison engine, not a second natal calculator. Each chart must already be computed and auditable on its own.

The engine does not infer that the 4th or 10th house means a specific biological parent, and it does not infer compatibility, fate, karmic certainty, or family role from cross-chart contact alone. Relationship labels are supplied externally and remain separate from natal house semantics.

A public two-chart workflow/UI is **not** part of the v0.4.4 candidate yet; the deterministic multiplex engine and its regression contract exist first.

## Multi-basin regression fixture

`tests/fixtures/audrey-chart.txt` is a structural regression specimen supplied from the project discussion. The fixture is used to prevent a single-basin Reading assumption from returning.

The current tests require the selected traditional model to reproduce:

```text
classical planets:
Saturn basin  = 6/7
Jupiter basin = 1/7

Sun–Pluto planetary graph:
Saturn basin  = 8/10
Jupiter basin = 2/10

Whole-Sign house routes:
Saturn terminal  = 10/12 houses
Jupiter terminal = 2/12 houses

Mars → Saturn House River edge = 5 house routes
```

The same fixture requires Neptune in Pisces to be recognized as modern-domicile in the secondary overlay while its traditional sign ruler remains Jupiter. It also verifies supplemental Jupiter–Saturn and Saturn–Neptune semi-sextiles under the named optional minor-aspect policy.

These are regression facts for the encoded model, not rarity claims.

## Candidate UI

`prototype/v044.html`

The candidate remains a flat shell with one iframe pointing directly to `prototype/index.html`. The top-level views remain:

```text
Chart · Reading · Resonance · Network · House Flow · Condition · Proof
```

There is no new Discovery or Synastry top-level tab. Discoveries and supplemental aspect-family inspection surface in Network; modern co-rulership comparison surfaces in Resonance; entry-ruler condition is visible in House Flow; auditable claims surface in Reading; Proof remains universal.

## Promotion gate

Before v0.4.4 can become public:

- all legacy tests must remain green;
- Evidence Pack must contain no raw longitude fields;
- structural claim provenance coverage must be complete for the deterministic candidate fixtures;
- intentionally injected unsupported claims must be blocked;
- multi-basin charts must preserve all terminal basins;
- modern-rulership overlays must not modify traditional dispositor routing;
- expanded aspects must remain opt-in with an explicit orb policy;
- imported extended objects must not be mislabeled as automatically computed astronomy;
- candidate UI must remain a one-iframe flat shell;
- current public functionality must be retained when v0.4.4 Reading is integrated into the public `prototype/app.html`.
