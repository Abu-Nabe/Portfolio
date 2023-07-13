import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './design/Home';
import Experience from './design/Experience';
import Skills from './design/Skills';
import Contact from './design/Contact';

import PreloadImages from "./extension/preloadImages";
import ExperiencePreloader from './extension/portfolioPreloader';
import SkillsPreloader from './extension/skillsPreloader';

import Error from './design/Error';

function App() {
  return (
    <Router>
      <div className="App">
        
      </div>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />}/>
        </Routes>
    </Router>
  );
}

export default App;