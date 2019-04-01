import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navBar.css';

const NavBar = () => (
  <div className="navBar">
    <div className="textlogo">
      <i className="fas fa-home fa-4x" />
    </div>
    <div className="nav">
      <h2 className="item">Surreal Estate</h2>
      <Link to="/add-property"><button className="button">Add Property</button></Link>
      <Link to="/"><button className="button">View Property</button></Link>
    </div>
  </div>
);

export default NavBar;
