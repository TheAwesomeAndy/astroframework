# Noetic Atlas v0.3 — The Noetic Kernel

## Release objective

v0.3 removes the canonical specimen from the application code path. The chart is now an **input** to a deterministic analysis kernel, and the preferred consumer path begins one layer earlier with local birth date/time and coordinates.

The release gate is:

> Can Noetic Atlas derive the structure it displays and show enough provenance for an expert to independently reconstruct the calculation?

## Runtime pipelines

### Public birth-data path

```text
local date/time + latitude + longitude
        ↓
coordinate → IANA time-zone resolution
        ↓
historical local-time → UTC conversion
        ↓
Astronomy Engine adapter
        ↓
planetary longitude + velocity + ASC + MC + solar altitude
        ↓
whole-sign houses + sect + Hermetic lots + aspects
        ↓
traditional domicile dispositor graph
        ↓
Tarjan SCCs + house routing
        ↓
canonical NAF analysis + derivation ledger
        ↓
visualization / exploratory research / later interpretation
```

### Calculated-chart path

```text
placement text / JSON
        ↓
input parser
        ↓
absolute ecliptic longitude
        ↓
whole-sign houses + chart-geometry sect fallback + Hermetic lots + aspects
        ↓
topology + provenance
        ↓
canonical NAF analysis object
```

The visualization does not calculate astrology. It consumes the canonical analysis object.

## Input modes

### 1. Local date/time + coordinates

Minimum public input:

```json
{
  "local_datetime": "1984-10-03T21:17:00",
  "latitude": 40.789,
  "longitude": -73.135
}
```

The system resolves an IANA zone from coordinates and applies historical civil-time rules. It records zone, UTC offset, resulting UTC instant and lookup provenance. A repeated local clock time during an autumn DST transition is not guessed; NAF returns the possible instants and requires an ambiguity choice. A nonexistent spring-forward time is rejected.

An expert may provide `timezone_override` when the coordinate lookup is inappropriate or historically uncertain.

### 2. Placement text

The browser also accepts lines such as:

```text
Sun in Libra 10°57′, in 3rd House
Moon in Gemini 8°03′, in 11th House
Venus in Virgo 14°49′, in 2nd House
ASC in Leo 11°38′
MC in Taurus 0°44′
```

The Ascendant is mandatory because NAF recomputes whole-sign houses from the Ascendant sign. Source house numbers are retained as `supplied_house` for audit comparison only. Supplied aspect lines are ignored.

### 3. Canonical JSON

```json
{
  "angles": {"ASC": {"sign":"Leo", "degree":"11°38′"}},
  "objects": [
    {"id":"Sun", "sign":"Libra", "degree":"10°57′"},
    {"id":"Moon", "sign":"Gemini", "degree":"8°03′"}
  ]
}
```

For high-precision work, decimal `longitude` is preferred over display-rounded degree/minute strings. Optional `speed_deg_per_day` enables applying/separating classification.

## Coordinate primitive

Every object is normalized to absolute tropical ecliptic longitude in `[0°,360°)`. Display formatting is downstream and never used as a higher-precision substitute for the stored computational coordinate.

## Whole-sign places

```text
house = ((objectSignIndex - ascSignIndex + 12) mod 12) + 1
```

This permits direct comparison of supplied versus computed places.

## Aspect engine

```text
δ = min(|λ_i - λ_j|, 360 - |λ_i - λ_j|)
orb = |δ - exact_aspect_angle|
```

v0.3 computes conjunction, sextile, square, trine and opposition under an explicit, versioned orb policy. Orb policy is configuration, not hidden doctrine.

## Motion and phase

When velocities exist, the engine compares distance from exact perfection over a small deterministic future step and returns `applying`, `separating`, or `stationary/indeterminate`. Position-only chart imports return `unknown`.

## Sect

With birth data, sect is determined from the Sun's geometric altitude relative to the observer's horizon, with refraction disabled. With placement-only imports, an explicitly labeled Sun/ASC ecliptic-horizon fallback is used. Near-horizon cases are flagged because historical doctrine and twilight introduce a genuine boundary question.

## Hellenistic Hermetic lots

The integrity layer implements the Paulus/Panaretus family described in Christopher Brennan, *Hellenistic Astrology*, Chapter 16.

| Lot | Day directed arc | Night directed arc |
|---|---|---|
| Fortune | Sun → Moon | Moon → Sun |
| Spirit | Moon → Sun | Sun → Moon |
| Eros | Spirit → Venus | Venus → Spirit |
| Necessity | Mercury → Fortune | Fortune → Mercury |
| Courage | Mars → Fortune | Fortune → Mars |
| Victory | Spirit → Jupiter | Jupiter → Spirit |
| Nemesis | Saturn → Fortune | Fortune → Saturn |

Every lot records the sect, formula family, directed arc, Ascendant longitude, unnormalized projection, normalized longitude, whole-sign house and domicile ruler. Eros and Necessity are explicitly marked as the Paulus variants because Brennan documents earlier Valens/Dorotheus variants.

The canonical rounded specimen independently reproduces Fortune at 14°32′ Sagittarius and Spirit at 8°44′ Aries in a night chart.

## Rulership topology

Traditional domicile edges are generated from sign occupancy. Tarjan's algorithm discovers SCCs; terminal SCCs are derived from the condensed graph rather than fixture assertions. `NAF-CANON-0001` independently rediscovers Mercury ↔ Venus.

## Derivation Ledger

`analysis.derivation_ledger` records major calculations as inspectable entries with:

- epistemic layer;
- object or relationship identifier;
- formula/rule;
- numerical inputs;
- result;
- calculation identifier;
- source/provenance.

The design requirement is that a master astrologer or technical reviewer can reconstruct the result without trusting the interface.

## Astronomy adapter

The open research adapter is pinned to Astronomy Engine 2.1.19. NAF uses it for astronomical primitives and independently performs astrological rule calculations. Unsupported astrology-specific objects are reported rather than fabricated. See `docs/ASTRONOMY_ADAPTERS.md`.

## Exploratory research

`src/research/pattern-engine.mjs` begins the Observatory discovery layer with circular harmonic concentration, ruler-route convergence and multilayer participation. These are labeled **exploratory-not-interpretive**. See `docs/RESEARCH_DISCOVERY.md`.

## Prototype

`prototype/index.html` is the current Observatory entry point. It supports local date/time + coordinates as well as calculated chart import, and exposes Natal Field, Sect & Lots, Flow, Research Lab and the Derivation Ledger.

Because v0.3 is modular, serve the repository through a local/static web server rather than opening the HTML through `file://`.

## Tests

Run:

```bash
npm install
npm test
```

The test suite covers coordinate geometry, chart text/JSON input, whole-sign houses, major aspects, dispositors/SCCs, sect, the seven Hermetic lots, canonical lot verification, civil-time DST gaps/ambiguities, the astronomy provider contract and exploratory research output.

## Remaining boundary

The open astronomy adapter currently calculates Sun through Pluto plus ASC/MC and velocities. Chiron, lunar-node longitude, Lilith/lunar apogee and Vertex require separately sourced and tested astronomy/astrology algorithms. Their absence is explicit in provenance.

The next integrity target is cross-provider validation and fuller traditional condition analysis—not hiding unsupported points behind plausible-looking numbers.
