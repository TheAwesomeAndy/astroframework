# Noetic Atlas v0.4.3 — Compound Condition

## Status

Feature milestone on `feat/v043-compound-condition`.

This document describes the v0.4.3 compound-condition implementation candidate. It does **not** change the currently deployed/public release contract until the feature is separately promoted to `main`.

## Architectural law

```text
one chart state
→ many coordinated projections
```

v0.4.3 does not introduce a chart calculator. It consumes the deterministic natal state and already-computed primitive + relational condition:

```text
analysis
+ primitive condition
+ relational condition
        ↓
independent compound testimonies
        ↓
sect / reception qualifiers
        ↓
reusable condition signatures
+ compound projection
+ derivation walker
```

Astronomy, Whole Sign houses, aspects, lots, rulership topology, and chart coordinates remain upstream facts.

## Why compound condition is not a score

Bonification and maltreatment are represented as independent testimonies. A target can be simultaneously bonified and maltreated.

The engine therefore does **not** calculate:

```text
net condition
planet strength
benefic points - malefic points
traffic-light quality
fate score
```

Instead each testimony retains:

- target;
- acting benefic/malefic planet or planets;
- mechanism;
- rule ID;
- source reference;
- inputs;
- categorical sect qualifier;
- categorical reception qualifier;
- dependencies;
- `derivation_ref`.

Mixed testimony remains mixed.

## Source lock

Primary reconstruction source for this milestone:

> Christopher Brennan, *Hellenistic Astrology: The Study of Fate and Fortune* (2017), Chapter 14, “Conditions of Bonification and Maltreatment,” pp. 461–494.

The implementation follows Brennan's explicit warnings that the Antiochus-derived definitions survive through somewhat different witnesses and require reconstruction. Where the source discussion leaves a material ambiguity, v0.4.3 records a deferred state rather than silently selecting a convenient interpretation.

Machine-readable registry:

```text
data/rules/hellenistic/compound-condition-v1.registry.json
registry = naf.rules.compound_condition.hellenistic.v0.4.3
```

## Implemented source-secure subset

### Bonification through overcoming

Rule:

```text
benefic in superior/right-hand position
+ sign-based trine or square
→ bonification testimony
```

Rule ID:

```text
naf.compound.bonification.overcoming.hellenistic.v1
```

The superior sextile remains relationally positive but is not promoted to a full bonification condition in this v1 because Brennan explicitly notes uncertainty over whether it is sufficiently powerful to count as a full condition.

### Maltreatment through overcoming

Rule:

```text
malefic in superior/right-hand position
+ sign-based square
→ maltreatment testimony
```

The especially forceful superior square remains the already-computed relational `domination` / upon-the-tenth relation.

Rule ID:

```text
naf.compound.maltreatment.overcoming_square.hellenistic.v1
```

### Bonification through sign-based trine

A benefic trining another planet by sign is represented as an independent bonification testimony under Brennan's reconstruction.

Rule ID:

```text
naf.compound.bonification.sign_trine.hellenistic_reconstruction.v1
```

This may overlap a superior-trine overcoming testimony. The overlap is preserved because the mechanisms answer different rule questions; the engine does not deduplicate them into an opaque score.

### Maltreatment through sign-based opposition

A malefic opposing another planet by sign produces a maltreatment testimony.

Rule ID:

```text
naf.compound.maltreatment.sign_opposition.hellenistic.v1
```

### Degree-based ray enclosure

The executable enclosure subset is the explicit seven-degree ray form:

```text
benefic rays on opposite sides within 7° → candidate benefic enclosure
malefic rays on opposite sides within 7° → candidate malefic enclosure
```

The v1 implementation uses exact major rays at:

```text
60° 90° 120° 180°
```

and requires the two enclosers to be distinct planets:

```text
Venus + Jupiter → benefic enclosure
Mars + Saturn   → malefic enclosure
```

A third classical planet can break the enclosure through **intervention** by either:

- bodily placement in the intervening degree-space; or
- a degree-based ray cast into the intervening degree-space.

An intervened enclosure remains in the audit state as `intervened`; it does not generate a bonification/maltreatment testimony.

Rule ID:

```text
naf.compound.enclosure.ray.seven_degree.hellenistic.v1
```

### Sect qualifier

Sect does not create or remove the underlying testimony. It qualifies the acting benefic/malefic categorically:

```text
bonific benefic in sect       → amplified
bonific benefic out of sect   → restrained
malefic contrary to sect      → amplified maltreatment
malefic of sect               → restrained maltreatment
```

No numerical multiplier is applied.

Rule ID:

```text
naf.compound.qualifier.sect.benefic_malefic.hellenistic.v1
```

### Reception qualifier

For compound conditions involving a configured pair, existing domicile reception is consumed from v0.4.2 rather than recalculated.

