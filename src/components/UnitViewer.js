import React from 'react';
import '../styles/components/UnitViewer.css';

  /*
  TODO: Tidy this up and make an "Add psudo trait function"
  Rethink how consistent (terrain, shooting, melee modifer) data
  will be displayed.
  Break off this component into a container for the functions
  and a stateless component for the display
  Add shock troop psuedo traits
  Deal with armour/quality rules and viewflags
  */


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

  //Need to remove duplicates (Light Artillery)
  unitRuleNames = Array.from(new Set(unitRuleNames));

  unitRuleNames = getPseudoTraits(unitRuleNames);

  let cohesionRules = getRulesByCategory('cohesion', unitRuleNames, descs);
  let impactRules = getRulesByCategory('impact', unitRuleNames, descs);
  let meleeRules = getRulesByCategory('melee', unitRuleNames, descs);
  let shootingRules = getRulesByCategory('shooting', unitRuleNames, descs);
  let movementRules = getRulesByCategory('movement', unitRuleNames, descs);
  let terrainRules = getRulesByCategory('terrain', unitRuleNames, descs);
  let otherRules = getRulesByCategory('other', unitRuleNames, descs);
  
  //TODO: Add more stats here (armour/quality)

  let stealthyText = (unit._original.ViewFlags === 1) ?
    'Can hide on the edges of woods.' : 
    'Cannot hide on the the edges of woods.';
  terrainRules.push({name: 'Hiding', desc: stealthyText});

    return (
      <ul>
        
        <Rules ruleName='Impact' rules={impactRules} />
        <Rules ruleName='Melee' rules={meleeRules} />
        <Rules ruleName='Shooting' rules={shootingRules} />
        <Rules ruleName='Cohesion' rules={cohesionRules} />
        <Rules ruleName='Movement' rules={movementRules} />
        <Rules ruleName='Terrain' rules={terrainRules} />
        <Rules ruleName='Other' rules={otherRules} />
      </ul>
    );

  } else return (<p>Type not found.</p>);
};

const Rules = ({ruleName, rules}) => {
  if (rules && rules.length > 0) {
    if (rules.length === 1) {
      return (
        <div className={ruleName}>
          <p><strong>{ruleName}: </strong>{rules[0].desc}</p>
        </div>
      );
    } else {
      return (
        <div className={ruleName}>
          <p><strong>{ruleName}</strong></p>
          <ul>
            {rules.map((rule, i) => <li key={i}>{rule.desc}</li>)}
          </ul>
        </div>
      );
    }
  } else return '';
};

function getRulesByCategory(category, unitRuleNames, descs) {
  let rules = [];
  unitRuleNames.forEach((ruleName) => {
    let rule = descs.find((desc) => desc.name === ruleName);
    if (rule && rule[category]) {
      rule[category].forEach((rDesc) => {
        rules.push({name: ruleName, desc: rDesc});
      });
    }
  });
  return rules;
  }
  
  function getPseudoTraits(ruleNames) {

    //Elephants never have pseudo-traits
    if (ruleNames.includes('Elephants')) return ruleNames;

    let rN = ruleNames.slice();
    //Scythed chariots are a special case due to light foot impact rules, not included on this list
    let mountedNames = ['Cavalry', 'Light Horse', 'Cataphracts', 'Camelry', 'Light Chariots', 'Heavy Chariots'] 
    let footShockTroopNames = ['Impact Foot', 'Offensive Spearmen', 'Pikemen'];
    let mountedShockTroopNames = ['Light Lancers', 'Heavy Lancers', 'Heavy Chariots', 'Scythed Chariots'];

    ruleNames.forEach((ruleName) => {

      if (mountedNames.includes(ruleName) && !(rN.includes('Mounted'))) { 
          rN.push('Mounted');
      }
      if (footShockTroopNames.includes(ruleName) && !(rN.includes('Foot Shock Troops'))) {
        rN.push('Foot Shock Troops');
      }
      //Include a check here to exclude light horse (though there are no light horse lancers currently)
      //NB: It's unclear whether non-light "light spear" cavalry are counted as shock troops
      if (mountedShockTroopNames.includes(ruleName) && !(rN.includes('Mounted Shock Troops'))
          && !(rN.includes('Light Horse'))) { 
        rN.push('Mounted Shock Troops');
      }
    });

    //If its not mounted or an elephant / scythed chariot then it must be foot
    if (!(rN.includes('Mounted')) && !(rN.includes('Scythed Chariots'))) rN.push('Foot');
    console.log(rN);
    return rN;
  }
export default UnitViewer;
