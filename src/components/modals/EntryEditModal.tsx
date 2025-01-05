import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import MoodSelector from '../selectors/MoodSelector';
import EditableActivityTag from '../tags/EditableActivityTag';
import EditableFeelingTag from '../tags/EditableFeelingTag';
import EditablePhotoSection from '../sections/EditablePhotoSection';
import EditableTitle from '../inputs/EditableTitle';
import EditableTranscript from '../inputs/EditableTranscript';

interface EntryEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (entry: EntryData) => void;
  entry: EntryData;
}

export interface EntryData {
  title: string;
  content: string;
  date: string;
  time?: string;
  mood: string;
  activities: string[];
  feelings: Array<{ emoji: string; text: string }>;
  images?: string[];
}

const EntryEditModal = ({ isOpen, onClose, onSave, entry }: EntryEditModalProps) => {
  const [editedEntry, setEditedEntry] = useState<EntryData>(entry);

  const handleSave = () => {
    onSave(editedEntry);
    onClose();
  };

  const updateEntry = (updates: Partial<EntryData>) => {
    setEditedEntry(prev => ({ ...prev, ...updates }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-mint-50 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          <button onClick={onClose} className="p-2 rounded-full bg-white">
            <X size={24} />
          </button>
          <h2 className="text-xl font-semibold">Edit Entry</h2>
          <button 
            onClick={handleSave}
            className="px-6 py-2 rounded-full bg-black text-white font-medium"
          >
            Done
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Mood Selector */}
          <MoodSelector
            selected={editedEntry.mood}
            onChange={(mood) => updateEntry({ mood })}
          />

          {/* Title */}
          <EditableTitle
            value={editedEntry.title}
            onChange={(title) => updateEntry({ title })}
          />

          {/* Activities */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {editedEntry.activities.map((activity, index) => (
                <EditableActivityTag
                  key={index}
                  text={activity}
                  onRemove={() => {
                    const newActivities = editedEntry.activities.filter((_, i) => i !== index);
                    updateEntry({ activities: newActivities });
                  }}
                />
              ))}
              <button 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-500"
                onClick={() => {
                  const newActivity = prompt('Enter new activity');
                  if (newActivity) {
                    updateEntry({ 
                      activities: [...editedEntry.activities, newActivity]
                    });
                  }
                }}
              >
                <Plus size={16} />
                add activity
              </button>
            </div>
          </div>

          {/* Feelings */}
          <div className="space-y-3">
            <h2 className="text-gray-500">FEELINGS</h2>
            <div className="flex flex-wrap gap-2">
              {editedEntry.feelings.map((feeling, index) => (
                <EditableFeelingTag
                  key={index}
                  emoji={feeling.emoji}
                  text={feeling.text}
                  onRemove={() => {
                    const newFeelings = editedEntry.feelings.filter((_, i) => i !== index);
                    updateEntry({ feelings: newFeelings });
                  }}
                />
              ))}
              <button 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-500"
                onClick={() => {
                  // In a real app, this would open an emoji picker
                  const newFeeling = prompt('Enter feeling (emoji text)');
                  if (newFeeling) {
                    const [emoji, text] = newFeeling.split(' ');
                    updateEntry({ 
                      feelings: [...editedEntry.feelings, { emoji, text }]
                    });
                  }
                }}
              >
                <Plus size={16} />
                add
              </button>
            </div>
          </div>

          {/* Photos */}
          <EditablePhotoSection
            images={editedEntry.images || []}
            onImagesChange={(images) => updateEntry({ images })}
          />

          {/* Transcript */}
          <EditableTranscript
            content={editedEntry.content}
            onChange={(content) => updateEntry({ content })}
          />
        </div>
      </div>
    </div>
  );
};

export default EntryEditModal;