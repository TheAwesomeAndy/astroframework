# Noetic Atlas v0.3 Closeout and v0.4 Entry Criteria

## Purpose

This document incorporates the formal review of `noetic-atlas-v0.3` and converts that review into engineering gates. It is not a retrospective celebration. It defines what v0.3 has legitimately established, what it has not established, and what must be completed before the project is allowed to claim the next level of capability.

## What v0.3 legitimately establishes

v0.3 crosses the project from specimen-driven visualization into a deterministic computational instrument.

The implemented chain is:

```text
civil birth input or imported placements
→ time-zone resolution where applicable
→ astronomy adapter where applicable
→ absolute longitude / velocity / angles
→ whole-sign places
→ major aspects under an explicit orb policy
→ traditional domicile dispositors
→ directed graph topology
→ sect
→ Paulus/Panaretus Hermetic lots
→ derivation ledger
→ exploratory structural descriptors
→ visualization
```

The release therefore satisfies the original v0.3 gate:

> A displayed structural claim can be traced backward to explicit inputs and a deterministic rule or algorithm.

This does **not** mean that the natal model is complete, that the astronomy layer is fully validated, or that exploratory descriptors have established astrological meaning.

## Strengths to preserve as invariants

The following are now architectural invariants:

1. Civil time, astronomy, astrological rules, graph mathematics, research descriptors, visualization, and interpretation remain separate layers.
2. Ambiguous or nonexistent civil times are surfaced rather than guessed.
3. Topological results such as terminal SCCs are discovered by graph algorithms rather than asserted from known example charts.
4. Sect-reversing lots preserve formula family, sect, numerical inputs, result, and source provenance.
5. Unsupported astronomical objects remain explicitly unsupported until a documented provider or algorithm exists.
6. Research descriptors are labeled exploratory and are never silently promoted into interpretation.
7. CI must continue to reproduce the canonical integrity fixture on every push.
8. Every serialized integrity analysis carries a schema ID and independently versioned calculation/rule identifiers.

## Remaining v0.3 integrity gaps

### 1. Traditional condition is incomplete

The current model knows **where** planets are and **how** they are connected. It does not yet know enough about the traditional quality and hierarchy of those placements.

Missing or incomplete condition layers include:

- domicile/exaltation/depression/adversity state;
- sect-aware triplicity rulership;
- bounds/terms;
- angularity and dynamic strength;
- reception and exchange;
- superior/inferior or overcoming geometry;
- enclosure;
- engagement/adherence/striking with a ray where selected;
- bonification and maltreatment;
- mitigating conditions.

The review is correct that a chart can be topologically rich while still being condition-blind.

### 2. Astronomy coverage and independent validation remain incomplete

The open adapter currently prioritizes a transparent research implementation over exhaustive astrological object coverage.

The following remain incomplete:

- true lunar node;
- mean lunar node;
- Chiron;
- Black Moon Lilith / lunar apogee under an explicit definition;
- Vertex;
- fixed stars;
- cross-provider validation against an independent high-precision reference.

These are not to be added through undocumented approximations.

### 3. Derivation data exist before the derivation user experience

The serialized analysis now includes both:

```text
derivation_ledger
derivation_tree
```

The tree organizes dependencies such as coordinates → houses/sect → lots, coordinates → aspects, and dispositors → SCC topology. This closes the data-model gap, but the prototype still needs a first-class navigable "Show your work" interface.

### 4. Research descriptors are substrate-limited

The pattern engine remains useful as a mathematical laboratory, but v0.3 now marks:

```text
promotion_status = hold
condition_engine_complete = false
temporal_engine_complete = false
```

No exploratory descriptor is eligible to become a consumer-facing strength, fate, prediction, psychological, or spiritual claim while those substrate layers remain incomplete and null-model validation has not been performed.

### 5. Visualization is behind the calculation layer

The v0.3 visual grammar still emphasizes aspect topology and ruler flow. It does not yet visually encode:

- planetary condition;
- reception;
- lot derivation;
- condition-aware routing;
- provenance depth;
- uncertainty/unsupported status.

This becomes part of the v0.4 deliverable rather than a cosmetic follow-up.

### 6. Boundary testing remains a release gate

The current test suite is useful but not exhaustive. Required boundary families include:

- 0°/360° normalization and wraparound;
- exact aspect perfection and orb threshold ± epsilon;
- retrograde-to-direct and direct-to-retrograde station neighborhoods;
- near-zero longitudinal velocity;
- near-horizon sect;
- extreme geographic latitude;
- DST gaps and repeated hours;
- historical time-zone transitions;
- multiple named orb policies;
- exact sign and bound transitions;
- condition-rule boundary degrees.

## Frozen minimum serialization envelope

The minimum integrity envelope is now versioned as:

```text
naf.analysis.v0.3.1
```

See:

```text
schemas/naf-analysis-v0.3.1.schema.json
```

The schema does not freeze every inner field permanently. It freezes the minimum requirement that an analysis identify:

- schema version;
- kernel version;
- rule/provider versions;
- model configuration;
- angles;
- objects;
- aspects;
- topology;
- validation;
- explicit completeness state;
- provenance.

This allows internal structures to evolve without weakening reproducibility.

## v0.4 entry criterion

v0.4 begins only when the next work is explicitly treated as a **condition engine**, not as a generic feature expansion.

The v0.4 engineering question is:

> Given a deterministic natal structure, what is the traditional condition of each planet and each relevant interplanetary relation under a named, source-controlled Hellenistic rule set?

The answer must remain decomposed. No single hidden "planet strength" number is allowed to replace the underlying conditions.

## v0.4 exit criterion

A v0.4 analysis should allow an expert to select any classical planet and reconstruct, from structured data and provenance:

1. zodiacal placement and whole-sign place;
2. domicile and exaltation status;
3. depression/adversity status where applicable;
4. triplicity rulers under the selected scheme and sect;
5. bound/term ruler under the selected table;
6. angularity/dynamic-strength classification;
7. receptions/exchanges involving the planet;
8. superior/inferior or overcoming configurations;
9. relevant bonification/maltreatment conditions;
10. mitigating conditions;
11. the precise rule ID and source reference for every item.

Only after that condition object is stable should transit activation or timing be allowed to use condition-sensitive weighting.

## Sequence after v0.4

```text
v0.3  deterministic structure + integrity
  ↓
v0.4  condition engine
  ↓
v0.5  minimal provenance-backed Life Spectrum
  ↓
annual profections / traditional timing
  ↓
research expansion and conversational observatory
```

This order is intentional. Time should activate a richly characterized natal field, not a structurally incomplete one.
