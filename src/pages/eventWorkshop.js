import React from 'react'
import EventWorkshop from '../components/EventWorkshop';
import Header from '../components/Header.jsx';

const EventWorkshopPage = () => (

  <div>
    <Header />
    <div className="pagecenter eventdetails-main">
      <h1 style={{ marginTop: `5rem` }} ></h1>
      <EventWorkshop />
    </div>
  </div>
)

export default EventWorkshopPage