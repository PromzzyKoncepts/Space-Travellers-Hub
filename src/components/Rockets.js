/* eslint-disable camelcase */

import React from 'react';
import { useDispatch } from 'react-redux';
import { leaveRocket, reserveRocket } from '../Redux/RocketScreen/rocketscreen';

const Rockets = (item) => {
  const {
    flickr_images, rocket_name, description, id, reserved,
  } = item;
  const dispatch = useDispatch();
  return (
    <div className="card-container">
      <div>
        <img src={flickr_images} className="images" alt="rocket" />
      </div>
      <div>
        <h2>{rocket_name}</h2>
        <p>
          <span
            style={{
              backgroundColor: reserved ? '#007bff' : 'grey',
              color: reserved ? '#fff' : '#000',
              padding: reserved ? '5px 10px' : '0',
              marginRight: reserved ? '10px' : '0',
              borderRadius: reserved ? '5px' : '0',
            }}
          >
            {reserved && 'reserved'}
          </span>
          {description}
        </p>
        <button
          style={{ backgroundColor: reserved ? 'gray' : '#007bff' }}
          className="btn"
          type="button"
          onClick={
            reserved ? dispatch(leaveRocket(id)) : dispatch(reserveRocket(id))
          }
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default Rockets;
