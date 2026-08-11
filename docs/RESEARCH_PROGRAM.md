# Noetic Atlas — Research Program and Theory Development

## 1. Purpose

Noetic Atlas is intended to do more than digitize existing astrological practice.

Its research purpose is to expose structures, recurrences, and cross-layer relationships that conventional chart interfaces may conceal, then evaluate whether those structures are consistently meaningful.

The project therefore distinguishes between:

1. **implemented historical astrology**;
2. **mathematical properties of the encoded model**;
3. **new exploratory descriptors**;
4. **empirical or phenomenological evidence**;
5. **candidate interpretive theory**.

These categories must not be collapsed.

---

## 2. Research posture

Noetic Atlas is neither designed to prove astrology true nor to guarantee that every traditional technique survives scrutiny.

The research posture is:

```text
represent faithfully
→ derive transparently
→ visualize clearly
→ detect patterns
→ test against alternatives
→ compare with experience/data
→ refine or reject hypotheses
```

The system should be capable of generating negative results.

If a proposed descriptor performs no better than a randomized baseline, that is useful information.

---

## 3. Why new structure may become visible

Traditional practice is constrained by human perception and by the horoscope wheel as an interface.

Humans are good at recognizing some structures visually but poor at simultaneously tracking:

- dozens of directed ruler paths;
- repeated graph motifs;
- multiple lot/ruler interactions;
- time-varying edge weights across decades;
- nested timing systems;
- high-order harmonic organization;
- recurrence in a high-dimensional symbolic state;
- cross-chart structural similarity.

Computational representation makes these problems tractable.

The goal is not to replace astrological judgment with metrics. It is to create new observables that an expert can inspect.

---

## 4. Research layers

### R0 — Historical rule reproduction

Goal: encode a technique faithfully enough that an expert can reproduce it manually.

Examples:

- Lot of Fortune;
- annual profection;
- traditional domicile dispositors.

Success criterion:

- source identified;
- formula formalized;
- calculation matches independent manual/reference examples.

### R1 — Mathematical characterization

Goal: calculate properties of the encoded structure without asserting new astrological meaning.

Examples:

- terminal SCC;
- route depth;
- harmonic magnitude;
- motif count;
- network convergence.

Success criterion:

- deterministic and reproducible;
- mathematically well-defined;
- invariant/sensitivity behavior known.

### R2 — Exploratory astrological hypothesis

Goal: ask whether a mathematical property corresponds to a recognizable astrological or autobiographical phenomenon.

Example:

> Do charts with unusually high ruler-route convergence tend to be independently described by experts as organized around fewer dominant topical basins?

Success criterion:

- hypothesis stated before outcome where feasible;
- comparison group/null model specified;
- outcome measurable.

### R3 — Replication

Goal: reproduce the relationship in independent charts, time periods, astrologers, or datasets.

### R4 — Candidate theory

Only after repeated support should a new descriptor be considered for interpretive promotion.

Even then, it remains versioned and challengeable.

---

## 5. Initial exploratory descriptors

Current `src/research/pattern-engine.mjs` contains deliberately limited experimental metrics.

### 5.1 Circular harmonic spectrum

For longitudes `θ_i`, define harmonic concentration:

```text
R_n = |(1/N) Σ exp(i n θ_i)|
```

Interpretation:

- this measures angular organization at harmonic `n`;
- it does not assume that the harmonic is astrologically significant;
- it can detect periodic structure without beginning from named aspect categories.

Research questions:

- Which harmonics are unusually concentrated relative to randomized charts?
- Do known traditional aspect configurations correspond to predictable harmonic signatures?
- Are there stable high-order signatures not captured by standard named aspects?

### 5.2 Ruler-route convergence

Given all house-ruler/dispositor routes, measure the degree to which routes converge on common nodes or terminal components.

Research questions:

- Is high convergence associated with expert judgments of centralized chart organization?
- Does convergence predict which planets/life domains recur in autobiographical narratives?
- Does convergence change under different rulership traditions in informative ways?

### 5.3 Multilayer participation

Count or weight the number of structural layers in which an object participates.

Potential layers:

