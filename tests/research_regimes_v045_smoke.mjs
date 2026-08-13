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
import {REGIMES,CONSTITUTION,DEFAULT_MODEL_REGISTRY} from '../src/research/research-regime-registry.mjs';
import {DEFAULT_HYPOTHESIS_REGISTRY,CERES_TAURUS_HYPOTHESIS} from '../src/research/research-hypothesis-pack.mjs';
import {buildOperationalModelSnapshot} from '../src/research/model-comparison-engine.mjs';
import {buildCurrentExperimentSuite} from '../src/research/current-experiment-suite.mjs';
import {buildResearchLab} from '../src/research/research-lab-engine.mjs';

const text=fs.readFileSync(new URL('./fixtures/audrey-chart.txt',import.meta.url),'utf8');
const analysis=analyzeChartWithIntegrity(parseChartInput(text));
const conditions=computeConditionSystem(analysis),graph=analyzeGraphArchitecture(analysis,conditions.primitive),resonance=buildHouseResonanceMap(analysis),modern=buildModernRulershipOverlay(analysis),river=buildHouseRiver(analysis),extended=computeExtendedAspects(analysis),discoveries=buildV044DiscoverySuite({analysis,conditions,graph,resonance,river,modern,extended});
const operational=buildOperationalModelSnapshot({analysis,graph,river,conditions});
const suite=buildCurrentExperimentSuite({analysis,modern,extended,operational_snapshot:operational});
const lab=buildResearchLab({analysis,graph,river,conditions,discoveries,experiments:suite.experiments});

assert.deepEqual(lab.regime_architecture,{operational:'operational',experimental:'experimental',discovery:'discovery'});
assert.equal(new Set(DEFAULT_MODEL_REGISTRY.map(x=>x.regime)).size,3);
assert.equal(CONSTITUTION.at(-1),'Noetic Atlas must remain capable of surprising its creators.');
assert.ok(CONSTITUTION.length>=11);
assert.ok(DEFAULT_HYPOTHESIS_REGISTRY.length>=3);
assert.equal(CERES_TAURUS_HYPOTHESIS.execution_status,'partially-executable');
assert.match(CERES_TAURUS_HYPOTHESIS.proposition,/may function/i);
assert.equal(lab.integrity.operational_isolation_pass,true);
for(const e of lab.experiments){
  assert.equal(e.isolation.pass,true);
  assert.equal(e.comparison.operational_contamination_detected,false);
  assert.equal(e.comparison.structural_change_count,0,'current executable overlays must not mutate operational topology');
}
const modernExperiment=lab.experiments.find(x=>x.hypothesis_id==='MODERN_OUTER_CORULERS_001');
const aspectExperiment=lab.experiments.find(x=>x.hypothesis_id==='EXPANDED_ASPECTS_001');
const ceresExperiment=lab.experiments.find(x=>x.hypothesis_id==='CERES_TAURUS_001');
assert.equal(modernExperiment.execution_status,'executed');
assert.equal(aspectExperiment.execution_status,'executed');
assert.equal(ceresExperiment.execution_status,'not-executed-no-applicable-objects');
assert.equal(lab.discovery_candidates.candidates.length,discoveries.findings.length);
assert.ok(lab.discovery_candidates.candidates.length>0);
for(const c of lab.discovery_candidates.candidates){assert.equal(c.regime,REGIMES.DISCOVERY);assert.equal(c.status_vector.null_comparison,'not-run');assert.match(c.significance_rule,/Detection is not significance/);}
assert.deepEqual(lab.lifecycle,['Detect','Describe','Compare','Test','Replicate','Interpret']);
console.log(`v0.4.5 research regimes: ok · ${lab.experiments.length} seed experiments · ${lab.discovery_candidates.candidates.length} open discovery candidates`);
