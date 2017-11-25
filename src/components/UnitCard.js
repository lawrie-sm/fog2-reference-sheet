import React, { Component } from 'react';
import TraitListItem from './TraitListItem';

function getQualityDesc(qualityVal) {
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
  return qualityDesc;
}

function getArmourDesc(armourVal) {
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
  return armourDesc;
}

function getTraits(unit) {
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
      let newTrait = {"name" : traitName, "value" : unit[traitName]};
      traits.push(<TraitListItem key={i} trait={newTrait} />);
    }
  });
  return(traits);
}

class UnitCard extends Component {

  render() {
    const unit = this.props.unit;

    let traits = getTraits(unit);

    //View flags determines if a unit can hide on the edge of woods (1 = yes 2 = no)
    const isStealthy = (unit.ViewFlags === "1") ? "\u2714" : "\u2718";

    const armourVal = parseInt(unit.BodyArmour);
    let armourDesc = getArmourDesc(armourVal);

    // Quality is average of Elan and XP
    const qualityVal = (parseInt(unit.Experience) + parseInt(unit.Elan)) / 2;
    let qualityDesc = getQualityDesc(qualityVal);

    return (
      <div className="UnitCard row col-md-3">
        <div className="card">
          <div className="section section--header">
            <h3>{unit.Name}</h3>
            <h4>{unit.Type}</h4>
          </div>
          <div className="row section section--body">
            <div className="col-md-6">
              <h4>Statistics</h4>
              <ul>
                <li>
                  <strong>Action Points: </strong>{unit.AP}
                </li>
                <li>
                  <strong>Armour: </strong> {armourDesc} ({armourVal})
                </li>
                <li>
                  <strong>Quality: </strong>{qualityDesc} ({qualityVal})
                </li>
                <li>
                  <strong>Men: </strong>{unit.TotalMen}
                </li>
                <li>
                  <strong>Strength: </strong>{unit.UnitSize}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4>Traits</h4>
              <ul>
                {traits}
              </ul>
            </div>
          </div>
          <div className="section section--footer row">
              <strong>Cost:</strong>{unit.Cost}
          </div>
        </div>
      </div>
    );
  }
}

export default UnitCard;
