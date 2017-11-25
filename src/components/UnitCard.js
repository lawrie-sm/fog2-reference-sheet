import React, { Component } from 'react';

class UnitCard extends Component {

  render() {
    const u = this.props.unit;

    // Quality is average of Elan and XP
    const quality = (parseInt(u.Experience) + parseInt(u.Elan)) / 2;

    //View flags determines if a unit can hide on the edge of woods (1 = yes 2 = no)
    let isStealthy = (u.ViewFlags === "1") ? "\u2714" : "\u2718";

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
                <strong>AP: </strong>{u.AP}
              </li>
              <li>
                <strong>Armour: </strong>{u.BodyArmour}
              </li>
              <li>
                <strong>Quality </strong>{quality}
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
