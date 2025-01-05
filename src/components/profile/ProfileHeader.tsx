import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import SettingsScreen from '../settings/SettingsScreen';
import NotificationsScreen from '../settings/NotificationsScreen';

export default function ProfileHeader() {
  const [showSettings, setShowSettings] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">Rahil</h1>
        <button 
          className="p-2 rounded-lg bg-gray-100"
          onClick={() => setShowSettings(true)}
        >
          <Settings className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {showSettings && (
        <SettingsScreen 
          onClose={() => setShowSettings(false)}
          onNotificationsClick={() => {
            setShowSettings(false);
            setShowNotifications(true);
          }}
        />
      )}

      {showNotifications && (
        <NotificationsScreen 
          onClose={() => setShowNotifications(false)}
        />
      )}
    </>
  );
}