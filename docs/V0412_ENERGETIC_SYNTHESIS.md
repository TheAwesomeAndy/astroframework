# Noetic Atlas v0.4.1.2 — Energetic Whole-Chart Synthesis

## 1. Purpose

v0.4.1.2 changes the public reading layer from a technical graph explanation into a whole-chart energetic synthesis intended to be understandable by a non-specialist while remaining auditable.

Current operational browser surface:

```text
prototype/v0412c.html
```

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

The graph is evidence. The metric is evidence. Primitive condition is evidence. None of them alone is the final reading.

User-facing sequence:

```text
archetypal current
→ actual zodiacal sign / modal-elemental style
→ actual Whole Sign house / lived field
→ optional modern natural-house resonance
→ traditional sign ruler / dispositor routing
→ aspect geometry
→ graph topology
→ primitive traditional condition where applicable
→ balanced / depleted / excessive expression
→ material-life expression
→ soul/spirit inquiry
→ possible embodiment experiments
→ proof
```

Every displayed interpretation remains `interpretive-inference` downstream of deterministic coordinates/rules.

## 2. Current modules

```text
src/interpretation/astrological-analysis-engine.mjs
src/interpretation/energetic-synthesis-engine.mjs
src/interpretation/energetic-synthesis-display.mjs
```

Current model IDs:

```text
naf.interpretation.energetic_synthesis.v0.4.1.2
naf.interpretation.natural_house_overlay.modern.v1
```

## 3. v0412c operational contract

The current wrapper supersedes the earlier v0412/v0412b public surfaces.

It embeds the graph-first core:

```text
prototype/index.html?build=v0412c-core
```

and adds a downstream analysis dock without duplicating chart calculation.

v0412c guarantees:

1. **Immediate visible startup state.** The default Analysis pane is never intentionally blank while the core iframe loads.
2. **Automatic canonical bootstrap.** The canonical specimen is loaded for the initial demonstration so the user sees a working analysis without manual setup.
3. **Core-state consumption.** The wrapper reads the serialized JSON produced by `prototype/index.html`.
4. **Automatic resynchronization.** `MutationObserver` watches the core JSON/status so recalculation or pasted chart input updates downstream analysis.
5. **Explicit error state.** Failure to read/synthesize chart state produces a visible error rather than an empty pane.
6. **Layer isolation.** The visual core remains available if downstream synthesis fails.
7. **Current public entry contract.** Root `index.html` redirects to v0412c with cache-busting.

Current right-hand hierarchy:

```text
Energetic Analysis
Graph Findings
Metrics
Condition
Integrity
```

## 4. Energy language

The public analysis deliberately uses energy, current, field, resonance, compression, expansion, permeability, friction, coherence, and related language because it provides an intuitive model of interacting astrological functions.

This language is **symbolic and phenomenological**.

Noetic Atlas does not claim that a natal placement/aspect has been demonstrated to emit a measured physical force, frequency, voltage, field, or energy density.

The interpretive model may be spiritually meaningful without being mislabeled as experimental physics.

## 5. Placement synthesis

For point `P` in sign `S` and Whole Sign house `H`:

```text
P = what symbolic/archetypal current?
S = how does that current move/organize?
H = where does that current repeatedly become lived?
```

Actual sign and actual Whole Sign house remain primary.

## 6. Modern natural-house overlay

Secondary optional correspondence:

```text
1H Aries/Mars
2H Taurus/Venus
3H Gemini/Mercury
4H Cancer/Moon
5H Leo/Sun
6H Virgo/Mercury
7H Libra/Venus
8H Scorpio/Mars (+ Pluto modern)
9H Sagittarius/Jupiter
10H Capricorn/Saturn
11H Aquarius/Saturn (+ Uranus modern)
12H Pisces/Jupiter (+ Neptune modern)
```

This is not presented as universal Hellenistic doctrine and never replaces the actual sign on the actual house.

## 7. House rulers are mandatory

A placement is not interpreted as a sealed paragraph.

```text
placement
→ ruler of its sign
→ ruler of that ruler's sign
→ ...
→ terminal SCC / terminal planet
```

The houses occupied by routed planets translate dependency topology into concrete life fields.

Example canonical structure:

```text
Mercury in Libra, 3H
↔
Venus in Virgo, 2H
```

The graph proves the terminal SCC under traditional domicile rulers. The downstream reading may ask how 3H communication/knowledge and 2H value/resources repeatedly feed one another.

## 8. Translating graph theory

### Terminal basin

Technical statement:

