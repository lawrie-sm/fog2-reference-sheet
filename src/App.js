import React, { Component } from 'react';
import UnitTable from './components/UnitTable';
import './App.css';
import 'react-table/react-table.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UnitTable />
      </div>
    );
  }
}

export default App;
