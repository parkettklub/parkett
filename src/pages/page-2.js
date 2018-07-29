import React from 'react'
import Link from 'gatsby-link'
import EventParty from '../components/EventDetails/EventParty';
import EventWorkshop from '../components/EventDetails/EventWorkshop';

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <EventParty/>
    <EventWorkshop/>
    
  </div>
)

export default SecondPage
