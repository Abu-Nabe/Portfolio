import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './design/Home';
import Experience from './design/Experience';
// import Skills from './design/Skills';
// import Contact from './design/Contact';

import Error from './design/Error';

function App() {
  return (
    <Router>
      <div className="App">
        
      </div>
        <Routes>
          <Route path="/experience" element={<Experience />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />}/>
        </Routes>
    </Router>
  );
}

export default App;