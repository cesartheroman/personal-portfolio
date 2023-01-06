import React from 'react';

import { indyPhoto } from '../../public';

const AboutMe = () => (
  <>
    <div className="sectionDkBlue">
      <section className="projects">
        <h2>About Cesar</h2>

        <article>
          <div className="text">
            <h3>Just the highlights</h3>

            <p className="blackBox">
              Libero non cum aperiam dolor voluptate in sed illo. Repellat est
              soluta similique ipsa. Omnis aut quasi beatae quaerat deleniti
              suscipit. Aut ratione pariatur ratione quas. Quam rem omnis nihil
              officia non.
            </p>

            <h4>My favorite technologies include:</h4>

            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <img
            src={indyPhoto}
            className="projectScreenshots"
            alt="Photo of Cesar, leaning against a giant football helmet outside."
          ></img>
        </article>
      </section>
    </div>
    <div className="gradient"></div>
  </>
);

export default AboutMe;
