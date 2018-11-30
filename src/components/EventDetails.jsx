import React from 'react';
import './Card.css';
import './EventDetail.css';
import DanceFigure from './DanceFigure';
import FacebookLogo from './facebook-app-logo.svg';


function EventDetails(props) {
    let music = [];
    if (props.details.band) {
        music.push(
            <div className="eventdetail-dj-and-band eventdetail-paragraph">
                <strong>Zenekar:  </strong><a href={props.details.band.url}>{props.details.band.name}</a>
            </div>);
    }
    if (props.details.dj) {
        music.push(
            <div className="eventdetail-dj-and-band eventdetail-paragraph">
                <strong>DJ:  </strong><a href={props.details.dj.url}>{props.details.dj.name}</a>
            </div>);
    }

    let links = [];
    if (props.details.facebook) {
        links.push(
            <a className="eventdetail-facebook-link" href={props.details.facebook} target="_blank">
                <img className="eventdetail-facebook-logo"
                    src={FacebookLogo} alt="" />
            </a>)
    }
    return (
        <div className="card withpadding eventdetail-wrapper right">
            <div className="eventdetail-title-and-program">
                <div className="eventdetail-title-secondery title">Program</div>
                <div className="eventdetail-program">{props.details.program}</div>
            </div>
            <DanceFigure dance={props.details.dance} />
            <div className="eventdetail-dj-and-band">
                {music}
            </div>
            {links}
        </div>
    );
}

export default EventDetails;