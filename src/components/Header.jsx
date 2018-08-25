import React from 'react'
import Link from 'gatsby-link'
import './Header.css';
import ParkettLogo from '../components/ParkettLogoWhite02.svg';


const ListLink = props =>
  <li className={props.hidden ? "hide" : props.active ? "active" : ""}>
    <Link to={props.to}>
      <b className="link">{props.children}</b>
    </Link>
  </li>

function Header(props) {
  return (
    <header className="main-header">
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <img className="mainLogo" src={ParkettLogo} />
      </Link>
      <nav style={{ position: `absolute`, bottom: '1em', right: 0 }}>
        <ul style={{ listStyle: `none`, margin: 0, display: `flex`, justifyContent: `flex-end` }}>
          <ListLink to="/events/" active={props.events}>Események</ListLink>
          <ListLink to="/community/" active={props.community}>Közösség</ListLink>
          <ListLink to="/media/" active={props.media}>Média</ListLink>
          <ListLink to="/knowledge-base/" active={props.knowledgebase}>Tudásbázis</ListLink>
          <ListLink to="/edit-knowledge-base/" active={props.editknowledgebase}>Adatok szerkesztése</ListLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
