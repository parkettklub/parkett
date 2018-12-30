import React from 'react'
import Link from 'gatsby-link'
import Logo from './lines.svg';
import './Header.css';
import ParkettLogo from '../components/ParkettLogoWhite02.svg';


const ListLink = props =>
    <div className={props.hidden ? "hide" : props.active ? "active" : ""}>
        <Link to={props.to}>
            <strong className="link">{props.children} </strong>
        </Link>
    </div>

class HeaderEdit extends React.Component {
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
                    <ListLink to="/edit-events/" active={this.props.event}>Események</ListLink>
                    <ListLink to="/edit-dj/" active={this.props.dj}>DJ-k</ListLink>
                    <ListLink to="/edit-band/" active={this.props.band}>Zenekarok</ListLink>
                    <ListLink to="/edit-teaching/" active={this.props.teaching}>Tanítások</ListLink>
                    <ListLink to="/edit-teacher/" active={this.props.teacher}>Tanárok</ListLink>
                    <ListLink to="/edit-dance/" active={this.props.dance}>Táncok</ListLink>
                </div>
            </header>
        )
    }
}

export default HeaderEdit
