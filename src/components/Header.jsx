import React from 'react'
import Link from 'gatsby-link'
import './Header.css';


const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

function Header() {
  return (
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
  )
}

export default Header
