import {runNullModelLaboratory} from '../src/research/null-model-laboratory.mjs';
import {runHypergraphNullLaboratory} from '../src/research/hypergraph-null-evaluator.mjs';

self.onmessage=event=>{
  const message=event?.data||{};
  if(message.type!=='run')return;
  const requestId=message.request_id||null;
  try{
    const payload=message.payload||{};
    const base=runNullModelLaboratory(payload);
    const hypergraph=runHypergraphNullLaboratory(payload);
    self.postMessage({type:'result',request_id:requestId,result:{base,hypergraph}});
  }catch(error){
    self.postMessage({type:'error',request_id:requestId,error:error?.message||String(error)});
  }
};
