export function getRuleSets(unit) {
  console.log(unit);
  let ruleSets = [];
  let flags = getUnitFlags(unit);
  ruleSets.push(getImpactRules(unit, flags));
  return ruleSets
}

function getImpactRules(unit, flags) {
  
  let impact = { name: 'Impact', rules: [] }

  //Impact Table POAs
  if (unit.Type === 'Impact Foot') {
    impact.rules.push('+200 POA vs any foot. Additional +10 POA if 3+ ranks deep');
    impact.rules.push('+100 POA vs elephants and mounted, unless charging mounted shock troops');
  }

  if (unitHasTrait(unit, 'Pike')) {
    impact.rules.push('+100 POA if 3+ ranks deep and not Fragamented or Severely Disordered, unless charging mounted shock troops');
    impact.rules.push('+100 POA if 4+ ranks deep and not Disrupted or Disordered, while in open terrain');
  }

  if (unitHasTrait(unit, 'Offensive Spearmen')) {
    impact.rules.push('+100 POA if not Fragamented or Severely Disordered, unless charging mounted shock troops');
  }

  if (unitHasTrait(unit, 'Defensive Spearmen')) {
    impact.rules.push('+100 POA when recieving a charge, or if charging other Defensive Spearmen');
  }

  if (flags.isMounted && unitHasTrait(unit, 'Light Spear')) {
    impact.rules.push('+50 POA');
  }

  if (flags.isFoot && unitHasTrait(unit, 'Light Spear')) {
    impact.rules.push('+100 POA, unless charging mounted shock troops');
  }

  if (unitHasTrait(unit, 'Heavy Weapon')) {
    impact.rules.push('+100 POA vs any foot');
  }

  if (unitHasTrait(unit, 'Light Artillery') || unitHasTrait(unit, 'Heavy Artillery')) {
    impact.rules.push('-200 POA unless defending an obstacle');
    impact.rules.push('+100 POA if defending and obstacle and not Fragamented or Severely Disordered');
  }

  if (unit.Type === 'Elephants') {
    impact.rules.push('+250 POA');
  }

  if (unitHasTrait(unit, 'Light Lancers')) {
    impact.rules.push('+100 POA vs mounted in open terrain');
    impact.rules.push('+100 POA vs foot in open terrain, unless charging steady Pike / Offensive / Defensive Spearmen');
  }

  if (unitHasTrait(unit, 'Heavy Chariots')) {
    impact.rules.push('+100 POA in open terrain, except against light troops, lancers and elephants or if charging steady Pike / Offensive / Defensive Spearmen');
  }

  if (unitHasTrait(unit, 'Heavy Chariots')) {
    impact.rules.push('+100 POA in open terrain, except against light troops, lancers and elephants or if charging steady Pike / Offensive / Defensive Spearmen');
  }

  if (unit.Type === 'Scythed Chariots') {
    impact.rules.push('+250 POA in open terrain, except against light troops, lancers and elephants or if charging steady Pike / Offensive / Defensive Spearmen');
  }

  if (flags.isMounted && (unit.Type != 'Scythed Chariots')) {
    impact.rules.push('+100 POA vs Light Foot, Bowmen and Mob in open terrain');
  }

  if (flags.isFoot) {
    impact.rules.push('+100 POA if defending light or medium fortifications. +200 if defending heavy fortifications');
  }

  if (flags.isMissile) {
    impact.rules.push('+100 POA vs mounted if defending obstacle and not Fragmented or Severely Disordered');
  }

  if (flags.isFoot) {
    impact.rules.push('+25 POA if defending obstacle and no other bonuses apply');
  }

  //Flank charges
  if (flags.isLight) {
    impact.rules.push('Does not benefit from automatic +200 POA or enemy cohesion drop when flank-charging non-light enemies');
  }
  if (flags.isMounted) {
    impact.rules.push('Suffers no automatic cohesion drop when flank-charged by infantry');
  }
  if (unit.Type === 'Elephants') {
    impact.rules.push('Suffers no automatic cohesion drop when flank-charged by mounted troops');
  }

  return impact;
}

function getUnitFlags(unit) {
  let unitFlags = {
    isFoot: undefined,
    isMounted: (
    unit.Type === 'Cavalry' || unit.Type === 'Light Horse' ||
    unit.Type === 'Cataphracts' || unit.Type === 'Camelry' ||
    unit.Type === 'Light Chariots' || unit.Type === 'Heavy Chariots' ||
    unit.Type === 'Heavy Chariots'),
    isLight: (unit.Type === 'Light Foot' || unit.Type === 'Light Horse'),
    isMissile: !!(unitHasTrait(unit, 'Bow') || unitHasTrait(unit, 'Sling') || unitHasTrait(unit, 'Javelins'))
  };
  unitFlags.isFoot = !(unitFlags.isMounted || unit.Type === 'Elephants');

  console.log(unitFlags);
  return unitFlags;
}

function unitHasTrait(unit, trait) {
  return (unit.traits.find((t) => t.name === trait));
}

export default {
  getRuleSets
};