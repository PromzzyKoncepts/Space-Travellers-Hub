import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';

function ProfileScreen() {
  const { missions } = useSelector((state) => state.missions);
  const profileMisions = missions.filter((item) => item.reserved === true);
  const toRender = profileMisions.map((item) => (
    <ProfileCard key={item.mission_id} name={item.mission_name} />
  ));
  return (
    <div className="container">
      <Navbar />
      <div className="profileContainer">
        <div className="myMissions">
          <h2>My Missions</h2>
          <div className="cardsContainer">{toRender}</div>
        </div>
        <div className="myRockets">
          <h2>My Rockets</h2>
          <div className="cardsContainer">{toRender}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
