import React from 'react'
import EventParty from '../components/EventDetails/EventParty';
import EventWorkshop from '../components/EventDetails/EventWorkshop';

const EventPage = () => (
  <div className="eventdetails-main">
    <h1 style={{ marginTop: `3.5rem` }} ></h1>
    <EventParty />
    <EventWorkshop />
  </div>
)

export default EventPage