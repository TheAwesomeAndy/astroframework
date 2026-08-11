import assert from 'node:assert/strict';
import {
  CLASSICAL_PLANETS, EGYPTIAN_BOUNDS, TRIPLICITY_TABLE,
  lookupEgyptianBound, lookupEgyptianBoundByLongitude, wholeSignAngularity,
  mercurySectFamily, computePrimitiveConditions
} from '../src/conditions/primitive-condition-engine.mjs';
import { parseChartInput } from '../src/kernel/noetic-kernel.mjs';
import { analyzeChartWithIntegrity } from '../src/kernel/hellenistic-integrity.mjs';

const totals={Mercury:0,Venus:0,Mars:0,Jupiter:0,Saturn:0};
for(const [sign,rows] of Object.entries(EGYPTIAN_BOUNDS)){
  assert.equal(rows[0][1],0,`${sign} bounds start at 0`);
  assert.equal(rows.at(-1)[2],30,`${sign} bounds end at 30`);
  rows.forEach((row,i)=>{
    const [ruler,start,end]=row;
    if(i) assert.equal(start,rows[i-1][2],`${sign} bounds are contiguous`);
    assert.ok(end>start,`${sign} ${ruler} bound has positive width`);
    totals[ruler]+=end-start;
  });
}
assert.deepEqual(totals,{Mercury:76,Venus:82,Mars:66,Jupiter:79,Saturn:57});

assert.equal(lookupEgyptianBound('Aries',5.999999).ruler,'Jupiter');
assert.equal(lookupEgyptianBound('Aries',6).ruler,'Venus');
assert.equal(lookupEgyptianBound('Pisces',29.999999).ruler,'Saturn');
assert.throws(()=>lookupEgyptianBound('Aries',30),/\[0,30\)/);
assert.equal(lookupEgyptianBoundByLongitude(30).sign,'Taurus');
assert.equal(lookupEgyptianBoundByLongitude(30).ruler,'Venus');

assert.deepEqual(TRIPLICITY_TABLE.Air,{day:'Saturn',night:'Mercury',cooperating:'Jupiter'});
assert.deepEqual(TRIPLICITY_TABLE.Water,{day:'Venus',night:'Mars',cooperating:'Moon'});

for(const h of [1,4,7,10]) assert.equal(wholeSignAngularity(h),'angular');
for(const h of [2,5,8,11]) assert.equal(wholeSignAngularity(h),'succedent');
for(const h of [3,6,9,12]) assert.equal(wholeSignAngularity(h),'declining');

assert.equal(mercurySectFamily(90,100).family,'diurnal');
assert.equal(mercurySectFamily(90,100).phase,'morning_star');
assert.equal(mercurySectFamily(110,100).family,'nocturnal');
assert.equal(mercurySectFamily(110,100).phase,'evening_star');
assert.equal(mercurySectFamily(100,100).family,'indeterminate');

const SAMPLE=`Sun in Libra 10°57′, in 3rd House
Moon in Gemini 8°03′, in 11th House
Mercury in Libra 19°30′, in 3rd House
Venus in Virgo 14°49′, in 2nd House
Mars in Virgo 15°17′, in 2nd House
Jupiter in Aquarius 7°07′, in 7th House
Saturn in Scorpio 25°09′, in 4th House
Uranus in Sagittarius 14°42′, in 5th House
Neptune in Capricorn 0°58′, in 6th House
Pluto in Scorpio 3°44′, in 4th House
ASC in Leo 11°38′
MC in Taurus 0°44′`;

const analysis=analyzeChartWithIntegrity(parseChartInput(SAMPLE));
assert.equal(analysis.sect.sect,'night');
const c=computePrimitiveConditions(analysis);
assert.equal(Object.keys(c.by_planet).length,7);
assert.equal(c.ledger_entries.length,CLASSICAL_PLANETS.length*9);

assert.equal(c.by_planet.Sun.essential.depression.status,'present');
assert.equal(c.by_planet.Sun.sect.condition.status,'out_of_sect');
assert.equal(c.by_planet.Sun.positional.angularity.class,'declining');

assert.equal(c.by_planet.Moon.sect.condition.status,'in_sect');
assert.equal(c.by_planet.Moon.positional.angularity.class,'succedent');

assert.equal(c.by_planet.Mercury.essential.triplicity.active_for_chart,true);
assert.ok(c.by_planet.Mercury.essential.triplicity.planet_roles.includes('night_ruler'));
assert.equal(c.by_planet.Mercury.sect.planetary_family.phase,'evening_star');
assert.equal(c.by_planet.Mercury.sect.condition.status,'in_sect');
assert.equal(c.by_planet.Mercury.essential.bound.bound_ruler,'Jupiter');

assert.equal(c.by_planet.Venus.essential.depression.status,'present');
assert.equal(c.by_planet.Venus.essential.bound.bound_ruler,'Venus');
assert.equal(c.by_planet.Venus.essential.bound.self_ruled,true);
assert.equal(c.by_planet.Venus.sect.condition.status,'in_sect');

assert.equal(c.by_planet.Mars.essential.bound.bound_ruler,'Venus');
assert.equal(c.by_planet.Mars.sect.condition.status,'in_sect');

assert.equal(c.by_planet.Jupiter.positional.angularity.class,'angular');
assert.equal(c.by_planet.Jupiter.sect.condition.status,'out_of_sect');
assert.equal(c.by_planet.Jupiter.essential.bound.bound_ruler,'Venus');

assert.equal(c.by_planet.Saturn.positional.angularity.class,'angular');
assert.equal(c.by_planet.Saturn.sect.condition.status,'out_of_sect');
assert.equal(c.by_planet.Saturn.essential.bound.bound_ruler,'Saturn');
assert.equal(c.by_planet.Saturn.essential.bound.self_ruled,true);

for(const record of Object.values(c.by_planet)){
  assert.equal(record.schema_version,'naf.condition.record.v0.4.0a');
  assert.equal(record.relational.status,'not_implemented');
  assert.equal(record.compound.status,'not_implemented');
  assert.equal(record.ledger_entries.length,9);
  assert.ok(record.ledger_entries.every(x=>x.rule_id&&x.source_reference&&x.inputs&&x.result));
}

console.log('primitive condition smoke: ok');
