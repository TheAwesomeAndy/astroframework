# Noetic Atlas

**An auditable visual-analytics framework for astrological structure, topology, condition, energetic synthesis, graph analysis, and time.**

> **See the structure. Follow the flow. Understand the pattern. Show the work.**

Noetic Atlas is an experimental computational framework for representing astrology as a multilayer symbolic system rather than forcing every relationship into a single horoscope wheel. The underlying research framework is the **Noetic Atlas Framework (NAF)**.

The project has two linked goals:

1. build a useful public/professional instrument for exploring astrological structure, condition, interpretation, and timing;
2. build a research environment in which structural, interpretive, and temporal claims can be formulated, reproduced, compared with alternatives, and rejected when they fail.

## Current release

See [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md) for the canonical release contract.

**Current public release:** v0.4.2 — Relational Condition  
**Current browser surface:** `prototype/v042.html`  
**Deployed/default branch:** `main`

Current model identifiers:

```text
naf.condition.system.v0.4.2
naf.condition.relational.hellenistic.v0.4.2
naf.rules.relational_condition.hellenistic.v0.4.2
naf.condition.signature.v0.4.2
naf.research.house_river.v0.4.2
naf.integrity.derivation_walker.v0.4.2
naf.interpretation.house_resonance.v0.4.1.3
naf.interpretation.energetic_synthesis.v0.4.1.2
naf.interpretation.natural_house_overlay.modern.v1
naf.research.graph_analytics.v0.4.1
naf.condition.primitive.hellenistic.v0.4.0b
naf.condition.record.v0.4.0a
naf.analysis.v0.3.1
```

The root `index.html` redirects to the current v042 wrapper. v042 embeds the complete v0413 Atlas, which embeds v0412c, which reads the serialized chart state from the existing deterministic visual core. There is still only **one chart calculator/state authority**.

## Frozen architecture law

```text
one chart state
→ many coordinated projections
```

A new representation does not get to recalculate the astronomical or kernel substrate. It must project the state already produced by the deterministic pipeline.

Current preservation chain:

```text
v042 Relational Condition
└── v0413 Resonance Field + Structure/Analysis switch
    └── v0412c Energetic Analysis observatory
        └── prototype/index.html deterministic visual core
```

## Current architecture

```text
Civil input
→ time-zone / DST resolution
→ astronomy
→ deterministic astrological kernel
→ traditional integrity + lots
→ primitive condition
→ relational condition
→ graph analytics / findings
→ resonance / House River / qualified flow projections
→ energetic astrological synthesis
→ proof / provenance
```

The governing epistemic rules are:

```text
graph ≠ reading
metric ≠ meaning
relation type ≠ generic connection
route count ≠ strength
symbolic-energy language ≠ measured physical energy
```

## Implemented structural substrate

- local birth date/time + latitude/longitude input;
- historical civil-time/time-zone resolution with DST ambiguity handling;
- Astronomy Engine 2.1.19 adapter for Sun through Pluto;
- independently calculated ASC and MC;
- planetary longitudinal velocity / retrograde state;
- geometric solar altitude and sect;
- tropical zodiac;
- Whole Sign houses;
- major aspects under an explicit orb policy;
- applying/separating when motion data exist;
- traditional domicile rulership;
- directed dispositor graph;
- Tarjan strongly connected components and terminal SCCs;
- all-house ruler routes;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- derivation/provenance ledger and derivation tree;
- interactive SVG Natal Field;
- computed Aspect Matrix;
- directed Flow Map with SCC and house-route inspection;
- automated integrity/boundary tests in GitHub Actions.

## Primitive condition

For Sun, Moon, Mercury, Venus, Mars, Jupiter, and Saturn, the primitive condition engine independently computes:

- domicile;
- adversity/opposite domicile;
- sign-level exaltation;
- sign-level depression/fall;
- standard/Dorothean triplicity participation and active sect ruler;
- Egyptian bound/term under `[start,end)` degree conventions;
- planetary sect family;
- in-sect/out-of-sect relation;
- Whole-Sign angular-triad class.

Every factor is independently represented and provenance-bearing. **No scalar planet-strength score is calculated.**

## Relational condition — v0.4.2

The machine-readable source lock is:

