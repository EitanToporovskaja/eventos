const EventService = {
    getEvents: async () => {
      const response = await fetch('http://localhost:3508/api/events');
      return await response.json();
    }
  };
  
  export default EventService;
  