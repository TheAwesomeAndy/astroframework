export const ASTROLOGICAL_ANALYSIS_VERSION='0.4.1.1';
export const ASTROLOGICAL_ANALYSIS_MODEL='naf.interpretation.astrological_analysis.v0.4.1.1';

const OUTER_PLANETS=new Set(['Uranus','Neptune','Pluto']);

const PLANET_ARCHETYPES={
  Sun:{noun:'identity, coherence, visibility, and directed purpose',verb:'organizes experience around a central principle'},
  Moon:{noun:'habit, regulation, attachment, memory, and embodied responsiveness',verb:'registers and regulates experience'},
  Mercury:{noun:'perception, language, discrimination, exchange, and cognition',verb:'classifies, connects, translates, and communicates'},
  Venus:{noun:'valuation, attraction, affiliation, pleasure, and harmonization',verb:'selects what is valued and draws parts into relationship'},
  Mars:{noun:'action, separation, assertion, conflict, and directed effort',verb:'mobilizes force and cuts toward an objective'},
  Jupiter:{noun:'expansion, synthesis, confidence, meaning, and increase',verb:'amplifies, connects, legitimizes, and enlarges'},
  Saturn:{noun:'constraint, boundary, endurance, obligation, and consolidation',verb:'compresses, defines, delays, and stabilizes'},
  Uranus:{noun:'discontinuity, liberation, individuation, invention, and sudden re-patterning',verb:'breaks continuity and introduces a new operating pattern'},
  Neptune:{noun:'permeability, imagination, idealization, dissolution, devotion, and ambiguity',verb:'softens boundaries and diffuses ordinary distinctions'},
  Pluto:{noun:'compression, power, compulsion, exposure, elimination, and metamorphosis',verb:'concentrates pressure until a deeper reorganization becomes unavoidable'}
};

const SIGN_FIELDS={
  Aries:'cardinal fire: rapid initiation, direct assertion, competitive ignition, and movement before complete stabilization',
  Taurus:'fixed earth: consolidation, preservation, embodiment, material continuity, and resistance to unnecessary change',
  Gemini:'mutable air: multiplication of perspectives, exchange, comparison, mobility of attention, and information flow',
  Cancer:'cardinal water: protective bonding, memory, containment, attachment, and emotionally driven initiation',
  Leo:'fixed fire: sustained self-expression, visibility, creative authorship, pride, and centralization around a chosen identity',
  Virgo:'mutable earth: discrimination, correction, refinement, craft, service, and the reduction of error through repeated adjustment',
  Libra:'cardinal air: relational calibration, comparison, diplomacy, aesthetic ordering, and initiation through exchange with an other',
  Scorpio:'fixed water: concentration, secrecy, penetration, attachment under pressure, survival intelligence, and irreversible transformation',
  Sagittarius:'mutable fire: expansion through exploration, doctrine, experiment, meaning, risk, and the pursuit of a larger horizon',
  Capricorn:'cardinal earth: strategic construction, hierarchy, duty, compression into form, and long-range material consequence',
  Aquarius:'fixed air: systems thinking, abstraction, networks, social architecture, principled distance, and resistance to imposed convention',
  Pisces:'mutable water: diffusion, imagination, compassion, symbolic permeability, surrender, and difficulty maintaining hard boundaries'
};

const HOUSE_DOMAINS={
  1:'identity, embodiment, autonomy, appearance, and the manner in which life is directly entered',
  2:'resources, money, possessions, skills, self-support, and what must be made materially usable',
  3:'communication, learning, writing, local movement, siblings/peers, technique, and the repeated exchange of information',
  4:'home, family foundations, ancestry, private life, land, roots, and the psychological/material base beneath public activity',
  5:'creation, children, pleasure, play, speculation, performance, authorship, and personally generated works',
  6:'labor, routines, maintenance, health practices, subordination, craft, and the operational systems required to keep life functioning',
  7:'partners, clients, contracts, opponents, audiences, and consequential one-to-one relationships',
  8:'shared resources, debt, inheritance, vulnerability, dependency, loss, and entanglements that cannot be managed by the self alone',
  9:'higher learning, teaching, religion, philosophy, law, publication, pilgrimage, worldview, and the search for an ordering truth',
  10:'career, office, reputation, authority, public consequence, achievement, and visible responsibility',
  11:'friends, collaborators, communities, patrons, institutions, networks, and future-oriented collective projects',
  12:'withdrawal, isolation, hidden processes, confinement, undoing, private struggle, and realities operating outside ordinary visibility'
};