```text
data/rules/hellenistic/relational-condition-v1.registry.json
```

The relational engine adds distinct relation layers for the classical seven:

```text
G_dispositor
G_reception
G_exchange
G_mutual_reception
G_overcoming
```

Current rule types:

- configured domicile **reception**;
- domicile **exchange**;
- separately identified later-tradition **mutual-reception compatibility** for configured reciprocal reception/exchange;
- right-hand **overcoming** through sextile, square, and trine;
- right-hand square / upon-the-tenth **domination**.

Hellenistic `exchange` is not silently renamed `mutual reception`. Dispositorship, reception, exchange, and overcoming remain separate graph layers with separate rule IDs and proof objects.

## Reusable Condition Signatures

The v0.4.2 condition-signature projection follows each classical planet across views. It can display essential condition, sect, Whole-Sign angularity, bound, triplicity, reception, exchange, overcoming, and domination as categorical tokens.

There is deliberately no red/green compression and no single strength score.

## Graph analytics + explainable findings

### Classical dispositor functional graph

Current derivations include:

- SCC condensation;
- terminal basin membership and basin fraction;
- route depth to terminal SCC;
- upstream route capture;
- largest nonterminal path bottleneck.

For `NAF-CANON-0001` under traditional domicile rulership:

```text
terminal SCC: Mercury ↔ Venus
terminal basin: 7 / 7
Jupiter route depth: 3
Saturn route depth: 2
Mars route depth: 1
largest nonterminal route bottleneck: Mars
```

These are graph-derived facts conditional on the selected ruler model, not claims of psychological or spiritual primacy.

### Aspect graph

Current calculations include:

- connected components;
- degree;
- local and mean clustering coefficient;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- closed three-node typed motifs;
- Grand Trine, T-square, and triple-conjunction templates;
- exact ≤1° edge subset.

### Cross-layer overlap

The first explicit multiplex comparison remains:

```text
E_aspect ∩ E_dispositor
```

v0.4.2 adds relational layers beside that topology rather than collapsing them into a single weighted graph.

## Resonance Field

The v0.4.1.3 Resonance Field remains preserved. Under Whole Sign houses it makes the chart-wide rotation between the optional modern natural-house sequence and the actual house-sign sequence explicit.

For the canonical Leo-rising chart:

```text
rotation: +4 signs / 120°
element preserved: 12 / 12
mode preserved: 0 / 12
phase character: element-preserving / mode-rotating
```

v0.4.2 **Qualified Resonance** adds the actual ruler's condition signature and classical occupant signatures without changing the natural-house overlay's status as a secondary modern/phenomenological comparison.

## House River

House River begins from lived Whole-Sign domains and traces their existing ruler routes into the traditional dispositor network.

For every planetary dispositor edge `e`:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

Band thickness therefore has a precise integer routing meaning. It does **not** mean soul power, fate, energetic intensity, or planet strength.

## Qualified Flow

The new flow view superimposes, without merging:

```text
solid gray    dispositor routing
cyan dashed   reception
gold dotted   exchange
red            overcoming
violet         domination
```

Classical planet nodes carry reusable categorical condition state.

## Derivation Walker

Every v0.4.2 relation and every House River band is created with a `derivation_ref`.

The shared walker can traverse:

```text
visible claim / relation / band
→ derivation object
→ rule ID + source
→ inputs / result
→ dependencies
→ existing deterministic proof where indexed
```

If an older dependency is not yet normalized into the walker index, it is surfaced as `external_or_unindexed_dependency`; the system does not fabricate a missing proof step.

## Energetic whole-chart synthesis

The preserved energetic synthesis remains:

```text
archetypal current
→ actual sign
→ actual Whole Sign house
→ optional modern natural-house resonance
→ sign ruler / dispositor route
→ aspect geometry
→ graph architecture
→ traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life manifestation
→ soul/spirit inquiry
→ evidence / proof
```

The actual sign and actual house remain primary. The twelve-letter/natural-house layer is optional and explicitly versioned as a modern correspondence model.

Uranus, Neptune, and Pluto participate in modern/transpersonal interpretation while remaining `not_applicable` to classical Hellenistic dignity rules.

Ceres is supported as an interpretive `minor_body` when a coordinate is supplied. The current birth-time astronomy adapter does **not** automatically generate a validated Ceres coordinate.

