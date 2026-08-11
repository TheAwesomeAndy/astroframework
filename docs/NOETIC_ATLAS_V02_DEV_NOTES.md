# Noetic Atlas v0.2 — Natal Field

## Milestone objective

Make one natal chart legible as a system before adding predictive time layers or generative interpretation.

## Added in v0.2

- **Natal Field** with pattern presets and click-to-inspect nodes.
- **Topology inspector** that exposes position, whole-sign place, element/modality, domicile ruler, supplied graph degree, mean supplied orb, and nearest relationships before interpretation.
- **Aspect Matrix** for exact pairwise lookup, with core and extended modes.
- **Flow Map** for all twelve whole-sign houses under traditional domicile rulership.
- **All-house route table** showing entry ruler, dispositor path, and terminal Mercury–Venus SCC.
- **Elemental and modal composition** for the ten planetary bodies, excluding angles and derived points.
- **Epistemic Method panel** that hard-separates astronomical fact, astrological calculation, traditional interpretation, and AI synthesis.

## Canonical structural findings surfaced by the interface

1. Sun–Moon–Jupiter forms a complete air-trine subnetwork.
2. Venus–Mars in Virgo is a tight local conjunction coupled by square to Uranus in Sagittarius.
3. Fortune is nearly exact with Uranus and nearly exactly opposite Chiron in the supplied specimen.
4. Traditional domicile flow terminates in the Mercury ↔ Venus strongly connected component.
5. The terminal planetary SCC maps to a 3H ↔ 2H house circuit.

## v0.2 methodological boundary

Noetic Atlas v0.2 still consumes **user-supplied positions and aspects**. It does not yet prove that those inputs were correctly calculated. The interface therefore labels its topology as computation performed *on the supplied symbolic model*.

## v0.3 gate: deterministic calculation kernel

Before Life Spectrum or AI interpretation becomes production-facing:

1. Parse longitudes to absolute ecliptic degrees.
2. Calculate major aspects directly from angular separation.
3. Encode configurable orb policies by planet/aspect/tradition.
4. Determine applying/separating from actual planetary motion, not prose input.
5. Compute whole-sign places from Ascendant sign.
6. Calculate traditional dispositors programmatically.
7. Validate the generated graph against specimen 0001.
8. Add Swiss Ephemeris or an equivalent high-quality ephemeris adapter with provenance.
9. Add unit tests for boundary conditions near 0°/360°, sign changes, stations, and aspect-orb cutoffs.

## Research gate

The first HCI study should compare a conventional wheel against Natal Field + Flow Map for:

- time to identify the ruler of a selected house;
- number of errors tracing a dispositor chain;
- time to identify the strongest supplied aspect cluster;
- recall of whole-chart structure after a delay;
- subjective cognitive load;
- novice vs expert differences.

## Product principle

> Resolution over prophecy.

The premium value proposition should be a better instrument for examining structure, not stronger claims of certainty.
