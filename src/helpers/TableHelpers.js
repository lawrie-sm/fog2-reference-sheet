import MatchSorter from 'match-sorter';

export function getQualityAccessor(experience, elan) {
    let qualityVal = (experience + elan) / 2;
    let qualityDesc = getQualityDesc(qualityVal);
    let expDesc = getQualityDesc(experience);
    return ({'name': qualityDesc, 'value': qualityVal, 'expDesc': expDesc, 'expVal': experience});
}

function getQualityDesc(qualityVal) {
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
  return qualityDesc;
}

export function getArmourAccessor(armourVal) {
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
  return ({'name': armourDesc, 'value': armourVal});
}

export function getTraitAccessor(unit) {
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
    if (trait.value < 100) {
      return (`${trait.name} (${trait.value})`);
    } else {
      return (`${trait.name}`);
    }
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

export function filterCaseInsensitive() {
  return function (filter, row) {
    const id = filter.pivotId || filter.id;
    if (row[id] !== null) {
        let input = filter.value.toUpperCase();
        let words = row[id].toUpperCase();
        words = words.split(' ');
        return MatchSorter(words, input).length;
    }
  };
}

export function filterNamedValue(cell, filter) {
  let tempArr = Object.keys(cell).map((key) => cell[key]);
  return MatchSorter(tempArr, filter).length;
}

export function getFullName(shortName) {

  /* TODO: This should probably be some kind of key / value pair 
  instead of a switch (easier to edit later and add to) */ 

  let r = shortName;
  switch(shortName) {
    case ('Indian L Chariots'):
      r = 'Indian Light Chariots';
      break;
    case ('Indian H Chariots'):
      r = 'Indian Heavy Chariots';
    break;
    default: {
      r = shortName;
    }
  }
  return r;
}

export default {
  getArmourAccessor,  
  getQualityAccessor,
  getTraitAccessor,
  getTraitsCellText,
  getTraitSortFunction,
  filterCaseInsensitive,
  filterNamedValue,
  getFullName
};