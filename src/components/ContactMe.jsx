import React from 'react';
import { copy } from './definitions';

const ContactMe = () => (
  <section className="contactMe">
    <h2>{copy.contactMeTitle}</h2>
    <p>{copy.contactMeBody}</p>
    <p>
      <a href="mailto:cesardroman18@gmail.com">{copy.contactMeButton}</a>
    </p>
  </section>
);

export default ContactMe;
