import React from 'react';
import '../styles/components/UnitViewer.css';

//<TraitDesc traits={selectedUnit.traits} descs={descs}/>

const UnitViewer = ({selectedUnit, descs}) => {
  if (selectedUnit) {
    return (
    <div className='UnitViewer'>
      <div className='container'>
        <h4>{selectedUnit.Name} - {selectedUnit.Type}</h4>
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

  if (unit && descs) {
    let rules = [descs.find((r) => r.name === unit.Type)];
    unit.traits.forEach((trait) => {
      rules.push(descs.find((r) => r.name === trait.name)); //TODO: Account for mixed units (e.g. append '(33%)' to desc?)
    });
    
    let cohesionRules = [];
    let impactRules = [];
    let meleeRules = [];
    let shootingRules = [];
    let terrainRules = [];
    let otherRules = [];

    rules.forEach((r) => {
      if (r) {
        if (r.cohesion) {
          cohesionRules.push(r.cohesion);
        }
        if (r.impact) {
          impactRules.push(r.impact);
        }
        if (r.melee) {
          meleeRules.push(r.melee);
        }
        if (r.shooting) {
          shootingRules.push(r.shooting);
        }
        if (r.terrain) {
          terrainRules.push(r.terrain);
        }
        if (r.other) {
          otherRules.push(r.other);
        }
      } else return (<div>Problem getting rules.</div>);
    });

    return (
      <ul>
        <li><strong>Cohesion:</strong> {(cohesionRules.length > 0) ? (cohesionRules.join(' ')) : '' }</li>
        <li><strong>Impact:</strong> {(impactRules.length > 0) ? impactRules.join(' ') : '' }</li>
        <li><strong>Melee:</strong> {(meleeRules.length > 0) ? meleeRules.join(' ') : '' }</li>
        <li><strong>Shooting:</strong> {(shootingRules.length > 0) ? shootingRules.join(' ') : '' }</li>
        <li><strong>Terrain:</strong> {(terrainRules.length > 0) ? terrainRules.join(' ') : '' }</li>
        <li><strong>Other:</strong> {(otherRules.length > 0) ? otherRules.join(' ') : '' }</li>
      </ul>
    );

  } else return (<p>Type not found.</p>);
};

export default UnitViewer;
