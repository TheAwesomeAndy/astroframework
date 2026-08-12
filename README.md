# Noetic Atlas

**An auditable visual-analytics framework for astrological geometry, topology, condition, energetic synthesis, resonance, graph analysis, and time.**

> **See the structure. Follow the flow. Understand the pattern. Show the work.**

Noetic Atlas represents a chart through coordinated views rather than forcing geometry, routing, condition, interpretation, and timing into one wheel.

## Current release

See [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md).

- **Public release:** v0.4.1.3 — Resonance Field
- **Current surface:** `prototype/v0413.html`
- **Preserved Structure & Analysis workspace:** `prototype/v0412c.html`
- **Default/deployed branch:** `main`
- **New model:** `naf.interpretation.house_resonance.v0.4.1.3`

v0.4.1.3 is **additive**. The existing wheel/core, Natal Field, Aspect Matrix, Flow Map, Lots/Sect, Research Lab, Audit ledger, Graph Findings, Metrics, Condition, Energetic Analysis, and Integrity surfaces remain available through the preserved v0412c workspace. The new Resonance Field reads the same serialized chart state; it does not create a second calculator.

## Current representation family

```text
same deterministic chart state
├── natal geometry / wheel / Aspect Matrix
├── dispositor Flow Map + house routing
├── graph findings + metrics
├── primitive traditional condition
├── energetic whole-chart synthesis
├── Resonance Field                    ← v0.4.1.3
└── audit / provenance
```

Core rules:

```text
graph ≠ reading
metric ≠ meaning
natural-house overlay ≠ actual house sign
symbolic-energy language ≠ measured physical energy
new representation ≠ new calculator
```

## v0.4.1.3 Resonance Field

The new view formalizes the comparison between the actual Whole Sign occupying a house and the optional modern natural-house correspondence. It exposes element, mode, actual traditional ruler, ruler placement, occupants, and the chart-wide Whole-Sign phase rotation.

For Whole Sign houses, with Aries indexed as zero and Ascendant sign index `A`:

```text
S_actual(h)  = A + (h - 1) mod 12
S_natural(h) = h - 1
Delta(h)     = A mod 12
```

For the canonical Leo-rising specimen:

```text
rotation: +4 signs / 120°
element preserved: 12 / 12
mode preserved: 0 / 12
phase character: element-preserving / mode-rotating
```

Thus the first-house resonance can be inspected as:

```text
Aries / Cardinal Fire / Mars resonance
→ Leo / Fixed Fire / Sun actual Whole Sign
→ Sun in Libra / 3H as actual ruler context
```

The natural-house layer is secondary and explicitly modern. It never replaces the actual sign, house, ruler, condition, aspects, or graph routing.

See [`docs/V0413_RESONANCE_FIELD.md`](docs/V0413_RESONANCE_FIELD.md).

## Existing deterministic substrate — preserved

- civil birth time + coordinates and IANA/DST resolution;
- Astronomy Engine adapter for Sun through Pluto;
- ASC, MC, velocity/retrograde state, solar altitude and sect;
- tropical zodiac and Whole Sign houses;
- major aspects and applying/separating where motion is available;
- traditional domicile rulership and all-house ruler routes;
- directed dispositor graph, Tarjan SCCs and terminal SCCs;
- seven Paulus/Panaretus Hermetic lots;
- derivation/provenance ledger and tree;
- Natal Field, Aspect Matrix, Flow Map, Lots/Sect, Research Lab and Audit views.

## Primitive condition — preserved

For Sun through Saturn: domicile, adversity, exaltation/depression, triplicity, Egyptian bound, sect family, in/out-of-sect relation, and Whole-Sign angular-triad class. No scalar planet-strength score is produced.

## Graph analytics — preserved

Classical dispositor analytics include SCC condensation, terminal basin, route depth, upstream capture, and nonterminal bottleneck. Aspect analytics include connected components, degree, clustering, normalized unweighted betweenness, articulation points, bridges, typed three-node motifs, Grand Trine/T-square/triple-conjunction templates, and exact ≤1° subsets. Aspect × dispositor overlap remains explicit.

## Energetic synthesis — preserved

```text
archetypal current
→ actual sign
→ actual Whole Sign house
→ optional natural-house resonance
→ ruler/dispositor route
→ aspect geometry
→ graph context
→ traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life examples
→ soul/spirit inquiry
→ evidence / proof
```

Uranus, Neptune, and Pluto remain available to modern/transpersonal interpretation while outside classical Hellenistic dignity applicability. Ceres remains interpretable when a coordinate is supplied; the birth-time astronomy adapter does not yet calculate Ceres automatically.

## Current limitations / next work

Not yet implemented: reception/exchange, overcoming, compound bonification/maltreatment/enclosure, graph null distributions, validated condition-weighted graph research, House River/alluvial routing, full derivation-path walker, motif + condition field geometry, rule-set comparison, Life Spectrum, and production traditional timing modules.

Recommended sequence:

```text
v0.4.2  reception / exchange / overcoming
         condition-qualified Flow Map
         House River / alluvial routing
         derivation-path walker
         motif + condition field geometry
v0.4.3  selected compound condition + condition-aware synthesis
research graph nulls / multilayer baselines
v0.5    Life Spectrum
```

## Tests

```bash
npm install
npm test
python -m http.server 8000
```

Open `http://localhost:8000/prototype/v0413.html`.

The standard suite includes all prior v041–v0412c contracts plus `house_resonance_smoke.mjs` and `v0413_ui_contract_smoke.mjs`, specifically protecting the preserved observatory while testing the additive resonance view.

## Documentation

Start with:

1. [`docs/CURRENT_RELEASE.md`](docs/CURRENT_RELEASE.md)
2. [`docs/V0413_RESONANCE_FIELD.md`](docs/V0413_RESONANCE_FIELD.md)
3. [`docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md`](docs/CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md)
4. [`docs/V0412_ENERGETIC_SYNTHESIS.md`](docs/V0412_ENERGETIC_SYNTHESIS.md)
5. [`docs/CONDITION_ENGINE_SPEC.md`](docs/CONDITION_ENGINE_SPEC.md)
6. [`docs/ROADMAP.md`](docs/ROADMAP.md)
7. [`docs/INDEX.md`](docs/INDEX.md)

Living docs describe current `main`; historical milestone documents remain historical.
