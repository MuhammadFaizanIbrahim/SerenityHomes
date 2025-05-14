import React, { useState } from 'react';
import Button from '../ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-radial from-serenity-pink via-white to-serenity-mint">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-10">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-800 mb-4">
                Join Our Community
              </h2>
              <p className="text-stone-600 mb-6">
                Subscribe to receive design tips, special offers, and first access to new collections.
              </p>
              
              {subscribed ? (
                <div className="bg-serenity-mint/50 border border-serenity-mint text-stone-800 rounded-md p-4">
                  <p>Thank you for subscribing! We've sent a welcome email to your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-serenity-pink/20 rounded-md focus:outline-none focus:ring-2 focus:ring-serenity-pink/50"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-serenity-pink hover:bg-serenity-pink/90">
                    Subscribe
                  </Button>
                  <p className="text-xs text-stone-500 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
            
            <div className="w-full md:w-1/2 bg-gradient-to-br from-serenity-pink to-serenity-mint p-8 md:p-10 text-stone-800">
              <h3 className="font-serif text-xl font-medium mb-4">Why Subscribe?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Exclusive access to new products</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Seasonal decorating tips and inspiration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Special offers and subscriber-only discounts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Free design consultations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;