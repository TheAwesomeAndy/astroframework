import {SIGN_INFO,TRADITIONAL_RULERS} from '../kernel/noetic-kernel.mjs';

export const ENERGETIC_SYNTHESIS_VERSION='0.4.1.2';
export const ENERGETIC_SYNTHESIS_MODEL='naf.interpretation.energetic_synthesis.v0.4.1.2';
export const NATURAL_HOUSE_MODEL='naf.interpretation.natural_house_overlay.modern.v1';

const NATURAL_HOUSES={
  1:{sign:'Aries',ruler:'Mars',field:'emergence, autonomy, ignition, embodiment, and the right to initiate'},
  2:{sign:'Taurus',ruler:'Venus',field:'value, possession, material continuity, receiving, skill, and embodied enoughness'},
  3:{sign:'Gemini',ruler:'Mercury',field:'exchange, language, learning, comparison, siblings/peers, and local information flow'},
  4:{sign:'Cancer',ruler:'Moon',field:'belonging, roots, memory, protection, family, and the private container of life'},
  5:{sign:'Leo',ruler:'Sun',field:'creation, play, authorship, children, pleasure, visibility, and personally generated life-force'},
  6:{sign:'Virgo',ruler:'Mercury',field:'refinement, maintenance, craft, health practice, service, and repeated correction'},
  7:{sign:'Libra',ruler:'Venus',field:'reciprocity, partnership, mirroring, agreement, negotiation, and consequential others'},
  8:{sign:'Scorpio',ruler:'Mars',modern_coruler:'Pluto',field:'entanglement, exchange under vulnerability, shared resources, loss, intimacy, and transformation'},
  9:{sign:'Sagittarius',ruler:'Jupiter',field:'truth-seeking, philosophy, faith, higher learning, publication, pilgrimage, and horizon expansion'},
  10:{sign:'Capricorn',ruler:'Saturn',field:'public consequence, mastery, responsibility, office, reputation, and long-range construction'},
  11:{sign:'Aquarius',ruler:'Saturn',modern_coruler:'Uranus',field:'community, networks, patrons, collaborators, future systems, and collective possibility'},
  12:{sign:'Pisces',ruler:'Jupiter',modern_coruler:'Neptune',field:'withdrawal, surrender, hidden processes, solitude, transcendence, and realities beyond ordinary control'}
};

const ARCHETYPES={
  Sun:{label:'solar coherence',essence:'the organizing fire of identity, authorship, purpose, visibility, and the impulse to become internally coherent',healthy:'radiates from an internally chosen center without requiring every environment to confirm it',low:'dims its authorship, waits for permission, or loses contact with what it actually wants to animate',high:'over-identifies with role, recognition, pride, or the need to remain central'},
  Moon:{label:'lunar regulation',essence:'the receptive field of memory, attachment, bodily rhythm, habit, safety, and emotional registration',healthy:'responds, nourishes, remembers, and adapts without letting every feeling become the whole reality',low:'disconnects from need, body, rest, belonging, or emotional truth',high:'becomes over-reactive, over-protective, habitual, or governed by immediate emotional weather'},
  Mercury:{label:'mercantile intelligence',essence:'the moving current of perception, language, discrimination, interpretation, exchange, and pattern linking',healthy:'lets information move, distinguishes signal from noise, and translates experience into usable thought or language',low:'stops exchanging, suppresses questions, or cannot name what is being perceived',high:'over-processes, fragments attention, intellectualizes, or keeps translating when embodiment/action is required'},
  Venus:{label:'venusian valuation',essence:'the attractive current of value, pleasure, reciprocity, aesthetic ordering, receptivity, and relational coherence',healthy:'knows what is worth approaching, receiving, sustaining, and harmonizing',low:'withholds pleasure, under-values itself, or cannot receive what is available',high:'over-accommodates, over-attaches to approval/comfort, or uses harmony to avoid necessary differentiation'},
  Mars:{label:'martial force',essence:'the separating current of action, assertion, heat, conflict, courage, appetite, and directed effort',healthy:'mobilizes enough force to act, protect, compete, cut, and finish without making conflict its identity',low:'suppresses anger, initiative, boundary, or decisive movement',high:'overdrives, burns out, escalates, severs too quickly, or treats friction as proof that more force is needed'},
  Jupiter:{label:'jovian expansion',essence:'the amplifying current of meaning, faith, synthesis, increase, legitimacy, generosity, and horizon enlargement',healthy:'expands what has real coherence and creates meaning large enough to organize action',low:'contracts possibility, distrusts growth, or cannot see a larger pattern',high:'inflates, over-promises, moralizes, or expands faster than structure can support'},
  Saturn:{label:'saturnian compression',essence:'the condensing current of boundary, consequence, time, duty, endurance, hierarchy, and form',healthy:'creates durable structure, accepts limits, and converts time into mastery',low:'avoids responsibility, structure, patience, or necessary constraint',high:'over-compresses through fear, deprivation, control, rigidity, pessimism, or endless postponement'},
  Uranus:{label:'uranian discontinuity',essence:'the disruptive current of liberation, individuation, invention, nervous-system acceleration, and sudden re-patterning',healthy:'breaks obsolete continuity and introduces a freer operating pattern without destroying every form simply because it exists',low:'suppresses difference, innovation, awakening, or the need to change a dead pattern',high:'chases disruption, intensity, detachment, novelty, or rupture faster than the rest of the system can integrate'},
  Neptune:{label:'neptunian permeability',essence:'the dissolving current of imagination, idealization, devotion, compassion, fantasy, surrender, and boundary permeability',healthy:'allows symbolic, spiritual, imaginative, and compassionate perception without abandoning discrimination',low:'cuts itself off from dream, meaning, tenderness, mystery, or restorative surrender',high:'dissolves boundaries too far through projection, fantasy, avoidance, savior dynamics, confusion, or escape'},
  Pluto:{label:'plutonic compression',essence:'the underworld current of power, compulsion, exposure, elimination, survival, taboo, and irreversible metamorphosis',healthy:'allows buried material to become conscious and uses concentrated pressure to reorganize what can no longer remain as it was',low:'avoids depth, power, grief, shadow, endings, or necessary transformation',high:'fixates, controls, obsesses, coerces, catastrophizes, or repeatedly intensifies what needs metabolizing rather than domination'},
  Ceres:{label:'ceresian resourcing',essence:'the nourishment-and-harvest current: enoughness, being resourced, receiving support, tending what sustains life, and allowing embodied pleasure to register as abundance',healthy:'can both create nourishment and receive it; recognizes existing resources while cultivating conditions in which more life can grow',low:'lives as though nourishment, pleasure, support, or enoughness must be postponed or earned indefinitely',high:'grasps for security, over-nurtures, over-indulges, or tries to manufacture abundance by force because it cannot feel what is already available',source_note:'Ceres framing follows the user-supplied interpretive sample: abundance, nourishment, harvest, receiving, pleasure, and enoughness. This is an explicit custom/modern interpretive profile, not a consensus Hellenistic rule.'},
  Chiron:{label:'chironic sensitivity',essence:'the sensitized current around injury, inadequacy, initiation through vulnerability, teaching, and the conversion of a difficult threshold into usable knowledge',healthy:'lets sensitivity become precision, compassion, craft, or mentorship without making the wound the entire identity',low:'avoids the vulnerable territory and therefore loses access to the knowledge hidden inside it',high:'organizes identity around injury, reopens the wound compulsively, or assumes suffering itself guarantees wisdom'},
  NorthNode:{label:'nodal appetite',essence:'a directional appetite toward unfamiliar development, increase, entanglement, and future-facing experience in the modern nodal model',healthy:'experiments with the unfamiliar direction while retaining enough grounding to metabolize growth',low:'retreats exclusively into established patterns',high:'chases growth, novelty, or future identity as though arrival there will erase the rest of the chart'},
  Fortune:{label:'lot of fortune',essence:'the Hellenistic lot associated with embodied circumstances, material fortune, bodily life, and what happens through conditions not reducible to conscious intention',healthy:'is read as a circumstantial/embodied focal point rather than a promise of wealth or ease',low:'n/a',high:'n/a'},
  Spirit:{label:'lot of spirit',essence:'the Hellenistic lot associated with volition, intentional action, reputation-producing choices, and the direction of conscious striving',healthy:'is read as a focal point of intentional agency rather than a guarantee of vocation or spiritual status',low:'n/a',high:'n/a'}
};

