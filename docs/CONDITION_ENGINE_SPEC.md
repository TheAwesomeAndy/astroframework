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
Relational release record: [`V042_RELATIONAL_CONDITION.md`](V042_RELATIONAL_CONDITION.md).  
Compound release record: [`V043_COMPOUND_CONDITION.md`](V043_COMPOUND_CONDITION.md).

## 2. Current status

Implemented:

```text
v0.4.0a  primitive registry + schema + fixture contract
v0.4.0b  primitive condition engine
v0.4.2   relational condition + reusable signatures
v0.4.3   source-secure compound condition subset
```

Current models:

```text
naf.condition.primitive.hellenistic.v0.4.0b
naf.condition.relational.hellenistic.v0.4.2
naf.condition.compound.hellenistic.v0.4.3
naf.condition.signature.v0.4.2
naf.condition.system.v0.4.3
```

Current registries:

```text
data/rules/hellenistic/condition-v1.registry.json
data/rules/hellenistic/relational-condition-v1.registry.json
data/rules/hellenistic/compound-condition-v1.registry.json
```

Primitive schema:

```text
naf.condition.record.v0.4.0a
```

## 3. Applicability

Primitive, relational, and current compound condition apply to:

```text
Sun Moon Mercury Venus Mars Jupiter Saturn
```

Outer planets, lots, angles, nodes, and minor bodies do not automatically inherit Hellenistic condition rules.

Applicability states remain explicit. `not_applicable`, `not_implemented`, `unsupported`, `indeterminate`, and `deferred_source_ambiguity` are distinct.

## 4. Primitive factors — implemented

For each classical planet the engine independently computes:

- domicile;
- adversity/opposite domicile;
- sign-level exaltation;
- sign-level depression/fall;
- standard/Dorothean triplicity participation and active sect ruler;
- Egyptian bound/term using `[start,end)` intervals;
- planetary sect family;
- in-sect/out-of-sect relation;
- Whole-Sign angular-triad class.

Degree-based quadrant dynamic strength remains separate and unimplemented.

## 5. Relational condition — implemented in v0.4.2

Relational model:

```text
naf.condition.relational.hellenistic.v0.4.2
```

Conceptual relation family:

```text
G_R = {
  G_dispositor,
  G_reception,
  G_exchange,
  G_mutual_reception,
  G_overcoming
}
```

Dispositorship remains owned by the deterministic kernel. The relational engine qualifies rather than recalculates it.

### Reception

Configured domicile reception; host → guest. The guest occupies a host domicile and the pair is configured by sign through sextile, square, trine, or opposition.

### Exchange

Two classical planets occupy one another's domiciles. Configuration is not required for the exchange fact itself.

### Later-tradition mutual-reception compatibility

Configured reciprocal reception/exchange receives a separate compatibility label. It never replaces the Hellenistic `exchange` object.

### Overcoming

Right-hand/earlier planet is represented as superior through sign-based sextile, square, and trine.

### Domination

Right-hand square / upon-the-tenth is separately typed as the stronger square form.

## 6. Compound condition — implemented in v0.4.3

Compound model:

```text
naf.condition.compound.hellenistic.v0.4.3
```

Registry:

```text
naf.rules.compound_condition.hellenistic.v0.4.3
```

Compound rules are pure consumers of deterministic coordinates plus already-computed primitive and relational state.

### Implemented bonification testimonies

- benefic superior trine/square;
- benefic sign-based trine testimony;
- benefic ray enclosure under the selected seven-degree enclosure rule.

### Implemented maltreatment testimonies

- malefic superior square/domination;
- malefic sign-based opposition testimony;
- malefic ray enclosure under the selected seven-degree enclosure rule.

### Intervention

An otherwise valid enclosure can be broken by an intervening planet/body or ray under the selected source reconstruction. The engine records the intervention rather than silently deleting the failed enclosure logic.

### Sect qualification

Sect qualifies the acting benefic/malefic categorically. It does not generate a numeric multiplier or planet-strength score.

### Reception qualification

