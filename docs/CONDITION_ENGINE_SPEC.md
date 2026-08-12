# Noetic Atlas — Condition Engine Specification

## 1. Purpose

The condition layer answers a different question from geometry and topology:

```text
Where is the object?                     → geometry
How does rulership route?                → topology
What is the local rule-defined state?    → primitive condition
How is one planet qualified by another?  → relational condition
What compound testimony follows?         → compound condition
```

Condition is a multidimensional ontology, not a scalar-strength engine.

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).
Current relational implementation: [`V042_RELATIONAL_CONDITION.md`](V042_RELATIONAL_CONDITION.md).

## 2. Current status

Implemented:

```text
v0.4.0a  primitive rule registry + condition schema + fixture contract
v0.4.0b  primitive condition engine + inspectable UI
v0.4.2   relational condition + reusable signatures + qualified projections
```

Current models:

```text
naf.condition.primitive.hellenistic.v0.4.0b
naf.condition.relational.hellenistic.v0.4.2
naf.condition.signature.v0.4.2
naf.condition.system.v0.4.2
```

Current registries:

```text
data/rules/hellenistic/condition-v1.registry.json
data/rules/hellenistic/relational-condition-v1.registry.json
```

Current primitive schema:

```text
naf.condition.record.v0.4.0a
```

The public v0.4.2 surface preserves the earlier Condition pane and adds relational state to Qualified Resonance, Relations, and Qualified Flow.

## 3. Applicability

Full primitive and relational traditional condition currently applies to:

```text
Sun Moon Mercury Venus Mars Jupiter Saturn
```

Outer planets, lots, angles, nodes, and minor bodies do not automatically inherit Hellenistic dignity or relational-condition rules.

Applicability is explicit. `not_applicable`, `not_implemented`, `unsupported`, and `indeterminate` are distinct states.

## 4. Primitive factors — implemented

### Domicile

Traditional/Hellenistic domicile rulership. Independent and provenance-bearing.

### Adversity / opposite domicile

Represented separately from domicile. No point scoring.

### Exaltation

Current v1 uses sign-level exaltation only.

### Depression / fall

Current v1 uses sign-level opposition to the selected exaltation scheme.

### Standard/Dorothean triplicity

Records participation and active ruler under chart sect. Alternative triplicity tables require separate IDs.

### Egyptian bounds/terms

Current rule uses Egyptian bounds with local sign degrees in `[0,30)` and half-open intervals:

```text
[start_deg, end_deg)
```

Exact boundaries belong to the following interval. Exact 30° normalizes to 0° of the next sign before lookup. Ptolemaic/Chaldean variants are not silently mixed in.

### Planetary sect family

```text
Diurnal: Sun, Jupiter, Saturn
Nocturnal: Moon, Venus, Mars
```

Mercury is variable under the selected morning/evening-star rule. Unsupported/exact phase can return `indeterminate`.

### In-sect / out-of-sect

Chart sect, planetary sect family, and resulting sect relation remain separate facts.

### Whole-Sign angular-triad class

```text
Angular:   1, 4, 7, 10
Succedent: 2, 5, 8, 11
Declining: 3, 6, 9, 12
```

This does not replace degree-based quadrant dynamic strength, which remains unimplemented.

## 5. Relational condition — implemented in v0.4.2

Relational source lock:

```text
naf.rules.relational_condition.hellenistic.v0.4.2
```

Primary engine:

```text
src/conditions/relational-condition-engine.mjs
```

Model:

```text
naf.condition.relational.hellenistic.v0.4.2
```

The ontology remains multiplex:

```text
G_R = {
  G_dispositor,
  G_reception,
  G_exchange,
  G_mutual_reception,
  G_overcoming
}
```

Dispositorship is included in the conceptual relation family but is still calculated by the deterministic kernel. v0.4.2 does not replace or recalculate it.

### Reception

Rule ID:

```text
naf.relation.reception.domicile_configured.hellenistic.v1
```

Direction:

```text
host → guest
```

Current implementation requires:

1. guest occupies one of host's domiciles;
2. both are classical planets;
3. host and guest are sign-configured by sextile, square, trine, or opposition.

### Exchange

Rule ID:

```text
naf.relation.exchange.domicile.hellenistic.v1
```

Two classical planets exchange domiciles when each occupies a domicile of the other. Configuration is not required for the exchange fact.

### Mutual-reception compatibility

Rule ID:

```text
naf.relation.mutual_reception.domicile_configured.later_tradition.v1
```

A configured exchange with reciprocal domicile reception receives this additional later-tradition compatibility label.

This label is not allowed to rewrite the Hellenistic `exchange` relation. Both objects remain separately inspectable.

