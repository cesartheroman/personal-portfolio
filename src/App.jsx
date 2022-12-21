import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar, Home, Resume, NotFound } from './components';

import './styles.css';

const App = () => {
  return (
    <div className="App">
      <header className="navbarContainer">
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/recommendations" element={<Recommendations />} /> */}
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer></footer>
    </div>
  );
};

export default App;
