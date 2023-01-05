import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { copy } from '../components/definitions';

const Footer = () => (
  <footer>
    <h2>{copy.footer.title}</h2>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/cesartheroman/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className="sr-only">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/cesartheroman" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} />
          <span className="sr-only">GitHub</span>
        </a>
      </li>
      <li>
        <a href="mailto:cesardroman18@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
    </ul>
    <p>
      <small>{copy.footer.ending}</small>
    </p>
  </footer>
);

export default Footer;
