# Noetic Atlas Research Constitution

Status: living constitutional doctrine. Current framework baseline: v0.4.7.

## North star

Noetic Atlas is both an astrological instrument and an experimental apparatus for investigating astrology as a formal symbolic system.

**Consumer utility is the application. Discovery is the research program.**

The governing combination is **radical curiosity under strict provenance**.

> **Noetic Atlas must remain capable of surprising its creators.**

If every result is something the system was explicitly told to find, the project has become a sophisticated lookup engine rather than a research instrument.

## Frozen architectural law

```text
one astronomical/chart state
→ many explicit models
→ many coordinated projections
```

A view, experiment, null generator, or interpretation may not independently recalculate or silently replace upstream chart state.

## Four separations that may never collapse

```text
Operational ≠ Experimental ≠ Discovery
```

```text
Detection ≠ Unexpectedness
```

```text
Unexpectedness ≠ Population Frequency
```

```text
Population Frequency ≠ Interpretation
```

These are not rhetorical cautions. They are architectural boundaries that determine what fields a subsystem is allowed to change.

## Three regimes

### Operational

Reproducible techniques inside an explicitly named astrological model.

Operational means well-defined and reconstructible within that model. It does **not** mean experimentally proven as physical law.

The default Personal aperture is Operational.

### Experimental

Named and versioned alternatives evaluated against an Operational control.

Examples include alternative rulerships, expanded aspect policies, additional celestial objects, recovered historical rules, hidden-geometry policies, or new mathematical field models.

Every Experimental result must carry a `hypothesis_id`, model identity, assumptions, provenance, and reversible comparison against its control. It never overwrites Operational state.

### Discovery

Open search for unnamed but mathematically reproducible structures.

Detection precedes naming. Counterfactual comparison precedes unusualness language. Population baselines precede rarity language. Interpretation follows comparison and replication rather than preceding them.

Temporary machine identifiers are preferred until a structure is sufficiently formalized.

## Constitutional principles

1. **One astronomical state, many explicit models.**
2. **Tradition is prior knowledge, not unquestionable truth.**
3. **Experimental models never silently modify Operational models.**
4. **Mathematical detection precedes interpretation.**
5. **Structural novelty is not evidence of significance.**
6. **Every research claim carries provenance, assumptions, and model identity.**
7. **Null comparison precedes counterfactual-unusualness language.**
8. **Population data precede population-rarity language.**
9. **The absence of an inherited astrological name does not imply the absence of a reproducible structure.**
10. **The presence of a reproducible structure does not imply astrological meaning.**
11. **Different null models answer different questions and may not be pseudo-replicated into one score.**
12. **A failed/null-negative result is information.**
13. **Cardinality and formal definitions outrank desired narrative output.**
14. **Model-relative mathematical facts must be labeled as model-relative.**
15. **No research-status vector may be collapsed into a universal confidence/strength score.**
16. **Public product claims must reflect what the current browser actually exposes, not merely what exists on `main`.**
17. **The instrument exists both to clarify inherited astrology and to make previously invisible questions askable.**

## Research lifecycle

The current lifecycle is:

```text
Detect
→ Describe
→ Derive
→ Compare to named counterfactual
→ Estimate population frequency
→ Test external association
→ Replicate
→ Interpret
```

v0.4.7 implements the pipeline through named counterfactual comparison. Population frequency, external association, general replication, and interpretive validation remain later stages.

## Research-status vectors

The general registry preserves independent dimensions for:

- geometry;
- derivation;
- historical analogue;
- population frequency;
- null comparison;
- phenomenological association;
- replication;
- interpretation.

Hypergraph candidates additionally use the compact research state:

```text
[D,V,B,P,I]
```

where the implemented v0.4.7 progression is:

```text
[1,1,0,0,0]  detected + verified
        ↓ admissible named counterfactuals complete
[1,1,1,0,0]
```

No v0.4.7 code path advances population or interpretation.

## Null-model constitution — v0.4.6

Every null must explicitly declare:

```text
preserves
randomizes
question
assumptions
limitations
admissible statistics
```

