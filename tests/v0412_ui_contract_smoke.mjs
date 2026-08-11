import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../prototype/v0412b.html',import.meta.url),'utf8');
assert.match(html,/Noetic Atlas v0\.4\.1\.2/);
assert.match(html,/DEEP ENERGETIC SYNTHESIS · HOUSES \+ RULERS \+ GRAPH THEORY/);
assert.match(html,/energetic-synthesis-display\.mjs/);
assert.match(html,/buildEnergeticSynthesis/);
for(const pane of ['analysis','findings','metrics','condition','integrity']) assert.match(html,new RegExp(`id="${pane}"`));
for(const phrase of ['Core energy','How the energy moves','Balanced expression','Under-expression \/ depletion','Over-expression \/ excess','Material \/ lived expression','Soul \/ spirit inquiry','Ways to work with it']) assert.match(html,new RegExp(phrase,'i'));
assert.match(html,/Natural-house correspondence is a labeled modern overlay/i);
assert.match(html,/Ceres is not being ignored/i);
assert.match(html,/The graph term is never the interpretation/i);
assert.match(html,/symbolic field language/i);
assert.doesNotMatch(html,/psychological dominance or causation/i);

const moduleMatch=html.match(/<script type="module">([\s\S]*?)<\/script>/);
assert.ok(moduleMatch,'module script exists');
const syntaxOnly=moduleMatch[1].replace(/^import .*$/gm,'');
new vm.Script(`(async()=>{${syntaxOnly}\n})`);

const entry=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.match(entry,/prototype\/v0412b\.html\?build=energetic-0412b/);
assert.match(entry,/Noetic Atlas v0\.4\.1\.2/);

console.log('v0.4.1.2 UI contract smoke: ok');
