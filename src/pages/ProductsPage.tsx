import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProducts(data);
    }
  };

  return (
    <main className="pt-32 pb-16 bg-gradient-to-r from-serenity-pink via-white to-serenity-mint">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-4">Our Products</h1>
          <p className="text-stone-600">
            Discover our carefully curated collection of beautiful home decor pieces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 bg-stone-100">
                <img 
                  src={product.image_url} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-stone-800">{product.name}</h3>
                <p className="text-stone-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;