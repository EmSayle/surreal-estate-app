import React from 'react';

import '../styles/navBar.css';

const NavBar = () => (
  <div className="navBar">
    <div className="textlogo">
      <i className="fas fa-home fa-4x" />
    </div>
    <div className="nav">
      <h2 className="item">Surreal Estate</h2>
      <button className="button">Add Property</button>
      <button className="button">View Property</button>
    </div>
  </div>
);

export default NavBar;
