'use client';

import { Bell, Shield, Moon, Globe, Volume2, User, Key, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-500">Manage your account preferences and application settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
        {/* Settings Sidebar */}
        <div className="space-y-1">
            {['General', 'Account', 'Privacy & Safety', 'Notifications', 'Appearance', 'Audio & Video'].map((item, i) => (
                <button key={item} className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${i === 0 ? 'bg-black/5 dark:bg-white/5 text-primary-600' : 'text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-100'}`}>
                    {item}
                </button>
            ))}
        </div>

        {/* Settings Content Area */}
        <div className="md:col-span-3 space-y-8">
            
            {/* General Section */}
            <div className="glass p-6 md:p-8 rounded-3xl space-y-6">
                <h2 className="text-xl font-bold border-b border-black/10 dark:border-white/10 pb-4">General Settings</h2>
                
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium">Language</h3>
                            <p className="text-sm text-gray-500">Select your preferred language for the interface.</p>
                        </div>
                        <select className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2 outline-none">
                            <option>English (US)</option>
                            <option>Spanish</option>
                            <option>French</option>
                        </select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium flex items-center gap-2"><Moon className="w-4 h-4" /> Theme</h3>
                            <p className="text-sm text-gray-500">Toggle between Light, Dark, or System theme.</p>
                        </div>
                        <select className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2 outline-none">
                            <option>System Default</option>
                            <option>Light</option>
                            <option>Dark</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Account Section */}
            <div className="glass p-6 md:p-8 rounded-3xl space-y-6">
                <h2 className="text-xl font-bold border-b border-black/10 dark:border-white/10 pb-4">Account Settings</h2>
                
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium flex items-center gap-2"><User className="w-4 h-4" /> Personal Information</h3>
                            <p className="text-sm text-gray-500">Update your name, email, and bio.</p>
                        </div>
                        <button className="px-4 py-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
                            Edit
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium flex items-center gap-2"><Key className="w-4 h-4" /> Change Password</h3>
                            <p className="text-sm text-gray-500">Ensure your account is using a long, random password to stay secure.</p>
                        </div>
                        <button className="px-4 py-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
                            Update
                        </button>
                    </div>

                    <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                        <div>
                            <h3 className="font-medium text-red-500 flex items-center gap-2"><Trash2 className="w-4 h-4" /> Delete Account</h3>
                            <p className="text-sm text-gray-500">Permanently remove your account and all associated data.</p>
                        </div>
                        <button className="px-4 py-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg text-sm font-medium transition-colors">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
}
