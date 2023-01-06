import React from 'react';

import { indyPhoto } from '../../public';
import { copy } from '../components/definitions';

const AboutMe = () => (
  <div className="sectionDkBlue">
    <section className="projects">
      <h2>{copy.aboutMe.title}</h2>

      <article>
        <div className="text">
          <h3>{copy.aboutMe.bodyTitle}</h3>

          <p className="blackBox">{copy.aboutMe.body}</p>

          <h4>{copy.aboutMe.techIntro}</h4>

          <ul>
            {copy.aboutMe.techBody.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <img
          src={indyPhoto}
          className="projectScreenshots"
          alt={copy.imageInfo.aboutMe}
        ></img>
      </article>
    </section>
  </div>
);

export default AboutMe;
