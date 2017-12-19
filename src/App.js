import React, { Component } from 'react';
import UnitBrowserContainer from './containers/UnitBrowserContainer';
import Footer from './components/Footer';
import './styles/normalize.css';
import './styles/skeleton.css';
import './styles/app.css';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <UnitBrowserContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
