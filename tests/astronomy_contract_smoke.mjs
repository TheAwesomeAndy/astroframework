import assert from 'node:assert/strict';
import { calculateBirthChart, parseExplicitTimestamp, signedAngularDelta } from '../src/astronomy/astronomy-engine-core.mjs';
import { analyzeChartWithIntegrity } from '../src/kernel/hellenistic-integrity.mjs';

assert.throws(()=>parseExplicitTimestamp('1984-10-03T21:17:00'),/explicit UTC offset/);
assert.equal(parseExplicitTimestamp('1984-10-03T21:17:00-04:00').toISOString(),'1984-10-04T01:17:00.000Z');
assert.equal(signedAngularDelta(359,1),2);
assert.equal(signedAngularDelta(1,359),-2);

const I=[[1,0,0],[0,1,0],[0,0,1]];
function mul(a,b){return a.map((r,i)=>r.map((_,j)=>a[i][0]*b[0][j]+a[i][1]*b[1][j]+a[i][2]*b[2][j]))}
class Observer{constructor(latitude,longitude,height){this.latitude=latitude;this.longitude=longitude;this.height=height}}
const base={Sun:190,Moon:68,Mercury:199,Venus:164,Mars:165,Jupiter:307,Saturn:235,Uranus:254,Neptune:270,Pluto:213};
const spd={Sun:1,Moon:13,Mercury:1.2,Venus:1.1,Mars:.6,Jupiter:.08,Saturn:.03,Uranus:.01,Neptune:.006,Pluto:.004};
const epoch=Date.parse('2000-01-01T00:00:00Z');
const A={
  Body:Object.fromEntries(Object.keys(base).map(k=>[k,k])), Observer,
  GeoVector(body,date){return {body,date:new Date(date)}},
  Ecliptic(v){const days=(v.date.getTime()-epoch)/86400000;return {elon:(base[v.body]+spd[v.body]*days)%360}},
  Rotation_ECT_EQD(){return {rot:I}},
  Rotation_EQD_HOR(){const a=35*Math.PI/180,b=40*Math.PI/180,ca=Math.cos(a),sa=Math.sin(a),cb=Math.cos(b),sb=Math.sin(b);const rx=[[1,0,0],[0,ca,-sa],[0,sa,ca]],rz=[[cb,-sb,0],[sb,cb,0],[0,0,1]];return {rot:mul(rz,rx)}},
  CombineRotation(a,b){return {rot:mul(b.rot,a.rot)}},
  VectorFromSphere(s,date){const p=s.lat*Math.PI/180,l=s.lon*Math.PI/180,cp=Math.cos(p);return {x:cp*Math.cos(l),y:cp*Math.sin(l),z:Math.sin(p),t:date}},
  RotateVector(R,v){const m=R.rot;return {x:m[0][0]*v.x+m[0][1]*v.y+m[0][2]*v.z,y:m[1][0]*v.x+m[1][1]*v.y+m[1][2]*v.z,z:m[2][0]*v.x+m[2][1]*v.y+m[2][2]*v.z,t:v.t}},
  Equator(){return {ra:0,dec:0}}, Horizon(){return {altitude:-5}}
};
const parsed=calculateBirthChart(A,{timestamp:'2000-01-01T00:00:00Z',latitude:40,longitude:-73,elevation_m:10});
assert.equal(parsed.source_format,'birth_data');
assert.equal(parsed.objects.length,10);
assert.ok(Number.isFinite(parsed.angles.ASC.longitude));
assert.ok(Number.isFinite(parsed.angles.MC.longitude));
assert.ok(parsed.angles.ASC.provenance.proof.horizontal_vector.y<0);
assert.ok(parsed.angles.MC.provenance.proof.horizontal_vector.z>0);
assert.equal(parsed.metadata.sun_altitude_deg,-5);
const analysis=analyzeChartWithIntegrity(parsed);
assert.equal(analysis.sect.sect,'night');
assert.equal(analysis.lots.length,7);
assert.ok(analysis.derivation_ledger.some(x=>x.kind==='sect'));
console.log('PASS astronomy adapter contract: birth-data pipeline yields angles, velocities, sect, seven lots, and an audit ledger.');
