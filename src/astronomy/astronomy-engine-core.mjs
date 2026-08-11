import { normalize360, SIGN_ORDER } from '../kernel/noetic-kernel.mjs';

export const ASTRONOMY_ENGINE_VERSION = '2.1.19';
export const ASTRONOMY_ENGINE_CDN = `https://cdn.jsdelivr.net/npm/astronomy-engine@${ASTRONOMY_ENGINE_VERSION}/esm/astronomy.js`;
export const CORE_BODIES = ['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];

function assertFinite(name,x,min=-Infinity,max=Infinity){
  x=Number(x); if(!Number.isFinite(x)||x<min||x>max) throw new Error(`${name} must be a finite number in [${min}, ${max}].`); return x;
}
function signDegreeFromLongitude(longitude){
  const x=normalize360(longitude), si=Math.floor(x/30);
  return {sign:SIGN_ORDER[si],degree:x-si*30,longitude:x};
}
export function parseExplicitTimestamp(timestamp){
  const s=String(timestamp||'').trim();
  if(!/(Z|[+-]\d{2}:?\d{2})$/i.test(s)) throw new Error('Birth timestamp must include an explicit UTC offset or Z. Example: 1984-10-03T21:17:00-04:00.');
  const d=new Date(s); if(Number.isNaN(d.getTime())) throw new Error('Invalid birth timestamp.'); return d;
}
export function signedAngularDelta(from,to){ return ((normalize360(to)-normalize360(from)+540)%360)-180; }

function eclipticLongitude(A,body,date){
  const vec=A.GeoVector(A.Body[body],date,true);
  return normalize360(A.Ecliptic(vec).elon);
}
function centralSpeed(A,body,date,stepMinutes=30){
  const ms=stepMinutes*60000, before=new Date(date.getTime()-ms), after=new Date(date.getTime()+ms);
  const a=eclipticLongitude(A,body,before), b=eclipticLongitude(A,body,after), days=(2*stepMinutes)/(24*60);
  return signedAngularDelta(a,b)/days;
}
function eclipticUnitToHorizontal(A,rotation,date,lambda){
  const ect=A.VectorFromSphere({lat:0,lon:normalize360(lambda),dist:1},date);
  return A.RotateVector(rotation,ect);
}
function solveLinearCircleRoot(a0,b90){ return normalize360(Math.atan2(-a0,b90)*180/Math.PI); }

export function calculateAngles(A,date,observer){
  const rot=A.CombineRotation(A.Rotation_ECT_EQD(date),A.Rotation_EQD_HOR(date,observer));
  const v0=eclipticUnitToHorizontal(A,rot,date,0), v90=eclipticUnitToHorizontal(A,rot,date,90);
  const h0=solveLinearCircleRoot(v0.z,v90.z), horizonCandidates=[h0,normalize360(h0+180)];
  const horizonVectors=horizonCandidates.map(l=>({longitude:l,vector:eclipticUnitToHorizontal(A,rot,date,l)}));
  const asc=horizonVectors.find(x=>x.vector.y<0) || horizonVectors[0];
  const m0=solveLinearCircleRoot(v0.y,v90.y), meridianCandidates=[m0,normalize360(m0+180)];
  const meridianVectors=meridianCandidates.map(l=>({longitude:l,vector:eclipticUnitToHorizontal(A,rot,date,l)}));
  const mc=meridianVectors.find(x=>x.vector.z>0) || meridianVectors[0];
  return {
    ASC:{...signDegreeFromLongitude(asc.longitude),proof:{condition:'ecliptic ∩ geometric eastern horizon',horizontal_vector:asc.vector,candidates:horizonCandidates}},
    MC:{...signDegreeFromLongitude(mc.longitude),proof:{condition:'ecliptic ∩ local meridian above horizon',horizontal_vector:mc.vector,candidates:meridianCandidates}},
    rotation_model:'ECT→EQD→HOR'
  };
}

export function calculateBirthChart(A,input){
  if(!A?.GeoVector || !A?.Ecliptic || !A?.Observer) throw new Error('Astronomy Engine API object is missing required functions.');
  const date=parseExplicitTimestamp(input.timestamp);
  const latitude=assertFinite('Latitude',input.latitude,-90,90), longitude=assertFinite('Longitude',input.longitude,-180,180), elevation=assertFinite('Elevation',input.elevation_m??0,-500,100000);
  const observer=new A.Observer(latitude,longitude,elevation);
  const angleCalc=calculateAngles(A,date,observer);
  const objects=CORE_BODIES.map(id=>{
    const longitudeDeg=eclipticLongitude(A,id,date), z=signDegreeFromLongitude(longitudeDeg), speed=centralSpeed(A,id,date,30);
    return {id,type:'planet',sign:z.sign,degree:z.degree,longitude:z.longitude,speed_deg_per_day:speed,retrograde:speed<0,
      provenance:{source:'Astronomy Engine',engine_version:ASTRONOMY_ENGINE_VERSION,calculation:'GeoVector(aberration=true) → Ecliptic(true ecliptic of date)',timestamp_utc:date.toISOString(),precision_claim:'library target ±1 arcminute'}};
  });
  const sunEq=A.Equator(A.Body.Sun,date,observer,true,true);
  const sunHor=A.Horizon(date,observer,sunEq.ra,sunEq.dec,null);
  const angles={
    ASC:{id:'ASC',type:'angle',sign:angleCalc.ASC.sign,degree:angleCalc.ASC.degree,longitude:angleCalc.ASC.longitude,provenance:{source:'NAF angle solver + Astronomy Engine rotations',engine_version:ASTRONOMY_ENGINE_VERSION,proof:angleCalc.ASC.proof}},
    MC:{id:'MC',type:'angle',sign:angleCalc.MC.sign,degree:angleCalc.MC.degree,longitude:angleCalc.MC.longitude,provenance:{source:'NAF angle solver + Astronomy Engine rotations',engine_version:ASTRONOMY_ENGINE_VERSION,proof:angleCalc.MC.proof}}
  };
  return {
    source_format:'birth_data',objects,angles,
    metadata:{timestamp_supplied:String(input.timestamp),timestamp_utc:date.toISOString(),latitude_deg:latitude,longitude_deg_east:longitude,elevation_m:elevation,
      sun_altitude_deg:sunHor.altitude,astronomy_engine_version:ASTRONOMY_ENGINE_VERSION,
      astronomical_model:'geocentric apparent body vectors; true ecliptic of date; geometric horizon for sect',
      unsupported_in_open_adapter:['Chiron','lunar node longitude','Lilith/lunar apogee','Vertex'],
      provenance:{engine:'Astronomy Engine',engine_version:ASTRONOMY_ENGINE_VERSION,license:'MIT',library_validation:'Astronomy Engine documents a ±1 arcminute design target and validation against NOVAS/JPL Horizons.'}}
  };
}
