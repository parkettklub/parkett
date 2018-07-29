import React from 'react';
import '../Card.css';
import './EventDetail.css';
import Salsa from '../dancing-figures/Salsa.svg';
import Folk from '../dancing-figures/FolkDance.svg';
import Kizomba from '../dancing-figures/Kizomba.svg';
import Swing from '../dancing-figures/Swing.svg';
import FacebookLogo from '../facebook-app-logo.svg';


function EventDetailsWorkshop(props) {
    return (
        <div className="card withpadding eventdetail-wrapper">
            <div className="eventdetail-title-secondery">Program</div>
            <Dance type={props.details.dance}/>
            <div className="eventdetail-program">{props.details.program}</div>
            <Facebook link={props.details.facebook}/>
            <Theme details={props.details.theme}/>
        </div>
    );
}

function Dance(props) {
    if (props.type==="salsa"){
        return (
            <div className="eventdetail-dance-figure">
                <img src={Salsa} alt=""/>
            </div>
        )
    } else if (props.type==="folk"){
        return (
            <div className="eventdetail-dance-figure">
                <img src={Folk} alt=""/>
            </div>
        )
    } else if (props.type==="swing"){
        return (
            <div className="eventdetail-dance-figure">
                <img src={Swing} alt=""/>
            </div>
        )
    } else if (props.type==="kizomba"){
        return (
            <div className="eventdetail-dance-figure">
                <img src={Kizomba} alt=""/>
            </div>
        )
    } else {
        return (
            <div className="eventdetail-dance-figure">
            </div>
        )
    }
    
}

function Theme(props) {
    if (props.details) {
        return (
            <div className="theme">
                <b>Tematika: </b>
                {props.details}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

function Facebook(props) {
    if (props.link) {
        return (
            <a className="eventdetail-facebook-link" href={props.link}>
                <img className="eventdetail-facebook-logo" 
                src={FacebookLogo} alt=""/>
            </a>
        )
    } else {
        return (
            <div className="eventdetail-facebook-link"></div>
        )
    }
}


export default EventDetailsWorkshop;