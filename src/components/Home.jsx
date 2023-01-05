import React from 'react';
import { profilePicture } from '../../public';
import { copy } from './definitions';
import ContactMe from './ContactMe';

const Home = () => {
  return (
    <>
      <section className="home">
        <figure className="pictureContainer">
          <img
            src={profilePicture}
            alt="Picture showing Cesar, smiling with crossed arms in a white button-down shirt against an orange background."
          />
        </figure>

        <article className="intro">
          <p className="name">
            {copy.aboutMe.greeting}
            <span>{copy.aboutMe.name}</span>
          </p>

          <h2>{copy.aboutMe.specialty}</h2>

          <p>{copy.aboutMe.introduction}</p>

          <p>{copy.aboutMe.currentJob}</p>
        </article>
      </section>

      <ContactMe />
    </>
  );
};

export default Home;
