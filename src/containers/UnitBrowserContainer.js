import React, { Component } from 'react';
import ListSelector from '../components/ListSelector'
import UnitTable from '../components/UnitTable';
import UnitViewer from '../components/UnitViewer';
import ListData from '../data/ListData'
import UnitData from '../data/UnitData';

class UnitBrowserContainer extends Component {

  constructor() {
  super();
    this.state = {unitData: UnitData, selectedUnit: undefined};
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

  updateList = (identifier) => {
    this.setState({
      unitData: getUnitDataFromList(identifier, ListData, UnitData),
      selectedUnit: undefined
    })
  }

  render() {
    return (
      <div className='UnitBrowserContainer'>
          <ListSelector lists={ListData} updateList={this.updateList} />
          <UnitTable units={this.state.unitData} handleClick={this.handleClick} />
          <UnitViewer selectedUnit={this.state.selectedUnit} />
      </div>
    );
  }
}

const getUnitDataFromList = (identifier, listData, unitData) => {
  if (identifier === 'ALL') return unitData;
  const list = listData.find((l) => l.identifier === identifier);
  const units = list.units;
  const newUnitData = [];
  units.forEach(unit => {
    let thisUnitData = unitData.find((u) => u.Name.toLowerCase() === unit.name.toLowerCase());
    if (thisUnitData) newUnitData.push(thisUnitData);
  });
  return(newUnitData);
}

//TODO: Add upper and lower limits to table

export default UnitBrowserContainer;