const SIGN_FIELDS={
  Aries:{current:'cardinal fire',motion:'ignites quickly, separates from inertia, and discovers itself by initiating',gift:'courage, immediacy, experimentation, and self-starting force',excess:'reactivity, premature action, conflict addiction, or mistaking speed for truth',depletion:'hesitation, loss of spark, or suppressing the right to begin'},
  Taurus:{current:'fixed earth',motion:'slows energy into matter, repetition, sensation, continuity, and tangible value',gift:'stability, embodiment, patience, sensual intelligence, and resource cultivation',excess:'stagnation, over-attachment, hoarding, inertia, or equating safety with never changing',depletion:'difficulty settling, receiving, sustaining, or feeling enough'},
  Gemini:{current:'mutable air',motion:'multiplies perspectives and keeps energy moving through language, comparison, curiosity, and exchange',gift:'adaptability, wit, connection, learning, and rapid pattern transfer',excess:'scatter, nervous over-processing, endless input, or exchanging information without metabolizing it',depletion:'silence, isolation, intellectual dullness, or loss of curiosity'},
  Cancer:{current:'cardinal water',motion:'initiates through protection, memory, belonging, attachment, and emotional containment',gift:'nurturance, loyalty, emotional intelligence, and the creation of safe containers',excess:'over-protection, fusion, defensiveness, or living entirely from remembered threat',depletion:'rootlessness, emotional exile, or inability to receive care'},
  Leo:{current:'fixed fire',motion:'sustains a creative flame long enough for identity, joy, authorship, and visibility to become coherent',gift:'warmth, creative courage, play, loyalty to the heart, and generative presence',excess:'performative identity, pride, attention hunger, or making recognition the proof of value',depletion:'shame around being visible, creative inhibition, or loss of play'},
  Virgo:{current:'mutable earth',motion:'circulates through adjustment, refinement, service, craft, practical correction, and reduction of error',gift:'precision, usefulness, discernment, improvement, and embodied craft',excess:'perfectionism, over-correction, anxiety through micro-control, or treating life as an endless defect list',depletion:'chaos, neglect of maintenance, or loss of discriminating function'},
  Libra:{current:'cardinal air',motion:'initiates through relationship, contrast, reciprocity, aesthetic calibration, and the search for a workable balance between perspectives',gift:'diplomacy, proportion, advocacy, social intelligence, beauty, and relational design',excess:'people-pleasing, indecision, over-calibration to others, or sacrificing truth to preserve harmony',depletion:'relational isolation, ugliness/disorder that feels spiritually abrasive, or loss of reciprocal exchange'},
  Scorpio:{current:'fixed water',motion:'concentrates emotional/instinctual energy until hidden material, attachment, power, and survival truth cannot remain superficial',gift:'depth, loyalty, psychological penetration, regenerative capacity, and intimacy with difficult realities',excess:'obsession, secrecy, control, suspicion, or refusing release',depletion:'avoidance of depth, vulnerability, grief, power, or taboo material'},
  Sagittarius:{current:'mutable fire',motion:'expands by testing horizons, beliefs, experiences, philosophies, and possibilities against a larger truth',gift:'vision, exploration, faith, humor, teaching, and meaning-making',excess:'restlessness, escape, certainty disguised as truth-seeking, or endless horizon-chasing',depletion:'confinement, cynicism, loss of adventure, or living inside a worldview that has stopped growing'},
  Capricorn:{current:'cardinal earth',motion:'compresses possibility into hierarchy, sequence, responsibility, strategy, and long-term consequence',gift:'mastery, discipline, authority, endurance, and institution-building',excess:'overwork, deprivation, status fixation, rigid control, or postponing life until achievement',depletion:'lack of structure, avoidance of responsibility, or inability to build toward a distant result'},
  Aquarius:{current:'fixed air',motion:'stabilizes an abstract pattern, network, principle, or future model strongly enough to challenge inherited convention',gift:'systems vision, invention, objectivity, community design, and principled originality',excess:'detachment, contrarianism, ideological rigidity, or disruption without intimacy',depletion:'conformity, isolation from community, or suppressing what is uniquely different'},
  Pisces:{current:'mutable water',motion:'diffuses boundaries so imagination, compassion, dream, spirituality, grief, and symbolic meaning can permeate ordinary reality',gift:'empathy, imagination, surrender, artistic/spiritual receptivity, and restorative dissolution',excess:'escapism, projection, porous boundaries, confusion, or idealization',depletion:'spiritual dryness, loss of dream, emotional numbness, or inability to rest into what cannot be controlled'}
};

const HOUSE_FIELDS={
  1:'the immediate field of embodiment, identity, autonomy, appearance, vitality, and how the person enters experience',
  2:'the field of money, possessions, skills, livelihood resources, self-support, value, and what must become materially usable',
  3:'the field of speech, writing, teaching/learning, siblings and peers, local movement, technical skill, and repeated information exchange',
  4:'the field of home, family roots, ancestry, land, private life, belonging, and the foundation beneath public identity',
  5:'the field of children, creation, pleasure, play, performance, authorship, risk, and what the person generates from their own life-force',
  6:'the field of work routines, health practice, maintenance, craft, service, subordination, and the operational systems that keep life functioning',
  7:'the field of partners, clients, contracts, open opponents, audiences, mirrors, and consequential one-to-one exchange',
  8:'the field of shared money, debt, inheritance, dependency, vulnerability, intimacy, loss, and resources that bind the self to others',
  9:'the field of higher learning, philosophy, religion, law, publication, teaching, pilgrimage, worldview, and the pursuit of an ordering truth',
  10:'the field of career, office, authority, reputation, public contribution, responsibility, achievement, and visible consequence',
  11:'the field of friends, collaborators, communities, patrons, institutions, networks, aspirations, and future-oriented collective work',
  12:'the field of solitude, withdrawal, hidden processes, confinement, sacrifice, private struggle, and realities operating beyond ordinary visibility'};

