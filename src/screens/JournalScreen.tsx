import React from 'react';
import JournalHeader from '../components/JournalHeader';
import WeeklySummary from '../components/WeeklySummary';
import JournalEntry from '../components/JournalEntry';

const JournalScreen = () => {
  const entries = [
    {
      title: 'Productive Morning 🏃‍♂️💻',
      content: 'A fresh day, I went for a jog.\n\nWatched some inspirational videos.\n\nPlanned some things for my next build.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=200',
      mood: '😊',
      date: 'Today',
      activities: ['jogging', 'watching videos', 'planning build'],
      feelings: [
        { emoji: '😊', text: 'motivated' },
        { emoji: '✨', text: 'inspired' }
      ]
    },
    {
      title: "What I'm grateful for today",
      content: 'I got a very motivated business partner',
      mood: '❤️',
      date: 'Yesterday',
      feelings: [
        { emoji: '❤️', text: 'grateful' }
      ]
    },
    {
      title: 'Under the Weather 🤧😕',
      content: 'Caught cold',
      mood: '😷',
      date: 'Yesterday',
      feelings: [
        { emoji: '🤒', text: 'sick' }
      ]
    }
  ];

  return (
    <div className="pb-20">
      <JournalHeader />
      
      <div className="px-4">
        <WeeklySummary
          daysLeft={1}
          title="Week of Productivity and Connection"
          description="This week was a mixed bag, with moments..."
          dateRange="Dec 30 - Jan 5"
        />

        <div className="space-y-2 mb-6">
          <h2 className="text-gray-500 text-lg">Today</h2>
          {entries.filter(entry => entry.date === 'Today').map((entry, index) => (
            <JournalEntry key={index} {...entry} />
          ))}
        </div>

        <div className="space-y-2">
          <h2 className="text-gray-500 text-lg">Yesterday</h2>
          {entries.filter(entry => entry.date === 'Yesterday').map((entry, index) => (
            <JournalEntry key={index} {...entry} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalScreen;