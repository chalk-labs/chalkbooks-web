import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Modal from '../shared/Modal';
import DailyEntries from './DailyEntries';

const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

// Mock data for demonstration
const mockEntries = [
  {
    id: 1,
    title: 'Quick Greeting 👋',
    content: 'Hi',
    mood: 'Fine',
    emoji: '😑'
  },
  {
    id: 2,
    title: 'Lazy Day & Work 😪💼',
    content: "Hello I'm not talking to you\nToday was a bit lazy day\nI had some meetings on zplan",
    mood: 'Fine',
    emoji: '😑'
  }
];

export default function EntriesCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDayClick = (day: number) => {
    setSelectedDate(`January ${day}, 2025`);
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-6 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Entries Calendar</h2>
          <div className="flex gap-2">
            <ChevronLeft className="w-6 h-6 text-gray-400" />
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        <p className="text-gray-500 mb-4">January 2025</p>
        
        <div className="grid grid-cols-7 gap-2 text-center mb-2">
          {weekDays.map(day => (
            <div key={day} className="text-gray-400 text-sm">{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div 
              key={i}
              className="aspect-square flex items-center justify-center"
              onClick={() => handleDayClick(i + 1)}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center transition-colors">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedDate} 
        onClose={() => setSelectedDate(null)}
      >
        <DailyEntries 
          date={selectedDate || ''} 
          entries={mockEntries}
        />
      </Modal>
    </>
  );
}