const ASPECT_FIELDS={
  conjunction:{geometry:'0° phase fusion',energy:'Two functions occupy essentially the same phase. Their signals superpose, so activating one tends to recruit the other.',practice:'Learn the combined function rather than repeatedly trying to separate what the chart has coupled.'},
  sextile:{geometry:'60° catalytic channel',energy:'The functions can exchange energy productively, but the channel usually becomes stronger through use, choice, or skill.',practice:'Create deliberate bridges between the two house domains so possibility becomes an actual pathway.'},
  square:{geometry:'90° quadrature torque',energy:'The functions push at right angles. Energy cannot discharge by simply choosing one side, so friction forces repeated adjustment, work, conflict, or phase transition.',practice:'Build a third behavior or container that can carry both demands. More force at only one pole usually reproduces the torque.'},
  trine:{geometry:'120° phase coherence',energy:'The functions move with low symbolic impedance and reinforce one another easily.',practice:'Give the easy current a task. Coherence becomes developmental when it is consciously used rather than merely enjoyed or taken for granted.'},
  opposition:{geometry:'180° standing-wave polarity',energy:'The functions occupy opposite ends of one axis. Energy tends to alternate, project outward, or swing between poles until the axis is held as one system.',practice:'Stop asking which pole is correct. Track the rhythm of alternation and identify the larger container that makes both necessary.'}
};

const MODERN_RULERS={Aries:'Mars',Taurus:'Venus',Gemini:'Mercury',Cancer:'Moon',Leo:'Sun',Virgo:'Mercury',Libra:'Venus',Scorpio:'Pluto',Sagittarius:'Jupiter',Capricorn:'Saturn',Aquarius:'Uranus',Pisces:'Neptune'};
const OUTERS=new Set(['Uranus','Neptune','Pluto']);
const round=(x,n=2)=>Number.isFinite(x)?Number(x.toFixed(n)):x;
const cap=s=>s?`${s[0].toUpperCase()}${s.slice(1)}`:s;

function objMap(analysis){return Object.fromEntries([...(analysis?.objects||[]),...(analysis?.lots||[]),analysis?.angles?.ASC,analysis?.angles?.MC].filter(Boolean).map(o=>[o.id,o]));}
function houseField(h){return HOUSE_FIELDS[Number(h)]||'the relevant life field';}
function naturalHouse(h){return NATURAL_HOUSES[Number(h)]||null;}
function archetype(id){return ARCHETYPES[id]||{label:`${id} principle`,essence:'a symbolic function whose detailed energetic vocabulary is not yet registered',healthy:'allows the function to participate in proportion',low:'under-expresses the function',high:'over-identifies with the function'};}
function signField(sign){return SIGN_FIELDS[sign]||{current:'zodiacal field',motion:'modulates the function through the sign',gift:'usable expression',excess:'excess expression',depletion:'under-expression'};}
function evidenceAspect(e){return {a:e.a,b:e.b,aspect:e.aspect,orb_deg:round(e.orb_deg,3),phase:e.phase};}
function aspectsFor(id,analysis){return (analysis?.aspects||[]).filter(e=>e.a===id||e.b===id).sort((a,b)=>a.orb_deg-b.orb_deg);}
function conditionFor(id,conditions){return conditions?.by_planet?.[id]||null;}
function routeFor(id,graph){return graph?.graphs?.classical_dispositor?.node_routes?.[id]||null;}
function basinFor(id,graph){return (graph?.graphs?.classical_dispositor?.terminal_basins||[]).find(b=>b.basin_members?.includes(id))||null;}
function directRuler(o){return TRADITIONAL_RULERS[o?.sign]||null;}

function integrity(kind,inputs,rules,refs=[]){return {model:ENERGETIC_SYNTHESIS_MODEL,kind,epistemic_layer:'interpretive-inference',energy_language_status:'symbolic-metaphorical-not-measured-physical-energy',natural_house_overlay:NATURAL_HOUSE_MODEL,rules,inputs,ledger_refs:refs};}