When reception exists within the acting/target pair, the compound testimony records the relevant mitigation/enhancement qualifier. Reception does not erase the underlying testimony or rewrite the relation.

### Mixed condition

A planet may simultaneously receive bonification and maltreatment. The system preserves both. Per-planet categorical summary may be:

```text
none
bonification_present
maltreatment_present
mixed
```

These categories indicate coexistence, not arithmetic averaging.

## 7. Explicit deferred boundary

The current source-secure implementation deliberately does not guess ambiguous or not-yet-frozen variants. Deferred areas include:

- unresolved bodily/sign-containment enclosure variants;
- selected counteraction details;
- adherence;
- engagement;
- striking-with-a-ray;
- other compound testimonies requiring stronger reconstruction/source lock.

Deferred states are serialized as such rather than omitted deceptively.

## 8. Condition-system composition

Composition module:

```text
src/conditions/condition-system.mjs
```

Current model:

```text
naf.condition.system.v0.4.3
```

Composition remains layered:

```text
primitive condition
+
relational condition
+
compound condition
+
condition signature projection
```

No hidden flattening occurs.

## 9. Reusable Condition Signature

Model:

```text
naf.condition.signature.v0.4.2
```

The reusable signature remains a categorical state strip carrying primitive and relational state across views. Compound testimonies are separate evidence objects and may be projected beside the signature without being reduced to one score.

## 10. Ledger and derivation granularity

Primitive factors, relational objects, and compound testimonies retain:

- rule/model ID;
- tradition/source reference;
- applicability;
- inputs;
- result;
- dependencies;
- engine version;
- completeness state;
- `derivation_ref` where introduced by the relational/compound layers.

Compound proof infrastructure is created at object birth rather than retrofitted.

## 11. Derivation Walker

Current model:

```text
naf.integrity.derivation_walker.v0.4.3
```

The walker indexes:

```text
analysis derivation ledger
primitive-condition ledger
relational-condition ledger
compound-condition ledger
House River derivations
```

A compound testimony can therefore walk backward through its rule/source, acting planet, target, relation/geometry dependencies, sect/reception qualifiers, and existing coordinate proof where indexed.

## 12. Public UI

v0.4.3 adds:

```text
Existing Atlas
Compound Condition
Compound Map
Proof Walker
Source Boundary
```

The complete v0.4.2 interface remains embedded beneath it. v0.4.3 does not calculate astronomy, houses, aspects, lots, or topology independently.

## 13. No scalar strength score

The canonical condition system does not emit one opaque strength number.

Any future aggregation would have to be optional, decomposable, explicitly defined, versioned, sensitivity-tested, and research-exploratory unless independently validated.

## 14. Testing strategy

Primitive tests cover sign/table boundaries, bound cusps ± epsilon, 30° normalization, day/night triplicity, Mercury sect-family variants, Whole-Sign angularity classes, canonical regressions, and independent ledger entries.

Relational tests require positive distinctions between reception, exchange, mutual-reception compatibility, overcoming, and domination with source/rule/proof identity.

Compound tests cover:

- bonification;
- maltreatment;
- sect qualification;
- reception mitigation/enhancement;
- mixed testimony preservation;
- benefic enclosure;
- malefic enclosure;
- intervention breaking enclosure;
- derivation traversal into relational dependencies;
- explicit deferred-source states.

All preserved UI contracts remain in the standard suite.

## 15. Current limitations

Still unimplemented or intentionally deferred:

- deferred compound variants listed above;
- degree-based quadrant dynamic strength;
- broader solar-phase condition beyond current sect-family handling;
- validated condition-weighted graph research;
- complete normalization of every legacy proof object into the walker contract.

## 16. Exit criterion achieved for v0.4.3

A displayed compound testimony exposes:

```text
testimony type
rule ID
source / variant
agent
recipient / target
mechanism
sect qualifier where relevant
reception qualifier where relevant
inputs
result
dependencies
derivation reference
applicability / deferred state
```

A competent traditional astrologer should be able to reconstruct the current source-secure subset without hidden recalculation or an opaque strength score.
