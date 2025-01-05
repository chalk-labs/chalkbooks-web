import React from 'react';
import { BookText } from 'lucide-react';

export default function JournalStats() {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4">
      <h2 className="text-gray-500 font-medium mb-4">YOUR JOURNAL</h2>
      <div className="flex justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookText className="w-5 h-5 text-blue-400" />
            <span className="text-2xl font-bold">62</span>
          </div>
          <p className="text-gray-500">Words in journal</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookText className="w-5 h-5 text-purple-400" />
            <span className="text-2xl font-bold">4</span>
          </div>
          <p className="text-gray-500">Total Entries</p>
        </div>
      </div>
      <p className="text-gray-700">
        Your journal size is similar to the poem "Do Not Go Gentle into That Good Night" by Dylan Thomas.
      </p>
    </div>
  );
}