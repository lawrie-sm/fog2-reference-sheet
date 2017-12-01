export function getRuleSets(unit) {
  console.log(unit);

  let ruleSets = [];

  ruleSets.push(getImpactRules(unit));
  ruleSets.push(getMeleeRules(unit));

  return ruleSets
}

function getImpactRules(unit) {
  
  let impact = { name: 'Impact', rules: [] }

  //Flank charges
  if (unitIsLight(unit)) {
    impact.rules.push('Does not benefit from automatic +200 POA or enemy cohesion drop when flank-charging non-light enemies.');
  }
  if (unitIsMounted(unit)) {
    impact.rules.push('Suffers no automatic cohesion drop when flank-charged by infantry.');
  }
  if (unit.Type === 'Elephants') {
    impact.rules.push('Suffers no automatic cohesion drop when flank-charged by mounted troops.');
  }

  return impact;
}

function getMeleeRules(unit) {
  let meleeRules = { name: 'Melee', rules: [] }


  return meleeRules;
}

function unitIsLight(unit) {
  return (unit.Type === 'Light Foot' || unit.Type === 'Light Horse');
}

function unitIsMounted(unit) {
  return (unit.Type === 'Cavalry' || unit.Type === 'Light Horse' ||
          unit.Type === 'Cataphracts' || unit.Type === 'Camelry' ||
          unit.Type === 'Light Chariots' || unit.Type === 'Heavy Chariots' ||
          unit.Type === 'Heavy Chariots');
}

function unitIsFoot(unit) {
  return !(unitIsMounted(unit) || unit.Type === 'Elephants');
}

export default {
  getRuleSets
};