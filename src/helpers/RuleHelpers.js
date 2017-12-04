export function getRuleSets(unit) {
  console.log(unit);
  let ruleSets = [];
  let flags = getUnitFlags(unit);
  ruleSets.push(getShootingRules(unit, flags));
  ruleSets.push(getImpactRules(unit, flags));
  ruleSets.push(getMeleeRules(unit, flags));
  ruleSets.push(getCohesionRules(unit, flags));
  return ruleSets;
}

function getUnitFlags(unit) {
  let models = unit.TotalMen / 60;
  let unitFlags = {
    isFoot: undefined,
    isBattleTroops: undefined,
    isMounted: (
    unit.Type === 'Cavalry' || unit.Type === 'Light Horse' ||
    unit.Type === 'Cataphracts' || unit.Type === 'Camelry' ||
    unit.Type === 'Light Chariots' || unit.Type === 'Heavy Chariots' ||
    unit.Type === 'Heavy Chariots'),
    isLight: (unit.Type === 'Light Foot' || unit.Type === 'Light Horse'),
    isMissile: !!(unitHasTrait(unit, 'Bow') || unitHasTrait(unit, 'Sling') || unitHasTrait(unit, 'Javelins')),
    isArtillery: !!(unitHasTrait(unit, 'Light Artillery') || unitHasTrait(unit, 'Heavy Artillery')),
    isChariot: (unit.Type === 'Light Chariots' || unit.Type === 'Heavy Chariots' || unit.Type === 'Scythed Chariots'),
    isUnmaneuverable: undefined,
    isShock: undefined
  };
  unitFlags.isFoot = !(unitFlags.isMounted || unitFlags.isChariot || unit.Type === 'Elephants' || unit.Type === 'Train');
  unitFlags.isBattleTroops = !unitFlags.isLight;

  return unitFlags;
}

function unitHasTrait(unit, trait) {
  return (unit.traits.find((t) => t.name === trait));
}

function getImpactRules(unit, flags) {
  
  let rules = [];

  //Impact Table
  if (unitHasTrait(unit, 'Impact Foot')) {
    rules.push({ text: '+200 POA vs any foot. Additional +10 POA if 3+ ranks deep', origin: 'Impact Foot' });
    rules.push({ text: '+100 POA vs elephants and mounted, unless charging mounted shock troops', origin: 'Impact Foot' });
  }

  if (unitHasTrait(unit, 'Pike')) {
    rules.push({ text: '+100 POA if 3+ ranks deep and not Fragmented or Severely Disordered, unless charging mounted shock troops',
                 origin: 'Pike' });
    rules.push({ test: '+100 POA if 4+ ranks deep and not Disrupted or Disordered, while in open terrain', origin: 'Pike' });
  }

  if (unitHasTrait(unit, 'Offensive Spearmen')) {
    rules.push({ text: '+100 POA if not Fragmented or Severely Disordered, unless charging mounted shock troops',
                 origin: 'Offensive Spearmen ' });
  }

  if (unitHasTrait(unit, 'Defensive Spearmen')) {
    rules.push({ text: '+100 POA when recieving a charge, or if charging other Defensive Spearmen', origin: 'Defensive Spearmen' });
  }

  if (unitHasTrait(unit, 'Light Spear')) {
    if (flags.isMounted) {
      rules.push({ text: '+50 POA', origin: 'Mounted Light Spear' });
    } else if (flags.isFoot) {
      rules.push({ text: '+100 POA, unless charging mounted shock troops', origin: 'Foot Light Spear' });
    }
  }

  if (unitHasTrait(unit, 'Heavy Weapon')) {
    rules.push({ text: '+100 POA vs any foot', origin: 'Heavy Weapon' });
  }

  if (flags.isArtillery) {
    rules.push({ text: '-200 POA unless defending an obstacle', origin: 'Artillery' });
    rules.push({ text: '+100 POA if defending an obstacle and not Fragmented or Severely Disordered', origin: 'Artillery' });
  }

  if (unit.Type === 'Elephants') {
    rules.push({ text: '+250 POA', origin: 'Elephants' });
  }

  if (unitHasTrait(unit, 'Light Lancers')) {
    rules.push({ text: '+100 POA vs mounted in open terrain', origin: 'Lancers' });
    rules.push({ text: '+100 POA vs foot in open terrain, unless charging steady Pike / Offensive / Defensive Spearmen',
                 origin: 'Lancers' });
  }

  if (unitHasTrait(unit, 'Heavy Chariots')) {
    rules.push(
      { text: '+100 POA in open terrain, except against light troops, lancers and elephants or if charging steady Pike / Offensive / Defensive Spearmen',
        origin: 'Heavy Chariots' });
  }

  if (unit.Type === 'Scythed Chariots') {
    rules.push({ text: '+250 POA in open terrain, except against light troops, lancers and elephants or if charging steady Pike / Offensive / Defensive Spearmen',
                 origin: 'Scythed Chariots' });
  }

  if (flags.isMounted && (unit.Type !== 'Scythed Chariots')) {
    rules.push({ text: '+100 POA vs Light Foot, Bowmen and Mob in open terrain', origin: 'Mounted' });
  }

  //Flank charges
  if (flags.isLight) {
    rules.push({ text: 'Does not benefit from automatic +200 POA or enemy cohesion drop when flank-charging non-light enemies',
                 origin: 'Light' });
  }

  if (flags.isMounted) {
    rules.push({ text: 'Suffers no automatic cohesion drop when flank-charged by infantry', origin: 'Mounted' });
  }

  if (unit.Type === 'Elephants') {
    rules.push({ text: 'Suffers no automatic cohesion drop when flank-charged by mounted troops', origin: 'Elephant' });
  }

  return { name: 'Impact', rules: rules };
}