```text
7/7 classical planets route to the Mercury ↔ Venus terminal SCC.
```

Readable translation must then identify:

- Mercury/Venus functions;
- actual signs/houses;
- primitive condition;
- upstream ruler paths;
- concrete house fields;
- limits of the claim.

Terminality is not automatically “strongest planet” or “soul center.”

### Nonterminal bottleneck

If multiple ruler routes pass through Mars before terminal entry, `bottleneck` is the graph property. The downstream interpretation may describe a recurring martial handoff/gate in Mars's actual sign/house.

### Articulation/bridge structures

Aspect-graph articulation points/bridges can describe literal graph connectors. Their astrological meaning remains a hypothesis, not a mathematical consequence.

## 9. Primitive condition in interpretation

For classical planets the synthesis may incorporate:

- domicile/adversity;
- exaltation/depression;
- triplicity;
- Egyptian bound;
- sect relation;
- Whole-Sign angular-triad class.

These qualify the placement/routing interpretation but are not collapsed into one strength score.

Relational/compound condition is still pending.

## 10. Balanced, depleted, excessive expression

Every major archetypal analysis should distinguish:

```text
balanced / proportionate
under-expression / depletion
over-expression / excess
```

This prevents an archetype from becoming a simplistic command to express more of itself.

These are interpretive ranges, not measured physiological energy states.

## 11. Material-life translation

The reading should answer:

- Where might this become visible in ordinary life?
- Which actual houses/domains are involved?
- What skills/resources might be available?
- What does depletion look like?
- What does excess look like?
- What small experiment could let the user compare the hypothesis with lived experience?

Material examples are downstream manifestations, not the definition of the placement.

## 12. Soul/spirit inquiry

Soul/spirit language is exploratory rather than metaphysical certainty.

Preferred form:

```text
What does this configuration ask you to investigate about coordinating X and Y?
```

Avoid converting symbolic interpretation into an unqualified claim that the soul definitively chose a specific event or condition.

## 13. Outer planets

Uranus, Neptune, and Pluto participate in modern/transpersonal interpretation through actual sign, Whole Sign house, aspects, graph context, and interpretation profiles.

They do **not** inherit classical Hellenistic essential dignity.

```text
outer-planet interpretation = applicable
Hellenistic essential dignity = not_applicable
```

## 14. Ceres profile

Ceres is recognized as `minor_body` when a coordinate is supplied.

Current custom/modern vocabulary:

```text
nourishment
harvest
enoughness
being resourced
receiving support
embodied pleasure
conditions that allow life to grow
```

The profile is not presented as consensus Hellenistic doctrine.

### Current astronomy limitation

The birth-time astronomy adapter calculates Sun through Pluto but does not automatically emit a validated Ceres coordinate.

Noetic Atlas must not invent one.

Current Ceres interpretation activates only from an explicitly supplied/precomputed coordinate through a supported input path.

## 15. Sample-analysis ingestion

Future expert/user-supplied long-form readings may enrich the interpretation corpus but cannot rewrite deterministic calculation.

Reusable fields may include:

```text
archetype definition
healthy/balanced expression
under-expression
over-expression
material domains
skills/resources
vocational possibilities
embodiment practices
warning patterns
metaphors
tradition/source profile
```

Any new rule/correspondence requires a model ID and explicit tradition/profile label before use.

## 16. Integrity requirement

A public analysis card should be reversible through:

```text
interpretive statement
→ interpretation/profile rule(s)
→ placement / house / aspect / graph / condition evidence
→ deterministic ledger object(s)
→ source coordinate(s)
```

The current Integrity pane exposes selected evidence and the full energetic state when needed.

## 17. Current limitations

Still pending:

- relational condition: reception/exchange/overcoming;
- compound condition;
- graph null baselines;
- motif enrichment;
- automatic Ceres astronomy;
- expanded curated interpretation corpus;
- selectable interpretation postures;
- Life Spectrum/time activation;
- external validation of interpretation performance.

## 18. Next depth improvements

Priorities:

1. reception/exchange/overcoming;
2. deeper house-ruler synthesis;
3. condition-aware whole-chart motifs;
4. graph null models;
5. curated interpretation profiles;
6. yoga/Ayurvedic/contemplative practice layer with explicit posture/source labels;
7. validated extended-body astronomy where justified;
8. Life Spectrum.

The goal is not more paragraphs. It is for every paragraph to answer **what is being modeled, how it moves, where it becomes lived, how it can distort, how it can be worked with, and why the system reached that conclusion.**
