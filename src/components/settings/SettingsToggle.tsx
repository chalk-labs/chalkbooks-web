import React from 'react';

type SettingsToggleProps = {
  icon: React.ReactNode;
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

export default function SettingsToggle({ icon, label, value, onChange }: SettingsToggleProps) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="w-full flex items-center justify-between py-2"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg">{label}</span>
      </div>
      <span className="text-gray-400">
        {value ? 'On' : 'Off'}
      </span>
    </button>
  );
}