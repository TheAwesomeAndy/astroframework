import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html=fs.readFileSync(new URL('../prototype/v047.html',import.meta.url),'utf8');
const root=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const worker=fs.readFileSync(new URL('../prototype/v047-research-worker.mjs',import.meta.url),'utf8');

assert.match(html,/<title>Noetic Atlas v0\.4\.7<\/title>/);
assert.match(html,/Noetic Atlas <span class="build">v0\.4\.7<\/span>/);
assert.doesNotMatch(html,/v0\.4\.5|v0\.4\.0b|candidate/i,'current v047 chrome must not expose stale product labels');
assert.equal((html.match(/<iframe\b/g)||[]).length,1,'v047 must have exactly one iframe');
assert.match(html,/id="core" src="\.\/index\.html\?build=v047-core"/);
for(const historical of ['v0412c','v0413','v042','v043','v044','v045','v046'])assert.doesNotMatch(html,new RegExp(`src="\\./${historical}\\.html`));

const views=[...html.matchAll(/data-view="([^"]+)"/g)].map(m=>m[1]);
assert.deepEqual(views,['chart','reading','resonance','network','houseflow','condition','proof']);
assert.match(html,/data-aperture="personal"/);
assert.match(html,/data-aperture="research"/);
assert.doesNotMatch(html,/data-view="research"/,'Research remains an aperture, not an eighth top-level view');
assert.match(html,/<body data-aperture="personal" data-bootstrap="loading">/,'Personal must be the default aperture');

for(const state of ['loading','ready','empty','error'])assert.match(html,new RegExp(`['\"]${state}['\"]`));
assert.match(html,/Chart state and Natal Field are synchronized/);
assert.match(html,/No chart is loaded/);
assert.match(html,/Chart state exists, but the Natal Field did not attach/);
assert.match(html,/MutationObserver/);
assert.match(html,/requestCanonicalSample/);
assert.match(html,/coreVisualReady/);
assert.match(html,/ensureCoreChrome/);
assert.match(html,/DETERMINISTIC CHART AUTHORITY/);

for(const token of ['computeConditionSystem','analyzeGraphArchitecture','buildEnergeticSynthesis','buildHouseResonanceMap','buildModernRulershipOverlay','buildHouseRiver','computeExtendedAspects','buildV044DiscoverySuite','buildEvidencePack','buildAuditableReading','checkReadingIntegrity','buildResearchLabV047','buildAstrologicalHypergraph'])assert.match(html,new RegExp(token));
assert.match(html,/Structural mismatch or unresolved proof blocks publication/i);
assert.match(html,/modern overlay never rewrites traditional dispositor edges/i);
assert.match(html,/Route width remains an integer count of Whole Sign house-ruler paths/i);

assert.match(html,/id="nullLabPanel"/);
assert.match(html,/Run null tests/);
assert.match(html,/199,999,4999,9999/);
assert.match(html,/v047-research-worker\.mjs/);
assert.match(html,/new Worker/);
assert.match(html,/Web Worker execution/);
assert.match(html,/Research mode never auto-runs simulations/);
assert.match(html,/finite Monte Carlo \+1 correction/i);
assert.match(html,/Benjamini.?Hochberg/i);
assert.match(html,/class="researchOnly panel" id="nullLabPanel"/,'null controls must be Research-only');

assert.match(html,/id="hypergraphPanel"/);
assert.match(html,/geometric_polygon/);
assert.match(html,/topological_basin/);
assert.match(html,/compound_hybrid/);
assert.match(html,/Research status \[D,V,B,P,I\]/);
assert.match(html,/raw p/);
assert.match(html,/adjusted p/);
assert.match(html,/percentile/);
assert.match(html,/not-admissible/);
assert.match(html,/simulation quality/i);
assert.match(html,/Population frequency unknown/);
assert.match(html,/interpretation withheld/);

assert.match(worker,/runNullModelLaboratory/);
assert.match(worker,/runHypergraphNullLaboratory/);
assert.match(worker,/self\.onmessage/);
assert.match(worker,/postMessage/);

const invalidation=html.match(/function invalidateResearchAttachments\([\s\S]*?\n\}/)?.[0]||'';
assert.match(invalidation,/researchWorker\.terminate\(\)/);
assert.match(invalidation,/nullResult=null;hyperNullResult=null;nullBusy=false/,'chart-state change must clear both research result families');
assert.match(html,/invalidateResearchAttachments\('chart-state-change'\)/);
const explicitRun=html.indexOf("b.onclick=()=>");
const workerPost=html.indexOf("researchWorker.postMessage({type:'run'");
assert.ok(explicitRun>=0&&workerPost>explicitRun,'null simulations must only start inside the explicit Run null tests handler');
assert.doesNotMatch(html,/startBootstrapWatch\([^)]*runNull/i,'bootstrap must not run null tests');

assert.match(html,/Regime contamination audit/);
assert.match(html,/Observation → Detection → Derivation → Counterfactual baseline/);
assert.match(html,/Population frequency<\/span><b>unknown<\/b>/);
assert.match(html,/Interpretation<\/span><b>withheld<\/b>/);

assert.match(root,/url=\.\/prototype\/v047\.html/);
assert.match(root,/window\.location\.replace\('\.\/prototype\/v047\.html'\)/);
assert.match(root,/<title>Noetic Atlas v0\.4\.7<\/title>/);
assert.doesNotMatch(root,/research-045|prototype\/app\.html|prototype\/v046\.html/,'root must have one current target only');

const moduleScript=html.match(/<script type="module">([\s\S]*?)<\/script>/);assert.ok(moduleScript,'module script must exist');
const code=moduleScript[1].replace(/^import .*$/gm,'');new vm.Script(`(async()=>{${code}\n})`);
console.log('v0.4.7 public productization UI contract: ok');
