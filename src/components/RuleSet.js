import React from 'react';

const RuleSet = ({ruleSet}) => {
  if (ruleSet && ruleSet.rules.length > 0) {
      if (ruleSet.rules.length === 1) {
        return (<SingleRuleSet ruleSet={ruleSet} />);
      } else {
        return (<MultipleRuleSet ruleSet={ruleSet} />);
      }
  } else return '';
};

const SingleRuleSet = ({ruleSet}) => (
  <div className={ruleSet.name}>
  <RuleHeader ruleSet={ruleSet} />
    <p>
      {ruleSet.rules[0].text} <em>[{ruleSet.rules[0].origin}]</em>
    </p>
  </div>
);

const MultipleRuleSet = ({ruleSet}) => (
  <div className={ruleSet.name}>
  <RuleHeader ruleSet={ruleSet} />
  <ul>
    {ruleSet.rules.map((rule, i) => <li key={i}>{rule.text} <em>[{rule.origin}]</em></li>)}
  </ul>
</div>
);

const RuleHeader = ({ruleSet}) => (
  <div>
    <h6><strong>{ruleSet.name}</strong></h6>
    <hr></hr>
  </div>
);

export default RuleSet;
