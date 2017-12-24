import React from 'react';
import RuleHelpers from '../helpers/RuleHelpers';
import RuleSet from './RuleSet';
import StatsTable from './StatsTable'
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
          <p>{selectedUnit._original.info}</p>
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



export default UnitViewer;
