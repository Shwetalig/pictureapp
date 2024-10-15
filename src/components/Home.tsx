import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Upload, Search } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Event Snap</h1>
      <p className="text-xl mb-8">Capture, share, and relive your event memories</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/scan" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Camera className="w-16 h-16 mx-auto mb-4 text-blue-500" />
          <h2 className="text-2xl font-semibold mb-2">Scan QR Code</h2>
          <p>Scan the event QR code to start uploading your photos</p>
        </Link>
        <Link to="/upload" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Upload className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h2 className="text-2xl font-semibold mb-2">Upload Photos</h2>
          <p>Share up to 10 of your favorite moments from the event</p>
        </Link>
        <Link to="/search" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Search className="w-16 h-16 mx-auto mb-4 text-purple-500" />
          <h2 className="text-2xl font-semibold mb-2">Search Photos</h2>
          <p>Find and download photos from the event album</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;