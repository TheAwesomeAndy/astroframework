# Noetic Atlas — Current Release Contract

This file is the canonical human-readable release contract for the living documentation. Historical milestone documents describe the release named in their title and are not rewritten to impersonate the present.

## Public release

- **Release:** v0.4.2 — Relational Condition
- **Deployed branch:** `main`
- **Public Pages entry:** repository root `index.html`
- **Current browser surface:** `prototype/v042.html`
- **Preserved additive Atlas:** `prototype/v0413.html`
- **Preserved Structure & Analysis workspace:** `prototype/v0412c.html`
- **Visual core:** `prototype/index.html`
- **Condition system:** `naf.condition.system.v0.4.2`
- **Relational condition model:** `naf.condition.relational.hellenistic.v0.4.2`
- **Relational rule registry:** `naf.rules.relational_condition.hellenistic.v0.4.2`
- **Condition signature model:** `naf.condition.signature.v0.4.2`
- **House River model:** `naf.research.house_river.v0.4.2`
- **Derivation Walker model:** `naf.integrity.derivation_walker.v0.4.2`
- **House resonance model:** `naf.interpretation.house_resonance.v0.4.1.3`
- **Energetic synthesis model:** `naf.interpretation.energetic_synthesis.v0.4.1.2`
- **Natural-house overlay:** `naf.interpretation.natural_house_overlay.modern.v1`
- **Graph model:** `naf.research.graph_analytics.v0.4.1`
- **Primitive condition model:** `naf.condition.primitive.hellenistic.v0.4.0b`
- **Condition schema:** `naf.condition.record.v0.4.0a`
- **Minimum deterministic analysis envelope:** `naf.analysis.v0.3.1`

The package version is an implementation/package identifier and is not the public UI release number.

## Frozen architectural law

```text
one chart state
→ many coordinated projections
```

No public view may independently recalculate astronomy, houses, aspects, lots, or the kernel substrate. v0.4.2 embeds the complete v0.4.1.3 Atlas and reads the same serialized chart state produced by the existing deterministic core.

The preservation chain is:

```text
v042 public shell
└── v0413 additive Atlas
    └── v0412c Structure & Analysis
        └── prototype/index.html deterministic visual core
```

Nothing delivered in v0.4.1.x is removed by v0.4.2.

## Public v0.4.2 projections

```text
Existing Atlas       → complete preserved v0.4.1.3 interface
Qualified Resonance  → resonance + ruler/occupant condition signatures
Relations            → typed reception/exchange/overcoming objects
Qualified Flow       → dispositor + relation layers + categorical node state
House River          → lived house domains into ruler/dispositor routing
Proof Walker         → reversible derivation traversal
```

## Deterministic substrate

Current supported foundations include:

- local civil date/time and observer coordinates;
- historical time-zone/DST resolution with ambiguity handling;
- Astronomy Engine 2.1.19 adapter for Sun through Pluto;
- geocentric ecliptic longitude and longitudinal motion/retrograde state;
- independently solved ASC and MC;
- geometric solar altitude for sect;
- tropical zodiac;
- Whole Sign houses;
- major aspects under a named orb policy;
- applying/separating when motion is available;
- traditional domicile rulership;
- directed dispositor graph;
- Tarjan SCC and terminal-SCC derivation;
- all-house ruler routes;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- derivation ledger/tree and completeness/provenance metadata.

## Primitive traditional condition

For Sun through Saturn the primitive engine computes independent, auditable factors:

- domicile;
- adversity/opposite domicile;
- sign-level exaltation;
- sign-level depression/fall;
- standard/Dorothean triplicity participation and active sect ruler;
- Egyptian bound/term under `[start,end)` intervals;
- planetary sect family;
- in-sect/out-of-sect relation;
- Whole-Sign angular-triad class.

No opaque scalar planet-strength score is produced.

## Relational condition — implemented in v0.4.2

Source-locked machine-readable rules live in:

```text
data/rules/hellenistic/relational-condition-v1.registry.json
```

The model keeps relation types distinct:

```text
G_R = {
  G_dispositor,
  G_reception,
  G_exchange,
  G_mutual_reception,
  G_overcoming
}
```

Current rule IDs:

```text
naf.relation.reception.domicile_configured.hellenistic.v1
naf.relation.exchange.domicile.hellenistic.v1
naf.relation.mutual_reception.domicile_configured.later_tradition.v1
naf.relation.overcoming.right_hand.hellenistic.v1
naf.relation.domination.tenth_sign.hellenistic.v1
```

### Reception

A classical host receives a classical guest when the guest occupies one of the host's domiciles and host/guest are configured by sign through sextile, square, trine, or opposition.

### Exchange

Two classical planets exchange domiciles when each occupies a domicile of the other. Configuration is not required for the exchange fact itself.

### Mutual-reception compatibility label

A configured exchange with reciprocal domicile reception may also receive the separately identified later-tradition `mutual_reception` label. It never replaces or renames the Hellenistic `exchange` relation.

### Overcoming and domination

For right-hand sextile, square, and trine configurations, the superior/right-hand planet is represented directionally toward the inferior planet. A right-hand square / upon-the-tenth relation is separately typed `domination`. Opposition is not forced into an arbitrary directional overcoming edge.

