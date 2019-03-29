import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Logo from './lines.svg';
import ParkettLogo from '../components/ParkettLogoWhite02.svg';
import styles from './Header.module.css'
import ListLink from './ListLink';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.changeOpen = this.changeOpen.bind(this);
  }

  changeOpen() {
    const { open } = this.state;
    this.setState({
      open: !(open),
    });
  }

  render() {
    const { open } = this.state;
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
            onClick={this.changeOpen}
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
            <ListLink to="/edit-band/">Szerkesztés</ListLink>
            <ListLink to="/login/">Belépés</ListLink>
          </div>
          <div className={styles.links}>
            <ListLink to="/events/" active={events}>Események</ListLink>
            <ListLink to="/community/" active={community}>Közösség</ListLink>
            <ListLink to="/media/" active={media}>Galéria</ListLink>
            <ListLink to="/knowledge-base/" active={knowledgebase}>Tudnivalók</ListLink>
            <ListLink to="/profile/" active={profile}>Profilom</ListLink>
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
