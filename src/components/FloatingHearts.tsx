import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  
  useEffect(() => {
    // Generate initial hearts
    const initialHearts = Array.from({ length: 20 }, (_, i) => createHeart(i));
    setHearts(initialHearts);
    
    // Create new hearts periodically
    const interval = setInterval(() => {
      setHearts(prevHearts => {
        // Remove hearts that have left the screen
        const filtered = prevHearts.filter(heart => heart.y > -100);
        
        // Add a new heart
        const newHeart = createHeart(Math.random() * 1000);
        
        return [...filtered, newHeart];
      });
    }, 2000);
    
    // Animate hearts
    const animationFrame = requestAnimationFrame(animateHearts);
    
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  const createHeart = (id: number): Heart => {
    const colors = ['#ff6b81', '#ff4757', '#ff6b81', '#f368e0', '#ff9ff3'];
    return {
      id,
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 100,
      size: 15 + Math.random() * 25,
      opacity: 0.2 + Math.random() * 0.8,
      speed: 1 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  };
  
  const animateHearts = () => {
    setHearts(prevHearts => 
      prevHearts.map(heart => ({
        ...heart,
        y: heart.y - heart.speed,
        x: heart.x + Math.sin(heart.y / 50) * 0.5
      }))
    );
    
    requestAnimationFrame(animateHearts);
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            opacity: heart.opacity,
            transform: `scale(${heart.size / 20})`,
            transition: 'transform 0.3s ease',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={heart.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;