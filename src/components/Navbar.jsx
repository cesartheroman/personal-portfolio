import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar">
      <ul class="navItem">
        <li>
          <a href="/">HOME</a>
        </li>
      </ul>
      <ul class="links">
        <li class="navItem">
          <a href="">PROJECTS</a>
        </li>
        <li class="navItem">
          <a href="">RESUME</a>
        </li>
        <li class="navItem">
          <a href="">RECOMMENDATIONS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
