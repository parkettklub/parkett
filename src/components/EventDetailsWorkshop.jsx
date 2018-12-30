import React from 'react';
import './Card.css';
import './EventDetail.css';
import FacebookLogo from './facebook-app-logo.svg';
import DanceFigure from './DanceFigure';

function EventDetailsWorkshop(props) {
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
                <div className="theme">
                    <strong>Tematika:  </strong>
                    {props.details.theme ? props.details.theme : "-"}
                </div>
            </div>
            {links}
        </div>
    );
}

export default EventDetailsWorkshop;