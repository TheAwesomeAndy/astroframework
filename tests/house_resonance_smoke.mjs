import assert from 'node:assert/strict';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {buildHouseResonanceMap} from '../src/interpretation/house-resonance-engine.mjs';

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
const r=buildHouseResonanceMap(analysis);
assert.equal(r.version,'0.4.1.3');
assert.equal(r.ascendant_sign,'Leo');
assert.equal(r.rotation.sign_steps,4);
assert.equal(r.rotation.degrees,120);
assert.equal(r.rotation.element_preserved_count,12);
assert.equal(r.rotation.mode_preserved_count,0);
assert.equal(r.rotation.phase_character,'element-preserving / mode-rotating');
const h1=r.houses[0];
assert.equal(h1.natural.sign,'Aries');
assert.equal(h1.actual.sign,'Leo');
assert.equal(h1.natural.element,'Fire');
assert.equal(h1.actual.element,'Fire');
assert.equal(h1.natural.mode,'Cardinal');
assert.equal(h1.actual.mode,'Fixed');
assert.equal(h1.actual.ruler,'Sun');
assert.equal(h1.natural.ruler,'Mars');
assert.equal(h1.actual_ruler_context.sign,'Libra');
assert.equal(h1.actual_ruler_context.house,3);
assert.match(h1.interpretation,/Cardinal Fire/);
assert.match(h1.interpretation,/Fixed Fire/);
assert.match(h1.interpretation,/elemental medium is preserved/i);
const h2=r.houses[1];
assert.equal(h2.natural.sign,'Taurus');
assert.equal(h2.actual.sign,'Virgo');
assert.ok(h2.occupants.some(o=>o.id==='Venus'));
assert.ok(h2.occupants.some(o=>o.id==='Mars'));
const h3=r.houses[2];
assert.equal(h3.natural.sign,'Gemini');
assert.equal(h3.actual.sign,'Libra');
assert.ok(h3.occupants.some(o=>o.id==='Sun'));
assert.ok(h3.occupants.some(o=>o.id==='Mercury'));
assert.match(r.applicability.natural_house_overlay,/optional modern correspondence/i);
assert.match(r.applicability.energy_language,/not a measured physical field/i);
console.log('house resonance smoke: ok');
