import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black/30 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <Heart className="h-5 w-5 text-pink-400 mr-2 animate-pulse" />
          <span className="text-white">Forever & Always</span>
          <Heart className="h-5 w-5 text-pink-400 ml-2 animate-pulse" />
        </div>
        
        <p className="text-white/70 text-sm">
          Made with love, for the love of my life
        </p>
        
        <p className="text-white/50 text-xs mt-2">
          &copy; {new Date().getFullYear()} | Our love story continues...
        </p>
      </div>
    </footer>
  );
};

export default Footer;