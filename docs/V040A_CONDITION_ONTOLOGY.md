# Noetic Atlas v0.4.0a — Condition Ontology Freeze

## Status

**Milestone:** v0.4.0a  
**Branch:** `noetic-atlas-v0.4`  
**Purpose:** freeze the condition ontology, rule registry, applicability model, degree conventions, and synthetic test contract **before** implementing dignity calculations.

This milestone intentionally performs no condition calculation. Its function is to prevent the engine from being shaped by ad hoc implementation choices or by the canonical specimen.

## Governing principle

> v0.4.0 is not “implement dignity.” It is “define a versioned condition ontology, then implement source-locked rule families inside it.”

The condition engine is an astrological-rule layer, not a physical measurement layer and not an empirical validation of astrology.

## New machine-readable contracts

### Rule registry

`data/rules/hellenistic/condition-v1.registry.json`

The registry freezes rule IDs, implementation readiness, historical/reconstruction sources, explicitly excluded variants, applicability by object class, dignity tables, Dorothean/standard triplicity rulers, Egyptian bounds, planetary sect families, Whole-Sign place angularity, and boundary conventions.

A rule cannot move to executable code unless its registry entry is `implementation_ready`.

### Condition record schema

`schemas/naf-condition-record-v0.4.0a.schema.json`

Every condition record reserves independent blocks for:

```text
identity
essential
sect
positional
relational
compound
completeness
ledger_refs
```

The compound block exists from the first schema even while compound techniques remain unimplemented:

```text
bonifications[]
maltreatments[]
enclosures[]
mitigations[]
```

This is intentional schema stability, not a claim that those techniques already exist.

### Synthetic fixture specification

`tests/fixtures/condition/v0.4.0a-fixture-spec.json`

The fixture set is declared before the engine so the code must satisfy pre-existing edge cases rather than being tuned after the fact. It covers dignity oppositions, triplicity sect changes, bound cusps, sign wrap, Mercury sect ambiguity, angularity classes, reserved relational cases, and compound placeholders.

## Source-lock decisions

The initial Hellenistic model uses Christopher Brennan's 2017 reconstruction/synthesis as the modern controlling reference while preserving the ancient witnesses he identifies.

### Triplicity

v1 uses the standard/Dorothean triplicity scheme associated primarily with Dorotheus and Valens.

Rule ID: `naf.condition.triplicity.standard_dorothean.v1`

Ptolemy's alternate triplicity table is not a switch inside this rule. It requires a separate future rule ID.

### Bounds

v1 uses the Egyptian bounds represented in Brennan Table 8.3.

Rule ID: `naf.condition.bounds.egyptian.v1`

Ptolemaic and Chaldean bounds are deliberately excluded.

#### Computational boundary convention

Historical degree ranges are normalized to half-open intervals:

```text
[start_deg, end_deg)
```

Example:

```text
Aries Jupiter  [0,6)
Aries Venus    [6,12)
```

Therefore exactly `6.000000° Aries` belongs to the Venus bound. An exact local degree of 30° is normalized to 0° of the following sign before lookup. No hidden epsilon is part of the rule definition.

### Sect

The data model distinguishes three facts:

```text
chart sect
planetary sect family
resulting in-sect / out-of-sect condition
```

Sun, Jupiter, and Saturn are diurnal. Moon, Venus, and Mars are nocturnal.

Mercury is explicitly variable. v1 source-locks the Ptolemy/Porphyry morning-star/evening-star rule:

```text
morning-star Mercury -> diurnal
evening-star Mercury -> nocturnal
unknown phase         -> indeterminate
```

Valens' alternate association rule is documented but not implemented under this ID.

### Angularity

v0.4.0b will initially implement Whole-Sign place classification only:

```text
angular   = 1, 4, 7, 10
succedent = 2, 5, 8, 11
cadent    = 3, 6, 9, 12
```

This is not equivalent to degree-based quadrant dynamic strength. Quadrant dynamic strength remains a separate, presently unimplemented condition factor and will require its own rule ID.

## Applicability by object class

The first rule bundle is deliberately restricted.

- **Classical planets:** Sun, Moon, Mercury, Venus, Mars, Jupiter, and Saturn receive the full condition ontology.
- **Outer planets:** Uranus, Neptune, and Pluto do not inherit Hellenistic essential dignity. A future modern/hybrid model can define independent rule IDs.
- **Lots:** derived points may have longitude, house, ruler, aspects, and timing activation, but do not silently receive planetary dignity.
- **Angles:** positional/geometric treatment only.
- **Nodes:** tradition-dependent; not inherited from the classical-planet model.

## Ledger granularity

There is no monolithic `condition` ledger entry.

Each factor must eventually create its own reversible entry:

```text
condition.Sun.domicile
condition.Sun.exaltation
condition.Sun.triplicity
condition.Sun.bound
condition.Sun.sect_family
condition.Sun.sect_condition
condition.Sun.angularity
```

Likewise, every reception and overcoming relation gets its own relation-level ledger entry.

## Functional-composition contract

Compound condition techniques may not independently recalculate primitive facts.

```text
astronomy
  ↓
placement geometry
  ↓
primitive condition
  ↓
relational condition
  ↓
compound condition
```

A future maltreatment function must consume already-versioned facts such as sect, reception, and overcoming. It must not contain a hidden second copy of those rules.

## Implementation readiness

### Ready for v0.4.0b

- domicile;
- adversity;
- sign-level exaltation;
- sign-level depression;
- standard/Dorothean triplicity;
- Egyptian bounds;
- planetary sect family;
- in-sect/out-of-sect condition;
- Whole-Sign place angularity.

### Source-locked but not yet executable

- domicile reception;
- domicile exchange;
- sign-based overcoming.

These require their own relational synthetic fixtures and final proof-shape decisions before code.

### Research required before implementation

- bonification;
- maltreatment;
- enclosure;
- mitigation families.

The surviving definitions contain reconstruction/variant issues. They must be decomposed into individually source-controlled pure rules first.

## v0.4.0a exit criteria

The milestone is complete when the registry parses with unique IDs; every implementation-ready rule has explicit source and variant policy; the schema reserves primitive, relational, and compound layers; non-planet applicability is explicit; Egyptian bounds cover each sign without gaps/overlap and reproduce the traditional total degree allocations; the synthetic fixture specification exists before implementation; CI executes the contract test; and no dignity calculation has been introduced prematurely.

## Next step

After v0.4.0a passes CI, proceed to **v0.4.0b — Primitive Condition Engine**.

The first executable code should consume the registry tables rather than re-encode their contents in conditional logic.
