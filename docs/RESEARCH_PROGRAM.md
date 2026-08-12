# Noetic Atlas — Research Program and Theory Development

## 1. Purpose

Noetic Atlas is intended to do more than digitize existing astrological practice. Its research purpose is to expose structures, recurrences, and cross-layer relationships that conventional chart interfaces may conceal, then evaluate whether those structures are useful, reproducible, and—only where evidence supports it—astrologically meaningful.

Current release contract: [`CURRENT_RELEASE.md`](CURRENT_RELEASE.md).

The project distinguishes:

1. historical-rule reproduction;
2. deterministic mathematical properties of the encoded model;
3. exploratory descriptors;
4. visualization/HCI performance;
5. empirical or phenomenological evidence;
6. candidate interpretive theory.

These categories must not be collapsed.

Frozen architecture:

```text
one chart state
→ many coordinated projections
```

## 2. Current substrate

Implemented now:

- deterministic chart kernel;
- sect + seven Hermetic lots;
- primitive classical condition;
- relational classical condition;
- graph analytics/findings for the v0.4.1 scope;
- Resonance Field;
- House River route-count projection;
- reusable condition signatures;
- Derivation Walker infrastructure for all new v0.4.2 relations and river bands;
- current energetic interpretation layer;
- preservation of every prior useful public surface through v0413/v0412c.

Still absent:

- compound condition;
- graph-null distributions;
- statistically validated condition-weighted graph descriptors;
- complete legacy-proof normalization into the shared walker;
- Life Spectrum/temporal engine;
- externally validated predictive/psychological interpretation.

The promotion status for novel astrological claims therefore remains **hold** even though both primitive and relational traditional condition are now executable.

## 3. Research posture

```text
represent faithfully
→ derive transparently
→ visualize clearly
→ formulate a question
→ specify comparison/null
→ measure
→ replicate
→ refine or reject
```

A negative result is useful. A descriptor that performs no better than a plausible baseline should not be promoted because it produces attractive charts.

## 4. What can be studied now

### 4.1 Pure mathematical questions

Examples:

- What SCCs exist under a selected ruler model?
- What fraction of classical planets drain into each terminal SCC?
- What is the route-depth distribution?
- Which nonterminal nodes capture the most upstream routes?
- What articulation points/bridges exist in the admitted aspect graph?
- Which typed motifs occur under a named orb policy?
- Which aspect pairs overlap with dispositor pairs?
- How many Whole Sign house-ruler paths traverse each dispositor edge?

These are deterministic once the graph/model is defined.

### 4.2 Historical-rule reproduction

Current examples:

- Hermetic lot formulas;
- Egyptian-bound lookup;
- triplicity/sect logic;
- Whole-Sign angular-triad classification;
- configured domicile reception;
- domicile exchange;
- right-hand overcoming;
- domination/upon-the-tenth.

Success means expert reconstructability under a named source/variant, not empirical proof of astrology.

### 4.3 Visualization/HCI questions

Examples:

- Does Flow Map reduce time to trace a ruler chain?
- Does Aspect Matrix improve exact pairwise lookup?
- Does Resonance Field improve comprehension of actual versus optional natural-house relationships?
- Does Qualified Flow reduce errors distinguishing dispositorship, reception, exchange, and overcoming?
- Does House River reduce the cognitive cost of tracing lived house domains through ruler chains?
- Do Condition Signatures improve reconstruction of multidimensional state without inducing a misleading good/bad score?
- Does Proof Walker improve confidence calibration by exposing derivation paths?
- Does the graph/findings/metrics/condition separation improve understanding of what is calculation versus interpretation?

Candidate measures:

- completion time;
- error rate;
- confidence calibration;
- recall;
- learning rate;
- workload;
- expert inter-rater agreement.

The wheel remains an appropriate control condition for geometry-heavy tasks; tables and conventional dignity grids may also be appropriate controls for condition tasks.

### 4.4 Astrological-significance questions

These ask whether formal features correspond to independent expert judgments, phenomenology, autobiographical data, or prospective outcomes.

Examples:

- Does terminal-basin concentration correspond to independently rated topical integration?
- Do primitive + relational condition-qualified graph structures add reproducible information beyond standard delineation?
- Are articulation/bottleneck structures associated with independently coded interpretive themes?
- Do House River routing patterns add useful information beyond ordinary house-ruler tables?
- Do preregistered timing windows correspond to event density above time-shift nulls?

These require stronger controls and cannot be answered from `NAF-CANON-0001`.

## 5. Research layers

### R0 — Historical rule reproduction

Goal: faithfully encode a selected technique.

Success criteria:

- source identified;
- variant named;
- formula/rule formalized;
- boundaries documented;
- independent/manual reconstruction possible;
- proof object available.

### R1 — Mathematical characterization

Goal: calculate properties of the encoded chart/network without asserting new astrological meaning.

Current examples:

- terminal SCC/basin;
- route depth;
- upstream capture;
- aspect clustering/betweenness;
- articulation/bridge structure;
- typed motifs;
- House River route counts;
- harmonic magnitude;
- multilayer overlap/participation.

### R2 — Exploratory astrological hypothesis

Goal: test whether an R1 property or source-backed condition structure corresponds to an independently measured criterion.

### R3 — Replication

Goal: reproduce relationships in independent charts, periods, astrologers, or datasets.

### R4 — Candidate theory

Only repeated support justifies movement toward a new interpretive technique.

## 6. Current graph + relation research

Current graph model:

```text
naf.research.graph_analytics.v0.4.1
```

Current relational condition:

```text
naf.condition.relational.hellenistic.v0.4.2
```

Current House River:

```text
naf.research.house_river.v0.4.2
```

### Classical dispositor graph

