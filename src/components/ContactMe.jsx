import React from 'react';

import { copy } from './definitions';

const ContactMe = () => (
  <section className="contactMe">
    <h2>{copy.contactMe.title}</h2>
    <p>{copy.contactMe.body}</p>
    <p>
      <a href="mailto:cesardroman18@gmail.com">{copy.contactMe.buttonText}</a>
    </p>
  </section>
);

export default ContactMe;
