# Noetic Atlas Integrity & Provenance Protocol

## Purpose

Noetic Atlas is being built as an inspectable research instrument, not a black-box horoscope generator. The product may eventually offer interpretation, but no interpretation is allowed to obscure the calculations it depends on.

> Every displayed result must be reversible to its input, formula or rule, versioned model, source tradition, numerical output, and known uncertainty.

## Epistemic labels

NAF distinguishes six classes of statements:

1. **Input** — values supplied by the user or imported from a source.
2. **Astronomical computation** — ephemeris positions, observer geometry, angles, velocities.
3. **Astrological rule** — whole-sign house assignment, sect-reversing lots, domicile rulership, aspect-orb policy.
4. **Graph-derived** — SCCs, routes, centrality, motifs and other mathematical properties of the symbolic graph.
5. **Research-exploratory** — new numerical descriptors whose astrological significance has not been established.
6. **Interpretive inference** — traditional, transpersonal, Jyotish or AI-generated meaning. Interpretation never retroactively changes the calculation layer.

## Public birth input

The public contract is intentionally simple:

```json
{
  "local_datetime": "YYYY-MM-DDTHH:MM:SS",
  "latitude": 40.789,
  "longitude": -73.135,
  "elevation_m": 0
}
```

Latitude is north-positive. Longitude is east-positive; western longitudes are negative.

Civil time cannot be inferred from longitude alone because legal time zones and daylight-saving rules are historical human conventions. NAF therefore resolves an IANA time-zone name from latitude/longitude using a pinned coordinate lookup dataset and then converts the local wall time under the historical IANA zone rules exposed by JavaScript `Intl`.

The resolved zone, UTC offset, UTC instant, lookup version and conversion method are retained in provenance. An advanced `timezone_override` is available so an expert can replace the coordinate-derived zone when historical or boundary circumstances require it.

Repeated local times during an autumn DST transition can correspond to two distinct UTC instants. NAF does not guess; it reports the alternatives and requires `ambiguity_index`. Local times that never occurred because the clock jumped forward are rejected as nonexistent civil times.

The lower-level astronomy adapter still requires an explicit ISO timestamp with offset or `Z`. The public pipeline resolves that timestamp before astronomy begins.

## Open astronomy adapter

The research prototype pins Astronomy Engine 2.1.19. The upstream library documents geocentric Sun/Moon/planet calculations, observer/horizon coordinates, coordinate rotations, a target accuracy of approximately one arcminute, validation against NOVAS/JPL Horizons, browser/Node support, and MIT licensing.

NAF records the library name, version, observation timestamp, geographic coordinates, coordinate convention and calculation path in the resulting model.

The open adapter currently calculates the ten major bodies from Sun through Pluto. Chiron, a full astrology-oriented lunar-node implementation, Lilith/lunar apogee and Vertex are not silently approximated. They remain unsupported in this adapter until a separately documented algorithm/provider is added.

## Angles

NAF does not ask an LLM for the Ascendant or Midheaven. With date, time and observer coordinates it constructs a transformation from true ecliptic of date (ECT) to true equator of date (EQD) to the observer's horizontal frame (HOR).

The Ascendant is selected as the intersection of the ecliptic with the **eastern geometric horizon**. In Astronomy Engine's horizontal-vector convention, x points north, y west and z zenith, so the eastern horizon candidate has `z = 0` and `y < 0`.

The Midheaven is the ecliptic intersection with the local meridian above the horizon: `y = 0`, selecting the candidate with `z > 0`.

The analysis object preserves the candidate longitudes and selected horizontal vector so an expert can audit the selection.

## Sect

Brennan's treatment of sect describes the fundamental distinction as the Sun above the exact Ascendant–Descendant horizon for a day chart and below it for a night chart, while noting ambiguity around twilight and the exact horizon.

When birth data are available, NAF calculates the Sun's geometric altitude with no atmospheric refraction:

- altitude > 0° → day
- altitude < 0° → night
- altitude = 0° → horizon/indeterminate

A near-horizon flag is retained rather than pretending twilight ambiguity does not exist.

When only a calculated chart is pasted, NAF derives the ecliptic horizon semicircle from Sun and Ascendant longitudes but records that this is a chart-geometry fallback rather than a fresh observer-altitude computation.

## Hermetic lots

NAF v0.3.1 implements the seven Hermetic lots in the Paulus/Panaretus family described in Brennan, Chapter 16. The formula family is recorded on every lot. All distances are **directed zodiacal distances** projected from the Ascendant.

| Lot | Day | Night |
|---|---|---|
| Fortune | Sun → Moon | Moon → Sun |
| Spirit | Moon → Sun | Sun → Moon |
| Eros | Spirit → Venus | Venus → Spirit |
| Necessity | Mercury → Fortune | Fortune → Mercury |
| Courage | Mars → Fortune | Fortune → Mars |
| Victory | Spirit → Jupiter | Jupiter → Spirit |
| Nemesis | Saturn → Fortune | Fortune → Saturn |

Brennan explicitly notes that the earlier Valens/Dorotheus calculations for Eros and Necessity differ from the Paulus family. NAF labels the selected variant instead of combining traditions silently. Future rule sets may calculate the variants side by side.

Every computed lot records the Ascendant, source and target longitudes, directed arc, unnormalized projected result, normalized result, zodiacal display, whole-sign house, domicile ruler, sect, formula family and source reference.

For the canonical degree-minute specimen, the night formulas independently reproduce Fortune at 14°32′ Sagittarius and Spirit at 8°44′ Aries. Agreement with any supplied lot is stored as a validation result rather than assumed.

## Aspects

For two longitudes `a` and `b`:

```text
δ = min(|a-b|, 360-|a-b|)
orb = |δ-exact_aspect_angle|
```

An aspect is accepted only if its orb is within the active named orb policy. Rounded display coordinates may differ slightly from full-precision ephemeris coordinates; NAF exposes this rather than forcing exact equality.

Applying/separating is calculated only when longitudinal velocities exist. Position-only inputs return `unknown`.

## Rulership and topology

Traditional domicile rulers create directed planet → ruler edges. Strongly connected components are discovered using Tarjan's algorithm. Terminal components are derived from the condensed graph. A terminal cycle is never stored merely because an astrologer already knows it exists; it must be rediscovered from the submitted chart.

## Derivation Ledger

`analysis.derivation_ledger` is the machine-readable audit trail. Entries include coordinates, whole-sign places, sect, lots, aspects, dispositor edges and graph topology.

## Exploratory discovery layer

Noetic Atlas is intended to reveal structures difficult to notice with conventional charts. v0.3.1 introduces a separate research module whose outputs are labeled **exploratory-not-interpretive**. Initial descriptors include circular harmonic spectrum, ruler-route convergence and multilayer participation.

These are reproducible mathematical descriptions of the encoded chart. They are not automatically claims that a high score has psychological, causal or predictive meaning.

## Truth protocol

A new technique is not promoted into the interpretive layer merely because it looks interesting on the canonical specimen.

```text
formal definition
→ unit tests
→ cross-chart replication
→ null/randomized baselines
→ expert inspection
→ longitudinal/cohort validation where feasible
→ interpretive hypothesis
```

The research tool is allowed to falsify its own assumptions.
