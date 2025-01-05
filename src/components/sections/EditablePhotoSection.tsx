import React from 'react';
import { Plus, X } from 'lucide-react';

interface EditablePhotoSectionProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
}

const EditablePhotoSection = ({ images, onImagesChange }: EditablePhotoSectionProps) => {
  const handleRemoveImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  const handleAddImage = () => {
    // In a real app, this would open an image picker
    const newImage = prompt('Enter image URL');
    if (newImage) {
      onImagesChange([...images, newImage]);
    }
  };

  return (
    <div>
      <h2 className="text-gray-500 mb-3">PHOTOS TO REMEMBER</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Memory ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center"
            >
              <X size={14} className="text-white" />
            </button>
          </div>
        ))}
        <button 
          onClick={handleAddImage}
          className="w-full h-40 bg-white rounded-lg flex items-center justify-center"
        >
          <Plus size={24} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default EditablePhotoSection;