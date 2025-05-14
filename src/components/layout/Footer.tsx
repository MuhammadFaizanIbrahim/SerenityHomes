import React from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 pt-16 pb-8 bg-gradient-to-r from-serenity-pink via-white to-serenity-mint">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
            <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Serenity Home Logo"
              className="h-24 w-auto"
            />
          </Link>
            </div>
            <p className="text-stone-600 mb-6">
              Creating beautiful, functional spaces that tell your story and inspire everyday living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-500 hover:text-amber-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-500 hover:text-amber-800 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-500 hover:text-amber-800 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'Collections', 'Sale', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-stone-600 hover:text-amber-800 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-3">
              {['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office', 'Outdoor'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-stone-600 hover:text-amber-800 transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-amber-800 mr-3 flex-shrink-0" />
                <span className="text-stone-600">123 Decor Street, Stylish City, SC 12345</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-amber-800 mr-3 flex-shrink-0" />
                <span className="text-stone-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-amber-800 mr-3 flex-shrink-0" />
                <span className="text-stone-600">hello@serenityhome.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-200 mt-12 pt-8 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Serenity Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;