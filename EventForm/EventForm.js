import React, { useState } from 'react';

const EventForm = ({ onStartClick }) => {
  const [eventName, setEventName] = useState('');
  const [eventDateTime, setEventDateTime] = useState('');
  const [error, setError] = useState('');

  const validateInputs = () => {
    setError('');

    if (!eventName) {
      setError('Event name cannot be blank.');
      return false;
    }

    if (!eventDateTime) {
      setError('Event date and time cannot be blank.');
      return false;
    }

    const targetDate = new Date(eventDateTime);

    // if (targetDate.toString() === 'Invalid') {
    //   setError('Invalid date or time format.');
    //   return false;
    // }

    if (targetDate < new Date()) {
      setError('Event date and time must be in the future.');
      return false;
    }

    return true;
  };

  const handleStartClick = () => {
    if (validateInputs()) {
      onStartClick(eventName, eventDateTime);
    }
  };

  return (
    <div>
      <h1>Countdown Timer App</h1>
      <div>
        <label>
          Event Name:
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Event Date and Time:
          <input type="datetime-local" value={eventDateTime} onChange={(e) => setEventDateTime(e.target.value)} />
        </label>
      </div>
      <button onClick={handleStartClick}>Start Countdown</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default EventForm;
