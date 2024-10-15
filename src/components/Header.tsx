import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Upload, Search, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Event Snap
        </Link>
        <div className="flex space-x-4">
          <Link to="/scan" className="flex items-center text-gray-600 hover:text-gray-800">
            <Camera className="w-5 h-5 mr-1" />
            Scan QR
          </Link>
          <Link to="/upload" className="flex items-center text-gray-600 hover:text-gray-800">
            <Upload className="w-5 h-5 mr-1" />
            Upload
          </Link>
          <Link to="/search" className="flex items-center text-gray-600 hover:text-gray-800">
            <Search className="w-5 h-5 mr-1" />
            Search
          </Link>
          <Link to="/admin" className="flex items-center text-gray-600 hover:text-gray-800">
            <Settings className="w-5 h-5 mr-1" />
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;