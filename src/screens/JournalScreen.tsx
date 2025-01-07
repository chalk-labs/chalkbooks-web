import React, { useEffect } from 'react';
import JournalHeader from '../components/JournalHeader';
import WeeklySummary from '../components/WeeklySummary';
import JournalEntry from '../components/JournalEntry';
import { useSelector } from 'react-redux';

const JournalScreen = () => {
  const entries = useSelector((state) => state.entry.entries);
  // console.log(entries);
  // const user = useSelector((state) => state.user);

  useEffect(() => {
    
  }, [entries]);

  const date = new Date();
  const today = date.toISOString().split('T')[0];
  date.setDate(date.getDate() - 1);
  const yesterday = date.toISOString().split('T')[0];
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
          {entries.filter((entry)=> entry.date === today).map((entry, index) => (
            <JournalEntry key={index} {...entry} />
          ))}
        </div>

        <div className="space-y-2">
          <h2 className="text-gray-500 text-lg">Yesterday</h2>
          {entries.filter((entry )=> entry.date === yesterday).map((entry, index) => (
            <JournalEntry key={index} {...entry} />
          ))}
        </div>

        <div className="space-y-2">
          <h2 className="text-gray-500 text-lg">Past</h2>
          {entries.filter((entry )=> {return entry.date !== today && entry.date !== yesterday}).map((entry, index) => (
            <JournalEntry key={index} {...entry} />
          ))}
        </div>

  
      </div>
    </div>
  );
};

export default JournalScreen;