import React from 'react';
import { Share2 } from 'lucide-react';

export default function QuoteCard() {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4">
      <h2 className="text-gray-500 font-medium mb-4">QUOTE OF THE WEEK</h2>
      <div className="relative bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-6 text-white">
        <p className="text-xl font-medium italic mb-2">
          "Hello I'm not talking to you"
        </p>
        <p className="text-sm opacity-80">- Rahil</p>
        <button className="absolute bottom-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30">
          <Share2 className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}