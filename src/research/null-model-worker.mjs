import {runNullModelLaboratory} from './null-model-laboratory.mjs';

self.onmessage=event=>{
  const message=event?.data||{};
  if(message.type!=='run')return;
  const requestId=message.request_id||null;
  try{
    const result=runNullModelLaboratory(message.payload||{});
    self.postMessage({type:'result',request_id:requestId,result});
  }catch(error){
    self.postMessage({type:'error',request_id:requestId,error:error?.message||String(error)});
  }
};
