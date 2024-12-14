import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Ensure the file name matches this import
import About from './pages/About'; // Ensure the file name matches this import
import Services from './pages/Services'; // Ensure the file name matches this import
import Contact from './pages/Contact'; // Ensure the file name matches this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
