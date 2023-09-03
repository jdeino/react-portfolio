import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Header from './components/header';
import AboutMe from './components/aboutme';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Contact from './components/contact';
import Resume from './components/resume'; 
import './app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} /> 
          <Route index element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
