# Noetic Atlas — Astrological Model Specification

## 1. Purpose

This document defines the astrological domain model currently implemented or explicitly planned in Noetic Atlas. It is written for software engineers, astrologers, and researchers who need to understand exactly which astrological assumptions are encoded in the framework.

Noetic Atlas treats astrological traditions as **versioned rule systems** layered on top of astronomical data.

The framework does not assume that one tradition is universally correct. It also does not permit techniques from different traditions to be mixed silently.

The current deterministic baseline is primarily:

```text
Tropical zodiac
+ Whole Sign houses/places
+ traditional domicile rulers
+ day/night sect
+ major aspects under explicit orb policy
+ Paulus/Panaretus family of seven Hermetic lots
```

Modern outer planets may be present as astronomical/chart objects while traditional sign rulership remains classical unless a different rule set is deliberately selected.

---

## 2. Coordinate conventions

### Zodiac

Current baseline:

```text
Tropical zodiac
0° Aries = 0° absolute longitude
```

Absolute longitude is normalized to:

```text
0 <= λ < 360
```

Sign index:

```text
Aries       0
Taurus      1
Gemini      2
Cancer      3
Leo         4
Virgo       5
Libra       6
Scorpio     7
Sagittarius 8
Capricorn   9
Aquarius   10
Pisces     11
```

Conversion from sign position to absolute longitude:

```text
λ = 30 * sign_index + degree_within_sign
```

All calculations use full available numerical precision. Human-readable degree/minute strings are display values.

---

## 3. Whole Sign houses

The Ascendant sign defines the first house/place.

If `s` is the object sign index and `a` is the Ascendant sign index:

```text
house = ((s - a + 12) mod 12) + 1
```

Example with Leo rising:

```text
Leo        → 1H
Virgo      → 2H
Libra      → 3H
Scorpio    → 4H
Sagittarius→ 5H
Capricorn  → 6H
Aquarius   → 7H
Pisces     → 8H
Aries      → 9H
Taurus     → 10H
Gemini     → 11H
Cancer     → 12H
```

The MC is stored as an angle with its own longitude and also assigned to the whole-sign house containing its sign. NAF does not force the MC to define the 10th house in the whole-sign model.

Imported house labels are not automatically trusted. They can be retained and compared with the computed whole-sign place.

---

## 4. Traditional domicile rulership

Current traditional ruler map:

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

This map is used for:

- house rulers;
- planetary dispositors;
- lot rulers;
- directed routing graphs;
- terminal SCC discovery.

Uranus, Neptune, and Pluto do not replace Saturn, Jupiter, or Mars as sign rulers in this rule set.

A future modern-rulership rule set must use a different versioned identifier.

---

## 5. Dispositor graph

For each planet `p` occupying sign `s`:

```text
p → domicile_ruler(s)
```

This creates a directed graph:

```text
G_R = (V, E_R)
```

where `V` is the set of included planets and `E_R` is the set of dispositor edges.

From this graph NAF may compute:

- strongly connected components;
- terminal SCCs;
- route length;
- dependency depth;
- convergence;
- cycles;
- later centrality measures.

These are mathematical properties of the selected rulership model.

They are not automatically traditional delineations.

---

## 6. Sect

### Principle

The baseline Hellenistic model distinguishes day and night charts according to the Sun's relationship to the local horizon.

With birth-data astronomy available, NAF uses geometric solar altitude:

```text
Sun altitude > 0° → day
Sun altitude < 0° → night
Sun altitude = 0° → horizon/indeterminate
```

A configurable near-horizon warning band is retained because twilight/horizon cases are methodologically sensitive.

### Fallback

If the chart is imported without raw birth geometry, NAF may infer sect from chart geometry using Sun and horizon-related information where possible.

The result must state that the method is a fallback rather than fresh observer-geometry computation.

### Why sect matters

Sect is not only an interpretive label. It changes deterministic calculations, especially sect-reversing lots.

Therefore a lot must never be calculated before the sect rule used for that calculation is known and recorded.

