import { resolveBirthLocalTime } from '../time/timezone-adapter.mjs';
import { chartFromBirthData } from '../astronomy/astronomy-engine-adapter.mjs';
import { analyzeChartWithIntegrity } from '../kernel/hellenistic-integrity.mjs';
import { analyzeExploratoryPatterns } from '../research/pattern-engine.mjs';

/**
 * End-to-end public input contract.
 * Required: local_datetime (YYYY-MM-DDTHH:MM[:SS]), latitude, longitude.
 * Optional: elevation_m, timezone_override, ambiguity_index, orbPolicy.
 */
export function analyzeBirthInput(input){
  const time=resolveBirthLocalTime(input);
  const parsed=chartFromBirthData({timestamp:time.timestamp,latitude:input.latitude,longitude:input.longitude,elevation_m:input.elevation_m??0});
  parsed.metadata.timezone_resolution=time;
  const analysis=analyzeChartWithIntegrity(parsed,{orbPolicy:input.orbPolicy});
  analysis.research=analyzeExploratoryPatterns(analysis);
  analysis.provenance.public_input={local_datetime:input.local_datetime,latitude:Number(input.latitude),longitude:Number(input.longitude),elevation_m:Number(input.elevation_m??0),timezone_override:input.timezone_override||null,ambiguity_index:Number.isInteger(input.ambiguity_index)?input.ambiguity_index:null};
  return analysis;
}
