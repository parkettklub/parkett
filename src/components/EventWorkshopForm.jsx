import React from 'react';
import './Card.css';
import './EventDetail.css';

function EventWorkshopForm(props) {

    let rows = [];
    if (props.linkedparty) {
        rows.push(<div className="eventdetail-paragraph">
            A workshop résztvevői ingyenesen részt vehetnek a  <strong>{props.details.linkedparty.title} </strong> -n amely  <strong>{props.details.linkedparty.date} </strong> -n lesz megrendezve
    </div>);
    }

    return (
        <div className="card withpadding">
            <div className="eventdetail-paragraph">
                <strong>JELENTKEZNI az alábbi linken lehet:  </strong>
                <a href={props.details.link}>Link a formhoz</a>
            </div>
            <div className="eventdetail-paragraph">
                Siess, a helyek limitáltak! Amennyiben párban jöttök a kérdőívet mindketten töltsétek ki. A workshop csak elegendő számú jelentkező esetén indul.
            </div>
            <div className="eventdetail-paragraph">
                A tánccal <a href={props.details.teachers.url}>{props.details.teachers.name}</a> fognak megismertetni
            </div>
            {rows}
        </div>
    )
}

export default EventWorkshopForm;