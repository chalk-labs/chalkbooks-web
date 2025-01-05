import React from 'react';
import { X } from 'lucide-react';

interface EditableFeelingTagProps {
  emoji: string;
  text: string;
  onRemove: () => void;
}

const EditableFeelingTag = ({ emoji, text, onRemove }: EditableFeelingTagProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full">
      <span>{emoji}</span>
      <span className="text-gray-800">{text}</span>
      <button 
        onClick={onRemove}
        className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center"
      >
        <X size={12} className="text-white" />
      </button>
    </div>
  );
};

export default EditableFeelingTag;