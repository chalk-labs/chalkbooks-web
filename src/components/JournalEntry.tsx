import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import EntryModal from './modals/EntryModal';

interface JournalEntryProps {
  title: string;
  content: string;
  image?: string;
  mood: React.ReactNode;
  date: string;
  activities?: string[];
  feelings?: Array<{ emoji: string; text: string }>;
}

const JournalEntry = ({ title, content, image, mood, date, activities = [], feelings = [] }: JournalEntryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-xl p-4 mb-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {title}
            </h3>
            {image && (
              <div className="mt-2 mb-3">
                <img 
                  src={image} 
                  alt={title}
                  className="rounded-lg w-20 h-20 object-cover"
                />
              </div>
            )}
            <p className="text-gray-600">{content}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-2xl">{mood}</div>
            <button 
              className="text-gray-400"
              onClick={(e) => {
                e.stopPropagation();
                // Add more options handling here
              }}
            >
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>

      <EntryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        entry={{
          title,
          content,
          date,
          mood: mood as string,
          activities: activities,
          feelings: feelings,
          images: image ? [image] : [],
        }}
      />
    </>
  );
};

export default JournalEntry;