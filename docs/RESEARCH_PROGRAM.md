# Noetic Atlas — Research Program and Theory Development

## 1. Purpose

Noetic Atlas is intended to do more than digitize existing astrological practice.

Its research purpose is to expose structures, recurrences, and cross-layer relationships that conventional chart interfaces may conceal, then evaluate whether those structures are useful, reproducible, and—only where evidence supports it—astrologically meaningful.

The project distinguishes:

1. **historical-rule reproduction**;
2. **mathematical properties of the encoded model**;
3. **exploratory descriptors**;
4. **visualization/HCI performance**;
5. **empirical or phenomenological evidence**;
6. **candidate interpretive theory**.

These categories must not be collapsed.

Current research promotion status for exploratory descriptors remains **hold** until the condition substrate and minimum temporal substrate are stable enough to support meaningful comparison.

---

## 2. Research posture

Noetic Atlas is neither designed to prove astrology true nor to protect traditional techniques from scrutiny.

The research posture is:

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

A negative result is useful.

A descriptor that performs no better than a plausible randomized baseline should not be promoted because it produces attractive charts.

---

## 3. What can be scientifically studied now

The current project contains several different kinds of research question.

### 3.1 Purely mathematical questions

These concern the formal model itself.

Examples:

- What SCCs exist in a selected rulership graph?
- How many house routes terminate in each component?
- What is the path-length distribution?
- What is the aspect-degree distribution?
- How does topology change when a rulership model changes?

These questions do not require astrological validity. Once the graph is defined, the graph properties are deterministic.

### 3.2 Visualization/HCI questions

These ask whether Noetic Atlas is a better instrument for specific information tasks.

Examples:

- Does Flow Map reduce time to trace a dispositor chain?
- Does Aspect Matrix improve pairwise relation accuracy?
- Does coordinated highlighting reduce errors?
- Does node isolation help novices learn rulership faster?
- Do experts reach higher agreement about structural facts when provenance is visible?

These can be tested even by researchers who make no assumption about astrological causation.

### 3.3 Astrological-significance questions

These ask whether a formal feature corresponds to expert judgments, autobiographical data, or future outcomes.

Examples:

- Is route convergence associated with independent expert judgments of chart centralization?
- Do condition-aware topology measures add information beyond standard traditional delineation?
- Do preregistered timing windows correspond to event density above time-shift nulls?

These require stronger controls and cannot be answered from a canonical specimen.

---

## 4. Why the visualization strategy is testable rather than decorative

The current interface deliberately combines node-link and matrix representations.

Controlled information-visualization research has shown that node-link and matrix representations have different task strengths. Ghoniem, Fekete, and Castagliola (IEEE InfoVis 2004) found path-finding consistently favored node-link diagrams, while matrix representations performed better on many tasks as graphs became larger.

That supports the current design hypothesis:

```text
Natal Field / Flow Map → paths, neighborhoods, topology
Aspect Matrix           → pairwise lookup and dense comparison
```

It does **not** prove the current UI is optimal.

The wheel should therefore remain a control condition in future HCI work rather than being framed as an obsolete visualization.

Candidate outcomes:

- completion time;
- accuracy/error rate;
- confidence calibration;
- recall;
- novice learning rate;
- NASA-TLX or another validated workload measure where appropriate;
- expert inter-rater agreement;
- ability to correctly identify which claims are calculations versus interpretations.

---

## 5. Research layers

### R0 — Historical rule reproduction

Goal: encode a technique faithfully enough that an expert can reproduce it manually.

Examples:

- Lot of Fortune;
- annual profection;
- domicile dispositors;
- bounds;
- reception.

Success criteria:

- source identified;
- variant named;
- formula formalized;
- boundary cases documented;
- calculation matches independent reference/manual examples.

### R1 — Mathematical characterization

Goal: calculate properties of the encoded structure without asserting new astrological meaning.

Examples:

- terminal SCC;
- route depth;
- harmonic magnitude;
- motif count;
- route convergence;
- cross-layer participation.

Success criteria:

- deterministic;
- reproducible;
- mathematically defined;
- sensitivity behavior known;
- implementation tested.

