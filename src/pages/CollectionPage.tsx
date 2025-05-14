import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import Button from '../components/ui/Button';

const filters = {
  categories: ['All', 'Vases', 'Pillows', 'Lighting', 'Wall Art'],
  colors: ['White', 'Black', 'Brown', 'Gray', 'Blue'],
  priceRanges: ['Under $50', '$50 - $100', '$100 - $200', 'Over $200'],
  materials: ['Ceramic', 'Wood', 'Metal', 'Glass', 'Textile']
};

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: filters.categories[Math.floor(Math.random() * filters.categories.length)],
  price: Math.floor(Math.random() * 200) + 30,
  image: `https://images.pexels.com/photos/${6707628 + i}/pexels-photo-${6707628 + i}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750`
}));

const CollectionPage: React.FC = () => {
  const { category } = useParams();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'All',
    color: '',
    priceRange: '',
    material: ''
  });

  const FilterSection: React.FC<{ title: string; options: string[] }> = ({ title, options }) => (
    <div className="border-b border-stone-200 py-4">
      <h3 className="font-medium text-stone-800 mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 text-stone-600 hover:text-stone-800">
            <input type="checkbox" className="rounded border-stone-300 text-serenity-pink focus:ring-serenity-pink" />
            {option}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl text-stone-800 mb-2">{category || 'All Collections'}</h1>
          <p className="text-stone-600">Discover our carefully curated pieces for your home</p>
        </div>

        <div className="flex gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32 bg-white p-6 rounded-xl border border-stone-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-medium text-lg">Filters</h2>
                <SlidersHorizontal className="h-5 w-5 text-stone-600" />
              </div>
              <FilterSection title="Category" options={filters.categories} />
              <FilterSection title="Color" options={filters.colors} />
              <FilterSection title="Price Range" options={filters.priceRanges} />
              <FilterSection title="Material" options={filters.materials} />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filters Button */}
            <div className="lg:hidden mb-6">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-5 w-5" />
                Filters
              </Button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square overflow-hidden bg-serenity-mint/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-stone-500 mb-1">{product.category}</div>
                    <h3 className="font-serif text-lg text-stone-800 mb-2">{product.name}</h3>
                    <div className="text-lg font-medium text-stone-800">${product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-medium text-lg">Filters</h2>
              <button onClick={() => setShowFilters(false)} className="text-stone-600">
                ✕
              </button>
            </div>
            <FilterSection title="Category" options={filters.categories} />
            <FilterSection title="Color" options={filters.colors} />
            <FilterSection title="Price Range" options={filters.priceRanges} />
            <FilterSection title="Material" options={filters.materials} />
          </div>
        </div>
      )}
    </main>
  );
};

export default CollectionPage;