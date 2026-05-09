'use client';

import { motion } from 'framer-motion';
import { Settings, Edit3, MapPin, Link as LinkIcon, Calendar, Star, Shield, Award } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const TABS = ['Videos', 'Shorts', 'Live Sessions', 'Playlists', 'About'];

const MOCK_VIDEOS = [
  {
    id: 1,
    title: 'Data Structures Full Course',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80',
    duration: '40:25',
    views: '3.1M',
    timestamp: '2 days ago',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'DBMS Full Playlist',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80',
    duration: '41:45',
    views: '890K',
    timestamp: '3 days ago',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'Python Full Course',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80',
    duration: '55:10',
    views: '2.1M',
    timestamp: '1 week ago',
    rating: 4.9,
  },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Videos');

  return (
    <div className="max-w-5xl mx-auto pb-16">

      {/* Cover Image - beautiful gradient matching reference */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full h-48 md:h-56 rounded-3xl overflow-hidden relative group mb-0"
        style={{ background: 'linear-gradient(135deg, #ff6eb4 0%, #ffd580 35%, #a8edea 65%, #7ec8e3 100%)' }}
      >
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 opacity-30"
          style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(8,9,31,0.8) 100%)' }} />
        
        {/* Edit Cover button */}
        <button className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
          <Edit3 className="w-3.5 h-3.5" /> Edit Cover
        </button>
      </motion.div>

      {/* Profile Info Section */}
      <div className="px-4 md:px-6 relative">

        {/* Avatar + Name Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 -mt-16 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-5">

            {/* Profile Picture with ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative group shrink-0"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-1 shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)' }}>
                <div className="w-full h-full rounded-full overflow-hidden"
                  style={{ border: '3px solid #080b1a' }}>
                  <img
                    src="/aditya-profile.png"
                    alt="Aditya Bangar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80';
                    }}
                  />
                </div>
              </div>
              {/* Online indicator */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2"
                style={{ borderColor: '#080b1a' }} />
              {/* Edit overlay */}
              <div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                style={{ background: 'rgba(0,0,0,0.4)' }}>
                <Edit3 className="text-white w-5 h-5" />
              </div>
            </motion.div>

            {/* Name & Handle */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="pb-2"
            >
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl md:text-3xl font-bold text-white">Aditya Bangar</h1>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                  style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}>
                  <Shield className="w-3 h-3" /> PRO
                </div>
              </div>
              <p className="text-gray-400 text-sm">@adityabangar</p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 pb-2"
          >
            <button className="px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}>
              Customize Profile
            </button>
            <button className="p-2.5 rounded-xl transition-colors hover:bg-white/10"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Settings className="w-5 h-5 text-gray-300" />
            </button>
          </motion.div>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 leading-relaxed mb-4 max-w-2xl text-sm md:text-base"
        >
          Passionate CS student at Stanford. Love building full-stack apps and exploring AI.
          Always happy to help others learn React and Node.js! 🚀
        </motion.p>

        {/* Meta Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gray-500" /> San Francisco, CA
          </div>
          <a href="https://github.com/adityabangar" target="_blank" rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
            <LinkIcon className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-400">github.com/adityabangar</span>
          </a>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gray-500" /> Joined September 2023
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-6 md:gap-10 mb-6 pb-6"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          {[
            { value: '1.2K', label: 'Followers' },
            { value: '45', label: 'Following' },
            { value: '4.9', label: 'Rating (120 reviews)', icon: Star },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <div className="flex items-center gap-1.5">
                {stat.icon && <stat.icon className="w-4 h-4 text-yellow-400 fill-yellow-400" />}
                <span className="font-bold text-xl text-white">{stat.value}</span>
              </div>
              <span className="text-gray-400 text-xs mt-0.5">{stat.label}</span>
            </div>
          ))}

          {/* Badges */}
          <div className="hidden md:flex items-center gap-2 ml-auto self-center">
            {[
              { icon: '🏆', label: 'Top Mentor' },
              { icon: '⭐', label: 'Elite Solver' },
              { icon: '🔥', label: '30-Day Streak' },
            ].map(badge => (
              <div key={badge.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-300"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
                {badge.icon} {badge.label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'text-indigo-400 bg-indigo-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              style={activeTab === tab ? { border: '1px solid rgba(99,102,241,0.3)' } : { border: '1px solid transparent' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MOCK_VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="group rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all"
              style={{ background: '#0d1130', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={video.thumbnail} alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.4)' }}>
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-xl ml-1">▶</span>
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-mono">
                  {video.duration}
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-white line-clamp-2 mb-2">{video.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{video.views} views</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-yellow-400">{video.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
