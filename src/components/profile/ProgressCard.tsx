import React from 'react';
import { Flame, Flag } from 'lucide-react';

export default function ProgressCard() {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4">
      <h2 className="text-gray-500 font-medium mb-4">PROGRESS</h2>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-2xl font-bold">3 days</span>
          </div>
          <p className="text-gray-500">Current streak</p>
        </div>
        <div className="text-2xl text-gray-300">→</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Flag className="w-5 h-5 text-yellow-400" />
            <span className="text-2xl font-bold">5 days</span>
          </div>
          <p className="text-gray-500">Next milestone</p>
        </div>
      </div>
    </div>
  );
}