import React from 'react';

interface ActivityTagProps {
  text: string;
  icon?: string;
}

const ActivityTag = ({ text, icon }: ActivityTagProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full">
      {icon && <span>{icon}</span>}
      <span className="text-gray-800">{text}</span>
    </div>
  );
};

export default ActivityTag;