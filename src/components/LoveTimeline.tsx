import React, { useEffect, useRef } from 'react';

const timelineEvents = [
  {
    title: "First Meet",
    description: "We first saw each other in school – innocent smiles, secret glances.",
    date: "January 2023",
    image: "https://images.pexels.com/photos/1715341/pexels-photo-1715341.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "First Chat",
    description: "I messaged her on Instagram asking for the answer sheet. That spark started everything.",
    date: "February 2023",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Bus Proposal",
    description: "One beautiful ride, I gathered all my courage and proposed to her on the bus.",
    date: "April 2023",
    image: "https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "First Travel",
    description: "Our first trip together – to Erode. That day, those roads, those laughs – unforgettable.",
    date: "June 2023",
    image: "https://images.pexels.com/photos/2549532/pexels-photo-2549532.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "First Kiss",
    description: "A moment I'll cherish forever. Our first kiss – my milestone, our magic.",
    date: "August 2023",
    image: "https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const LoveTimeline: React.FC = () => {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0');
          entry.target.classList.remove('opacity-0', 'translate-x-20');
        }
      });
    }, observerOptions);

    timelineRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-dancing">Our Story Timeline</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-300 transform md:translate-x-[-50%]"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              ref={el => timelineRefs.current[index] = el}
              className={`flex flex-col md:flex-row items-center mb-24 opacity-0 translate-x-20 transition-all duration-1000 ease-out ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="md:w-1/2 p-5">
                <div className={`rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover" 
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 p-5 relative">
                {/* Circle on the timeline */}
                <div className="absolute left-0 md:left-[-36px] top-1/2 transform translate-y-[-50%] md:translate-x-[-50%] w-8 h-8 bg-pink-400 rounded-full border-4 border-purple-800 z-10"></div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl">
                  <div className="text-sm font-semibold text-pink-300 mb-2">{event.date}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-dancing">{event.title}</h3>
                  <p className="text-white/90">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveTimeline;