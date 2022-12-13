import React from 'react';
import Navbar from './components/Navbar';
import profilePicture from '../public/profilePicture.jpg';
import './styles.css';

const App = () => {
  return (
    <div className="App">
      <header className="navbarContainer">
        <Navbar />
      </header>

      <article class="aboutMe">
        <figure>
          <img
            src={profilePicture}
            class="picture"
            alt="Picture showing Cesar, smiling with crossed arms in a white button-down shirt against an orange background."
          />
        </figure>

        <div>
          <h2>About Cesar:</h2>
          <p>lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </article>

      <footer></footer>
    </div>
  );
};

export default App;
