import React from 'react'
import Link from 'gatsby-link'
import Logo from './lines.svg';
import './Header.css';
import ParkettLogo from '../components/ParkettLogoWhite02.svg';
import * as Login from '../utils/login';
import styles from './Header.module.css'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }

    this.changeOpen = this.changeOpen.bind(this);
  }

  changeOpen() {
    this.setState({
      open: !(this.state.open)
    });
  }

  render() {

    return (
      <header className={"main-header min" + (this.state.open ? " open " : " ") + styles.header}>
        <div className="logo-div">
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img className="mainLogo" src={ParkettLogo} />
          </Link>
          <div onClick={this.changeOpen} className="more">
            <img src={Logo} />
          </div>
        </div>
        <div className="links">
          <Link className={styles.link} to="/events/">Események</Link>
          <Link className={styles.link} to="/community/">Közösség</Link>
          <Link className={styles.link} to="/media/">Média</Link>
          <Link className={styles.link} to="/knowledge-base/">Tudásbázis</Link>
          {Login.isLoggedIn() ?
            <Link className={styles.link} to="/profile/">Profilom</Link> :
            <a className={styles.link} href={Login.getLoginUrl()}>Bejelentkezés</a>
          }
        </div>
      </header>
    )
  }
}

export default Header
