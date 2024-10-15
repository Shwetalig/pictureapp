import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';

const ImageUpload: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [images, setImages] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages((prevImages) => [...prevImages, ...acceptedFiles].slice(0, 10));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 10,
  });

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    // TODO: Implement image upload to Firebase Storage
    console.log('Uploading images:', images);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Images for Event: {eventId}</h2>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-8 mb-4 text-center cursor-pointer ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 mx-auto mb-2 text-gray-400" />
        <p className="text-gray-600">
          {isDragActive
            ? 'Drop the images here'
            : 'Drag & drop images here, or click to select files'}
        </p>
      </div>
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={handleUpload}
        disabled={images.length === 0}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Upload {images.length} {images.length === 1 ? 'Image' : 'Images'}
      </button>
    </div>
  );
};

export default ImageUpload;