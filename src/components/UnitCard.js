import React, { Component } from 'react';

class UnitCard extends Component {

  render() {
    const u = this.props.unit;



    //View flags determines if a unit can hide on the edge of woods (1 = yes 2 = no)
    const isStealthy = (u.ViewFlags === "1") ? "\u2714" : "\u2718";

    const armorVal = parseInt(u.BodyArmour);
    let armourDesc = "None";
    if (armorVal > 0) {
      armourDesc = "Lightly Protected";
      if (armorVal >= 50) {
        armourDesc = "Protected";
        if (armorVal > 50) {
          armourDesc = "Some Armour";
          if (armorVal > 75) {
            armourDesc = "Armoured";
            if (armorVal > 100) {
              armourDesc = "Fully Armoured";
            }
          }
        }
      }
    } 

    // Quality is average of Elan and XP
    const qualityVal = (parseInt(u.Experience) + parseInt(u.Elan)) / 2;
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

    
    return (
      <div className="UnitCard row col-md-3">
        <div className="card">
          <div className="section section--header">
            <h3>{u.Name}</h3>
            <h4>{u.Type}</h4>
          </div>
          <div className="section section--body">
            <ul>
              <li>
                <strong>Action Points: </strong>{u.AP}
              </li>
              <li>
                <strong>Armour: </strong> {armourDesc} ({armorVal})
              </li>
              <li>
                <strong>Quality: </strong>{qualityDesc} ({qualityVal})
              </li>
              <li>
                <strong>Men: </strong>{u.TotalMen}
              </li>
              <li>
                <strong>Strength: </strong>{u.UnitSize}
              </li>
            </ul>
          </div>
          <div className="section section--footer row">
            <div className="col-md"><strong>Stealth: {isStealthy}</strong></div>
            <div className="col-md"><strong>Cost: </strong>{u.Cost}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UnitCard;
