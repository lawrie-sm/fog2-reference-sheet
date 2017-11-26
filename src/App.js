import React, { Component } from 'react';
import UnitTable from './components/UnitTable';
import UnitData from './data/UnitData';
import './App.css';
import 'react-table/react-table.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UnitTable units={UnitData} />
      </div>
    );
  }
}

export default App;
