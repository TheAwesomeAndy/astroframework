# Noetic Atlas v0.4 — Astrological Condition Engine Specification

## Purpose

v0.4 adds the traditional condition layer that v0.3 intentionally lacks.

v0.3 answers:

```text
Where is the planet?
What is it connected to?
Where does it route?
```

v0.4 must additionally answer:

```text
Under an explicit Hellenistic rule set, what is the condition of the planet and of its relationships?
```

The condition engine is **not** a scoring engine. It produces a structured set of testimonies, statuses, relations, and provenance records. Any later quantitative summary must remain optional, transparent, decomposable, and downstream.

## Source basis

The initial Hellenistic implementation should be source-controlled against Christopher Brennan, *Hellenistic Astrology: The Study of Fate and Fortune* (2017), especially:

- Chapter 8, signs of the zodiac: domiciles, exaltations/depressions, triplicity schemes, Egyptian bounds;
- Table 8.1, Standard Triplicity Rulership Scheme;
- Table 8.3, Egyptian Bounds;
- Chapter 11, house division and dynamic/angular strength;
- Chapter 14, conditions of bonification and maltreatment, including overcoming, opposition/trine, counteraction, enclosure, adherence, striking with a ray, engagement, and reception;
- Chapter 15, triplicity rulers of the sect light and the importance of angularity.

Brennan also notes that sect modifies the capacity of benefics and malefics to bonify or maltreat, so sect must remain a dependency rather than a decorative field.

## Rule-set identity

The first condition model should be versioned as a bundle rather than a silent default.

Proposed identifier:

```text
naf.condition.hellenistic.brennan.v1
```

Its subrules must have independent IDs, for example:

```text
naf.condition.domicile.v1
naf.condition.exaltation.v1
naf.condition.triplicity.standard.v1
naf.condition.bounds.egyptian.v1
naf.condition.angularity.v1
naf.condition.reception.domicile.v1
naf.condition.exchange.domicile.v1
naf.condition.overcoming.sign_based.v1
naf.condition.bonification.overcoming.v1
naf.condition.maltreatment.overcoming.v1
```

If a rule is later revised, the old identifier remains reproducible.

## Data shape

A classical planet should receive a condition object similar to:

```json
{
  "planet": "Venus",
  "rule_set": "naf.condition.hellenistic.brennan.v1",
  "zodiacal_condition": {},
  "sect_condition": {},
  "triplicity": {},
  "bound": {},
  "angularity": {},
  "receptions": [],
  "exchanges": [],
  "configurations": [],
  "bonifications": [],
  "maltreatments": [],
  "mitigations": [],
  "ledger_refs": []
}
```

Each child object must contain its rule ID, inputs, result, and source reference.

## 1. Domicile and adversity

For each classical planet, compute whether it occupies:

- its domicile;
- the sign opposite one of its domiciles, commonly called detriment/adversity in later terminology.

The software should preserve historical terminology separately from modern UI labels where terminology differs across periods.

Do not reduce domicile to `+5` or adversity to `-5` in the canonical model.

## 2. Exaltation and depression/fall

Compute whether the planet occupies its exaltation sign or the diametrically opposite sign associated with depression/fall.

The source model must distinguish:

- sign-level exaltation;
- any degree-specific exaltation doctrine if/when implemented;
- depression/fall as its own condition.

If exaltation degrees are later introduced, they require a separate rule ID rather than modifying the sign-level rule silently.

## 3. Triplicity rulers

Implement the **Standard Triplicity Rulership Scheme** as a versioned table, not embedded conditional code.

The result should expose:

```json
{
  "element": "Air",
  "sect": "night",
  "day_ruler": "Saturn",
  "night_ruler": "Mercury",
  "participating_ruler": "Jupiter",
  "active_sect_ruler": "Mercury",
  "table_id": "naf.triplicity.standard.v1"
}
```

The exact table must be transcribed from the selected source and protected by fixture tests. Ptolemy's alternate triplicity scheme is a separate future adapter, not an option flag hidden inside the same table.

## 4. Egyptian bounds/terms

Implement the Egyptian bounds as a data table with explicit degree intervals for each sign.

Required invariants:

- intervals cover 0°00′ through 30°00′ without gaps or overlap;
- boundary ownership is defined unambiguously;
- 29°59′59″ and 0°00′00″ cases are tested;
- every lookup returns the exact interval and ruler that produced the result.

Proposed rule ID:

```text
naf.condition.bounds.egyptian.v1
```

Do not use a generic "term ruler" label without the table identifier.

## 5. Angularity and dynamic strength

Whole Sign house placement and dynamic/angular strength are not identical concepts.

The condition engine should therefore maintain distinct fields for:

- whole-sign place;
- relationship to ASC/MC/DSC/IC;
- angular/succedent/cadent classification under the selected model;
- any degree-based dynamic-strength measure if later introduced.

