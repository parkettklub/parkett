import React from 'react'
import Link from 'gatsby-link'
import './Header.css';
import ParkettLogo from '../components/ParkettLogoWhite02.svg';
import Folk from '../components/dancing-figures/FolkDance.svg';
import Kizomba from '../components/dancing-figures/Kizomba.svg';
import Salsa from '../components/dancing-figures/Salsa.svg';
import Swing from '../components/dancing-figures/Swing.svg';


const ListLink = props =>
    <li className={props.hidden ? "hide" : ""}>
        <Link to={props.to}>
            <b className="link">{props.children}</b>
        </Link>
    </li>

function HeaderMa(props) {
    return (
        <header className="main-header max">
            <div>
                <Link to="/">
                    <img className="mainLogo" src={ParkettLogo} />
                    <img className="sideLogo" src={Kizomba} />
                    <img className="sideLogo2" src={Swing} />
                    <img className="sideLogo" src={Folk} />
                    <img className="sideLogo2" src={Salsa} />
                </Link>
            </div>
            <div>
                <ListLink to="/events/" >Események</ListLink>
                <ListLink to="/community/">Közösség</ListLink>
                <ListLink to="/media/">Média</ListLink>
                <ListLink to="/knowledge-base/">Tudásbázis</ListLink>
                <ListLink to="/edit-knowledge-base/">Tudásbázis szerkesztése</ListLink>
            </div>
        </header >
    )
}

export default HeaderMa
