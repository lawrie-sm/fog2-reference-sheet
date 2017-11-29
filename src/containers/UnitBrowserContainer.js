import React, { Component } from 'react';
import UnitTable from '../components/UnitTable';
import UnitData from '../data/UnitData';

function getClickHandler() {
  return (
  function handleClick(state, rowInfo, column, instance) {
    return (e, handleOriginal) => {
      console.log(rowInfo)
      if (handleOriginal) {
        handleOriginal();
      }
    }
  }
  );
}


class UnitBrowserContainer extends Component {
  
  render() {
    return (
      <div className='UnitBrowserContainer'>
          <UnitTable units={UnitData}
          onClick={
            getClickHandler()
            }/>
      </div>
    );
  }
}

export default UnitBrowserContainer;
