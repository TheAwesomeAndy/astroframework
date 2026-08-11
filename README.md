# Noetic Atlas

**A visual analytics system for astrological structure and temporal dynamics.**

> **See the structure. Follow the flow. Watch it change.**

Noetic Atlas is an experimental computational framework for representing astrology as a **high-dimensional relational dynamical system** rather than forcing every astrological relationship into a conventional circular chart.

The repository begins with one canonical natal chart and one inspectable browser prototype. The purpose of v0.1 is not to replace the horoscope wheel, predict life events, or claim a physical mechanism for astrology. The purpose is to establish a rigorous data model and visual grammar that can make astrological structure easier to inspect, compare, teach, and eventually explore through time.

The underlying research framework is the **Noetic Atlas Framework (NAF)**.

---

## 1. Product identity

### Product

**Noetic Atlas**

### Framework

**Noetic Atlas Framework (NAF)**

### Category

**Astrological visual analytics**

### Positioning

Noetic Atlas is not positioned as another AI horoscope generator. It is a computational interface for exploring the architecture of an astrological life.

The product thesis is:

> The natal chart is not astrology itself. It is one historical visualization of a multilayer symbolic system.

The conventional wheel remains valuable because it preserves zodiacal longitude, house position, and angular geometry compactly. Its limitation is representational: it attempts to show too many different mathematical objects in one polar diagram.

Noetic Atlas separates those objects and gives each one a visualization optimized for the question being asked.

---

## 2. The four core experiences

NAF organizes the user experience around four coordinated views.

### 2.1 Natal Field — **Structure**

**Question:** What is the natal architecture?

Planets, lots, angles, and selected sensitive points become attributed nodes. Aspects become weighted edges. Sign, house, dignity, sect, speed, retrogradation, angularity, and other conditions become node or edge metadata.

The goal is to expose:

- aspect clusters;
- isolated nodes;
- oppositional axes;
- coherent triangles;
- square complexes;
- conjunction clusters;
- structural bottlenecks;
- derived-point relationships;
- house concentration.

The initial prototype uses a deterministic node-link representation with filtering for coherence, tension, derived points, and angles.

### 2.2 Flow Map — **Rulership and dependency**

**Question:** Where does the structure route?

Astrology contains directional relationships that are difficult to perceive in a wheel:

- house -> sign -> ruler;
- planet -> sign ruler;
- ruler -> dispositor;
- lots -> rulers;
- activated house -> lord of the year;
- reception and mutual reception;
- terminal dispositors and cycles.

These relationships are modeled as a directed graph.

The canonical specimen immediately produces a terminal two-node strongly connected component:

```text
Mercury <-> Venus
```

Mercury is in Libra and therefore disposited by Venus. Venus is in Virgo and therefore disposited by Mercury. Under traditional domicile rulership, every classical planet in the specimen eventually reaches this cycle.

This yields a measurable topological fact of the selected symbolic model:

```text
Terminal SCC: {Mercury, Venus}
Associated houses: {3rd, 2nd}
```

The astrological meaning of that fact is interpretive. The existence of the graph cycle is computational.

### 2.3 Life Spectrum — **Time**

**Question:** Which parts of the natal architecture are activated, and when?

The long-term design replaces the transit bi-wheel as the primary temporal interface with a spectrogram-like representation.

- horizontal axis: time;
- vertical axis: natal architecture;
- intensity: explicitly defined symbolic activation.

Potential channels include:

- planets;
- houses;
- angles;
- lots;
- ruler chains;
- house axes;
- time-lord periods.

Potential activation sources include:

- transits;
- annual profections;
- zodiacal releasing;
- progressions;
- directions;
- eclipses;
- stations;
- ingress events.

**Important:** v0.1 does not fabricate temporal data. The Life Spectrum pane is deliberately marked as incomplete until an ephemeris-backed calculation layer exists.

### 2.4 Life Space — **State space**

**Question:** Where is the system within its larger evolution?

At time `t`, the full symbolic condition may be encoded as a high-dimensional state vector:

