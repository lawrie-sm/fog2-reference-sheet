import React, { Component } from 'react';
import UnitTable from '../components/UnitTable';
import UnitViewer from '../components/UnitViewer';
import UnitData from '../data/UnitData';
import Descriptions from '../data/Descriptions';

class UnitBrowserContainer extends Component {

  constructor() {
  super();
    this.state = {selectedUnit: undefined};
  }

  handleClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e, handleOriginal) => {
        if(rowInfo) {
          if (rowInfo.original) {
            this.setState({selectedUnit: rowInfo.row});
          }
          if (handleOriginal) {
            handleOriginal()
          }
        }
      }
    }
  }

  render() {
    return (
      <div className='UnitBrowserContainer'>
          <UnitTable units={UnitData} handleClick={this.handleClick} />
          <UnitViewer selectedUnit={this.state.selectedUnit} descs={Descriptions} />
      </div>
    );
  }
}

export default UnitBrowserContainer;
