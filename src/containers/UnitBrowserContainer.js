import React, { Component } from 'react';
import UnitTable from '../components/UnitTable';
import UnitData from '../data/UnitData';

class UnitBrowserContainer extends Component {



  render() {
    return (
      <div className='UnitBrowserContainer'>
          <UnitTable units={UnitData} />
      </div>
    );
  }
}

export default UnitBrowserContainer;
