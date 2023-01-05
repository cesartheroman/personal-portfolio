import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { copy } from '../components/definitions';

const Footer = () => (
  <footer className="footer">
    <h2>{copy.footer.title}</h2>
    <ul>
      <li>
        <FontAwesomeIcon icon={faLinkedin} />
      </li>
      <li>
        <FontAwesomeIcon icon={faSquareGithub} />
      </li>{' '}
      <li>
        <FontAwesomeIcon icon={faEnvelope} />
      </li>{' '}
    </ul>
    <p>{copy.footer.ending}</p>
  </footer>
);

export default Footer;
