'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, PlaySquare, BookOpen, Radio, Brain, 
  ListMusic, Download, History, Bell, Settings, User, MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home', href: '/dashboard' },
  { icon: PlaySquare, label: 'Shorts', href: '/dashboard/shorts' },
  { icon: BookOpen, label: 'Subjects', href: '/dashboard/explore' },
  { icon: Radio, label: 'Live Sessions', href: '/dashboard/live' },
  { icon: Brain, label: 'AI Doubts', href: '/dashboard/doubt' },
  { icon: ListMusic, label: 'Playlist', href: '/dashboard/playlist' },
  { icon: Download, label: 'Downloads', href: '/dashboard/downloads' },
  { icon: History, label: 'History', href: '/dashboard/history' },
  { icon: Bell, label: 'Notifications', href: '/dashboard/notifications', badge: 3 },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-56 overflow-y-auto hidden md:flex flex-col z-40 no-scrollbar"
      style={{ background: '#08091f', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
      
      {/* Nav Items */}
      <nav className="flex-1 px-3 pt-4 space-y-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link key={item.label} href={item.href}>
              <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative cursor-pointer ${
                isActive 
                  ? 'bg-indigo-600/20 border-l-2 border-indigo-500 text-indigo-400' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}>
                <item.icon className={`w-4.5 h-4.5 shrink-0 ${isActive ? 'text-indigo-400' : 'text-gray-500 group-hover:text-gray-300'}`} style={{ width: '18px', height: '18px' }} />
                <span className={`text-sm font-medium ${isActive ? 'text-indigo-300' : ''}`}>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none">
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* AI Study Assistant */}
      <div className="p-3 m-3 mb-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, #1e1460 0%, #2d1b69 100%)', border: '1px solid rgba(129,140,248,0.2)' }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center">
            <Brain className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">AI Study Assistant</div>
          </div>
        </div>
        <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">Hi, I am your AI assistant. How can I help you today?</p>
        <Link href="/dashboard/doubt">
          <button className="w-full py-2 text-xs font-semibold text-white rounded-xl transition-all hover:opacity-90 active:scale-95"
            style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}>
            Ask Anything
          </button>
        </Link>
      </div>
    </aside>
  );
}
