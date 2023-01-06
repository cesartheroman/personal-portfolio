import React from 'react';

import { portfolioScreenshot, pulsarShop } from '../../public/index';

const Projects = () => {
  return (
    <>
      <div className="gradient"></div>
      <div className="sectionDkBlue">
        <section className="projects">
          <h2>Projects I'm proud of</h2>

          <article>
            <div className="text">
              <h4>Latest Project</h4>

              <h3>This portfolio site!</h3>

              <p className="blackBox">
                Libero non cum aperiam dolor voluptate in sed illo. Repellat est
                soluta similique ipsa. Omnis aut quasi beatae quaerat deleniti
                suscipit. Aut ratione pariatur ratione quas. Quam rem omnis
                nihil officia non.
              </p>

              <h4>Technologies Used:</h4>

              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            <img
              src={portfolioScreenshot}
              className="projectScreenshots"
              alt="Screenshot of portfolio website"
            ></img>
          </article>

          <article className="reverse">
            <div className="text">
              <h4>Bootcamp Project</h4>

              <h3>Pulsar Shop</h3>

              <p className="blackBox">
                Libero non cum aperiam dolor voluptate in sed illo. Repellat est
                soluta similique ipsa. Omnis aut quasi beatae quaerat deleniti
                suscipit. Aut ratione pariatur ratione quas. Quam rem omnis
                nihil officia non.
              </p>

              <h4>Technologies Used:</h4>

              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            <img
              src={pulsarShop}
              className="projectScreenshots"
              alt="Screenshot of Pulsar Shop website"
            ></img>
          </article>
        </section>
      </div>
      <div className="gradient"></div>
    </>
  );
};

export default Projects;
