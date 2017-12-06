import React, { Component } from 'react';
import ReactTable from 'react-table';
import MatchSorter from 'match-sorter';
import TableHelpers from '../helpers/TableHelpers';
import '../styles/components/UnitTable.css';

class UnitTable extends Component {

    constructor() {
    super();
    this.state = { columns: [
      {
        id: 'name',
        Header: 'Name',
        accessor: n => TableHelpers.getFullName(n.Name),
        filterMethod: (filter, row) => MatchSorter([row[filter.id]], filter.value).length,
      },
      {
        Header: 'Type',
        accessor: 'Type',
        filterMethod: (filter, row) => MatchSorter([row[filter.id]], filter.value).length
      },
      {
        id: 'traits',
        Header: 'Traits',
        accessor: u => TableHelpers.getTraitAccessor(u),
        Cell: props => TableHelpers.getTraitsCellText(props.value),
        filterMethod: (filter, row) => MatchSorter(row[filter.id], filter.value, {keys: ['name']}).length,
        sortMethod: TableHelpers.getTraitSortFunction(),
      },
      {
        id: 'quality',
        Header: 'Quality', //TODO: Fix 0 values dont work
        accessor: u => TableHelpers.getQualityAccessor(u.Experience, u.Elan),
        Cell: props => `${props.value.name} (${props.value.value})`,
        filterMethod: (filter, row) => TableHelpers.filterNamedValue(row[filter.id], filter.value),
        sortMethod: (a,b) => (a.value < b.value) ? -1 : 1,
        maxWidth: 160
      },
      {
        id: 'armour',
        Header: 'Armour',
        accessor: u => TableHelpers.getArmourAccessor(u.BodyArmour),
        Cell: props =>  `${props.value.name} (${props.value.value})`,
        filterMethod: (filter, row) => TableHelpers.filterNamedValue(row[filter.id], filter.value),
        sortMethod: (a, b) => (a.value < b.value) ? -1 : 1,
        maxWidth: 160
      },
      {
        Header: 'AP',
        accessor: 'AP',
        maxWidth: 50,
        style: {'textAlign': 'center'}
      },
      {
        id: 'men',
        Header: 'Men',
        accessor: u => ({'number': u.TotalMen, 'models': u.ManCount}),
        Cell: props => `${props.value.number} (${props.value.models})`,
        sortMethod: (a, b) => (a.number < b.number) ? -1 : 1,
        maxWidth: 70,
        style: {'textAlign': 'center'}
      },
      {
        Header: 'Strength',
        accessor: 'UnitSize',
        maxWidth: 75,
        style: {'textAlign': 'center'}
      },
      {
        Header: 'Cost',
        accessor: 'Cost',
        maxWidth: 50,
        style: {'textAlign': 'center'}
      }]};
  }


  render() {
    return (
    <ReactTable
    data={this.props.units}
    columns={this.state.columns}
    showPagination={false}
    showPaginationTop={false}
    showPaginationBottom={false}
    showPageSizeOptions={false}
    defaultPageSize={100}
    showPageJump={false}
    defaultSorted={[{id: 'Name'}]}
    filterable={true}
    minRows={10}
    getTdProps={this.props.handleClick}
    />
  );
  }
}

export default UnitTable;
