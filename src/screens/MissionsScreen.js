import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { getMissions, reserve, leave } from '../Redux/MissionScreen/missionscreen';
import TableRow from '../components/TableRow';

function MissionsScreen() {
  const { missions, loading } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const reserveMission = (e) => {
    dispatch(reserve(e.target.id, missions));
  };

  const leaveMission = (e) => {
    dispatch(leave(e.target.id, missions));
  };

  let renderMissions = null;
  if (missions && missions.length > 0) {
    renderMissions = missions.map((item) => (
      <TableRow
        key={item.mission_id}
        name={item.mission_name}
        id={item.mission_id}
        description={item.description}
        reserved={item.reserved}
        reserveMission={reserveMission}
        leaveMission={leaveMission}
      />
    ));
  }
  useEffect(() => {
    if (loading === 'idle') {
      dispatch(getMissions());
    }
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
