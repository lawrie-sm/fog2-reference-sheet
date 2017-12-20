import React from 'react';
import RuleHelpers from '../helpers/RuleHelpers';
import RuleSet from './RuleSet';
import '../styles/components/UnitViewer.css';


//TODO: https://daveceddia.com/open-modal-in-react/

const UnitViewer = ({selectedUnit}) => {
  if (selectedUnit) {
    let ruleSets = RuleHelpers.getRuleSets(selectedUnit);
    return (
      <div className='UnitViewer'>
        <div className='container'>
          <h4 className='unit-header'>{selectedUnit.name}</h4>
          <TraitsList selectedUnit={selectedUnit} />
          <StatsTable selectedUnit={selectedUnit} />
          {ruleSets.map((ruleSet, i) =>
          <RuleSet key={ruleSet.name} ruleSet={ruleSet} />)}
        </div>
      </div>
    );
  } else {
    return <div className='UnitViewer'>Error: No unit selected</div>;
  }
};

const TraitsList = ({selectedUnit}) => {
  let traitList = selectedUnit.traits.map((trait) => {
    if (trait.value === 100) {
      return trait.name;
    } else return `${trait.name} (${trait.value})`
  })
  traitList = traitList.join(', ');
  return (
    <span className='TraitList'>{traitList}</span>
  );
}

const StatsTable = ({selectedUnit}) => {
  console.log(selectedUnit);
  return (
  <div className='StatsTable'>
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
  </div>
  );
};

export default UnitViewer;
