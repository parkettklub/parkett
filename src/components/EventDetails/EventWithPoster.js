import React from 'react';
import '../Card.css';
import './EventDetail.css';

function EventWithPoster(props) {
    var verticalClass = "";
    if (props.details.poster.vertical) {
        verticalClass = " vertical";
    }
    return (
        <div className="card withpadding eventdetail-wrapper">
            <img className={"eventdetail-poster"+verticalClass} src={props.details.poster.src} alt="" />
            <div className="eventdetail-title">
                {props.details.title}
                <div className="eventdetail-date">{props.details.date}</div>
            </div>
            <div className={"eventdetail-description"+verticalClass}>{props.details.description}</div>
        </div>
    );
}

export default EventWithPoster;