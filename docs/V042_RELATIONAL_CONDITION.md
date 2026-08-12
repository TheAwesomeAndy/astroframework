# Noetic Atlas v0.4.2 — Relational Condition

## Purpose

v0.4.2 adds the connective tissue between local planetary condition, rulership topology, house routing, resonance, and proof.

The frozen architectural law remains:

```text
one chart state
→ many coordinated projections
```

No v0.4.2 view recalculates astronomy, house placement, aspects, lots, or the deterministic kernel. The current public shell `prototype/v042.html` embeds the existing v0.4.1.3 Atlas and reads the same serialized chart state.

## Source lock

Machine-readable source/rule registry:

```text
data/rules/hellenistic/relational-condition-v1.registry.json
```

Current source lock uses Christopher Brennan, *Hellenistic Astrology* (2017), especially the glossary entries for reception, exchange, mutual reception, overcoming/right, domination, and chapter 14 on overcoming and reception.

### Distinct relation types

The relational ontology is deliberately multiplex:

```text
G_R = {
  G_dispositor,
  G_reception,
  G_exchange,
  G_mutual_reception,
  G_overcoming
}
```

These are not collapsed into a generic relationship edge.

### Reception

Rule ID:

```text
naf.relation.reception.domicile_configured.hellenistic.v1
```

Direction:

```text
host planet → guest planet
```

A reception is emitted when:

1. the guest occupies a domicile of the host;
2. both bodies are among the classical seven;
3. host and guest are configured by sign through sextile, square, trine, or opposition.

### Exchange

Rule ID:

```text
naf.relation.exchange.domicile.hellenistic.v1
```

An exchange is emitted when two classical planets occupy one another's domiciles. Configuration is not required for the exchange relation itself.

### Mutual-reception compatibility label

Rule ID:

```text
naf.relation.mutual_reception.domicile_configured.later_tradition.v1
```

This label is emitted only when an exchange pair also has reciprocal configured domicile reception. It is intentionally separate from Hellenistic `exchange`; v0.4.2 does not rewrite one doctrine into the other.

### Overcoming

Rule ID:

```text
naf.relation.overcoming.right_hand.hellenistic.v1
```

For right-hand sextile, square, or trine configurations, the superior/right-hand planet is represented as a directed relation toward the inferior/left-hand planet.

### Domination / upon-the-tenth

Rule ID:

```text
naf.relation.domination.tenth_sign.hellenistic.v1
```

A right-hand square in which the superior planet occupies the tenth sign relative to the inferior planet is emitted as the stronger named form `domination` rather than silently mixed with ordinary overcoming.

Opposition is retained as a recognized configuration for reception but v0.4.2 does not force opposition into an arbitrary directional overcoming edge.

## Engine

Primary engine:

```text
src/conditions/relational-condition-engine.mjs
```

Model:

```text
naf.condition.relational.hellenistic.v0.4.2
```

Outputs:

- typed relation objects;
- four distinct graph families plus the mutual-reception compatibility layer;
- per-planet relational records;
- rule IDs;
- source references;
- applicability notes;
- ledger entries;
- `derivation_ref` on every new relation.

The engine applies only to Sun through Saturn. Uranus, Neptune, Pluto, Ceres, Chiron, lots, angles, nodes, and other points do not inherit classical relational condition by analogy.

## Condition System + reusable signatures

Composition module:

```text
src/conditions/condition-system.mjs
```

Model:

```text
naf.condition.system.v0.4.2
```

It combines, without collapsing:

```text
primitive condition
+
relational condition
+
condition signatures
```

Reusable signature module:

```text
src/conditions/condition-signature.mjs
```

Model:

```text
naf.condition.signature.v0.4.2
```

A condition signature is a categorical state strip. Current tokens may include:

- domicile;
- exaltation;
- adversity;
- depression/fall;
- sect state;
- Whole-Sign angularity class;
- Egyptian bound ruler;
- triplicity role;
- receptions given/received;
- exchange;
- mutual-reception compatibility;
- overcoming given/received;
- domination given/received.

No single score is generated. `in sect`, `fall`, `angular`, `received by Jupiter`, and `overcomes Venus` remain distinct statements.

