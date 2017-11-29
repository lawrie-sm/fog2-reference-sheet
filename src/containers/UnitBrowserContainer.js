import React, { Component } from 'react';
import UnitTable from '../components/UnitTable';
import UnitData from '../data/UnitData';

class UnitBrowserContainer extends Component {

handleClick = (state, rowInfo, column, instance)  => {
  return (e, handleOriginal) => {
    console.log(rowInfo)
    if (handleOriginal) {
      handleOriginal();
    }
  }
}

  render() {
    return (
      <div className='UnitBrowserContainer'>
          <UnitTable units={UnitData}
          onClick={this.handleClick}/>
      </div>
    );
  }
}

export default UnitBrowserContainer;