```text
x(t) = [x1(t), x2(t), ..., xn(t)]
```

Candidate components include:

- transit-to-natal aspect strengths;
- house activation;
- ruler activation;
- time-lord state;
- elemental/modal composition;
- planetary condition;
- lot activation;
- selected graph-topology features.

Dimensionality reduction may then be used for exploratory representation:

- PCA;
- UMAP;
- multidimensional scaling;
- graph embeddings;
- later, learned latent models if justified by sufficient data.

The result is a trajectory through symbolic state space rather than a sequence of isolated transit charts.

State-space work is intentionally deferred until the deterministic temporal model is stable.

---

## 3. Core computational model

NAF represents an astrological system as:

```text
A = {P, H, S, E, R, L, T}
```

where:

| Symbol | Layer | Description |
|---|---|---|
| `P` | Planets / points | Planets, angles, nodes, lots, selected sensitive points |
| `H` | Houses | Places/domains and their rulers |
| `S` | States | Sign, element, modality, dignity, sect, speed, direction |
| `E` | Edges | Aspects and other pairwise relationships |
| `R` | Rulership | Directed rulers, dispositors, reception, dependency paths |
| `L` | Lots | Derived lots and related rulership structure |
| `T` | Time | Transits and timing systems |

These layers are intentionally not collapsed into one mathematical representation.

- longitude is circular/angular data;
- aspects are pairwise relations;
- rulership is directed topology;
- element/modality are categorical summaries;
- time-lord methods are hierarchical regimes;
- transits are time-varying inputs.

The framework uses coordinated views because different data structures deserve different visual encodings.

---

## 4. Epistemic contract

This repository must maintain a strict separation between four layers of output.

### Layer A — Astronomical fact

Examples:

- planetary longitude;
- angular separation;
- station or retrograde state;
- ephemeris-derived time.

These should come from deterministic astronomical calculations.

### Layer B — Astrological calculation

Examples:

- whole-sign house placement;
- sign ruler;
- dispositor chain;
- aspect type and orb;
- lot calculation;
- profection lord;
- graph centrality within an explicitly defined astrological network.

These are deterministic outputs **conditional on a selected astrological rule set**.

### Layer C — Traditional interpretation

Examples:

- Hellenistic delineation;
- Jyotish interpretation;
- medieval/traditional interpretation;
- transpersonal interpretation.

These are claims made inside historical or contemporary astrological traditions and must be labeled accordingly.

### Layer D — AI synthesis

AI may:

- navigate views;
- compare computed states;
- summarize salient topology;
- explain a ruler path;
- synthesize traditions;
- generate interpretive hypotheses.

AI must not silently invent astronomical positions, aspects, houses, or timing periods.

The intended pipeline is:

```text
Ephemeris
   -> Astrological Rule Engine
   -> Structured Model
   -> Visualization
   -> AI Navigation / Interpretation
```

---

## 5. Quantitative discipline

NAF deliberately uses ideas from network science, signal processing, dynamical systems, and information visualization. These mathematical tools are used to characterize the **formal astrological model**, not to imply a presently established physical mechanism.

For example, an aspect coupling weight may be defined as:

```text
w_ij = f(aspect_type, orb, applying_state, condition, context)
```

That number is a model-relative score.

It is **not** a measured number of joules, volts, tesla, or another physical unit.

Likewise, terms such as:

- coupling;
- resonance;
- excitation;
- stability;
- attractor;
- interference;
- activation;

may be used as computational or visual-analytic concepts only when their definitions are explicit. They must not be allowed to drift into unsupported claims of physical measurement.

---

## 6. Canonical specimen: v0.1

The initial development chart is intentionally fixed so that visualization behavior can be tested against a stable reference.

### Core placements

| Object | Position | Whole-sign house |
|---|---:|---:|
| ASC | Leo 11°38′ | 1 |
| Sun | Libra 10°57′ | 3 |
| Moon | Gemini 8°03′ | 11 |
| Mercury | Libra 19°30′ | 3 |
| Venus | Virgo 14°49′ | 2 |
| Mars | Virgo 15°17′ | 2 |
| Jupiter | Aquarius 7°07′ | 7 |
| Saturn | Scorpio 25°09′ | 4 |
| Uranus | Sagittarius 14°42′ | 5 |
| Neptune | Capricorn 0°58′ | 6 |
| Pluto | Scorpio 3°44′ | 4 |
| North Node | Taurus 10°31′ Rx | 10 |
| Lilith | Taurus 13°47′ | 10 |
| Chiron | Gemini 14°33′ Rx | 11 |
| Fortune | Sagittarius 14°32′ | 5 |
| Vertex | Sagittarius 28°23′ | 5 |
| MC | Taurus 0°44′ | 10 sign |

### High-value test structures

The chart was selected because it contains several visually useful structures:

1. **Venus-Mars conjunction** in Virgo, separated by approximately 0°27′.
2. **Mercury-Venus terminal dispositor cycle** under traditional rulership.
3. **Sun-Moon-Jupiter air trine network**.
4. **Fortune-Uranus conjunction** near 14° Sagittarius.
5. **Fortune-Chiron opposition** that is effectively exact in the supplied data.
6. **Venus/Mars-Uranus/Chiron mutable tension complex**.
7. **Saturn-Pluto concentration** in the 4th whole-sign house.
8. Multiple angular connections to the Leo Ascendant.

These structures allow the same specimen to test cluster recognition, topology, derived-point overlays, ruler chains, and later temporal activation.

---

## 7. Repository layout

```text
astroframework/
├── README.md
├── prototype/
│   └── noetic_atlas_v01.html
├── data/
│   └── canonical_specimen_v01.json
└── docs/
    ├── ARCHITECTURE.md
    ├── PRODUCT.md
    └── ROADMAP.md
```

The initial prototype is dependency-free HTML/CSS/JavaScript so the core visual ideas remain inspectable.

The production architecture will later separate calculation, state, rendering, and AI orchestration.

---

## 8. Running the v0.1 prototype

No build system is required.

### Option A — open directly

Open:

```text
prototype/noetic_atlas_v01.html
```

in a modern browser.

### Option B — serve locally

From the repository root:

```bash
python -m http.server 8000
```

Then navigate to:

```text
http://localhost:8000/prototype/noetic_atlas_v01.html
```

---

## 9. Target production architecture

The production system should be split into five layers.

### 9.1 Astronomy adapter

Responsibilities:

- ephemeris queries;
- longitude/latitude/speed;
- station state;
- time-zone normalization;
- house-angle inputs.

Candidate implementation:

- Swiss Ephemeris or another validated astronomical source;
- server-side wrapper where licensing or native dependencies require it.

### 9.2 Rule engine

Responsibilities:

- house assignment;
- aspects;
- orbs;
- sect;
- dignity;
- rulers;
- dispositors;
- lots;
- profections;
- zodiacal releasing;
- tradition-specific configuration.

Rules must be data-driven where possible. A Hellenistic rule set must not be silently mixed with a modern/transpersonal rule set.

### 9.3 Structured chart model

Responsibilities:

- canonical schema;
- graph construction;
- time-state representation;
- provenance metadata;
- reproducible serialization;
- versioning.

### 9.4 Visualization layer

Candidate technologies:

- D3.js for custom network, matrix, and timeline work;
- Observable Plot for rapid analytical views;
- Cytoscape.js or Graphology for topology and layouts;
- Three.js only when 3-D materially improves comprehension.

3-D is not a goal by itself. If two dimensions communicate the structure more clearly, use two dimensions.

### 9.5 AI orchestration layer

AI should consume computed JSON rather than raw birth data alone.

Example tool actions:

```text
trace_house_ruler(11)
show_aspects("Saturn", applying_only=true)
compare_states("2019-01-01", "2026-08-11")
highlight_scc("Mercury", "Venus")
explain_provenance(edge_id)
```

