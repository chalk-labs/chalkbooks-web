import React from 'react';
import { ChevronRight } from 'lucide-react';

type SettingsItemProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

export default function SettingsItem({ icon, label, onClick }: SettingsItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between py-2"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  );
}