This is especially important because Brennan treats the Midheaven degree and dynamic strength separately from the topical Whole Sign place model.

## 6. Reception

Reception is relational, not a property of one planet in isolation.

The first implementation should support at least domicile reception with explicit direction:

```text
A aspects B
A is in B's domicile
→ B receives A
```

The object should preserve:

- receiver;
- received planet;
- dignity basis;
- configuration/aspect basis;
- applying/separating state when available;
- rule ID.

Reception can mitigate difficult configurations or strengthen favorable ones in the traditional framework; that interpretive role should be modeled as a separate mitigation/augmentation relation rather than baked into the reception object itself.

## 7. Exchange / mutual reception

The existing Mercury ↔ Venus dispositor cycle demonstrates sign exchange computationally, but v0.4 must distinguish:

```text
dispositor cycle
```

from:

```text
traditional exchange / mutual reception condition
```

The latter may have additional requirements depending on the selected historical model. The rule set must specify whether simple domicile exchange alone is sufficient or whether configuration is also required.

Do not infer the Medieval definition when using an earlier Hellenistic rule set.

## 8. Overcoming and superior/inferior geometry

Overcoming should be represented as directional sign-based geometry rather than merely a square/trine label.

Required output:

```json
{
  "source": "Mars",
  "target": "Mercury",
  "relation": "overcoming",
  "configuration": "square",
  "orientation": "superior",
  "sign_based": true,
  "rule_id": "naf.condition.overcoming.sign_based.v1"
}
```

The geometry must be computed from zodiacal order and verified with synthetic fixtures in all four quadrants.

## 9. Bonification and maltreatment

Chapter 14 treats bonification and maltreatment as families of conditions, not a single binary flag.

The engine should therefore emit **events/testimonies** such as:

```text
bonified_by_overcoming
maltreated_by_overcoming
bonified_by_trine
maltreated_by_opposition
counteraction
enclosure
adherence
striking_with_ray
engagement
```

Each technique must be implemented only after its exact source definition has been encoded and tested.

Sect modifies the interpretation of benefics and malefics. The engine must preserve the distinction between:

- benefic/malefic identity;
- sect membership;
- condition-producing geometry;
- mitigating reception;
- resulting traditional testimony.

No hidden aggregate score.

## 10. Mitigation

Reception and other mitigating conditions must remain separate from the original difficult configuration.

Example structure:

```json
{
  "base_condition": "maltreatment_by_overcoming",
  "mitigations": [
    {
      "type": "domicile_reception",
      "effect": "traditional_mitigation",
      "source_rule": "naf.condition.reception.domicile.v1"
    }
  ]
}
```

This allows the software to show both the original geometry and the traditional modifying factor.

## 11. Sect light and triplicity rulers

Chapter 15's triplicity-ruler technique should not be confused with the simpler question "who rules this planet's triplicity?"

The framework must represent separately:

1. triplicity dignity of a given planet;
2. triplicity rulers of the sect light as a natal hierarchical technique;
3. later timing or life-sequence uses of those rulers.

These are distinct semantic layers even when they share the same triplicity table.

## 12. Derivation Ledger requirements

Every condition testimony creates a ledger entry.

Minimum fields:

```text
kind
id
rule_id
tradition
source_reference
inputs
result
dependencies
uncertainty / caveat if any
```

The derivation tree must allow navigation from a planet's final condition object back to:

```text
planet longitude
→ sign/place
→ sect
→ dignity/bound/triplicity
→ relation geometry
→ reception/overcoming
→ bonification/maltreatment
```

## 13. Visualization requirements

The condition engine must not simply add more text to the inspector.

The v0.4 Natal Field should make at least these distinctions perceptible:

- condition status of planets;
- direction of overcoming;
- reception/exchange links distinct from dispositorship;
- bonification/maltreatment overlays;
- provenance availability;
- unsupported or indeterminate states.

The visual language must avoid implying that dignity or maleficence is a physical energy magnitude.

## 14. Testing requirements

Synthetic fixtures should be designed to isolate one rule at a time.

Required fixture families:

- every domicile and opposite domicile;
- every exaltation/depression pair;
- all triplicity elements under day and night sect;
- every Egyptian-bound boundary;
- angularity around quadrant boundaries;
- reception with and without configuration;
- simple exchange;
- superior/inferior squares and trines;
- sect-modified benefic/malefic examples;
- mitigation via reception.

The canonical chart remains a regression fixture, but it must not be the only evidence that the engine works.

## 15. Exit criterion

v0.4 is complete when a competent traditional astrologer can inspect a classical planet and independently verify every condition claim from the serialized analysis without consulting hidden application logic.

Only then may the temporal engine use natal condition as a substrate.
