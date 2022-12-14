import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetchRockets } from '../Redux/RocketScreen/rocketscreen';
import Rockets from '../components/Rockets';

function RocketsScreen() {
  const { rockets, loading } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (loading === 'idle') {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      {rockets.map((item) => (
        <Rockets
          key={item.id}
          id={item.id}
          flickr_images={item.flickr_images[0]}
          rocket_name={item.rocket_name}
          description={item.description}
          reserved={item.reserved}
        />
      ))}
    </div>
  );
}

export default RocketsScreen;
