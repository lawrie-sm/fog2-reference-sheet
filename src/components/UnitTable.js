import React, { Component } from 'react';
import ReactTable from 'react-table';
import MatchSorter from 'match-sorter';
import TableUtils from '../utils/TableUtils';

class UnitTable extends Component {
  
  constructor() {
    super();
    this.state = { columns: [
      {
        Header: 'Name', //TODO: Renaming util
        accessor: 'Name',
        filterable: true
      },
      {
        Header: 'Type',
        accessor: 'Type',
        filterable: true,
      },
      {
        id: 'traits',
        Header: 'Traits',
        accessor: u => TableUtils.getTraits(u),
        Cell: props => TableUtils.getTraitsCellText(props.value),
        filterable: true,
        filterMethod: (filter, row) => MatchSorter(row[filter.id], filter.value, {keys: ['name']}).length,
        sortMethod: TableUtils.getTraitSortFunction(),
        minWidth: 200,
      },
      {
        id: 'quality',
        Header: 'Quality',
        accessor: u => (u.Experience + u.Elan) / 2,
        Cell: props => TableUtils.getQualityCellText(props.value),
      },
      {
        id: 'armour',
        Header: 'Armour',
        accessor: 'BodyArmour',
        Cell: props => TableUtils.getArmourCellText(props.value),
      },
      {
        Header: 'AP',
        accessor: 'AP',
        maxWidth: 75
      },
      {
        Header: 'Men',
        accessor: 'TotalMen',
        maxWidth: 75
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
        maxWidth: 75
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
    defaultSorted={[{id: "Type"}]}
    />
  );
  }
}

export default UnitTable;
