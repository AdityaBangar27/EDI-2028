import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import Link from 'next/link';
import { Home, PlaySquare, Radio, Brain, User } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{ background: '#080b1a', color: '#e8eaf6' }}>
      <Topbar />
      <Sidebar />
      
      {/* Main Content */}
      <main className="md:ml-56 pt-16 min-h-screen pb-20 md:pb-0">
        <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-4 py-3"
        style={{ background: 'rgba(8,9,31,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {[
          { icon: Home, label: 'Home', href: '/dashboard' },
          { icon: PlaySquare, label: 'Shorts', href: '/dashboard/shorts' },
          { icon: Radio, label: 'Live', href: '/dashboard/live' },
          { icon: Brain, label: 'AI Doubt', href: '/dashboard/doubt' },
          { icon: User, label: 'Profile', href: '/profile' },
        ].map(item => (
          <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1 group">
            <item.icon className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
            <span className="text-[10px] text-gray-500 group-hover:text-indigo-400 transition-colors">{item.label}</span>
          </Link>
        ))}
        {/* Center Floating Plus */}
        <Link href="/dashboard/doubt" className="-mt-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>
            <span className="text-white text-2xl font-light">+</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}
