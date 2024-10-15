import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import QRScanner from './components/QRScanner';
import ImageUpload from './components/ImageUpload';
import AdminView from './components/AdminView';
import ImageSearch from './components/ImageSearch';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scan" element={<QRScanner />} />
            <Route path="/upload/:eventId" element={<ImageUpload />} />
            <Route path="/admin" element={<AdminView />} />
            <Route path="/search" element={<ImageSearch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;