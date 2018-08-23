import React from 'react';
import './Card.css';
import './EventDetail.css';

function EventWithPoster(props) {
    return (
        <div className="card withpadding eventdetail-wrapper">
            <img className={"eventdetail-poster"} src={props.details.poster} alt="" />
            <div className="eventdetail-title">
                <div className="title">{props.details.title}</div>
                <div className="eventdetail-date">{props.details.date}</div>
                <div className="eventdetail-description">{props.details.description}</div>
            </div>
        </div>
    );
}

export default EventWithPoster;