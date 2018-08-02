import React from 'react';
import './Card.css';
import './EventDetail.css';

function EventWithPoster(props) {
    var verticalClass = "";
    let img = new Image();
    img.src = props.poster;
    var width = img.width;
    var height = img.height;
    if (width < height) {
        verticalClass = " vertical";
    }
    return (
        <div className="card withpadding eventdetail-wrapper">
            <img className={"eventdetail-poster" + verticalClass} src={props.details.poster} alt="" />
            <div className="eventdetail-title">
                {props.details.title}
                <div className="eventdetail-date">{props.details.date}</div>
                <div className="eventdetail-description">{props.details.description}</div>
            </div>
        </div>
    );
}

export default EventWithPoster;