import React from 'react';
import { Smile } from 'lucide-react';

type Entry = {
  id: number;
  title: string;
  content: string;
  mood: string;
  emoji: string;
};

type DailyEntriesProps = {
  date: string;
  entries: Entry[];
};

export default function DailyEntries({ date, entries }: DailyEntriesProps) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">{date}</h2>
      
      <div className="space-y-4">
        {entries.map(entry => (
          <div key={entry.id} className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                {entry.title}
                <span>{entry.emoji}</span>
              </h3>
              <div className="flex items-center gap-1 text-gray-500">
                <Smile className="w-4 h-4" />
                <span className="text-sm">{entry.mood}</span>
              </div>
            </div>
            <p className="text-gray-600">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}