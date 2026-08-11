# Noetic Atlas Research Discovery Layer

## Goal

The research layer exists to search for higher-order relationships that conventional horoscope display may make difficult to notice. It must not manufacture astrological meaning from mathematical novelty.

A useful distinction is:

```text
pattern detected ≠ astrological significance established
```

## Current promotion status

v0.3 research outputs are deliberately marked:

```text
status = exploratory-not-interpretive
promotion_status = hold
condition_engine_complete = false
temporal_engine_complete = false
```

This means the descriptors may be inspected, compared, visualized, and used to generate research questions, but they are **not eligible to become consumer-facing natal strength, fate, prediction, psychological, spiritual, or causal claims**.

The hold remains in force until the v0.4 condition substrate is stable and the relevant descriptor has survived replication and null-model testing. Temporal claims additionally require a stable temporal engine.

The reason is methodological: a descriptor built on an incomplete natal substrate may be mathematically correct while omitting traditional variables that materially change the chart model. Interesting numbers should not acquire interpretive authority merely because they are reproducible.

## Initial descriptors

### Circular harmonic spectrum

For planetary longitudes θ_i, the nth circular harmonic is:

```text
R_n = | (1/N) Σ exp(i n θ_i) |
```

This quantifies angular concentration/symmetry at different harmonics without first classifying pairwise relationships into traditional aspect names.

It may reveal structures adjacent to conventional conjunction/opposition/trine/square reasoning, but NAF labels the output as descriptive until replicated and interpreted.

### Ruler-route convergence

All twelve whole-sign houses are routed through their domicile lords and dispositors. The terminal distribution is then measured.

If many nominally different houses funnel into the same terminal component, the chart has high routing convergence under that rulership model.

This is a mathematical property of the rulership graph, not yet a claim that those houses will behave identically in life.

### Multilayer participation

For each object, NAF counts participation across selected layers:

- aspect edges;
- incoming dispositor edges;
- outgoing dispositor edges;
- number of houses for which it is the entry ruler;
- number of computed lots it rules.

The initial implementation is intentionally unweighted. Future work can compare weighted definitions, but no number is called a "power" or "importance" score without validation.

## Discovery protocol

Candidate new structures should pass through:

1. Formal definition.
2. Deterministic implementation.
3. Unit tests.
4. Replication across unrelated charts.
5. Null/randomized comparison.
6. Expert astrologer inspection.
7. Longitudinal/event comparison where ethically and methodologically appropriate.
8. Only then, interpretive hypotheses.

## Promotion gates

A descriptor may move from exploratory output to a candidate astrological technique only when all applicable gates are documented:

```text
structural substrate complete for the variables being claimed
→ condition sensitivity evaluated
→ cross-chart replication
→ null/randomized baseline
→ parameter sensitivity analysis
→ expert review
→ longitudinal or cohort evidence when the claim is temporal or experiential
→ explicit interpretive hypothesis
```

A descriptor can fail any gate and remain useful as a mathematical diagnostic. Failure to acquire astrological meaning does not invalidate the computation itself.

## Future directions

Candidate families include:

- cross-layer motif discovery involving planets, houses, lots and rulers simultaneously;
- graph bottleneck and bridge analysis;
- condition-aware graph motifs once v0.4 exists;
- recurrent activation motifs over time;
- similarity of life periods in a high-dimensional activation space;
- agreement/disagreement among Hellenistic, medieval, transpersonal and Jyotish rule sets;
- family/synastry multiplex-network motifs;
- sensitivity analysis: which conclusions remain stable under reasonable orb, house or calculation-policy changes;
- null-model testing against randomized longitudes while preserving selected marginal constraints.

The Observatory should make negative results visible. A pattern that disappears under replication or null testing is information, not failure.
