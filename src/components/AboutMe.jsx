import React from 'react';

import { indyPhoto } from '../../public';
import { copy } from '../components/definitions';

const AboutMe = () => {
  const aboutMeParagraphs = copy.aboutMe.body.split('\n');

  return (
    <div className="sectionDkBlue">
      <section className="aboutMe">
        <h2>{copy.aboutMe.title}</h2>

        <article>
          <div className="text">
            <h3>{copy.aboutMe.bodyTitle}</h3>

            <div className="blackBox aboutMe">
              {aboutMeParagraphs.map((para) => (
                <p>{para}</p>
              ))}
            </div>

            <h4>{copy.aboutMe.techIntro}</h4>

            <ul>
              {copy.aboutMe.techBody.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <img
            src={indyPhoto}
            className="aboutMePhoto"
            alt={copy.imageInfo.aboutMe}
          ></img>
        </article>
      </section>
    </div>
  );
};

export default AboutMe;
