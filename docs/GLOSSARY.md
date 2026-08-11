# Noetic Atlas — Engineering and Astrological Glossary

This glossary defines terms as they are used inside Noetic Atlas. Historical traditions may use some words differently; where meaning is model-specific, the selected rule set is authoritative.

## Absolute longitude

A zodiacal position represented as decimal degrees in `[0, 360)`.

Example:

```text
14° Virgo = 150° + 14° = 164° absolute longitude
```

Internal calculations use absolute longitude rather than formatted sign strings.

## Activation

A model-defined time-dependent relationship between a current/timing configuration and natal structure.

Activation is not automatically a physical energy measurement.

## Angle

A chart point determined by observer geometry rather than a planetary body.

Primary examples:

- Ascendant (ASC);
- Midheaven (MC);
- Descendant (DSC);
- Imum Coeli (IC).

## Applying

An aspect whose distance from exact perfection is decreasing under the selected motion model.

Requires velocity/motion data.

## Aspect

An angular relationship between two astrological objects.

Current major family:

- conjunction 0°;
- sextile 60°;
- square 90°;
- trine 120°;
- opposition 180°.

## Aspect graph

A graph whose nodes are astrological objects and whose edges are aspects admitted under a named aspect/orb policy.

## Aspect matrix

A tabular representation of pairwise aspect relationships, useful for precise lookup when a node-link graph becomes visually dense.

## Astrological rule

A deterministic transformation defined by an astrological tradition or selected model.

Examples:

- whole-sign house assignment;
- traditional domicile ruler lookup;
- sect-reversing lot formula.

## Astronomy adapter

A software layer that converts an unambiguous observation instant/location into astronomical quantities such as longitude, velocity, and observer-dependent angles.

It must not perform interpretation.

## Canonical analysis model

The structured analysis object passed between calculation, research, visualization, export, and AI layers.

## Canonical fixture

A stable chart/input used for regression testing.

`NAF-CANON-0001` is the first canonical specimen.

A canonical fixture verifies software consistency; it is not proof of an astrological theory.

## Cardinal / Fixed / Mutable

The three zodiacal modalities.

- Cardinal: Aries, Cancer, Libra, Capricorn.
- Fixed: Taurus, Leo, Scorpio, Aquarius.
- Mutable: Gemini, Virgo, Sagittarius, Pisces.

## Condition

A collection of traditional factors describing the status/context of a planet beyond simple sign/house position.

Future NAF examples include dignity, sect condition, reception, angularity, overcoming, and bonification/maltreatment.

Condition should not automatically be collapsed into one opaque “strength” number.

## Coupling

A mathematical or visualization relationship between astrological objects.

Unless independently established otherwise, coupling in NAF is a model-relative symbolic quantity rather than a measured physical force.

## Derivation Ledger

Machine-readable audit trail that preserves how a result was produced.

A ledger entry may contain input values, formula/rule, intermediate values, algorithm version, output, source tradition, and uncertainty.

## Directed zodiacal distance

Distance measured forward through zodiacal order from source to target:

```text
directed_arc(A → B) = (B - A + 360) mod 360
```

Used in Hellenistic lot calculations.

## Dispositor

The traditional domicile ruler of the sign occupied by a planet or point.

Example:

```text
Mercury in Libra → Venus disposits Mercury
```

## Dispositor graph

Directed graph in which planets point to the domicile rulers of the signs they occupy.

## Domicile ruler

Planet traditionally assigned rulership over a zodiac sign.

Current Hellenistic/traditional model uses the seven classical rulers.

## Ecliptic longitude

Angular position measured along the ecliptic from the zodiacal zero point.

## Element

One of four zodiacal elemental categories:

- Fire;
- Earth;
- Air;
- Water.

## Ephemeris

Astronomical data/model used to calculate celestial positions through time.

## Epistemic layer

Classification describing what kind of statement a result represents.

NAF uses:

```text
E0 input
E1 astronomical computation
E2 astrological rule
E3 mathematical derivation
E4 research-exploratory descriptor
E5 interpretation
```

## Exact aspect

The ideal angular separation defining an aspect, before orb.

Example:

```text
square exact angle = 90°
```

## Flow Map

Noetic Atlas visualization of directed rulership/dependency pathways.

## Harmonic spectrum

Experimental mathematical description of circular angular organization using complex harmonic components.

It is a research descriptor, not currently an established interpretive technique in NAF.

## House / Place

A twelvefold division used for topical structure.

The current Hellenistic baseline uses Whole Sign houses/places, where the entire Ascendant sign is the first place.

## House ruler

Domicile ruler of the zodiac sign occupying a house in the selected house/rulership model.

## Hypergraph

