import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Services.css';

const ServiceIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const servicesData = [
  {
    title: 'Web Development',
    description: 'We build fast, responsive, and scalable web applications tailored to your business needs.',
    color: 'pink' 
  },
  {
    title: 'UI/UX Design',
    description: 'Our team designs intuitive and beautiful user interfaces that enhance user engagement.',
    color: 'yellow' 
  },
  {
    title: 'Mobile App Development',
    description: 'From iOS to Android, we create seamless mobile experiences for your customers.',
    color: 'orange'
  },
  {
    title: 'Digital Strategy',
    description: 'We help you navigate the digital landscape with data-driven strategies for growth.',
    color: '#f3e5f5' 
  }
];

const cardVariants = {
  offscreen: { 
    y: 100, 
    opacity: 0 
  },
  onscreen: (i) => ({
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.1 
    }
  })
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="services-container" ref={containerRef}>
      <div className="services-timeline">
        <div className="timeline-line-background"></div>
        <motion.div className="timeline-line-progress" style={{ height: timelineHeight }} />
        <div className="timeline-dots-wrapper">
          {servicesData.map((_, index) => {
            const start = index / servicesData.length;
            const color = useTransform(
              scrollYProgress,
              [start - 0.1, start],
              ["#4a5568", "#6366f1"] 
            );
            const scale = useTransform(
              scrollYProgress,
              [start - 0.1, start],
              [1, 1.5] 
            );

            return (
              <motion.div
                className="timeline-dot"
                key={index}
                style={{ backgroundColor: color, scale: scale }}
              />
            );
          })}
        </div>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            custom={index} 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            style={{ '--card-bg-color': service.color }}
          >
            <div className="service-card-icon"><ServiceIcon /></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;