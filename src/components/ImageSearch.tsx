import React, { useState } from 'react';
import { Search, Upload } from 'lucide-react';

const ImageSearch: React.FC = () => {
  const [searchImage, setSearchImage] = useState<File | null>(null);
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSearchImage(event.target.files[0]);
    }
  };

  const handleSearch = async () => {
    if (searchImage) {
      // TODO: Implement image search functionality
      // This would involve sending the image to a backend service for processing
      // and receiving similar images as a result
      console.log('Searching with image:', searchImage);
      
      // Simulated results
      setSearchResults([
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        'https://images.unsplash.com/photo-1551712702-4b7335dd8706?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      ]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Search Images</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <label htmlFor="image-upload" className="flex-grow cursor-pointer">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-600">
                {searchImage ? searchImage.name : 'Upload an image to search'}
              </p>
            </div>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <button
            onClick={handleSearch}
            disabled={!searchImage}
            className="ml-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Search Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {searchResults.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Search result ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSearch;