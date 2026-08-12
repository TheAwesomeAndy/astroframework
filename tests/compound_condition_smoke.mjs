import assert from 'node:assert/strict';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computePrimitiveConditions} from '../src/conditions/primitive-condition-engine.mjs';
import {computeRelationalConditions} from '../src/conditions/relational-condition-engine.mjs';
import {computeCompoundConditions,COMPOUND_CONDITION_MODEL,COMPOUND_RULES} from '../src/conditions/compound-condition-engine.mjs';
import {computeConditionSystem} from '../src/conditions/condition-system.mjs';
import {buildDerivationIndex,walkDerivation} from '../src/integrity/derivation-walker.mjs';

const analyze=text=>analyzeChartWithIntegrity(parseChartInput(text));
const compoundFor=text=>{
  const analysis=analyze(text),primitive=computePrimitiveConditions(analysis),relational=computeRelationalConditions(analysis);
  return {analysis,primitive,relational,compound:computeCompoundConditions(analysis,primitive,relational)};
};

const ROUTING=`Sun in Sagittarius 20°00′, in 9th House
Moon in Cancer 5°00′, in 4th House
Mercury in Aries 11°00′, in 1st House
Venus in Taurus 10°00′, in 2nd House
Mars in Capricorn 11°00′, in 10th House
Jupiter in Pisces 5°00′, in 12th House
Saturn in Libra 18°00′, in 7th House
ASC in Aries 12°00′
MC in Capricorn 8°00′`;

{
  const {analysis,primitive,relational,compound}=compoundFor(ROUTING);
  assert.equal(compound.model_id,COMPOUND_CONDITION_MODEL);
  assert.equal(compound.completeness.scalar_strength,'intentionally_not_implemented');
  const marsMercury=compound.testimonies.find(x=>x.type==='maltreatment'&&x.mechanism==='overcoming_square'&&x.agents.includes('Mars')&&x.target==='Mercury');
  assert.ok(marsMercury,'Mars in Capricorn maltreats Mercury in Aries through superior square/domination');
  assert.equal(marsMercury.rule_id,COMPOUND_RULES.maltreatment_overcoming);
  assert.ok(marsMercury.qualifiers.reception.some(x=>x.agent==='Mars'&&x.present&&x.effect==='mitigates_maltreatment'),'reception mitigates rather than deletes maltreatment');
  const marsSect=marsMercury.qualifiers.sect.find(x=>x.agent==='Mars');
  const primitiveMarsSect=primitive.by_planet.Mars.sect.condition.status;
  assert.equal(marsSect.agent_sect_condition,primitiveMarsSect);
  assert.equal(marsSect.effect,primitiveMarsSect==='out_of_sect'?'amplified':primitiveMarsSect==='in_sect'?'restrained':'indeterminate');

  const jupiterMoon=compound.testimonies.filter(x=>x.type==='bonification'&&x.agents.includes('Jupiter')&&x.target==='Moon');
  assert.ok(jupiterMoon.some(x=>x.mechanism==='overcoming'),'Jupiter bonifies Moon through superior trine');
  assert.ok(jupiterMoon.some(x=>x.mechanism==='sign_based_trine'),'the independent sign-trine testimony is preserved rather than collapsed');

  const saturnMercury=compound.testimonies.find(x=>x.type==='maltreatment'&&x.mechanism==='sign_based_opposition'&&x.agents.includes('Saturn')&&x.target==='Mercury');
  assert.ok(saturnMercury,'Saturn sign opposition is retained as a distinct maltreatment condition');
  assert.equal(saturnMercury.rule_id,COMPOUND_RULES.maltreatment_opposition);

  for(const row of compound.records){
    assert.ok(row.derivation_ref?.startsWith('derivation:compound:'),`compound row ${row.id} has derivation_ref`);
    assert.ok(row.rule_id&&row.source_reference&&row.inputs&&row.result);
  }
  const index=buildDerivationIndex({analysis,primitive,relational,compound});
  const walk=walkDerivation(marsMercury.derivation_ref,index);
  assert.equal(walk.status,'resolved');
  assert.equal(walk.source_collection,'compound_condition');
  assert.ok(walk.children.some(x=>x.id.startsWith('relation:domination:')&&x.status==='resolved'),'compound testimony resolves its relational dependency');
}

const BENEFIC_ENCLOSURE=`Sun in Aquarius 20°00′, in 11th House
Moon in Taurus 22°00′, in 2nd House
Mercury in Cancer 11°00′, in 4th House
Venus in Virgo 10°00′, in 6th House
Mars in Sagittarius 25°00′, in 9th House
Jupiter in Aries 13°00′, in 1st House
Saturn in Pisces 2°00′, in 12th House
ASC in Aries 12°00′
MC in Capricorn 8°00′`;

