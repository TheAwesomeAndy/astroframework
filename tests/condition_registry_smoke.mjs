import assert from 'node:assert/strict';
import fs from 'node:fs';

const registry = JSON.parse(fs.readFileSync(new URL('../data/rules/hellenistic/condition-v1.registry.json', import.meta.url)));
const schema = JSON.parse(fs.readFileSync(new URL('../schemas/naf-condition-record-v0.4.0a.schema.json', import.meta.url)));
const fixtures = JSON.parse(fs.readFileSync(new URL('./fixtures/condition/v0.4.0a-fixture-spec.json', import.meta.url)));

assert.equal(registry.registry_id, 'naf.condition.registry.hellenistic.v1');
assert.equal(registry.milestone, 'v0.4.0a');
assert.equal(registry.status, 'schema_frozen_no_calculations');
assert.equal(schema.properties.schema_version.const, 'naf.condition.record.v0.4.0a');
assert.equal(fixtures.fixture_spec_id, 'naf.condition.synthetic.v0.4.0a');

const ruleIds = registry.rules.map(r => r.id);
assert.equal(new Set(ruleIds).size, ruleIds.length, 'rule IDs must be unique');

const sourceIds = new Set(registry.sources.map(s => s.id));
for (const rule of registry.rules) {
  assert.ok(['implementation_ready','planned_source_locked','research_required'].includes(rule.implementation_status), `${rule.id}: invalid implementation status`);
  for (const sourceId of rule.source_ids) assert.ok(sourceIds.has(sourceId), `${rule.id}: unknown source ${sourceId}`);
}

assert.deepEqual(registry.object_scope.classical_planet.objects, ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn']);
assert.equal(registry.object_scope.outer_planet.applicability, 'not_applicable');
assert.equal(registry.object_scope.lot.applicability, 'derived_point_only');
assert.equal(registry.object_scope.angle.applicability, 'positional_only');
assert.equal(registry.object_scope.node.applicability, 'tradition_dependent');

const expectedTriplicity = {
  Fire: {day:['Sun','Jupiter','Saturn'], night:['Jupiter','Sun','Saturn']},
  Earth: {day:['Venus','Moon','Mars'], night:['Moon','Venus','Mars']},
  Air: {day:['Saturn','Mercury','Jupiter'], night:['Mercury','Saturn','Jupiter']},
  Water: {day:['Venus','Mars','Moon'], night:['Mars','Venus','Moon']}
};
assert.deepEqual(registry.tables.triplicity_standard, expectedTriplicity);

const bounds = registry.tables.egyptian_bounds;
const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
assert.deepEqual(Object.keys(bounds), signs);
const totals = {Mercury:0, Venus:0, Mars:0, Jupiter:0, Saturn:0};
for (const sign of signs) {
  const intervals = bounds[sign];
  assert.equal(intervals.length, 5, `${sign}: exactly five Egyptian bounds required`);
  assert.equal(intervals[0][1], 0, `${sign}: first interval must start at 0`);
  assert.equal(intervals.at(-1)[2], 30, `${sign}: last interval must end at 30`);
  for (let i=0; i<intervals.length; i++) {
    const [ruler,start,end] = intervals[i];
    assert.ok(ruler in totals, `${sign}: invalid bound ruler ${ruler}`);
    assert.ok(end > start, `${sign}: invalid interval`);
    if (i > 0) assert.equal(start, intervals[i-1][2], `${sign}: gap/overlap at interval ${i}`);
    totals[ruler] += end-start;
  }
}
assert.deepEqual(totals, {Mercury:76, Venus:82, Mars:66, Jupiter:79, Saturn:57});

const angular = registry.tables.whole_sign_place_angularity;
assert.deepEqual(angular.angular, [1,4,7,10]);
assert.deepEqual(angular.succedent, [2,5,8,11]);
assert.deepEqual(angular.cadent, [3,6,9,12]);

for (const required of ['essential','sect','positional','relational','compound','completeness','ledger_refs']) assert.ok(schema.required.includes(required), `condition schema missing ${required}`);
for (const key of ['bonifications','maltreatments','enclosures','mitigations']) assert.ok(schema.properties.compound.required.includes(key), `compound schema missing reserved ${key}`);

const caseIds = fixtures.cases.map(x => x.id);
assert.equal(new Set(caseIds).size, caseIds.length, 'synthetic fixture IDs must be unique');
assert.ok(caseIds.includes('bounds.aries.exact_6'));
assert.ok(caseIds.includes('bounds.wrap_30_to_taurus_0'));
assert.ok(caseIds.includes('sect.mercury.unknown'));
assert.ok(caseIds.includes('compound.empty_slots'));

console.log('condition registry/schema/fixture contract: ok');
