import React from 'react';
import { Plus } from 'lucide-react';

const JournalHeader = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Journal</h1>
      <button className="p-2">
        <Plus size={24} className="text-gray-700" />
      </button>
    </div>
  );
};

export default JournalHeader;