/* eslint-disable camelcase */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { leaveRocket, reserveRocket } from "../Redux/RocketScreen/rocketscreen";

const Rockets = (item) => {
  const { flickr_images, rocket_name, description, id, reserved } = item;
  const dispatch = useDispatch();
  return (
    <div className="card-container">
      <div>
        <img src={flickr_images} className="images" alt="rocket" />
      </div>
      <div>
        <h2>{rocket_name}</h2>
        <p>
          {reserved && "reserved"}
          {description}
        </p>
        <button
          style={{ backgroundColor: reserved ? "gray" : "blue" }}
          className="btn"
          type="button"
          onClick={() => {
            reserved ? dispatch(leaveRocket(id)) : dispatch(reserveRocket(id));
          }}
        >
          {reserved ? "Cancel Reservation" : "Reserve Rocket"}
        </button>
      </div>
    </div>
  );
};

export default Rockets;
