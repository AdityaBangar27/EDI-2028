'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Brain, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: data.name, email: data.email, password: data.password }),
      });
      const json = await res.json();
      if (res.ok) {
        localStorage.setItem('token', json.token);
        localStorage.setItem('user', JSON.stringify({ username: json.username, email: json.email }));
        router.push('/dashboard');
      } else {
        setError(json.message || 'Registration failed');
      }
    } catch {
      setError('Server error. Make sure backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #080b1a 0%, #0f1040 50%, #080b1a 100%)' }}>
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="w-full max-w-md relative z-10">
        <Link href="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-2xl font-bold text-white">Brain</span>
            <span className="text-2xl font-bold" style={{ color: '#818cf8' }}>Bridge</span>
          </div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-3xl"
          style={{ background: 'rgba(13,17,48,0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-1">Join BrainBridge 🚀</h1>
            <p className="text-gray-400 text-sm">Start your collaborative learning journey</p>
          </div>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-xl text-sm text-red-400 text-center"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5 pl-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input {...register('name')} type="text"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white outline-none transition-all focus:ring-1 focus:ring-indigo-500"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  placeholder="John Doe" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5 pl-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input {...register('email')} type="email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white outline-none transition-all focus:ring-1 focus:ring-indigo-500"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  placeholder="you@university.edu" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5 pl-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input {...register('password')} type="password"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white outline-none transition-all focus:ring-1 focus:ring-indigo-500"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  placeholder="••••••••" required />
              </div>
            </div>

            <button type="submit" disabled={isLoading}
              className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 mt-2"
              style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }}>
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Create Account <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">Log in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
