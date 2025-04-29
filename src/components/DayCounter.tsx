import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface DayCounterProps {
  startDate: string;
}

const DayCounter: React.FC<DayCounterProps> = ({ startDate }) => {
  const [days, setDays] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const start = new Date(startDate);
    const today = new Date();
    const timeDiff = today.getTime() - start.getTime();
    const dayCount = Math.floor(timeDiff / (1000 * 3600 * 24));
    setDays(dayCount);

    // Animation delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [startDate]);

  return (
    <div className={`transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'
    }`}>
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto mb-16 shadow-xl border border-white/10 flex items-center">
        <Calendar className="text-pink-400 mr-4 h-10 w-10 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Together for</h3>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-pink-400 mr-2">{days}</span>
            <span className="text-white/90">beautiful days</span>
          </div>
          <p className="text-white/70 text-sm mt-1">and counting...</p>
        </div>
      </div>
    </div>
  );
};

export default DayCounter;