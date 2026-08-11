export const TZ_LOOKUP_VERSION='11.5.0';
export const TZ_LOOKUP_CDN=`https://esm.sh/@photostructure/tz-lookup@${TZ_LOOKUP_VERSION}`;

function finite(x,name,min,max){x=Number(x);if(!Number.isFinite(x)||x<min||x>max)throw new Error(`${name} must be in [${min}, ${max}].`);return x}
function parseWall(s){
  const m=String(s||'').trim().match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?$/);
  if(!m)throw new Error('Local birth date/time must be YYYY-MM-DDTHH:MM[:SS], without a UTC offset.');
  return {year:+m[1],month:+m[2],day:+m[3],hour:+m[4],minute:+m[5],second:+(m[6]||0)};
}
function formatter(zone){return new Intl.DateTimeFormat('en-US',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'})}
function partsAt(ms,zone){const p=Object.fromEntries(formatter(zone).formatToParts(new Date(ms)).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));return {year:+p.year,month:+p.month,day:+p.day,hour:+p.hour,minute:+p.minute,second:+p.second}}
function same(a,b){return ['year','month','day','hour','minute','second'].every(k=>a[k]===b[k])}
function offsetAt(ms,zone){const p=partsAt(ms,zone);return Math.round((Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute,p.second)-Math.floor(ms/1000)*1000)/60000)}
function offsetString(minutes){const sign=minutes>=0?'+':'-';minutes=Math.abs(minutes);return `${sign}${String(Math.floor(minutes/60)).padStart(2,'0')}:${String(minutes%60).padStart(2,'0')}`}

/** Resolve a local civil birth time using a coordinate→IANA-zone lookup function plus JavaScript Intl historical zone rules. */
export function resolveLocalDateTime({local_datetime,latitude,longitude,timezone_override,ambiguity_index},tzLookup){
  if(typeof tzLookup!=='function'&&!timezone_override)throw new Error('A coordinate timezone lookup function is required unless timezone_override is supplied.');
  const wall=parseWall(local_datetime),lat=finite(latitude,'Latitude',-90,90),lon=finite(longitude,'Longitude',-180,180);
  const zone=timezone_override||tzLookup(lat,lon),naive=Date.UTC(wall.year,wall.month-1,wall.day,wall.hour,wall.minute,wall.second);
  const offsets=new Set([-2,-1,0,1,2].map(d=>offsetAt(naive+d*86400000,zone))),candidates=[];
  for(const off of offsets){const ms=naive-off*60000;if(same(partsAt(ms,zone),wall))candidates.push({ms,offset_minutes:off})}
  candidates.sort((a,b)=>a.ms-b.ms);
  if(!candidates.length)throw new Error(`Local time ${local_datetime} does not exist in ${zone} (DST/civil-time gap).`);
  if(candidates.length>1&&!Number.isInteger(ambiguity_index)){
    const choices=candidates.map((c,i)=>`${i}: ${new Date(c.ms).toISOString()} (${offsetString(c.offset_minutes)})`).join('; ');
    throw new Error(`Local time ${local_datetime} is ambiguous in ${zone}. Supply ambiguity_index 0 or 1. Choices: ${choices}`);
  }
  const idx=candidates.length>1?ambiguity_index:0;if(idx<0||idx>=candidates.length)throw new Error('ambiguity_index out of range.');
  const c=candidates[idx];
  return {timestamp:`${local_datetime}${offsetString(c.offset_minutes)}`,timestamp_utc:new Date(c.ms).toISOString(),timezone:zone,offset_minutes:c.offset_minutes,
    ambiguous:candidates.length>1,candidate_count:candidates.length,
    provenance:{calculation:'naf.timezone.local_to_utc.v1',timezone_lookup:timezone_override?'manual_override':'coordinate_lookup',timezone_name:zone,
      lookup_version:timezone_override?null:TZ_LOOKUP_VERSION,intl:'IANA historical zone rules through JavaScript Intl'}};
}