### R2 — Exploratory astrological hypothesis

Goal: ask whether a mathematical property corresponds to an independently measured astrological or autobiographical phenomenon.

Example:

> Do charts with unusually high ruler-route convergence receive independently higher expert ratings for topical concentration?

Success criteria:

- operational definition before outcome inspection where feasible;
- comparison group/null specified;
- measurable endpoint;
- analytic choices logged.

### R3 — Replication

Goal: reproduce the relationship in independent charts, periods, astrologers, or datasets.

### R4 — Candidate theory

Only after repeated support should a new descriptor be considered for interpretive promotion.

Even then, it remains versioned and challengeable.

---

## 6. Current exploratory descriptors

Current `src/research/pattern-engine.mjs` includes deliberately limited descriptors.

### 6.1 Circular harmonic spectrum

For longitudes `θ_i`:

```text
R_n = |(1/N) Σ exp(i n θ_i)|
```

This measures angular concentration at harmonic `n`.

It is a geometric descriptor. It does not assume the harmonic is astrologically meaningful.

Research questions:

- Which harmonics are unusual relative to matched astronomical nulls?
- Do named traditional configurations produce expected harmonic signatures?
- Are high-order signatures stable under object-set and orb-policy changes?

### 6.2 Ruler-route convergence

Given all house-ruler/dispositor routes, measure how strongly routes terminate on common nodes/components.

Research questions:

- Is convergence associated with independent expert structural judgments?
- Does convergence remain stable across traditional rule variants?
- Does condition-aware convergence outperform topology-only convergence for defined tasks?

### 6.3 Multilayer participation

Count or weight how many distinct structural layers include an object.

Potential layers:

- aspect graph;
- house rulership;
- dispositorship;
- lot rulership;
- angularity;
- condition relations;
- time-lord activation;
- transit activation.

This is **not** currently a planet-strength score.

The multilayer formulation is motivated by network science’s treatment of systems with multiple relation types, but astrological significance requires independent testing.

---

## 7. Null models are mandatory

Pattern discovery without comparison is not enough.

### Longitude randomization

Randomize longitudes under a clearly defined distribution.

Use for geometric descriptors when astronomical realism is not required.

### Matched astronomical null

Sample realistic birth instants/locations from a defined distribution so planetary dependencies are preserved.

Prefer this when testing properties that could be distorted by impossible independent longitudes.

### Rotation null

Rotate an entire chart while preserving internal angular relations.

Useful for separating angle/house dependence from aspect geometry.

### Object-label permutation

Preserve longitudes while permuting identities.

Useful when asking whether object identity matters beyond geometry.

### Time-shift null

Shift event dates or timing windows within a valid observation interval.

Useful for temporal/event analyses.

The null must preserve what is irrelevant to the hypothesis while disrupting the relation under test.

---

## 8. Canonical-chart overfitting is prohibited

`NAF-CANON-0001` is a regression fixture.

It must not become the target the research metrics are tuned to make interesting.

Rules:

- do not tune thresholds to optimize the canonical specimen;
- use synthetic fixtures for mathematical edge cases;
- use independent charts before promoting descriptors;
- record when a metric was proposed relative to the samples examined;
- preserve boring and failed outputs where feasible.

A regression fixture can prove code stability. It cannot validate theory.

---

## 9. Condition-aware research is the next priority

Current graph structure is condition-blind.

Before testing claims about “dominant,” “central,” or “consequential” planets, the framework should represent major traditional condition dimensions independently:

```text
domicile/exaltation/adversity
sect
triplicity
bound
angularity
reception
overcoming
bonification/maltreatment
mitigation
```

Research then becomes able to compare:

```text
topology only
vs
condition only
vs
condition + topology
```

This is a far stronger design than quietly turning graph centrality into a traditional strength surrogate.

---

## 10. N-of-1 longitudinal research

A densely annotated single life can be useful if treated carefully.

Potential workflow:

```text
calculate symbolic state through time
→ predefine event categories
→ compare event and non-event windows
→ inspect recurrence/technique overlap
→ use time-shift baselines
```

Risks:

- retrospective selection;
- memory distortion;
- post-hoc interpretation;
- too many candidate astrological features.