## House River

Engine:

```text
src/research/house-river-engine.mjs
```

Model:

```text
naf.research.house_river.v0.4.2
```

The House River begins with lived Whole-Sign domains and follows the deterministic house-ruler routes into the traditional dispositor network.

For each planetary dispositor edge `e`, band width is defined as:

```text
w(e) = number of Whole Sign house-ruler paths that traverse e
```

This count is an integer routing fact. It is **not** a planet-strength, soul-power, fate, or energetic-intensity score.

Every House River source band and planetary routing band carries a `derivation_ref`.

## Derivation Walker

Infrastructure:

```text
src/integrity/derivation-walker.mjs
```

Model:

```text
naf.integrity.derivation_walker.v0.4.2
```

The walker indexes:

- deterministic kernel derivation ledger entries;
- primitive condition ledger entries;
- relational condition ledger entries;
- House River derivations;
- future explicitly supplied proof objects.

A walk resolves:

```text
visible claim / relation / band
→ derivation object
→ rule ID + source
→ inputs / result
→ dependencies
→ existing coordinate / house / aspect / dispositor proof where indexed
```

Older dependencies that do not yet have normalized v0.4.2 derivation objects are displayed as `external_or_unindexed_dependency`. They are not silently fabricated.

## Public interface

Current public shell:

```text
prototype/v042.html
```

It preserves the entire v0.4.1.3 Atlas as the first workspace:

```text
Existing Atlas
```

and adds projections:

```text
Qualified Resonance
Relations
Qualified Flow
House River
Proof Walker
```

### Qualified Resonance

Extends the v0.4.1.3 resonance concept by attaching the reusable condition signature to the actual house ruler and classical occupants.

Read order:

```text
house domain
→ actual Whole Sign
→ actual ruler placement
→ ruler primitive + relational condition
→ downstream routing
```

The natural-house correspondence remains a secondary modern comparison and never replaces the actual sign, place, or ruler.

### Relations

Lists typed reception, exchange, mutual-reception-compatibility, overcoming, and domination objects with rule IDs, sources, and proof controls.

### Qualified Flow

Superimposes relation layers without collapsing them:

- solid = traditional dispositorship;
- cyan dashed = reception;
- gold dotted = exchange;
- red = overcoming;
- violet = domination.

Every classical planet node displays a compact categorical condition strip.

### House River

Displays lived house sources and house-route drainage. Planetary band thickness is exactly the route-count definition above.

### Proof Walker

Every v0.4.2 relation and House River band can open its derivation tree.

## Synthetic fixture contract

`tests/relational_condition_smoke.mjs` includes an intentionally constructed chart with:

```text
Mercury in Libra
Venus in Gemini
Mars in Aries
Jupiter in Cancer
```

The test requires:

- Venus receives Mercury;
- Mercury receives Venus;
- Mercury/Venus exchange domiciles;
- exchange and mutual-reception compatibility retain different rule IDs;
- Mars dominates Jupiter by right-hand square;
- every relational object has source, rule, inputs, result, and derivation reference.

`tests/house_river_derivation_smoke.mjs` verifies:

- all 12 house sources;
- integer edge route counts;
- non-strength semantics;
- derivation references;
- successful proof-tree resolution.

`tests/v042_ui_contract_smoke.mjs` protects the additive browser architecture and all new projections while earlier v041/v0411/v0412/v0412c/v0413 contracts remain in the same test suite.

## Current epistemic boundary

v0.4.2 formalizes traditional symbolic relations and graph projections. It does not establish that these relations are measurable physical energies, causal mechanisms, predictive truths, or validated psychological variables.

## Deferred

Still deferred:

- bonification and maltreatment synthesis;
- counteraction/mitigation beyond the current reception relation itself;
- enclosure;
- adherence/engagement compound rules;
- condition-weighted research metrics;
- graph null distributions / motif enrichment;
- full motif + condition field geometry;
- side-by-side rule-set comparison;
- Life Spectrum timing;
- traditional timing systems.

The next condition milestone is compound condition built as pure functions over primitive + relational facts.
