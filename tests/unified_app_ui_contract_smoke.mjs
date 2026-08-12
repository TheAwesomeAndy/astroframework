import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../prototype/app.html',import.meta.url),'utf8');
const iframeCount=(html.match(/<iframe\b/g)||[]).length;
assert.equal(iframeCount,1,'current app must have exactly one iframe');
assert.match(html,/id="core" src="\.\/index\.html\?build=unified-app-core"/);
assert.doesNotMatch(html,/src="\.\/v0412c\.html/);
assert.doesNotMatch(html,/src="\.\/v0413\.html/);
assert.doesNotMatch(html,/src="\.\/v042\.html/);
assert.doesNotMatch(html,/src="\.\/v043\.html/);
assert.doesNotMatch(html,/Existing Atlas/,'historical wrapper terminology must not appear in current app chrome');
for(const label of ['Chart','Reading','Resonance','Network','House Flow','Condition','Proof'])assert.match(html,new RegExp(`>${label}<`));
for(const capability of ['buildEnergeticSynthesis','buildHouseResonanceMap','analyzeGraphArchitecture','buildHouseRiver','computeConditionSystem','buildDerivationIndex','walkDerivation'])assert.match(html,new RegExp(capability));
assert.match(html,/conditions\.relational/);
assert.match(html,/conditions\.compound/);
assert.match(html,/renderConditionSignatureHTML/);
assert.match(html,/MutationObserver/);
assert.match(html,/loadCanonicalIfNeeded/);
assert.match(html,/overflow:auto/,'non-chart views must be scrollable');
assert.match(html,/No net score exists/);
assert.match(html,/Band width is only the integer number of house-ruler paths|band width is only the integer number of house-ruler paths/i);
const moduleMatch=html.match(/<script type="module">([\s\S]*?)<\/script>/);assert.ok(moduleMatch,'module script exists');
const syntaxOnly=moduleMatch[1].replace(/^import .*$/gm,'');new vm.Script(`(async()=>{${syntaxOnly}\n})`);

const root=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.match(root,/prototype\/app\.html\?build=unified-043/);
assert.doesNotMatch(root,/prototype\/v043\.html/);

console.log('unified application shell contract: ok');
