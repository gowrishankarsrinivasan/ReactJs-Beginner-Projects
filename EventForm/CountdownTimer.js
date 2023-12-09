import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const CountdownTimer = ({ eventName, eventDateTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const targetDate = new Date(eventDateTime);
    const timeDiff = targetDate - now;

    if (timeDiff < 0) {
      // Event has passed
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const remainingTime = {
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
    };

    return remainingTime;
  }

  return (
    <div>
      <h1>{eventName}</h1>
      <div>
        {timeRemaining.days} days, {timeRemaining.hours} hours, {timeRemaining.minutes} minutes,{' '}
        {timeRemaining.seconds} seconds
      </div>
    </div>
  );
};

export default CountdownTimer;
