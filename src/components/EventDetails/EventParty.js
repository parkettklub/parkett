import React from 'react';

import EventWithPoster from './EventWithPoster';
import EventDetails from "./EventDetails";
import EventMedia from "./EventMedia";


function EventParty(props) {
    let main = {
        title: props.details.title,
        date: props.details.date + ", " + props.details.period,
        description: props.details.description,
        poster: props.details.poster
    }

    let detail = {
        program: props.details.program,
        dj: props.details.dj,
        band: props.details.band,
        dance: props.details.dance,
        facebook: props.details.facebook
    }

    let media = {
        photos: props.details.photos,
        video: props.details.video
    }
    return (
        <div>
            <EventWithPoster details={main} />
            <EventDetails details={detail} />
            <EventMedia details={media} />
        </div>
    )

}

export default EventParty;