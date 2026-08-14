import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {buildAstrologicalHypergraph,sha256Hex,GEOMETRIC_CONFIGURATION_TEMPLATES} from '../src/research/hypergraph-engine.mjs';

const text=fs.readFileSync(new URL('./fixtures/canonical-andrew-chart.txt',import.meta.url),'utf8');
const analysis=analyzeChartWithIntegrity(parseChartInput(text));
const hg=buildAstrologicalHypergraph({analysis});
const same=(a,b)=>[...a].sort().join('|')===[...b].sort().join('|');
const byConfig=(type,nodes)=>hg.hyperedges.find(h=>h.configuration_type===type&&same(h.participating_nodes,nodes));

assert.equal(sha256Hex('abc'),'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
assert.equal(hg.version,'0.4.7');
assert.equal(hg.regime,'discovery');
assert.equal(hg.epistemic_contract.layer_e_quarantined,true);
assert.equal(hg.epistemic_contract.no_scalar_strength_score,true);
assert.ok(GEOMETRIC_CONFIGURATION_TEMPLATES.some(t=>t.id==='grand_trine'));
assert.ok(GEOMETRIC_CONFIGURATION_TEMPLATES.some(t=>t.id==='grand_cross'));
assert.ok(GEOMETRIC_CONFIGURATION_TEMPLATES.every(t=>[3,4].includes(t.cardinality)));

const grand=byConfig('grand_trine',['Sun','Moon','Jupiter']);
assert.ok(grand,'canonical Sun-Moon-Jupiter Grand Trine should be formalized');
assert.ok(grand.geometric_metrics.max_orb_deg<4);
assert.deepEqual(grand.research_status.vector,[1,1,0,0,0]);

const kite=byConfig('kite',['Sun','Moon','Jupiter','Spirit']);
assert.ok(kite,'Spirit should close the Sun-Moon-Jupiter trine into a geometric kite template');

const anchor=byConfig('t_square_anchor_cluster',['Venus','Mars','Uranus','Chiron']);
assert.ok(anchor,'canonical mutable cross-quarter anchor cluster should be formalized');
assert.ok(anchor.geometric_metrics.rms_orb_deg<1);
assert.ok(anchor.geometric_metrics.symmetry_index>.5);

const scc=hg.hyperedges.find(h=>h.configuration_type==='dispositor_scc'&&same(h.participating_nodes,['Mercury','Venus']));
assert.ok(scc,'Mercury-Venus mutual reception must instantiate as a topological SCC hyperedge');
assert.equal(scc.topological_metrics.is_closed_cycle,true);

const basin=hg.hyperedges.find(h=>h.configuration_type==='terminal_basin_capture'&&h.topological_metrics?.terminal_members&&same(h.topological_metrics.terminal_members,['Mercury','Venus']));
assert.ok(basin,'Mercury-Venus terminal basin must be first-class');
assert.equal(basin.topological_metrics.basin_volume,7);

const hybrid=hg.hyperedges.find(h=>h.hyperedge_class==='compound_hybrid'&&h.geometric_metrics?.parent_hyperedge_id===anchor.hyperedge_id);
assert.ok(hybrid,'mutable anchor cluster should couple to the classical routing basin');
assert.ok(hybrid.topological_metrics.coupled_classical_nodes.includes('Venus'));
assert.ok(hybrid.topological_metrics.coupled_classical_nodes.includes('Mars'));

assert.ok(!hg.hyperedges.some(h=>h.hyperedge_class==='geometric_polygon'&&same(h.participating_nodes,['Sun','Mercury'])),'two-body Libra copresence must not be promoted into a k>=3 geometric hyperedge');
assert.ok(hg.hyperedges.every(h=>/^[0-9a-f]{64}$/.test(h.derivation_hash)));
assert.ok(hg.hyperedges.every(h=>h.population_frequency==='unknown'&&h.interpretation_status==='withheld'));
assert.equal(hg.incidence.vertex_ids.length,hg.vertices.length);
assert.equal(hg.incidence.hyperedge_ids.length,hg.hyperedges.length);
assert.equal(hg.incidence.spectral_status.includes('deferred'),true);
console.log('v0.4.7 formal hypergraph core: ok');
