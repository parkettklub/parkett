import React from 'react';
import '../Card.css';
import './EventList.css';

function Event(props) {

    const details = [];
    if (props.details.formlink) {
        details.push(<div><a href={props.details.formlink}>Link a formhoz</a></div>)
    }

    if (props.details.music) {
        details.push(<div><b>{props.details.music}</b></div>)
    }

    const date = props.details.date;
    const dateString = date.getFullYear() + "." + date.getMonth()
        + "." + date.getDate();

    return (
        <div className={"card" + (props.old ? " eventList-old" : "")}>
            <div className="eventList-wrapper">
                <Poster poster={props.details.poster} />
                <div className="eventList-title">{props.details.title}</div>
                <div className="eventList-details">
                    <div>{dateString}</div>
                    {details}
                </div>
                <Facebook link={props.details.facebook} />
            </div>
        </div>
    )
}

function Poster(props) {
    if (props.poster) {
        if (props.poster.portrait) {
            return (
                <div className="eventList-poster-cropper">
                    <img className="portrait" src={props.poster.src} alt="" />
                </div>
            )
        } else {
            return (
                <div className="eventList-poster-cropper">
                    <img src={props.poster.src} alt="" />
                </div>
            )
        }

    } else {
        return (
            <div></div>
        )
    }
}

function Facebook(props) {
    if (props.link) {
        return (
            <div className="eventList-facebook-link">
                <a href={props.link}>
                    <img src="facebook-app-logo.svg" alt="" />
                </a>
            </div>
        )
    } else {
        return (
            <div className="eventList-facebook-link"></div>
        )
    }
}

export default Event;