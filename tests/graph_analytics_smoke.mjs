import assert from 'node:assert/strict';
import {parseChartInput} from '../src/kernel/noetic-kernel.mjs';
import {analyzeChartWithIntegrity} from '../src/kernel/hellenistic-integrity.mjs';
import {computePrimitiveConditions} from '../src/conditions/primitive-condition-engine.mjs';
import {
  classicalDispositorSubgraph,functionalDigraphAnalytics,aspectGraphAnalytics,
  crossLayerOverlap,analyzeGraphArchitecture
} from '../src/research/graph-analytics-engine.mjs';

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
North Node in Taurus 10°31′, Retrograde, in 10th House
Lilith in Taurus 13°47′, in 10th House
Chiron in Gemini 14°33′, Retrograde, in 11th House
Fortune in Sagittarius 14°32′, in 5th House
Vertex in Sagittarius 28°23′, in 5th House
ASC in Leo 11°38′
MC in Taurus 0°44′`;

const analysis=analyzeChartWithIntegrity(parseChartInput(SAMPLE));
const conditions=computePrimitiveConditions(analysis);

const classical=classicalDispositorSubgraph(analysis);
assert.deepEqual([...classical.nodes].sort(),['Jupiter','Mars','Mercury','Moon','Saturn','Sun','Venus']);
assert.equal(classical.edges.length,7);

const fd=functionalDigraphAnalytics(classical);
assert.equal(fd.functional_digraph,true);
assert.equal(fd.terminal_basins.length,1);
assert.deepEqual([...fd.terminal_basins[0].terminal_members].sort(),['Mercury','Venus']);
assert.equal(fd.terminal_basins[0].basin_size,7);
assert.equal(fd.terminal_basins[0].basin_fraction,1);
assert.equal(fd.max_route_depth,3);
assert.equal(fd.node_depth_to_terminal.Jupiter,3);
assert.equal(fd.node_depth_to_terminal.Saturn,2);
assert.equal(fd.node_depth_to_terminal.Mars,1);
assert.equal(fd.node_depth_to_terminal.Mercury,0);
assert.equal(fd.node_depth_to_terminal.Venus,0);
assert.equal(fd.nonterminal_bottlenecks[0].node,'Mars');
assert.equal(fd.nonterminal_bottlenecks[0].upstream_count,3);

const ag=aspectGraphAnalytics(analysis);
assert.ok(ag.node_count>0);
assert.ok(ag.edge_count>0);
assert.ok(ag.density>=0&&ag.density<=1);
assert.ok(ag.mean_clustering>=0&&ag.mean_clustering<=1);
assert.ok(ag.recognized_motifs.some(m=>m.recognized==='grand_trine'&&['Sun','Moon','Jupiter'].every(x=>m.nodes.includes(x))),
  'canonical Sun–Moon–Jupiter grand trine should be detected as a typed graph motif');
assert.ok(ag.recognized_motifs.some(m=>m.recognized==='t_square'),
  'canonical full-object aspect graph should contain at least one opposition + two-square T-square motif');

const overlap=crossLayerOverlap(analysis);
assert.deepEqual(overlap.layers,['aspect','dispositor']);
assert.ok(Number.isInteger(overlap.overlap_count));

const report=analyzeGraphArchitecture(analysis,conditions);
assert.equal(report.status,'exploratory-not-validated');
assert.equal(report.model,'naf.research.graph_analytics.v0.4.1');
assert.ok(report.metrics.length>=6);
assert.ok(report.findings.length>=4);
assert.ok(report.findings.some(f=>f.id==='finding.dispositor.terminal_architecture'));
assert.ok(report.findings.some(f=>f.category==='aspect-motif'));

for(const m of report.metrics){
  assert.equal(m.epistemic_layer,'research-exploratory');
  assert.equal(m.interpretation_status,'hypothesis-not-validated');
  assert.ok(m.definition&&m.formula&&m.readable_analysis?.observation&&m.readable_analysis?.graph_theory_meaning);
  assert.ok(Array.isArray(m.readable_analysis?.limits));
  assert.ok(m.integrity?.calculation&&m.integrity?.inputs!==undefined&&m.integrity?.result!==undefined);
  assert.ok(Array.isArray(m.integrity?.ledger_refs));
}
for(const f of report.findings){
  assert.equal(f.epistemic_layer,'research-exploratory');
  assert.equal(f.interpretation_status,'hypothesis-not-validated');
  assert.ok(f.statement&&f.readable_analysis?.graph_theory_meaning&&f.readable_analysis?.astrological_context);
  assert.ok(f.readable_analysis?.interpretive_hypothesis);
  assert.ok(Array.isArray(f.readable_analysis?.limits)&&f.readable_analysis.limits.length>0);
  assert.ok(f.integrity?.calculation&&f.integrity?.formula&&f.integrity?.inputs&&f.integrity?.result);
  assert.ok(Array.isArray(f.integrity?.ledger_refs));
}

const terminalFinding=report.findings.find(f=>f.id==='finding.dispositor.terminal_architecture');
assert.equal(terminalFinding.measurement.basin_fraction,1);
assert.ok(terminalFinding.integrity.result.condition_of_terminal_members.length===2,
  'terminal architecture finding should carry condition summaries when a condition substrate is supplied');

console.log('graph analytics smoke: ok');
