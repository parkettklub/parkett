import React from 'react';
import Link from 'gatsby-link';
import './Header.css';
import ParkettLogo from './ParkettLogoWhite02.svg';
import Folk from './dancing-figures/FolkDance.svg';
import Kizomba from './dancing-figures/Kizomba.svg';
import Salsa from './dancing-figures/Salsa.svg';
import Swing from './dancing-figures/Swing.svg';
import ListLink from './ListLink';

function HeaderMax() {
    return (
        <header className="main-header max">
            <div className="logo-div">
                <Link to="/">
                    <img className="mainLogo" src={ParkettLogo} alt="" />
                    <img className="sideLogo" src={Kizomba} alt="" />
                    <img className="sideLogo2" src={Swing} alt="" />
                    <img className="sideLogo" src={Folk} alt="" />
                    <img className="sideLogo2" src={Salsa} alt="" />
                </Link>
            </div>
            <div className="links">
                <ListLink to="/events/">Események</ListLink>
                <ListLink to="/community/">Közösség</ListLink>
                <ListLink to="/media/">Média</ListLink>
                <ListLink to="/knowledge-base/">Tudásbázis</ListLink>
                <ListLink to="/profile/">Profilom</ListLink>
            </div>
        </header>
    );
}

export default HeaderMax;
