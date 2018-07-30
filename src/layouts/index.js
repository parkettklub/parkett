import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from "gatsby-link";

import Header from '../components/header'
import './index.css'
import 'normalize.css'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default ({ children }) =>
  <div style={{position: `relative`, height: `100%`}}>
    <header style={
      { marginBottom: `1.5rem`,
        padding: `1rem`,
        backgroundColor: `rgba(10, 10, 10, .2)`,
        color: `white`,
        position: `fixed`,
        top: 0,
        width: `100%`
       }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Parkett Klub</h3>
      </Link>
      <nav style={{ position: `absolute`, bottom: 0, right: 0 }}> 
      <ul style={{ listStyle: `none`, margin: 0, display: `flex`, justifyContent: `flex-end` }}>
        <ListLink to="/events">Események</ListLink>
        <ListLink to="/community/">Közösség</ListLink>
        <ListLink to="/media/">Média</ListLink>
        <ListLink to="/knowledge-base/">Tudásbázis</ListLink>
      </ul>
      </nav>
    </header>
    <main style={{ margin: `0 auto`}}>
    {children()}
    </main>
    <footer style={{
      height: `7rem`,
      backgroundColor: `rgba(10, 10, 10, .2)`,
      width: `100%`,
      bottom: 0
    }}>
    </footer>
  </div>

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
