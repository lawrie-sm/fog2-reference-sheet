import React from 'react';
import RuleUtils from '../utils/RuleUtils';
import '../styles/components/UnitViewer.css';

const UnitViewer = ({selectedUnit}) => {
  if (selectedUnit) {
    return (
      <div className='UnitViewer'>
        <div className='container'>
          <h4>{selectedUnit.Name}</h4>
          <div className='row'>
            <div className='twelve columns'>
              <UnitDescriptions unit={selectedUnit} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className='UnitViewer'></div>;
  }
};

const UnitDescriptions = ({unit}) => {
 if(unit) {

  let ruleSets = RuleUtils.getRuleSets(unit);
  
    return (
      <ul>
        {ruleSets.map((ruleSet, i) =>
        <RuleSet key={ruleSet.name} ruleSet={ruleSet} />)}
      </ul>
    );

  } else return (<p>Type not found.</p>);
};

const RuleSet = ({ruleSet}) => {
  if (ruleSet && ruleSet.rules.length > 0) {
    if (ruleSet.rules.length === 1) {
      return (
        <div className={ruleSet.name}>
          <p><strong>{ruleSet.name}: </strong>{ruleSet.rules[0]}</p>
        </div>
      );
    } else {
      return (
        <div className={ruleSet.name}>
          <p><strong>{ruleSet.name}</strong></p>
          <ul>
            {ruleSet.rules.map((rule, i) => <li key={i}>{rule}</li>)}
          </ul>
        </div>
      );
    }
  } else return '';
};



export default UnitViewer;
