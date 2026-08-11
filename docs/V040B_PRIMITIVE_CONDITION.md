# Noetic Atlas v0.4.0b — Primitive Condition Engine

## Status

**Implementation status:** testable prototype  
**Model ID:** `naf.condition.primitive.hellenistic.v0.4.0b`  
**Record schema:** `naf.condition.record.v0.4.0a`  
**Scope:** classical seven planets; primitive condition only

v0.4.0b is the first executable layer built on the v0.4.0a condition ontology. It does not compute a scalar planet-strength score and it does not yet implement reception, overcoming, bonification, maltreatment, enclosure, or degree-based quadrant dynamic strength.

## Implemented primitive factors

For each of Sun, Moon, Mercury, Venus, Mars, Jupiter, and Saturn, the engine calculates independent records for:

1. domicile;
2. adversity (opposite domicile);
3. sign-level exaltation;
4. sign-level depression/fall;
5. standard/Dorothean triplicity participation and active sect ruler;
6. Egyptian bound/term, using half-open intervals `[start,end)`;
7. planetary sect family;
8. in-sect / out-of-sect condition relative to chart sect;
9. Whole-Sign angular-triad class: angular, succedent, or declining.

Each factor creates its own derivation-ledger entry with rule ID, historical source reference, numerical/categorical inputs, result, dependencies, and condition-engine version.

## Historical source lock

The implementation follows the rule registry frozen in v0.4.0a and uses Christopher Brennan, *Hellenistic Astrology: The Study of Fate and Fortune* (2017) as the modern reconstruction/reference layer.

Primary locations used by this milestone:

- Chapter 7: sect and planetary sect membership;
- Chapter 8: domiciles, exaltations/depressions, triplicity rulership, Egyptian bounds;
- Table 8.1: Standard Triplicity Rulership Scheme;
- Table 8.3: Egyptian Bounds;
- Chapter 10: angular triads and the angular/succedent/declining place distinction.

Competing historical variants remain separate future rule IDs. Ptolemaic bounds are not silently mixed with Egyptian bounds. Alternative triplicity schemes are not silently substituted. Outer planets do not inherit Hellenistic essential-dignity logic.

## Sect decomposition

The engine preserves three different facts:

```text
chart sect
planetary sect family
resulting sect condition
```

For the six planets with fixed sect families:

```text
Diurnal:   Sun, Jupiter, Saturn
Nocturnal: Moon, Venus, Mars
```

Mercury uses the morning/evening-star rule selected in v0.4.0a. In this implementation, Mercury west/earlier in zodiacal longitude relative to the Sun is classified as morning-star/diurnal, while Mercury east/later is evening-star/nocturnal. Exact conjunction is returned as indeterminate rather than guessed.

This is a model convention under the selected reconstruction, not a physical measurement of planetary quality.

## Egyptian-bound interval convention

Historical integer-degree spans are represented computationally as half-open intervals:

```text
[start_deg, end_deg)
```

Therefore a six-degree first bound occupies `0 <= d < 6`, and exact `6.000...` belongs to the following bound. An exact sign boundary is normalized into the next sign before lookup.

The test suite verifies the full table has no gaps or overlaps and reproduces the traditional total allocations:

```text
Mercury 76°
Venus   82°
Mars    66°
Jupiter 79°
Saturn  57°
```

## Whole-Sign angularity

v0.4.0b implements only the angular-triad class:

```text
Angular:   1, 4, 7, 10
Succedent: 2, 5, 8, 11
Declining: 3, 6, 9, 12
```

This follows the early Whole-Sign angular-triad distinction. It must not be confused with later or parallel degree-based dynamic-strength measures around the exact ASC/MC/DSC/IC. Those require a separate rule implementation.

## Condition Inspector

The live v0.4.0b browser surface deliberately preserves the v0.3.2 graph-first Visual Observatory and adds a synchronized Condition dock.

The dock:

- follows a clicked classical planet in the Natal Field;
- allows direct selection of any classical planet;
- displays each primitive condition separately;
- displays triplicity roles and active sect ruler;
- shows exact Egyptian-bound interval/ruler;
- separates chart sect, planetary sect family, and sect condition;
- displays Whole-Sign angularity;
- exposes all nine factor-ledger entries, including source and rule IDs;
- marks relational and compound condition as not implemented.

The overlay architecture is intentional for this testing milestone: it lets the new condition model be evaluated without destabilizing the restored v0.3.2 graph interface. Native integration into the shared canonical analysis/visual state can follow after the condition substrate has been exercised.

## Canonical regression expectations

For `NAF-CANON-0001`, v0.4.0b checks include:

- Sun in Libra: depression present; night chart -> out of sect; 3H -> declining;
- Moon in Gemini: night chart -> in sect; 11H -> succedent;
- Mercury in Libra: Air night triplicity ruler; evening-star/nocturnal in the supplied geometry; Jupiter bound;
- Venus in Virgo: depression present; Venus bound; nocturnal/in sect; 2H succedent;
- Mars in Virgo: Venus bound; nocturnal/in sect; 2H succedent;
- Jupiter in Aquarius: Venus bound; diurnal/out of sect; 7H angular;
- Saturn in Scorpio: Saturn bound; diurnal/out of sect; 4H angular.

These are regression expectations inside the selected historical rule model. They are not validation of astrological interpretation.

## Test surface

`tests/primitive_condition_smoke.mjs` verifies:

- bound-table coverage, continuity, boundaries, and planet totals;
- exact bound cusp behavior;
- sign-boundary normalization;
- standard triplicity table examples;
- all 12 Whole-Sign angularity classes;
- Mercury morning/evening sect-family behavior;
- the canonical specimen condition record;
- one independent ledger entry per factor;
- explicit not-implemented relational/compound status.

The test is part of the standard `npm test` command.

## What v0.4.0b does not claim

It does not establish that domicile, triplicity, bounds, sect, or angularity correspond to measured physical energy or empirically validated psychological strength.

It establishes that, **given the selected historical astrological rule model**, these conditions can be calculated deterministically, represented independently, tested at boundaries, and audited.

## Next gate

The next condition movement is relational condition:

```text
reception
mutual reception / exchange
sign-based overcoming
```

Those relations should become separate graph layers rather than being collapsed into dispositor edges. Compound techniques such as bonification and maltreatment remain downstream pure functions over primitive and relational facts.
