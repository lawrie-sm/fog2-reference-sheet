import React, { Component } from 'react';
import UnitRow from './UnitRow';

const UnitTable = ({units}) => (
  <div className="UnitTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Action Points</th>
          <th>Armour</th>
          <th>Quality</th>
          <th>Men</th>
          <th>Strength</th>
          <th>Stealthy</th>
          <th>Traits</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {units.map((unit) => {
          return <UnitRow key={unit.ID} unit={unit}/>;
        })}
      </tbody>
    </table>
  </div>
);

export default UnitTable;