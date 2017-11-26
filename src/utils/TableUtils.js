export function getQualityCellText(qualityVal) {
  let qualityDesc = 'Untrained';
  if (qualityVal > 0) {
    qualityDesc = 'Raw';
    if (qualityVal > 50) {
      qualityDesc = 'Below Average';
      if (qualityVal > 75) {
        qualityDesc = 'Average';
        if (qualityVal > 100) {
          qualityDesc = 'Above Average';
          if (qualityVal >= 200) {
            qualityDesc = 'Superior';
            if (qualityVal > 200 ) {
              qualityDesc = 'Elite';
            }
          }
        } 
      }
    }
  }
  return `${qualityDesc} (${qualityVal})`;
}

export function getArmourCellText(armourVal) {
  let armourDesc = 'None';
  if (armourVal > 0) {
    armourDesc = 'Lightly Protected';
    if (armourVal >= 50) {
      armourDesc = 'Protected';
      if (armourVal > 50) {
        armourDesc = 'Some Armour';
        if (armourVal > 75) {
          armourDesc = 'Armoured';
          if (armourVal === 300) {
            armourDesc = 'Fully Armoured';
          }
        }
      }
    }
  }
  return `${armourDesc} (${armourVal})`;
}

export function getTraits(unit) {
  const traitNames = [
    'Bow',
    'Defensive Spearmen',
    'Heavy Artillery',
    'Heavy Weapon',
    'Impact Foot',
    'Javelins',
    'Light Artillery',
    'Light Lancers',
    'Light Spear',
    'Offensive Spearmen',
    'Pike',
    'Sling',
    'Swordsmen'
  ];
  let traits = [];
  traitNames.forEach((traitName) => {
    if (unit[traitName] > 0) {
      traits.push({'name' : traitName, 'value' : unit[traitName]});
    }
  });
  
  return(traits);
}

export function getTraitsCellText(traits) {
  let traitsText = traits.map((trait) => {
    return (`${trait.name} (${trait.value})`);
  });
  traitsText = traitsText.join(', ') || 'None';
  return traitsText;
}

export function getTraitSortFunction() {
  return function(a, b) {
    if (a.length === 0) return 1;
    if (b.length === 0) return -1;
    let txtA = a[0].name.toUpperCase();
    let txtB = b[0].name.toUpperCase();
    return (txtA < txtB) ? -1 : (txtA > txtB) ? 1 : 0;
  };
}

export default { getArmourCellText, getQualityCellText, getTraits, getTraitsCellText, getTraitSortFunction };