import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';

// You should replace this with the URL of your actual love song
const SONG_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const SONG_TITLE = "Our Love Song";
const SONG_ARTIST = "Love Artist";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(SONG_URL);
    audioRef.current.loop = true;
    
    // Set up progress tracking
    const updateProgress = () => {
      if (audioRef.current) {
        const duration = audioRef.current.duration;
        const currentTime = audioRef.current.currentTime;
        setProgress((currentTime / duration) * 100);
      }
    };
    
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateProgress);
    }
    
    // Show music player after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('timeupdate', updateProgress);
      }
      clearTimeout(timer);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * audioRef.current.duration;
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 transform transition-transform duration-500 hover:scale-105">
      <div className="bg-black/30 backdrop-blur-lg rounded-full p-4 shadow-xl flex items-center space-x-4 border border-white/10">
        <div className="p-2 bg-pink-500 rounded-full shadow-lg">
          <Music size={20} className="text-white" />
        </div>
        
        <div className="flex-1 mr-4">
          <h3 className="text-white text-sm font-bold">{SONG_TITLE}</h3>
          <p className="text-white/70 text-xs">{SONG_ARTIST}</p>
          
          <div 
            className="mt-1 h-1 bg-gray-200/20 rounded-full cursor-pointer overflow-hidden"
            onClick={handleProgressClick}
          >
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <button 
          onClick={togglePlay}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          {isPlaying ? 
            <Pause size={18} className="text-white" /> : 
            <Play size={18} className="text-white" />
          }
        </button>
        
        <button 
          onClick={toggleMute}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          {isMuted ? 
            <VolumeX size={18} className="text-white" /> : 
            <Volume2 size={18} className="text-white" />
          }
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;