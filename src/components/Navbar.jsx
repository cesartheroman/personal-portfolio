import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="navItem">
          <h1>
            <Link to="/">Cesar Roman</Link>
          </h1>
        </li>

        <li className="navItem">
          <Link to="/projects">PROJECTS</Link>
        </li>

        <li className="navItem">
          <Link to="/recommendations">RECOMMENDATIONS</Link>
        </li>

        <li className="navItem">
          <Link to="/resume">RESUME</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
