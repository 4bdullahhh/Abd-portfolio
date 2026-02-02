import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, ChevronRight, Code, Database, TrendingUp, Zap } from 'lucide-react';
import { Quote } from '../types';

const QUOTES: Quote[] = [
  { text: "Commerce meets Code. The future is automated.", author: "Abdullah" },
  { text: "Digital Marketing isn't just ads, it's psychology + technology.", author: "Abdullah" },
  { text: "Building the future with n8n and AI.", author: "Abdullah" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" }
];

const SLIDER_IMAGES = [
  "https://picsum.photos/800/600?random=1",
  "https://picsum.photos/800/600?random=2",
  "https://picsum.photos/800/600?random=3",
];

const TECH_STACK = [
  "React", "Tailwind CSS", "n8n", "Node.js", "Google Gemini AI", "SEO", "Google Ads", "Shopify", "Analytics", "Automation"
];

const STATS = [
  { label: "Years Learning", value: "2+" },
  { label: "Projects Built", value: "15+" },
  { label: "Certifications", value: "5+" },
  { label: "Commitment", value: "100%" },
];

export const Hero: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(false);

  // Quote Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % QUOTES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Slide Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDER_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Camera Logic
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
        setCameraError(false);
      }
    } catch (err) {
      console.error("Camera access denied or error:", err);
      setCameraError(true);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden"
    >
      {/* Hero Main Section */}
      <section className="min-h-screen pt-28 pb-12 px-6 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto relative z-10">
        
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"></div>
        </div>

        {/* Left Content: Intro */}
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-100 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400 text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Future Commerce & Tech
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Abdullah</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
             Bridging the gap between <span className="font-semibold text-purple-600 dark:text-purple-400">Business Strategy</span> and <span className="font-semibold text-purple-600 dark:text-purple-400">Digital Innovation</span>. I build automated workflows, smart websites, and marketing strategies.
          </p>

          {/* Dynamic Quote */}
          <div className="border-l-4 border-purple-500 pl-4 py-2 italic text-gray-500 dark:text-gray-300">
            <p className="text-lg transition-opacity duration-500">"{QUOTES[currentQuote].text}"</p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">- {QUOTES[currentQuote].author}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2 shadow-lg shadow-purple-500/20">
              Let's Talk <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/gallery" className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-full hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all">
              View Work
            </Link>
          </div>
        </div>

        {/* Right Content: Bento Grid Visuals */}
        <div className="flex-1 w-full max-w-lg grid grid-cols-2 gap-4">
          
          {/* Live Camera Card */}
          <div className="col-span-2 relative aspect-video bg-gray-100 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-purple-500/20 group shadow-2xl shadow-purple-900/10">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-neutral-900 z-20 transition-opacity duration-300" style={{ opacity: cameraActive ? 0 : 1 }}>
               {!cameraActive && !cameraError && (
                 <button onClick={startCamera} className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                   <Camera className="w-8 h-8" />
                   <span className="text-sm font-medium">Activate Live Mirror</span>
                 </button>
               )}
               {cameraError && (
                 <div className="text-center p-4">
                   <p className="text-red-500 text-sm mb-2">Camera access denied.</p>
                   <div className="text-xs text-gray-500">Enable permissions to see yourself here!</div>
                 </div>
               )}
            </div>
            
            <video 
              ref={videoRef} 
              autoPlay 
              muted 
              playsInline
              className="w-full h-full object-cover transform scale-x-[-1]" 
            />
            
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2 px-2 py-1 bg-red-500/90 rounded text-xs font-bold text-white uppercase tracking-wider shadow-sm">
              Live
            </div>
          </div>

          {/* Stats/Focus Card */}
          <div className="aspect-square bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 flex flex-col justify-center items-center gap-2 hover:border-purple-500/50 transition-colors shadow-lg">
             <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
             <span className="text-3xl font-bold text-gray-900 dark:text-white">StartUp</span>
             <span className="text-xs text-gray-500 dark:text-gray-400 text-center">Mindset Ready</span>
          </div>

          {/* Sliding Image Card */}
          <div className="aspect-square relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
             {SLIDER_IMAGES.map((img, idx) => (
               <img 
                key={idx}
                src={img} 
                alt="Slide"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
               />
             ))}
             <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
               <p className="text-white text-sm font-bold">My World</p>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/50 py-10 relative z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">{stat.value}</h3>
              <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 bg-white dark:bg-black overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <h2 className="text-lg font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest text-center">Technologies I Use</h2>
        </div>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee">
              {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
                <li key={idx} className="text-xl md:text-2xl font-bold text-gray-300 dark:text-gray-700 whitespace-nowrap">
                   {tech}
                </li>
              ))}
            </ul>
        </div>
      </section>

      {/* Service Highlights (What I Do) */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What I Bring to the Table</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {/* Card 1 */}
             <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                  <TrendingUp />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Digital Marketing</h3>
                <p className="text-gray-600 dark:text-gray-400">Data-driven strategies to grow brand presence using SEO, SEM, and psychological insights.</p>
             </div>

             {/* Card 2 */}
             <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                  <Code />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-400">Building responsive, fast, and modern websites using React, Tailwind, and modern frameworks.</p>
             </div>

             {/* Card 3 */}
             <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                  <Database />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Automation & AI</h3>
                <p className="text-gray-600 dark:text-gray-400">Optimizing business flows with n8n and creating intelligent AI voice agents for support.</p>
             </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};