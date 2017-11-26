import React from 'react';
import TableUtils from '../utils/TableUtils';

const UnitRow = ({unit}) => (
  <tr>
    <td>{unit.Name}</td>
    <td>{unit.AP}</td>
    <td>{TableUtils.getArmourLine(unit.BodyArmour)}</td>
    <td>{TableUtils.getQualityLine(unit.Experience, unit.Elan)}</td>
    <td>{unit.TotalMen}</td>
    <td>{unit.UnitSize}</td>
    <td>{(unit.ViewFlags === "1") ? "Yes" : "No"}</td>
    <td>{TableUtils.getTraitsLine(unit)}</td>
    <td>{unit.Cost}</td>
  </tr>
);

export default UnitRow;