- aspect graph;
- house rulership;
- dispositor routing;
- lot rulership;
- angularity;
- time-lord activation;
- transit activation.

Research question:

> Are objects with high cross-layer participation independently judged as more consequential than objects dominant in only one representation?

This is not yet a “planet strength” score.

---

## 6. Future research descriptors

Candidate families include:

### Topological descriptors

- SCC size and depth;
- terminal-basin count;
- route entropy;
- betweenness centrality;
- graph modularity;
- motif census;
- hypergraph participation;
- ruler-path asymmetry;
- house-to-house coupling graphs.

### Geometric descriptors

- harmonic spectrum;
- aspect phase concentration;
- angular-axis coherence;
- distribution of exactness;
- multi-body geometric motifs;
- antiscia-related symmetry if supported by a rule set.

### Temporal descriptors

- activation persistence;
- recurrence interval;
- temporal overlap among techniques;
- topology-change events;
- period similarity;
- transit/time-lord coherence;
- nested-regime transitions.

### State-space descriptors

- recurrence density;
- transition distance;
- local trajectory curvature;
- cluster residence time;
- nearest historical symbolic state;
- chart-specific attractor-like regions as a visualization metaphor.

### Cross-tradition descriptors

- agreement score between rule systems;
- disagreement localization;
- shared timing windows;
- ruler-model sensitivity;
- tropical/sidereal structural correspondence where meaningful.

---

## 7. Null models are mandatory

Pattern discovery is meaningless without comparison.

Possible null/randomized models include:

### Longitude permutation

Keep the same objects but randomize longitudes uniformly.

Use when asking whether a geometric metric is unusually strong.

### Rotation null

Rotate the entire chart by a random angle while preserving internal angular relationships.

Use when testing house/angle-dependent features separately from aspect geometry.

### Object-label permutation

Keep longitudes fixed but permute planet labels.

Use when asking whether identity-specific structure matters beyond geometry.

### Time-shift null

For temporal studies, shift life-event dates or transit windows within a valid sampling range.

### Matched astronomical null

Generate charts from matched dates/latitudes/time distributions to preserve realistic astronomical constraints.

The selected null must preserve the aspects of the data that are irrelevant to the hypothesis while disrupting the relationship being tested.

---

## 8. Avoiding canonical-chart overfitting

The canonical specimen exists for regression testing.

It must not become the design target for research metrics.

Rules:

- do not tune thresholds to make NAF-CANON-0001 look interesting;
- use synthetic fixtures for mathematical edge cases;
- use multiple independent charts before promoting a descriptor;
- document when a metric was first proposed relative to the charts examined;
- preserve failed/boring outputs where practical.

The canonical chart can prove that code remains stable. It cannot prove that a theory is valid.

---

## 9. N-of-1 longitudinal research

A deeply annotated single life can still be useful when treated carefully.

Potential workflow:

```text
calculate full symbolic state through time
→ predefine event categories or annotations
→ compare event windows with non-event windows
→ inspect recurrence and technique overlap
→ use within-person randomization/time-shift baselines
```

Benefits:

- controls for between-person differences;
- enables dense temporal analysis;
- allows qualitative context.

Risks:

- retrospective selection;
- memory distortion;
- post-hoc reinterpretation;
- too many possible astrological features.

Therefore N-of-1 findings should be labeled exploratory unless preregistered/replicated.

---

## 10. Cohort research

With explicit consent, future research datasets may support questions such as:

- Are certain structural descriptors associated with independently coded life-event domains?
- Do expert astrologers agree more when using the new visualizations?
- Do predicted salient periods show above-null autobiographical-event density?
- Are charts judged similar by experts close in the computational manifold?
- Which astrological techniques add unique information versus redundant information?

Cohort research must distinguish:

```text
mathematical chart similarity
from
psychological/life-history similarity
```

The first is computable by definition. The second is an empirical question.

---

## 11. Human-computer interaction research

Noetic Atlas itself is a visualization hypothesis.

The conventional wheel can serve as a control condition.

Possible outcomes:

