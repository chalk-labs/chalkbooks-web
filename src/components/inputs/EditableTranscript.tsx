import React from 'react';

interface EditableTranscriptProps {
  content: string;
  onChange: (content: string) => void;
}

const EditableTranscript = ({ content, onChange }: EditableTranscriptProps) => {
  return (
    <div>
      <h2 className="text-gray-500 mb-3">TRANSCRIPT</h2>
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[200px] text-xl bg-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Write your thoughts..."
      />
    </div>
  );
};

export default EditableTranscript;