The observed and simulated states must be evaluated with the **same executable statistic**.

Finite Monte Carlo uses +1 correction so p=0 is impossible.

Raw and adjusted p-values must remain separate. Multiple-testing family/procedure/rank/size must be visible. BH-FDR is the current exploratory default where declared.

The system may report:

```text
departure-detected
no-departure-detected
```

but may not turn those into a pass/fail score across null models.

N_G, N_L, N_D, and N_T are separate counterfactual questions. `3 of 4 passed` is constitutionally invalid.

## Hypergraph constitution — v0.4.7

Higher-order configurations are first-class research objects, not informal collections of edges.

The v0.4.7 object classes are:

```text
geometric_polygon
topological_basin
compound_hybrid
```

A hyperedge must carry participant/cardinality identity, exact geometric/topological measurements where applicable, derivation payload, SHA-256 derivation hash, research status, and model identity.

A geometric configuration must satisfy its typed template and declared orb/RMS policy. It is invalid to invent a third participant because an expected delineation wants a cluster.

A hybrid must preserve the separateness of the layers it couples. Aspect geometry does not become dispositorship; dispositorship does not become geometry.

## Population-frequency firewall

Counterfactual ensembles are not empirical populations.

A percentile under independent longitude randomization does not estimate how often the structure occurs in real natal charts.

The words `rare`, `population-enriched`, and equivalent prevalence claims remain unavailable until the Population Cohort Engine is implemented with real empirical reference distributions and documented sampling design.

## Interpretation firewall

A reproducible structure can be interesting without having established human meaning.

No mathematical, null-model, graph, or hypergraph output automatically authorizes claims of:

- personality;
- fate;
- spiritual development;
- medical condition;
- causality;
- prediction;
- measured physical energy.

Interpretation is a separately versioned downstream model.

## Field-language boundary

Noetic Atlas may formalize resonance, phase, coupling, interference, persistence, frequency, vibration, torque, or energy as mathematical or phenomenological language.

Such terms are not presented as laboratory-confirmed planetary physical forces unless independent physical evidence exists.

The correct research question is whether a precise model produces reproducible consequences and whether competing models explain observations better.

## Historical recovery is discovery too

Hellenistic, Persian/Arabic, Medieval, Jyotish, Renaissance, and modern traditions may be encoded as parallel source-locked models.

Apparent equivalence across traditions is a hypothesis to test, not permission to collapse terminology or history.

Modern configuration names may be layered over older angular primitives only when those historical and modern claims remain distinguishable.

## Consumer / research separation

Personal Mode uses the Operational model by default and emphasizes clarity, readable evidence, house/ruler flow, condition, resonance, and proof.

Research Mode exposes hypothesis packs, alternate models, Discovery candidates, null profiles, hypergraphs, sensitivity measurements, and research provenance.

Both modes consume the same chart authority.

Research Mode opens the aperture; it does not create a second chart.

## Public-release truth rule

A merged subsystem is not automatically a public product feature.

A feature may be described as publicly available only when:

```text
implementation
+ entrypoint
+ current shell
+ feature exposure
+ version chrome
+ bootstrap behavior
+ UI regression
+ deployed Pages behavior
```

agree.

The current v0.4.7 framework violates this product-completion condition because the root public entry remains on the v0.4.5 shell. This is explicitly tracked as a release blocker rather than hidden by documentation.

## Promotion rule

No Experimental or Discovery object enters the Operational model by popularity, visual novelty, interpretive appeal, or a single favorable null comparison.

Promotion requires an explicit decision supported by source/model clarity and the comparison, population, replication, external-validation, and interpretive standards appropriate to the claim.

## Current dependency law

```text
v0.4.6 Null Model Laboratory                         DONE
v0.4.7 Formal Configurations & Hypergraphs            DONE — implementation
v0.4.7 Public Productization Gate                     BLOCKING
v0.4.8 Hidden Geometry Engine                         NEXT
v0.4.9 Experimental Model Laboratory                  AFTER
v0.5.0 Population Cohort Engine                       AFTER
```

No later research milestone should be used to evade an unresolved upstream product or epistemic dependency.