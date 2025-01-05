import React, { useState } from 'react';
import { X } from 'lucide-react';
import ActivityTag from '../tags/ActivityTag';
import FeelingTag from '../tags/FeelingTag';
import PhotoSection from '../sections/PhotoSection';
import EntryEditModal from './EntryEditModal';
import type { EntryData } from './EntryEditModal';

interface EntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: EntryData;
  onUpdate?: (entry: EntryData) => void;
}

const EntryModal = ({ isOpen, onClose, entry, onUpdate }: EntryModalProps) => {
  const [isEditMode, setIsEditMode] = useState(false);

  if (!isOpen) return null;

  const handleUpdate = (updatedEntry: EntryData) => {
    onUpdate?.(updatedEntry);
    setIsEditMode(false);
  };

  if (isEditMode) {
    return (
      <EntryEditModal
        isOpen={true}
        onClose={() => setIsEditMode(false)}
        entry={entry}
        onSave={handleUpdate}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-mint-50 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <button onClick={onClose} className="p-2 rounded-full bg-white">
            <X size={24} />
          </button>
          <div className="text-center">
            <div className="font-semibold">Today</div>
            <div className="text-gray-500 text-sm">{entry.time || '11:24 AM'}</div>
          </div>
          <button 
            onClick={() => setIsEditMode(true)}
            className="px-4 py-2 rounded-full bg-white font-medium"
          >
            Edit
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Mood */}
          <div className="flex justify-center">
            <div className="text-6xl">{entry.mood}</div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center">{entry.title}</h1>

          {/* Activities */}
          <div className="flex flex-wrap gap-2">
            {entry.activities.map((activity, index) => (
              <ActivityTag key={index} text={activity} />
            ))}
          </div>

          {/* Feelings */}
          <div>
            <h2 className="text-gray-500 mb-3">FEELINGS</h2>
            <div className="flex flex-wrap gap-2">
              {entry.feelings.map((feeling, index) => (
                <FeelingTag key={index} emoji={feeling.emoji} text={feeling.text} />
              ))}
            </div>
          </div>

          {/* Photos */}
          <PhotoSection images={entry.images || []} />

          {/* Transcript */}
          <div>
            <h2 className="text-gray-500 mb-3">TRANSCRIPT ({entry.content.split(' ').length} words)</h2>
            <div className="space-y-4 text-xl">
              {entry.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryModal;