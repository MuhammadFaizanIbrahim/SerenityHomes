import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-radial from-serenity-pink via-white to-serenity-mint">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Serenity Home founder in workshop" 
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-amber-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-stone-200 rounded-full -z-10"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-6">Our Story</h2>
            <p className="text-stone-600 mb-6">
              Founded in 2018, Serenity Home began with a simple mission: to create beautiful, functional spaces that tell your story and inspire everyday living.
            </p>
            <p className="text-stone-600 mb-6">
              Our collection features handcrafted pieces sourced from skilled artisans around the world, blending traditional craftsmanship with contemporary design. We believe that a thoughtfully designed home enhances wellbeing and fosters connection.
            </p>
            <p className="text-stone-600 mb-6">
              Each item in our collection is carefully selected not just for its beauty, but for its quality, functionality, and the story behind it. We're committed to sustainable practices and supporting artisan communities.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <img 
                src="https://images.pexels.com/photos/7821473/pexels-photo-7821473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Emma Bennett, Founder" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-serif text-lg font-medium text-stone-800">Emma Bennett</p>
                <p className="text-stone-600">Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;