/* eslint-disable react/prop-types */
import React from 'react';

function TableRow({ name, description }) {
  return (
    <tr className="tableRow">
      <td className="flex1">{name}</td>
      <td className="flex5">{description}</td>
      <td className="flex1">
        <div className="status">Not a member</div>
      </td>
      <td className="flex1">
        <button type="button"> Join </button>
      </td>
    </tr>
  );
}

export default TableRow;
