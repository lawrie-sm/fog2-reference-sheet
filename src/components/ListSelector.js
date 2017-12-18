import React from 'react';
import '../styles/components/ListSelector.css';

const ListSelector = ({list}) => {
  console.log(list);
  return (
    <div className='ListSelector'>
      <span>
        Army List
      </span>
      <select>
        <option value="test1">Test 1</option>
        <option value="test2">Test 2</option>
      </select>
    </div>
  );
};

export default ListSelector;
