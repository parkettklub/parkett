import React from 'react'
import Link from 'gatsby-link'
import EditEvents from '../components/EditEvents';

const SecondPage = () => (
  <div style={{
    textAlign: 'center',
  }}>
    <h1 style={{ marginTop: `6rem` }} ></h1>
    <EditEvents />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
