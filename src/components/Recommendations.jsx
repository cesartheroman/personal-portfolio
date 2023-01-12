import React from 'react';
import { copy, recommendationsCopy } from '../components/definitions';

const Recommendations = () => (
  <>
    <div className="gradient"></div>

    <div className="sectionDkBlue">
      <section className="recommendations">
        <h2>{copy.recommendationsTitle}</h2>

        {recommendationsCopy.map((recommendation, idx) => {
          const recommendationsParagraph = recommendation.text.split('\n');
          const className = idx % 2 !== 0 ? 'reverse' : null;

          return (
            <article className={className} key={recommendation.name}>
              <div className="recDetails">
                <a href={recommendation.linkedInUrl} target="_blank">
                  <img
                    alt={recommendation.profilePictureAlt}
                    className="recommendationsPhoto"
                    src={recommendation.profilePictureUrl}
                  ></img>
                </a>

                <h3>{recommendation.name}</h3>

                <h4>{recommendation.role}</h4>

                <a href={recommendation.companyUrl} target="_blank">
                  <img
                    alt={recommendation.company}
                    src={recommendation.companyLogo}
                    className="companyLogo"
                  ></img>
                </a>
              </div>

              <div className="text">
                <div className="blackBox">
                  {recommendationsParagraph.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>

    <div className="gradient"></div>
  </>
);

export default Recommendations;
