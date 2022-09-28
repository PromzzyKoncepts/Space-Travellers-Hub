/* eslint-disable camelcase */

import React from 'react';
// import { useDispatch } from 'react-redux';

const Rockets = (item) => {
  const { flickr_images, rocket_name, description } = item;
  console.log(flickr_images);
  return (
    <div className="card-container">
      <div>
        <img src={flickr_images} className="images" alt="rocket" />
      </div>
      <div>
        <h2>{rocket_name}</h2>
        <p>{description}</p>
        <button className="btn" type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rockets;
