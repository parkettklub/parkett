import React from 'react';

import EventWithPoster from './EventWithPoster';
import EventDetailsWorkshop from "./EventDetailsWorkshop";
import EventWorkshopForm from './EventWorkshopForm';


function EventWorkshop(props) {
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
        facebook: props.details.facebook,
        theme: props.details.theme
    }

    let formdetails = {
        link : props.details.formlink,
        teachers : props.details.teachers,
        linkedparty : props.details.linkedparty
    }
    return (
        <div>
            <EventWithPoster details={main} />
            <EventDetailsWorkshop details={detail} />
            <EventWorkshopForm details={formdetails} />
        </div>
    )

}

export default EventWorkshop;