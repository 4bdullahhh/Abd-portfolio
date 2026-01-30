import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate sending
        setTimeout(() => {
            setStatus('sent');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      id="contact" 
      className="pt-32 pb-20 bg-gray-50 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-black min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Info */}
            <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Whether you have a question about my work, want to discuss an automation project, or just say hello, I'm always open to networking.
                </p>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group">
                        <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center shadow-md dark:shadow-none group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
                            <Mail className="w-5 h-5 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                        </div>
                        <span>abdullah@example.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group">
                        <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center shadow-md dark:shadow-none group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
                            <Phone className="w-5 h-5 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                        </div>
                        <span>+1 234 567 8900</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group">
                        <div className="w-12 h-12 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center shadow-md dark:shadow-none group-hover:bg-purple-100 dark:group-hover:bg-white/20 transition-colors">
                            <MapPin className="w-5 h-5 group-hover:text-purple-600 dark:group-hover:text-white" />
                        </div>
                        <span>City, Country</span>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 p-8 rounded-2xl shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Name</label>
                        <input type="text" className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Email</label>
                        <input type="email" className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Message</label>
                        <textarea rows={4} className="w-full bg-gray-50 dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <button 
                        type="submit" 
                        disabled={status !== 'idle'}
                        className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${status === 'sent' ? 'bg-green-600 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}
                    >
                        {status === 'idle' && <>Send Message <Send className="w-4 h-4" /></>}
                        {status === 'sending' && 'Sending...'}
                        {status === 'sent' && 'Message Sent!'}
                    </button>
                </form>
            </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-900 text-center text-gray-500 dark:text-gray-600 text-sm">
            <p>&copy; {new Date().getFullYear()} Abdullah. All rights reserved.</p>
        </footer>
      </div>
    </motion.section>
  );
};