const ASPECT_MECHANICS={
  conjunction:{geometry:'0° phase fusion',mechanics:'The two planetary functions occupy nearly the same angular phase, so they operate as a coupled unit rather than as easily separable processes.',verb:'fuses'},
  sextile:{geometry:'60° catalytic compatibility',mechanics:'The functions are different but mutually usable; activation tends to require an opening, choice, or practiced connection rather than occurring automatically.',verb:'creates a usable channel between'},
  square:{geometry:'90° quadrature',mechanics:'The functions operate at cross-purposes and generate torque. Neither can simply absorb the other, so repeated action, conflict, or reorganization is required.',verb:'places in sustained friction'},
  trine:{geometry:'120° phase coherence',mechanics:'The functions move with low internal impedance and can reinforce one another with relatively little conscious effort.',verb:'couples fluently with'},
  opposition:{geometry:'180° standing-wave polarity',mechanics:'The functions occupy opposite ends of one axis. Integration occurs through alternation, projection, confrontation, and eventual recognition that both poles belong to one system.',verb:'polarizes against'}
};

function round(x,n=3){return Number.isFinite(x)?Number(x.toFixed(n)):x}
function objectMap(analysis){
  const all=[...(analysis?.objects||[]),...(analysis?.lots||[]),analysis?.angles?.ASC,analysis?.angles?.MC].filter(Boolean);
  return Object.fromEntries(all.map(o=>[o.id,o]));
}
function aspectKey(e){return `${e.a}|${e.aspect}|${e.b}`}
function objLabel(o){return o?`${o.id} in ${o.sign} ${round(o.longitude%30,2)}° · ${o.computed_house}H`:'unknown object'}
function houseDomain(h){return HOUSE_DOMAINS[Number(h)]||'the life domain represented by this house'}
function planetMeaning(id){return PLANET_ARCHETYPES[id]||{noun:'the symbolic function assigned to this point',verb:'modulates experience'} }
function signMeaning(sign){return SIGN_FIELDS[sign]||'the selected zodiacal field'}

function integrityBase(kind,inputs,rules,ledger_refs=[]){
  return {model:ASTROLOGICAL_ANALYSIS_MODEL,kind,epistemic_layer:'interpretive-inference',rules,inputs,ledger_refs,statement:'Interpretation is downstream of deterministic chart facts and graph derivations. It is not a measured physical effect or empirically established causal claim.'};
}

