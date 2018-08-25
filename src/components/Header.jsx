import React from 'react'
import Link from 'gatsby-link'
import Logo from './lines.svg';
import './Header.css';
import ParkettLogo from '../components/ParkettLogoWhite02.svg';


const ListLink = props =>
  <div className={props.hidden ? "hide" : props.active ? "active" : ""}>
    <Link to={props.to}>
      <b className="link">{props.children}</b>
    </Link>
  </div>

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
      <header className={"main-header min" + (this.state.open ? " open" : "")}>
        <div className="logo-div">
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img className="mainLogo" src={ParkettLogo} />
          </Link>
          <div onClick={this.changeOpen} className="more">
            <img src={Logo} />
          </div>
        </div>
        <div className="links">
          <ListLink to="/events/" active={this.props.events}>Események</ListLink>
          <ListLink to="/community/" active={this.props.community}>Közösség</ListLink>
          <ListLink to="/media/" active={this.props.media}>Média</ListLink>
          <ListLink to="/knowledge-base/" active={this.props.knowledgebase}>Tudásbázis</ListLink>
          <ListLink to="/edit-knowledge-base/" active={this.props.editknowledgebase}>Adatok szerkesztése</ListLink>

        </div>
      </header>
    )
  }
}

export default Header
