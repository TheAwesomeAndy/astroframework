# Astronomy Adapters

Noetic Atlas separates astronomical calculation from astrological rule systems. This is both an engineering and integrity boundary.

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

## Current open adapter

Pinned provider:

```text
astronomy-engine@2.1.19
```

Current automatic birth-time support:

```text
Sun
Moon
Mercury
Venus
Mars
Jupiter
Saturn
Uranus
Neptune
Pluto
ASC
MC
longitudinal velocity / retrograde state
geometric solar altitude
```

NAF uses the provider only for astronomical numerical primitives and independently derives the astrological model.

## Planet longitude

Current path:

```text
GeoVector(body, timestamp, aberration=true)
→ Ecliptic(vector)
→ geocentric true-ecliptic-of-date longitude
```

Longitudinal speed is estimated by centered numerical differentiation around the birth timestamp. Step size/calculation identity belongs in provenance.

## Angles

NAF composes coordinate transforms and solves ecliptic intersections with the observer horizon/meridian. The selection logic is inspectable and the analysis preserves enough information to audit candidate intersections.

## Sect geometry

The adapter calculates geometric solar altitude with atmospheric refraction disabled. The astrological layer then classifies day/night/indeterminate sect.

## Extended objects — current boundary

The current birth-time astronomy adapter does **not** automatically generate validated coordinates for:

- Ceres;
- Chiron;
- true/mean lunar node variants;
- Black Moon Lilith/lunar-apogee variants;
- Vertex;
- fixed stars.

These are not interchangeable limitations:

### Ceres

The **interpretation layer can already consume Ceres** when a coordinate is explicitly supplied. The astronomy layer cannot yet generate that coordinate automatically.

Therefore:

```text
Ceres interpretation capability = implemented for supplied coordinate
Ceres automatic astronomy = unsupported/not implemented
```

### Chiron / nodes / Lilith / Vertex

These require explicit object definitions, algorithms/providers, validation, and provenance before automatic generation.

Imported/precomputed values may be consumed only through an explicit supported input path. Noetic Atlas never invents missing coordinates.

## Independent-provider target

A second high-precision provider remains desirable for cross-validation and expanded object coverage.

Swiss Ephemeris is a natural candidate, but licensing is dual AGPL/Professional License. Any commercial/public integration must make the licensing decision explicitly.

Target architecture:

```text
AstronomyProvider
├── AstronomyEngineAdapter          current open adapter
├── SwissEphemerisAdapter           future / licensing-gated
└── CrossValidationAdapter          future
```

## Cross-engine truth checks

A mature Observatory mode should compare independent providers for:

- planetary longitude;
- velocity;
- ASC;
- MC;
- solar altitude;
- derived sign/house changes near boundaries;
- lot propagation;
- aspect-orb changes.

Provider disagreement should be quantified, not hidden.

## Provider contract

Every provider should disclose:

- provider/version;
- license;
- supported objects and object variants;
- coordinate frame;
- geocentric/topocentric convention;
- apparent/geometric policy;
- precision/validation notes;
- observation instant/location.

Astrological rules do not belong inside the astronomy provider.
