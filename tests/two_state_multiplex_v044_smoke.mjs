import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computeConditionSystem} from '../src/conditions/condition-system.mjs';
import {analyzeGraphArchitecture} from '../src/research/graph-analytics-engine.mjs';
import {buildHouseRiver} from '../src/research/house-river-engine.mjs';
import {buildFamilyMultiplex} from '../src/relationships/family-multiplex-engine.mjs';
function bundle(text){const analysis=analyzeChartWithIntegrity(parseChartInput(text)),conditions=computeConditionSystem(analysis),graph=analyzeGraphArchitecture(analysis,conditions.primitive),river=buildHouseRiver(analysis);return{analysis,conditions,graph,river}}
const a=fs.readFileSync(new URL('../data/canonical/NAF-CANON-0001-input.txt',import.meta.url),'utf8');
const b=fs.readFileSync(new URL('./fixtures/audrey-chart.txt',import.meta.url),'utf8');
const result=buildFamilyMultiplex(bundle(a),bundle(b),{labelA:'Chart A',labelB:'Chart B'});
assert.ok(result.contacts.length>0);assert.ok(result.structural_contacts.length>0);
assert.ok(result.summary.contacted_terminal_nodes.length>0);
assert.ok(result.contacts.every(x=>x.from.chart==='Chart A'&&x.to.chart==='Chart B'));
assert.match(result.applicability.two_state_contract,/already-computed/);
console.log('v0.4.4 two-state multiplex: ok');