Functional digraph under traditional domicile rulership. Current analytics include SCC condensation, terminal basins, route depth, upstream capture, and nonterminal bottlenecks.

### Aspect graph

Current analytics include components, degree, clustering, normalized unweighted betweenness, articulation points, bridges, typed triangle motifs, and exact ≤1° subsets.

### Relational layers

Source-backed layers include reception, exchange, separately identified mutual-reception compatibility, overcoming, and domination.

These are not automatically “research discoveries”; their novel research use begins when we ask comparative/multiplex questions about them.

### House River

For dispositor edge `e`:

```text
w(e) = number of Whole Sign house-ruler paths traversing e
```

This is a route count, not a strength score.

### Multiplex overlap

Existing explicit overlap:

```text
E_aspect ∩ E_dispositor
```

Future research may compare reception/overcoming overlap and motif participation, but relation layers must not be collapsed into one undifferentiated power network.

## 7. Null models — mandatory next gate

### Geometric longitude null
Randomize longitudes, then recompute aspects.

### Label permutation
Preserve geometry, permute object identities.

### Degree-preserving graph null
Rewire while preserving degree sequence where graph semantics make this appropriate.

### Layer-overlap null
Preserve layer size/density, randomize pair assignment.

### Relational-layer null
Future reception/overcoming research must specify which sign/ruler/configuration marginals are preserved before asking whether multiplex overlap is unusual.

### Matched astronomical null
Use realistic birth instants/locations when independent longitude randomization would destroy dependencies material to the question.

### Rotation null
Rotate a full chart while preserving internal geometry when isolating house/angle dependence.

### Time-shift null
For future event/timing research, shift event dates/windows within valid observation periods.

No `rare`, `high`, `dominant`, `exceptional`, or `enriched` graph language before comparison.

## 8. Condition and graph research

The question has evolved from “wait for condition” to:

```text
What incremental information do primitive and relational condition add to graph/topical representations?
```

Useful comparisons:

```text
topology only
vs
primitive condition only
vs
relational condition only
vs
primitive + relational condition
vs
condition + topology
vs
condition + topology + House River / Resonance presentation
```

After v0.4.3:

```text
primitive + relational + compound condition + topology
```

Do not create a condition-weighted centrality score merely because weighting is mathematically possible. Every weighting must answer a defined research question and undergo sensitivity/null evaluation.

## 9. Interpretation research

The energetic synthesis is a versioned interpretation model, not a validated predictive theory.

Research questions may include:

- Do users distinguish graph facts, astrological-rule facts, and interpretive hypotheses more accurately with the current hierarchy?
- Do house+ruler+condition explanations improve expert agreement or novice understanding?
- Does showing relation type prevent the generic-edge misunderstanding common in network visualizations?
- Which interpretation profiles generate stable, useful descriptions across independent charts?
- Which statements are too generic to discriminate among chart structures?
- Do balanced/depleted/excess framings improve agency without increasing deterministic belief?

Interpretation text remains downstream from deterministic evidence.

## 10. Canonical-chart overfitting is prohibited

`NAF-CANON-0001` exists for regression stability.

Rules:

- do not tune thresholds to make it interesting;
- use synthetic fixtures for edge cases and relation types;
- use independent charts for research;
- record proposal timing relative to samples examined;
- retain boring/failed outputs where feasible.

## 11. N-of-1 longitudinal research

Future workflow:

```text
calculate symbolic state through time
→ predefine event categories
→ compare event/non-event windows
→ inspect recurrence/technique overlap
→ use time-shift baselines
```

Risks include retrospective selection, memory distortion, post-hoc interpretation, and multiple testing.

## 12. Cohort research

With explicit consent, future datasets may test expert agreement about structural/condition descriptors, associations between graph/condition features and independently coded domains, timing-window event density, chart-architecture similarity versus independent life-history similarity, and incremental value of traditional techniques.

Always distinguish mathematical chart similarity from empirical psychological/life similarity.

## 13. Birth-time uncertainty

Future analyses should quantify sensitivity to plausible birth-time uncertainty, especially for ASC, houses, MC, lots, Moon-sensitive boundaries, and timing.

Useful states:

```text
stable under ±5 min
changes under ±15 min
undefined without reliable time
```

## 14. Theory-promotion requirements

A descriptor or interpretation technique moving toward theory must document formal definition, implementation version, object/graph scope, datasets examined, rule-set versions, null models, preregistration status where relevant, replication attempts, effect estimates/uncertainty, multiple-comparison handling, sensitivity tests, known failures, competing explanations, expert commentary, and current confidence status.

Suggested labels:

```text
experimental
observational
replicated
provisional-theory
traditional-source-backed
retired
```

`traditional-source-backed` and `empirically replicated` are different statuses.

## 15. Reproducibility package

Publishable results should ideally retain code commit SHA, schema/model versions, astronomy provider/version, rule IDs, orb policy, feature definitions, data provenance/consent, random seeds, preprocessing, exact analysis command/notebook, limitations, and negative/failed analyses relevant to the hypothesis.

## 16. External technical anchors

Technical references justify methods, not astrological validity. Examples include Tarjan SCCs, Brandes betweenness, node-link/matrix HCI research, multilayer-network theory, W3C PROV, FAIR principles, and network-motif methodology.

## 17. Long-term objective

Noetic Atlas should become an astrological observatory capable of asking:

> What structure is present?

> How was it produced?

> What primitive and relational traditional condition qualifies it?

> How do lived house domains route through it?

> What does the selected interpretation model infer?

> What would falsify that inference?

> When does the structure activate or recur?

> Does another rule model produce the same result?

> Does the visualization actually help users recover it?

> Does a proposed descriptor survive a null comparison and independent replication?
