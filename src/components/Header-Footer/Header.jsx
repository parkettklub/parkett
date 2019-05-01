import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Logo from './lines.svg';
import ParkettLogo from './ParkettWithText.svg';
import styles from './Header.module.css';
import ListLink from './ListLink';
import {
  getLoginUrl, isLoggedIn, logOut, isEditor,
} from '../../utils/login';
import LanguageSelector from './LanguageSelector';
import texts from '../../utils/Descriptions';

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
      <header className={`${styles.main} ${(open ? styles.open : '')}`}>
        <div className={styles.logoAndStrikes}>
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
            <LanguageSelector />
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
            <ListLink to="/events/" active={events}>{texts.header.events}</ListLink>
            <ListLink to="/community/" active={community}>{texts.header.community}</ListLink>
            <ListLink to="/media/" active={media}>{texts.header.media}</ListLink>
            <ListLink to="/knowledge-base/" active={knowledgebase}>{texts.header.knowledgebase}</ListLink>
            <ListLink to="/profile/" active={profile} hidden={!loggedIn}>{texts.header.profile}</ListLink>
            {isEditor()
              ? <ListLink to="/edit-band/">{texts.header.edit}</ListLink>
              : null
            }
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