---

## 7. Major aspects

Current major aspect family:

| Aspect | Exact angle |
|---|---:|
| Conjunction | 0° |
| Sextile | 60° |
| Square | 90° |
| Trine | 120° |
| Opposition | 180° |

For two longitudes `a` and `b`:

```text
raw difference = |a - b|
separation δ = min(raw difference, 360 - raw difference)
```

For exact aspect angle `α`:

```text
orb = |δ - α|
```

An aspect exists only when the active orb policy accepts the result.

### Orb policy

Orb values are not universal constants in NAF.

They belong to a named/versioned policy, for example:

```text
naf.orbs.research.v1
```

The UI must be capable of showing which policy admitted an edge.

Different historical or modern rule sets may produce different aspect graphs from identical longitudes.

### Applying/separating

Applying/separating requires motion data.

If velocities are available, the kernel evaluates whether the distance from exact perfection is decreasing or increasing over a small time step.

If velocities are absent:

```text
phase = unknown
```

NAF does not infer phase from position alone when the necessary motion data are not available.

---

## 8. Aspect geometry as symbolic field mechanics

Noetic Atlas may expose aspects using a field-mechanics vocabulary for visualization and systems thinking.

The current conceptual mapping is:

### Opposition — 180°

A single-axis standing-wave geometry / complementary polarity.

### Trine — 120°

Phase coherence within a shared elemental medium.

### Sextile — 60°

Catalytic cooperation across complementary elemental polarities.

### Square — 90°

Quadrature / orthogonal interference creating structural tension and potential transition.

### 30° / 150° families

Phase disjunction and elemental non-resonance, when these aspect families are later enabled.

This language belongs to the symbolic visualization model unless independently validated as literal physical dynamics.

It must not be converted into physical units without evidence.

---

## 9. Hellenistic lots

### Current formula family

NAF currently implements the seven Hermetic lots in the Paulus/Panaretus family used in the project source model.

All formulas use **directed zodiacal distance** projected from the Ascendant.

Define:

```text
directed_arc(A → B) = (B - A + 360) mod 360
Lot = normalize360(ASC + directed_arc(source → target))
```

The direction depends on sect.

### Formula table

| Lot | Day formula direction | Night formula direction |
|---|---|---|
| Fortune | Sun → Moon | Moon → Sun |
| Spirit | Moon → Sun | Sun → Moon |
| Eros | Spirit → Venus | Venus → Spirit |
| Necessity | Mercury → Fortune | Fortune → Mercury |
| Courage | Mars → Fortune | Fortune → Mars |
| Victory | Spirit → Jupiter | Jupiter → Spirit |
| Nemesis | Saturn → Fortune | Fortune → Saturn |

### Required provenance

Every lot must retain:

- sect;
- formula family;
- source point;
- target point;
- source longitude;
- target longitude;
- directed arc;
- Ascendant longitude;
- unnormalized projection;
- normalized longitude;
- formatted zodiacal position;
- whole-sign house;
- domicile ruler;
- historical/source reference identifier.

### Variant control

Eros and Necessity have important historical variants. NAF must not collapse Valens/Dorotheus and Paulus/Panaretus formula families into one implementation.

Future versions should calculate variants side-by-side under explicit rule IDs.

---

## 10. Lot of Fortune and Lot of Spirit conceptual role

The kernel calculates positions only. Interpretation belongs downstream.

Within the selected Hellenistic framework, Fortune and Spirit are especially important because they form complementary derived points and support timing techniques such as zodiacal releasing.

Noetic Atlas should therefore treat lots as first-class graph objects rather than decorative points.

A lot participates in:

```text
longitude
→ sign
→ whole-sign house
→ ruler
→ dispositor route
→ aspects/configurations
→ timing systems
```

This is an example of why the framework's multilayer architecture matters: a lot is not merely another point on the wheel.

---

## 11. Element and modality

Current sign classification:

### Elements

