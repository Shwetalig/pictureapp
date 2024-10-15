import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useNavigate } from 'react-router-dom';

const QRScanner: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleScan = (result: string | null) => {
    if (result) {
      // Assuming the QR code contains the event ID
      navigate(`/upload/${result}`);
    }
  };

  const handleError = (err: Error) => {
    setError(err.message);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Scan Event QR Code</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <QrReader
          onResult={(result, error) => {
            if (result) {
              handleScan(result.getText());
            }
            if (error) {
              handleError(error);
            }
          }}
          constraints={{ facingMode: 'environment' }}
          className="w-full"
        />
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default QRScanner;