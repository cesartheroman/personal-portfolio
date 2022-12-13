import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navItem">
        <li>
          <a href="/">HOME</a>
        </li>
      </ul>
      <ul className="links">
        <li className="navItem">
          <a href="">PROJECTS</a>
        </li>
        <li className="navItem">
          <a href="">RESUME</a>
        </li>
        <li className="navItem">
          <a href="">RECOMMENDATIONS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
