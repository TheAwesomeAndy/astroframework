export const HOUSE_RIVER_VERSION='0.4.2';
export const HOUSE_RIVER_MODEL='naf.research.house_river.v0.4.2';

const HOUSE_TOPICS={
  1:'embodiment / identity',2:'resources / livelihood',3:'communication / learning',4:'home / roots',
  5:'creation / children / pleasure',6:'work / health / maintenance',7:'partners / contracts',8:'shared resources / vulnerability',
  9:'philosophy / higher learning',10:'career / public consequence',11:'friends / networks / patrons',12:'solitude / hidden processes'
};
const key=(a,b)=>`${a}->${b}`;
const derivationRef=id=>`derivation:${id}`;

export function buildHouseRiver(analysis){
  const routes=analysis?.topology?.house_routes||[];
  const edgeCounts=new Map(),edgeHouses=new Map(),bands=[],entries=[];
  for(const route of routes){
    const house=Number(route.house),topic=HOUSE_TOPICS[house]||`${house}H`,source=`house:${house}`;
    const entry=route.entry_ruler||route.route?.[0]||null;
    if(!entry)continue;
    const sourceId=`house_river:house:${house}->${entry}`;
    bands.push({id:sourceId,kind:'house_entry',from:source,to:entry,house,topic,count:1,width_basis:'one house-topic source',derivation_ref:derivationRef(sourceId)});
    entries.push({
      kind:'house_river_entry',id:sourceId,epistemic_layer:'graph-derived',rule_id:'naf.house.ruler_route.entry.v1',
      source_reference:'Whole Sign house sign + traditional domicile ruler from deterministic chart state.',
      inputs:{house,sign:route.sign,entry_ruler:entry},result:{from:source,to:entry,count:1},
      dependencies:[`whole_sign_house:ASC`,`dispositor_edge:${entry}->${analysis?.topology?.dispositor_graph?.edges?.find(e=>e.from===entry)?.to||entry}`],
      derivation_ref:derivationRef(sourceId),provenance:{model:HOUSE_RIVER_MODEL,version:HOUSE_RIVER_VERSION}
    });
    const path=route.route||[];
    for(let i=0;i<path.length-1;i++){
      const from=path[i],to=path[i+1],k=key(from,to);
      edgeCounts.set(k,(edgeCounts.get(k)||0)+1);
      if(!edgeHouses.has(k))edgeHouses.set(k,[]);
      edgeHouses.get(k).push(house);
    }
  }
  for(const [k,count] of edgeCounts){
    const [from,to]=k.split('->'),houses=edgeHouses.get(k)||[],id=`house_river:path:${k}`;
    bands.push({id,kind:'planetary_route',from,to,count,houses,topics:houses.map(h=>HOUSE_TOPICS[h]),width_basis:'number of house-ruler paths traversing this dispositor edge',derivation_ref:derivationRef(id)});
    entries.push({
      kind:'house_river_path',id,epistemic_layer:'graph-derived',rule_id:'naf.house_river.route_count.v1',
      source_reference:'Derived from deterministic Whole Sign house routes and the selected traditional domicile dispositor graph.',
      inputs:{edge:{from,to},house_routes:houses},result:{route_count:count},
      dependencies:[`dispositor_edge:${from}->${to}`,...houses.map(h=>`house_route:${h}`)],
      derivation_ref:derivationRef(id),provenance:{model:HOUSE_RIVER_MODEL,version:HOUSE_RIVER_VERSION}
    });
  }
  const maxCount=Math.max(1,...[...edgeCounts.values()]);
  return {
    model_id:HOUSE_RIVER_MODEL,version:HOUSE_RIVER_VERSION,
    width_semantics:'For planetary routing bands, width encodes the integer number of Whole Sign house-ruler paths that traverse that dispositor edge. It is not an energy-strength score.',
    houses:routes.map(r=>({house:r.house,topic:HOUSE_TOPICS[r.house],sign:r.sign,entry_ruler:r.entry_ruler,route:r.route,terminated:r.terminated})),
    bands,
    planetary_bands:bands.filter(b=>b.kind==='planetary_route').sort((a,b)=>b.count-a.count||a.id.localeCompare(b.id)),
    source_bands:bands.filter(b=>b.kind==='house_entry'),
    max_route_count:maxCount,
    derivation_entries:entries,
    epistemic_layer:'graph-derived'
  };
}
