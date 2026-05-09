'use client';

import { useState } from 'react';
import { Brain, Camera, Mic, Send, Image as ImageIcon, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useSocket } from '@/components/providers/SocketProvider';

export default function AskDoubtPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [doubtText, setDoubtText] = useState('');
  const { requestDoubt } = useSocket();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!doubtText.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis (AI Processing Module -> Topic Classification)
    setTimeout(() => {
      setIsAnalyzing(false);
      
      // Hit the Request Distribution System via Socket
      requestDoubt({
        question: doubtText,
        subject: 'Mathematics', // Simulated AI output
        roomId: `room-${Date.now()}`
      });

      // Show matching UI or redirect to waiting room
      setDoubtText('');
      alert('AI matched your question! Finding students with expertise... Check your screen (or another window) for the live request popup.');
    }, 3000);
  };

  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-3xl flex items-center justify-center mx-auto mb-6 relative">
            <Brain className="w-10 h-10 text-primary-600 relative z-10" />
            <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full" />
        </div>
        <h1 className="text-4xl font-bold mb-4">What do you need help with?</h1>
        <p className="text-gray-500 text-lg">Our AI will match you with the perfect peer to solve your doubt instantly.</p>
      </div>

      <div className="glass p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        
        {/* Analyzing Overlay */}
        <AnimatePresence>
            {isAnalyzing && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-background/80 backdrop-blur-md flex flex-col items-center justify-center rounded-3xl"
                >
                    <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-4" />
                    <h3 className="text-xl font-bold mb-2">Analyzing your doubt...</h3>
                    <p className="text-gray-500 text-sm">Extracting keywords & detecting subject</p>
                </motion.div>
            )}
        </AnimatePresence>

        <form onSubmit={handleSubmit}>
          <textarea 
            value={doubtText}
            onChange={(e) => setDoubtText(e.target.value)}
            className="w-full h-40 bg-transparent resize-none outline-none text-lg md:text-xl placeholder:text-gray-400 mb-4"
            placeholder="Type your question here, e.g., 'How do I calculate the derivative of e^x * sin(x)?'"
          />
          
          <div className="flex items-center justify-between pt-4 border-t border-black/10 dark:border-white/10">
            <div className="flex gap-2">
              <button type="button" className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-colors text-gray-600 dark:text-gray-300 tooltip group relative">
                <Camera className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Take Photo</span>
              </button>
              <button type="button" className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-colors text-gray-600 dark:text-gray-300 tooltip group relative">
                <ImageIcon className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Upload Image</span>
              </button>
              <button type="button" className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-colors text-gray-600 dark:text-gray-300 tooltip group relative">
                <Mic className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Voice Input</span>
              </button>
            </div>
            
            <button 
              type="submit" 
              disabled={!doubtText.trim() || isAnalyzing}
              className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                doubtText.trim() && !isAnalyzing
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 hover:bg-primary-700' 
                  : 'bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              Find Help <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
          <Brain className="w-4 h-4" /> AI will automatically match you with the best available peer.
      </div>
    </div>
  );
}