Therefore N-of-1 results should remain exploratory unless prospectively specified and replicated.

---

## 11. Cohort research

With explicit consent, future datasets may support questions such as:

- Are structural descriptors associated with independently coded event domains?
- Do experts agree more when using Noetic Atlas views?
- Do preregistered salient windows show above-null event density?
- Are charts judged similar by experts close under a defined structural metric?
- Which traditional techniques add unique versus redundant information?

Always distinguish:

```text
mathematical chart similarity
from
psychological/life-history similarity
```

The first is defined by the model. The second is empirical.

---

## 12. Life-event annotation safeguards

Future event records should separate:

- date certainty;
- event category;
- free-text description;
- perceived importance;
- whether the event was entered before or after viewing astrological output;
- whether the coding scheme was preregistered.

Prospective or analysis-blind entry is especially valuable for reducing retrospective fitting.

---

## 13. Cross-technique temporal research

A future major question is whether independently defined timing techniques identify overlapping periods above chance.

Potential channels:

```text
transits
+ annual profections
+ zodiacal releasing
+ stations/eclipses
```

Do not merge them into an opaque “activation score” first.

Preserve channels, calculate overlap explicitly, and compare with null expectations.

---

## 14. Birth-time uncertainty

Birth time affects:

- Ascendant;
- houses;
- MC;
- lots;
- Moon to a lesser degree;
- timing-sensitive calculations.

Future analyses should support sensitivity intervals or Monte Carlo resampling over plausible birth-time uncertainty.

Useful output states include:

```text
stable under ±5 min
changes under ±15 min
undefined without reliable time
```

---

## 15. Theory-promotion requirements

A descriptor can move toward interpretive use only when documentation records:

- formal definition;
- implementation version;
- datasets examined;
- rule-set versions;
- null models;
- preregistration status where relevant;
- replication attempts;
- effect estimates and uncertainty;
- multiple-comparison handling;
- known failures;
- competing explanations;
- domain-expert commentary;
- current confidence state.

Suggested labels:

```text
experimental
observational
replicated
provisional-theory
traditional-source-backed
retired
```

`traditional-source-backed` and `empirically replicated` are different epistemic statuses.

---

## 16. Reproducibility package

Any publishable Noetic Atlas result should ideally include:

- code commit SHA;
- schema version;
- astronomy provider/version;
- rule IDs;
- orb policy;
- feature definitions;
- data provenance and consent state;
- random seeds;
- preprocessing;
- exact analysis command/notebook;
- limitations;
- negative/failed analyses relevant to the same hypothesis.

This is the research equivalent of the Derivation Ledger.

---

## 17. External methodological anchors

The following references justify specific **technical** choices, not astrological validity:

- Tarjan (1972), *Depth-First Search and Linear Graph Algorithms*, DOI `10.1137/0201010` — SCC computation.
- Ghoniem, Fekete & Castagliola (2004), *A Comparison of the Readability of Graphs Using Node-Link and Matrix-Based Representations*, DOI `10.1109/INFVIS.2004.1` — task-dependent node-link/matrix tradeoffs.
- Kivelä et al. (2014), *Multilayer networks*, DOI `10.1093/comnet/cnu016` — preserving multiple relation types as distinct network layers.
- W3C PROV-O (2013) — general provenance modeling.
- Wilkinson et al. (2016), *The FAIR Guiding Principles for scientific data management and stewardship*, DOI `10.1038/sdata.2016.18` — detailed provenance and reusable research metadata.

See [Current State and Scientific Rationale](CURRENT_STATE_AND_SCIENTIFIC_RATIONALE.md) for the explicit boundary between what these sources justify and what remains unvalidated.

---

## 18. Long-term objective

The long-term objective is not a larger library of canned meanings.

It is an observational environment in which a researcher or practitioner can ask:

> What structure is present?

> How was it produced?

> What traditional condition qualifies it?

> When does it recur?

> Does another rule model produce the same structure?

> Does the visualization actually help users recover it?

> Does a new descriptor survive a null comparison?

> What would falsify the interpretation?

At that point Noetic Atlas becomes an **astrological observatory** rather than a horoscope generator.
