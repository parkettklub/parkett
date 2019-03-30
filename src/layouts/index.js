import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import './index.css';
import 'normalize.css';
import 'url-polyfill';


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
  data: PropTypes.object,
}

export default ({ children }) =>
  <div style={{ position: `relative`, minHeight: `100%`, paddingBottom: '14em' }}>
    <main style={{ margin: `0 auto`, marginBottom: '1rem' }}>
      {children()}
    </main>
    <Footer />
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
