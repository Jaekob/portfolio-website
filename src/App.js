import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FullStackDevelopment from './pages/blog/FullStackDevelopment';
import PreparingForJapan from './pages/blog/PreparingForJapan';
import SoftwareEngineeringLessons from './pages/blog/SoftwareEngineeringLessons';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/blog/preparing-for-japan" element={<PreparingForJapan />} />
        <Route path="/blog/software-engineering-lessons" element={<SoftwareEngineeringLessons />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
