import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const html=fs.readFileSync(new URL('../prototype/v041.html',import.meta.url),'utf8');
assert.match(html,/Noetic Atlas v0\.4\.1/);
assert.match(html,/GRAPH ANALYTICS \+ EXPLAINABLE FINDINGS/);
assert.match(html,/graph-analytics-engine\.mjs/);
assert.match(html,/computePrimitiveConditions/);
assert.match(html,/analyzeGraphArchitecture/);
for(const pane of ['findings','metrics','condition','integrity']) assert.match(html,new RegExp(`data-pane="${pane}"`));
for(const phrase of ['Graph-theory meaning','Astrological rule context','Interpretive hypothesis','Limits','Proof']) assert.match(html,new RegExp(phrase,'i'));
assert.doesNotMatch(html,/v0\.3\.2/);

const moduleMatch=html.match(/<script type="module">([\s\S]*?)<\/script>/);
assert.ok(moduleMatch,'v0.4.1 must contain a module script');
const tmp=path.join(os.tmpdir(),`naf-v041-${process.pid}.mjs`);
fs.writeFileSync(tmp,moduleMatch[1]);
try{execFileSync(process.execPath,['--check',tmp],{stdio:'pipe'})}finally{fs.rmSync(tmp,{force:true})}

// v0.4.1 remains a preserved historical test surface. The repository root is
// owned by the newest public UI contract and may advance independently.
console.log('v0.4.1 legacy UI contract smoke: ok');
