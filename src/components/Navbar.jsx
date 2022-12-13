import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navItem">
        <li>
          <Link to="/">HOME</Link>
        </li>
      </ul>
      <ul className="links">
        <li className="navItem">
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li className="navItem">
          <Link to="/resume">RESUME</Link>
        </li>
        <li className="navItem">
          <Link to="/recommendations">RECOMMENDATIONS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
