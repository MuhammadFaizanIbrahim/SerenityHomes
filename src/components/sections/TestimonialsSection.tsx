import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, NY",
    text: "Serenity Home transformed my living space completely. Their attention to detail and quality of products exceeded my expectations. Every piece tells a story and has become a conversation starter when guests visit.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    name: "Michael Torres",
    location: "Austin, TX",
    text: "I was looking for unique pieces that would make my new apartment feel like home. The team at Serenity Home helped me select items that perfectly matched my style while staying within my budget. Couldn't be happier!",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Seattle, WA",
    text: "What sets Serenity Home apart is not just their beautiful products, but their exceptional customer service. They helped me design my entire living room virtually, and everything arrived perfectly packaged with easy care instructions.",
    image: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-serenity-pink via-white to-serenity-mint">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-stone-800 mb-4">What Our Customers Say</h2>
          <p className="text-stone-600">
            Discover why our customers love shopping with Serenity Home.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-10 relative">
            <Quote className="absolute text-serenity-pink/30 h-24 w-24 -top-6 -left-6 rotate-180" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-serenity-mint">
                <img 
                  src={activeTestimonial.image} 
                  alt={activeTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-stone-700 text-lg mb-6">{activeTestimonial.text}</p>
                <div>
                  <p className="font-serif text-xl font-medium text-stone-800">{activeTestimonial.name}</p>
                  <p className="text-stone-600">{activeTestimonial.location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={goToPrevious}
                className="p-2 rounded-full border border-serenity-pink hover:bg-serenity-pink/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-5 w-5 text-stone-700" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === activeIndex ? 'bg-serenity-pink' : 'bg-stone-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={goToNext}
                className="p-2 rounded-full border border-serenity-pink hover:bg-serenity-pink/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5 text-stone-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;