export function interpretPlacement(object,analysis){
  if(!object||!PLANET_ARCHETYPES[object.id])return null;
  const p=planetMeaning(object.id),house=Number(object.computed_house),outer=OUTER_PLANETS.has(object.id);
  const aspects=(analysis?.aspects||[]).filter(e=>e.a===object.id||e.b===object.id).sort((a,b)=>a.orb_deg-b.orb_deg);
  const tight=aspects.filter(e=>e.orb_deg<=3);
  const aspectSummary=aspects.length
    ? aspects.slice(0,5).map(e=>{const other=e.a===object.id?e.b:e.a;return `${e.aspect} ${other} (${round(e.orb_deg,2)}° orb${e.phase&&e.phase!=='unknown'?`, ${e.phase}`:''})`;}).join('; ')
    : 'no admitted major aspects in the current orb model';
  const mode=outer?'transpersonal-modern':'planetary';
  const first=`${object.id} represents ${p.noun}. In ${object.sign}, that function operates through ${signMeaning(object.sign)}. In the ${house}th house, its consequences are concentrated in ${houseDomain(house)}.`;
  const second=outer
    ? `Because ${object.id} is an outer planet, Noetic Atlas does not assign it Hellenistic essential dignity. It is analyzed instead through placement, aspect topology, house participation, and the modern/transpersonal interpretive model. ${p.verb.charAt(0).toUpperCase()+p.verb.slice(1)} most visibly where the ${house}th-house domain becomes active.`
    : `${p.verb.charAt(0).toUpperCase()+p.verb.slice(1)} through the ${object.sign} field, with the ${house}th house specifying where that symbolic process becomes materially or psychologically legible.`;
  const third=tight.length
    ? `The placement is not isolated. Its tightest admitted contacts are ${aspectSummary}. These aspects determine whether the planetary function is reinforced, polarized, or forced through friction, and therefore modify the placement more strongly than sign-and-house description alone.`
    : `No tight ≤3° major aspect is currently admitted for this body, so the placement reading should not be inflated beyond the sign/house facts and the broader aspect network.`;
  return {
    id:`placement.${object.id}`,
    title:`${object.id} in ${object.sign} · ${house}H`,
    category:outer?'outer-planet':'placement',
    planets:[object.id],
    astrological_analysis:[first,second,third],
    livelihood_relevance:`The ${house}th-house emphasis points the analysis toward ${houseDomain(house)}. This is the primary life-domain bridge for translating the placement into lived circumstances without treating the placement as deterministic fate.`,
    evidence:{placement:{id:object.id,sign:object.sign,longitude_deg:object.longitude,house},aspects:aspects.map(e=>({a:e.a,b:e.b,aspect:e.aspect,orb_deg:e.orb_deg,phase:e.phase}))},
    integrity:integrityBase('placement_interpretation',{placement:objLabel(object),aspect_count:aspects.length,aspect_keys:aspects.map(aspectKey)},['naf.interpretation.planet_archetype.v1','naf.interpretation.sign_field.v1','naf.interpretation.house_domain.v1',outer?'naf.interpretation.outer_planet.transpersonal.v1':'naf.interpretation.planetary.v1'],[`coordinate:${object.id}`,`whole_sign_house:${object.id}`,...aspects.map(e=>`aspect:${e.a}:${e.aspect}:${e.b}`)])
  };
}

export function interpretAspect(edge,analysis){
  const map=objectMap(analysis),a=map[edge.a],b=map[edge.b],m=ASPECT_MECHANICS[edge.aspect];
  if(!a||!b||!m||!PLANET_ARCHETYPES[a.id]||!PLANET_ARCHETYPES[b.id])return null;
  const pa=planetMeaning(a.id),pb=planetMeaning(b.id);
  const paragraph1=`${a.id} ${edge.aspect} ${b.id} is a ${m.geometry} relationship with ${round(edge.orb_deg,2)}° orb${edge.phase&&edge.phase!=='unknown'?` and is ${edge.phase}`:''}. ${m.mechanics}`;
  const paragraph2=`Symbolically, ${a.id} (${pa.noun}) ${m.verb} ${b.id} (${pb.noun}). The relevant life domains are the ${a.computed_house}th house (${houseDomain(a.computed_house)}) and the ${b.computed_house}th house (${houseDomain(b.computed_house)}). The aspect therefore describes a relationship between functions and domains, not a free-floating personality adjective.`;
  const paragraph3=edge.aspect==='square'
    ? `In lived terms, the square asks where action in one domain repeatedly produces consequences in the other. Productive expression requires a third behavior or structure capable of carrying both demands; simply choosing one pole tends to reproduce the conflict.`
    : edge.aspect==='opposition'
      ? `In lived terms, the opposition often alternates between poles until the person recognizes the axis itself as the unit of analysis. Relationships and external circumstances can become mirrors because the disowned pole is easily encountered through other people.`
      : edge.aspect==='trine'
        ? `In lived terms, the trine can function as an available current: the two domains cooperate easily enough that the pattern may be productive without being consciously examined. Ease is therefore not identical to development; the question is what the coherence is used for.`
        : edge.aspect==='conjunction'
          ? `In lived terms, these functions are difficult to disentangle. Events in either house/domain tend to recruit both planetary processes at once.`
          : `In lived terms, the sextile describes a usable bridge. Its potential becomes more visible when the person deliberately connects the two houses rather than expecting the relationship to operate automatically.`;
  return {
    id:`aspect.${edge.a}.${edge.aspect}.${edge.b}`,
    title:`${edge.a} ${edge.aspect} ${edge.b}`,
    category:'aspect',planets:[edge.a,edge.b],
    astrological_analysis:[paragraph1,paragraph2,paragraph3],
    livelihood_relevance:`This aspect links ${houseDomain(a.computed_house)} with ${houseDomain(b.computed_house)}. Concrete delineation should therefore look for situations in which those two life domains become coupled.`,
    evidence:{edge:{a:edge.a,b:edge.b,aspect:edge.aspect,orb_deg:edge.orb_deg,phase:edge.phase},placements:[{id:a.id,sign:a.sign,house:a.computed_house},{id:b.id,sign:b.sign,house:b.computed_house}]},
    integrity:integrityBase('aspect_interpretation',{edge,placements:[objLabel(a),objLabel(b)]},['naf.interpretation.aspect_geometry.v1','naf.interpretation.house_domain.v1'],[`aspect:${edge.a}:${edge.aspect}:${edge.b}`,`coordinate:${a.id}`,`coordinate:${b.id}`])
  };
}

