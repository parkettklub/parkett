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
    <header className="main-header">
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
    <main style={{ margin: `0 auto`, marginBottom: '5rem'}}>
    {children()}
    </main>
    <footer className='main-footer'>
      <div style={{
        margin: '1rem',
        color: '#ffffff'
      }}>
        Footer
      </div>
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
