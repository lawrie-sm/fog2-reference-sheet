import React, { Component } from 'react';
import UnitData from './data/squads';
import UnitCard from './components/UnitCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitCardList: UnitData.map(unit => {
        return <UnitCard key={unit.ID} unit={unit} />;
      })
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container col-md row">
            {this.state.unitCardList}
        </div>
      </div>
    );
  }
}

export default App;
