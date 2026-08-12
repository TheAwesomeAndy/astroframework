# Noetic Atlas — Current Release Contract

This file is the canonical human-readable release contract for the living documentation. Historical milestone documents describe the release named in their title and are not rewritten to impersonate the present.

## Public release

- **Release:** v0.4.1.3 — Resonance Field
- **Deployed branch:** `main`
- **Public Pages entry:** repository root `index.html`
- **Current browser surface:** `prototype/v0413.html`
- **Preserved Structure & Analysis workspace:** `prototype/v0412c.html`
- **Visual core beneath the preserved workspace:** `prototype/index.html`
- **House resonance model:** `naf.interpretation.house_resonance.v0.4.1.3`
- **Primary energetic synthesis model:** `naf.interpretation.energetic_synthesis.v0.4.1.2`
- **Natural-house overlay:** `naf.interpretation.natural_house_overlay.modern.v1`
- **Graph model:** `naf.research.graph_analytics.v0.4.1`
- **Primitive condition model:** `naf.condition.primitive.hellenistic.v0.4.0b`
- **Condition schema:** `naf.condition.record.v0.4.0a`
- **Minimum deterministic analysis envelope:** `naf.analysis.v0.3.1`

The package version remains an implementation/package identifier and is not the public UI release number.

## Additive preservation contract

v0.4.1.3 is a representation-layer release. It **does not replace** the existing wheel/core views, Natal Field, Aspect Matrix, Flow Map, Lots/Sect, Research Lab, Audit ledger, graph findings, metrics, condition inspector, energetic analysis, or integrity proof surfaces.

The public `prototype/v0413.html` shell has two coordinated workspaces:

```text
Structure & Analysis → embeds v0412c unchanged
Resonance Field      → reads the same serialized chart state
```

This is the governing representation rule going forward: new views project the same deterministic state rather than creating parallel calculators.

## v0.4.1.3 Resonance Field

The new view adds:

- Whole-Sign Ascensional Phase Map;
- Element–Mode Resonance Lattice;
- 12-house natural-resonance ↔ actual-sign comparison;
- traditional actual-house ruler and ruler-placement context;
- house occupants;
- global rotation summary;
- explicit preserved/changed element and mode relations;
- synchronized updates from the existing chart core.

For Whole Sign houses, if Aries = 0 and the Ascendant sign index is `A`:

```text
S_actual(h)  = A + (h - 1) mod 12
S_natural(h) = h - 1
Delta(h)     = A mod 12
```

So the natural-house overlay and the actual Whole Sign zodiac differ by one constant chart-wide phase rotation.

For the canonical Leo-rising specimen:

```text
rotation: +4 signs / 120°
element preserved: 12/12
mode preserved: 0/12
phase character: element-preserving / mode-rotating
```

The 1st-house comparison is therefore:

```text
Aries / Cardinal Fire / Mars resonance
→ Leo / Fixed Fire / Sun actual Whole Sign
→ actual ruler Sun in Libra / 3H
```

The optional Aries resonance never replaces Leo, the Sun, the 1st-place doctrine, condition, aspects, or routing.

## Implemented deterministic substrate

Current supported foundations include:

- local civil date/time and observer coordinates;
- historical time-zone/DST resolution with ambiguity handling;
- Astronomy Engine 2.1.19 adapter for Sun through Pluto;
- geocentric ecliptic longitude and longitudinal motion/retrograde state;
- independently solved ASC and MC;
- geometric solar altitude for sect;
- tropical zodiac;
- Whole Sign houses;
- major aspects under a named orb policy;
- applying/separating when motion is available;
- traditional domicile rulership;
- directed dispositor graph;
- Tarjan SCC and terminal-SCC derivation;
- all-house ruler routes;
- seven Paulus/Panaretus Hermetic lots with sect reversal;
- derivation ledger/tree and completeness/provenance metadata.

## Primitive traditional condition

For Sun through Saturn the engine computes independent, auditable domicile/adversity, exaltation/depression, triplicity, Egyptian bounds, planetary sect family, in/out-of-sect relation, and Whole-Sign angular-triad class. No opaque scalar planet-strength score is produced.

## Graph analytics

The classical dispositor graph includes SCC condensation, terminal basin membership/fraction, route depth, upstream route capture, and largest nonterminal path bottleneck. The aspect graph includes connected components, degree, clustering, normalized unweighted betweenness, articulation points, bridges, typed closed three-node motifs, Grand Trine/T-square/triple-conjunction templates, and an exact ≤1° subset. Aspect × dispositor overlap is explicitly retained as a cross-layer comparison.

## Interpretation layer

The energetic synthesis remains:

```text
coordinate / placement
→ archetypal current
→ actual zodiacal sign
→ actual Whole Sign house
→ optional labeled natural-house resonance
→ sign ruler / dispositor route
→ aspect geometry
→ graph context
→ primitive traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life examples
→ soul/spirit inquiry
→ evidence / proof
```

Uranus, Neptune, and Pluto participate in modern/transpersonal interpretation while remaining outside classical Hellenistic dignity applicability. Ceres is recognized as a `minor_body` for interpretation when a coordinate is supplied; the current astronomy adapter does not automatically calculate a validated Ceres position.

Energy/current/field language remains symbolic/phenomenological rather than a claim of experimentally measured physical force.

## Current limitations

Not yet implemented or validated:

- automatic validated Ceres/small-body astronomy;
- full Chiron/node/Lilith/Vertex/fixed-star birth-time calculation;
- independent professional-grade cross-provider astronomy validation corpus;
- reception/exchange graph;
- overcoming graph;
- bonification/maltreatment, enclosure, and selected mitigation;
- degree-based quadrant dynamic strength;
- graph null distributions and statistical motif enrichment;
- validated condition-weighted graph research;
- House River/alluvial routing view;
- full derivation-path walker interaction;
- motif + condition field-geometry view;
- side-by-side rule-set comparison;
- Life Spectrum temporal activation;
- production annual profections/zodiacal releasing;
- externally validated predictive or psychological superiority.

## Current next sequence

```text
v0.4.2  relational condition: reception / exchange / overcoming
condition-qualified Flow Map
House River / alluvial routing
derivation-path walker
motif + condition field geometry
v0.4.3  selected compound condition + condition-aware synthesis experiments
research graph nulls / multilayer baselines
v0.5    Life Spectrum
```

Interpretive and representation-depth work may proceed in parallel so long as it consumes rather than rewrites deterministic state.

## Documentation rule

Living docs must agree with this release contract and implementation. A disagreement between implementation and current documentation is a defect.