function naturalHouseParagraph(o){
  const nh=naturalHouse(o.computed_house);if(!nh)return'';
  return `A second lens comes from the modern natural-house correspondence: the ${o.computed_house}th house resonates with ${nh.sign}/${nh.ruler} themes of ${nh.field}. That does not replace the actual house sign. It means the placement is carrying ${o.sign} energy through a life field that modern astrology also associates with ${nh.sign}. The useful synthesis is therefore not “${o.sign} equals ${nh.sign},” but “${o.sign} is the style/frequency; the ${o.computed_house}th house is the lived arena; ${nh.sign}/${nh.ruler} is an additional archetypal resonance of that arena.”`;
}

function rulerParagraph(o,graph){
  const ruler=directRuler(o),route=routeFor(o.id,graph);if(!ruler)return'';
  const routeText=route?.length?` The traditional dispositor path is ${route.join(' → ')}.`:'';
  return `The actual sign ruler matters because it tells us where this placement hands its agenda next. ${o.sign} is traditionally ruled by ${ruler}.${routeText} In energetic language, the placement is not a sealed compartment: its signal is routed onward through the ruler, so the ruler's sign, house, condition, and eventual terminal circuit qualify how this energy can stabilize.`;
}

function aspectParagraph(o,analysis){
  const aspects=aspectsFor(o.id,analysis),tight=aspects.filter(e=>e.orb_deg<=3).slice(0,4);if(!tight.length)return `No ≤3° major aspect currently modifies this placement, so Noetic Atlas keeps the energetic reading anchored primarily in archetype, sign, house, and ruler rather than manufacturing extra intensity.`;
  return tight.map(e=>{const other=e.a===o.id?e.b:e.a,m=ASPECT_FIELDS[e.aspect];return `${o.id} ${e.aspect} ${other} (${round(e.orb_deg)}° orb${e.phase&&e.phase!=='unknown'?`, ${e.phase}`:''}) adds ${m?.geometry||e.aspect}: ${m?.energy||'the two functions become structurally coupled'}`;}).join(' ');
}

function materialExamples(o){
  const h=Number(o.computed_house),a=archetype(o.id);
  const examples={
    1:'identity choices, appearance, bodily presentation, personal autonomy, starting things, and the felt permission to take up space',
    2:'how money is earned/held, which skills become monetizable, what feels worth owning, and whether material support can actually be received',
    3:'teaching, writing, speaking, technical learning, sibling/peer dynamics, short travel, media, and the daily circulation of ideas',
    4:'housing, family roles, ancestry, domestic privacy, emotional roots, land, and the conditions required to feel internally settled',
    5:'children, creative projects, performance, play, romance, hobbies, entrepreneurial risk, and the things one makes because life wants expression',
    6:'workflows, health routines, employment conditions, maintenance, craft, scheduling, service, and the body’s response to daily systems',
    7:'marriage/partnership, clients, contracts, collaboration, conflict with equals, audience response, and consequential one-to-one mirrors',
    8:'shared money, debt, inheritance, taxes, dependency, intimacy, grief, endings, and situations where control must be negotiated with other people or systems',
    9:'graduate study, teaching, research, publication, religion, philosophy, legal matters, travel/pilgrimage, and the construction of a worldview worth living by',
    10:'career direction, reputation, leadership, office, public work, status, authority, and the visible consequences of long-term choices',
    11:'friendships, collaborators, professional communities, audiences, patrons, institutions, social networks, and future-facing projects larger than the individual',
    12:'retreat, solitude, hidden work, institutions of confinement/care, spiritual practice, private struggle, sacrifice, and processes that require surrender rather than direct control'};
  return `Watch this energy in ${examples[h]||houseField(h)}. The question is not whether every one of these events must occur; it is where the ${a.label} is most likely to become visible enough to work with.`;
}

