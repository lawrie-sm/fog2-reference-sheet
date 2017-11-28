import React, { Component } from 'react';
import UnitTable from '../components/UnitTable';
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
      </div>
    );
  }
}

export default UnitBrowserContainer;