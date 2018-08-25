import React from 'react'
import Link from 'gatsby-link'
import './Header.css';
import ParkettLogo from '../components/ParkettLogoWhite02.svg';
import Folk from '../components/dancing-figures/FolkDance.svg';
import Kizomba from '../components/dancing-figures/Kizomba.svg';
import Salsa from '../components/dancing-figures/Salsa.svg';
import Swing from '../components/dancing-figures/Swing.svg';


const ListLink = props =>
    <div className={props.hidden ? "hide" : ""}>
        <Link to={props.to}>
            <b className="link">{props.children}</b>
        </Link>
    </div>

function HeaderMa(props) {
    return (
        <header className="main-header max">
            <div className="logo-div">
                <Link to="/">
                    <img className="mainLogo" src={ParkettLogo} />
                    <img className="sideLogo" src={Kizomba} />
                    <img className="sideLogo2" src={Swing} />
                    <img className="sideLogo" src={Folk} />
                    <img className="sideLogo2" src={Salsa} />
                </Link>
            </div>
            <div className="links">
                <ListLink to="/events/" >Események</ListLink>
                <ListLink to="/community/">Közösség</ListLink>
                <ListLink to="/media/">Média</ListLink>
                <ListLink to="/knowledge-base/">Tudásbázis</ListLink>
            </div>
        </header >
    )
}

export default HeaderMa
