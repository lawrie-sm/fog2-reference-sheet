import React from 'react';
import '../styles/components/UnitViewer.css';

//<TraitDesc traits={selectedUnit.traits} descs={descs}/>

const UnitViewer = ({selectedUnit, descs}) => {
  //console.log(selectedUnit);
  if (selectedUnit) {
    return (
    <div className='UnitViewer'>
      <div className='container'>
        <h4>{selectedUnit.Name}</h4>
      <div className='row'>
        <div className='twelve columns'>
        <TypeDesc type={selectedUnit.Type} descs={descs}/>
        </div>
      </div>


      </div>
    </div>
    );
  } else {
    return <div className='UnitViewer'></div>;
  }
};

const TypeDesc = ({type, descs}) => {
  let rules = descs.find((r) => type === r.name);
  if (type && rules) {

    // ******
    //NB: GROUP RELATED HEADINGS TOGETHER (Cohesion, terrain etc) rather than by type/trait
    //TODO: An elegant way to deal with null values
    // ******

    let otherRules;
    if (rules.other) {
      otherRules = rules.other.map((rule, i) => (
        <li key={i}>
          {rule}
        </li>
      ));
    }

      return (
        <div className="TypeDesc">
        <h6><strong>{type}</strong></h6>
        <ul>
          {otherRules}
        </ul>
        </div>
      );

  } else return (<p>Type not found.</p>);
};

const TraitDesc = ({traits, descs}) => {
 if (traits && traits.length > 0) {

  //console.log(descs);
  let traitDescs = traits.map((trait) => {
    let desc = descs[trait.name] || 'No description found';

    return (
      <li key={trait.name}>
      <strong>{trait.name}</strong>
      <p>{desc}</p>
      </li>
    );
  });

   return (
    <div className="TraitDesc">
      <h5>Traits</h5>
      <ul>
        {traitDescs}
      </ul>
    </div>
   );
  } else return (
    <div>
      <h5>Traits</h5>
      <p><em>No traits.</em></p>
    </div>
  );
};

export default UnitViewer;
