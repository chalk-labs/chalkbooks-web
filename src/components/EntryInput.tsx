import React from 'react';
import { Mic, Keyboard, RefreshCw } from 'lucide-react';

const EntryInput = () => {
  return (
    <div className="absolute bottom-24 left-0 right-0 px-4">
      <div className="text-center text-gray-400 mb-4">
        Tap to record entry or type
      </div>
      <div className="flex justify-center items-center gap-8">
        <button className="p-2 text-gray-600 hover:text-rose-500">
          <RefreshCw size={24} />
          <span className="block text-xs mt-1">Prompt</span>
        </button>
        <button className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center hover:bg-rose-300">
          <Mic size={32} className="text-rose-600" />
        </button>
        <button className="p-2 text-gray-600 hover:text-rose-500">
          <Keyboard size={24} />
          <span className="block text-xs mt-1">Type</span>
        </button>
      </div>
    </div>
  );
};

export default EntryInput;