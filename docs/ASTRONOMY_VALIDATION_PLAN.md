# Noetic Atlas Astronomy Validation Plan

## Purpose

The open astronomy adapter is useful only if its outputs are independently testable. This document defines how Noetic Atlas will validate astronomical results without allowing a single provider to become an unquestioned oracle.

The goal is not to prove astrology. The goal is much narrower:

> Given the same civil instant, observer coordinates, coordinate conventions, and requested object definition, independent astronomy implementations should agree within an explicitly declared tolerance.

## Current state

The open adapter currently uses Astronomy Engine 2.1.19 for the ten major bodies and for coordinate transformations used by the NAF angle solver.

The current coverage is intentionally partial:

```text
Supported now:
Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, ASC, MC, longitudinal speed

Not yet supported by the open adapter:
true node, mean node, Chiron, Black Moon Lilith/lunar apogee, Vertex, fixed stars
```

Missing objects must remain user-visible as unsupported until their definitions and providers are explicit.

## Validation principle

Provider comparison is meaningful only after conventions are aligned.

Before comparing two values, record:

- UTC instant;
- latitude/longitude/elevation;
- tropical vs sidereal frame;
- equinox/ecliptic convention;
- geocentric vs topocentric;
- apparent vs geometric position;
- aberration/light-time policy;
- node model (true vs mean);
- lunar-apogee model if used;
- object identifier/provider ephemeris;
- house/angle algorithm if angles are compared.

A numerical disagreement is not automatically an error until these conventions are matched.

## Independent provider target

At least one independent high-precision provider should be added as a validation reference before Noetic Atlas claims professional-grade astronomical reproducibility.

Swiss Ephemeris is a natural candidate because of its astrological coverage, but implementation must respect its licensing model. The commercial product must not silently introduce a dependency whose license conflicts with the intended distribution model.

The provider boundary should therefore remain adapter-based:

```text
AstronomyProvider
├── astronomy-engine-open
├── swiss-ephemeris-validation / licensed production adapter
└── future independent reference
```

No provider-specific fields should leak into the canonical chart model except through provenance.

## Validation corpus

The validation battery should not consist only of ordinary contemporary mid-latitude charts.

Minimum corpus classes:

### Temporal range

- modern contemporary dates;
- 20th century;
- 19th century;
- earlier historical dates within the supported ephemeris range;
- dates near calendar or time-zone-rule changes where civil-time conversion is independently verified.

### Geographic range

- equatorial;
- northern mid-latitude;
- southern mid-latitude;
- high latitude;
- longitudes near ±180°;
- locations close to time-zone boundaries.

### Astronomical edge cases

- planet near 0° Aries / 360° wrap;
- planet near sign ingress;
- retrograde station neighborhood;
- Mercury/Venus elongation extremes;
- Moon moving rapidly across a sign boundary;
- Sun near horizon for sect validation;
- ASC/MC near sign boundaries;
- high-latitude angle geometry.

## Outputs to compare

For each case, compare independently:

1. UTC resolution from civil input;
2. planetary ecliptic longitude;
3. longitudinal velocity and retrograde/direct sign;
4. ASC longitude;
5. MC longitude;
6. geometric solar altitude;
7. derived sign and whole-sign place;
8. sect classification;
9. lots derived from the agreed inputs.

The last three are not astronomy-provider comparisons themselves; they test whether small astronomical differences propagate correctly through deterministic astrological rules.

## Tolerance policy

Tolerances must be declared per quantity and provider pair. They must not be invented after seeing discrepancies.

The initial research process should record raw differences first and only then establish acceptance thresholds based on provider precision claims and the requirements of the downstream technique.

Important distinction:

```text
numerically close enough for display
≠
close enough for a rule boundary
```

A 30-arcsecond difference may be visually irrelevant while still changing a bound/term ruler, exact ingress classification, or an extremely tight aspect. Rule-boundary sensitivity must therefore be tested separately.

## Angle validation

ASC and MC deserve their own validation suite because they are derived from observer geometry rather than direct planet ephemerides.

For every angle test store:

- both candidate horizon/meridian intersections;
- selected candidate;
- horizontal vector;
- provider reference longitude;
- difference;
- latitude/longitude/time;
- coordinate transformation version.

Noetic Atlas should not claim that the custom angle solver is production-grade until it has passed this battery against independent references.

## Extended-object policy

Each additional object must enter through a separate capability record.

Example:

```json
{
  "object": "NorthNode",
  "variant": "true",
  "provider": "...",
  "rule_id": "naf.astronomy.node.true.v1",
  "validated_against": "...",
  "status": "experimental|validated|unsupported"
}
```

### Nodes

True and mean nodes are distinct objects/configurations. Never label a value simply `NorthNode` without retaining the variant.

### Chiron

Treat Chiron as a minor body with its own ephemeris provenance, not as a planet silently assumed to have the same support path.

### Black Moon Lilith

The term is ambiguous across software because it can refer to different lunar-apogee constructions. A `Lilith` value is prohibited in the canonical provider output until the exact astronomical definition is encoded in the object ID or variant metadata.

### Vertex

Vertex calculation requires an explicit geometric definition and independent validation. Do not import it as a mysterious scalar from another astrology program while claiming the chart is internally generated.

### Fixed stars

Fixed-star support requires catalog identity, epoch/proper-motion handling where relevant, coordinate transformation details, and an explicit star list. It is a later capability rather than a side effect of adding an ephemeris.

## Validation artifact format

Every comparison case should serialize approximately:

```json
{
  "case_id": "NAF-ASTRO-VAL-0001",
  "input": {},
  "conventions": {},
  "providers": {},
  "comparisons": [
    {
      "quantity": "Sun.longitude",
      "provider_a": 190.123456,
      "provider_b": 190.123410,
      "difference_arcsec": 0.1656,
      "status": "pending-threshold|pass|fail"
    }
  ]
}
```

Validation fixtures should be retained in the repository so future provider upgrades can be regression-tested.

## Release gate

Before a production/professional astronomy label is used, require:

- independent provider implemented;
- convention-matched test corpus completed;
- angle validation completed;
- boundary-sensitive discrepancies reviewed;
- provider/library versions pinned;
- licensing reviewed;
- validation report committed;
- CI regression tests protecting accepted cases.

Until then, the open adapter remains correctly labeled as a transparent research-grade calculation path.
