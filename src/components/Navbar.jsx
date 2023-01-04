import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <input type="checkbox" id="hamburgerInput" className="burgerShower" />
      <label className="hamburgerMenu" htmlFor="hamburgerInput">
        <nav className="navbar">
          <ul>
            <li className="navItem">
              <Link to="/">HOME</Link>
            </li>
          </ul>
          <ul className="links">
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
      </label>
    </>
  );
};

export default Navbar;
