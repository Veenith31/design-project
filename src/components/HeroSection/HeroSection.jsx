

import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import useScrollPosition from '../../hooks/useScrollPosition';
import './HeroSection.css';
import ComputerModel from '../ComputerModel/ComputerModel';

const HeroSection = () => {
  const scrollPosition = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section id="home" className="hero-section">
      <Navbar 
        isScrolled={scrollPosition > 50} 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
      />
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We Create <span className="highlight">Digital Experiences</span> That People Love
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A creative studio focused on design, technology and innovation. We help brands stand out in the digital age.
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="btn primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
            <motion.button 
              className="btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* 3D Computer Model */}
          <motion.div 
            className="computer-3d-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <ComputerModel simple={false} />
            </Suspense>
          </motion.div>
          
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;