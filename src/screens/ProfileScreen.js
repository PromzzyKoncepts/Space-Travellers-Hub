import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/ProfileCard';

function ProfileScreen() {
  const { missions } = useSelector((state) => state.missions);
  const { posts } = useSelector((state) => state.post);
  const profileMisions = missions.filter((item) => item.reserved === true);
  const profileRockets = posts.filter((item) => item.reserved === true);
  const missionstoRender = profileMisions.map((item) => (
    <ProfileCard key={item.mission_id} name={item.mission_name} />
  ));
  const rocketsToRender = profileRockets.map((item) => (
    <ProfileCard key={item.id} name={item.rocket_name} />
  ));
  return (
    <div className="container">
      <Navbar />
      <div className="profileContainer">
        <div className="myMissions">
          <h2>My Missions</h2>
          <div className="cardsContainer">{missionstoRender}</div>
        </div>
        <div className="myRockets">
          <h2>My Rockets</h2>
          <div className="cardsContainer">{rocketsToRender}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
