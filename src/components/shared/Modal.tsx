import React from 'react';
import { X } from 'lucide-react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-lg">
        <div className="relative bg-white rounded-2xl shadow-xl">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}