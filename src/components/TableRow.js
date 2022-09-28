/* eslint-disable react/prop-types */
import React from 'react';

function TableRow({
  name, description, id, reserveMission, reserved, leaveMission,
}) {
  const text = reserved ? 'Active member' : 'Not a member';
  const btn = () => {
    if (reserved) {
      return (
        <button id={id} onClick={(e) => leaveMission(e)} type="button">
          Leave Mission
        </button>
      );
    }

    return (
      <button id={id} onClick={(e) => reserveMission(e)} type="button">
        Join Mission
      </button>
    );
  };
  return (
    <tr className="tableRow">
      <td className="flex1">{name}</td>
      <td className="flex5">{description}</td>
      <td className="flex1">
        <div className="status">{text}</div>
      </td>
      <td className="flex1">{btn()}</td>
    </tr>
  );
}

export default TableRow;
