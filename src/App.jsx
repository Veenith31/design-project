import React from 'react';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'; 

function App() {
  return (
    <div className="App">
      <ScrollIndicator /> 
      <HeroSection />
      <Section 
        id="services" 
        title="Our Services" 
        subtitle="We offer a wide range of digital services designed to elevate your brand and engage your audience."
        background="dark"
      >
        <Services />
      </Section>
      <Section 
        id="work" 
        title="Our Work" 
        subtitle="See our latest projects and case studies that showcase our commitment to excellence and innovation."
        background="light"
      >
        <Work />
      </Section>
    </div>
  );
}

export default App;