function tSquareApex(motif){
  const squares=motif.edges.filter(e=>e.aspect==='square'),opp=motif.edges.find(e=>e.aspect==='opposition');
  if(!opp||squares.length!==2)return null;
  return motif.nodes.find(n=>squares.every(e=>e.a===n||e.b===n))||null;
}

export function interpretMotif(motif,analysis){
  const map=objectMap(analysis),placements=motif.nodes.map(n=>map[n]).filter(Boolean);
  if(motif.recognized==='t_square'){
    const apex=tSquareApex(motif),opp=motif.edges.find(e=>e.aspect==='opposition'),apexObj=map[apex],o1=map[opp?.a],o2=map[opp?.b];
    if(!apexObj||!o1||!o2)return null;
    return {
      id:`motif.t_square.${motif.nodes.join('.')}`,title:`T-square · apex ${apex}`,category:'configuration',planets:motif.nodes,
      astrological_analysis:[
        `This is not merely “a T-square.” The opposition between ${o1.id} in ${o1.sign}/${o1.computed_house}H and ${o2.id} in ${o2.sign}/${o2.computed_house}H forms the standing-wave axis. Those two poles describe an unresolved alternation between ${planetMeaning(o1.id).noun} in ${houseDomain(o1.computed_house)} and ${planetMeaning(o2.id).noun} in ${houseDomain(o2.computed_house)}.`,
        `${apex} in ${apexObj.sign}/${apexObj.computed_house}H receives a square from both ends of the opposition and is therefore the geometric release point of the configuration. The apex function (${planetMeaning(apex).noun}) must repeatedly act under incompatible demands from both poles. This makes the ${apexObj.computed_house}th-house domain—${houseDomain(apexObj.computed_house)}—the location where the tension is most likely to require concrete decisions, work, conflict, or reorganization.`,
        `The developmental question is not “how do I remove the T-square?” but “what form of ${apex} can carry both ends of the axis without collapsing into either one?” The configuration behaves like a high-voltage three-node circuit: pressure at either opposition pole routes into the apex, while overusing the apex can reactivate the opposition. A mature expression therefore requires the three planetary functions to become one coordinated system.`
      ],
      livelihood_relevance:`The material relevance is concentrated in three house domains: ${o1.computed_house}H (${houseDomain(o1.computed_house)}), ${o2.computed_house}H (${houseDomain(o2.computed_house)}), and especially the apex ${apexObj.computed_house}H (${houseDomain(apexObj.computed_house)}). This gives the user concrete domains to watch rather than a generic “tension” label.`,
      evidence:{motif,apex,opposition:[opp.a,opp.b],placements:placements.map(o=>({id:o.id,sign:o.sign,house:o.computed_house,longitude_deg:o.longitude}))},
      integrity:integrityBase('motif_interpretation',{motif,apex,opposition:opp,placements:placements.map(objLabel)},['naf.motif.t_square.v1','naf.interpretation.aspect_geometry.v1','naf.interpretation.house_domain.v1'],motif.edges.map(e=>`aspect:${e.a}:${e.aspect}:${e.b}`))
    };
  }
  if(motif.recognized==='grand_trine'){
    const elements=[...new Set(placements.map(o=>SIGN_FIELDS[o.sign]?o.sign:null).filter(Boolean))];
    const houses=placements.map(o=>`${o.computed_house}H`).join(', ');
    return {
      id:`motif.grand_trine.${motif.nodes.join('.')}`,title:`Grand Trine · ${motif.nodes.join(' – ')}`,category:'configuration',planets:motif.nodes,
      astrological_analysis:[
        `The three trines form a closed 120° coherence circuit among ${motif.nodes.join(', ')}. Unlike three unrelated trines, a Grand Trine gives each node two low-impedance paths into the other two, creating a self-reinforcing triangular motif.`,
        `The participating functions are ${placements.map(o=>`${o.id} (${planetMeaning(o.id).noun}) in ${o.sign}/${o.computed_house}H`).join('; ')}. The houses ${houses} show where the circuit can move with unusual continuity. Because the flow is internally easy, the pattern can behave as an already-available capacity rather than a problem demanding immediate correction.`,
        `The interpretive risk is passivity or self-sealing coherence: a circuit that works easily can keep reproducing its own assumptions. Its practical value therefore depends on whether the person deliberately gives the trine a task, project, relationship, or discipline through which its coherence can produce an external result.`
      ],
      livelihood_relevance:`The Grand Trine links ${placements.map(o=>`${o.computed_house}H (${houseDomain(o.computed_house)})`).join('; ')}. Those domains are candidates for unusually fluid transfer of attention, skill, or opportunity within the symbolic model.`,
      evidence:{motif,placements:placements.map(o=>({id:o.id,sign:o.sign,house:o.computed_house,longitude_deg:o.longitude}))},
      integrity:integrityBase('motif_interpretation',{motif,placements:placements.map(objLabel)},['naf.motif.grand_trine.v1','naf.interpretation.aspect_geometry.v1','naf.interpretation.house_domain.v1'],motif.edges.map(e=>`aspect:${e.a}:${e.aspect}:${e.b}`))
    };
  }
  if(motif.recognized==='triple_conjunction'){
    return {
      id:`motif.triple_conjunction.${motif.nodes.join('.')}`,title:`Triple conjunction · ${motif.nodes.join(' – ')}`,category:'configuration',planets:motif.nodes,
      astrological_analysis:[`Three planetary functions occupy one tightly coupled angular cluster. This makes separation difficult: events involving any one of the three tend to recruit the entire group.`,`The participating placements are ${placements.map(objLabel).join('; ')}. Interpretation should begin with the shared sign/house field and then ask how the three planetary archetypes modify one another inside that common field.`,`The configuration can create unusual concentration, but Noetic Atlas does not call it “dominant” or “strong” without a comparison model. The exact claim is simply that three admitted conjunction edges form a closed three-node conjunction motif.`],
      livelihood_relevance:`The shared house domain—${placements.map(o=>`${o.computed_house}H ${houseDomain(o.computed_house)}`).join('; ')}—is where the fused cluster is most likely to become concrete.`,
      evidence:{motif,placements:placements.map(o=>({id:o.id,sign:o.sign,house:o.computed_house}))},
      integrity:integrityBase('motif_interpretation',{motif,placements:placements.map(objLabel)},['naf.motif.triple_conjunction.v1','naf.interpretation.aspect_geometry.v1'],motif.edges.map(e=>`aspect:${e.a}:${e.aspect}:${e.b}`))
    };
  }
  return null;
}

