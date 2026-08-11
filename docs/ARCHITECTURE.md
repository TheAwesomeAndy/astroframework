# Noetic Atlas Framework — Architecture

## Purpose

This document defines the technical boundaries of the Noetic Atlas Framework (NAF). The central architectural rule is that astronomical calculation, astrological rules, visualization, and language-model synthesis are separate layers with explicit interfaces.

## System pipeline

```text
Birth / event input
      |
      v
Astronomy Adapter
      |
      v
Astrological Rule Engine
      |
      v
Canonical Structured Model
      |----------------------|
      v                      v
Graph/Topology Engine     Temporal Engine
      |                      |
      |----------|-----------|
                 v
          Visualization State
                 |
                 v
          AI Orchestration
```

## 1. Astronomy Adapter

Input:

- date/time;
- timezone;
- latitude/longitude;
- ephemeris configuration.

Output:

- absolute longitudes;
- speeds;
- declination/latitude when required;
- angles;
- station state.

The adapter should return provenance including source library and version.

## 2. Rule Engine

Rule engine functions must be deterministic and versioned.

Example namespaces:

```text
rules.hellenistic.whole_sign
rules.hellenistic.sect
rules.hellenistic.dignity
rules.hellenistic.lots
rules.hellenistic.profections
rules.hellenistic.zodiacal_releasing
rules.modern.outer_planets
rules.transpersonal.interpretation
```

Traditions should not share rules unless the shared behavior is deliberate and documented.

## 3. Canonical model

The canonical model should support immutable raw calculation data plus derived layers.

Suggested top-level structure:

```json
{
  "schema_version": "0.2",
  "chart": {},
  "astronomy": {},
  "placements": [],
  "houses": [],
  "aspects": [],
  "rulership_edges": [],
  "lots": [],
  "timing": {},
  "derived_metrics": {},
  "provenance": {}
}
```

## 4. Graph engine

Separate graphs should exist for different semantic relations.

### Aspect graph

Usually undirected or relation-specific edges.

### Rulership/dispositor graph

Directed edges.

### House dependency graph

Directed house -> ruler -> house paths.

### Temporal activation graph

Optional time-indexed graph in which weights vary with `t`.

Do not create one giant graph unless a specific analysis requires it.

## 5. Topology metrics

First supported metrics:

- connected components;
- strongly connected components;
- terminal SCCs;
- in/out degree;
- betweenness;
- path length;
- dependency depth;
- cycle enumeration.

All metrics must preserve the graph definition that produced them.

## 6. Coupling model

Aspect visualization may use a bounded symbolic weight:

```text
w = aspect_base * orb_kernel * phase_factor * condition_factor
```

Each term must be configurable and inspectable.

Example orb kernel:

```text
orb_kernel = exp(-(orb / sigma)^2)
```

This is a visualization/model score only.

## 7. Temporal engine

The temporal engine should generate structured events and continuous activation series.

Suggested outputs:

```text
transit_hits[]
station_events[]
profection_periods[]
releasing_periods[]
activation_series[target_id][timestamp]
```

No Life Spectrum band should be rendered without a source record.

## 8. State vector

Do not define a state vector until feature semantics are stable.

Initial candidate blocks:

```text
x(t) = [
  aspect_activation_block,
  house_activation_block,
  ruler_activation_block,
  time_lord_block,
  condition_block
]
```

Normalize each block separately before dimensionality reduction.

## 9. Visualization state

All views should respond to a shared selection state:

```json
{
  "selected_objects": [],
  "selected_houses": [],
  "aspect_filter": {},
  "time_window": {},
  "tradition": "hellenistic",
  "focus_path": []
}
```

This enables brushing/linking across Natal Field, Flow Map, Life Spectrum, and Life Space.

## 10. AI contract

AI receives:

- structured computed state;
- current UI selection;
- user question;
- allowed tradition adapters.

AI returns:

- requested view actions;
- explanatory text;
- provenance references;
- optional interpretive hypotheses.

AI does not return unverified ephemeris values.

## 11. Security/privacy

Birth data is sensitive personal information in product practice even when not legally classified identically across jurisdictions.

Production requirements:

- minimize storage;
- encrypt at rest and in transit;
- explicit deletion controls;
- separate identifying profile data from chart-derived features;
- never train models on private user charts without explicit consent;
- use anonymized identifiers for research exports.

## 12. Versioning

Version independently:

- schema;
- astronomy adapter;
- each rule set;
- scoring model;
- visualization grammar;
- interpretation prompts.

A rendered conclusion should eventually be reproducible from its version metadata.
