import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

const SearchScreen = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Search</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-3">Trending Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['Technology', 'Design', 'Development', 'AI', 'Web'].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;