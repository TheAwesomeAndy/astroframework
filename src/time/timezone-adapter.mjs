import tzLookup from '@photostructure/tz-lookup';
import { resolveLocalDateTime } from './timezone-core.mjs';

export function resolveBirthLocalTime(input){
  return resolveLocalDateTime(input,tzLookup);
}
