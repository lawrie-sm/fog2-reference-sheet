import React, { Component } from 'react';
import UnitTable from './components/UnitTable';
import UnitData from './data/UnitData';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='app container'>
        <div className='row'>
          <div className='twelve columns'>
            Header
          </div>
        </div>
        <div className='row'>
          <div className='twelve columns'>
            <UnitTable units={UnitData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
