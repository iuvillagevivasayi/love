import React, { useState } from 'react';
import { X } from 'lucide-react';

const photos = [
  {
    url: "g8.jpg",
    caption: "Our fun moments with cute filters"
  },
  {
    url: "g1.jpg",
    caption: "Sunday afternoon together - April 2025"
  },
  {
    url: "/images/couple-3.jpg",
    caption: "Just us being us ❤️"
  },
  {
    url: "/images/couple-4.jpg",
    caption: "Mask on, love never off"
  },
  {
    url: "/images/couple-5.jpg",
    caption: "Our perfect Sunday"
  },
  {
    url: "/images/couple-6.jpg",
    caption: "Playful moments with filters"
  }
];

const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-dancing">Our Beautiful Memories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer group relative"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-pink-400 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white rounded-full p-2 transition-all"
            onClick={prevPhoto}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="max-w-4xl max-h-[80vh]">
            <img 
              src={photos[selectedPhoto].url} 
              alt={photos[selectedPhoto].caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-lg">{photos[selectedPhoto].caption}</p>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white rounded-full p-2 transition-all"
            onClick={nextPhoto}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;