export function synthesizePlacementEnergy(o,analysis,graph,conditions){
  if(!o||!o.sign||!o.computed_house)return null;
  const a=archetype(o.id),s=signField(o.sign),h=Number(o.computed_house),nh=naturalHouse(h),cond=conditionFor(o.id,conditions),basin=basinFor(o.id,graph),aspects=aspectsFor(o.id,analysis);
  const core=`${o.id} is treated here as ${a.label}: ${a.essence}. In ${o.sign}, this current is carried through ${s.current}; it ${s.motion}. The ${h}th house then tells us where that current has to become lived: ${houseField(h)}.`;
  const energetic=`Energetically, separate the three layers. The planetary/point archetype answers “what kind of current is this?” ${o.sign} answers “how does that current move?” The ${h}th house answers “where does life repeatedly give this current something concrete to do?” ${naturalHouseParagraph(o)}`;
  const routing=rulerParagraph(o,graph);
  const aspect=aspectParagraph(o,analysis);
  let topology='';
  if(basin){const terminal=basin.terminal_members.join(' ↔ ');topology=`This placement belongs to the dispositor basin that ultimately feeds ${terminal}. In plain language, its sign-ruler pathway does not end with ${o.id}; it eventually hands the agenda into that terminal circuit. That makes the terminal planets recurring processors of this placement's energy, while the houses occupied by those terminal planets show where the processing loop becomes materially specific.`;}
  const balance=`When this current is proportionate, ${a.healthy}. ${cap(s.gift)} is the sign-level resource available to it. This does not mean “always express more ${o.id}.” It means let the function have enough room to do its job without asking it to run the whole chart.`;
  const low=`When under-expressed, ${a.low}. In ${o.sign}, depletion can look like ${s.depletion}. Because this is a ${h}th-house placement, the cost tends to appear first in ${houseField(h)}.`;
  const high=`When over-driven, ${a.high}. ${cap(s.excess)} is the sign-level excess to watch. Excess is important because an energetic pattern can be real and still be used in a way that blocks the very nourishment, freedom, coherence, or effectiveness it is trying to create.`;
  const material=materialExamples(o);
  const soul=`Soul-level question: What is this part of you trying to make possible through the ${h}th-house field, and what changes when you stop treating its needs as either an absolute command or an inconvenience? For ${o.id} in ${o.sign}, the work is to let ${a.label} move in a ${o.sign} way while remaining answerable to the full chart.`;
  const practices=[];
  practices.push(`Notice one place in the ${h}th-house domain where ${o.id}'s function is currently absent, constricted, or over-driven. Name which side—depletion or excess—is actually happening before trying to “fix” it.`);
  practices.push(`Experiment with a small ${o.sign}-style action that embodies the healthy form of ${a.label}; then observe whether the ${h}th-house field becomes more coherent, more resourced, or simply more honest.`);
  if(nh)practices.push(`Use the natural-house resonance as a secondary question: how could ${nh.sign}/${nh.ruler} skills (${nh.field}) help the actual ${o.sign} placement operate more cleanly without replacing its real sign?`);
  if(aspects.length)practices.push(`Track the tightest aspect as a feedback loop. When ${o.id} activates, notice whether the connected planet/point activates immediately afterward; this is how the abstract aspect becomes observable in lived sequence.`);
  return {
    id:`energy.placement.${o.id}`,title:`${o.id} in ${o.sign} · ${h}H`,category:o.id==='Ceres'?'ceres':OUTERS.has(o.id)?'outer-planet':'placement',objects:[o.id],
    sections:{core_energy:core,energetic_synthesis:energetic,rulership_and_routing:routing,aspect_modulation:aspect,graph_context:topology,balanced_expression:balance,under_expression:low,over_expression:high,material_expression:material,soul_question:soul,embodiment_practices:practices},
    evidence:{placement:{id:o.id,sign:o.sign,longitude_deg:o.longitude,house:h,type:o.type},natural_house:nh,traditional_ruler:directRuler(o),condition:cond?{sect:cond.sect?.condition?.status,angularity:cond.positional?.angularity?.class,present_essential:Object.entries(cond.essential||{}).filter(([,v])=>v?.present).map(([k])=>k)}:null,route:routeFor(o.id,graph),basin,aspects:aspects.map(evidenceAspect)},
    integrity:integrity('energetic_placement_synthesis',{object:o.id,sign:o.sign,house:h},['naf.interpretation.archetype_energy.v1','naf.interpretation.sign_energy.v1','naf.interpretation.house_field.v1',NATURAL_HOUSE_MODEL,'naf.interpretation.ruler_path.v1','naf.interpretation.aspect_field_physics.v1'],[`coordinate:${o.id}`,`whole_sign_house:${o.id}`,...aspects.map(e=>`aspect:${e.a}:${e.aspect}:${e.b}`)])
  };
}

