import React from 'react';

interface WeeklySummaryProps {
  daysLeft: number;
  title: string;
  dateRange: string;
  description: string;
}

const WeeklySummary = ({ daysLeft, title, dateRange, description }: WeeklySummaryProps) => {
  return (
    <div className="bg-orange-50 rounded-xl p-4 mb-6">
      <div className="text-gray-500 mb-2">Next week summary in {daysLeft} days</div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-500 text-sm">{dateRange}</p>
      </div>
    </div>
  );
};

export default WeeklySummary;