import { Users, Video, Mic, MessageSquare } from 'lucide-react';

const LIVE_SESSIONS = [
  { id: 1, title: 'Calculus III Midterm Review', host: 'Prof. Davis', viewers: 120, tags: ['Math', 'Calculus'], image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80' },
  { id: 2, title: 'Let\'s build a React App Live', host: 'Sarah Coder', viewers: 450, tags: ['React', 'Web Dev'], image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80' },
  { id: 3, title: 'Study With Me: Organic Chemistry', host: 'Alex Study', viewers: 85, tags: ['Chemistry', 'Study Session'], image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80' },
];

export default function LivePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
            Live Sessions
          </h1>
          <p className="text-gray-500 mt-1">Join study groups and live lectures happening right now</p>
        </div>
        <button className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30 flex items-center gap-2">
            <Video className="w-5 h-5" /> Start Live Session
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LIVE_SESSIONS.map((session) => (
          <div key={session.id} className="glass rounded-2xl overflow-hidden group cursor-pointer border border-black/5 dark:border-white/5 hover:border-primary-500/50 transition-colors">
            <div className="aspect-video relative overflow-hidden">
                <img src={session.image} alt={session.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-md flex items-center gap-1 uppercase tracking-wider">
                    <Video className="w-3 h-3" /> Live
                </div>
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                    <Users className="w-3 h-3" /> {session.viewers}
                </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">{session.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{session.host}</p>
              <div className="flex gap-2 mb-4">
                  {session.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-black/5 dark:bg-white/5 rounded-md text-gray-600 dark:text-gray-300">
                          {tag}
                      </span>
                  ))}
              </div>
              <button className="w-full py-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl text-sm font-medium transition-colors">
                  Join Session
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
