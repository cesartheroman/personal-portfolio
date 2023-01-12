import React from 'react';
import { Link } from 'react-router-dom';
import { ResumeModal } from '.';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <ul>
        <li>
          <h1>
            <Link to="/">
              <FontAwesomeIcon icon={faLaptopCode} className="nameIcon" />
              {'  '}
              <span>Cesar Roman</span>
            </Link>
          </h1>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/recommendations">Recommendations</Link>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/cesartheroman/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="brandIcon" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>

        <li>
          <a href="https://github.com/cesartheroman" target="_blank">
            <FontAwesomeIcon icon={faSquareGithub} className="brandIcon" />
            <span className="sr-only">GitHub</span>
          </a>
        </li>

        <li>
          <ResumeModal />
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