Energy/current/field vocabulary is symbolic/phenomenological language. It is not presented as experimentally established physical field mechanics.

## Public v0.4.2 hierarchy

```text
Existing Atlas       → all prior Structure/Analysis + Resonance work
Qualified Resonance  → sign/house/ruler resonance plus condition signatures
Relations            → source-locked typed traditional relations
Qualified Flow       → routing + relation layers + node condition
House River          → lived-domain drainage through ruler paths
Proof Walker         → reversible derivation infrastructure
```

Nothing in the prior v0412c or v0413 surfaces is deleted to create these views.

## Current limitations

Still absent or intentionally blocked:

- automatic validated Ceres/small-body astronomy;
- Chiron, nodes, Lilith/apogee, Vertex, and fixed stars in the current birth-time adapter;
- complete independent cross-provider astronomy validation;
- bonification/maltreatment synthesis;
- enclosure and selected compound mitigation/counteraction rules;
- degree-based quadrant dynamic strength;
- graph null distributions;
- statistical motif enrichment;
- validated condition-weighted graph descriptors;
- full motif + condition field geometry;
- side-by-side rule-set comparison;
- complete normalization of all legacy derivation entries into the shared walker contract;
- Life Spectrum;
- production annual profections/zodiacal releasing;
- externally validated predictive interpretation model.

## Next engineering sequence

```text
v0.4.3  selected compound condition / condition-aware synthesis
         bonification / maltreatment / enclosure / selected mitigation
motif + condition field geometry
side-by-side rule-set comparison
research graph nulls and multilayer baselines
validated extended-body astronomy where justified
v0.5    Life Spectrum
v0.6    traditional timing systems
v0.7    recurrence / Life Space research
```

## Tests

```bash
npm install
npm test
```

The standard suite currently includes kernel, integrity, condition registry, primitive condition, relational condition, graph analytics, astrological analysis, energetic synthesis, house resonance, House River/Derivation Walker, all legacy UI contracts through v0413, the v042 UI contract, boundary geometry, timezone, and astronomy-adapter contract tests.

Serve locally:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000/prototype/v042.html
```

## Design rules

1. Calculation before narration.
2. One chart state, many coordinated projections.
3. Structure before meaning.
4. Houses remain first-class life fields.
5. Ruler/dispositor pathways remain visible.
6. Relation types remain distinct; no generic astrological edge.
7. A graph term is never the final interpretation.
8. No naked graph metric.
9. No opaque condition/strength score.
10. Route count is routing evidence, not energetic strength.
11. Show the work.
12. Every new relational/flow object is born with provenance and a derivation reference.
13. Never manufacture missing coordinates or false precision.
14. Ambiguity and unsupported states are data.
15. Traditions are explicit rule models, not hidden mixtures.
16. Graph fact and interpretation remain separately labeled.
17. A graph is an encoded model, not evidence that astrology is a physical network.
18. Do not call a graph feature rare/high/unusual without a defined baseline.
19. The wheel remains a useful reference and future HCI control.
20. AI consumes deterministic state; it does not replace it.
21. A failed hypothesis is an acceptable result.
22. Energetic language may be spiritually useful without being mislabeled as experimental physics.

## Documentation

Start with:

1. [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md)
2. [`docs/V042_RELATIONAL_CONDITION.md`](docs/V042_RELATIONAL_CONDITION.md)
3. [`docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)
4. [`docs/V0413_RESONANCE_FIELD.md`](docs/V0413_RESONANCE_FIELD.md)
5. [`docs/V0412_ENERGETIC_SYNTHESIS.md`](docs/V0412_ENERGETIC_SYNTHESIS.md)
6. [`docs/V041_GRAPH_ANALYTICS_AND_FINDINGS.md`](docs/V041_GRAPH_ANALYTICS_AND_FINDINGS.md)
7. [`docs/CONDITION_ENGINE_SPEC.md`](docs/CONDITION_ENGINE_SPEC.md)
8. [`docs/ROADMAP.md`](docs/ROADMAP.md)
9. [`docs/INDEX.md`](docs/INDEX.md)

Historical milestone docs are retained as historical records. Living docs must agree with the current release contract and implementation.
