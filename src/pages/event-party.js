import React from 'react'
import EventParty from '../components/EventParty';
import Header from '../components/Header.jsx';

const EventPartyPage = () => (

  <div>
    <Header events />
    <div className="pagecenter eventdetails-main">
      <h1 style={{ marginTop: `5rem` }} ></h1>
      <EventParty />
    </div>
  </div>
)

export default EventPartyPage