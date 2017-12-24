import React, { Component } from 'react';
import '../styles/components/ListSelector.css';

class ListSelector extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.handleUpdate(event.target.value);
  }

  render() {
    return (
      <div className='ListSelector'>
        <form>
          <label htmlFor='listInput'> Army List </label>
          <select id='listInput' value={this.state.value} onChange={this.handleChange}>
          {ArmyLists(this.props.lists)}
          </select>
        </form>
        <ExtraInfo selectedList={this.props.selectedList} />
      </div>
    );
  }

};

const ArmyLists = (lists) => {
  const defaultOption = <option key='-1' value='ALL'>(Show All Units)</option>;
  let listNames = lists.map((list, i) => {
    return (
      <option key ={i} value={list.identifier}>
        {list.fullName}
      </option>
    );
  });
  
  listNames.sort((a, b) => {
    if (a.props.children > b.props.children) return 1;
    if (a.props.children < b.props.children) return -1
    return 0
  });

  listNames.unshift(defaultOption);
  return (listNames);
};

const ExtraInfo = ({selectedList}) => {
  if (selectedList) {
    return (
    <div className='extra-info'>
      <p><strong>Formation: </strong>{selectedList.deploymentStyle}</p>
      <p><strong>Terrain: </strong>{selectedList.map}</p>
    </div>
  )} else {
    return(<div></div>);
  }
}

export default ListSelector;
