import React from 'react';
import './Card.css';
import './EventDetail.css';

function EventMedia(props) {
    return (
        <div className="card withpadding eventdetail-media">
            <Photos photos={props.details.photos} />
            <Video video={props.details.video} />
        </div>
    )
}

function Photos(props) {
    if (props.photos) {
        return (
            <div>
                <strong>Képek a buliról:  </strong>
                <a href={props.photos}>Link a SPOT oldalára</a>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

function Video(props) {
    if (props.video) {
        return (
            <div>
                <strong>Videó a buliról:  </strong>
                <a href={props.video}>Link a BSS oldalára</a>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default EventMedia;