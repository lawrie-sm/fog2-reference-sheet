/***** > RuleUtils



  if (flags.isFoot && unitHasTrait(unit, 'Bow')) {
    rules.push({ shortRange: 2, longRange: 4, foot: -50, mounted: 0, artillery: -50, elephants: -50, origin: 'Foot Bow' });
  }

  if (flags.isMounted && unitHasTrait(unit, 'Bow')) {
    rules.push({ shortRange: 2, foot: -50, mounted: 0, artillery: -50, elephants: -50, origin: 'Mounted Bow' });
  }

  if (unitHasTrait(unit, 'Sling')) {
    rules.push({ shortRange: 2, foot: -50, mounted: 0, artillery: -50, elephants: -50, origin: 'Sling' });
  }

  if (unitHasTrait(unit, 'Javelins')) {
    rules.push({ shortRange: 1, foot: -50, mounted: 0, artillery: -50, elephants: +50, origin: 'Javelins' });
  }

  if (unitHasTrait(unit, 'Heavy Artillery')) {
    rules.push({ shortRange: 6, longRange: 9, foot: -100, mounted: 0, artillery: -200, elephants: +100, origin: 'Heavy Artillery' });
  }

  if (unitHasTrait(unit, 'Light Artillery')) {
    rules.push({ shortRange: 6, longRange: 9, foot: -100, mounted: 0, artillery: -200, elephants: +100, origin: 'Light Artillery' });
  }

*****/

/***** > RuleSet


const ShootingRuleSet = ({ruleSet}) => {
  let shootingRules = [];
  let textRules = [];
  ruleSet.rules.forEach((rule) => {
    if (!rule.text) shootingRules.push(rule);
  });ruleSet.rules.forEach((rule) => {
    if (rule.text) textRules.push(rule);
  });
  if (textRules && textRules.length > 0) {
     if (textRules.length == 1) {
       return (<ShootingTableSingleText ruleSet={ruleSet} shootingRules={shootingRules} textRules={textRules} />);
     } else {
      return (<ShootingTableMultipleText ruleSet={ruleSet} shootingRules={shootingRules} textRules={textRules} />);
     }
  } else {
    return (<ShootingTableOnly ruleSet={ruleSet} shootingRules={shootingRules} />);
  }
};

const ShootingTableSingleText = ({ruleSet, shootingRules, textRules}) => (
  <div className={ruleSet.name}>
    <RuleHeader ruleSet={ruleSet} />
    <p>
      {textRules[0].text} <em>[{textRules[0].origin}]</em>
    </p>
    <ShootingTable rules={shootingRules} />
  </div>
);

const ShootingTableMultipleText = ({ruleSet, shootingRules, textRules}) => (
  <div className={ruleSet.name}>
    <RuleHeader ruleSet={ruleSet} />
    <ul>
      {textRules.map((rule, i) => <li key={i}>{rule.text} <em>[{rule.origin}]</em></li>)}
    </ul>
    <ShootingTable rules={shootingRules} />
  </div>
);

const ShootingTableOnly = ({ruleSet, shootingRules}) => (
  <div className={ruleSet.name}>
  <RuleHeader ruleSet={ruleSet} />
    <ShootingTable shootingRules={shootingRules}/>
  </div>
);

const ShootingTable = ({shootingRules}) => (
  <table>
  <thead>
    <tr>
    <th></th>
    <th>Foot</th>
    <th>Mounted </th>
    <th>Artillery</th>
    <th>Elephants</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Weapon</td>
    <td>stat</td>
    <td>stat</td>
    <td>stat</td>
    </tr>
  </tbody>
  </table>
);

*****/