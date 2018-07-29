import React from 'react';
import '../Card.css';
import './EventDetail.css';


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
                <img src="dancing-figures/Salsa.svg" alt=""/>
            </div>
        )
    } else if (props.type==="folk"){
        return (
            <div className="eventdetail-dance-figure">
                <img src="dancing-figures/FolkDance.svg" alt=""/>
            </div>
        )
    } else if (props.type==="swing"){
        return (
            <div className="eventdetail-dance-figure">
                <img src="dancing-figures/Swing.svg" alt=""/>
            </div>
        )
    } else if (props.type==="kizomba"){
        return (
            <div className="eventdetail-dance-figure">
                <img src="dancing-figures/Kizomba.svg" alt=""/>
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
            <a className="facebook-link" href={props.link}>
                <img className="facebook-logo" src="facebook-app-logo.svg" alt=""/>
            </a>
        )
    } else {
        return (
            <div className="facebook-link"></div>
        )
    }
}

export default EventDetailsWorkshop;