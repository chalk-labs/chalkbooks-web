import React from 'react';
import { Settings, Edit2 } from 'lucide-react';

const ProfileScreen = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <Settings className="text-gray-600" size={20} />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-indigo-600 p-1.5 rounded-full text-white">
            <Edit2 size={12} />
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">@johndoe</p>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 border-y border-gray-200">
        <div className="text-center">
          <p className="font-semibold">245</p>
          <p className="text-sm text-gray-600">Posts</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">14.3k</p>
          <p className="text-sm text-gray-600">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">892</p>
          <p className="text-sm text-gray-600">Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;