- Fire: Aries, Leo, Sagittarius
- Earth: Taurus, Virgo, Capricorn
- Air: Gemini, Libra, Aquarius
- Water: Cancer, Scorpio, Pisces

### Modalities

- Cardinal: Aries, Cancer, Libra, Capricorn
- Fixed: Taurus, Leo, Scorpio, Aquarius
- Mutable: Gemini, Virgo, Sagittarius, Pisces

Composition counts are descriptive properties of the chart model.

They should not automatically become personality scores.

---

## 12. Planetary-condition engine — planned v0.4

The next major domain layer should enrich objects and relationships with traditional condition.

Candidate features include:

- domicile/exaltation status;
- detriment/fall where used by selected source model;
- triplicity rulers;
- bounds/terms;
- angularity;
- sect membership;
- benefic/malefic contrary-to/in-sect distinctions;
- reception;
- overcoming/superior geometry;
- enclosure;
- bonification/maltreatment;
- solar-phase conditions where sourced and formalized.

Each condition must be independently encoded and provenance-tagged.

The framework should avoid prematurely collapsing many conditions into one opaque “planet strength” score.

---

## 13. Higher-order chart patterns

Traditional named patterns such as a T-square or grand trine are higher-order structures involving more than one pairwise edge.

Long-term NAF representation should therefore support motifs or hyperedges rather than assuming every configuration is reducible to independent pairwise relations.

Examples:

```text
Grand trine      = 3-node closed 120° motif
T-square         = opposition + two quadratures
Grand cross      = 4-node orthogonal/oppositional motif
Yod              = sextile + two quincunxes
```

Pattern detection must state the aspect policy and participating objects used.

---

## 14. Modern and transpersonal layers

Modern objects such as Uranus, Neptune, Pluto, and Chiron may be included as astronomical/symbolic objects while classical rulership remains unchanged.

A modern/transpersonal interpretation adapter may later add:

- outer-planet archetypal interpretation;
- Chiron when astronomical support is verified;
- modern rulership as an explicit optional model;
- psychological/transpersonal language.

These should remain separate from Hellenistic deterministic rules.

---

## 15. Jyotish layer

Jyotish should be implemented as a separate model, not as a list of extra features attached to the tropical western chart.

A Jyotish implementation will require explicit choices including:

- sidereal zodiac;
- ayanamsha;
- house/bhava conventions;
- graha set;
- nakshatra model;
- dignity/relationship logic;
- dashas;
- divisional charts;
- aspect/drishti rules.

Western tropical longitudes must not be reused accidentally after a Jyotish model is selected.

---

## 16. Temporal systems — planned

### Annual profections

A deterministic Hellenistic timing layer should identify:

- activated whole-sign house;
- lord of the year;
- natal condition of the lord;
- current transits involving the lord/house.

### Zodiacal releasing

Future support should include:

- lot source selection;
- sign-period durations;
- nested levels;
- loosing of the bond;
- angularity from Fortune/Spirit where relevant;
- full derivation of period boundaries.

No releasing period should be generated by an LLM.

### Transits

Transit relations should use full-precision astronomical positions and versioned aspect policies.

Every Life Spectrum band must have a source record.

---

## 17. Tradition and model identifiers

Every analysis should eventually expose identifiers similar to:

```text
zodiac_model           = tropical
house_model            = whole_sign
rulership_model        = traditional_domicile
sect_model             = geometric_horizon_v1
lot_model              = paulus_panaretus_v1
aspect_family          = ptolemaic_major
orb_policy             = naf.orbs.research.v1
condition_model        = none | hellenistic_condition_v1
interpretation_model   = none | hellenistic | transpersonal | ...
```

The exact identifier names may evolve, but the principle is mandatory.

---

## 18. Domain-model rule

The most important domain rule for engineers is:

> **Do not encode an interpretation where a calculation belongs, and do not encode a calculation without identifying the tradition or model that defines it.**

Noetic Atlas is designed to compare astrological models. It can do that only if their assumptions remain explicit.
