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

## 2. Current substrate

The present research substrate is no longer v0.3-only.

Implemented now:

- deterministic chart kernel;
- sect + seven Hermetic lots;
- primitive classical condition;
- graph analytics/findings for the v0.4.1 scope;
- current energetic interpretation layer;
- proof/provenance linkage;
- v0412c operational browser wrapper.

Still absent:

- relational condition;
- compound condition;
- graph-null distributions;
- Life Spectrum/temporal engine;
- externally validated predictive/psychological interpretation.

The promotion status for novel astrological claims therefore remains **hold**, even though the primitive condition substrate is now implemented.

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

These are deterministic once the graph/model is defined.

### 4.2 Historical-rule reproduction

Examples:

- Hermetic lot formulas;
- Egyptian-bound lookup;
- triplicity/sect logic;
- Whole-Sign angular-triad classification;
- future reception/overcoming rules.

Success means expert reconstructability under a named source/variant, not empirical proof of astrology.

### 4.3 Visualization/HCI questions

Examples:

- Does Flow Map reduce time to trace a ruler chain?
- Does Aspect Matrix improve exact pairwise lookup?
- Does the graph/findings/metrics separation improve understanding of what is calculation versus interpretation?
- Does Condition reduce errors in traditional-state reconstruction?
- Does Integrity improve confidence calibration by exposing evidence?
- Does the v0412c analysis hierarchy reduce cognitive load relative to a wheel + prose workflow?

Candidate measures:

- completion time;
- error rate;
- confidence calibration;
- recall;
- learning rate;
- workload;
- expert inter-rater agreement.

The wheel remains an appropriate control condition.

### 4.4 Astrological-significance questions

These ask whether formal features correspond to independent expert judgments, phenomenology, autobiographical data, or prospective outcomes.

Examples:

- Does terminal-basin concentration correspond to independently rated topical integration?
- Do condition-qualified graph structures add reproducible information beyond standard delineation?
- Are articulation/bottleneck structures associated with independently coded interpretive themes?
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
- independent/manual reconstruction possible.

### R1 — Mathematical characterization

Goal: calculate properties of the encoded chart/network without asserting new astrological meaning.

Current examples:

- terminal SCC/basin;
- route depth;
- upstream capture;
- aspect clustering/betweenness;
- articulation/bridge structure;
- typed motifs;
- harmonic magnitude;
- multilayer overlap/participation.

### R2 — Exploratory astrological hypothesis

Goal: test whether an R1 property corresponds to an independently measured criterion.

### R3 — Replication

Goal: reproduce the relationship in independent charts, periods, astrologers, or datasets.

### R4 — Candidate theory

Only repeated support justifies movement toward a new interpretive technique.

## 6. Current graph research

Current graph model:

```text
naf.research.graph_analytics.v0.4.1
```

### Classical dispositor graph

The classical-seven ruler network is treated as a functional digraph under traditional domicile rulership. Current analytics include SCC condensation, terminal basins, route depth, upstream capture, and nonterminal bottlenecks.

### Aspect graph

Current analytics include components, degree, clustering, normalized unweighted betweenness, articulation points, bridges, typed triangle motifs, and exact ≤1° subsets.

### Multiplex overlap

Current explicit overlap:

```text
E_aspect ∩ E_dispositor
```

The system does not aggregate relation layers into one undifferentiated power network.

## 7. Null models — mandatory next gate

### Geometric longitude null

Randomize longitudes, then recompute aspects.

### Label permutation

Preserve geometry, permute object identities.

### Degree-preserving graph null

Rewire while preserving degree sequence where the graph semantics make this appropriate.

### Layer-overlap null

Preserve layer size/density, randomize pair assignment.

### Matched astronomical null

Use realistic birth instants/locations when independent longitude randomization would destroy dependencies material to the question.

### Rotation null

Rotate a full chart while preserving internal geometry when isolating house/angle dependence.

### Time-shift null

For future event/timing research, shift event dates/windows within valid observation periods.

No `rare`, `high`, `dominant`, `exceptional`, or `enriched` graph language before comparison.

## 8. Primitive condition and graph research

Primitive condition is now implemented, so the research question has evolved from “wait until v0.4 exists” to:

```text
How much does primitive condition change or qualify graph-based conclusions?
```

Useful comparisons:

```text
topology only
vs
primitive condition only
vs
primitive condition + topology
```

Later, after v0.4.2/v0.4.3:

```text
primitive + relational + compound condition + topology
```

Do not create a condition-weighted centrality score merely because weighting is mathematically possible. Every weighting must answer a defined research question and undergo sensitivity/null evaluation.

## 9. Interpretation research

The current energetic synthesis is a versioned interpretation model, not a validated predictive theory.

Research questions may include:

- Do users distinguish graph facts from interpretive hypotheses more accurately with the current card hierarchy?
- Do house+ruler+condition explanations improve expert agreement or novice understanding?
- Which interpretation profiles generate stable, useful descriptions across independent charts?
- Which statements are too generic to discriminate among chart structures?
- Do balanced/depleted/excess framings improve agency without increasing deterministic belief?

Interpretation text must remain downstream from deterministic evidence.

## 10. Canonical-chart overfitting is prohibited

`NAF-CANON-0001` exists for regression stability.

Rules:

- do not tune thresholds to make it interesting;
- use synthetic fixtures for edge cases;
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

With explicit consent, future datasets may test:

- expert agreement about structural descriptors;
- associations between graph/condition features and independently coded domains;
- timing-window event density;
- chart-architecture similarity versus independent life-history similarity;
- incremental value of traditional techniques.

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

A descriptor or interpretation technique moving toward theory must document:

- formal definition;
- implementation version;
- object/graph scope;
- datasets examined;
- rule-set versions;
- null models;
- preregistration status where relevant;
- replication attempts;
- effect estimates and uncertainty;
- multiple-comparison handling;
- sensitivity tests;
- known failures;
- competing explanations;
- expert commentary;
- current confidence status.

Suggested labels:

```text
experimental
observational
replicated
provisional-theory
traditional-source-backed
retired
```

## 15. Reproducibility package

Publishable results should ideally retain:

- code commit SHA;
- schema/model versions;
- astronomy provider/version;
- rule IDs;
- orb policy;
- feature definitions;
- data provenance/consent;
- random seeds;
- preprocessing;
- exact analysis command/notebook;
- limitations;
- negative/failed analyses relevant to the hypothesis.

## 16. External technical anchors

Technical references justify methods, not astrological validity. Examples include Tarjan SCCs, Brandes betweenness, node-link/matrix HCI research, multilayer-network theory, W3C PROV, FAIR principles, and network-motif methodology.

## 17. Long-term objective

Noetic Atlas should become an astrological observatory capable of asking:

> What structure is present?

> How was it produced?

> What traditional condition qualifies it?

> What does the selected interpretation model infer?

> What would falsify that inference?

> When does the structure activate or recur?

> Does another rule model produce the same result?

> Does the visualization actually help users recover it?

> Does a proposed descriptor survive a null comparison and independent replication?