function getMeleeRules(unit, flags) {
  let rules = [];

  //Special Rules
  if (unit.Type === 'Scythed Chariots') {
    rules.push({ text: 'Destroyed if enemy doesn\'t route after first melee round.', origin: 'Scythed Chariots' });
  }

  if (unitHasTrait(unit, 'Heavy Weapon') || unit.Type === 'Elephants' ||
      flags.isArtillery || flags.isChariot) {
    let origin = 'Heavy Weapon';
    if (unit.Type === 'Elephants') origin = 'Elephants';
    if (flags.isArtillery) origin = 'Artillery';
    if (flags.isChariot) origin = 'Chariot';
    rules.push({ text: 'Ignores enemy armour bonus', origin: origin });
  }


   //Melee Table
  if (unitHasTrait(unit, 'Swordsmen')) {
    if (flags.isMounted) {
      rules.push({ text: '+100 POA vs mounted', origin: 'Mounted Swordsmen' });
      rules.push({ text: '+100 POA vs foot, unless steady Pike / Offensive / Defensive Spearmen or they are defending an obstacle',
                   origin: 'Mounted Swordsmen' });
    } else if (flags.isFoot) {
      rules.push({ text: '+100 POA vs mounted', origin: 'Foot Swordsmen' });
      rules.push({ text: '+100 POA vs foot. Drops to +50 if against steady Offensive / Defensive Spearmen or they are defending an obstacle',
                   origin: 'Foot Swordsmen' });
    }
  }
  if (unitHasTrait(unit, 'Pike')) {
    rules.push({ text: '+100 POA if not Fragmented or Severely Disordered and 3+ ranks deep', origin: 'Pike' });
    rules.push({ text: '+100 POA if not Disrupted or Disordered and 4+ ranks deep', origin: 'Pike' });
  }

  if (unitHasTrait(unit, 'Offensive Spearmen') || unitHasTrait(unit, 'Defensive Spearmen')) {
    rules.push({ text: '+100 POA if not Fragmented or Severely Disordered', origin: 'Spearmen' });
  }

  if (unitHasTrait(unit, 'Heavy Weapon')) {
    rules.push({ text: '+100 POA', origin: 'Heavy Weapon' });
  }

  if (flags.isArtillery) {
    rules.push({ text: '-200 POA unless defending an obstacle', origin: 'Artillery' });
    rules.push({ text: '+100 POA if defending an obstacle and not Fragmented or Severely Disordered', origin: 'Artillery' });
  }

  if (unit.Type === 'Elephants') {
    rules.push({ text: '+100 POA', origin: 'Elephants' });
  }

  return { name: 'Melee', rules: rules };
}

