import React from 'react';

import { profilePicture } from '../../public';
import { copy } from './definitions';

const Intro = () => (
  <section className="home">
    <article className="intro">
      <p className="name introText">
        {copy.intro.greeting}
        <span>{copy.intro.name}</span>
      </p>
      <figure className="pictureContainerMobile">
        <img
          src={profilePicture}
          className="profilePicture"
          alt="Picture showing Cesar, smiling with crossed arms in a white button-down shirt against an orange background."
        />
      </figure>
      <div className="introText">
        <h2>{copy.intro.introduction}</h2>

        <p>{copy.intro.specialty}</p>

        <p>{copy.intro.currentJob}</p>
      </div>
    </article>

    <figure className="pictureContainerDesktop">
      <img
        src={profilePicture}
        className="profilePicture"
        alt="Picture showing Cesar, smiling with crossed arms in a white button-down shirt against an orange background."
      />
    </figure>
  </section>
);

export default Intro;
