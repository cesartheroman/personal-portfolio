import React from 'react';

import { profilePicture } from '../../public';
import { copy } from './definitions';

const Intro = () => (
  <section className="home">
    <article className="intro">
      <p className="name introText">
        {copy.aboutMe.greeting}
        <span>{copy.aboutMe.name}</span>
      </p>
      <figure className="pictureContainerMobile">
        <img
          src={profilePicture}
          className="profilePicture"
          alt="Picture showing Cesar, smiling with crossed arms in a white button-down shirt against an orange background."
        />
      </figure>
      <div className="introText">
        <h2>{copy.aboutMe.introduction}</h2>

        <p>{copy.aboutMe.specialty}</p>

        <p>{copy.aboutMe.currentJob}</p>
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
