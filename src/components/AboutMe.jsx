import React from 'react';

import { indyPhoto } from '../../public';
import { copy } from '../components/definitions';

const AboutMe = () => (
  <div className="sectionDkBlue">
    <section className="aboutMe">
      <h2>{copy.aboutMe.title}</h2>

      <article>
        <div className="text">
          <h3>{copy.aboutMe.bodyTitle}</h3>

          <div className="blackBox aboutMeText">
            <span>
              {copy.aboutMe.line1}

              <a href="https://www.hubspot.com/" target="_blank">
                HubSpot
              </a>

              {copy.aboutMe.line2}
            </span>

            <p>
              {copy.aboutMe.line3}

              <a href="https://www.galvanize.com/hack-reactor/" target="_blank">
                Hack Reactor
              </a>

              {copy.aboutMe.line4}
              <a href="https://www.leanix.net/en/" target="_blank">
                LeanIX
              </a>

              {copy.aboutMe.line5}
            </p>

            <p>
              {copy.aboutMe.line6}

              <a
                href="https://www.twilio.com/en-us/company/diversity/hatch"
                target="_blank"
              >
                Twilio's Hatch Apprenticeship Program
              </a>

              {copy.aboutMe.line7}
            </p>

            <p>{copy.aboutMe.line8}</p>
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

export default AboutMe;
