import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Logo from './lines.svg';
import ParkettLogo from './ParkettLogoWhite02.svg';
import styles from './Header.module.css';
import ListLink from './ListLink';
import {
  getLoginUrl, isLoggedIn, logOut, isEditor,
} from '../utils/login';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      loggedIn: false,
    };
  }

  componentDidMount() {
    this.setState({ loggedIn: isLoggedIn() });
  }

  toggleOpen = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  logIn = () => {
    this.setState({ loggedIn: true });
  }

  logOut = () => {
    logOut();
    this.setState({ loggedIn: false });
  }

  render() {
    const { open, loggedIn } = this.state;
    const {
      events, community, media, knowledgebase, profile,
    } = this.props;
    return (
      <header className={`${styles.main} ${styles.min} ${(open ? styles.open : '')}`}>
        <div className={styles.logo}>
          <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
            <img className={styles.mainLogo} src={ParkettLogo} alt="" />
          </Link>
          <div
            onClick={this.toggleOpen}
            className={styles.more}
            role="button"
            onKeyDown={() => { }}
            tabIndex={0}
          >
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.login}>
            {isEditor()
              ? <ListLink to="/edit-band/">Szerkesztés</ListLink>
              : null
            }
            {loggedIn
              ? (
                <span
                  className={styles.button}
                  onClick={this.logOut}
                  role="button"
                  onKeyDown={() => { }}
                  tabIndex={0}
                >
                  {'Kijelentkezés'}
                </span>
              )
              : <a className={`${styles.button} ${styles.loggedOut}`} href={getLoginUrl()}>Belépés</a>
            }
          </div>
          <div className={styles.links}>
            <ListLink to="/events/" active={events}>Események</ListLink>
            <ListLink to="/community/" active={community}>Közösség</ListLink>
            <ListLink to="/media/" active={media}>Galéria</ListLink>
            <ListLink to="/knowledge-base/" active={knowledgebase}>Tudnivalók</ListLink>
            <ListLink to="/profile/" active={profile} hidden={!loggedIn}>Profilom</ListLink>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  events: PropTypes.bool,
  community: PropTypes.bool,
  media: PropTypes.bool,
  knowledgebase: PropTypes.bool,
  profile: PropTypes.bool,
};

Header.defaultProps = {
  events: false,
  community: false,
  media: false,
  knowledgebase: false,
  profile: false,
};

export default Header;
