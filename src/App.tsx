import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LoveTimeline from './components/LoveTimeline';
import PhotoGallery from './components/PhotoGallery';
import MusicPlayer from './components/MusicPlayer';
import LoveMessage from './components/LoveMessage';
import FloatingHearts from './components/FloatingHearts';
import Footer from './components/Footer';
import DayCounter from './components/DayCounter';

const App: React.FC = () => {
  const [showHearts, setShowHearts] = useState<boolean>(false);
  
  useEffect(() => {
    // Add initial delay before showing hearts
    const timer = setTimeout(() => {
      setShowHearts(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
      {showHearts && <FloatingHearts />}
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <DayCounter startDate="2023-01-01" />
          <LoveMessage />
          <LoveTimeline />
          <PhotoGallery />
        </main>
        
        <Footer />
      </div>
      
      <MusicPlayer />
    </div>
  );
};

export default App;