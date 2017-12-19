import React, { Component } from 'react';
import UnitBrowserHeader from '../components/UnitBrowserHeader';
import ListSelector from '../components/ListSelector'
import UnitTable from '../components/UnitTable';
import UnitViewer from '../components/UnitViewer';
import ListData from '../data/ListData'
import UnitData from '../data/UnitData';

class UnitBrowserContainer extends Component {

  constructor() {
  super();
    this.state = {
      unitData: UnitData,
      terrain: undefined,
      deploymentType: undefined,
      selectedUnit: undefined};
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
    if (identifier === 'ALL') {
        this.setState({
        unitData: UnitData,
        terrain: undefined,
        deploymentType: undefined,
        selectedUnit: undefined
      });
    } else {
      let list = ListData.find((list) => list.identifier === identifier);
      if (list) {
        this.setState({
          unitData: getUnitDataFromList(identifier, list, UnitData),
          terrain: list.map,
          deploymentType: list.deploymentStyle,
          selectedUnit: undefined
        })
      }
    }
  }

  render() {
    return (
      <div className='UnitBrowserContainer'>
        <div className='row'>
          <div className='six columns'>
              <UnitBrowserHeader />
          </div>
          <div className='six columns'>
              <ListSelector
                lists={ListData}
                deploymentType={this.state.deploymentType}
                terrain={this.state.terrain}
                handleUpdate={this.updateList}
              />
          </div>
        </div>
        <UnitTable
          units={this.state.unitData}
          handleClick={this.handleClick}
        />
        <UnitViewer selectedUnit={this.state.selectedUnit} />
      </div>
    );
  }
}

const getUnitDataFromList = (identifier, list, unitData) => {
  const newUnitData = [];
  list.units.forEach(unit => {
    //NB: Note case of 'Name' vs 'name'. Also need to set the value toLowerCase.
    let thisUnit = unitData.find((u) => u.Name.toLowerCase() === unit.name.toLowerCase());
    if (thisUnit) {
      thisUnit.Max = unit.max;
      thisUnit.Min = unit.min;
      newUnitData.push(thisUnit);
    }
  });
  return(newUnitData);
}

export default UnitBrowserContainer;
