import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Artisan Ceramic Vase',
    category: 'Decor',
    price: '$89',
    image: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 2,
    name: 'Linen Throw Pillow',
    category: 'Textiles',
    price: '$45',
    image: 'https://images.pexels.com/photos/6444368/pexels-photo-6444368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 3,
    name: 'Wooden Table Lamp',
    category: 'Lighting',
    price: '$129',
    image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 4,
    name: 'Woven Wall Hanging',
    category: 'Wall Art',
    price: '$75',
    image: 'https://images.pexels.com/photos/6207774/pexels-photo-6207774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4 bg-stone-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute bottom-4 right-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-amber-50">
            <ArrowRight className="h-5 w-5 text-amber-800" />
          </div>
        </div>
      </div>
      <div>
        <span className="text-sm text-amber-700">{product.category}</span>
        <h3 className="font-serif text-lg font-medium text-stone-800">{product.name}</h3>
        <p className="text-stone-600">{product.price}</p>
      </div>
      <Link to={`/product/${product.id}`} className="absolute inset-0"></Link>
    </div>
  );
};

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-4">Featured Products</h2>
          <p className="text-stone-600">
            Curated pieces that blend form and function to elevate your home's ambiance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/collections"
            className="inline-flex items-center text-amber-800 hover:text-amber-900 font-medium"
          >
            View All Collections
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