export function interpretOuterPlanet(planet,analysis,graph){
  const map=objectMap(analysis),o=map[planet];if(!o)return null;
  const base=interpretPlacement(o,analysis),ag=graph?.graphs?.aspect||{},degree=ag.degree?.[planet]??0,between=ag.betweenness?.[planet]??0,articulation=(ag.articulation_points||[]).includes(planet);
  const motifs=(ag.recognized_motifs||[]).filter(m=>m.nodes.includes(planet));
  const aspects=(analysis.aspects||[]).filter(e=>e.a===planet||e.b===planet).sort((a,b)=>a.orb_deg-b.orb_deg);
  const structural=`In the admitted major-aspect graph, ${planet} has degree ${degree}, normalized betweenness ${round(between,4)}, ${articulation?'and is an articulation point whose removal changes component connectivity':'and is not an articulation point in this graph'}. It participates in ${motifs.length} recognized typed motif${motifs.length===1?'':'s'}.`;
  const relations=aspects.length?aspects.map(e=>{const other=e.a===planet?e.b:e.a;const m=ASPECT_MECHANICS[e.aspect];return `${planet} ${e.aspect} ${other} (${round(e.orb_deg,2)}°): ${m?m.mechanics:'admitted aspect'}`}).join(' '):'No admitted major aspects connect it to another analyzed object.';
  return {...base,id:`outer.${planet}`,title:`${planet} · transpersonal + graph analysis`,category:'outer-planet',
    astrological_analysis:[...base.astrological_analysis,structural,relations],
    evidence:{...base.evidence,graph:{degree,betweenness:between,articulation_point:articulation,motif_count:motifs.length,motifs}},
    integrity:integrityBase('outer_planet_graph_interpretation',{placement:objLabel(o),degree,betweenness:between,articulation,motifs,aspects},['naf.interpretation.outer_planet.transpersonal.v1','naf.research.aspect_graph.v0.4.1','naf.interpretation.aspect_geometry.v1'],[...base.integrity.ledger_refs,`graph_metric:degree:${planet}`,`graph_metric:betweenness:${planet}`])};
}

