import React from 'react'
import Link from 'gatsby-link'
import EventList from '../components/EventList/EventList';

const IndexPage = () => (
  <div>
    <h1 style={{ marginTop: `6.4rem` }} >Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <EventList/>
  </div>
)

export default IndexPage
