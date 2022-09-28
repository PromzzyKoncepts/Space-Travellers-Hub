import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../Redux/MissionScreen/missionscreen';
import TableRow from '../components/TableRow';

function MissionsScreen() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions())
  }, [])
  console.log(missions);
  return (
    <div className="App">
      <Navbar />
      <div className="tableContainer">
        <table className="table">
          <tr className="tableRow">
            <th className="tableHeader flex1">
              Missions
            </th>
            <th className="tableHeader flex5">
              Description
            </th>
            <th className="tableHeader flex1">
              Status
            </th>
            <th className="tableHeader flex1"></th>
          </tr>
          <TableRow name="new" description="Hello" status="no" />
        </table>
      </div>
    </div>
  );
}

export default MissionsScreen;
