import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const Section = ({ id, title, subtitle, background = 'dark', children }) => {
  return (
    <section id={id} className={`section ${background === 'light' ? 'light' : 'dark'}`}>
      <motion.div 
        className="section-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
        
        <div className="section-body">
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default Section;