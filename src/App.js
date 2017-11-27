import React, { Component } from 'react';
import UnitTable from './components/UnitTable';
import UnitData from './data/UnitData';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
          <UnitTable units={UnitData} />
        <Footer />
      </div>
    );
  }
}

export default App;
