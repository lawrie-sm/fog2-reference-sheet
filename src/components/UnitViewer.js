import React from 'react';
import '../styles/components/UnitViewer.css';

//<TraitDesc traits={selectedUnit.traits} descs={descs}/>

const UnitViewer = ({selectedUnit, descs}) => {
  if (selectedUnit) {
    return (
    <div className='UnitViewer'>
      <div className='container'>
        <h4>{selectedUnit.Name}</h4>
      <div className='row'>
        <div className='twelve columns'>
        <UnitDescriptions unit={selectedUnit} descs={descs}/>
        </div>
      </div>


      </div>
    </div>
    );
  } else {
    return <div className='UnitViewer'></div>;
  }
};

const UnitDescriptions = ({unit, descs}) => {
 if(unit && descs) {

  let unitRuleNames = [unit.Type];
  unit.traits.forEach ((trait) => unitRuleNames.push(trait.name));

  let cohesionRules = getRulesByCategory('cohesion', unitRuleNames, descs);
  let impactRules = getRulesByCategory('impact', unitRuleNames, descs);
  let meleeRules = getRulesByCategory('melee', unitRuleNames, descs);
  let shootingRules = getRulesByCategory('shooting', unitRuleNames, descs);
  let terrainRules = getRulesByCategory('terrain', unitRuleNames, descs);
  let otherRules = getRulesByCategory('other', unitRuleNames, descs);

    return (
      <ul>
        <Rules ruleName='Cohesion' rules={cohesionRules} />
        <Rules ruleName='Impact' rules={impactRules} />
        <Rules ruleName='Melee' rules={meleeRules} />
        <Rules ruleName='Shooting' rules={shootingRules} />
        <Rules ruleName='Terrain' rules={terrainRules} />
        <Rules ruleName='Other' rules={otherRules} />
      </ul>
    );

  } else return (<p>Type not found.</p>);
};

function getRulesByCategory(category, unitRuleNames, descs) {
let rules = [];
unitRuleNames.forEach((ruleName)=> {
  let rule = descs.find((desc) => desc.name === ruleName);
  if (rule && rule[category]) {
    rule[category].forEach((rDesc) => {
      rules.push(rDesc);
    });
  }
});
return rules;
}

const Rules = ({ruleName, rules}) => {

  console.log(rules);

  if (rules && rules.length > 0) {
    if (rules.length === 1) {
      return (
        <div className={ruleName}>
          <p><strong>{ruleName}:</strong> {rules[0]}</p>
        </div>
      );
    } else {
      return (
        <div className={ruleName}>
          <p><strong>{ruleName}:</strong></p>
          <ul>
            {rules.map((rule, i) => <li key={i}>{rule}</li>)}
          </ul>
        </div>
      );
    }
  } else return '';
};


export default UnitViewer;
