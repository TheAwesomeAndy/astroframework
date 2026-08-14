import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computeConditionSystem} from '../src/conditions/condition-system.mjs';
import {analyzeGraphArchitecture} from '../src/research/graph-analytics-engine.mjs';
import {buildHouseResonanceMap} from '../src/interpretation/house-resonance-engine.mjs';
import {buildModernRulershipOverlay} from '../src/interpretation/modern-rulership-overlay.mjs';
import {buildHouseRiver} from '../src/research/house-river-engine.mjs';
import {computeExtendedAspects} from '../src/research/aspect-family-engine.mjs';
import {buildV044DiscoverySuite} from '../src/research/v044-discovery-suite.mjs';
import {buildResearchLab} from '../src/research/research-lab-engine.mjs';
import {runNullModelLaboratory} from '../src/research/null-model-laboratory.mjs';

const text=fs.readFileSync(new URL('./fixtures/audrey-chart.txt',import.meta.url),'utf8');
const analysis=analyzeChartWithIntegrity(parseChartInput(text));
const conditions=computeConditionSystem(analysis),graph=analyzeGraphArchitecture(analysis,conditions.primitive),resonance=buildHouseResonanceMap(analysis),modern=buildModernRulershipOverlay(analysis),river=buildHouseRiver(analysis),extended=computeExtendedAspects(analysis),discoveries=buildV044DiscoverySuite({analysis,conditions,graph,resonance,river,modern,extended});

const before=buildResearchLab({analysis,graph,river,conditions,modern,extended,discoveries});
assert.equal(before.version,'0.4.6');
assert.equal(before.audit.pass,true);
assert.equal(before.aperture.default,'personal');
assert.equal(before.null_laboratory.result,null);
assert.ok(before.discovery.candidates.every(c=>c.model_identity.status.null_comparison==='pending'));

const args={analysis,conditions,graph,river,discoveries,iterations:99,seed:'v046-integration-smoke'};
const result=runNullModelLaboratory(args),repeat=runNullModelLaboratory(args);
assert.equal(result.run_id,repeat.run_id);
assert.equal(result.version,'0.4.6');
assert.ok(result.experiments.length>=4);
assert.ok(result.experiments.every(e=>e.raw_p>0&&e.raw_p<=1));
assert.ok(result.experiments.every(e=>e.adjusted_p>0&&e.adjusted_p<=1));
assert.ok(result.experiments.every(e=>e.multiple_testing.procedure==='benjamini_hochberg'));
assert.ok(result.experiments.every(e=>e.interpretation_status==='withheld'));
assert.ok(result.experiments.every(e=>e.population_frequency==='unknown'));
assert.ok(result.experiments.every(e=>e.no_cross_null_aggregate_score===true));
assert.deepEqual(result.experiments.map(e=>[e.experiment_id,e.raw_p,e.adjusted_p,e.null_distribution.values_hash]),repeat.experiments.map(e=>[e.experiment_id,e.raw_p,e.adjusted_p,e.null_distribution.values_hash]));

const after=buildResearchLab({analysis,graph,river,conditions,modern,extended,discoveries,null_results:result});
assert.equal(after.audit.pass,true);
assert.equal(after.null_laboratory.result.run_id,result.run_id);
const tested=after.discovery.candidates.filter(c=>c.promotion_state==='null-tested');
assert.ok(tested.length>0);
for(const c of tested){
  assert.equal(c.model_identity.status.null_comparison,'completed');
  assert.equal(c.model_identity.status.population_frequency,'unknown');
  assert.equal(c.model_identity.status.interpretation,'withheld');
  assert.equal(c.null_comparison.no_aggregate_score,true);
  assert.ok(c.null_comparison.comparisons.length>0);
}
assert.equal(after.counterfactual_boundary.population_frequency,'unknown-not-tested');
assert.equal(after.counterfactual_boundary.interpretation,'withheld');
assert.ok(after.constitution_refs.some(x=>x.includes('No cross-null pass count')));
console.log('v0.4.6 research lab integration: ok');
