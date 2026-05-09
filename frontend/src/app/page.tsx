'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, ArrowRight, Users, Star, Zap, BookOpen, Video, Shield } from 'lucide-react';

const FEATURES = [
  { icon: Brain, title: 'AI-Powered Matching', desc: 'Instantly paired with the right expert peer', color: '#6366f1' },
  { icon: Video, title: 'Live Video Sessions', desc: 'HD video calls with screen sharing & whiteboard', color: '#8b5cf6' },
  { icon: BookOpen, title: 'Rich Study Content', desc: 'Courses, shorts, playlists & live sessions', color: '#06b6d4' },
  { icon: Star, title: 'Rating System', desc: 'Earn badges and rewards for helping others', color: '#f59e0b' },
  { icon: Users, title: '50K+ Students', desc: 'A growing community of peer learners', color: '#10b981' },
  { icon: Shield, title: 'Safe & Secure', desc: 'Verified students only, moderated content', color: '#ec4899' },
];

const STATS = [
  { value: '50K+', label: 'Students' },
  { value: '98%', label: 'Problem Solved' },
  { value: '4.9★', label: 'Rating' },
  { value: '24/7', label: 'Available' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#080b1a', color: '#e8eaf6' }}>
      {/* BG Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(100px)' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 h-16"
        style={{ background: 'rgba(8,9,31,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white">Brain<span style={{ color: '#818cf8' }}>Bridge</span></span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">How It Works</a>
          <a href="#stats" className="hover:text-white transition-colors">Community</a>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <button className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all">
              Log In
            </button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}>
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8' }}>
            <Zap className="w-3 h-3" />
            AI-Powered Study Platform
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            AI-Powered Study.{' '}
            <br />
            <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Students Helping Students.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Get instant help for any study problem. Our AI matches you with expert peers for live video sessions, courses, and collaborative learning.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap mb-12">
            <Link href="/register">
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white text-base transition-all hover:scale-105 active:scale-95 shadow-2xl"
                style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}>
                Start Learning Free <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/login">
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-gray-300 text-base transition-all hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                Watch Demo <span>▶</span>
              </button>
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map(n => (
                <img key={n} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=person${n}`} alt=""
                  className="w-8 h-8 rounded-full border-2" style={{ borderColor: '#080b1a' }} />
              ))}
            </div>
            <span className="text-gray-400 text-sm"><span className="text-white font-semibold">50,000+</span> students learning together</span>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section id="stats" className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-center p-6 rounded-2xl"
              style={{ background: 'rgba(13,17,48,0.6)', border: '1px solid rgba(99,102,241,0.15)' }}>
              <div className="text-3xl font-bold text-white mb-1" style={{ color: '#818cf8' }}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Excel</h2>
            <p className="text-gray-400 max-w-xl mx-auto">A complete platform built for modern students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature, i) => (
              <motion.div key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="p-6 rounded-2xl hover:scale-[1.02] transition-all group"
                style={{ background: 'rgba(13,17,48,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${feature.color}22` }}>
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl"
          style={{ background: 'linear-gradient(135deg, #1e1460 0%, #2d1b69 100%)', border: '1px solid rgba(129,140,248,0.2)' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Learn Smarter?</h2>
          <p className="text-indigo-200 mb-8">Join 50,000+ students already solving their doubts with BrainBridge</p>
          <Link href="/register">
            <button className="px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 shadow-2xl"
              style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)', boxShadow: '0 0 40px rgba(99,102,241,0.5)' }}>
              Get Started for Free 🚀
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-gray-500 text-sm border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        © 2025 BrainBridge. AI-Powered Study: Students Helping Students. · 
        <span className="text-indigo-400 ml-1">Learn · Collaborate · Grow</span>
      </footer>
    </div>
  );
}
