'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useRouter } from 'next/navigation';
import { Bell, Check, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SocketContextType {
  socket: Socket | null;
  requestDoubt: (data: any) => void;
}

const SocketContext = createContext<SocketContextType>({ socket: null, requestDoubt: () => {} });

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [incomingRequest, setIncomingRequest] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    newSocket.on('connect', () => {
        console.log('Connected to WebSocket server');
        // Register user with socket if authenticated
        const token = localStorage.getItem('token');
        if (token) {
            newSocket.emit('register', token);
        }
    });

    newSocket.on('receive-doubt-request', (data) => {
        console.log('Incoming doubt request:', data);
        setIncomingRequest(data);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const requestDoubt = (data: any) => {
    if (socket) {
      socket.emit('create-doubt-request', data);
    }
  };

  const acceptRequest = () => {
      if (incomingRequest && socket) {
          socket.emit('accept-doubt-request', { roomId: incomingRequest.roomId });
          router.push(`/dashboard/room/${incomingRequest.roomId}`);
          setIncomingRequest(null);
      }
  };

  const declineRequest = () => {
      setIncomingRequest(null);
  };

  return (
    <SocketContext.Provider value={{ socket, requestDoubt }}>
      {children}
      
      {/* Live Request Popup (From Architecture: REQUEST DISTRIBUTION SYSTEM) */}
      <AnimatePresence>
        {incomingRequest && (
            <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                className="fixed bottom-6 right-6 w-80 sm:w-96 glass bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-primary-500/30 p-5 rounded-2xl shadow-2xl z-[100]"
            >
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center shrink-0">
                        <Bell className="w-6 h-6 text-primary-600 animate-bounce" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                            New Doubt Request <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                            <span className="font-semibold text-primary-600">{incomingRequest.subject || 'Math'}:</span> {incomingRequest.question}
                        </p>
                        
                        {/* 1 minute timer simulation bar */}
                        <div className="w-full bg-black/10 dark:bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden relative">
                            <motion.div 
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 60, ease: "linear" }}
                                className="absolute top-0 left-0 h-full bg-primary-500"
                            />
                        </div>

                        <div className="flex gap-3 mt-4">
                            <button 
                                onClick={acceptRequest}
                                className="flex-1 py-2 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 text-sm"
                            >
                                <Check className="w-4 h-4" /> Accept
                            </button>
                            <button 
                                onClick={declineRequest}
                                className="flex-1 py-2 bg-black/5 dark:bg-white/5 hover:bg-red-500 hover:text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                            >
                                <X className="w-4 h-4" /> Decline
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </SocketContext.Provider>
  );
};
