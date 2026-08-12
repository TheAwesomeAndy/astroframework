# Noetic Atlas — Astronomy Validation Plan

## Purpose

The astronomy layer is useful only if its outputs are independently testable. This plan defines how Noetic Atlas should validate numerical astronomy without turning one provider into an unquestioned oracle.

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

The goal is narrow:

> Given the same civil instant, observer coordinates, coordinate conventions, and object definition, independent astronomy implementations should agree within an explicitly declared tolerance.

This is not a test of whether astrology is true.

## Current state

Current open provider:

```text
Astronomy Engine 2.1.19
```

Current automatic coverage:

```text
Sun through Pluto
ASC
MC
longitudinal speed / retrograde state
geometric solar altitude
```

Current automatic exclusions:

```text
Ceres
Chiron
true/mean node variants
Black Moon Lilith / lunar-apogee variants
Vertex
fixed stars
```

Ceres has a special split capability: supplied/precomputed Ceres coordinates can be interpreted by the v0.4.1.2 interpretation layer, but automatic Ceres astronomy remains unsupported.

## Validation principle

Provider comparison is meaningful only after conventions are aligned.

Record before comparison:

- UTC instant;
- latitude/longitude/elevation;
- tropical/sidereal frame;
- equinox/ecliptic convention;
- geocentric/topocentric convention;
- apparent/geometric policy;
- aberration/light-time policy;
- object/variant identity;
- node/apogee model when relevant;
- angle algorithm;
- provider/version.

A numerical disagreement is not automatically an implementation error until these conventions match.

## Independent-provider target

At least one independent high-precision provider should be added before Noetic Atlas claims professional-grade astronomical reproducibility.

Swiss Ephemeris remains a candidate but its licensing must be resolved explicitly before production/commercial embedding.

Target architecture:

```text
AstronomyProvider
├── astronomy-engine-open
├── swiss-ephemeris-validation / licensed production adapter
└── future independent reference
```

Provider-specific fields should remain in provenance rather than leaking into general chart semantics.

## Validation corpus

### Temporal range

Include:

- contemporary dates;
- 20th century;
- 19th century;
- earlier dates within supported ephemeris range;
- civil-time edge cases near historical rule changes.

### Geographic range

Include:

- equatorial locations;
- northern/southern mid-latitudes;
- high latitude;
- longitudes near ±180°;
- time-zone boundary cases.

### Astronomical edge cases

Include:

- 0° Aries / 360° wrap;
- sign ingress boundaries;
- retrograde stations;
- Mercury/Venus elongation extremes;
- rapidly moving Moon at sign boundaries;
- Sun near horizon for sect;
- ASC/MC sign boundaries;
- high-latitude angle geometry.

## Outputs to compare

For each case compare:

1. civil-time → UTC resolution;
2. planetary ecliptic longitude;
3. longitudinal velocity/direct-retrograde sign;
4. ASC longitude;
5. MC longitude;
6. geometric solar altitude;
7. downstream sign/Whole Sign place when relevant;
8. sect classification;
9. derived lots from agreed inputs.

The final three are propagation tests, not independent astronomy-provider quantities.

## Tolerance policy

Tolerances must be declared per quantity/provider pair and never invented after seeing discrepancies.

Critical distinction:

```text
close enough for display
≠
close enough for a rule boundary
```

Tiny numerical differences can change sign, bound, exact-aspect, or sect classifications near boundaries. Boundary sensitivity must be tested separately.

## Angle validation

ASC/MC deserve dedicated validation because they are observer-dependent geometry.

Retain for each case:

- candidate intersections;
- selected candidate;
- horizontal-vector information;
- provider/reference longitude;
- angular difference;
- observer/time input;
- transform/version metadata.

Do not call the custom solver production-grade before independent validation passes.

## Extended-object admission policy

Every new object enters through a capability record, e.g.:

```json
{
  "object": "Ceres",
  "variant": "osculating-or-provider-defined",
  "provider": "...",
  "rule_id": "naf.astronomy.ceres....v1",
  "validated_against": "...",
  "status": "experimental|validated|unsupported"
}
```

### Ceres

Automatic Ceres support requires:

- explicit object/provider definition;
- independent comparison;
- boundary/regression fixtures;
- provenance fields;
- licensing review where relevant;
- interpretation/input path integration without silently changing existing supplied-coordinate behavior.

### Nodes

True and mean nodes are distinct. Never serialize an ambiguous `NorthNode` without variant metadata.

### Chiron

Treat as a minor body with explicit ephemeris provenance.

### Black Moon Lilith

`Lilith` is too ambiguous as a provider identifier. The exact apogee construction must be encoded.

### Vertex

Requires explicit geometric definition and independent validation.

### Fixed stars

Require catalog identity, epoch/proper-motion handling where relevant, coordinate transforms, and explicit star list.

## Validation artifact

Each case should serialize approximately:

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

Validation fixtures should be committed so provider upgrades become regression-testable.

## Release gate

Before using a production/professional astronomy label require:

- independent provider implemented;
- convention-matched corpus completed;
- angle validation completed;
- boundary-sensitive discrepancies reviewed;
- versions pinned;
- licensing reviewed;
- validation report committed;
- CI regression protection.

Until then the current adapter is correctly described as a transparent research-grade calculation path.
