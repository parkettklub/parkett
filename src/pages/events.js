import React from 'react'
import EventList from '../components/EventList';
import Header from '../components/Header.jsx';

const EventsPage = () => (

  <div>
    <Header events />
    <div className="pagecenter">
      <h1 style={{ marginTop: `6rem` }} ></h1>
      <EventList />
    </div>
  </div>
)

export default EventsPage;