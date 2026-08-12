# Noetic Atlas — Condition Engine Specification

## 1. Purpose

The condition layer answers a different question from geometry and topology:

```text
Where is the object?                  → geometry
How does rulership route?             → topology
What is the rule-defined state of it? → condition
```

Condition is a multidimensional ontology, not a scalar-strength engine.

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

## 2. Current status

Implemented:

```text
v0.4.0a  rule registry + condition schema + fixture contract
v0.4.0b  primitive condition engine + inspectable UI
```

Current executable model:

```text
naf.condition.primitive.hellenistic.v0.4.0b
```

Current schema:

```text
naf.condition.record.v0.4.0a
```

Current machine-readable registry:

```text
data/rules/hellenistic/condition-v1.registry.json
```

The current public v0.4.1.2/v0412c surface exposes primitive condition in a dedicated Condition pane and folds applicable condition qualifiers into energetic interpretation.

## 3. Applicability

Full primitive condition applies to:

```text
Sun Moon Mercury Venus Mars Jupiter Saturn
```

Outer planets, lots, angles, nodes, and minor bodies do not automatically inherit Hellenistic essential dignity.

Applicability is explicit. `not_applicable`, `not_implemented`, and `unsupported` are distinct states.

## 4. Primitive factors — implemented

### Domicile

Rule family: traditional/Hellenistic domicile rulership.

Result is independent and provenance-bearing.

### Adversity / opposite domicile

Represented separately from domicile. No point scoring is attached.

### Exaltation

Current v1 uses sign-level exaltation only.

### Depression / fall

Current v1 uses sign-level opposition to the selected exaltation scheme.

### Standard/Dorothean triplicity

Current rule family follows the source-locked standard/Dorothean table. It records participation and the active ruler under chart sect.

Alternative triplicity tables require separate IDs.

### Egyptian bounds/terms

Current rule uses Egyptian bounds with local sign degrees in `[0,30)` and half-open intervals:

```text
[start_deg, end_deg)
```

Exact boundaries belong to the following interval. Exact 30° normalizes to 0° of the next sign before lookup.

Ptolemaic/Chaldean variants are not silently mixed in.

### Planetary sect family

Fixed families:

```text
Diurnal: Sun, Jupiter, Saturn
Nocturnal: Moon, Venus, Mars
```

Mercury is variable under the selected morning/evening-star rule. Exact/unsupported phase can return `indeterminate`.

### In-sect / out-of-sect

Chart sect, planetary sect family, and resulting sect relation remain separate facts.

### Whole-Sign angular-triad class

```text
Angular:   1, 4, 7, 10
Succedent: 2, 5, 8, 11
Declining: 3, 6, 9, 12
```

This does not replace degree-based quadrant dynamic strength, which remains unimplemented.

## 5. Ledger granularity

There is no single opaque condition row.

Each factor receives its own record/ledger entry with:

- rule/model ID;
- tradition/source reference;
- applicability;
- inputs;
- intermediate/boundary values where needed;
- result;
- dependencies;
- engine version;
- completeness state.

This granularity is required so later compound rules can cite their ingredients rather than recomputing them invisibly.

## 6. Condition in the current UI

The current v0412c wrapper exposes a dedicated Condition pane for classical planets.

The energetic interpretation layer may also consume primitive condition and state it as a qualifier, for example:

```text
Mercury ↔ Venus terminal SCC     → graph-derived
Venus depression/fall in Virgo   → astrological-rule condition
3H ↔ 2H routed house circuit     → downstream interpretation context
```

These are not collapsed into one “dominance” number.

## 7. Next milestone — v0.4.2 Relational Condition

The earlier v0.4 planning documents used provisional numbering such as v0.4.0c. The implemented roadmap evolved: v0.4.1 became Graph Analytics, v0.4.1.1 restored outer-planet interpretation, and v0.4.1.2 introduced Energetic Whole-Chart Synthesis.

The **current** next condition milestone is therefore:

```text
v0.4.2  Relational Condition
```

Planned relation families:

```text
G_reception
G_exchange / mutual reception variant
G_overcoming
```

### Reception

Reception is directed and tradition-sensitive. Required fields should include:

- receiver;
- received planet;
- dignity/configuration basis;
- selected historical variant;
- phase/configuration metadata where applicable;
- rule/source IDs;
- proof;
- ledger references.

Hellenistic reception must not be silently equated with later Medieval mutual-reception definitions.

### Exchange / mutual reception

Exchange is represented as its own relation or compound of directed receptions according to the selected source model. Variant definitions require separate rule IDs.

### Overcoming

Overcoming is directional superior/inferior sign-based geometry under an explicit traditional model. It must not be inferred from a generic undirected square edge alone.

## 8. Compound condition — v0.4.3 target

Candidate compound techniques:

- bonification;
- maltreatment;
- enclosure;
- selected mitigation;
- other source-locked compound testimonies adopted later.

Compound conditions are pure consumers of already computed primitive and relational facts:

```text
astronomy
→ geometry
→ primitive condition
→ relational condition
→ compound condition
```

Because surviving source traditions can diverge, each reconstruction must be named and versioned.

## 9. No scalar strength score

The canonical condition model must not emit one opaque planet-strength number.

Any future aggregation must be:

- optional;
- decomposable;
- explicitly defined;
- versioned;
- sensitivity-tested;
- research-exploratory unless independently validated.

## 10. Testing strategy

Primitive condition tests must cover:

- all sign and table boundaries;
- exact bound cusps ± epsilon;
- sign normalization at 30°;
- day/night triplicity behavior;
- fixed and Mercury-variable sect cases;
- all Whole-Sign angularity classes;
- canonical regression expectations;
- one ledger entry per primitive factor;
- explicit not-implemented relational/compound states.

Relational condition must add synthetic fixtures **before** promotion, including positive/negative/boundary cases for every selected variant.

## 11. Current limitations

Not implemented:

- reception/exchange;
- overcoming;
- bonification/maltreatment;
- enclosure;
- selected mitigation;
- degree-based quadrant dynamic strength;
- solar-phase conditions beyond current sect-family handling;
- condition-weighted graph research with validated nulls.

## 12. Exit criterion for relational condition

A competent traditional astrologer should be able to select any displayed reception/exchange/overcoming relation and reconstruct it from:

```text
rule ID
source/variant
inputs
geometry
proof
applicability
ledger dependencies
```

Only then should compound condition and condition-sensitive timing depend on it.
