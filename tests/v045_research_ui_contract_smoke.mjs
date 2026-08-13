import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const app=fs.readFileSync(new URL('../prototype/app.html',import.meta.url),'utf8');
const bridge=fs.readFileSync(new URL('../src/research/v044-discovery-suite.mjs',import.meta.url),'utf8');
const ui=fs.readFileSync(new URL('../src/research/research-aperture-ui.mjs',import.meta.url),'utf8');
const lab=fs.readFileSync(new URL('../src/research/research-lab-engine.mjs',import.meta.url),'utf8');

assert.equal((app.match(/<iframe\b/g)||[]).length,1,'research aperture may not add a second iframe');
for(const historical of ['v0412c','v0413','v042','v043','v044'])assert.doesNotMatch(app,new RegExp(`src="\\./${historical}\\.html`));
assert.doesNotMatch(app,/data-view="research"/i,'Research is an aperture, not an eighth top-level view');
for(const label of ['Chart','Reading','Resonance','Network','House Flow','Condition','Proof'])assert.match(app,new RegExp(`>${label}<`));
assert.match(bridge,/typeof window==='undefined'\|\|typeof document==='undefined'/);
assert.match(bridge,/window\.NoeticAtlasState=state/);
assert.match(bridge,/import\('\.\/research-aperture-ui\.mjs'\)/);
assert.match(bridge,/v0\.4\.5 candidate/);
assert.match(ui,/Personal/);
assert.match(ui,/Research/);
assert.match(ui,/buildOperationalModelSnapshot/);
assert.match(ui,/buildCurrentExperimentSuite/);
assert.match(ui,/buildResearchLab/);
assert.match(ui,/Open discovery candidates/);
assert.match(ui,/Null comparison is required before rarity language/);
assert.match(lab,/Discovery candidates may be unnamed and need not originate from prior hypotheses/);
for(const source of [bridge,ui,lab]){const syntaxOnly=source.replace(/^import .*$/gm,'').replace(/import\('\.\/research-aperture-ui\.mjs'\)/g,'Promise.resolve()');new vm.Script(`(async()=>{${syntaxOnly}\n})`);}
console.log('v0.4.5 Personal/Research aperture contract: ok');
