'use client';

import { ThumbsUp, MessageSquare, Share2, MoreVertical, BrainCircuit } from 'lucide-react';

const SHORTS = [
  { id: 1, title: 'Quick Math Trick: Multiply by 11', views: '1.2M', likes: '120K', channel: 'Math Hacks', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80' },
  { id: 2, title: 'CSS Grid in 60 Seconds', views: '800K', likes: '45K', channel: 'Dev Tips', image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&q=80' },
  { id: 3, title: 'Physics Fact: Time Dilation explained', views: '2.5M', likes: '300K', channel: 'Science Daily', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80' },
];

export default function ShortsPage() {
  return (
    <div className="flex justify-center pb-20">
      <div className="space-y-8 max-w-[400px] w-full">
        {SHORTS.map((short) => (
          <div key={short.id} className="relative aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl group snap-start scroll-mt-24">
            <img src={short.image} alt={short.title} className="w-full h-full object-cover opacity-80" />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Content info */}
            <div className="absolute bottom-4 left-4 right-16 text-white">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${short.channel}`} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-semibold text-sm">{short.channel}</span>
                    <button className="px-3 py-1 bg-white text-black text-xs font-bold rounded-full ml-2">Subscribe</button>
                </div>
                <h3 className="font-medium text-sm line-clamp-2 mb-2">{short.title}</h3>
                <div className="flex items-center gap-2 bg-white/10 w-fit px-2 py-1 rounded-full backdrop-blur-md text-xs">
                    <BrainCircuit className="w-3 h-3" /> AI Summary Available
                </div>
            </div>

            {/* Actions Sidebar */}
            <div className="absolute right-4 bottom-4 flex flex-col gap-6 items-center text-white">
                <div className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center group-hover/btn:bg-black/60 transition-colors">
                        <ThumbsUp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium">{short.likes}</span>
                </div>
                <div className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center group-hover/btn:bg-black/60 transition-colors">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium">1.2K</span>
                </div>
                <div className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center group-hover/btn:bg-black/60 transition-colors">
                        <Share2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium">Share</span>
                </div>
                <div className="flex flex-col items-center gap-1 group/btn cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center group-hover/btn:bg-black/60 transition-colors">
                        <MoreVertical className="w-6 h-6" />
                    </div>
                </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
