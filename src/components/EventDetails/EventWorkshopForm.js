import React from 'react';
import '../Card.css';
import './EventDetail.css';

function EventWorkshopForm(props) {
    return (
        <div className="card withpadding">
            <div className="eventdetail-paragraph">
                <b>JELENTKEZNI az alábbi linken lehet: </b>
                <a href={props.details.link}>{props.details.link}</a>
            </div>
            <div className="eventdetail-paragraph">
                Siess, a helyek limitáltak! Amennyiben párban jöttök a kérdőívet mindketten töltsétek ki. A workshop csak elegendő számú jelentkező esetén indul.
            </div>
            <div className="eventdetail-paragraph">
                A tánccal <b>{props.details.teachers}</b> fognak megismertetni
            </div>
            <div className="eventdetail-paragraph">
                A workshop résztvevői ingyenesen részt vehetnek a <b>{props.details.linkedparty.title}</b> -n amely <b>{props.details.linkedparty.date}</b> -n lesz megrendezve
            </div>
        </div>
    )
}

export default EventWorkshopForm;