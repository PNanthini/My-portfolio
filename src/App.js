import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronUp, FiLinkedin, FiMail } from 'react-icons/fi';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'expertise', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Fixed Navigation at Top */}
      <Navigation activeSection={activeSection} />
      
      {/* Main Content with padding top to account for fixed nav */}
      <main className="pt-20">
        <Hero id="home" />
        <About id="about" />
        <Expertise id="expertise" />
        <Experience id="experience" />
        <Skills id="skills" />
        <Contact id="contact" />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sneha Raghunathan
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                HR Executive specializing in talent acquisition, payroll management, 
                and employee relations. Committed to creating positive workplace 
                cultures and driving organizational success through people-first strategies.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-3 bg-gray-800/80 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-800/80 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>
            <div className="md:text-right">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 inline-block">
                <p className="text-gray-300 mb-2">© {new Date().getFullYear()} Sneha Raghunathan</p>
                <p className="text-gray-400 text-sm">HR Professional Portfolio</p>
                <div className="mt-4 flex md:justify-end">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-400/30">
                    SHRM Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-200/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <FiLinkedin size={20 + Math.random() * 40} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;