function terminalBasinSynthesis(analysis,graph){
  const fd=graph?.graphs?.classical_dispositor,basins=fd?.terminal_basins||[];if(!basins.length)return null;
  const basin=[...basins].sort((a,b)=>b.basin_size-a.basin_size)[0],map=objMap(analysis),terminal=basin.terminal_members.map(id=>map[id]).filter(Boolean),all=fd?.node_routes?Object.keys(fd.node_routes):[];
  const terminalDescription=terminal.map(o=>`${o.id} in ${o.sign}/${o.computed_house}H (${archetype(o.id).essence})`).join(' and ');
  const houseCircuit=terminal.map(o=>`${o.computed_house}H ${houseField(o.computed_house)}`).join(' ↔ ');
  const routes=Object.entries(fd.node_routes||{}).map(([id,route])=>`${id}: ${route.join(' → ')}`);
  const fraction=basin.basin_fraction;
  const meaning=fraction===1
    ? `Every classical planetary rulership pathway in this chart eventually arrives at ${basin.terminal_members.join(' ↔ ')}. A “single large basin” therefore means something very concrete: the classical planets begin with different agendas, but traditional sign rulership keeps handing those agendas downstream until the same terminal circuit is left processing them. It is less like one planet “dominates” everything and more like many tributaries repeatedly entering the same reservoir-and-outflow system.`
    : `${basin.basin_size} of ${all.length} classical planetary pathways feed ${basin.terminal_members.join(' ↔ ')}. This is the largest routing basin in the selected traditional-rulership model: several different planetary agendas are repeatedly handed into the same terminal circuit.`;
  const energetic=`The terminal circuit is ${terminalDescription}. Energetically, that means the chart repeatedly asks these functions to exchange work. The terminal planets do not erase the planets upstream; they become the recurring processors through which upstream agendas seek stabilization. Their houses matter enormously: the circuit is lived through ${houseCircuit}. This converts graph topology into an actual life statement rather than leaving “basin” as a technical label.`;
  const material=terminal.length===2
    ? `Materially, watch for a feedback loop between the two terminal houses. Developments in one house can repeatedly change what becomes possible in the other because the rulers are recursively tied. Work, money, communication, relationships, family, career, or any other upstream topic may therefore end up requiring decisions in these terminal domains before the larger system settles.`
    : `Materially, the terminal house or houses are recurrent landing zones for issues that began elsewhere in the chart. When apparently unrelated life topics keep requiring the same kind of decision, the basin gives a structural reason to investigate that repetition.`;
  return {id:'energy.graph.terminal_basin',title:`Where the chart keeps routing itself · ${basin.terminal_members.join(' ↔ ')}`,category:'graph-energy',objects:basin.terminal_members,
    sections:{plain_language:meaning,energetic_synthesis:energetic,material_expression:material,soul_question:`Soul-level question: When many different parts of life eventually demand the same pair or cluster of functions, what are you being asked to learn about coordinating those functions rather than treating each crisis/topic as unrelated?`,embodiment_practices:[`When a problem appears in any house, trace its ruler path before interpreting it in isolation. Ask whether it eventually reaches ${basin.terminal_members.join(' ↔ ')}.`,`Track the terminal houses as a coupled system for a month: when one becomes active, note whether the other is recruited through money, language, relationships, family, work, or decision-making.`,`Do not turn the terminal circuit into a “most important planets” ranking. Use it as a routing map: what repeatedly has to be processed here?`]},
    evidence:{basin,terminal:terminal.map(o=>({id:o.id,sign:o.sign,house:o.computed_house})),routes},
    integrity:integrity('terminal_basin_energy_translation',{basin,terminal:terminal.map(o=>o.id)},['naf.graph.functional_digraph.v1','naf.interpretation.ruler_path.v1','naf.interpretation.house_field.v1'],['topology:SCCs',...basin.terminal_members.map(id=>`coordinate:${id}`)])};
}

function bottleneckSynthesis(analysis,graph){
  const fd=graph?.graphs?.classical_dispositor,b=fd?.nonterminal_bottlenecks?.[0];if(!b||b.upstream_count<2)return null;
  const map=objMap(analysis),o=map[b.node];if(!o)return null;const a=archetype(o.id);
  return {id:`energy.graph.bottleneck.${o.id}`,title:`A recurring gate in the ruler network · ${o.id}`,category:'graph-energy',objects:[o.id],
    sections:{plain_language:`Several ruler pathways pass through ${o.id} before they reach the terminal circuit. “Bottleneck” does not mean bad. It means ${o.id} is a repeated hand-off point: ${b.upstream_count} classical planetary routes include this node. Different life topics can therefore arrive here for the same kind of processing before moving on.`,energetic_synthesis:`${o.id} carries ${a.label}: ${a.essence}. In ${o.sign}/${o.computed_house}H, the repeated gate operates through ${signField(o.sign).current} in ${houseField(o.computed_house)}. Energetically, upstream currents may not be able to continue until the ${o.id} function has done its work.`,material_expression:`When apparently unrelated situations repeatedly require the same kind of action associated with ${o.id}, check the ${o.computed_house}th house. That house is where the gate is embodied. The graph gives a reason to investigate recurring material themes there rather than treating repetition as coincidence inside the astrological model.`,soul_question:`What happens when you neither avoid nor over-identify with ${a.label}, but let it perform the exact gating function the network repeatedly asks of it?`,embodiment_practices:[`List the upstream planets that route through ${o.id}: ${b.upstream_members.join(', ')}. For each, write one current life issue and identify the shared ${o.id}-type decision underneath them.`,`Watch for both failure modes: refusing the gate (${a.low}) and over-driving it (${a.high}).`]},
    evidence:{bottleneck:b,placement:{id:o.id,sign:o.sign,house:o.computed_house},routes:fd.node_routes},integrity:integrity('ruler_bottleneck_energy_translation',{node:o.id,upstream:b.upstream_members},['naf.graph.upstream_capture.v1','naf.interpretation.archetype_energy.v1','naf.interpretation.house_field.v1'],[`coordinate:${o.id}`])};
}

