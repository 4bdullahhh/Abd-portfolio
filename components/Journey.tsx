import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, Code, Share2, Workflow, Cpu, Globe, Database } from 'lucide-react';

const EXPERIENCE_ITEMS = [
  {
    type: 'education',
    title: 'Commerce Studies',
    place: 'University/College Name',
    period: 'Present',
    desc: 'Focusing on Accounting, Economics, and Business Management principles.',
    tags: ['Accounting', 'Business', 'Economics']
  },
  {
    type: 'course',
    title: 'Digital Marketing Specialist',
    place: 'Online Certification',
    period: '2023 - Present',
    desc: 'Learning SEO, SEM, Social Media Strategy, and Content Marketing.',
    tags: ['SEO', 'Google Ads', 'Analytics']
  },
  {
    type: 'project',
    title: 'AI & Automation Experiments',
    place: 'Personal Projects',
    period: '2024',
    desc: 'Building workflows with n8n and exploring AI Voice Agents for customer support automation.',
    tags: ['n8n', 'Gemini AI', 'Automation']
  }
];

const SKILLS = [
  { name: "Digital Marketing", icon: <Share2 />, color: "text-blue-500", desc: "SEO, Social Media, Ads" },
  { name: "Web Development", icon: <Globe />, color: "text-purple-500", desc: "HTML, React, Basic CSS" },
  { name: "Automation (n8n)", icon: <Workflow />, color: "text-red-500", desc: "Workflow Automation, Integrations" },
  { name: "AI Voice Agents", icon: <Cpu />, color: "text-indigo-500", desc: "Conversational AI, TTS/STT" },
  { name: "Commerce", icon: <Database />, color: "text-yellow-500", desc: "Accounting, Business Logic" },
  { name: "No-Code Tools", icon: <Code />, color: "text-pink-500", desc: "Bubble, Webflow" }
  ];

export const Journey: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      id="journey" 
      className="pt-32 pb-20 bg-white dark:bg-black min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Journey & Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Where I've been and what I can do.</p>
        </div>

        {/* Skills Grid */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
            Technical Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 
                hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] 
                hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all duration-300"
              >
                <div className={`mb-4 w-12 h-12 rounded-lg bg-white dark:bg-neutral-800 flex items-center justify-center shadow-sm ${skill.color} group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(skill.icon as React.ReactElement, { size: 24 })}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
            Experience Timeline
          </h3>
          
          <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 space-y-12">
            {EXPERIENCE_ITEMS.map((item, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline Dot */}
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10
                  ${item.type === 'education' 
                    ? 'bg-purple-600 border-purple-900 group-hover:bg-purple-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]' 
                    : 'bg-indigo-600 border-indigo-900 group-hover:bg-indigo-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.8)]'}`}
                ></div>
                
                <div className="bg-white dark:bg-neutral-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 
                  group-hover:border-purple-500 dark:group-hover:border-purple-500 group-hover:-translate-y-1 
                  group-hover:shadow-[0_5px_20px_-5px_rgba(168,85,247,0.2)] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <div className="flex items-center gap-3">
                      {item.type === 'education' ? 
                        <GraduationCap className="text-purple-600 dark:text-purple-400 w-5 h-5"/> : 
                        <Briefcase className="text-indigo-600 dark:text-indigo-400 w-5 h-5"/>
                      }
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400 flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-full w-fit">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>
                  
                  <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">{item.place}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 border border-transparent group-hover:border-purple-500/30 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};