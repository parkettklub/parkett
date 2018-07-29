import React from 'react';
import '../Card.css';
import './EventDetail.css';


function EventDetails(props) {
    return (
        <div className="card withpadding eventdetail-wrapper">
            <div className="eventdetail-title-secondery">Program</div>
            <Dance type={props.details.dance}/>
            <div className="eventdetail-program">{props.details.program}</div>
            <Facebook link={props.details.facebook}/>
            <div className="eventdetail-dj-and-band">
                <Band name={props.details.band} />
                <DJ name={props.details.dj} />
            </div>
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

function Facebook(props) {
    if (props.link) {
        return (
            <a className="eventdetail-facebook-link" href={props.link}>
                <img className="eventdetail-facebook-logo" src="facebook-app-logo.svg" alt=""/>
            </a>
        )
    } else {
        return (
            <div className="eventdetail-facebook-link"></div>
        )
    }
}

function Band(props) {
    if (props.name) {
        return (
            <div className="eventdetail-dj-and-band eventdetail-paragraph">
                <b>Zenekar: </b>{props.name}
            </div>)
    } else {
        return (<div></div>);
    }
}

function DJ(props) {
    if (props.name) {
        return (
            <div className="eventdetail-dj-and-band eventdetail-paragraph">
                <b>DJ: </b>{props.name}
            </div>)
    } else {
        return (<div></div>);
    }
}

export default EventDetails;