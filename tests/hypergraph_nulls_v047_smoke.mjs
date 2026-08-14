import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {buildAstrologicalHypergraph} from '../src/research/hypergraph-engine.mjs';
import {runHypergraphNullLaboratory} from '../src/research/hypergraph-null-evaluator.mjs';

const text=fs.readFileSync(new URL('./fixtures/canonical-andrew-chart.txt',import.meta.url),'utf8');
const analysis=analyzeChartWithIntegrity(parseChartInput(text)),hypergraph=buildAstrologicalHypergraph({analysis});
const args={analysis,hypergraph,iterations:59,seed:'v047-canonical-fixed'};
const a=runHypergraphNullLaboratory(args),b=runHypergraphNullLaboratory(args);
assert.equal(a.version,'0.4.7');
assert.equal(a.parent_null_laboratory.version,'0.4.6');
assert.equal(a.run_id,b.run_id);
assert.deepEqual(a.experiments.map(e=>[e.experiment_id,e.raw_p,e.adjusted_p,e.null_distribution.values_hash]),b.experiments.map(e=>[e.experiment_id,e.raw_p,e.adjusted_p,e.null_distribution.values_hash]));
assert.ok(a.experiments.length>0);
for(const e of a.experiments){
  assert.ok(e.raw_p>=1/60&&e.raw_p<=1);
  assert.ok(e.adjusted_p>=e.raw_p-1e-12&&e.adjusted_p<=1);
  assert.equal(e.multiple_testing.procedure,'benjamini_hochberg');
  assert.equal(e.population_frequency,'unknown');
  assert.equal(e.interpretation_status,'withheld');
  assert.equal(e.no_cross_null_aggregate_score,true);
  assert.ok(['adequate','limited'].includes(e.simulation_quality.status));
  assert.ok(e.null_model.question.length>20);
}
assert.ok(a.families.every(f=>f.procedure==='benjamini_hochberg'));
assert.ok(a.families.every(f=>f.family_size>0));
for(const h of a.hypergraph.hyperedges){
  assert.equal(h.null_profile.status,'completed');
  assert.equal(h.null_profile.no_aggregate_score,true);
  assert.equal(h.null_profile.population_frequency,'unknown');
  assert.equal(h.null_profile.interpretation,'withheld');
  assert.deepEqual(h.research_status.vector,[1,1,1,0,0]);
  assert.equal(h.research_status.dimensions.null_comparison,'completed');
  assert.equal(h.research_status.dimensions.population_frequency,'unknown');
  assert.equal(h.research_status.dimensions.interpretation,'withheld');
  assert.equal(h.null_profile.comparisons.length,4);
  assert.ok(h.null_profile.comparisons.some(c=>c.status==='completed'));
}
const hybrid=a.hypergraph.hyperedges.find(h=>h.hyperedge_class==='compound_hybrid');
assert.ok(hybrid);
assert.ok(hybrid.null_profile.comparisons.filter(c=>c.status==='completed').length>=3);
assert.equal(a.epistemic_contract.no_cross_null_aggregate_score,true);
assert.equal(a.epistemic_contract.population_frequency,'unknown');
assert.equal(a.epistemic_contract.interpretation,'withheld');
console.log('v0.4.7 hypergraph null integration: ok');
