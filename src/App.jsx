import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Home,
  Footer,
  Navbar,
  NotFound,
  Projects,
  Recommendations,
} from './components';

import './styles.css';

const App = () => (
  <div className="App">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
