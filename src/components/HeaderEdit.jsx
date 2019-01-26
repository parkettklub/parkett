import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Logo from './lines.svg';
import './Header.css';
import ParkettLogo from './ParkettLogoWhite02.svg';
import ListLink from './ListLink';

class HeaderEdit extends React.Component {
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
            event, dj, band, teaching, teacher, dance,
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
                    <ListLink to="/edit-events/" active={event}>Események</ListLink>
                    <ListLink to="/edit-dj/" active={dj}>DJ-k</ListLink>
                    <ListLink to="/edit-band/" active={band}>Zenekarok</ListLink>
                    <ListLink to="/edit-teaching/" active={teaching}>Tanítások</ListLink>
                    <ListLink to="/edit-teacher/" active={teacher}>Tanárok</ListLink>
                    <ListLink to="/edit-dance/" active={dance}>Táncok</ListLink>
                </div>
            </header>
        );
    }
}


HeaderEdit.propTypes = {
    event: PropTypes.bool,
    dj: PropTypes.bool,
    band: PropTypes.bool,
    teacher: PropTypes.bool,
    teaching: PropTypes.bool,
    dance: PropTypes.bool,
};

HeaderEdit.defaultProps = {
    event: false,
    dj: false,
    band: false,
    teacher: false,
    teaching: false,
    dance: false,
};

export default HeaderEdit;
