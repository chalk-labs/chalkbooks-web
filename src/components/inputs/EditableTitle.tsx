import React from 'react';

interface EditableTitleProps {
  value: string;
  onChange: (value: string) => void;
}

const EditableTitle = ({ value, onChange }: EditableTitleProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full text-3xl font-bold text-center bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg px-4 py-2"
      placeholder="Entry Title"
    />
  );
};

export default EditableTitle;