import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-32">
      <AboutSection />
      <TestimonialsSection />
    </main>
  );
};

export default AboutPage;