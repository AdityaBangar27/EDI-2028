'use client';

import { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, MonitorUp, Hand, MessageSquare, Edit2, PhoneOff, Users, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RoomPage() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showRating, setShowRating] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col md:flex-row overflow-hidden">
        
      {/* Main Video Area */}
      <div className="flex-1 flex flex-col relative">
        <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-sm">12:45</span>
            <div className="h-4 w-px bg-white/20 mx-1" />
            <span className="font-medium text-sm">Calculus Doubt Session</span>
        </div>

        {/* Video Grid (Simplified for 1-on-1) */}
        <div className="flex-1 p-4 flex gap-4 items-center justify-center relative">
            {/* Peer Video */}
            <div className="w-full h-full max-w-4xl max-h-[80vh] bg-gray-900 rounded-3xl overflow-hidden relative shadow-2xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=1200&q=80" alt="Peer" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                    Sarah (Helper)
                </div>
            </div>

            {/* My Video (PiP style) */}
            <motion.div 
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className="absolute bottom-24 right-8 w-48 aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary-500 cursor-move z-20"
            >
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Me" className="w-full h-full object-cover transform -scale-x-100" />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium">
                    You
                </div>
            </motion.div>
        </div>

        {/* Controls Bar */}
        <div className="h-20 bg-gray-900/90 backdrop-blur-lg border-t border-white/10 flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-lg">
                    <span className="text-xs font-medium px-2 text-gray-300">Room ID: </span>
                    <span className="text-xs font-mono font-bold bg-black/50 px-2 py-1 rounded">xyz-abcd-123</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-4 rounded-full transition-colors ${isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}
                >
                    {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
                <button 
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`p-4 rounded-full transition-colors ${isVideoOff ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}
                >
                    {isVideoOff ? <VideoOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                </button>
                <button className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block">
                    <MonitorUp className="w-5 h-5" />
                </button>
                <button className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block">
                    <Hand className="w-5 h-5" />
                </button>
                <button className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block">
                    <Edit2 className="w-5 h-5" />
                </button>
                <button 
                    onClick={() => setShowRating(true)}
                    className="p-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors px-8 ml-4"
                >
                    <PhoneOff className="w-5 h-5" />
                </button>
            </div>

            <div className="flex items-center gap-2">
                <button className="p-3 rounded-xl hover:bg-white/10 transition-colors hidden sm:block">
                    <Users className="w-5 h-5" />
                </button>
                <button 
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className={`p-3 rounded-xl transition-colors ${isChatOpen ? 'bg-primary-600 text-white' : 'hover:bg-white/10'}`}
                >
                    <MessageSquare className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>

      {/* Right Sidebar (Chat / Whiteboard) */}
      {isChatOpen && (
          <div className="w-full md:w-80 bg-gray-900 border-l border-white/10 flex flex-col h-1/2 md:h-full">
              <div className="h-14 border-b border-white/10 flex items-center justify-between px-4">
                  <h3 className="font-semibold text-sm">In-call messages</h3>
                  <button onClick={() => setIsChatOpen(false)} className="md:hidden">✕</button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                  <div className="flex gap-2 text-sm">
                      <div className="font-bold text-primary-400">Sarah</div>
                      <div className="text-gray-300">Let me share my screen to show you the formula.</div>
                  </div>
                  <div className="flex gap-2 text-sm">
                      <div className="font-bold text-gray-400">You</div>
                      <div className="text-gray-300">Yes, please! I'm stuck on step 3.</div>
                  </div>
              </div>
              <div className="p-4 border-t border-white/10">
                  <div className="bg-black/50 rounded-xl flex items-center px-3 py-2 border border-white/10">
                      <input type="text" placeholder="Send a message..." className="bg-transparent outline-none text-sm flex-1" />
                      <button className="text-primary-500 p-1 hover:bg-white/10 rounded-md">
                          <Send className="w-4 h-4" />
                      </button>
                  </div>
              </div>
          </div>
      )}

      {/* Rating System Modal (from Architecture) */}
      <AnimatePresence>
          {showRating && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                  <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }} 
                      animate={{ scale: 1, opacity: 1 }} 
                      className="relative bg-[#121212] p-8 rounded-3xl w-full max-w-md text-center border border-primary-500/30 shadow-2xl"
                  >
                      <h2 className="text-2xl font-bold mb-2">Rate Your Session</h2>
                      <p className="text-gray-400 mb-6">How helpful was the student?</p>
                      
                      <div className="flex justify-center gap-2 mb-8">
                          {[1, 2, 3, 4, 5].map(star => (
                              <button key={star} className="p-2 hover:scale-110 transition-transform">
                                  <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                              </button>
                          ))}
                      </div>

                      <div className="flex gap-4">
                          <button onClick={() => window.location.href = '/dashboard'} className="flex-1 py-3 bg-gray-800 rounded-xl font-medium">Skip</button>
                          <button onClick={() => window.location.href = '/dashboard'} className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-medium">Submit Rating</button>
                      </div>
                  </motion.div>
              </div>
          )}
      </AnimatePresence>
    </div>
  );
}

// Need Send icon for the chat
import { Send } from 'lucide-react';
