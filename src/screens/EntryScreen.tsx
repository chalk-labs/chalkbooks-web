import React from 'react';
import { Settings } from 'lucide-react';
import CloudBackground from '../components/CloudBackground';
import EntryInput from '../components/EntryInput';

const EntryScreen = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="relative min-h-screen bg-rose-50">
      <CloudBackground />
      
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📔</span>
          <h1 className="text-xl font-semibold">Journal</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <span className="font-semibold">1</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-6 pt-20">
        <h2 className="text-gray-500 mb-4">{formattedDate}</h2>
        <h1 className="text-3xl font-bold text-gray-800">
          How are you today?
        </h1>
      </div>

      {/* Input Section */}
      <EntryInput />
    </div>
  );
};

export default EntryScreen;