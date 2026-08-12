# Noetic Atlas — Astrological Model Specification

## 1. Purpose

This document defines the astrological domain model currently implemented or explicitly planned in Noetic Atlas.

Noetic Atlas treats astrological traditions as **versioned rule systems** layered on top of astronomical data. It does not assume one tradition is universally correct and does not permit techniques from different traditions to be mixed silently.

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

Current deterministic baseline:

```text
Tropical zodiac
+ Whole Sign houses
+ traditional domicile rulers
+ major aspects under named orb policy
+ day/night sect
+ seven Paulus/Panaretus Hermetic lots
+ primitive classical condition
```

Current interpretation layer additionally supports modern/transpersonal outer-planet meanings and an explicitly modern natural-house correspondence overlay.

## 2. Coordinates and zodiac

Current baseline:

```text
Tropical zodiac
0° Aries = 0° absolute longitude
0 <= λ < 360
```

Sign index:

```text
Aries 0, Taurus 1, Gemini 2, Cancer 3,
Leo 4, Virgo 5, Libra 6, Scorpio 7,
Sagittarius 8, Capricorn 9, Aquarius 10, Pisces 11
```

Conversion:

```text
λ = 30 * sign_index + degree_within_sign
```

All calculations use full available numerical precision. Formatted sign-degree strings are display values.

## 3. Whole Sign houses

The Ascendant sign defines the first house.

```text
house = ((object_sign_index - asc_sign_index + 12) mod 12) + 1
```

The MC remains an angle with its own longitude and is assigned to the Whole Sign house containing its sign. It does not redefine the 10th house.

Imported house labels may be retained for comparison but are not treated as upstream truth when the current model can recompute Whole Sign placement.

## 4. Traditional domicile rulership

Current ruler map:

| Sign | Ruler |
|---|---|
| Aries | Mars |
| Taurus | Venus |
| Gemini | Mercury |
| Cancer | Moon |
| Leo | Sun |
| Virgo | Mercury |
| Libra | Venus |
| Scorpio | Mars |
| Sagittarius | Jupiter |
| Capricorn | Saturn |
| Aquarius | Saturn |
| Pisces | Jupiter |

This map is used for house rulers, planetary dispositors, lot rulers, directed routing graphs, and terminal-SCC discovery.

Uranus, Neptune, and Pluto do not replace Saturn/Jupiter/Mars under this rule set. A modern-rulership model must use a distinct identifier.

## 5. Dispositor graph

For each planet `p` in sign `s`:

```text
p → domicile_ruler(s)
```

This creates directed graph `G_R=(V,E_R)`.

Current graph derivations include:

- SCCs and SCC condensation;
- terminal SCCs;
- terminal basin membership/fraction;
- route depth;
- upstream route capture;
- largest nonterminal path bottleneck.

These are mathematical properties of the selected ruler model. They are not automatically traditional delineations or validated psychological measures.

## 6. Sect

With birth-data astronomy, sect is determined from geometric solar altitude:

```text
Sun altitude > 0° → day
Sun altitude < 0° → night
Sun altitude = 0° → horizon/indeterminate
```

Near-horizon sensitivity is retained rather than hidden.

If only imported chart geometry exists, a fallback may be used where possible and must be labeled as such.

Sect changes deterministic rules, including sect-reversing lots and primitive condition.

## 7. Major aspects

Current major family:

| Aspect | Exact angle |
|---|---:|
| Conjunction | 0° |
| Sextile | 60° |
| Square | 90° |
| Trine | 120° |
| Opposition | 180° |

For two longitudes `a,b`:

```text
δ = min(|a-b|, 360-|a-b|)
orb = |δ - exact_angle|
```

Admission depends on a named/versioned orb policy.

Applying/separating is computed only when motion data exist. Otherwise phase is `unknown`.

## 8. Symbolic aspect mechanics

The interpretation layer may describe exact geometry with symbolic field-mechanics language:

```text
0°   conjunction → fusion / superposition
60°  sextile     → catalytic channel
90°  square      → quadrature torque / orthogonal interference
120° trine       → low-impedance phase coherence
180° opposition  → standing-wave polarity
```

This vocabulary is interpretive/phenomenological. It is not a measured physical energy model.

## 9. Hermetic lots

Current formula family: seven Paulus/Panaretus Hermetic lots.

Directed zodiacal arc:

```text
directed_arc(A → B) = (B - A + 360) mod 360
Lot = normalize360(ASC + directed_arc(source → target))
```

| Lot | Day | Night |
|---|---|---|
| Fortune | Sun → Moon | Moon → Sun |
| Spirit | Moon → Sun | Sun → Moon |
| Eros | Spirit → Venus | Venus → Spirit |
| Necessity | Mercury → Fortune | Fortune → Mercury |
| Courage | Mars → Fortune | Fortune → Mars |
| Victory | Spirit → Jupiter | Jupiter → Spirit |
| Nemesis | Saturn → Fortune | Fortune → Saturn |

