import assert from 'node:assert/strict';
import {chromium} from 'playwright';

const BASE=process.env.NOETIC_LIVE_URL||'https://theawesomeandy.github.io/astroframework/';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const pageErrors=[];
page.on('pageerror',e=>pageErrors.push(String(e)));
page.on('console',m=>{if(m.type()==='error')pageErrors.push(`console: ${m.text()}`)});

async function waitForDeployedV047(){
  let last='';
  for(let attempt=0;attempt<18;attempt++){
    await page.goto(`${BASE}?live-gate=${Date.now()}-${attempt}`,{waitUntil:'domcontentloaded',timeout:60000});
    await page.waitForTimeout(1500);
    last=page.url();
    const title=await page.title().catch(()=> '');
    const header=await page.locator('header h1').first().textContent().catch(()=> '');
    if(/\/prototype\/v047\.html/.test(last)&&/Noetic Atlas v0\.4\.7/.test(title)&&/v0\.4\.7/.test(header||''))return;
  }
  throw new Error(`live root did not resolve to deployed v0.4.7 shell; last URL=${last}`);
}

try{
  await waitForDeployedV047();
  assert.match(page.url(),/\/prototype\/v047\.html/,'root must land on authoritative v047 shell');
  assert.equal(await page.title(),'Noetic Atlas v0.4.7');
  assert.match((await page.locator('header').innerText()),/Noetic Atlas\s+v0\.4\.7/);
  assert.doesNotMatch((await page.locator('header').innerText()),/v0\.4\.5|v0\.4\.0b|candidate/i);

  await page.waitForFunction(()=>['READY','EMPTY','ERROR'].includes(document.querySelector('#stateChip')?.textContent||''),null,{timeout:45000});
  const boot=await page.locator('#stateChip').textContent();
  assert.equal(boot,'READY',`canonical bootstrap must reach READY, received ${boot}`);
  assert.equal(await page.locator('iframe#core').count(),1,'current shell must contain one deterministic-core iframe');
  assert.ok(await page.locator('iframe#core').isVisible(),'core iframe should be visible only after synchronized Ready');

  const frame=page.frames().find(f=>f.parentFrame()===page.mainFrame());
  assert.ok(frame,'deterministic core frame must exist');
  const coreBrand=(await frame.locator('.brand h1').textContent())||'';
  assert.match(coreBrand,/Deterministic Chart Authority/i,'current surface must identify inner core by subsystem role, not stale product version');
  assert.doesNotMatch(coreBrand,/v0\.4\.0b|v0\.4\.5|candidate/i);
  assert.ok(await frame.locator('#fieldSvg').locator('*').count()>0,'Natal Field must be rendered when outer shell reports Ready');

  const tabs=['Chart','Reading','Resonance','Network','House Flow','Condition','Proof'];
  for(const name of tabs){
    await page.getByRole('button',{name,exact:true}).click();
    const id=({'Chart':'chart','Reading':'reading','Resonance':'resonance','Network':'network','House Flow':'houseflow','Condition':'condition','Proof':'proof'})[name];
    assert.ok(await page.locator(`#${id}`).isVisible(),`${name} view must open`);
  }

  await page.getByRole('button',{name:'Network',exact:true}).click();
  assert.equal(await page.locator('body').getAttribute('data-aperture'),'personal');
  assert.equal(await page.locator('#nullLabPanel').isVisible(),false,'Personal must conceal null-run controls');
  assert.equal(await page.locator('#hypergraphPanel').isVisible(),false,'Personal must conceal research hypergraph machinery');

  await page.getByRole('button',{name:'Research',exact:true}).click();
  assert.equal(await page.locator('body').getAttribute('data-aperture'),'research');
  await page.locator('#hypergraphPanel').waitFor({state:'visible',timeout:15000});
  await page.locator('#nullLabPanel').waitFor({state:'visible',timeout:15000});
  const htxt=await page.locator('#hypergraphPanel').innerText();
  for(const expected of ['Grand Trine','Kite','T-Square Anchor Cluster'])assert.ok(htxt.includes(expected),`canonical hypergraph must expose ${expected}`);
  assert.ok(htxt.includes('Mercury')&&htxt.includes('Venus'),'canonical hypergraph must expose Mercury–Venus topological structures');
  assert.ok(await page.locator('[data-hyperedge-class="geometric_polygon"]').count()>0);
  assert.ok(await page.locator('[data-hyperedge-class="topological_basin"]').count()>0);
  assert.ok(await page.locator('[data-hyperedge-class="compound_hybrid"]').count()>0,'canonical fixture must expose at least one hybrid hyperedge');
  assert.match(htxt,/Research status \[D,V,B,P,I\]/);
  assert.match(htxt,/Null profile pending explicit Research run/,'nulls must not auto-run on load');

  await page.locator('#nullIterations').selectOption('199');
  await page.locator('#nullSeed').fill('v047-live-pages-gate');
  await page.getByRole('button',{name:'Run null tests',exact:true}).click();
  await page.waitForFunction(()=>{
    const b=document.querySelector('#runNulls');
    const t=document.querySelector('#networkContent')?.innerText||'';
    return b?.textContent==='Run null tests'&&/hypergraph v0\.4\.7 experiments/.test(t);
  },null,{timeout:180000});
  const networkAfter=await page.locator('#networkContent').innerText();
  assert.match(networkAfter,/Simulation ledger/);
  assert.match(networkAfter,/hypergraph v0\.4\.7 experiments/);
  assert.match(networkAfter,/raw p/i);
  assert.match(networkAfter,/adjusted p/i);
  assert.match(networkAfter,/percentile/i);
  assert.match(networkAfter,/not-admissible/i);
  assert.match(networkAfter,/Population frequency unknown/i);
  assert.match(networkAfter,/interpretation withheld/i);

  await page.getByRole('button',{name:'Proof',exact:true}).click();
  const proof=await page.locator('#proofContent').innerText();
  assert.match(proof,/Observation → Detection → Derivation → Counterfactual baseline/);
  assert.match(proof,/Population frequency\s+unknown/i);
  assert.match(proof,/Interpretation\s+withheld/i);
  assert.match(proof,/v0\.4\.6 run/i);
  assert.match(proof,/v0\.4\.7 hypergraph run/i);

  const frameUrl=frame.url();
  await frame.goto(frameUrl,{waitUntil:'domcontentloaded',timeout:60000});
  await page.waitForFunction(()=>document.querySelector('#stateChip')?.textContent==='READY',null,{timeout:45000});
  await page.getByRole('button',{name:'Network',exact:true}).click();
  await page.getByRole('button',{name:'Research',exact:true}).click();
  await page.waitForFunction(()=>/No null experiment has been run/.test(document.querySelector('#networkContent')?.innerText||''),null,{timeout:15000});
  const invalidated=await page.locator('#networkContent').innerText();
  assert.match(invalidated,/No null experiment has been run/,'core reload must invalidate attached null batch');
  assert.doesNotMatch(invalidated,/hypergraph v0\.4\.7 experiments/,'stale hypergraph results must not survive core reload');

  if(pageErrors.length)throw new Error(`browser errors observed:\n${pageErrors.join('\n')}`);
  console.log('LIVE v0.4.7 Pages gate: PASS');
  console.log(`URL: ${page.url()}`);
  console.log('Verified: root routing, v047 chrome, Ready bootstrap, seven views, Personal concealment, Research hyperedges, live 199-iteration null run, proof ceiling, reload invalidation.');
}finally{
  await browser.close();
}
