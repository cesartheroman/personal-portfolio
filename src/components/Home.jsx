import React from 'react';
import { profilePicture } from '../../public';

const Home = () => {
  return (
    <section className="home">
      <figure className="pictureContainer">
        <img
          src={profilePicture}
          alt="Picture showing Cesar, smiling with crossed arms in a white button-down shirt against an orange background."
        />
      </figure>

      <div className="aboutMe">
        <h2>About Cesar:</h2>
        <p>lorem ipsum dolor sit amet, consectetur</p>
      </div>
    </section>
  );
};

export default Home;
