import React from 'react';
import { Code, Share2, Workflow, Cpu, Globe, Database } from 'lucide-react';

export const Expertise: React.FC = () => {
  const skills = [
    { name: "Digital Marketing", icon: <Share2 />, color: "text-blue-500 dark:text-blue-400", desc: "SEO, Social Media, Ads" },
    { name: "Web Development", icon: <Globe />, color: "text-purple-500 dark:text-purple-400", desc: "HTML, React, Basic CSS" },
    { name: "Automation (n8n)", icon: <Workflow />, color: "text-red-500 dark:text-red-400", desc: "Workflow Automation, Integrations" },
    { name: "AI Voice Agents", icon: <Cpu />, color: "text-indigo-500 dark:text-indigo-400", desc: "Conversational AI, TTS/STT" },
    { name: "Commerce", icon: <Database />, color: "text-yellow-500 dark:text-yellow-400", desc: "Accounting, Business Logic" },
    { name: "No-Code Tools", icon: <Code />, color: "text-pink-500 dark:text-pink-400", desc: "Bubble, Webflow" }
  ];

  return (
    <section id="expertise" className="pt-32 pb-20 bg-gray-50 dark:bg-neutral-900/30 relative overflow-hidden min-h-screen">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/50 dark:bg-purple-900/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/50 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">Combining business acumen with technical skills.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="group bg-white dark:bg-black/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 shadow-md dark:shadow-none hover:shadow-xl hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/10">
              <div className={`mb-4 w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-900 flex items-center justify-center ${skill.color} group-hover:scale-110 transition-transform duration-300 group-hover:bg-white dark:group-hover:bg-neutral-800`}>
                {React.cloneElement(skill.icon as React.ReactElement, { size: 24 })}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{skill.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};