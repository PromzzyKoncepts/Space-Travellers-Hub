import React from 'react';
import { NavLink } from 'react-router-dom';

import logoImg from '../resources/img/planet.png';

function Navbar() {
  return (
    <nav className="navBar">
      <div className="logoContainer">
        <img className="logo" alt="logo" src={logoImg} />
        <p className="logoText">Space Travelers Hub</p>
      </div>
      <ul className="navigationContainer">
        <li className="navigationItem">
          <NavLink
            className="navLink"
            to="/"
            end
            style={({ isActive }) => ({
              color: isActive ? '#00D7C6' : 'none',
              fontWeight: isActive ? '900' : 'regular',
              fontSize: isActive ? '20px' : 'regular',
            })}
          >
            Rockets
          </NavLink>
        </li>
        <li className="navigationItem">
          <NavLink
            className="navLink"
            to="/missions"
            style={({ isActive }) => ({
              color: isActive ? '#00D7C6' : 'none',
              fontWeight: isActive ? '900' : 'regular',
              fontSize: isActive ? '20px' : 'regular',
            })}
          >
            Missions
          </NavLink>
        </li>
        <li className="navigationItem">
          <NavLink
            className="navLink"
            to="/profile"
            style={({ isActive }) => ({
              color: isActive ? '#00D7C6' : 'none',
              fontWeight: isActive ? '900' : 'regular',
              fontSize: isActive ? '20px' : 'regular',
            })}
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
