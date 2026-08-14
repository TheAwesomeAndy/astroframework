import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computeConditionSystem} from '../src/conditions/condition-system.mjs';
import {analyzeGraphArchitecture} from '../src/research/graph-analytics-engine.mjs';
import {buildHouseRiver} from '../src/research/house-river-engine.mjs';
import {buildHouseResonanceMap} from '../src/interpretation/house-resonance-engine.mjs';
import {buildModernRulershipOverlay} from '../src/interpretation/modern-rulership-overlay.mjs';
import {computeExtendedAspects} from '../src/research/aspect-family-engine.mjs';
import {buildV044DiscoverySuite} from '../src/research/v044-discovery-suite.mjs';
import {buildResearchLabV046} from '../src/research/research-lab-v046.mjs';
const text=fs.readFileSync(new URL('./fixtures/audrey-chart.txt',import.meta.url),'utf8'),analysis=analyzeChartWithIntegrity(parseChartInput(text));
const conditions=computeConditionSystem(analysis),graph=analyzeGraphArchitecture(analysis,conditions.primitive),river=buildHouseRiver(analysis),resonance=buildHouseResonanceMap(analysis),modern=buildModernRulershipOverlay(analysis),extended=computeExtendedAspects(analysis),discoveries=buildV044DiscoverySuite({analysis,conditions,graph,resonance,river,modern,extended});
const lab=buildResearchLabV046({analysis,graph,river,conditions,modern,extended,discoveries,null_iterations:32,null_seed:'v046-status-regression'});
assert.equal(lab.version,'0.4.6');assert.equal(lab.nulls.tests.length,15);assert.equal(lab.null_policy.interpretation,'withheld');
const tested=lab.candidate_nulls.filter(x=>x.tests.length);assert.ok(tested.length>0,'at least one discovery candidate should have a scientifically compatible null plan');
for(const result of tested){const candidate=lab.discovery.candidates.find(c=>c.candidate_id===result.candidate_id);assert.ok(candidate);assert.equal(candidate.model_identity.status.null_comparison,'tested');assert.equal(candidate.model_identity.status.population_frequency,'unknown');assert.equal(candidate.model_identity.status.replication,'none');assert.equal(candidate.model_identity.status.interpretation,'withheld');assert.equal(candidate.promotion_state,'null-tested-awaiting-population-and-replication');assert.equal(candidate.null_comparison_summary.test_count,result.tests.length);}
for(const result of lab.candidate_nulls.filter(x=>!x.tests.length)){const candidate=lab.discovery.candidates.find(c=>c.candidate_id===result.candidate_id);assert.equal(candidate.model_identity.status.null_comparison,'pending');assert.equal(candidate.model_identity.status.interpretation,'withheld');}
console.log('v0.4.6 research-status update: ok');
