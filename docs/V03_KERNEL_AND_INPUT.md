# Noetic Atlas v0.3 — The Noetic Kernel

## Release objective

v0.3 removes the canonical specimen from the application code path. The chart is now an **input** to a deterministic analysis kernel.

The release gate is:

> Can Noetic Atlas derive the structure it displays from a chart supplied at runtime?

The answer in v0.3 is yes for charts that provide zodiacal positions and an Ascendant. Full birth-data-to-ephemeris calculation remains a subsequent astronomy adapter task.

## Runtime pipeline

```text
supplied chart text / JSON
        ↓
input parser
        ↓
absolute ecliptic longitude
        ↓
whole-sign house calculation
        ↓
major-aspect engine + explicit orb policy
        ↓
traditional domicile dispositor graph
        ↓
Tarjan strongly connected components
        ↓
house routing / composition / provenance
        ↓
canonical NAF analysis object
        ↓
Natal Field / Aspect Matrix / Flow Map / Audit
```

The visualization does not calculate astrology. It consumes the canonical analysis object.

## Input modes

### 1. Placement text

The browser accepts placement lines such as:

```text
Sun in Libra 10°57′, in 3rd House
Moon in Gemini 8°03′, in 11th House
Venus in Virgo 14°49′, in 2nd House
ASC in Leo 11°38′
MC in Taurus 0°44′
```

The Ascendant is mandatory because v0.3 recomputes whole-sign houses from the Ascendant sign.

House numbers in the source text are retained as `supplied_house` only for audit comparison. They do not control the computed house.

Aspect lines may be pasted with the chart. The parser intentionally ignores them. The aspect graph is recomputed from longitude.

### 2. Canonical JSON

Minimum form:

```json
{
  "angles": {
    "ASC": {"sign":"Leo", "degree":"11°38′"}
  },
  "objects": [
    {"id":"Sun", "sign":"Libra", "degree":"10°57′"},
    {"id":"Moon", "sign":"Gemini", "degree":"8°03′"}
  ]
}
```

For higher-precision work, objects may provide decimal absolute `longitude` instead of a display degree. If both are present, `longitude` is the computational coordinate.

Optional `speed_deg_per_day` enables applying/separating classification. Without velocity the kernel reports `phase: "unknown"` rather than inferring motion from zodiacal order.

## Coordinate primitive

Every object is normalized to absolute tropical ecliptic longitude:

```text
0° Aries = 0°
0° Taurus = 30°
...
0° Pisces = 330°
```

The internal primitive is decimal degrees in `[0, 360)`. Display formatting is downstream and may be rounded independently.

## Whole-sign places

For object sign index `s` and Ascendant sign index `a`:

```text
house = ((s - a + 12) mod 12) + 1
```

Supplied houses are therefore independently checkable against the active whole-sign model.

## Aspect engine

For longitudes `λ_i` and `λ_j`:

```text
δ = min(|λ_i - λ_j|, 360 - |λ_i - λ_j|)
orb = |δ - exact_aspect_angle|
```

v0.3 calculates conjunction, sextile, square, trine, and opposition. Orb policy is configuration, not an invisible constant. The browser exposes the active values and reruns the model when the chart is analyzed.

Default research policy:

```text
conjunction 10°
sextile      6°
square      10°
trine       10°
opposition  10°
```

These values are a versioned exploratory policy, not a claim that one universal orb doctrine exists.

## Motion and phase

If both endpoints contain `speed_deg_per_day`, v0.3 advances them by a small deterministic step and compares distance from exact perfection.

Outputs:

- `applying`
- `separating`
- `stationary/indeterminate`
- `unknown`

The last state is essential. Position-only chart exports do not contain enough information for a defensible motion classification.

## Rulership topology

The v0.3 topology engine uses traditional domicile rulers as an explicit model. Planet-to-ruler edges are generated from sign occupancy rather than fixture assertions.

Strongly connected components are found with Tarjan's algorithm. Terminal SCCs are determined from the condensed component graph.

For `NAF-CANON-0001-supplied`, the kernel independently rediscovers:

```text
Mercury ↔ Venus
```

as a terminal SCC.

## Provenance

Derived aspect edges include:

```json
{
  "derived": true,
  "calculation": "naf.aspect.major.v1",
  "orb_policy": "naf.orbs.user.v1",
  "position_source": "pasted_chart_text"
}
```

The Audit view exposes absolute longitude, computed versus supplied houses, aspect separation/orb, phase status, and calculation identifiers.

Future ephemeris adapters must extend provenance with ephemeris/version, Julian day, location, time standard, node model, and any sidereal ayanamsha.

## Browser prototype

`prototype/noetic_atlas_v03.html` is intentionally standalone. It contains a bundled copy of the v0.3 kernel so it can be opened without a build step.

It supports:

- paste chart text;
- paste JSON;
- open `.txt` or `.json` input files;
- load the canonical sample;
- configurable major-aspect orbs;
- recompute analysis;
- generic Natal Field layout for the submitted chart;
- computed Aspect Matrix;
- computed all-house Flow Map;
- topology summary;
- coordinate/aspect Audit view;
- export of the canonical analysis JSON.

## Tests

Run:

```bash
npm test
```

The zero-dependency smoke suite verifies:

- sign-to-absolute-longitude conversion;
- 0°/360° separation behavior;
- whole-sign houses;
- recomputed canonical aspect families;
- unknown phase without velocity;
- elemental/modal composition;
- text parser behavior;
- discovery of the Mercury/Venus terminal SCC.

## Known boundary

v0.3 accepts a **calculated chart**. It does not yet accept birth date, exact time, and geographic coordinates and query an ephemeris. That should be the next astronomy sub-layer, because only an ephemeris can provide full-precision coordinates and velocities with proper provenance.

This is an intentional boundary rather than a hidden omission.
