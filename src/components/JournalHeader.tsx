import React from 'react';
import { Plus } from 'lucide-react';

const JournalHeader = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">📔</span>
        <h1 className="text-xl font-semibold">Chalk Books</h1>
      </div>
      <button className="p-2">
        <Plus size={24} className="text-gray-700" />
      </button>
    </div>
  );
};

export default JournalHeader;