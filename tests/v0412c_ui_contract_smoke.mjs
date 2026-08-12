import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../prototype/v0412c.html',import.meta.url),'utf8');
assert.match(html,/Noetic Atlas v0\.4\.1\.2/);
assert.match(html,/Loading analysis/);
assert.match(html,/canonical specimen is loading automatically/i);
assert.match(html,/bootstrapCanonical\(\)/);
assert.match(html,/getElementById\('sample'\)/);
assert.match(html,/sample\.click\(\)/);
assert.match(html,/MutationObserver/);
assert.match(html,/Energetic synthesis returned no placement analyses/);
assert.match(html,/Analysis could not initialize/);
assert.match(html,/Any chart you calculate or paste on the left automatically replaces this reading/i);
assert.match(html,/energetic-synthesis-display\.mjs/);
assert.match(html,/buildEnergeticSynthesis/);
for(const pane of ['analysis','findings','metrics','condition','integrity']) assert.match(html,new RegExp(`id="${pane}"`));

const moduleMatch=html.match(/<script type="module">([\s\S]*?)<\/script>/);
assert.ok(moduleMatch,'module script exists');
const syntaxOnly=moduleMatch[1].replace(/^import .*$/gm,'');
new vm.Script(`(async()=>{${syntaxOnly}\n})`);

const entry=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
// Entry assertion is updated when v0412c becomes the promoted public surface.
assert.ok(entry.includes('Noetic Atlas v0.4.1.2'));

console.log('v0.4.1.2c analysis bootstrap UI contract: ok');