Every lot retains formula family, sect, inputs, directed arc, result, Whole Sign house, ruler, and provenance.

Variants are not silently merged.

## 10. Primitive planetary condition — implemented

Current model:

```text
naf.condition.primitive.hellenistic.v0.4.0b
```

Applies to Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn.

Independent factors:

- domicile;
- adversity/opposite domicile;
- sign-level exaltation;
- sign-level depression/fall;
- standard/Dorothean triplicity participation and active sect ruler;
- Egyptian bound/term using `[start,end)` intervals;
- planetary sect family;
- in-sect/out-of-sect relation;
- Whole-Sign angular-triad class.

No scalar planet-strength score is produced.

Uranus, Neptune, Pluto, lots, angles, nodes, and minor bodies do not inherit these Hellenistic essential-dignity rules unless a separately defined model explicitly says otherwise.

## 11. Relational condition — next

Planned v0.4.2 relation layers:

```text
G_reception
G_exchange / mutual reception variant
G_overcoming
```

Reception definitions are tradition-sensitive. Hellenistic and later Medieval definitions must remain distinct rule variants.

Overcoming is directional superior/inferior geometry under a named source model.

Every relation requires its own rule ID, proof, applicability, and ledger entry.

## 12. Compound condition — planned

After relational facts stabilize, candidate compound techniques include:

- bonification;
- maltreatment;
- enclosure;
- selected mitigation;
- other source-locked compound testimonies.

Compound rules are pure functions over existing primitive + relational facts. They may not introduce hidden extra calculations.

## 13. Higher-order aspect patterns — implemented subset

Current graph-analysis layer detects typed closed three-node patterns including:

```text
trine + trine + trine → Grand Trine
square + square + opposition → T-square
three conjunction edges → triple conjunction
```

Other typed triangles remain unnamed if they do not match an explicit template.

The word motif refers to typed subgraph detection. Statistical motif enrichment is not claimed until null distributions exist.

## 14. Modern/transpersonal interpretation — implemented

Uranus, Neptune, and Pluto participate in the current interpretation layer through actual sign, Whole Sign house, aspects, graph context, and modern/transpersonal archetypal profiles.

Important applicability distinction:

```text
modern outer-planet interpretation = applicable
Hellenistic essential dignity = not_applicable
```

This preserves modern interpretive usefulness without falsifying historical rule applicability.

## 15. Natural-house overlay — implemented, secondary

Current optional model:

```text
naf.interpretation.natural_house_overlay.modern.v1
```

Correspondence:

```text
1H Aries/Mars
2H Taurus/Venus
3H Gemini/Mercury
4H Cancer/Moon
5H Leo/Sun
6H Virgo/Mercury
7H Libra/Venus
8H Scorpio/Mars (+ Pluto modern)
9H Sagittarius/Jupiter
10H Capricorn/Saturn
11H Aquarius/Saturn (+ Uranus modern)
12H Pisces/Jupiter (+ Neptune modern)
```

This overlay never replaces the actual sign on the actual Whole Sign house and is not presented as universal Hellenistic doctrine.

## 16. Ceres — interpretation support, astronomy limitation

Ceres is recognized as `minor_body` when a coordinate is supplied.

Current custom/modern profile emphasizes nourishment, harvest, enoughness, resourcing, receiving support, embodied pleasure, and conditions that allow life to grow.

The current birth-time astronomy adapter does **not** automatically calculate a validated Ceres coordinate. Unsupported coordinates are never invented.

## 17. Other extended objects

The current birth-time adapter also does not automatically generate validated:

- Chiron;
- true/mean node variants;
- Black Moon Lilith/apogee variants;
- Vertex;
- fixed stars.

Imported/precomputed values require explicit object definitions and provenance.

## 18. Jyotish — separate future model

Jyotish must be implemented as a separate rule system requiring explicit sidereal zodiac/ayanamsha, graha set, nakshatra model, drishti, dignity/relationship logic, dashas, divisional charts, and bhava conventions.

Western tropical assumptions must not leak silently into the Jyotish model.

## 19. Temporal systems — planned

### Life Spectrum

Planned continuous temporal layer for transits, stations, aspect evolution, house/ruler activation, and long-window inspection.

### Annual profections

Planned deterministic activation of Whole Sign house and lord of year.

### Zodiacal releasing

Planned lot-based nested sign periods, peaks, Loosing of the Bond, and explicit period derivation.

No timing period should be generated by an LLM.

## 20. Model identifiers

A mature analysis should expose at least:

```text
zodiac_model
house_model
rulership_model
sect_model
lot_model
aspect_family
orb_policy
condition_model
research_graph_model
interpretation_model
natural_house_overlay
```

## 21. Domain rule

> **Do not encode an interpretation where a calculation belongs, and do not encode a calculation without identifying the tradition/model that defines it.**

Noetic Atlas can compare astrological models only if their assumptions remain explicit.
