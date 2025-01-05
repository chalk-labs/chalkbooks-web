import React from 'react';
import { Plus } from 'lucide-react';

interface PhotoSectionProps {
  images: string[];
}

const PhotoSection = ({ images }: PhotoSectionProps) => {
  return (
    <div>
      <h2 className="text-gray-500 mb-3">PHOTOS TO REMEMBER</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Memory ${index + 1}`}
            className="w-full h-40 object-cover rounded-lg"
          />
        ))}
        <button className="w-full h-40 bg-white rounded-lg flex items-center justify-center">
          <Plus size={24} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default PhotoSection;