import logoImg from '../resources/img/planet.png';
import React from 'react';

function Navbar(props) {
  return (
    <nav className="navBar">
      <div className="logoContainer">
      <img className="logo" alt="logo" src={logoImg} />
      <p className="logoText">Space Travelers Hub</p>

      </div>
      <ul className="navigationContainer">
        <li className="navigationItem"> Item</li>
        <li className="navigationItem">Item</li>
      </ul>
    </nav>
  );
}

export default Navbar;