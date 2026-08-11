import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../prototype/v0411.html',import.meta.url),'utf8');
assert.match(html,/Noetic Atlas v0\.4\.1\.1/);
assert.match(html,/ASTROLOGICAL ANALYSIS \+ GRAPH INTEGRITY/);
assert.match(html,/astrological-analysis-engine\.mjs/);
assert.match(html,/buildAstrologicalAnalysis/);
for(const pane of ['analysisPane','findingsPane','metricsPane','conditionPane','integrityPane']) assert.match(html,new RegExp(`id="${pane}"`));
for(const phrase of ['Outer planets','Configurations','Life \/ material expression','Why this analysis\?','interpretive-inference']) assert.match(html,new RegExp(phrase,'i'));
for(const outer of ['Uranus','Neptune','Pluto']) assert.match(html,new RegExp(outer));
assert.match(html,/do not inherit Hellenistic dignity/i);
assert.match(html,/intentionally absent from Hellenistic dignity/i);
assert.doesNotMatch(html,/v0\.3\.2/);

const moduleMatch=html.match(/<script type="module">([\s\S]*?)<\/script>/);
assert.ok(moduleMatch,'module script exists');
const syntaxOnly=moduleMatch[1].replace(/^import .*$/gm,'');
new vm.Script(`(async()=>{${syntaxOnly}\n})`);

// Legacy surface remains regression-tested, but the current public root is owned by the newest release contract.
console.log('v0.4.1.1 legacy UI contract smoke: ok');
