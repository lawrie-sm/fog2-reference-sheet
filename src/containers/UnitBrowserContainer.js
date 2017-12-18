import React, { Component } from 'react';
import ListSelector from '../components/ListSelector'
import UnitTable from '../components/UnitTable';
import UnitViewer from '../components/UnitViewer';
import ListData from '../data/ListData'
import UnitData from '../data/UnitData';

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
          <ListSelector list={ListData} />
          <UnitTable units={UnitData} handleClick={this.handleClick} />
          <UnitViewer selectedUnit={this.state.selectedUnit} />
      </div>
    );
  }
}

export default UnitBrowserContainer;
