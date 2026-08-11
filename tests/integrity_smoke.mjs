import fs from 'node:fs';
import assert from 'node:assert/strict';
import { parseChartJSON } from '../src/kernel/noetic-kernel.mjs';
import { analyzeChartWithIntegrity } from '../src/kernel/hellenistic-integrity.mjs';
import { analyzeExploratoryPatterns } from '../src/research/pattern-engine.mjs';

const fixture=JSON.parse(fs.readFileSync(new URL('../data/canonical/NAF-CANON-0001-supplied.json',import.meta.url),'utf8'));
const analysis=analyzeChartWithIntegrity(parseChartJSON(fixture));
const lot=id=>analysis.lots.find(x=>x.id===id);

assert.equal(analysis.kernel_version,'0.3.1');
assert.equal(analysis.sect.sect,'night');
assert.equal(analysis.lots.length,7);
assert.equal(lot('Fortune').sign,'Sagittarius');
assert.ok(Math.abs(lot('Fortune').longitude-254.5333333333333)<1e-9);
assert.equal(lot('Fortune').computed_house,5);
assert.equal(lot('Spirit').sign,'Aries');
assert.ok(Math.abs(lot('Spirit').longitude-8.733333333333348)<1e-9);
assert.equal(lot('Spirit').computed_house,9);
assert.equal(lot('Courage').sign,'Taurus');
assert.ok(Math.abs(lot('Courage').longitude-42.383333333333326)<1e-9);
assert.equal(lot('Nemesis').sign,'Cancer');
assert.ok(Math.abs(lot('Nemesis').longitude-112.25)<1e-9);

const suppliedFortune=analysis.validation.supplied_lot_comparisons.find(x=>x.id==='Fortune');
assert.ok(suppliedFortune);
assert.equal(suppliedFortune.match_within_arcminute,true);
assert.ok(suppliedFortune.difference_deg<1e-9);
assert.ok(analysis.derivation_ledger.some(x=>x.kind==='sect'));
assert.ok(analysis.derivation_ledger.some(x=>x.kind==='lot'&&x.id==='Spirit'));
assert.ok(analysis.derivation_ledger.some(x=>x.kind==='topology'));

const research=analyzeExploratoryPatterns(analysis);
assert.equal(research.status,'exploratory-not-interpretive');
assert.equal(research.harmonic_spectrum.length,12);
assert.ok(research.multilayer_participation.length>0);
assert.ok(research.route_convergence.concentration>=0&&research.route_convergence.concentration<=1);

console.log(`PASS integrity ${analysis.kernel_version}: ${analysis.sect.sect} sect; Fortune ${lot('Fortune').sign}; Spirit ${lot('Spirit').sign}; seven Hermetic lots; derivation ledger and exploratory research layer verified.`);
