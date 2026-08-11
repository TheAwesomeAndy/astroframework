# Noetic Atlas — Development Roadmap

## Guiding sequence

The roadmap follows one principle:

> **Do not visualize, weight, or interpret a layer that the framework cannot derive and audit.**

The current sequence is:

```text
Geometry
→ Topology
→ Primitive Condition
→ Graph Analytics
→ Energetic / Explainable Synthesis
→ Relational Condition
→ Compound Condition
→ Time
→ Recurrence
→ Discovery
```

Time should activate a richly characterized natal state rather than an incomplete geometry-only chart.

---

# v0.1 — Visual hypothesis

**Status: complete historical milestone**

Delivered:

- canonical specimen;
- first Natal Field network;
- first Flow Map concept;
- Life Spectrum placeholder;
- Life Space placeholder;
- explicit distinction between mathematical representation and physical claims;
- product/framework identity.

Lesson: the wheel contains structure that can become easier to inspect when angular geometry and directed rulership are separated.

---

# v0.2 — Natal Field instrument

**Status: complete historical milestone**

Delivered:

- interactive Natal Field;
- node inspector;
- aspect matrix;
- all-house ruler routing;
- elemental/modal composition;
- model/method view;
- “resolution over prophecy” principle.

Lesson: visualization should expose calculable structure before generating interpretation.

---

# v0.3.0–v0.3.2 — Deterministic kernel + Visual Observatory

**Status: complete foundation milestone**

Delivered:

- runtime chart parsing;
- birth-data input;
- IANA time-zone resolution;
- DST ambiguity/nonexistent-time handling;
- Astronomy Engine adapter;
- ASC/MC calculation;
- planetary velocities;
- Whole Sign houses;
- major aspects and explicit orb policy;
- applying/separating where velocity exists;
- traditional domicile rulers;
- generic dispositor graph;
- Tarjan SCC and terminal-SCC derivation;
- sect;
- seven Paulus/Panaretus Hermetic lots;
- lot proof objects;
- derivation ledger and derivation tree;
- experimental pattern engine;
- version manifest and minimum analysis schema;
- canonical and synthetic/boundary tests;
- GitHub Actions integrity workflow;
- astronomy cross-provider validation plan;
- restored Natal Field / Aspect Matrix / Flow Map / Audit surfaces.

Persistent limitations from this era:

- no traditional condition;
- no readable graph-analysis layer;
- no integrated energetic interpretation;
- no temporal Life Spectrum;
- incomplete extended-body astronomy.

---

# v0.4.0a — Condition ontology + rule registry

**Status: complete**

Delivered:

- source-controlled Hellenistic condition registry;
- condition record JSON schema;
- object applicability model;
- frozen domicile/adversity/exaltation/depression tables;
- standard/Dorothean triplicity table;
- Egyptian bound table with explicit `[start,end)` intervals;
- planetary sect-family rules;
- Whole-Sign angularity classes;
- synthetic condition fixture specification;
- contract tests;
- explicit `not_implemented` slots for relational/compound condition.

Lesson: condition had to exist as an ontology before it could exist as calculations.

---

# v0.4.0b — Primitive Condition Engine

**Status: complete**

Delivered for Sun through Saturn:

- domicile;
- adversity/detriment;
- sign-level exaltation;
- depression/fall;
- standard/Dorothean triplicity participation;
- active sect triplicity ruler;
- Egyptian bound ruler and interval;
- planetary sect family;
- in-sect/out-of-sect relation;
- Whole-Sign angular-triad class;
- independent ledger entry per factor;
- minimal condition inspection surface;
- synthetic boundary tests and canonical regressions.

No scalar planet-strength score is calculated.

Lesson: topology tells where a dependency routes; condition tells what state the receiving planet is in.

---

# v0.4.1 — Graph Analytics + Explainable Findings

**Status: complete**

Purpose: make graph-derived structure explicit without pretending the graph statistic is already an astrological reading.

Delivered:

### Classical dispositor graph

- SCC condensation;
- terminal basin membership / fraction;
- route depth;
- upstream capture;
- nonterminal path bottleneck.

### Aspect graph

