import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{
    textAlign: 'center',
  }}>
    <h1 style={{ marginTop: `3.5rem` }} >Hi people</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
