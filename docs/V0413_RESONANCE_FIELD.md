# Noetic Atlas v0.4.1.3 — Resonance Field

## Status

v0.4.1.3 is an **additive representation release**. It does not replace or remove the v0412c observatory, graph analytics, condition engine, energetic synthesis, wheel/core views, audit ledger, or existing interpretation surfaces.

The current public surface is `prototype/v0413.html`. Its **Structure & Analysis** workspace embeds `prototype/v0412c.html` unchanged. The new **Resonance Field** reads the same serialized chart state produced by the existing visual core.

This preservation rule is architectural: new visualizations are projections of the same deterministic state, not replacement calculators.

## New representation family

v0.4.1.3 begins a coordinated-representation architecture:

```text
same deterministic chart state
├── Natal geometry / existing visual core
├── Graph topology / findings / metrics
├── Primitive condition
├── Energetic synthesis
└── Resonance Field  ← new
```

Future House River, aspect-field geometry, relational-condition overlays, derivation walkers, and Life Spectrum views should follow the same rule.

## House Resonance model

Model ID:

```text
naf.interpretation.house_resonance.v0.4.1.3
```

It consumes:

- Ascendant sign;
- Whole Sign house order;
- actual house signs;
- traditional domicile rulers;
- occupants and ruler placements already present in deterministic chart state;
- the separately versioned optional natural-house overlay.

Natural-house model:

```text
naf.interpretation.natural_house_overlay.modern.v1
```

The natural-house overlay is a modern correspondence layer. It is **not** treated as a universal Hellenistic house doctrine and never replaces the actual Whole Sign, actual ruler, traditional place significations, condition, aspects, or graph routing.

## Whole-Sign phase identity

Let signs be indexed Aries = 0 through Pisces = 11. With Ascendant sign index `A`, the actual sign of house `h` is:

```text
S_actual(h) = A + (h - 1) mod 12
```

The natural-house overlay uses:

```text
S_natural(h) = h - 1
```

Therefore the symbolic phase rotation is constant over all houses:

```text
Delta(h) = S_actual(h) - S_natural(h) = A mod 12
```

This identity is specific to Whole Sign houses.

The Resonance Field visualizes that global phase relationship rather than pretending twelve house/sign pairings are mathematically independent.

## Element–Mode Resonance Lattice

The twelve signs are displayed as a 4 × 3 lattice:

| Element | Cardinal | Fixed | Mutable |
|---|---|---|---|
| Fire | Aries | Leo | Sagittarius |
| Earth | Capricorn | Taurus | Virgo |
| Air | Libra | Aquarius | Gemini |
| Water | Cancer | Scorpio | Pisces |

For a selected house:

- cyan inset = natural-house resonance;
- gold outline = actual Whole Sign;
- both marks can coexist if the two layers coincide.

The purpose is to make elemental continuity/change and modal continuity/rotation immediately perceptible.

## Canonical Leo-rising phase signature

For `NAF-CANON-0001`, the Ascendant is Leo. Leo has sign index 4, therefore:

```text
rotation = +4 signs = 120°
```

Across all twelve houses:

```text
element preserved: 12 / 12
mode preserved:     0 / 12
```

So the optional natural-house overlay has the global symbolic signature:

```text
element-preserving / mode-rotating
```

Examples:

```text
1H:  Aries       Cardinal Fire → Leo         Fixed Fire
2H:  Taurus      Fixed Earth   → Virgo       Mutable Earth
3H:  Gemini      Mutable Air   → Libra       Cardinal Air
4H:  Cancer      Cardinal Water→ Scorpio     Fixed Water
5H:  Leo         Fixed Fire    → Sagittarius Mutable Fire
11H: Aquarius    Fixed Air     → Gemini      Mutable Air
```

For the 1st house the representation therefore distinguishes:

```text
house domain: embodiment / identity / autonomy
natural resonance: Aries / Mars / Cardinal Fire
actual Whole Sign: Leo / Sun / Fixed Fire
actual house ruler: Sun
actual ruler placement: Libra / 3H in the canonical specimen
```

The actual ruler pathway remains primary astrological structure. The Aries resonance is a secondary phenomenological comparison layer.

## Why this is useful

Graphs answer connectivity, routing, convergence, motifs, and network structure.

The Resonance Field answers a different question:

> What qualitative elemental/modal transformation exists between the optional natural-house archetype of a life domain and the actual Whole Sign field occupying that domain?

This is not a replacement for the graph. It is a complementary projection.

## Epistemic status

The following are deterministic within the selected model:

- Ascendant sign;
- Whole Sign house sequence;
- actual house signs;
- traditional rulers;
- ruler placements;
- occupants;
- the constant rotation identity once the optional natural-house correspondence is selected.

The following remain interpretive:

- treating the natural-house zodiac as a useful phenomenological overlay;
- describing elements/modes as symbolic energetic media/motions;
- soul/spirit language derived from those correspondences.

Energy/current/field vocabulary is symbolic and phenomenological. It is not a claim of experimentally measured physical energy.

## Preservation contract

v0.4.1.3 must not regress any existing v0412c surface. CI therefore runs all prior contracts plus:

```text
house_resonance_smoke.mjs
v0413_ui_contract_smoke.mjs
```

The v0413 contract explicitly requires the new public shell to retain `v0412c.html` as the Structure & Analysis workspace.

## Next visualization sequence

The recommended representation sequence remains:

1. relational condition: reception/exchange + overcoming;
2. condition-qualified Flow Map;
3. House River / alluvial routing view;
4. derivation-path walker;
5. motif + condition field geometry;
6. side-by-side rule-set comparison;
7. Life Spectrum only after relational/compound condition and temporal semantics are stable.

The Resonance Field may deepen in parallel because it consumes existing chart state rather than changing deterministic astrological rules.
