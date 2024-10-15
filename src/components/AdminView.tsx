import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const AdminView: React.FC = () => {
  const [events, setEvents] = useState<{ id: string; name: string }[]>([]);
  const [newEventName, setNewEventName] = useState('');

  useEffect(() => {
    // TODO: Fetch events from Firebase
    setEvents([
      { id: 'event1', name: 'Wedding of John & Jane' },
      { id: 'event2', name: 'Company Summer Party' },
    ]);
  }, []);

  const handleCreateEvent = () => {
    if (newEventName.trim()) {
      // TODO: Create event in Firebase and get the new event ID
      const newEventId = `event${events.length + 1}`;
      setEvents([...events, { id: newEventId, name: newEventName }]);
      setNewEventName('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Create New Event</h3>
        <div className="flex">
          <input
            type="text"
            value={newEventName}
            onChange={(e) => setNewEventName(e.target.value)}
            placeholder="Enter event name"
            className="flex-grow border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCreateEvent}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Create Event
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Event List</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="border p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">{event.name}</h4>
              <p className="text-gray-600 mb-4">Event ID: {event.id}</p>
              <QRCodeSVG value={event.id} size={128} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminView;