import React, { Component } from 'react';
import UnitBrowserContainer from './containers/UnitBrowserContainer';
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
          <UnitBrowserContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