{
  const {compound}=compoundFor(BENEFIC_ENCLOSURE);
  const state=compound.enclosures.find(x=>x.target==='Mercury'&&x.enclosure_kind==='benefic');
  assert.ok(state,'benefic enclosure candidate exists');
  assert.equal(state.status,'active','Venus ray at Cancer 10° and Jupiter ray at Cancer 13° enclose Mercury at Cancer 11°');
  assert.equal(state.result.interventions.length,0);
  const testimony=compound.testimonies.find(x=>x.type==='bonification'&&x.mechanism==='degree_based_ray_enclosure'&&x.target==='Mercury');
  assert.ok(testimony,'active benefic enclosure becomes a bonification testimony');
  assert.deepEqual(new Set(testimony.agents),new Set(['Venus','Jupiter']));
}

const INTERVENED_ENCLOSURE=`Sun in Aquarius 20°00′, in 11th House
Moon in Taurus 22°00′, in 2nd House
Mercury in Cancer 11°00′, in 4th House
Venus in Virgo 10°00′, in 6th House
Mars in Sagittarius 25°00′, in 9th House
Jupiter in Aries 13°00′, in 1st House
Saturn in Cancer 12°00′, in 4th House
ASC in Aries 12°00′
MC in Capricorn 8°00′`;

{
  const {compound}=compoundFor(INTERVENED_ENCLOSURE);
  const state=compound.enclosures.find(x=>x.target==='Mercury'&&x.enclosure_kind==='benefic');
  assert.ok(state);
  assert.equal(state.status,'intervened','Saturn bodily intervenes between Mercury and Jupiter ray');
  assert.ok(state.result.interventions.some(x=>x.planet==='Saturn'&&x.kind==='body'));
  assert.equal(compound.testimonies.some(x=>x.type==='bonification'&&x.mechanism==='degree_based_ray_enclosure'&&x.target==='Mercury'),false,'broken enclosure does not create bonification testimony');
}

const MALEFIC_ENCLOSURE=`Sun in Aquarius 20°00′, in 11th House
Moon in Taurus 22°00′, in 2nd House
Mercury in Cancer 11°00′, in 4th House
Venus in Sagittarius 25°00′, in 9th House
Mars in Virgo 10°00′, in 6th House
Jupiter in Pisces 2°00′, in 12th House
Saturn in Aries 13°00′, in 1st House
ASC in Aries 12°00′
MC in Capricorn 8°00′`;

{
  const {compound}=compoundFor(MALEFIC_ENCLOSURE);
  const state=compound.enclosures.find(x=>x.target==='Mercury'&&x.enclosure_kind==='malefic');
  assert.ok(state);
  assert.equal(state.status,'active');
  const testimony=compound.testimonies.find(x=>x.type==='maltreatment'&&x.mechanism==='degree_based_ray_enclosure'&&x.target==='Mercury');
  assert.ok(testimony,'active Mars/Saturn ray enclosure becomes maltreatment');
}

const MIXED=`Sun in Sagittarius 20°00′, in 9th House
Moon in Taurus 22°00′, in 2nd House
Mercury in Cancer 11°00′, in 4th House
Venus in Libra 25°00′, in 7th House
Mars in Aries 15°00′, in 1st House
Jupiter in Aries 5°00′, in 1st House
Saturn in Aquarius 18°00′, in 11th House
ASC in Aries 12°00′
MC in Capricorn 8°00′`;

{
  const system=computeConditionSystem(analyze(MIXED));
  assert.equal(system.version,'0.4.3');
  assert.equal(system.completeness.compound,'implemented_selected_source_secure_subset');
  assert.equal(system.compound.by_planet.Mercury.presence,'mixed','opposed testimony is not averaged away when both benefic and malefic act on the same target');
  assert.ok(system.signatures.Mercury.tokens.some(t=>t.key==='bonification_received'));
  assert.ok(system.signatures.Mercury.tokens.some(t=>t.key==='maltreatment_received'));
  assert.ok(system.signatures.Mercury.tokens.some(t=>t.key==='compound_presence'&&t.value==='mixed'));
}

function assertNoNumericStrengthKeys(value,path='root'){
  if(!value||typeof value!=='object')return;
  for(const [k,v] of Object.entries(value)){
    if(['score','strength','net_strength','condition_score'].includes(k))assert.fail(`forbidden scalar key ${path}.${k}`);
    assertNoNumericStrengthKeys(v,`${path}.${k}`);
  }
}
assertNoNumericStrengthKeys(compoundFor(ROUTING).compound);

console.log('compound condition smoke: ok');