```text
maltreatment + reception → mitigates_maltreatment
bonification + reception → enhances_bonification
```

The underlying testimony remains present.

The historical caveat is retained: Brennan treats formal reception as an early Medieval doctrine with roots/precedents in the Hellenistic material. The rule therefore carries a bridge identifier rather than being mislabeled as an uncontested Hellenistic technical definition.

Rule ID:

```text
naf.compound.qualifier.reception.mitigation.hellenistic_medieval_bridge.v1
```

## Explicitly deferred variants

### Counteraction

Deferred for a separate source lock. Counteraction depends on a sufficiently explicit executable definition of the ruler being well- versus poorly-situated. v0.4.3 does not smuggle a hidden planetary-quality score into that predicate.

### Bodily enclosure

Deferred because Brennan notes uncertainty around the bodily-enclosure degree range and sign-boundary assumptions.

### Sign-based containment

Deferred as a separate rule from degree-based enclosure. The two historical concepts are not silently merged.

### Adherence

Deferred because the surviving definitions leave material ambiguity about which planet must apply in order for the condition to hold.

### Striking with a ray

Deferred because directionality, degree range, and application/perfection requirements admit multiple reconstructions in the surviving material.

### Engagement

Deferred until a stronger motion/perfection contract is available. The general three-degree application rule also has a distinct larger lunar range in the source tradition, which should be modeled explicitly rather than approximated.

## Compound-condition state model

Per classical planet:

```text
bonifications_received[]
maltreatments_received[]
bonifications_given[]
maltreatments_given[]
enclosure_states[]
presence = none | bonification_present | maltreatment_present | mixed
```

`presence` is categorical bookkeeping. It is not a strength/quality scale.

## Reusable Condition Signature

The v0.4.3 condition signature carries primitive, relational, and compound categories together. New compound tokens include:

```text
bonified by
maltreated by
compound state
enclosure
```

This means any future projection can carry the same condition identity without inventing its own simplified strength representation.

## Derivation Walker

`naf.integrity.derivation_walker.v0.4.3` now indexes:

```text
analysis ledger
primitive condition ledger
relational condition ledger
compound condition ledger
House River derivations
extra future objects
```

A compound testimony can therefore resolve backward through:

```text
compound testimony
→ sect qualifier / reception qualifier
→ relational condition edge where applicable
→ primitive condition facts
→ chart coordinate / rule dependencies
```

Unindexed historical dependencies remain explicitly marked `external_or_unindexed_dependency`.

## Browser projection

Candidate surface:

```text
prototype/v043.html
```

It embeds the complete v0.4.2 application:

```text
v0.4.3 Compound Condition
└── v0.4.2 Relational Condition
    └── v0.4.1.3 Resonance Field
        └── v0.4.1.2c Structure & Analysis
            └── deterministic visual core
```

Tabs:

```text
Existing Atlas
Compound Condition
Compound Map
Proof Walker
Source Boundary
```

The wrapper recursively locates the existing serialized chart state. It does not calculate astronomy or reimplement the natal kernel.

## Compound Map semantics

The map is categorical:

- bonification edge = source-defined bonification testimony;
- maltreatment edge = source-defined maltreatment testimony;
- dashed edge = enclosure testimony involving a two-agent geometry;
- selecting a planet filters the displayed testimonies involving it.

Line count, width, layout, or visual density are not interpreted as magnitude or strength.

## Regression fixtures

The v0.4.3 smoke suite includes:

1. malefic superior-square maltreatment with reception mitigation and sect qualification;
2. benefic superior-trine + independent sign-trine bonification;
3. malefic sign-opposition maltreatment;
4. active benefic seven-degree ray enclosure;
5. bodily intervention breaking the same enclosure;
6. active malefic seven-degree ray enclosure;
7. a mixed target simultaneously receiving bonification and maltreatment;
8. derivation walking from compound testimony into its relational dependency;
9. a structural guard against numeric `score` / `strength` fields.

## Epistemic boundary

Compound condition is an astrological rule layer derived from a selected historical reconstruction. The software can establish whether a chart satisfies the encoded rule; it does not thereby establish empirical causation, physical force, medical outcome, or inevitable fate.

The engineering requirement remains:

> **Calculation before narration. Distinction before aggregation. Proof before authority.**

## Next work after promotion

Do not advance to Life Spectrum merely because v0.4.3 exists.

The next natal-depth decisions should be made explicitly. Candidates include:

- source-locking counteraction without introducing hidden quality scores;
- a stronger motion/perfection model for engagement/adherence/striking with a ray;
- condition-aware house/ruler synthesis using the complete primitive + relational + compound signature;
- null-model work for graph research;
- only then deciding whether natal condition is sufficiently mature for v0.5 temporal activation.
