# Noetic Atlas Research Discovery Layer

## Goal

The research layer exists to search for higher-order relationships that conventional horoscope display may make difficult to notice. It must not manufacture astrological meaning from mathematical novelty.

A useful distinction is:

```text
pattern detected ≠ astrological significance established
```

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

## Future directions

Candidate families include:

- cross-layer motif discovery involving planets, houses, lots and rulers simultaneously;
- graph bottleneck and bridge analysis;
- recurrent activation motifs over time;
- similarity of life periods in a high-dimensional activation space;
- agreement/disagreement among Hellenistic, medieval, transpersonal and Jyotish rule sets;
- family/synastry multiplex-network motifs;
- sensitivity analysis: which conclusions remain stable under reasonable orb, house or calculation-policy changes;
- null-model testing against randomized longitudes while preserving selected marginal constraints.

The Observatory should make negative results visible. A pattern that disappears under replication or null testing is information, not failure.
