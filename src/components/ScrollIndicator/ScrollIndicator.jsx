import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';

const sections = ['home', 'services', 'work'];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine which section is in view
      const currentSection = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="scroll-indicator-nav">
      <ul>
        {sections.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`dot ${activeSection === id ? 'active' : ''}`}
              aria-label={`Go to ${id} section`}
            ></a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ScrollIndicator;