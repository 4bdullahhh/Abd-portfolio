import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const PROJECTS = [
  { 
    title: "Marketing Dashboard", 
    desc: "A concept for tracking ad performance using React and Recharts.", 
    img: "https://picsum.photos/800/600?random=10",
    tags: ["Data", "Commerce"] 
  },
  { 
    title: "n8n Automation Flow", 
    desc: "Automating customer email responses with Gemini AI integration.", 
    img: "https://picsum.photos/800/600?random=11",
    tags: ["Automation", "n8n"]
  },
  { 
    title: "E-commerce Layout", 
    desc: "Frontend design for a local store with dark mode support.", 
    img: "https://picsum.photos/800/600?random=12",
    tags: ["Web Dev", "Design"]
  },
  { 
    title: "AI Voice Demo", 
    desc: "Customer support voice agent workflow proof of concept.", 
    img: "https://picsum.photos/800/600?random=13",
    tags: ["AI", "Voice"]
  }
];

export const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      id="gallery" 
      className="pt-32 pb-20 bg-white dark:bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
                <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Project Gallery</h2>
                <div className="w-20 h-1 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs md:text-right">
                A glimpse into my experiments with technology and business.
            </p>
        </div>

        {/* Featured Slider */}
        <div className="mb-16 relative group rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-[21/9]">
          <div 
            className="w-full h-full bg-cover bg-center transition-all duration-700 transform hover:scale-105"
            style={{ backgroundImage: `url(${PROJECTS[currentSlide].img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="max-w-2xl transform transition-all duration-500 translate-y-0 opacity-100">
                <div className="flex gap-3 mb-4">
                  {PROJECTS[currentSlide].tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-purple-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{PROJECTS[currentSlide].title}</h3>
                <p className="text-gray-200 text-lg md:text-xl mb-6">{PROJECTS[currentSlide].desc}</p>
                <button className="flex items-center gap-2 text-white font-bold hover:text-purple-400 transition-colors">
                  View Case Study <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-600"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-purple-600"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-6 right-8 flex gap-2">
            {PROJECTS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-purple-500' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>

        {/* Grid View */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">All Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                        />
                    </div>
                    
                    {/* Overlay content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-black/50 to-transparent flex flex-col justify-end p-6 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex gap-2 mb-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-bold px-2 py-1 rounded bg-white text-purple-900 backdrop-blur-sm shadow-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-purple-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                            {project.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};