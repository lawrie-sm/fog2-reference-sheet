import React, { Component } from 'react';
import ReactTable from 'react-table';
import MatchSorter from 'match-sorter';
import TableUtils from '../utils/TableUtils';
import '../styles/react-table.css';

class UnitTable extends Component {
  
  constructor() {
    super();
    this.state = { columns: [
      {
        Header: 'Name', //TODO: Renaming util
        accessor: 'Name',
        filterMethod: TableUtils.filterCaseInsensitive()
      },
      {
        Header: 'Type',
        accessor: 'Type',
        filterMethod: TableUtils.filterCaseInsensitive()
      },
      {
        id: 'traits',
        Header: 'Traits',
        accessor: u => TableUtils.getTraitAccessor(u),
        Cell: props => TableUtils.getTraitsCellText(props.value),
        filterMethod: (filter, row) => MatchSorter(row[filter.id], filter.value, {keys: ['name']}).length,
        sortMethod: TableUtils.getTraitSortFunction(),
      },
      {
        id: 'quality',
        Header: 'Quality', //TODO: Fix 0 values dont work
        accessor: u => TableUtils.getQualityAccessor(u.Experience, u.Elan),
        Cell: props => TableUtils.getNamedValueCellText(props.value),
        filterMethod: (filter, row) => TableUtils.filterNamedValue(row[filter.id], filter.value),
        sortMethod: (a,b) => (a.value < b.value) ? -1 : 1
      },
      {
        id: 'armour',
        Header: 'Armour',
        accessor: u => TableUtils.getArmourAccessor(u.BodyArmour),
        Cell: props => TableUtils.getNamedValueCellText(props.value),
        filterMethod: (filter, row) => TableUtils.filterNamedValue(row[filter.id], filter.value),
        sortMethod: (a,b) => (a.value < b.value) ? -1 : 1
      },
      {
        Header: 'AP',
        accessor: 'AP',
        maxWidth: 50
      },
      {
        Header: 'Men',
        accessor: 'TotalMen',
        maxWidth: 50
      },
      {
        Header: 'Strength',
        accessor: 'UnitSize',
        maxWidth: 75
      },
      /*{
        Header: 'Stealthy',
        accessor: 'ViewFlags',
        Cell: props => <span>{(props.value === 1) ? 'Yes' : 'No'}</span>
      },*/
      {
        Header: 'Cost',
        accessor: 'Cost',
        maxWidth: 50
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
    defaultSorted={[{id: 'Type'}]}
    filterable={true}
    minRows={10}
    />
  );
  }
}

export default UnitTable;
