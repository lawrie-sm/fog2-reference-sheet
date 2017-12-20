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
          <h4>{selectedUnit.name}</h4>
          <div className='row'>
            <div className='twelve columns'>
              {ruleSets.map((ruleSet, i) =>
              <RuleSet key={ruleSet.name} ruleSet={ruleSet} />)}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className='UnitViewer'>Error: No unit selected</div>;
  }
};

export default UnitViewer;
