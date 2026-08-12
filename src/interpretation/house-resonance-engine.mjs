import {SIGN_ORDER,SIGN_INFO,TRADITIONAL_RULERS} from '../kernel/noetic-kernel.mjs';

export const HOUSE_RESONANCE_VERSION='0.4.1.3';
export const HOUSE_RESONANCE_MODEL='naf.interpretation.house_resonance.v0.4.1.3';
export const NATURAL_HOUSE_MODEL='naf.interpretation.natural_house_overlay.modern.v1';

const NATURAL_RULERS={
  Aries:{traditional:'Mars'},
  Taurus:{traditional:'Venus'},
  Gemini:{traditional:'Mercury'},
  Cancer:{traditional:'Moon'},
  Leo:{traditional:'Sun'},
  Virgo:{traditional:'Mercury'},
  Libra:{traditional:'Venus'},
  Scorpio:{traditional:'Mars',modern_coruler:'Pluto'},
  Sagittarius:{traditional:'Jupiter'},
  Capricorn:{traditional:'Saturn'},
  Aquarius:{traditional:'Saturn',modern_coruler:'Uranus'},
  Pisces:{traditional:'Jupiter',modern_coruler:'Neptune'}
};

const ELEMENT_LANGUAGE={
  Fire:'animation, ignition, visibility, appetite, and the impulse to make life move',
  Earth:'materialization, continuity, embodiment, use, and the conversion of possibility into form',
  Air:'exchange, comparison, language, abstraction, relation, and movement through information',
  Water:'bonding, memory, feeling, permeability, protection, and movement through emotional or imaginal continuity'
};

const MODE_LANGUAGE={
  Cardinal:'initiates, differentiates, launches, and moves energy across a threshold',
  Fixed:'sustains, concentrates, stabilizes, and holds energy long enough to become coherent',
  Mutable:'redistributes, adapts, translates, recombines, and moves energy between established states'
};

const HOUSE_DOMAINS={
  1:'embodiment, identity, autonomy, appearance, vitality, and how the person enters experience',
  2:'money, possessions, livelihood resources, skill, value, receiving, and material self-support',
  3:'speech, writing, teaching/learning, siblings and peers, local movement, technical skill, and information exchange',
  4:'home, ancestry, family roots, land, belonging, private life, and the foundation beneath public identity',
  5:'children, creation, play, pleasure, authorship, romance, risk, and personally generated life-force',
  6:'work routines, health practice, maintenance, craft, service, and the operational systems of daily life',
  7:'partners, clients, contracts, open opponents, mirrors, audiences, and consequential one-to-one exchange',
  8:'shared resources, debt, inheritance, dependency, vulnerability, intimacy, loss, and entanglement',
  9:'higher learning, philosophy, religion, publication, law, pilgrimage, teaching, and worldview',
  10:'career, authority, reputation, office, public contribution, responsibility, and visible consequence',
  11:'friends, collaborators, patrons, communities, institutions, networks, aspirations, and collective futures',
  12:'solitude, withdrawal, hidden processes, sacrifice, confinement, private struggle, and realities beyond ordinary control'
};

const ordinal=n=>{const x=Number(n),m=x%100;if(m>=11&&m<=13)return`${x}th`;if(x%10===1)return`${x}st`;if(x%10===2)return`${x}nd`;if(x%10===3)return`${x}rd`;return`${x}th`;};
const signIndex=s=>{const i=SIGN_ORDER.indexOf(s);if(i<0)throw new Error(`Unknown sign: ${s}`);return i;};

function allObjects(analysis){
  return [
    ...(analysis?.objects||[]),
    ...(analysis?.lots||[]),
    analysis?.angles?.ASC,
    analysis?.angles?.MC
  ].filter(Boolean);
}

function rulerContext(ruler,analysis){
  if(!ruler)return null;
  const o=allObjects(analysis).find(x=>x.id===ruler);
  return o?{id:ruler,sign:o.sign,house:o.computed_house,longitude:o.longitude}: {id:ruler,sign:null,house:null,longitude:null};
}

function occupantsForHouse(h,analysis){
  return allObjects(analysis)
    .filter(o=>Number(o.computed_house)===Number(h))
    .map(o=>({id:o.id,type:o.type,sign:o.sign,longitude:o.longitude}))
    .sort((a,b)=>(a.longitude??0)-(b.longitude??0));
}

