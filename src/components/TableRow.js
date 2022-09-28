/* eslint-disable react/prop-types */
import React from 'react';

function TableRow({
  name, description, id, reserveMission, reserved, leaveMission, index,
}) {
  const text = reserved ? 'Active member' : 'Not a member';
  const btn = () => {
    if (reserved) {
      return (
        <button id={id} className="rvBtn" onClick={(e) => leaveMission(e)} type="button">
          Leave Mission
        </button>
      );
    }

    return (
      <button id={id} className="normalBtn" onClick={(e) => reserveMission(e)} type="button">
        Join Mission
      </button>
    );
  };
  return (
    <tr style={{ backgroundColor: index % 2 === 0 ? '#eee' : 'white' }} className="tableRow">
      <td className="flex1">{name}</td>
      <td className="flex5">{description}</td>
      <td className="flex1">
        <div className={reserved ? 'status2' : 'status1'}>{text}</div>
      </td>
      <td className="flex1">{btn()}</td>
    </tr>
  );
}

export default TableRow;
