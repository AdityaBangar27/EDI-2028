'use client';

import Link from 'next/link';
import { Search, Bell, Brain, Menu, Upload, Mic } from 'lucide-react';
import { useState } from 'react';
import UploadModal from '@/components/modals/UploadModal';

export default function Topbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <>
    <header className="fixed top-0 w-full h-16 z-50 flex items-center justify-between px-4 gap-4"
      style={{ background: 'rgba(8,9,31,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      
      {/* Logo */}
      <div className="flex items-center gap-3 shrink-0">
        <button className="p-2 rounded-lg hover:bg-white/5 md:hidden">
          <Menu className="w-5 h-5 text-gray-300" />
        </button>
        <Link href="/dashboard" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-white tracking-tight">Brain</span>
            <span className="text-lg font-bold tracking-tight" style={{ color: '#818cf8' }}>Bridge</span>
          </div>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className={`flex items-center rounded-xl px-3 py-2 gap-2 transition-all ${
          isSearchFocused 
            ? 'ring-1 ring-indigo-500' 
            : ''
        }`} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <Search className="w-4 h-4 text-gray-500 shrink-0" />
          <input 
            type="text" 
            placeholder="Search for topics, subjects, mentors..."
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <button className="shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors">
            <Mic className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2 shrink-0">
        <button 
          onClick={() => setIsUploadModalOpen(true)}
          className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
          style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}
        >
          <Upload className="w-4 h-4" />
          <span className="hidden lg:block">Upload</span>
        </button>
        
        <button className="relative p-2 rounded-xl hover:bg-white/5 transition-colors">
          <Bell className="w-5 h-5 text-gray-300" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <Link href="/profile">
          <div className="w-9 h-9 rounded-full p-[2px] cursor-pointer hover:scale-105 transition-transform" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="/aditya-profile.png" 
                alt="Aditya Bangar" 
                className="w-full h-full object-cover object-top"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'; }}
              />
            </div>
          </div>
        </Link>
      </div>
    </header>
    <UploadModal isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} />
    </>
  );
}
