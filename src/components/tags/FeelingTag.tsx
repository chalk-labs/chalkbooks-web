import React from 'react';

interface FeelingTagProps {
  emoji: string;
  text: string;
}

const FeelingTag = ({ emoji, text }: FeelingTagProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full">
      <span>{emoji}</span>
      <span className="text-gray-800">{text}</span>
    </div>
  );
};

export default FeelingTag;