Graph generalization in which one edge can connect more than two nodes.

Potentially useful for representing multi-object astrological configurations without decomposing them entirely into pairwise aspects.

## Interpretation

Meaning assigned to calculated structure by a historical tradition, astrologer, contemporary school, or AI synthesis layer.

Interpretation is downstream of calculation.

## Life Space

Planned Noetic Atlas representation of the complete astrological state as a trajectory through a lower-dimensional state-space visualization.

## Life Spectrum

Planned longitudinal visualization where time is the horizontal axis and natal structures/timing channels form the vertical dimension.

## Lot

A derived zodiacal point calculated from relationships among astronomical/chart points.

Current NAF support includes seven Paulus/Panaretus Hermetic lots.

## Lot of Fortune

Sect-reversing Hellenistic lot built from the Ascendant, Sun, and Moon.

Current formula family:

```text
Day:   ASC + Sun → Moon
Night: ASC + Moon → Sun
```

## Lot of Spirit

Complementary sect-reversing Hellenistic lot built from the Ascendant, Sun, and Moon.

Current formula family:

```text
Day:   ASC + Moon → Sun
Night: ASC + Sun → Moon
```

## Model

Explicit collection of assumptions/rules used to derive a chart representation.

Examples:

- tropical zodiac;
- whole-sign houses;
- traditional domicile rulership;
- Paulus/Panaretus lots.

## Motif

Higher-order graph/configuration pattern involving multiple objects and relations.

Examples may include grand trines or T-squares under an explicit aspect policy.

## Natal Field

Noetic Atlas structural visualization of the natal chart as attributed objects and relationships.

## Natal kernel

Stable natal architecture used as the fixed structural base for later time-dependent analysis.

This is a computational metaphor, not a biological claim.

## Node

Object represented in a graph.

Depending on graph type, nodes may include planets, angles, lots, houses, or other defined points.

## Null model

Randomized/comparison model used to determine whether an exploratory pattern is unusual relative to an appropriate baseline.

## Orb

Angular deviation from exact aspect.

```text
orb = |measured separation - exact aspect angle|
```

## Orb policy

Named/versioned set of rules defining which orb sizes are accepted for which aspect classes/objects.

## Overcoming

Traditional directional aspect relationship in which one planet is configured to another from a superior zodiacal position under a specific traditional rule model.

Not yet fully implemented in current NAF condition engine.

## Phase

Context-dependent word. In aspect computation, phase usually refers to applying/separating state. In research/visualization it may describe angular phase relationships. The relevant module must state which meaning is intended.

## Profection

Traditional time-lord technique advancing one whole-sign house per year of life.

Planned future Hellenistic timing layer.

## Provenance

Metadata describing where a value came from and how it was produced.

Examples:

- provider/version;
- formula ID;
- source tradition;
- coordinate convention;
- input record;
- uncertainty.

## Reception

Traditional relationship in which one planet occupies a dignity/domain of another planet, subject to tradition-specific definitions.

Planned condition-engine feature.

## Research descriptor

Reproducible mathematical feature introduced to investigate structure that is not automatically part of historical astrological doctrine.

## Retrograde

Apparent reversal of zodiacal longitudinal motion relative to the selected geocentric model.

## Route convergence

Experimental metric describing the degree to which multiple rulership/dispositor pathways converge on common nodes or terminal components.

## Rule set

Versioned collection of astrological calculation rules.

Rule sets should be explicit and switchable rather than silently mixed.

## Sect

Hellenistic day/night classification based primarily on whether the Sun is above or below the local horizon.

Sect also modifies multiple interpretive/technical rules and the direction of sect-reversing lots.

## Separating

An aspect whose distance from exact perfection is increasing under the motion model.

## Sign

One of twelve equal 30° divisions of the zodiac in the current model.

## State vector

Future numerical representation of the complete symbolic condition at time `t`.

## Strongly connected component (SCC)

In a directed graph, a maximal set of nodes where every node is reachable from every other node.

## Terminal SCC

Strongly connected component with no outgoing edges to another SCC in the condensed directed graph.

## Topology

Structural properties of a graph/network independent of its drawn layout.

## Transit

Time-varying astronomical position related to a natal object or structure.

## Tropical zodiac

Zodiac anchored to the equinoctial/seasonal reference rather than a sidereal star-based reference.

Current western baseline in NAF.

## Validation

Process of checking a calculation or hypothesis against an independent reference, fixture, provider, expert reconstruction, null model, or dataset.

## Whole Sign houses

House model where each zodiac sign constitutes one whole house, beginning with the Ascendant sign as the first house.

## Zodiacal releasing

Hellenistic time-lord technique using lots and sign-period sequences.

Planned future timing module.
