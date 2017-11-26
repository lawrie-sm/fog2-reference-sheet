import React, { Component } from 'react';
import ReactTable from 'react-table';
import MatchSorter from 'match-sorter';
import UnitData from '../data/UnitData';
import TableUtils from '../utils/TableUtils';

class UnitTable extends Component {
  
  render() {
    const columns = [
      {
        Header: 'Name', //TODO: Renaming util
        accessor: 'Name',
        filterable: true
      },
      {
        Header: 'Type',
        accessor: 'Type',
        filterable: true
      },
      {
        id: 'traits',
        Header: 'Traits',
        accessor: u => TableUtils.getTraits(u),
        Cell: props => TableUtils.getTraitsCellText(props.value),
        filterable: true,
        filterMethod: (filter, row) => MatchSorter(row[filter.id], filter.value, {keys: ['name']}).length,
        minWidth: 200
      },
      {
        id: 'quality',
        Header: 'Quality',
        accessor: u => (u.Experience + u.Elan) / 2,
        Cell: props => <span>{TableUtils.getQualityCellText(props.value)}</span>
      },
      {
        id: 'armour',
        Header: 'Armour',
        accessor: 'BodyArmour',
        Cell: props => <span>{TableUtils.getArmourCellText(props.value)}</span>,
      },
      {
        Header: 'AP',
        accessor: 'AP',
        maxWidth: 50
      },
      {
        Header: 'Men',
        accessor: 'TotalMen',
        maxWidth: 60
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
      },
    ];

    return (
    <ReactTable
    data={UnitData}
    columns={columns}
    showPagination={false}
    showPaginationTop={false}
    showPaginationBottom={false}
    showPageSizeOptions={false}
    defaultPageSize={100}
    showPageJump={false}
    />
  );
  }
}

export default UnitTable;
