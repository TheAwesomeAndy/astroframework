import assert from 'node:assert/strict';
import fs from 'node:fs';

const html=fs.readFileSync(new URL('../prototype/v041.html',import.meta.url),'utf8');
assert.match(html,/Noetic Atlas v0\.4\.1/);
assert.match(html,/GRAPH ANALYTICS \+ EXPLAINABLE FINDINGS/);
assert.match(html,/graph-analytics-engine\.mjs/);
assert.match(html,/computePrimitiveConditions/);
assert.match(html,/analyzeGraphArchitecture/);
for(const pane of ['findings','metrics','condition','integrity']) assert.match(html,new RegExp(`data-pane="${pane}"`));
for(const phrase of ['Graph-theory meaning','Astrological rule context','Interpretive hypothesis','Limits','Proof']) assert.match(html,new RegExp(phrase,'i'));
assert.doesNotMatch(html,/v0\.3\.2/);

const entry=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.match(entry,/prototype\/v041\.html\?build=graph-findings-041/);
assert.match(entry,/Noetic Atlas v0\.4\.1/);

console.log('v0.4.1 UI contract smoke: ok');
