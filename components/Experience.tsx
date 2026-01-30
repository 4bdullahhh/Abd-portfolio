import React from 'react';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  const items = [
    {
      type: 'education',
      title: 'Commerce Studies',
      place: 'University/College Name',
      period: 'Present',
      desc: 'Focusing on Accounting, Economics, and Business Management principles.'
    },
    {
      type: 'course',
      title: 'Digital Marketing Specialist',
      place: 'Online Certification',
      period: '2023 - Present',
      desc: 'Learning SEO, SEM, Social Media Strategy, and Content Marketing.'
    },
    {
      type: 'project',
      title: 'AI & Automation Experiments',
      place: 'Personal Projects',
      period: '2024',
      desc: 'Building workflows with n8n and exploring AI Voice Agents for customer support automation.'
    }
  ];

  return (
    <section id="experience" className="pt-32 pb-20 bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-0 md:pl-0 space-y-12">
          {items.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-0 group">
              {/* Dot */}
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-colors duration-300
                ${item.type === 'education' 
                  ? 'bg-purple-600 border-purple-900 group-hover:bg-purple-400 group-hover:scale-125' 
                  : 'bg-indigo-600 border-indigo-900 group-hover:bg-indigo-400 group-hover:scale-125'}`}
              ></div>
              
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                <div className="md:col-span-1 md:text-right mb-2 md:mb-0">
                  <span className="text-sm text-gray-500 dark:text-gray-500 font-mono flex items-center md:justify-end gap-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>
                
                <div className="md:col-span-4 bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 shadow-sm
                  group-hover:border-purple-500 group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.2)] group-hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    {item.type === 'education' ? <GraduationCap className="text-purple-600 dark:text-purple-400 w-5 h-5"/> : <Briefcase className="text-indigo-600 dark:text-indigo-400 w-5 h-5"/>}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.title}</h3>
                  </div>
                  <h4 className="text-md text-gray-600 dark:text-gray-400 mb-3">{item.place}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};