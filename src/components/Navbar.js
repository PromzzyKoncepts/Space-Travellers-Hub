import logoImg from '../resources/img/planet.png';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
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
              textDecoration: isActive ? 'underline' : 'none',
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
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Missions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
