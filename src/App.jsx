import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './styles.css';

const App = () => {
  return (
    <div className="App">
      <header className="navbarContainer">
        <Navbar />
      </header>

      <Home />

      <footer></footer>
    </div>
  );
};

export default App;
