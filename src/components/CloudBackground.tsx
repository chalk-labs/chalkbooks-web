import React from 'react';

const CloudBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-12 left-8 w-16 h-8 bg-white rounded-full opacity-60" />
      <div className="absolute top-24 right-12 w-20 h-10 bg-white rounded-full opacity-60" />
      <div className="absolute top-40 left-20 w-24 h-12 bg-white rounded-full opacity-60" />
    </div>
  );
};

export default CloudBackground;