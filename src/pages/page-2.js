import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div style={{
    textAlign: 'center',
  }}>
    <h1 style={{ marginTop: `3.5rem` }} >Hi from the second page</h1>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