export function interpretTopology(graph,analysis,conditions){
  const out=[];const fd=graph?.graphs?.classical_dispositor;if(!fd)return out;const map=objectMap(analysis);
  const basin=[...(fd.terminal_basins||[])].sort((a,b)=>b.basin_size-a.basin_size)[0];
  if(basin){
    const members=basin.terminal_members.map(n=>map[n]).filter(Boolean);
    const cond=basin.terminal_members.map(n=>conditions?.by_planet?.[n]).filter(Boolean);
    out.push({id:'topology.terminal_basin',title:`Terminal rulership circuit · ${basin.terminal_members.join(' ↔ ')}`,category:'topology',planets:basin.terminal_members,
      astrological_analysis:[`Under the selected traditional domicile-rulership model, ${basin.basin_size} of ${fd.condensation?Object.keys(fd.node_routes||{}).length:basin.basin_size} classical planetary routes enter the terminal SCC ${basin.terminal_members.join(' ↔ ')}. The graph claim is routing, not metaphysical dominance.`,`The terminal planets occupy ${members.map(o=>`${o.id} in ${o.sign}/${o.computed_house}H (${houseDomain(o.computed_house)})`).join('; ')}. Because every incoming rulership chain eventually reaches this circuit, these planets provide a useful synthesis point: interpretive questions raised elsewhere in the classical chart can be traced forward until they arrive here.`,`Condition qualifies the circuit rather than scoring it: ${cond.map(c=>`${c.planet}: sect ${c.sect?.condition?.status||'unknown'}, angularity ${c.positional?.angularity?.class||'unknown'}, bound ruler ${c.essential?.bound?.bound_ruler||'unknown'}`).join('; ')}. The circuit therefore should be read as a routed dependency system whose receiving nodes have their own separate condition records.`],
      livelihood_relevance:`The terminal houses—${members.map(o=>`${o.computed_house}H (${houseDomain(o.computed_house)})`).join(' and ')}—are the concrete domains through which the terminal circuit is most likely to become observable in lived decisions and material organization.`,
      evidence:{basin,placements:members.map(o=>({id:o.id,sign:o.sign,house:o.computed_house})),condition:cond},integrity:integrityBase('topology_interpretation',{basin,placements:members.map(objLabel),condition:cond},['naf.graph.tarjan_scc.v1','naf.rulership.traditional_domicile.v1','naf.interpretation.house_domain.v1'],['topology:SCCs'])});
  }
  const bottleneck=fd.nonterminal_bottlenecks?.[0];
  if(bottleneck&&map[bottleneck.node]){
    const o=map[bottleneck.node];
    out.push({id:'topology.bottleneck',title:`Rulership bottleneck · ${o.id}`,category:'topology',planets:[o.id],
      astrological_analysis:[`${o.id} lies on ${bottleneck.upstream_count} classical ruler routes before terminal entry. This is a path-structure fact: removing or bypassing ${o.id} would change how those upstream routes reach the terminal circuit.`,`Astrologically, ${o.id} represents ${planetMeaning(o.id).noun}, operating through ${o.sign} and the ${o.computed_house}th house (${houseDomain(o.computed_house)}). The bottleneck therefore suggests that several otherwise different planetary chains must pass through this symbolic function/domain before reaching terminal disposition.`,`This does not prove that ${o.id} is the “most important planet.” It gives a narrower and more useful statement: multiple rulership dependencies share ${o.id} as an intermediate transformation step.`],
      livelihood_relevance:`The ${o.computed_house}th-house domain—${houseDomain(o.computed_house)}—is the material context in which this shared routing step may be easiest to recognize.`,evidence:{bottleneck,placement:{id:o.id,sign:o.sign,house:o.computed_house}},integrity:integrityBase('topology_interpretation',{bottleneck,placement:objLabel(o)},['naf.research.functional_digraph.v0.4.1','naf.interpretation.planet_archetype.v1','naf.interpretation.house_domain.v1'],[`graph_metric:upstream_capture:${o.id}`])});
  }
  return out;
}

