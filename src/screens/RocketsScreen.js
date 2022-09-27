import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { fetchRockets } from '../Redux/RocketScreen/rocketscreen';

function RocketsScreen() {
  const { posts, loading } = useSelector(((state) => state.post));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>
  }
  return (
    <div className="App">
      <Navbar />
      {posts.map((item) => (
        <h2>{item.id}</h2>
        // <h1>good</h1>
      ))}
    </div>
  );
}

export default RocketsScreen;
