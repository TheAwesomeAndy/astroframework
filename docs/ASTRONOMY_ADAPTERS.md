# Astronomy adapters

Noetic Atlas separates astronomical calculation from astrological rule systems. This is both an engineering boundary and an integrity boundary.

## Open research adapter: Astronomy Engine 2.1.19

The current open adapter is pinned to `astronomy-engine@2.1.19`.

Its upstream project documents:

- browser and Node.js support;
- Sun, Moon and planetary positions through Pluto;
- geocentric vectors;
- true ecliptic-of-date coordinate transforms;
- observer/horizon calculations;
- rotation matrices between true ecliptic, equatorial and horizontal frames;
- a design target of approximately ±1 arcminute, with validation against NOVAS and JPL Horizons;
- MIT licensing.

NAF uses the provider only for astronomical numerical primitives. It independently derives the astrological model.

### Planet longitude

For each supported body:

```text
GeoVector(body, timestamp, aberration=true)
→ Ecliptic(vector)
→ geocentric true-ecliptic-of-date longitude
```

Longitudinal speed is currently estimated by centered numerical differentiation around the birth timestamp. The step size and calculation identifier are provenance-bearing and can be revised later.

### Angles

NAF composes:

```text
ECT → EQD
EQD → HOR
```

and solves the intersections of the ecliptic plane with the observer's horizon and meridian.

This keeps the angle calculation inspectable. NAF records candidate intersections and the horizontal vector used to select the eastern-horizon Ascendant and above-horizon Midheaven.

### Sect

The observer-based adapter calculates the Sun's geometric altitude with refraction disabled. This is passed into the astrological Kernel, where sect is classified and the underlying altitude remains inspectable.

## Unsupported objects in the open adapter

Astronomy Engine is an astronomy library, not an astrology chart library. The initial adapter does not invent positions for:

- Chiron;
- lunar node longitude;
- Lilith / lunar apogee;
- Vertex.

Those points require a separately sourced and tested algorithm/provider. Their absence is explicit in output metadata.

## Swiss Ephemeris adapter target

A second provider is desirable for cross-validation and for astrology-specific objects. Swiss Ephemeris is a natural candidate, but its official licensing is dual AGPL / Professional License. Because Noetic Atlas is intended to become a commercial service, the licensing decision must be made deliberately before any public service embeds Swiss Ephemeris.

The target architecture is therefore:

```text
AstronomyProvider
├── AstronomyEngineAdapter
├── SwissEphemerisAdapter   (future, licensing-gated)
└── CrossValidationAdapter  (future)
```

## Cross-engine truth checks

A mature Observatory mode should be able to compute the same chart using multiple astronomy providers and report differences in:

- planetary longitude;
- velocity;
- ASC;
- MC;
- solar altitude / sect boundary;
- derived lots;
- exact aspect orbs.

The product should never hide provider disagreement. It should quantify it.
