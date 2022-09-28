import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetchRockets } from '../Redux/RocketScreen/rocketscreen';
import Rockets from './Rockets';

function RocketsScreen() {
  const { posts, loading } = useSelector(((state) => state.post));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App">
      <Navbar />
      {posts.map((item) => (
        <Rockets
          key={item.id}
          id={item.id}
          flickr_images={item.flickr_images[0]}
          rocket_name={item.rocket_name}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default RocketsScreen;