function aspectEnergySynthesis(edge,analysis){
  const map=objMap(analysis),a=map[edge.a],b=map[edge.b],m=ASPECT_FIELDS[edge.aspect];if(!a||!b||!m)return null;
  const aa=archetype(a.id),bb=archetype(b.id);
  return {id:`energy.aspect.${edge.a}.${edge.aspect}.${edge.b}`,title:`${edge.a} ${edge.aspect} ${edge.b} · ${m.geometry}`,category:'aspect-energy',objects:[a.id,b.id],
    sections:{plain_language:`This aspect connects ${aa.label} with ${bb.label}. The ${edge.aspect} is not just a keyword; it describes the geometry of how the two functions exchange pressure or coherence.`,energetic_synthesis:`${m.energy} ${a.id} is operating through ${a.sign} in the ${a.computed_house}H field; ${b.id} is operating through ${b.sign} in the ${b.computed_house}H field. So the energetic relationship is simultaneously planet-to-planet and house-to-house: ${houseField(a.computed_house)} ↔ ${houseField(b.computed_house)}.`,material_expression:`In practice, activation in one of these houses can recruit the other. The tighter the orb, the more useful it is to watch for short feedback loops rather than treating the two placements as separate biography paragraphs.`,soul_question:`What larger behavior can contain both ${aa.label} and ${bb.label} without forcing one to disappear?`,embodiment_practices:[m.practice,`When either ${a.computed_house}H or ${b.computed_house}H becomes active, record what happens in the other domain within the same sequence of events.`]},
    evidence:{aspect:evidenceAspect(edge),placements:[{id:a.id,sign:a.sign,house:a.computed_house},{id:b.id,sign:b.sign,house:b.computed_house}]},integrity:integrity('aspect_energy_translation',{edge:evidenceAspect(edge)},['naf.interpretation.aspect_field_physics.v1','naf.interpretation.house_field.v1'],[`aspect:${edge.a}:${edge.aspect}:${edge.b}`])};
}

export function buildEnergeticSynthesis(analysis,graph,conditions=null){
  const supported=new Set(Object.keys(ARCHETYPES));
  const placements=[...(analysis?.objects||[]),...(analysis?.lots||[])].filter(o=>supported.has(o.id)&&o.sign&&o.computed_house).map(o=>synthesizePlacementEnergy(o,analysis,graph,conditions)).filter(Boolean);
  const aspects=(analysis?.aspects||[]).filter(e=>supported.has(e.a)&&supported.has(e.b)&&e.orb_deg<=3).map(e=>aspectEnergySynthesis(e,analysis)).filter(Boolean);
  const graph_cards=[terminalBasinSynthesis(analysis,graph),bottleneckSynthesis(analysis,graph)].filter(Boolean);
  const ceres=placements.filter(x=>x.category==='ceres');
  const outer=placements.filter(x=>x.category==='outer-planet');
  const featured=[...graph_cards,...ceres,...outer,...placements.filter(x=>['Sun','Moon','ASC','MC'].includes(x.objects?.[0])).slice(0,3),...aspects.slice(0,4)].filter(Boolean);
  return {model:ENERGETIC_SYNTHESIS_MODEL,version:ENERGETIC_SYNTHESIS_VERSION,status:'interpretive-symbolic-energy-model',natural_house_model:NATURAL_HOUSE_MODEL,featured,placements,aspects,graph_cards,ceres,outer_planets:outer,
    applicability:{energy_language:'symbolic/metaphorical field language; not a measured physical force',natural_house_overlay:'modern correspondence layer, explicitly secondary to actual sign and Whole Sign house',ceres:'supported when a Ceres coordinate is supplied; automatic small-body ephemeris calculation is not yet implemented in the birth-time calculator'},
    integrity:{model:ENERGETIC_SYNTHESIS_MODEL,epistemic_layer:'interpretive-inference',source_profiles:['user-supplied energetic interpretation sample','Noetic Atlas house/sign/aspect vocabularies'],graph_model:graph?.model||null,condition_model:conditions?.model_id||null}};
}
