import React from 'react';
import { ArrowLeft, Bell, User, Lock, Fingerprint, LifeBuoy, FileText, Trash2, Copy } from 'lucide-react';
import SettingsItem from './SettingsItem';
import SettingsToggle from './SettingsToggle';
import { clearUser, setUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function SettingsScreen({ onClose, onNotificationsClick }: {
  onClose: () => void;
  onNotificationsClick: () => void;
}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => { 
    // Reset user store to null state

    dispatch(clearUser());
    navigate('/signin');
      // Navigate to sign-in screen

    console.log('Signing out...');
  };
  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="p-6">
        <button onClick={onClose} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <div className="space-y-6">
          <SettingsItem 
            icon={<Bell className="w-6 h-6 text-yellow-400" />}
            label="Notifications"
            onClick={onNotificationsClick}
          />
          
          <SettingsItem 
            icon={<User className="w-6 h-6 text-coral-400" />}
            label="Edit Name"
          />
          
          <SettingsItem 
            icon={<Lock className="w-6 h-6 text-green-400" />}
            label="Set Up Passcode"
          />
          
          <SettingsToggle 
            icon={<Fingerprint className="w-6 h-6 text-blue-400" />}
            label="Fingerprint"
            value={false}
            onChange={() => {}}
          />
          
          <SettingsItem 
            icon={<LifeBuoy className="w-6 h-6 text-coral-400" />}
            label="Contact Support"
          />
          
          <SettingsItem 
            icon={<Copy className="w-6 h-6 text-gray-400" />}
            label="Copy My ID"
          />
          
          <SettingsItem 
            icon={<FileText className="w-6 h-6 text-blue-400" />}
            label="Terms of Use"
          />
          
          <SettingsItem 
            icon={<FileText className="w-6 h-6 text-blue-400" />}
            label="Privacy Policy"
          />
          
          <SettingsItem 
            icon={<Trash2 className="w-6 h-6 text-coral-400" />}
            label="Erase Personal Data"
          />
        </div>
        
        <button className="w-full text-coral-500 font-medium mt-8"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}