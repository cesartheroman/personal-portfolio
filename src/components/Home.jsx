import React from 'react';

import { Intro, AboutMe, ContactMe } from '.';

const Home = () => (
  <>
    <Intro />
    <div className="gradient"></div>
    <AboutMe />
    <div className="gradient"></div>
    <ContactMe />
    <div className="gradient"></div>
  </>
);

export default Home;