- time required to trace a ruler chain;
- accuracy identifying aspect motifs;
- recall after viewing;
- perceived cognitive load;
- number/quality of insights generated;
- agreement among experts;
- novice learning rate;
- ability to distinguish calculation from interpretation.

A defensible independent research question is:

> **Which visual representations best communicate the relational and temporal structure of astrological systems?**

This question does not require accepting a causal astrological mechanism.

---

## 12. Life-event annotations

Event annotations are valuable but methodologically dangerous.

Each annotation should separate:

- date certainty;
- event category;
- user-generated description;
- perceived importance;
- whether the event was entered before or after viewing astrological results.

A future research schema should include fields like:

```json
{
  "event_date": "YYYY-MM-DD",
  "date_uncertainty_days": 0,
  "category": "career_transition",
  "importance": 4,
  "entered_blind_to_analysis": false,
  "free_text": "..."
}
```

Blind or pre-analysis entry is especially valuable for reducing retrospective fitting.

---

## 13. Cross-technique coherence

One major future research direction is whether multiple independent astrological techniques identify the same periods.

Examples:

```text
transit activation
+ annual profection
+ zodiacal releasing
+ eclipse/station proximity
```

Rather than merging them into one opaque score, NAF should preserve each channel and then calculate overlap/coherence explicitly.

Research questions:

- Is convergence across techniques more informative than any technique alone?
- Does convergence occur above a null expectation?
- Which techniques contribute independent information?

---

## 14. Theory promotion rules

A descriptor or relationship can move toward interpretive use only when documentation records:

- formal definition;
- implementation version;
- datasets examined;
- null models;
- replication attempts;
- effect estimates where applicable;
- known failures;
- competing explanations;
- domain-expert commentary;
- current confidence status.

Suggested status labels:

```text
experimental
observational
replicated
provisional-theory
traditional-source-backed
retired
```

Traditional-source-backed and empirically replicated are different categories and should remain different.

---

## 15. Research integrity risks

Primary risks include:

- confirmation bias;
- researcher degrees of freedom;
- multiple comparisons;
- p-hacking;
- autobiographical hindsight;
- selection bias in astrology-interested populations;
- birth-time uncertainty;
- ephemeris/calculation discrepancies;
- hidden rule-set variation;
- overinterpreting dimensionality reduction;
- treating graph metrics as meaningful because they sound sophisticated.

Every research design should explicitly state which of these risks apply.

---

## 16. Birth-time uncertainty

Birth time affects:

- Ascendant;
- house assignment;
- MC;
- lots;
- Moon position to a lesser degree;
- timing-sensitive calculations.

Future research should support uncertainty bands or Monte Carlo resampling over plausible birth-time intervals rather than treating uncertain times as exact.

A chart-derived result should eventually carry sensitivity information:

```text
stable under ±5 min
changes under ±15 min
undefined without reliable time
```

This may itself become a valuable visualization.

---

## 17. Reproducibility package

Any publishable NAF research result should ideally include:

- code commit SHA;
- schema version;
- astronomy provider/version;
- rule-set IDs;
- orb policies;
- feature definitions;
- anonymized or synthetic data where shareable;
- random seeds;
- preprocessing steps;
- exact analysis command/notebook;
- limitations.

This is the research equivalent of the Derivation Ledger.

---

## 18. Research and product separation

The consumer product may simplify the interface.

It must not simplify away the underlying methodology.

A consumer might see:

> “Several house-ruler pathways converge strongly on Mercury and Venus.”

The research system should still retain:

- exact graph;
- route table;
- convergence metric;
- normalization;
- rule set;
- provenance;
- confidence/interpretive status.

The public interface can reduce cognitive load without reducing epistemic integrity.

---

## 19. Long-term objective

The long-term objective is not a larger library of canned astrological meanings.

It is an observational environment in which a researcher or practitioner can ask:

> What structure is present?

> How was it produced?

> What else is connected to it?

> When does it recur?

> Does another tradition see the same period differently?

> Does this pattern repeat across other lives?

> Does it survive a null comparison?

> What would falsify the interpretation?

At that point Noetic Atlas becomes an **astrological observatory** rather than a horoscope generator.
