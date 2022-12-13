import React from 'react';
import profilePicture from '../../public';

const Home = () => {
  return (
    <article className="home">
      <figure className="pictureContainer">
        <img
          className="picture"
          src={profilePicture}
          alt="Picture showing Cesar, smiling with crossed arms in a white button-down shirt against an orange background."
        />
      </figure>

      <section className="aboutMe">
        <h2>About Cesar:</h2>
        <p>lorem ipsum dolor sit amet, consectetur</p>
      </section>
    </article>
  );
};

export default Home;