- connected components;
- degree;
- clustering coefficient;
- normalized unweighted betweenness;
- articulation points;
- bridges;
- typed closed three-node motifs;
- Grand Trine / T-square / triple-conjunction templates;
- exact ≤1° subset.

### Multiplex comparison

- aspect × dispositor pair overlap.

### Explainability

- definition;
- formula;
- observed value;
- graph-theory meaning;
- astrological rule context;
- interpretive hypothesis;
- limitation;
- proof/ledger links.

Lesson: a graph metric can be mathematically exact and still be meaningless to a non-specialist until it is translated through the astrological model.

---

# v0.4.1.1 — Outer-planet interpretive restoration

**Status: complete compatibility milestone**

Delivered:

- Uranus, Neptune, and Pluto preserved in interpretive analysis;
- explicit separation between modern outer-planet interpretation and Hellenistic dignity rules;
- legacy UI contract retained for regression.

Lesson: restricting traditional condition to the classical planets must not silently erase modern interpretive objects from the chart.

---

# v0.4.1.2 — Energetic Whole-Chart Synthesis

**Status: current public release**

Purpose: translate the deterministic structural/graph substrate into a reading a non-specialist can understand without surrendering auditability.

Delivered:

- dedicated energetic synthesis engine;
- dedicated display-normalization layer;
- symbolic energy/current/field vocabulary with explicit non-physical epistemic label;
- placement synthesis across archetype, sign, and actual Whole Sign house;
- explicitly modern natural-house overlay;
- house-ruler/dispositor routing inside interpretation;
- aspect-energy translation;
- terminal-basin translation into actual planet + house circuits;
- preterminal bottleneck translation into recurring energetic gates;
- balanced / depleted / excessive expressions;
- material/livelihood examples;
- soul/spirit inquiry prompts;
- actionable embodiment experiments;
- primitive traditional condition qualifiers folded into classical-planet readings;
- Ceres recognized as a minor body when a coordinate is supplied;
- custom/modern Ceres interpretation profile;
- corrected browser analysis surface `prototype/v0412b.html`;
- energetic synthesis smoke tests;
- UI/browser contract tests;
- documentation contract for future sample-analysis ingestion.

Core reading sequence:

```text
archetypal current
→ sign frequency
→ actual Whole Sign house
→ natural-house resonance (secondary)
→ ruler/dispositor pathway
→ aspect geometry
→ graph architecture
→ traditional condition
→ balanced/depleted/excess expression
→ material-life manifestation
→ soul/spirit inquiry
→ proof
```

Core design rule:

> **The graph term is never the interpretation.**

Scientific boundary:

Energy/current/field language remains a symbolic interpretive model. It is not treated as evidence of measured astrological physics.

Current Ceres boundary:

Ceres can be interpreted from a supplied/precomputed coordinate, but the birth-time astronomy adapter does not yet automatically generate a validated Ceres position.

---

# v0.4.2 — Relational Condition

**Next astrological-engine milestone**

Purpose: qualify directed and angular relationships between planets rather than treating condition as node-local only.

Planned components:

```text
G_reception
→ exchange / mutual reception
→ G_overcoming
```

Requirements:

- explicit source/rule variant IDs;
- no medieval/Hellenistic definition blending without a named variant;
- relation-level ledger entries;
- graph integration that preserves relation type;
- readable energetic translation downstream from the rule calculation;
- synthetic edge fixtures before promotion.

Exit criterion:

An expert can reconstruct every reception/exchange/overcoming relation from the serialized rule result and its source/model identity.

---

# v0.4.3 — Compound Condition

Purpose: represent higher-order traditional conditions after primitive and relational facts are stable.

Candidate components:

- bonification;
- maltreatment;
- enclosure;
- selected mitigation;
- condition-aware topology experiments.

Bonification/maltreatment must remain under a named reconstruction because the surviving source tradition is not a single unambiguous modern API.

No scalar strength score.

---

# v0.4.x — Interpretation depth track

This track can proceed alongside relational condition as long as deterministic facts remain authoritative.

Planned components:

### House-ruler synthesis

- house lord condition;
- house-to-terminal routing;
- linked house circuits;
- cross-house feedback patterns.

### Whole-chart configuration synthesis

