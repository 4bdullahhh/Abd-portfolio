import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      id="about" 
      className="pt-32 pb-20 bg-gray-50 dark:bg-neutral-900/50 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 group shadow-lg dark:shadow-none hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-600 group-hover:text-white">
              <User className="text-purple-600 dark:text-purple-400 w-6 h-6 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
              I am Abdullah, a driven Commerce student exploring the intersection of business strategy and modern technology. I believe in leveraging digital tools to solve real-world business problems.
            </p>
          </div>

          <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 group shadow-lg dark:shadow-none hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-600 group-hover:text-white">
              <BookOpen className="text-indigo-600 dark:text-indigo-400 w-6 h-6 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">What I'm Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
              Beyond my commerce degree, I am actively upskilling in Digital Marketing, Web Development, and AI Automation using tools like n8n to build efficient workflows.
            </p>
          </div>

          <div className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 group shadow-lg dark:shadow-none hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-600 group-hover:text-white">
              <Target className="text-purple-600 dark:text-purple-400 w-6 h-6 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">My Goal</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
              To become a tech-savvy business professional who can not only understand market dynamics but also build the digital solutions required to capture them.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};