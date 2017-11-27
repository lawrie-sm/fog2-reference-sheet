import React, { Component } from 'react';
import UnitTable from './components/UnitTable';
import UnitData from './data/UnitData';
import Footer from './components/Footer';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="container">
          <div className='row'>
            <div className='twelve columns'>
              <h3>Field of Glory 2 Unit Browser</h3>
            </div>
          </div>
          <div className='row'>
            <div className='twelve columns max-height'>
              <UnitTable units={UnitData} />
            </div>
          </div>
        </div>
        < Footer/>
      </div>

    );
  }
}

export default App;
