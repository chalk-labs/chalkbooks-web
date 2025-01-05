import React from 'react';
import { Check } from 'lucide-react';

type NotificationItemProps = {
  icon: React.ReactNode;
  label: string;
  time: string;
  enabled: boolean;
  onChange: () => void;
  className?: string;
};

export default function NotificationItem({
  icon,
  label,
  time,
  enabled,
  onChange,
  className = '',
}: NotificationItemProps) {
  return (
    <button
      onClick={onChange}
      className={`w-full flex items-center justify-between p-4 rounded-xl ${className}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm bg-white/50 px-3 py-1 rounded-full">
          {time}
        </span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
          enabled ? 'bg-black' : 'bg-gray-200'
        }`}>
          {enabled && <Check className="w-4 h-4 text-white" />}
        </div>
      </div>
    </button>
  );
}