The interface should allow the model to manipulate the visual state as part of its answer.

---

## 10. Proposed data contracts

### Placement

```json
{
  "id": "Venus",
  "longitude": 164.816667,
  "sign": "Virgo",
  "sign_degree": 14.816667,
  "house": 2,
  "retrograde": false
}
```

### Aspect

```json
{
  "source": "Venus",
  "target": "Mars",
  "type": "conjunction",
  "orb_deg": 0.45,
  "phase": "applying",
  "rule_set": "natal_core_v0.1"
}
```

### Rulership edge

```json
{
  "source": "Mercury",
  "target": "Venus",
  "relation": "disposited_by",
  "basis": "traditional_domicile",
  "source_sign": "Libra"
}
```

### Temporal activation

```json
{
  "timestamp": "2026-08-11T00:00:00-04:00",
  "target": "Sun",
  "activation_type": "transit_aspect",
  "source": "Saturn",
  "score": 0.82,
  "score_model": "orb_weight_v0.1",
  "provenance": {}
}
```

Every score must identify the scoring model that produced it.

---

## 11. Tradition adapters

A long-term objective is to treat traditions as switchable rule systems rather than flattening them into one synthetic astrology.

Initial adapters envisioned:

### Hellenistic

- tropical zodiac;
- whole-sign places;
- traditional rulers;
- sect;
- dignities;
- lots;
- annual profections;
- zodiacal releasing;
- bonification/maltreatment.

### Jyotish

A separate sidereal adapter with explicit ayanamsha and its own rule definitions. It should not reuse western dignity logic by accident.

### Transpersonal / modern

- Uranus, Neptune, Pluto;
- Chiron when selected;
- psychological/archetypal interpretation;
- configurable modern rulership.

The user should always know which model generated a visual or interpretation.

---

## 12. Development roadmap

### v0.1 — canonical static specimen

**Status: current**

- [x] Canonical natal data fixture
- [x] Aspect node-link prototype
- [x] Coherence/tension filters
- [x] Directed house-ruler chains
- [x] Terminal Mercury-Venus SCC identified
- [x] Life Spectrum placeholder that explicitly refuses fake transit data
- [x] State-space placeholder that explicitly refuses fake trajectories
- [ ] Automated tests for current fixture

### v0.2 — deterministic graph kernel

- [ ] Convert prototype data into reusable modules
- [ ] Calculate aspects from longitude rather than hard-code them
- [ ] Build generic dispositor graph
- [ ] Tarjan/Kosaraju SCC detection
- [ ] centrality and dependency depth
- [ ] aspect matrix
- [ ] provenance inspector
- [ ] JSON schema validation

### v0.3 — ephemeris-backed time

- [ ] integrate validated ephemeris
- [ ] calculate transits over arbitrary date windows
- [ ] applying/separating logic through time
- [ ] configurable orb functions
- [ ] Life Spectrum heat map
- [ ] exact-hit and station markers
- [ ] event annotations

### v0.4 — Hellenistic timing layer

- [ ] annual profections
- [ ] lots and rulers
- [ ] zodiacal releasing
- [ ] nested timing regimes
- [ ] synchronized timeline overlays

### v0.5 — AI navigation

- [ ] structured query API
- [ ] natural-language view manipulation
- [ ] source/provenance display
- [ ] compare two periods
- [ ] explain graph routes
- [ ] interpretation layer labels

### v0.6+ — research and scale

- [ ] multiple chart import
- [ ] synastry/relationship topology
- [ ] family-system maps
- [ ] population-level embeddings
- [ ] recurrence analysis
- [ ] HCI user studies
- [ ] expert vs novice comprehension studies

---

## 13. Testing strategy

### Unit tests

Test deterministic functions independently:

- longitude normalization;
- sign assignment;
- whole-sign house assignment;
- aspect detection;
- orb calculation;
- applying/separating state;
- ruler lookup;
- dispositor chains;
- SCC detection;
- lot formulas;
- profections.