Relational condition currently applies only to Sun through Saturn. Outer planets and derived points do not inherit classical relation rules by analogy.

## Reusable Condition Signatures

`naf.condition.signature.v0.4.2` projects categorical condition state wherever a classical planet appears. Tokens may include primitive state plus receptions, exchange, mutual-reception compatibility, overcoming, and domination.

The same signature vocabulary is used in Qualified Resonance and Qualified Flow. It is deliberately multidimensional: no traffic-light or scalar compression is produced.

## Graph analytics

The classical dispositor graph includes SCC condensation, terminal basin membership/fraction, route depth, upstream route capture, and largest nonterminal path bottleneck. The aspect graph includes connected components, degree, clustering, normalized unweighted betweenness, articulation points, bridges, typed closed three-node motifs, Grand Trine/T-square/triple-conjunction templates, and an exact ≤1° subset. Aspect × dispositor overlap remains an explicit cross-layer comparison.

Relational graphs qualify this topology; they do not rewrite the dispositor routes.

## Resonance Field

The v0.4.1.3 Whole-Sign resonance model remains active and preserved. It compares the optional modern natural-house sequence with the actual Whole Sign sequence through one chart-wide phase rotation determined by the Ascendant.

For the canonical Leo-rising specimen:

```text
rotation: +4 signs / 120°
element preserved: 12/12
mode preserved: 0/12
phase character: element-preserving / mode-rotating
```

v0.4.2 adds condition signatures to the actual house ruler and classical occupants while preserving the read order:

```text
house domain
→ actual Whole Sign
→ actual ruler placement
→ primitive + relational condition
→ downstream routing
```

The natural-house layer remains a secondary modern/phenomenological comparison and never replaces actual place/sign/ruler doctrine.

## House River — implemented

Model:

```text
naf.research.house_river.v0.4.2
```

The House River starts from lived Whole-Sign domains and follows the existing deterministic house-ruler paths into the traditional dispositor graph.

For a planetary dispositor edge `e`:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

Band width therefore has an explicit integer routing meaning. It is not an energy, fate, soul-power, or planet-strength score.

Every source band and planetary routing band is born with a `derivation_ref`.

## Derivation Walker — infrastructure implemented

Model:

```text
naf.integrity.derivation_walker.v0.4.2
```

The walker indexes deterministic ledger entries, primitive condition entries, relational condition entries, and House River derivations. Every new v0.4.2 relation and river band has a derivation reference at creation time.

The visible path is:

```text
visible relation / band / condition claim
→ derivation object
→ rule ID + source
→ inputs + result
→ dependencies
→ existing coordinate / house / aspect / dispositor proof where indexed
```

Older dependencies not yet normalized into the v0.4.2 proof index are explicitly labeled `external_or_unindexed_dependency`; they are not invented.

## Energetic whole-chart synthesis

The v0.4.1.2 energetic synthesis remains preserved downstream of deterministic facts:

```text
coordinate / placement
→ archetypal current
→ actual zodiacal sign
→ actual Whole Sign house
→ optional labeled natural-house resonance
→ sign ruler / dispositor route
→ aspect geometry
→ graph context
→ traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life examples
→ soul/spirit inquiry
→ evidence / proof
```

Uranus, Neptune, and Pluto participate in modern/transpersonal interpretation while remaining outside classical Hellenistic dignity applicability. Ceres is recognized as a `minor_body` for interpretation when a coordinate is supplied; the current astronomy adapter does not automatically calculate a validated Ceres position.

Energy/current/field language remains symbolic/phenomenological, not a claim of experimentally measured physical force.

## Current limitations

Not yet implemented or validated:

- automatic validated Ceres/small-body astronomy;
- full Chiron/node/Lilith/Vertex/fixed-star birth-time calculation;
- independent professional-grade cross-provider astronomy validation corpus;
- bonification/maltreatment synthesis;
- enclosure and selected compound mitigation/counteraction rules;
- degree-based quadrant dynamic strength;
- condition-weighted graph research validated against explicit baselines;
- graph null distributions and statistical motif enrichment;
- full motif + condition field-geometry visualization;
- side-by-side rule-set comparison;
- complete normalization of all pre-v0.4.2 ledger objects into the Derivation Walker contract;
- Life Spectrum temporal activation;
- production annual profections/zodiacal releasing;
- externally validated predictive or psychological superiority.

## Current next sequence

```text
v0.4.3  compound condition as pure functions over primitive + relational facts
         bonification / maltreatment / enclosure / selected mitigation
condition-aware synthesis experiments
motif + condition field geometry
rule-set comparison
research graph nulls / multilayer baselines
validated extended-body astronomy where justified
v0.5    Life Spectrum
v0.6    traditional timing systems
v0.7    recurrence / Life Space research
```

Interpretive and representation-depth work may proceed in parallel so long as it consumes rather than rewrites deterministic state.

## Documentation rule

Living docs must agree with this release contract and implementation. A disagreement between implementation and current documentation is a defect.

Historical milestone/release documents remain historical and should not be rewritten to impersonate the present.
