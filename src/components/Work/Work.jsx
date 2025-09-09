import React from 'react';
import { motion } from 'framer-motion';
import './Work.css';

const workData = [
  { title: 'Project Alpha', category: 'Web Development', image: 'https://via.placeholder.com/400x300' },
  { title: 'Project Beta', category: 'UI/UX Design', image: 'https://via.placeholder.com/400x300' },
  { title: 'Project Gamma', category: 'Mobile App', image: 'https://via.placeholder.com/400x300' },
  { title: 'Project Delta', category: 'Branding', image: 'https://via.placeholder.com/400x300' },
];

const Work = () => {
  return (
    <div className="work-grid">
      {workData.map((item, index) => (
        <motion.div
          className="work-item"
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img src={item.image} alt={item.title} />
          <div className="work-item-overlay">
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Work;