function pairInterpretation(h,naturalSign,actualSign){
  const n=SIGN_INFO[naturalSign],a=SIGN_INFO[actualSign];
  const elementSentence=n.element===a.element
    ? `The elemental medium is preserved as ${a.element}: ${ELEMENT_LANGUAGE[a.element]}.`
    : `The elemental medium changes from ${n.element} to ${a.element}, so the house's modern natural resonance and its actual zodiacal field emphasize different elemental processes.`;
  const modeSentence=n.mode===a.mode
    ? `The modal motion is preserved as ${a.mode}: it ${MODE_LANGUAGE[a.mode]}.`
    : `The modal motion rotates from ${n.mode} to ${a.mode}: the natural-house layer ${MODE_LANGUAGE[n.mode]}, while the actual sign ${MODE_LANGUAGE[a.mode]}.`;
  return `${ordinal(h)} house is the lived domain of ${HOUSE_DOMAINS[h]}. In the optional modern natural-house overlay it resonates with ${naturalSign} (${n.mode} ${n.element}), while the actual Whole Sign house is ${actualSign} (${a.mode} ${a.element}). ${elementSentence} ${modeSentence}`;
}

export function buildHouseResonanceMap(analysis){
  const ascSign=analysis?.angles?.ASC?.sign;
  if(!ascSign)throw new Error('House resonance requires an Ascendant sign.');
  const rotationSigns=signIndex(ascSign);
  const rotationDegrees=rotationSigns*30;
  const houses=[];
  for(let h=1;h<=12;h++){
    const naturalSign=SIGN_ORDER[h-1];
    const actualSign=SIGN_ORDER[(rotationSigns+h-1)%12];
    const naturalInfo=SIGN_INFO[naturalSign],actualInfo=SIGN_INFO[actualSign];
    const actualRuler=TRADITIONAL_RULERS[actualSign];
    const nr=NATURAL_RULERS[naturalSign];
    houses.push({
      house:h,
      house_label:ordinal(h),
      domain:HOUSE_DOMAINS[h],
      natural:{sign:naturalSign,element:naturalInfo.element,mode:naturalInfo.mode,ruler:nr.traditional,modern_coruler:nr.modern_coruler||null},
      actual:{sign:actualSign,element:actualInfo.element,mode:actualInfo.mode,ruler:actualRuler},
      element_relation:naturalInfo.element===actualInfo.element?'preserved':'changed',
      mode_relation:naturalInfo.mode===actualInfo.mode?'preserved':'rotated',
      actual_ruler_context:rulerContext(actualRuler,analysis),
      natural_ruler_context:rulerContext(nr.traditional,analysis),
      occupants:occupantsForHouse(h,analysis),
      interpretation:pairInterpretation(h,naturalSign,actualSign),
      integrity:{
        epistemic_layer:'interpretive-inference',
        natural_house_overlay_status:'optional-modern-correspondence-not-universal-hellenistic-rule',
        rules:[NATURAL_HOUSE_MODEL,'naf.house.whole_sign.v1','naf.rulership.traditional_domicile.v1'],
        inputs:{asc_sign:ascSign,house:h,natural_sign:naturalSign,actual_sign:actualSign}
      }
    });
  }
  const elementPreserved=houses.filter(h=>h.element_relation==='preserved').length;
  const modePreserved=houses.filter(h=>h.mode_relation==='preserved').length;
  const phaseCharacter=elementPreserved===12&&modePreserved===0
    ? 'element-preserving / mode-rotating'
    : elementPreserved===12&&modePreserved===12
      ? 'element-and-mode preserving'
      : `mixed resonance: ${elementPreserved}/12 elemental matches, ${modePreserved}/12 modal matches`;
  return {
    model:HOUSE_RESONANCE_MODEL,
    version:HOUSE_RESONANCE_VERSION,
    ascendant_sign:ascSign,
    rotation:{sign_steps:rotationSigns,degrees:rotationDegrees,phase_character:phaseCharacter,element_preserved_count:elementPreserved,mode_preserved_count:modePreserved},
    houses,
    lattice:{
      rows:['Fire','Earth','Air','Water'],
      columns:['Cardinal','Fixed','Mutable'],
      cells:SIGN_ORDER.map(sign=>({sign,element:SIGN_INFO[sign].element,mode:SIGN_INFO[sign].mode}))
    },
    applicability:{
      whole_sign:'The constant sign-phase rotation is specific to Whole Sign houses.',
      natural_house_overlay:'The natural-house layer is an optional modern correspondence model. It never replaces the actual house sign, its ruler, or traditional place doctrine.',
      energy_language:'Element/mode energy language is symbolic and phenomenological, not a measured physical field.'
    },
    integrity:{
      epistemic_layer:'interpretive-inference',
      deterministic_inputs:['angles.ASC.sign','Whole Sign house order','actual sign rulers'],
      interpretive_rule:NATURAL_HOUSE_MODEL
    }
  };
}
