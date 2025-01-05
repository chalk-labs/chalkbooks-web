import React from 'react';

const HomeScreen = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Home</h1>
      {[1, 2, 3].map((item) => (
        <div 
          key={item} 
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <h2 className="font-semibold text-gray-800">Featured Item {item}</h2>
          <p className="text-gray-600 mt-2">
            Discover amazing content and stay updated with the latest trends.
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;