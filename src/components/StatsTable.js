import React from 'react';
import MQWrapper from './MQWrapper'
import '../styles/components/StatsTable.css'

const StatsTable = ({selectedUnit}) => (
  <div className='StatsTable'>
    <MQWrapper size="mobile">
      <StatsTableMobile selectedUnit={selectedUnit}/>
    </MQWrapper>
    <MQWrapper size="desktop">
      <StatsTableDT selectedUnit={selectedUnit}/>          
    </MQWrapper>
  </div>
);

const StatsTableMobile = ({selectedUnit}) => (
  <div>
  <table className="u-full-width">
    <thead>
      <tr>
        <th>Type</th>
        <th>Quality</th>
        <th>Armour</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{selectedUnit.Type}</td>
        <td>{selectedUnit.quality.name} ({selectedUnit.quality.value})</td>
        <td>{selectedUnit.armour.name} ({selectedUnit.armour.value})</td>

      </tr>
    </tbody>
  </table>
  <table className="u-full-width">
    <thead>
      <tr>
        <th>Men</th>
        <th>Strength</th>
        <th>Cost</th>
        <th>AP</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{selectedUnit.AP}</td>
        <td>{selectedUnit.men.number} ({selectedUnit.men.models})</td>
        <td>{selectedUnit.UnitSize}</td>
        <td>{selectedUnit.Cost}</td>
      </tr>
    </tbody>
  </table>
  </div>
);

const StatsTableDT = ({selectedUnit}) => (
  <table className="u-full-width">
    <thead>
      <tr>
        <th>Type</th>
        <th>Quality</th>
        <th>Armour</th>
        <th>AP</th>
        <th>Men</th>
        <th>Strength</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{selectedUnit.Type}</td>
        <td>{selectedUnit.quality.name} ({selectedUnit.quality.value})</td>
        <td>{selectedUnit.armour.name} ({selectedUnit.armour.value})</td>
        <td>{selectedUnit.AP}</td>
        <td>{selectedUnit.men.number} ({selectedUnit.men.models})</td>
        <td>{selectedUnit.UnitSize}</td>
        <td>{selectedUnit.Cost}</td>
      </tr>
    </tbody>
  </table>
);

export default StatsTable;