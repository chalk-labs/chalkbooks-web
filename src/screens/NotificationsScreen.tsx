import React from 'react';

const NotificationsScreen = () => {
  const notifications = [
    { id: 1, title: 'New Message', time: '2m ago', read: false },
    { id: 2, title: 'System Update', time: '1h ago', read: true },
    { id: 3, title: 'New Feature Available', time: '2h ago', read: true }
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h1>
      <div className="space-y-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg ${
              notification.read ? 'bg-white' : 'bg-indigo-50'
            } border border-gray-100`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{notification.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
              </div>
              {!notification.read && (
                <span className="h-2 w-2 bg-indigo-600 rounded-full"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsScreen;