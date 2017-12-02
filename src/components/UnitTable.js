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
        Header: 'Name', //TODO: Renaming util
        accessor: 'Name',
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
        Cell: props => TableHelpers.getNamedValueCellText(props.value),
        filterMethod: (filter, row) => TableHelpers.filterNamedValue(row[filter.id], filter.value),
        sortMethod: (a,b) => (a.value < b.value) ? -1 : 1,
        maxWidth: 160
      },
      {
        id: 'armour',
        Header: 'Armour',
        accessor: u => TableHelpers.getArmourAccessor(u.BodyArmour),
        Cell: props => TableHelpers.getNamedValueCellText(props.value),
        filterMethod: (filter, row) => TableHelpers.filterNamedValue(row[filter.id], filter.value),
        sortMethod: (a,b) => (a.value < b.value) ? -1 : 1,
        maxWidth: 160
      },
      {
        Header: 'AP',
        accessor: 'AP',
        maxWidth: 50,
        style: {'textAlign': 'center'}
      },
      {
        Header: 'Men',
        accessor: 'TotalMen',
        maxWidth: 50,
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
