import {computePrimitiveConditions,CLASSICAL_PLANETS} from './primitive-condition-engine.mjs';
import {computeRelationalConditions} from './relational-condition-engine.mjs';
import {buildConditionSignatures} from './condition-signature.mjs';

export const CONDITION_SYSTEM_VERSION='0.4.2';
export const CONDITION_SYSTEM_MODEL='naf.condition.system.v0.4.2';

export function computeConditionSystem(analysis){
  const primitive=computePrimitiveConditions(analysis);
  const relational=computeRelationalConditions(analysis);
  const signatures=buildConditionSignatures(primitive,relational);
  const by_planet={};
  for(const planet of CLASSICAL_PLANETS){
    by_planet[planet]={
      ...(primitive.by_planet[planet]||{planet}),
      relational:relational.by_planet[planet]||null,
      signature:signatures[planet]
    };
  }
  return {
    model_id:CONDITION_SYSTEM_MODEL,version:CONDITION_SYSTEM_VERSION,
    completeness:{primitive:'implemented',relational:'implemented',compound:'not_implemented',scalar_strength:'intentionally_not_implemented'},
    primitive,relational,signatures,by_planet,
    ledger_entries:[...(primitive.ledger_entries||[]),...(relational.ledger_entries||[])]
  };
}
