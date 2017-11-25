import React, { Component } from 'react';

class TraitListItem extends Component {
  render() {
    return (
      <li className="TraitListItem">
        {this.props.trait.name} ({this.props.trait.value})
      </li>
    );
  }
}

export default TraitListItem;