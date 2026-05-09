import { Search, TrendingUp, BookOpen, Calculator, Atom, FlaskConical, Globe2 } from 'lucide-react';

const CATEGORIES = [
  { name: 'Mathematics', icon: Calculator, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Physics', icon: Atom, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { name: 'Chemistry', icon: FlaskConical, color: 'text-green-500', bg: 'bg-green-500/10' },
  { name: 'Computer Science', icon: Globe2, color: 'text-orange-500', bg: 'bg-orange-500/10' },
];

export default function ExplorePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Explore Subjects</h1>
        <p className="text-gray-500">Find exactly what you need to learn today</p>
      </div>

      <div className="relative max-w-2xl mx-auto mb-12">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          className="w-full glass pl-12 pr-4 py-4 rounded-2xl outline-none focus:border-primary-500 transition-colors shadow-lg text-foreground placeholder:text-gray-400"
          placeholder="Search for any topic, question, or subject..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.name} className="glass p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform group">
            <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <cat.icon className={`w-6 h-6 ${cat.color}`} />
            </div>
            <h3 className="font-semibold group-hover:text-primary-600 transition-colors">{cat.name}</h3>
            <p className="text-sm text-gray-500 mt-1">10k+ videos</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-red-500" /> Trending Topics
          </h2>
          <div className="flex flex-wrap gap-3">
              {['Integration', 'Binary Search Trees', 'Quantum Mechanics', 'React Hooks', 'Thermodynamics', 'Macroeconomics'].map(topic => (
                  <span key={topic} className="px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full text-sm font-medium hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer transition-colors border border-black/5 dark:border-white/5">
                      #{topic}
                  </span>
              ))}
          </div>
      </div>
    </div>
  );
}
