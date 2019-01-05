import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Logo from './lines.svg';
import './Header.css';
import ParkettLogo from './ParkettLogoWhite02.svg';
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
      <header className={`main-header min ${(open ? ' open' : '')}`}>
        <div className="logo-div">
          <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
            <img className="mainLogo" src={ParkettLogo} alt="" />
          </Link>
          <div
            onClick={this.changeOpen}
            className="more"
            role="button"
            onKeyDown={() => { }}
            tabIndex={0}
          >
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="links">
          <ListLink to="/events/" active={events}>Események</ListLink>
          <ListLink to="/community/" active={community}>Közösség</ListLink>
          <ListLink to="/media/" active={media}>Média</ListLink>
          <ListLink to="/knowledge-base/" active={knowledgebase}>Tudásbázis</ListLink>
          <ListLink to="/profile/" active={profile}>Profilom</ListLink>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  events: PropTypes.bool.isRequired,
  community: PropTypes.bool.isRequired,
  media: PropTypes.bool.isRequired,
  knowledgebase: PropTypes.bool.isRequired,
  profile: PropTypes.bool.isRequired,
};

export default Header;
