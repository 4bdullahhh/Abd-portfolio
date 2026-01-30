import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Abdullah's AI Assistant. Ask me anything about his skills in Commerce, n8n, or AI!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Format history for the service
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await sendMessageToGemini(history, userMsg);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-900 dark:to-black p-4 flex justify-between items-center border-b border-purple-500/20">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-white" />
              <span className="font-bold text-white">Abdullah AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-200 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none shadow-md' 
                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-neutral-800 rounded-2xl p-3 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-purple-600 dark:text-purple-500" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-purple-500/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my n8n skills..."
                className="flex-1 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white rounded-full px-4 py-2 border border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:outline-none text-sm shadow-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors disabled:opacity-50 shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
      </button>
    </div>
  );
};