import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import { ChevronRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/room2.jpg"
          alt="Luxury living room interior"
          className="w-full h-full object-cover scale-105 origin-center transform transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-24 md:pt-32">
        <div
          className={`max-w-2xl transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block text-white text-sm md:text-base tracking-wider uppercase mb-4 font-medium">
            Welcome to Serenity Home
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-[#FED3DD] leading-[1.1] mb-6">
            Where Style Meets Serenity
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
            Discover curated collections that transform your space into a
            sanctuary of elegance, comfort, and personal expression.
          </p>
          <div className="flex flex-wrap gap-6">
            <Button size="lg" variant="light" className="group">
              Explore Collections
              <ChevronRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              className="backdrop-blur-sm"
            >
              Our Story
            </Button>
          </div>

          {/* Featured In */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-4">Featured In</p>
            <div className="flex items-center gap-8">
              <img
                src="https://seeklogo.com/images/A/architectural-digest-logo-7D3AD7E6AA-seeklogo.com.png"
                alt="Architectural Digest"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/Elle_Decor_logo_black.png"
                alt="Elle Decor"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/House_Beautiful_logo.png/800px-House_Beautiful_logo.png"
                alt="House Beautiful"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
        <div className="w-1 h-12 bg-white/20 rounded-full">
          <div className="w-full h-1/2 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
