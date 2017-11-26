import React, { Component } from 'react';
import UnitData from '../data/UnitData';
import UnitTable from '../components/UnitTable';

class UnitTableContainer extends Component {
  render() {
    return (<UnitTable units={UnitData} />);
  }
}

export default UnitTableContainer;
