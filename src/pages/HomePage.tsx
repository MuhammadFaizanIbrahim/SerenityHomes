import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProductsSection from '../components/sections/ProductsSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import AboutSection from '../components/sections/AboutSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import NewsletterSection from '../components/sections/NewsletterSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <div data-aos="fade-up">
        <ProductsSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <CategoriesSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <AboutSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <TestimonialsSection />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <NewsletterSection />
      </div>
    </main>
  );
};

export default HomePage;