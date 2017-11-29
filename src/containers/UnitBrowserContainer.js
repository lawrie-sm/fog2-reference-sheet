import React, { Component } from 'react';
import UnitTable from '../components/UnitTable';
<<<<<<< HEAD
import UnitData from '../data/UnitData';

class UnitBrowserContainer extends Component {
  render() {
    return (
      <div className='UnitBrowserContainer'>
          <UnitTable units={UnitData}
          onRowClick={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                console.log(rowInfo);
                if (handleOriginal) {
                  handleOriginal();
                }
              }
            };
          }}/>
=======
import UnitViewer from '../components/UnitViewer';
import UnitData from '../data/UnitData';

class UnitBrowserContainer extends Component {

  constructor() {
  super();
    this.state = {selectedUnit: undefined};
  }

  handleClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e, handleOriginal) => {
      if (rowInfo.original) {
        this.setState({selectedUnit: rowInfo.row});
      }
      if (handleOriginal) {
        handleOriginal()
      }
      }
    }
  }

  render() {
    return (
      <div className='UnitBrowserContainer'>
          <UnitTable units={UnitData} handleClick={this.handleClick}/>
          <UnitViewer selectedUnit={this.state.selectedUnit}/>
>>>>>>> 7c153a070e9f0f8c40a8f541b6c57faea08c6a7f
      </div>
    );
  }
}

<<<<<<< HEAD
export default UnitBrowserContainer;
=======
export default UnitBrowserContainer;
>>>>>>> 7c153a070e9f0f8c40a8f541b6c57faea08c6a7f