### Overcoming

Rule ID:

```text
naf.relation.overcoming.right_hand.hellenistic.v1
```

For sign-based sextile, square, and trine, the right-hand/earlier planet is represented as superior to the left-hand/later planet.

Opposition is retained as a configuration for reception but is not forced into a directional overcoming edge in v0.4.2.

### Domination / upon-the-tenth

Rule ID:

```text
naf.relation.domination.tenth_sign.hellenistic.v1
```

A right-hand square is emitted as the separately typed stronger form `domination`.

## 6. Condition-system composition

Composition module:

```text
src/conditions/condition-system.mjs
```

Model:

```text
naf.condition.system.v0.4.2
```

It composes without flattening:

```text
primitive condition
+
relational condition
+
condition signature projection
```

Completeness currently reports:

```text
primitive     implemented
relational    implemented
compound      not_implemented
scalar score  intentionally_not_implemented
```

## 7. Reusable Condition Signature

Module:

```text
src/conditions/condition-signature.mjs
```

Model:

```text
naf.condition.signature.v0.4.2
```

The signature is a categorical state strip, not a summary score. Tokens may include:

- domicile;
- exaltation;
- adversity;
- depression/fall;
- sect;
- Whole-Sign angularity;
- bound ruler;
- triplicity role;
- reception given/received;
- exchange;
- mutual-reception compatibility;
- overcoming given/received;
- domination given/received.

The same signature vocabulary can travel with a planet across Qualified Resonance, Qualified Flow, and later motif/House River inspectors.

## 8. Ledger and derivation granularity

There is no single opaque condition row.

Primitive factors and relational objects retain:

- rule/model ID;
- tradition/source reference;
- applicability;
- inputs;
- intermediate/boundary values where relevant;
- result;
- dependencies;
- engine version;
- completeness state.

Every v0.4.2 relation also carries:

```text
derivation_ref
```

so proof infrastructure exists at object birth rather than being retrofitted later.

## 9. Condition in the current UI

### Existing Atlas

The preserved v0412c Condition pane remains available.

### Qualified Resonance

Attaches the reusable signature to:

- actual house ruler;
- classical occupants.

Read order:

```text
house domain
→ actual Whole Sign
→ actual ruler + placement
→ primitive condition
→ relational condition
→ routing
```

### Relations

Displays each typed relation with rule ID, source, and Derivation Walker control.

### Qualified Flow

Visual layers remain distinguishable:

```text
solid gray   dispositor
cyan dashed  reception
gold dotted  exchange
red          overcoming
violet       domination
```

Node state remains categorical.

## 10. Compound condition — v0.4.3 target

Candidate compound techniques:

- bonification;
- maltreatment;
- enclosure;
- selected mitigation/counteraction;
- other source-locked compound testimonies adopted later.

Compound conditions must be pure consumers of already computed primitive and relational facts:

```text
astronomy
→ geometry
→ primitive condition
→ relational condition
→ compound condition
```

Because source traditions can diverge, each reconstruction must be named, versioned, and independently testable.

## 11. No scalar strength score

The canonical condition model must not emit one opaque planet-strength number.

Any future aggregation must be optional, decomposable, explicitly defined, versioned, sensitivity-tested, and research-exploratory unless independently validated.

## 12. Testing strategy

Primitive condition tests cover sign/table boundaries, exact bound cusps ± epsilon, sign normalization at 30°, day/night triplicity, Mercury sect-family variants, Whole-Sign angularity classes, canonical regressions, and one ledger entry per primitive factor.

Relational tests use explicit synthetic fixtures and require positive distinctions between reception, exchange, mutual-reception compatibility, overcoming, and domination. Every relation must have source, rule ID, inputs, result, dependencies, and derivation reference.

House River/Derivation Walker tests verify that relational proof can coexist with routing proof without inventing missing dependencies.

## 13. Current limitations

Not implemented:

- bonification/maltreatment synthesis;
- enclosure;
- selected compound mitigation/counteraction;
- degree-based quadrant dynamic strength;
- solar-phase conditions beyond current sect-family handling;
- condition-weighted graph research with validated nulls;
- complete legacy-ledger normalization into the v0.4.2 walker contract.

## 14. Exit criterion achieved for v0.4.2

A displayed reception/exchange/overcoming/domination relation exposes:

```text
relation type
rule ID
source/variant
inputs
result
proof reference
applicability
ledger dependencies
```

Synthetic fixtures verify those contracts before public promotion.

## 15. Next exit criterion — compound condition

A compound testimony should be promotable only when an expert can reconstruct it as a pure, source-locked function over already serialized primitive and relational records, without hidden recalculation or an opaque strength score.
