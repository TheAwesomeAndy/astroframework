# Noetic Atlas — v0.4.1.2c Release Contract (Historical)

This file preserves the complete release contract that was current immediately before v0.4.1.3. It is retained so the additive Resonance Field release does not erase prior implementation history.

## Public release at that milestone

- **Release:** v0.4.1.2 — Energetic Whole-Chart Synthesis
- **Deployed branch:** `main`
- **Public Pages entry:** repository root `index.html`
- **Current browser surface at that milestone:** `prototype/v0412c.html`
- **Visual core embedded by the surface:** `prototype/index.html`
- **Primary interpretation model:** `naf.interpretation.energetic_synthesis.v0.4.1.2`
- **Natural-house overlay:** `naf.interpretation.natural_house_overlay.modern.v1`
- **Graph model:** `naf.research.graph_analytics.v0.4.1`
- **Primitive condition model:** `naf.condition.primitive.hellenistic.v0.4.0b`
- **Condition schema:** `naf.condition.record.v0.4.0a`
- **Minimum deterministic analysis envelope:** `naf.analysis.v0.3.1`

## What v0412c changed operationally

`prototype/v0412c.html` exists because the earlier v0412/v0412b surfaces could display an empty Analysis pane while the underlying chart core was still usable.

The surface:

1. renders a visible loading state immediately;
2. loads the canonical specimen automatically for the initial demonstration;
3. reads the serialized chart state produced by `prototype/index.html` rather than maintaining a second chart calculator;
4. computes primitive condition, graph analytics, and energetic synthesis from that chart state;
5. attaches `MutationObserver` listeners to chart JSON/status so recalculation or pasted input resynchronizes the analysis dock;
6. exposes explicit error states when the synthesis bridge cannot initialize;
7. keeps the visual core available even if the downstream interpretation layer fails;
8. uses a cache-busted root redirect.

Analysis hierarchy:

```text
Energetic Analysis
Graph Findings
Metrics
Condition
Integrity
```

## Implemented deterministic substrate

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

For Sun through Saturn:

- domicile;
- adversity/opposite domicile;
- sign-level exaltation;
- sign-level depression/fall;
- standard/Dorothean triplicity participation and active sect ruler;
- Egyptian bound/term under `[start,end)` intervals;
- planetary sect family;
- in-sect/out-of-sect relation;
- Whole-Sign angular-triad class.

No opaque scalar planet-strength score is produced.

## Graph analytics

Classical dispositor graph:

- SCC condensation;
- terminal basin membership/fraction;
- route depth to terminal SCC;
- upstream route capture;
- largest nonterminal path bottleneck.

Aspect graph:

- connected components;
- degree;
- local/mean clustering;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- typed closed three-node motifs;
- Grand Trine, T-square, and triple-conjunction templates;
- exact ≤1° subset.

Cross-layer:

```text
E_aspect ∩ E_dispositor
```

## Interpretation layer

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

Uranus, Neptune, and Pluto participate in modern/transpersonal interpretation while remaining outside classical Hellenistic dignity applicability.

Ceres is recognized as a `minor_body` for interpretation when a coordinate is supplied. The astronomy adapter does not automatically calculate a validated Ceres position.

Energy/current/field language is symbolic/phenomenological rather than a claim of experimentally measured physical force.

## Limitations at that milestone

Not yet implemented or validated:

- automatic validated Ceres/small-body astronomy;
- Chiron, node variants, Lilith/apogee variants, Vertex, and fixed-star calculation in the birth-time adapter;
- independent professional-grade cross-provider astronomy validation corpus;
- reception/exchange graph;
- overcoming graph;
- bonification/maltreatment, enclosure, and selected mitigation;
- degree-based quadrant dynamic strength;
- graph null distributions and statistical motif enrichment;
- condition-weighted graph research validated against baselines;
- Life Spectrum temporal activation;
- annual profections/zodiacal releasing production modules;
- externally validated predictive or psychological superiority.

## Next sequence at that milestone

```text
v0.4.2  relational condition: reception / exchange / overcoming
v0.4.3  selected compound condition + condition-aware synthesis experiments
research graph nulls / motif enrichment / multilayer baselines
extended-body astronomy where justified and validated
v0.5    Life Spectrum
v0.6    traditional timing systems
v0.7    recurrence / Life Space research
```
