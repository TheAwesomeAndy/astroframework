import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../prototype/app.html',import.meta.url),'utf8');
const iframeCount=(html.match(/<iframe\b/g)||[]).length;
assert.equal(iframeCount,1,'current app must have exactly one iframe');
assert.match(html,/id="core" src="\.\/index\.html\?build=v044-core"/);
for(const historical of ['v0412c','v0413','v042','v043','v044'])assert.doesNotMatch(html,new RegExp(`src="\\./${historical}\\.html`));
assert.doesNotMatch(html,/Existing Atlas/,'historical wrapper terminology must not appear in current app chrome');
for(const label of ['Chart','Reading','Resonance','Network','House Flow','Condition','Proof'])assert.match(html,new RegExp(`>${label}<`));
for(const capability of ['buildEnergeticSynthesis','buildHouseResonanceMap','analyzeGraphArchitecture','buildHouseRiver','computeConditionSystem','buildEvidencePack','buildAuditableReading','checkReadingIntegrity','buildModernRulershipOverlay','computeExtendedAspects','buildV044DiscoverySuite','buildDerivationIndexV044','walkDerivationV044'])assert.match(html,new RegExp(capability));
assert.match(html,/conditions\.relational/);
assert.match(html,/conditions\.compound/);
assert.match(html,/renderConditionSignatureHTML/);
assert.match(html,/MutationObserver/);
assert.match(html,/Structural mismatch or unresolved proof blocks publication/i);
assert.match(html,/Route width remains an integer count of house-ruler paths/i);
assert.match(html,/modern overlay never rewrites traditional dispositor edges/i);
assert.match(html,/expanded aspect family/i);
assert.match(html,/overflow:auto/,'non-chart views must be scrollable');
const moduleMatch=html.match(/<script type="module">([\s\S]*?)<\/script>/);assert.ok(moduleMatch,'module script exists');
const syntaxOnly=moduleMatch[1].replace(/^import .*$/gm,'');new vm.Script(`(async()=>{${syntaxOnly}\n})`);

const root=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.match(root,/prototype\/app\.html\?build=auditable-044/);
assert.doesNotMatch(root,/prototype\/v044\.html/,'public root must open the current app shell, not a versioned candidate page');

console.log('unified application shell contract: ok · v0.4.4 current app');
