import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../Redux/MissionScreen/missionscreen';

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
    </div>
  );
}

export default MissionsScreen;