- aspect motifs interpreted as multi-body systems rather than isolated pair paragraphs;
- repeated axis analysis;
- topology × condition × house synthesis;
- selected outer-planet and minor-body profiles.

### Curated interpretation profiles

Long-form expert/user-supplied samples are decomposed into versioned fields:

```text
archetype definition
healthy expression
under-expression
excess expression
material domains
skills/resources
vocational possibilities
embodiment practices
warning patterns
metaphors
tradition / source profile
```

Samples may enrich interpretation. They may not alter coordinates, house assignment, aspect geometry, topology, condition, or provenance.

### Practice layer

- yogic embodiment suggestions;
- Ayurvedic lifestyle correspondences;
- contemplative practices;
- explicitly labeled tradition/source posture;
- no medical diagnosis or unsupported causal claims.

### Interpretation postures

Potential selectable lenses:

```text
Traditional
Energetic
Psychological
Mystical
Research
```

All postures consume the same deterministic state.

---

# v0.5 — Life Spectrum v1

Purpose: introduce time after the natal field is structurally, conditionally, and interpretively characterized.

Planned components:

- transit ephemeris over arbitrary windows;
- exact transit hits;
- stations;
- applying/separating temporal evolution;
- stable natal-target lanes;
- house activation lanes;
- activated ruler pathways;
- explicit activation functions;
- zoom from decades to days;
- life-event annotations;
- provenance for every band/marker;
- uncertainty/sensitivity where birth time matters.

Design rule:

A transit should activate a **characterized natal state**, not merely a longitude.

Conceptually:

```text
N_i = geometry + topology + condition
T(t) = temporal input
X_i(t) = F(N_i, T(t), rule-set versions)
```

Interpretive prose remains downstream and does not feed back into astronomy or rule calculations.

Exit criterion:

A user can inspect long temporal structure without a transit bi-wheel and reconstruct every displayed activation.

---

# v0.6 — Traditional timing systems

Purpose: layer discrete/hierarchical timing regimes onto continuous transits.

Candidate systems:

### Annual profections

- age/year;
- profected Whole Sign house;
- lord of the year;
- natal condition of lord;
- activated ruler path.

### Zodiacal releasing

- Lot selection;
- sign periods;
- peak periods;
- Loosing of the Bond;
- angular transitions;
- provenance for every period boundary.

### Solar returns / related annual techniques

Only after provider/rule definitions are frozen.

---

# v0.7 — Life Space / recurrence research

Purpose: examine repeated structural states and trajectories rather than isolated transits.

Potential research objects:

- state vectors across time;
- recurring activation motifs;
- condition-qualified ruler pathways;
- event-annotation similarity;
- temporal clustering;
- state-space visualization.

Dimensionality reduction such as PCA/UMAP/MDS belongs here only after the semantic state vector is stable.

---

# Research track — null models and validation

This proceeds alongside product development.

## Graph nulls

```text
geometric longitude randomization
label permutation
degree-preserving rewiring where valid
layer-overlap nulls
```

No `rare`, `high`, `exceptional`, or `enriched` language before comparison.

## HCI validation

Compare wheel versus Atlas on tasks such as:

- terminal dispositor identification;
- ruler-chain recovery;
- mutual-reception identification;
- exact aspect lookup;
- lot reconstruction;
- activated ruler-path tracing.

Measures:

- error rate;
- completion time;
- inter-rater agreement;
- cognitive load;
- learning rate.

This can validate representational utility without validating astrology itself.

## Astrological empirical research

Longer-term questions may test whether graph descriptors, condition-qualified topology, or timing structures correlate reproducibly with external/life phenomena.

Null findings remain acceptable.

---

# Current engineering priorities

The next sequence after v0.4.1.2 is:

```text
1. reception / exchange
2. overcoming
3. condition-aware house-ruler synthesis
4. selected compound condition
5. graph null models
6. curated interpretation-profile expansion
7. validated extended-body astronomy where justified
8. Life Spectrum
```

The governing product standard remains:

> **If a feature merely makes astrology look interesting, it does not belong. If it exposes a structural or experiential question that is difficult to inspect, reproduce, compare, or test with the traditional representation, it may belong.**
