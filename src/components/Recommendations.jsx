import React from 'react';
import recommendations from './definitions/recommendationsCopy';

const Recommendations = () => {
  return (
    <div>
      {recommendations.map((recommendation) => {
        const recommendationSplits = recommendation.text.split('\n');
        console.log(recommendation.text.split('\n'));
        return (
          <div key={recommendation.name}>
            <a target="_blank" href={recommendation.linkedInUrl}>
              <img src={recommendation.profilePictureUrl} className="picture" />
            </a>
            <h1>{recommendation.name}</h1>
            <h3>{recommendation.role}</h3>
            <h3>{recommendation.company}</h3>
            {recommendationSplits.map((paragraph) => {
              return <p>{paragraph}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Recommendations;
