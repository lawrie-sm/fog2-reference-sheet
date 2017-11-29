import React from 'react';
import '../styles/components/UnitViewer.css';

//TODO: Subcomponents for type, traits, descs of armour/quality impact

const UnitViewer = ({selectedUnit}) => {
  console.log(selectedUnit);
  if (selectedUnit) {
    return (
    <div className='UnitViewer'>
      <div className='container'>
        <div className='twelve columns'>
          <h4>{selectedUnit.Name}</h4>
        </div>
      </div>
    </div>
    );
  } else {
    return <div className='UnitViewer'></div>
  }
};

export default UnitViewer;
