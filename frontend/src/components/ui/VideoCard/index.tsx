'use client';

import Link from 'next/link';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
}

export default function VideoCard({ title, thumbnail, channelName, channelAvatar, views, timestamp, duration }: VideoCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 mb-3">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-white text-xs font-medium rounded backdrop-blur-md">
          {duration}
        </div>
        
        {/* Play overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center scale-75 group-hover:scale-100 transition-transform">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
            </div>
        </div>
      </div>

      <div className="flex gap-3 pr-4">
        <Link href={`/profile/${channelName}`} className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
            <img src={channelAvatar} alt={channelName} className="w-full h-full object-cover" />
          </div>
        </Link>
        
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold line-clamp-2 leading-snug group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          <Link href={`/profile/${channelName}`} className="text-xs text-gray-500 mt-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" onClick={(e) => e.stopPropagation()}>
            {channelName}
          </Link>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <span>{views} views</span>
            <span className="w-1 h-1 rounded-full bg-gray-400" />
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
