import React, { useState } from 'react';
import { ArrowLeft, Bell, Sun, Moon } from 'lucide-react';
import NotificationItem from './NotificationItem';

type Reminder = {
  id: string;
  time: string;
  enabled: boolean;
};

export default function NotificationsScreen({ onClose }: { onClose: () => void }) {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 'morning', time: '09:00 AM', enabled: true },
    { id: 'day', time: '02:30 PM', enabled: true },
    { id: 'evening', time: '09:00 PM', enabled: true },
  ]);

  const toggleReminder = (id: string) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, enabled: !reminder.enabled }
          : reminder
      )
    );
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="p-6">
        <button onClick={onClose} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex items-center justify-center mb-6">
          <Bell className="w-12 h-12 text-yellow-400" />
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2">Notifications</h1>
        <p className="text-gray-500 text-center mb-8">
          Users who set reminders journal<br />
          2x more consistently
        </p>
        
        <div className="space-y-4">
          <NotificationItem
            icon={<Sun className="w-6 h-6" />}
            label="Morning"
            time="09:00 AM"
            enabled={reminders[0].enabled}
            onChange={() => toggleReminder('morning')}
            className="bg-yellow-50"
          />
          
          <NotificationItem
            icon={<Sun className="w-6 h-6" />}
            label="Day"
            time="02:30 PM"
            enabled={reminders[1].enabled}
            onChange={() => toggleReminder('day')}
            className="bg-coral-50"
          />
          
          <NotificationItem
            icon={<Moon className="w-6 h-6" />}
            label="Evening"
            time="09:00 PM"
            enabled={reminders[2].enabled}
            onChange={() => toggleReminder('evening')}
            className="bg-purple-50"
          />
        </div>
      </div>
    </div>
  );
}