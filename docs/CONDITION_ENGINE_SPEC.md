# Noetic Atlas v0.4 — Astrological Condition Engine Specification

## Purpose

v0.4 adds the condition layer deliberately omitted from v0.3.

v0.3 answers:

```text
Where is the object?
How is it geometrically related?
Where do ruler/dispositor paths route?
```

v0.4 adds:

```text
Under a named, source-controlled traditional rule model,
what is the condition of the planet and of its relevant relationships?
```

The engine is **not** a scalar-strength engine. It emits structured, independently auditable condition facts.

## Development sequence

```text
v0.4.0a  rule registry + condition schema + synthetic fixture specification
v0.4.0b  primitive condition engine + minimal Condition Inspector
v0.4.0c  relational primitives: reception / exchange / overcoming
v0.4.1   deeper integration into Natal Field / Flow Map / house routes
v0.4.2   compound condition techniques
v0.4.3   condition-aware topology experiments (research only)
```

No Life Spectrum weighting and no new condition-derived research metric should precede a stable condition substrate.

## v0.4.0a — ontology freeze

The machine-readable source of truth is `data/rules/hellenistic/condition-v1.registry.json`. The schema contract is `schemas/naf-condition-record-v0.4.0a.schema.json`. The pre-implementation fixture contract is `tests/fixtures/condition/v0.4.0a-fixture-spec.json`.

See `V040A_CONDITION_ONTOLOGY.md`.

### Source-control principle

Every rule must state its rule ID, modern controlling reconstruction/reference, ancient witnesses where known, implementation status, input/output contract, boundary convention where relevant, and major variants deliberately excluded.

Historical disagreement becomes separate versioned rule models, never a hidden option or silent blend.

## ConditionRecord ontology

A classical planet receives independent `identity`, `essential`, `sect`, `positional`, `relational`, `compound`, `completeness`, and `ledger_refs` blocks. The empty compound slots are reserved from the first schema so later techniques do not require a breaking redesign.

## Applicability

The v1 bundle applies fully to Sun, Moon, Mercury, Venus, Mars, Jupiter, and Saturn. Uranus, Neptune, and Pluto do not inherit Hellenistic essential dignity. Lots remain derived points; angles remain positional/geometric points; node condition remains tradition-dependent.

## Primitive condition rules — v0.4.0b

### Domicile and adversity

Rules: `naf.condition.domicile.hellenistic.v1` and `naf.condition.adversity.hellenistic.v1`.

The registry stores the tables directly. No point scoring is attached.

### Exaltation and depression

Rules: `naf.condition.exaltation.sign.hellenistic.v1` and `naf.condition.depression.sign.hellenistic.v1`.

v1 is sign-level only. Degree-specific exaltation doctrines require separate IDs.

### Standard/Dorothean triplicity

Rule: `naf.condition.triplicity.standard_dorothean.v1`.

Source anchor: Brennan Table 8.1; Dorotheus `Carmen Astrologicum` 1.1:2-4; Valens `Anthology` 2.1. Ptolemy's alternate table is explicitly excluded.

### Egyptian bounds

Rule: `naf.condition.bounds.egyptian.v1`.

Source anchor: Brennan Table 8.3; Dorotheus' verse table via Hephaestio; Valens as an additional witness.

Local sign degrees use `[0,30)`. Bounds are half-open `[start,end)`. An exact boundary belongs to the following interval; exact 30° normalizes to 0° of the next sign. Ptolemaic and Chaldean bounds are not implemented under this ID.

### Sect decomposition

Sect is three separate facts: chart sect, planetary sect family, and sect condition.

Rules: `naf.condition.sect.planet_family.ptolemy_porphyry.v1` and `naf.condition.sect.in_or_out.v1`.

Fixed families: diurnal = Sun/Jupiter/Saturn; nocturnal = Moon/Venus/Mars. Mercury is variable. v1 follows the Ptolemy/Porphyry morning/evening-star rule; unknown phase yields `indeterminate`. Valens' alternate association rule remains a separate future variant.

### Whole-Sign place angularity

Rule: `naf.condition.angularity.whole_sign_place.v1`.

```text
angular   = 1, 4, 7, 10
succedent = 2, 5, 8, 11
cadent    = 3, 6, 9, 12
```

This does not replace degree-based quadrant dynamic strength. The schema reserves `quadrant_dynamic_strength`, initially `not_implemented`.

## Relational condition — v0.4.0c

Relational condition is represented as separate graph layers rather than attributes hidden inside dispositor edges.

```text
G = {
  G_aspect,
  G_dispositor,
  G_reception,
  G_overcoming,
  G_house,
  G_lot
}
```

Planned rules are `naf.condition.reception.domicile.hellenistic.v1`, `naf.condition.exchange.domicile.hellenistic.v1`, and `naf.condition.overcoming.sign_based.v1`.

Reception is directed and preserves receiver, received planet, dignity/configuration basis, phase metadata when available, source IDs, and proof. Hellenistic exchange remains separate from later Medieval mutual-reception definitions. Overcoming remains directional sign-based superior/inferior geometry.

## Compound condition — v0.4.2

Compound conditions may include bonification, maltreatment, enclosure, mitigation, and later selected forms such as adherence, striking with a ray, counteraction, and engagement if adopted.

These rules must be pure consumers of already-computed primitive and relational facts:

```text
astronomy
  ↓
geometry
  ↓
primitive condition
  ↓
relational condition
  ↓
compound condition
```

Brennan's Chapter 14 explicitly presents a reconstruction from divergent Antiochus-derived materials. Compound rules therefore remain `research_required` until each technique is separately formalized.

## Ledger granularity

There is no opaque condition ledger row. Domicile, exaltation, triplicity, bound, sect family, sect condition, angularity, each reception, each exchange, and each overcoming relation receive independent ledger entries. Compound testimonies cite those entries as dependencies.

## Minimal Condition Inspector — required in v0.4.0b

v0.4.0b is not complete if condition data exist only in JSON. Clicking a classical planet must expose a plain inspectable panel showing essential factors, sect decomposition, positional classification, relational arrays, compound placeholders, rule IDs/source references, and direct derivation links. The first inspector optimizes validation rather than aesthetics.

## Synthetic test strategy

The synthetic fixture specification is written before calculation code. It includes dignity oppositions, day/night triplicity, every Egyptian-bound boundary family, exact 30° normalization, fixed and Mercury-variable sect cases, place angularity, and reserved relational/compound cases.

For every degree table, tests must include just below, exact boundary, and just above. The canonical specimen remains regression evidence only.

## No scalar strength score

The canonical model must not emit a single planet-strength number. Any future aggregation must remain optional, decomposable, explicit, versioned, and exploratory unless independently validated.

## Exit criteria

**v0.4.0a:** registry, schema, fixture specification, and contract tests pass with no executable dignity engine.

**v0.4.0b:** every classical planet receives auditable primitive condition facts and the prototype exposes them through the Condition Inspector.

**v0.4.0c:** reception, exchange, and overcoming have independent source-locked relation objects and synthetic tests.

**v0.4 overall:** a competent traditional astrologer can select any classical planet and independently reconstruct every displayed condition claim from rule IDs, sources, inputs, proof, and ledger dependencies. Only after that should natal condition become a substrate for Life Spectrum.
