import React from 'react';

interface MoodSelectorProps {
  selected: string;
  onChange: (mood: string) => void;
}

const moods = [
  { emoji: '😠', label: 'Terrible' },
  { emoji: '😕', label: 'Bad' },
  { emoji: '😐', label: 'Fine' },
  { emoji: '😊', label: 'Good' },
  { emoji: '😄', label: 'Great' },
];

const MoodSelector = ({ selected, onChange }: MoodSelectorProps) => {
  return (
    <div className="flex justify-center gap-4">
      {moods.map(({ emoji, label }) => (
        <button
          key={emoji}
          onClick={() => onChange(emoji)}
          className={`flex flex-col items-center ${
            selected === emoji ? 'scale-110' : 'opacity-50'
          }`}
        >
          <span className="text-4xl">{emoji}</span>
          <span className={`text-sm ${
            selected === emoji ? 'text-gray-800' : 'text-gray-500'
          }`}>
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;