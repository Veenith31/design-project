import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ isScrolled, isMenuOpen, toggleMenu }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    {
      name: 'Services',
      href: '#services',
      children: [
        { name: 'Web Development', href: '#', description: 'Crafting modern web experiences.' },
        { name: 'App Development', href: '#', description: 'Building native and hybrid apps.' },
        { name: 'UI/UX Design', href: '#', description: 'Designing intuitive user interfaces.' },
      ]
    },
    { name: 'Work', href: '#work' },
    {
      name: 'About',
      href: '#about',
      children: [
        { name: 'About Us.', href: '#', description: 'We are super-efficient yet humble to serve you!' },
        { name: 'Team.', href: '#', description: 'We are proud of our experienced team' },
        { name: 'Career.', href: '#', description: 'Can you offer such experience?' },
      ]
    },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>Leo9</span>Studio
        </motion.div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.div 
              key={index}
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={item.href} className="nav-link">
                {item.name}
                {item.children && <span className="dropdown-arrow">▼</span>}
              </a>
              {item.children && (
                <div className="dropdown-menu">
                  {item.children.map((child, childIndex) => (
                    <a href={child.href} key={childIndex} className="dropdown-item">
                      <div className="dropdown-item-content">
                        <h3>{child.name}</h3>
                        <p>{child.description}</p>
                      </div>
                      <span className="arrow-icon">→</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;