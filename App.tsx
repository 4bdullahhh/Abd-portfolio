import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';

// AnimatedRoutes component to handle useLocation hook inside Router context
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden selection:bg-purple-900 selection:text-white transition-colors duration-300">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;