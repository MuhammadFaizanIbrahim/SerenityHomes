import React from 'react';
import ProductsSection from '../components/sections/ProductsSection';

const ProductsPage: React.FC = () => {
  return (
    <main className="pt-32 bg-gradient-to-r from-serenity-pink via-white to-serenity-mint">
      <ProductsSection />
    </main>
  );
};

export default ProductsPage;