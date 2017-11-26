export function getQualityLine(experience, elan) {
  let qualityVal = (parseInt(experience) + parseInt(elan)) / 2;
  let qualityDesc = "Untrained";
  if (qualityVal > 0) {
    qualityDesc = "Raw";
    if (qualityVal > 50) {
      qualityDesc = "Below Average";
      if (qualityVal > 75) {
        qualityDesc = "Average";
        if (qualityVal >= 200) {
          qualityDesc = "Superior";
          if (qualityVal === 300) {
            qualityDesc = "Elite";
          }
        } 
      }
    }
  }
  return `${qualityDesc} (${qualityVal})`;
}

export function getArmourLine(armourVal) {
  let armourDesc = "None";
  if (armourVal > 0) {
    armourDesc = "Lightly Protected";
    if (armourVal >= 50) {
      armourDesc = "Protected";
      if (armourVal > 50) {
        armourDesc = "Some Armour";
        if (armourVal > 75) {
          armourDesc = "Armoured";
          if (armourVal === 300) {
            armourDesc = "Fully Armoured";
          }
        }
      }
    }
  }
  return `${armourDesc} (${armourVal})`;
}

export function getTraitsLine(unit) {
  const traitNames = [
    "Bow",
    "Defensive Spearmen",
    "Heavy Artillery",
    "Heavy Weapon",
    "Impact Foot",
    "Javelins",
    "Light Artillery",
    "Light Lancers",
    "Light Spear",
    "Offensive Spearmen",
    "Pike",
    "Sling",
    "Swordsmen"
  ];
  let traits = [];
  traitNames.forEach((traitName, i) => {
    if (unit[traitName] > 0) {
      traits.push(`${traitName} (${unit[traitName]})`);
    }
  });
  traits = traits.join(', ') || 'None';
  return(traits);
}

export default { getArmourLine, getQualityLine, getTraitsLine };