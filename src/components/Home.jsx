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
            {copy.greeting}
            <span>{copy.name}</span>
          </p>

          <h2>{copy.specialty}</h2>

          <p>{copy.introduction}</p>

          <p>{copy.currentJob}</p>
        </article>
      </section>
      <ContactMe />
    </>
  );
};

export default Home;
