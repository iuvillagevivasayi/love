import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/40 backdrop-blur-md py-3 shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center">
          <Heart className={`h-6 w-6 text-pink-400 mr-2 ${isScrolled ? 'animate-pulse' : ''}`} />
          <h1 className="text-2xl md:text-3xl font-bold text-white font-dancing">
            Our Love Story
          </h1>
          <Heart className={`h-6 w-6 text-pink-400 ml-2 ${isScrolled ? 'animate-pulse' : ''}`} />
        </div>
      </div>
    </header>
  );
};

export default Header;