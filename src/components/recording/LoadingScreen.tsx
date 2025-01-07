import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoadingScreen() {
    const navigate = useNavigate();
    const onClose = () => {
        navigate("/");
    }
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
  )
}
