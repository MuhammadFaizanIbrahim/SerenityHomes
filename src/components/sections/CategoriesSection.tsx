import React from 'react';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Living Room",
    description: "Create a welcoming space for conversation and relaxation",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    name: "Bedroom",
    description: "Transform your bedroom into a tranquil sanctuary",
    image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    name: "Kitchen & Dining",
    description: "Elevate everyday meals with thoughtful dining accessories",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-serenity-mint to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-4">Shop By Room</h2>
          <p className="text-stone-600">
            Discover curated collections designed for every space in your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative h-80 overflow-hidden rounded-xl shadow-lg">
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="font-serif text-2xl mb-2">{category.name}</h3>
                <p className="opacity-80 mb-4">{category.description}</p>
                <a href="#" className="inline-block bg-serenity-pink/30 backdrop-blur-sm text-white px-4 py-2 rounded-md hover:bg-serenity-pink/40 transition-colors duration-300">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;