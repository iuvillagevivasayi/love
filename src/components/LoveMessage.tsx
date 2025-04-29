import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const LoveMessage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="py-10 relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <button
          onClick={toggleMessage}
          className="group flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-pink-500/30"
        >
          <Heart className="w-5 h-5 text-white" />
          <span>{isOpen ? 'Close Love Letter' : 'Open Love Letter'}</span>
        </button>

        <div className={`mt-8 w-full max-w-2xl transform transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 h-0 overflow-hidden'
        }`}>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
            <h3 className="text-3xl font-dancing text-white text-center mb-6">My Dearest Love</h3>
            
            <div className="space-y-4 text-white/90">
              <p>
                From the moment I first saw you, something in my heart recognized you. It was as if my soul had known yours in a thousand lifetimes before this one.
              </p>
              
              <p>
                Every day with you feels like a gift - your smile, your laugh, even the way you scrunch your nose when you're thinking hard about something. I've memorized all these little details, stored them away like treasures.
              </p>
              
              <p>
                You've taught me what it means to truly love someone - to put their happiness alongside my own, to grow together through both sunshine and storms.
              </p>
              
              <p>
                I promise to cherish every moment we create together, to hold your hand through whatever life brings our way, and to love you more with each passing day.
              </p>
              
              <p className="text-right font-dancing text-xl pt-4">
                Forever yours,<br />
                [Your Name]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveMessage;