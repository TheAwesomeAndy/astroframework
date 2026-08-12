# Noetic Atlas — Current Release Contract

This file is the canonical human-readable release contract for the living documentation. Historical milestone documents describe the release named in their title and are not rewritten to impersonate the present.

## Public release

- **Release:** v0.4.1.2 — Energetic Whole-Chart Synthesis
- **Deployed branch:** `main`
- **Public Pages entry:** repository root `index.html`
- **Current browser surface:** `prototype/v0412c.html`
- **Visual core embedded by the current surface:** `prototype/index.html`
- **Primary interpretation model:** `naf.interpretation.energetic_synthesis.v0.4.1.2`
- **Natural-house overlay:** `naf.interpretation.natural_house_overlay.modern.v1`
- **Graph model:** `naf.research.graph_analytics.v0.4.1`
- **Primitive condition model:** `naf.condition.primitive.hellenistic.v0.4.0b`
- **Condition schema:** `naf.condition.record.v0.4.0a`
- **Minimum deterministic analysis envelope:** `naf.analysis.v0.3.1`

The package version remains an implementation/package identifier and is not the public UI release number.

## What v0412c changed operationally

`prototype/v0412c.html` is the current v0.4.1.2 browser wrapper. It exists because the earlier v0412/v0412b surfaces could display an empty Analysis pane while the underlying chart core was still usable.

The current surface:

1. renders a visible loading state immediately;
2. loads the canonical specimen automatically for the initial demonstration;
3. reads the serialized chart state produced by `prototype/index.html` rather than maintaining a second chart calculator;
4. computes primitive condition, graph analytics, and energetic synthesis from that chart state;
5. attaches `MutationObserver` listeners to chart JSON/status so recalculation or pasted input resynchronizes the analysis dock;
6. exposes explicit error states when the synthesis bridge cannot initialize;
7. keeps the visual core available even if the downstream interpretation layer fails;
8. uses a cache-busted root redirect so the public entry contract points to the current wrapper.

Current right-hand analysis hierarchy:

```text
Energetic Analysis
Graph Findings
Metrics
Condition
Integrity
```

The hierarchy is deliberate:

```text
reading ≠ graph finding ≠ metric ≠ traditional condition ≠ proof
```

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

For Sun through Saturn the current engine computes independent, auditable factors:

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

### Classical dispositor functional graph

Current graph derivations include:

- SCC condensation;
- terminal basin membership/fraction;
- route depth to terminal SCC;
- upstream route capture;
- largest nonterminal path bottleneck.

### Aspect graph

Current calculations include:

- connected components;
- degree;
- local/mean clustering;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- typed closed three-node motifs;
- Grand Trine, T-square, and triple-conjunction templates;
- exact ≤1° subset.

### Cross-layer

Current explicit overlap calculation:

```text
E_aspect ∩ E_dispositor
```

Relation layers are not collapsed into one opaque connection score.

## Interpretation layer

The current synthesis pipeline is:

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

Ceres is recognized as a `minor_body` for interpretation when a coordinate is supplied. The current astronomy adapter does **not** automatically calculate a validated Ceres position.

Energy/current/field language is an explicitly symbolic/phenomenological interpretive model, not a claim that astrology has been experimentally shown to operate through measurable physical energies or forces.

## Current limitations

Not yet implemented or validated:

- automatic validated Ceres/small-body astronomy;
- Chiron, node variants, Lilith/apogee variants, Vertex, and fixed-star calculation in the current birth-time adapter;
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

## Current next sequence

```text
v0.4.2  relational condition: reception / exchange / overcoming
v0.4.3  selected compound condition + condition-aware synthesis experiments
research graph nulls / motif enrichment / multilayer baselines
extended-body astronomy where justified and validated
v0.5    Life Spectrum
v0.6    traditional timing systems
v0.7    recurrence / Life Space research
```

Interpretive-depth work may proceed in parallel so long as it consumes, rather than rewrites, deterministic state.

## Documentation rule

Living docs must agree with this release contract and with implementation. A disagreement between implementation and current documentation is a defect.

Historical milestone documents are intentionally historical. They should state the status of their own release and be linked from `docs/INDEX.md` as such.
