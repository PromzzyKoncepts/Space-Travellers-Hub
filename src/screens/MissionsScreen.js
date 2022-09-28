import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { getMissions } from '../Redux/MissionScreen/missionscreen';
import TableRow from '../components/TableRow';

function MissionsScreen() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  let renderMissions = null;
  if (missions.length > 0) {
    renderMissions = missions.map((item) => (
      <TableRow key={item.mission_id} name={item.mission_name} description={item.description} />
    ));
  }
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="tableContainer">
        <table className="table">
          <tr className="tableRow">
            <th className="tableHeader flex1">Missions</th>
            <th className="tableHeader flex5">Description</th>
            <th className="tableHeader flex1">Status</th>
            <th className="tableHeader flex1" aria-label="label" />
          </tr>
          {renderMissions}
        </table>
      </div>
    </div>
  );
}

export default MissionsScreen;
