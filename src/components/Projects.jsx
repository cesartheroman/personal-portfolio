import React from 'react';

import { copy, projectsCopy } from './definitions';

const Projects = () => (
  <>
    <div className="gradient"></div>

    <div className="sectionDkBlue">
      <section className="projects">
        <h2>{copy.projectsTitle}</h2>

        {projectsCopy.map((project, idx) => {
          const className = idx % 2 !== 0 ? 'reverse' : null;

          return (
            <article className={className} key={project.name}>
              <div className="text">
                <h4>{project.title}</h4>

                <h3>{project.name}</h3>

                <p className="blackBox">{project.description}</p>

                <h4>{project.techUsed}</h4>

                <ul>
                  {project.techUsedList.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <img
                alt={project.screenShotAlt}
                className="projectScreenshots"
                src={project.source}
              ></img>
            </article>
          );
        })}
      </section>
    </div>

    <div className="gradient"></div>
  </>
);

export default Projects;
