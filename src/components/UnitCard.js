import React, { Component } from 'react';

class UnitCard extends Component {
  render() {
    return (
      <li className="UnitCard">
        {this.props.unit.Name}
      </li>
    );
  }
}

export default UnitCard;
