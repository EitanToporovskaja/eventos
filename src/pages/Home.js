import React, { useEffect, useState } from 'react';
import EventService from '../services/EventService';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await EventService.getEvents();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="container">
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
