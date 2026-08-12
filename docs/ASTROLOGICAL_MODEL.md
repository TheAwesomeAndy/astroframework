# Noetic Atlas — Astrological Model Specification

## 1. Purpose

This document defines the astrological domain model currently implemented or explicitly planned in Noetic Atlas.

Noetic Atlas treats astrological traditions as **versioned rule systems** layered on top of astronomical data. It does not assume one tradition is universally correct and does not permit techniques from different traditions to be mixed silently.

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).
Relational release specification: [`V042_RELATIONAL_CONDITION.md`](V042_RELATIONAL_CONDITION.md).

Current deterministic/traditional baseline:

```text
Tropical zodiac
+ Whole Sign houses
+ traditional domicile rulers
+ major aspects under named orb policy
+ day/night sect
+ seven Paulus/Panaretus Hermetic lots
+ primitive classical condition
+ relational classical condition
```

Current downstream models additionally support modern/transpersonal outer-planet meanings, an explicitly modern natural-house correspondence overlay, House Resonance, House River routing, and proof traversal.

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

This map is used for house rulers, planetary dispositors, lot rulers, directed routing graphs, terminal-SCC discovery, domicile reception, and domicile exchange.

Uranus, Neptune, and Pluto do not replace Saturn/Jupiter/Mars under this rule set. A modern-rulership model must use a distinct identifier.

## 5. Dispositor graph

For each planet `p` in sign `s`:

```text
p → domicile_ruler(s)
```

Current graph derivations include SCCs/SCC condensation, terminal SCCs, terminal basin membership/fraction, route depth, upstream route capture, and largest nonterminal path bottleneck.

These are mathematical properties of the selected ruler model. They are not automatically traditional delineations or validated psychological measures.

Relational condition introduced in v0.4.2 **qualifies** this graph; it does not rewrite the dispositor edges.

## 6. Sect

With birth-data astronomy, sect is determined from geometric solar altitude:

```text
Sun altitude > 0° → day
Sun altitude < 0° → night
Sun altitude = 0° → horizon/indeterminate
```

Near-horizon sensitivity is retained rather than hidden. Sect changes deterministic rules including sect-reversing lots and primitive condition.

## 7. Major aspects

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

Admission depends on a named/versioned orb policy. Applying/separating is computed only when motion data exist; otherwise phase is `unknown`.

Relational condition uses **sign-based configuration** under its own named rules and does not infer doctrine merely from the display orb of an aspect edge.

## 8. Symbolic aspect mechanics

The interpretation layer may describe exact geometry with symbolic field-mechanics language:

```text
0°   conjunction → fusion / superposition
60°  sextile     → catalytic channel
90°  square      → quadrature torque / orthogonal interference
120° trine       → low-impedance phase coherence
180° opposition  → standing-wave polarity
```

This vocabulary is interpretive/phenomenological, not a measured physical energy model.

## 9. Hermetic lots

Current formula family: seven Paulus/Panaretus Hermetic lots.

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

Every lot retains formula family, sect, inputs, directed arc, result, Whole Sign house, ruler, and provenance. Variants are not silently merged.

## 10. Primitive planetary condition — implemented

Model:

```text
naf.condition.primitive.hellenistic.v0.4.0b
```

Applies to Sun through Saturn.

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

Uranus, Neptune, Pluto, lots, angles, nodes, and minor bodies do not inherit these Hellenistic rules unless a separately defined model explicitly says otherwise.

## 11. Relational condition — implemented v0.4.2

Model:

```text
naf.condition.relational.hellenistic.v0.4.2
```

Rule registry:

```text
naf.rules.relational_condition.hellenistic.v0.4.2
```

The current relation ontology keeps separate:

```text
G_reception
G_exchange
G_mutual_reception
G_overcoming
```

### Domicile reception

```text
naf.relation.reception.domicile_configured.hellenistic.v1
```

A classical host receives a classical guest when the guest occupies a domicile of the host and the pair is configured by sign through sextile, square, trine, or opposition.

Direction:

```text
host → guest
```

### Domicile exchange

```text
naf.relation.exchange.domicile.hellenistic.v1
```

Two classical planets exchange when each occupies a domicile of the other. Configuration is not required for the exchange fact itself.

### Mutual-reception compatibility label

```text
naf.relation.mutual_reception.domicile_configured.later_tradition.v1
```

A configured exchange with reciprocal domicile reception may also receive this separately identified later-tradition label. It does not replace Hellenistic `exchange`.

### Overcoming

```text
naf.relation.overcoming.right_hand.hellenistic.v1
```

For sign-based sextile, square, and trine, the right-hand/earlier planet is represented as superior to the left-hand/later planet.

### Domination / upon-the-tenth

```text
naf.relation.domination.tenth_sign.hellenistic.v1
```

A right-hand square is separately typed as domination.

Opposition remains a recognized reception configuration but v0.4.2 does not impose an arbitrary directional overcoming edge on oppositions.

Each relation carries rule ID, source, inputs, result, applicability, dependencies, ledger entry, and `derivation_ref`.

## 12. Condition system and signatures — implemented

Composition model:

```text
naf.condition.system.v0.4.2
```

Signature model:

```text
naf.condition.signature.v0.4.2
```

The signature carries categorical primitive + relational state across coordinated views. It may include dignity/adversity, sect, angularity, bound, triplicity, reception, exchange, mutual-reception compatibility, overcoming, and domination.

No traffic-light or scalar-strength compression is produced.

## 13. Compound condition — planned v0.4.3

Candidates include bonification, maltreatment, enclosure, selected mitigation/counteraction, and other source-locked compound testimonies.

Compound rules are pure functions over existing primitive + relational facts. They may not introduce hidden recalculation.

## 14. Higher-order aspect patterns — implemented subset

Current graph-analysis layer detects typed closed three-node patterns including:

```text
trine + trine + trine → Grand Trine
square + square + opposition → T-square
three conjunction edges → triple conjunction
```

Other typed triangles remain unnamed if they do not match an explicit template.

The word motif refers to typed subgraph detection. Statistical motif enrichment is not claimed until null distributions exist.

## 15. Modern/transpersonal interpretation — implemented

Uranus, Neptune, and Pluto participate through actual sign, Whole Sign house, aspects, graph context, and modern/transpersonal archetypal profiles.

```text
modern outer-planet interpretation = applicable
Hellenistic essential/relational condition = not_applicable
```

This preserves modern interpretive usefulness without falsifying historical rule applicability.

## 16. Natural-house overlay — implemented, secondary

Model:

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

## 17. House Resonance — implemented v0.4.1.3

Model:

```text
naf.interpretation.house_resonance.v0.4.1.3
```

Under Whole Sign houses:

```text
S_actual(h)  = A_ASC + (h-1) mod 12
S_natural(h) = h-1
Delta(h)     = A_ASC mod 12
```

So the optional natural-house sequence and actual Whole-Sign sequence differ by one chart-wide rotation.

v0.4.2 Qualified Resonance attaches actual-ruler and classical-occupant condition signatures while keeping the natural comparison secondary.

## 18. House River — implemented v0.4.2

Model:

```text
naf.research.house_river.v0.4.2
```

House River projects existing house-ruler routes into lived topical sources:

```text
house domain → ruler → dispositor route → terminal circuit
```

For a planetary dispositor edge `e`:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

Width is a routing count, not a condition/energy/fate score.

## 19. Derivation Walker — implemented infrastructure

Model:

```text
naf.integrity.derivation_walker.v0.4.2
```

Every v0.4.2 relation and House River band is born with a derivation reference. The walker traverses proof objects and leaves legacy dependencies explicit when not yet normalized.

## 20. Ceres — interpretation support, astronomy limitation

Ceres is recognized as `minor_body` when a coordinate is supplied. The current custom/modern profile emphasizes nourishment, harvest, enoughness, resourcing, receiving support, embodied pleasure, and conditions that allow life to grow.

The current birth-time astronomy adapter does **not** automatically calculate a validated Ceres coordinate. Unsupported coordinates are never invented.

## 21. Other extended objects

The current birth-time adapter does not automatically generate validated Chiron, true/mean node variants, Black Moon Lilith/apogee variants, Vertex, or fixed stars. Imported/precomputed values require explicit object definitions and provenance.

## 22. Jyotish — separate future model

Jyotish requires its own explicit sidereal zodiac/ayanamsha, graha set, nakshatra model, drishti, dignity/relationship logic, dashas, divisional charts, and bhava conventions.

Western tropical assumptions must not leak silently into the Jyotish model.

## 23. Temporal systems — planned

### Life Spectrum

Planned continuous temporal layer for transits, stations, aspect evolution, house/ruler activation, and long-window inspection.

### Annual profections

Planned deterministic activation of Whole Sign house and lord of year.

### Zodiacal releasing

Planned lot-based nested sign periods, peaks, Loosing of the Bond, and explicit period derivation.

No timing period should be generated by an LLM.

## 24. Model identifiers

A mature analysis should expose at least:

```text
zodiac_model
house_model
rulership_model
sect_model
lot_model
aspect_family
orb_policy
primitive_condition_model
relational_condition_model
relation_rule_registry
condition_signature_model
research_graph_model
house_river_model
interpretation_model
house_resonance_model
natural_house_overlay
derivation_model
```

## 25. Domain rule

> **Do not encode an interpretation where a calculation belongs, and do not encode a calculation without identifying the tradition/model that defines it.**

Noetic Atlas can compare astrological models only if their assumptions remain explicit and reversible.
