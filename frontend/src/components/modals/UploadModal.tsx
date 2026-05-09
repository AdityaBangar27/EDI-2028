'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, Video, FileText, Image as ImageIcon, Radio } from 'lucide-react';
import { useState } from 'react';

export default function UploadModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [uploadStep, setUploadStep] = useState(1);
    
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                />
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-2xl bg-white dark:bg-[#121212] rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden flex flex-col max-h-[90vh]"
                >
                    <div className="flex items-center justify-between p-6 border-b border-black/10 dark:border-white/10">
                        <h2 className="text-xl font-bold text-foreground">Content Creation</h2>
                        <button onClick={onClose} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
                            <X className="w-6 h-6 text-gray-500" />
                        </button>
                    </div>

                    <div className="p-6 overflow-y-auto">
                        {uploadStep === 1 && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-medium text-foreground mb-4">What do you want to create?</h3>
                                
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {[
                                        { id: 'short', icon: Video, label: 'Short Video', color: 'text-purple-500', bg: 'bg-purple-500/10' },
                                        { id: 'video', icon: Video, label: 'Long Video', color: 'text-blue-500', bg: 'bg-blue-500/10' },
                                        { id: 'live', icon: Radio, label: 'Go Live', color: 'text-red-500', bg: 'bg-red-500/10' },
                                        { id: 'post', icon: ImageIcon, label: 'Educational Post', color: 'text-green-500', bg: 'bg-green-500/10' },
                                        { id: 'notes', icon: FileText, label: 'Study Notes', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
                                    ].map((type) => (
                                        <button 
                                            key={type.id}
                                            onClick={() => setUploadStep(2)}
                                            className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-black/5 dark:border-white/5 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all group bg-black/5 dark:bg-white/5 hover:bg-white dark:hover:bg-black/20"
                                        >
                                            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${type.bg}`}>
                                                <type.icon className={`w-7 h-7 ${type.color} group-hover:scale-110 transition-transform`} />
                                            </div>
                                            <span className="font-semibold text-sm text-foreground">{type.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {uploadStep === 2 && (
                            <div className="flex flex-col items-center justify-center py-12">
                                <div className="w-24 h-24 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center mb-6">
                                    <UploadCloud className="w-12 h-12 text-primary-500" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Select files to upload</h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-8 text-center max-w-sm">
                                    Your videos will be automatically categorized and moderated by our AI engine.
                                </p>
                                <button 
                                    onClick={() => {
                                        alert('Simulating Cloudinary/AWS S3 upload from architecture...');
                                        onClose();
                                    }}
                                    className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors"
                                >
                                    Browse Files
                                </button>
                                <button onClick={() => setUploadStep(1)} className="mt-4 text-sm text-gray-500 hover:text-foreground">
                                    Back
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
