import React from 'react';
import RuleHelpers from '../helpers/RuleHelpers';
import RuleSet from './RuleSet';
import '../styles/components/UnitViewer.css';

const UnitViewer = ({selectedUnit}) => {
  if (selectedUnit) {
    let ruleSets = RuleHelpers.getRuleSets(selectedUnit);
    return (
      <div className='UnitViewer'>
        <div className='container'>
          <h4>{selectedUnit.Name}</h4>
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
    return <div className='UnitViewer'></div>;
  }
};

export default UnitViewer;
