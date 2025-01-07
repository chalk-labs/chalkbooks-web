import React, { useState, useEffect } from 'react';
import { Square, X, Check, Mic } from 'lucide-react';

interface RecordingScreenProps {
  onClose: () => void;
  onConfirm: (audioBlob: Blob) => void;
}

export default function RecordingScreen({ onClose, onConfirm }: RecordingScreenProps) {
  const [isRecording, setIsRecording] = useState(true);
  const [duration, setDuration] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isRecording) {
      interval = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      // In a real app, we'd pass the actual audio blob
      onConfirm(new Blob());
    }, 5000);
  };

  if (analyzing) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
        <div className="text-sm text-gray-500 mb-2">
          {new Date().toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })}
        </div>
        <h1 className="text-3xl font-bold mb-8">Analyzing emotions..</h1>
        <div className="w-16 h-16 bg-purple-100 rounded-full animate-pulse" />
        <button 
          onClick={onClose}
          className="mt-auto mb-8 text-gray-500"
        >
          Cancel
        </button>
      </div>
    );
  }

  if (showConfirm) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center">
        <div className="text-center p-4 mb-8 items-center justify-center">
          <h2 className="text-xl text-gray-500">
            Confirm to analyze entry or record more
          </h2>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold">How are you today?</h1>
        </div>

        <div className="w-full px-8 pb-8">
          <div className="text-center mb-4">{formatTime(duration)}</div>
          <div className="flex justify-between items-center gap-4">
            <button 
              onClick={onClose}
              className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <X size={24} />
            </button>
            <button 
              className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center"
            >
              <Mic size={32} />
            </button>
            <button 
              onClick={handleConfirm}
              className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center"
            >
              <Check size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center">
      <div className="flex-1 flex items-center justify-center" style={{ height: '10%%' }}>
        <h1 className="text-4xl font-bold">How are you today?</h1>
      </div>

      <div className="w-full">
        <div className="text-center mb-4">{formatTime(duration)}</div>
        <button 
          onClick={() => {
            if (isRecording) {
              handleStopRecording();
            } else {
              setIsRecording(true);
            }
          }}
          className="w-24 h-24 bg-purple-100 rounded-full mx-auto flex items-center justify-center"
        >
          {isRecording ? <Square size={32} /> : <Mic size={32} />}
        </button>
      </div>
    </div>
  );
}