function getCohesionRules(unit, flags) {
  let rules = [];

 //Cohesion Table

  if (unit.Type === 'Heavy Foot') {
    rules.push({ text: '+1 cohesion test modifier', origin: 'Heavy Foot' });
  }

  if (flags.isArtillery) {
    rules.push({ text: 'Enemies suffer a -1 cohesion test modifer when testing as a result of shooting', origin: 'Artillery' });
  }

  if (flags.isMounted || unit.Type === 'Heavy Foot') {
    rules.push({ text: 'Enemies suffer a -1 cohesion test modifier in open terrain if they lost combat and are Medium Foot / Light Foot / Warriors / Bowmen / Mob',
                 origin: (flags.isMounted) ? 'Mounted' : 'Heavy Foot'});
  }

  if (unit.Type === 'Medium Foot' || unit.Type === 'Warriors' || 
      unit.Type === 'Bowmen' || unit.Type === 'Light Foot' ||
      unit.Type === 'Mob') {
    rules.push({ text: '-1 cohesion test modifier when losing in combat against mounted troops or heavy foot in open terrain', 
                 origin: unit.Type });
  }

  if (unitHasTrait(unit, 'Light Lancers') || unit.Type === 'Heavy Chariots') {
    rules.push({ text: 'Enemies suffer a -1 cohesion test modifer if they lose in the impact phase',
                 origin: (unitHasTrait(unit, 'Light Lancers')) ? 'Lancers' : 'Heavy Chariots' });
  }

  if (unit.Type === 'Impact Foot') {
    rules.push({ text: 'Enemy foot suffer a -1 cohesion test modifier if they lose in the impact phase', origin: 'Impact Foot' });
  }

  if (flags.isFoot) {
    rules.push({ text: '-1 cohesion test modifier when losing impact phase against Impact Foot', origin: 'Foot' });
  }

  //Flanks
  if (flags.isFoot && flags.isBattleTroops) {
    rules.push({ text: '-1 cohesion test modifier when flanks are threatened', origin: 'Foot Battle Troops' });
  }

  return { name: 'Cohesion', rules: rules };
}

function getShootingRules (unit, flags) {
 let rules = [];

 //Shooting Ranges

if (flags.isFoot && unitHasTrait(unit, 'Bow')) {
  rules.push({ text: 'Can shoot up to 2 tiles away with full effect, half-effect up to 4 tiles away', origin: 'Foot Bow' });
}
if (flags.isMounted && unitHasTrait(unit, 'Bow')) {
  rules.push({ text: 'Can shoot up to 2 tiles away', origin: 'Mounted Bow' });
}
if (unitHasTrait(unit, 'Sling')) {
  rules.push({ text: 'Can shoot up to 2 tiles away', origin: 'Sling' });
}
if (unitHasTrait(unit, 'Javelins')) {
  rules.push({ text: 'Can shoot at adjacent units', origin: 'Javelins' });
}
if (unitHasTrait(unit, 'Light Artillery')) {
  rules.push({ text: 'Can shoot up to 6 tiles away', origin: 'Light Artillery' });
}
if (unitHasTrait(unit, 'Heavy Artillery')) {
  rules.push({ text: 'Can shoot up to 6 tiles away with full effect, half-effect up to 9 tiles away', origin: 'Heavy Artillery' });
}

// Shoooting POA table

if (unitHasTrait(unit, 'Bow')) {
  rules.push({ text: '-50 POA vs foot, artillery and elephants', origin: 'Bow' });
}
if (unitHasTrait(unit, 'Sling')) {
  rules.push({ text: '-50 POA vs foot, artillery and elephants', origin: 'Sling' });
}
if (unitHasTrait(unit, 'Javelins')) {
  rules.push({ text: '+50 POA vs elephants', origin: 'Javelins' });
  rules.push({ text: '-50 POA vs foot and artillery', origin: 'Javelins' });
}

//Special shooting rules

if (flags.isArtillery) {
  rules.push({ text: 'Can fire over friendly troops', origin: 'Artillery'});
  rules.push({ text: 'Bonus vs large or enfiladed targets', origin: 'Artillery'});
}

if (flags.isLight) {
  rules.push({ text: 'Reduced casualties from incoming shooting', origin: 'Light'});
}

 return { name: 'Shooting', rules: rules };
}

//TODO:
//Quality/Armour
//Movement
//Terrain
//Shock Troop and Unmanevourable

export default {
  getRuleSets
};
