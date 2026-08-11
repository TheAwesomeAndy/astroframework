import * as Astronomy from 'astronomy-engine';
import { calculateBirthChart } from './astronomy-engine-core.mjs';

export function chartFromBirthData(input){
  return calculateBirthChart(Astronomy,input);
}
