import React from 'react';

const moods = [
  { name: 'Good', percentage: 25, color: 'bg-green-200' },
  { name: 'Fine', percentage: 50, color: 'bg-yellow-200' },
  { name: 'Bad', percentage: 25, color: 'bg-orange-200' }
];

export default function MoodAnalytics() {
  return (
    <div className="bg-white rounded-2xl p-6 mb-4">
      <h2 className="text-gray-500 font-medium mb-4">MOOD</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Mood Distribution</h3>
        <div className="flex gap-2 mb-4">
          <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">Last 7 days</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">30 days</button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">All time</button>
        </div>
        
        <div className="flex rounded-full overflow-hidden mb-4">
          {moods.map(mood => (
            <div 
              key={mood.name}
              className={`h-2 ${mood.color}`}
              style={{ width: `${mood.percentage}%` }}
            />
          ))}
        </div>
        
        {moods.map(mood => (
          <div key={mood.name} className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full ${mood.color}`} />
              <span>{mood.name}</span>
            </div>
            <span>{mood.percentage}%</span>
          </div>
        ))}
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">Mood Flow</h3>
        <p className="text-gray-500 mb-2">Dec 30 - 05, 2025</p>
        <p className="text-gray-500">Average: Fine</p>
        {/* Mood flow chart would go here */}
      </div>
    </div>
  );
}