export function buildAstrologicalAnalysis(analysis,graph,conditions=null){
  const placements=(analysis?.objects||[]).filter(o=>PLANET_ARCHETYPES[o.id]).map(o=>interpretPlacement(o,analysis)).filter(Boolean);
  const outer=['Uranus','Neptune','Pluto'].map(p=>interpretOuterPlanet(p,analysis,graph)).filter(Boolean);
  const motifs=(graph?.graphs?.aspect?.recognized_motifs||[]).map(m=>interpretMotif(m,analysis)).filter(Boolean);
  const topology=interpretTopology(graph,analysis,conditions);
  const tightAspects=(analysis?.aspects||[]).filter(e=>e.orb_deg<=3&&PLANET_ARCHETYPES[e.a]&&PLANET_ARCHETYPES[e.b]).map(e=>interpretAspect(e,analysis)).filter(Boolean);
  const featured=[...outer,...motifs,...topology,...tightAspects];
  return {
    model:ASTROLOGICAL_ANALYSIS_MODEL,version:ASTROLOGICAL_ANALYSIS_VERSION,epistemic_layer:'interpretive-inference',
    completeness:{outer_planets:'implemented_via_placement_aspect_graph',classical_placements:'implemented',typed_motifs:'implemented',topology_synthesis:'implemented',relational_condition:'pending',temporal_activation:'pending'},
    featured,placements,outer_planets:outer,configurations:motifs,topology,tight_aspects:tightAspects,
    integrity:{interpretation_rules:['planet archetype','sign field','whole-sign house domain','aspect geometry','typed motif geometry','graph topology'],graph_model:graph?.model||null,condition_model:conditions?.model_id||null,warning:'Interpretive text is deterministic synthesis over chart facts and selected astrological models. It is not itself an astronomical calculation or empirical validation.'}
  };
}
