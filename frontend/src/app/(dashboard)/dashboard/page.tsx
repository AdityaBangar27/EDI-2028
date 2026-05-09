'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const MOCK_VIDEOS = [
  {
    id: 1,
    title: 'Data Structures Full Course',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80',
    channelName: 'CodeMaster',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Code',
    views: '3.1M',
    timestamp: '2 days ago',
    duration: '40:25',
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    title: 'Calculus 2 Made Easy',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80',
    channelName: 'MathGenius',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Math',
    views: '1.2M',
    timestamp: '1 week ago',
    duration: '12:18',
    rating: 4.5,
  },
  {
    id: 3,
    title: 'DBMS Full Playlist',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80',
    channelName: 'ValMentor',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Val',
    views: '890K',
    timestamp: '3 days ago',
    duration: '41:45',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Operating System In One Shot',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',
    channelName: 'GuruQueen',
    channelAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guru',
    views: '2.5M',
    timestamp: '5 days ago',
    duration: '55:30',
    rating: 4.9,
    isNew: true,
  },
];

const LIVE_SESSIONS = [
  { id: 1, title: 'Python Doubt Solving', host: 'FutureAce', viewers: '2.4K', subject: 'Python', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80' },
  { id: 2, title: 'Web Development', host: 'CodeGuru', viewers: '1.8K', subject: 'JavaScript', thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80' },
  { id: 3, title: 'Physics Numericals', host: 'PhysicsPro', viewers: '3.1K', subject: 'Physics', thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&q=80' },
  { id: 4, title: 'Machine Learning', host: 'MLGuru', viewers: '5.2K', subject: 'AI/ML', thumbnail: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80' },
];

const SUBJECTS = [
  { name: 'Computer\nScience', icon: '💻', color: '#4f46e5' },
  { name: 'Mathematics', icon: '📐', color: '#7c3aed' },
  { name: 'Physics', icon: '⚛️', color: '#0891b2' },
  { name: 'Chemistry', icon: '🧪', color: '#059669' },
  { name: 'Electronics', icon: '🔌', color: '#d97706' },
  { name: 'Mechanical', icon: '⚙️', color: '#dc2626' },
  { name: 'Economics', icon: '📈', color: '#db2777' },
  { name: 'More', icon: '➕', color: '#6b7280' },
];

export default function DashboardHome() {
  return (
    <div className="space-y-8">

      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-3xl overflow-hidden p-6 md:p-8 min-h-[200px] flex items-center"
        style={{ background: 'linear-gradient(135deg, #0f1535 0%, #1a1060 40%, #0f0a2e 100%)', border: '1px solid rgba(99,102,241,0.2)' }}
      >
        {/* BG Orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', filter: 'blur(30px)' }} />

        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(99,102,241,0.4)', color: '#818cf8' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            AI-Powered Peer Matching
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Get Instant Help for<br />
            <span className="text-gradient">Your Study Problems</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-6 max-w-md">
            Ask doubts, connect with expert students, and learn together.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/dashboard/doubt">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 active:scale-95 glow-purple"
                style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}>
                <span>Ask Your Doubt</span>
                <span>→</span>
              </button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3].map(n => (
                  <img key={n} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${n}`} alt="" className="w-7 h-7 rounded-full border-2 border-indigo-900" />
                ))}
              </div>
              <span className="text-gray-400 text-xs">2K+ students online</span>
            </div>
          </div>
        </div>

        {/* AI Bot Illustration */}
        <div className="hidden md:flex items-center justify-center w-48 lg:w-64 shrink-0 relative">
          <div className="w-32 h-32 rounded-full animate-float flex items-center justify-center text-7xl" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)' }}>
            🤖
          </div>
          {/* Status cards */}
          <div className="absolute top-0 right-0 px-3 py-1.5 rounded-xl text-xs font-medium text-white" style={{ background: 'rgba(99,102,241,0.5)', backdropFilter: 'blur(10px)' }}>
            AI Analyzing...
          </div>
          <div className="absolute bottom-4 left-0 px-3 py-1.5 rounded-xl text-xs font-medium text-white flex items-center gap-2" style={{ background: 'rgba(16,185,129,0.4)', backdropFilter: 'blur(10px)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Finding Best Mentors...
          </div>
        </div>
      </motion.div>

      {/* Recommended For You */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Recommended for You</h2>
          <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">View all →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MOCK_VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] hover:shadow-2xl"
              style={{ background: '#0d1130', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white text-xl ml-1">▶</span>
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-mono">
                  {video.duration}
                </span>
                {video.isNew && (
                  <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
                )}
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-white line-clamp-2 mb-2 leading-snug">{video.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={video.channelAvatar} alt="" className="w-5 h-5 rounded-full" />
                    <span className="text-xs text-gray-400">{video.channelName}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-yellow-400 font-medium">{video.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[11px] text-gray-500">{video.views} views</span>
                  <span className="text-[11px] text-gray-500">{video.timestamp}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Live Sessions */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            Live Sessions
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
          </h2>
          <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">View all →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LIVE_SESSIONS.map((session, i) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="group rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all"
              style={{ background: '#0d1130', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="relative aspect-video">
                <img src={session.thumbnail} alt={session.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }} />
                <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-lg text-white text-[10px] font-bold live-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-lg text-white text-[10px]" style={{ background: 'rgba(0,0,0,0.6)' }}>
                  👁 {session.viewers}
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-semibold line-clamp-1">{session.title}</p>
                  <p className="text-gray-300 text-[10px]">{session.host}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Subjects</h2>
          <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">View all →</button>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {SUBJECTS.map((subject, i) => (
            <motion.button
              key={subject.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:scale-105 transition-all group"
              style={{ background: '#0d1130', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                style={{ background: `${subject.color}22`, border: `1px solid ${subject.color}44` }}>
                {subject.icon}
              </div>
              <span className="text-[10px] text-gray-400 text-center leading-tight whitespace-pre-line font-medium group-hover:text-white transition-colors">
                {subject.name}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

    </div>
  );
}