### Golden-fixture tests

The canonical v0.1 chart should remain a permanent fixture.

Expected facts include:

```text
Venus -> Mercury
Mercury -> Venus
terminal SCC == {Mercury, Venus}
Sun -> Venus
Moon -> Mercury
Mars -> Mercury
Jupiter -> Saturn -> Mars -> Mercury
Saturn -> Mars -> Mercury
```

### Visualization tests

- deterministic node identity;
- no hidden relationships after filtering;
- selected-node state synchronized across views;
- readable labels at supported breakpoints;
- accessibility descriptions for nonvisual navigation.

### Scientific/HCI evaluation

The traditional chart can serve as a control condition.

Candidate metrics:

- time to trace a house ruler;
- aspect-pattern identification accuracy;
- recall;
- subjective cognitive load;
- insight generation;
- expert/novice differences.

A defensible research question is:

> What visualization methods most effectively communicate the relational and temporal structure of astrological systems?

This question can be studied independently of claims about astrology's causal mechanism.

---

## 14. Design principles

1. **Calculation before narration.**
2. **Show the structure, not only the conclusion.**
3. **Never manufacture precision.**
4. **Every quantitative score must have a definition.**
5. **Traditions are explicit models, not hidden mixtures.**
6. **2-D before 3-D unless 3-D clearly improves comprehension.**
7. **The wheel remains available as a reference, not as the only interface.**
8. **AI navigates deterministic data; it does not replace deterministic data.**
9. **A user should be able to inspect why every displayed relationship exists.**
10. **The framework should be useful to skeptics, practitioners, students, and researchers as an information-visualization system even when they disagree about metaphysics.**

---

## 15. Product language

Preferred public language:

- **Natal Field** — See your architecture.
- **Flow Map** — See where it leads.
- **Life Spectrum** — See when it activates.
- **Life Space** — See where you are in the larger pattern.

Preferred technical language:

- Structure
- Rulership topology
- Temporal activation
- State-space representation
- Symbolic coupling
- Provenance
- Rule set
- Model-relative score

Avoid unsupported physical claims such as measured astrological force or energy unless a future empirical model establishes those quantities independently.

---

## 16. Product direction and monetization

The defensible moat is not LLM-generated horoscope text. It is the combination of:

```text
Astrological Data Model
+ Deterministic Rule Engine
+ Visual Grammar
+ Longitudinal Life Map
+ Explainable AI
```

Potential product tiers:

### Free

- canonical natal field;
- basic ruler flow;
- limited explanatory AI.

### Individual

- full Life Spectrum;
- event annotation;
- historical comparison;
- future activation windows;
- multiple timing systems;
- saved explorations.

### Professional astrologer

- client charts;
- consultation workspace;
- comparison views;
- exportable visual reports;
- configurable traditions;
- research-grade provenance.

### Education

- guided ruler tracing;
- aspect-pattern lessons;
- traditional model toggles;
- explainable step-by-step calculations.

### Research

- anonymized structural datasets;
- chart similarity;
- longitudinal annotation;
- reproducible model definitions;
- statistical and HCI study tooling.

---

## 17. Immediate engineering priorities

The next development work should be narrow and unforgiving:

1. extract hard-coded prototype data into a schema-validated fixture;
2. implement deterministic aspect calculation from absolute longitude;
3. implement generic traditional dispositor graphs;
4. automatically identify SCCs and terminal cycles;
5. render an aspect matrix alongside the node-link view;
6. add provenance panels for every edge;
7. integrate a validated ephemeris;
8. only then activate the Life Spectrum.

State-space embeddings and machine learning should wait until the underlying feature representation is stable enough that the embedding has a defensible meaning.

---

## 18. Current repository status

This repository is an **early research and product prototype**.

Current visual outputs should be interpreted as interfaces over explicit astrological rules, not as validation that astrological symbolism corresponds to a measured causal field.

The goal of the framework is more fundamental:

> **Here is the structure. Here is how it is connected. Here is how it changes. Explore it.**
