import React from 'react';

import { copy } from './definitions';

const ContactMe = () => (
  <div className="sectionPlum">
    <section className="contactMe">
      <h2>{copy.contactMe.title}</h2>
      <p>{copy.contactMe.body}</p>
      <p>
        <a href="mailto:cesardroman18@gmail.com" className="button">
          {copy.contactMe.buttonText}
        </a>
      </p>
    </section>

    <div className="gradient" />
  </div>
);

export default ContactMe;
