import React from 'react';

import EventWithPoster from './EventWithPoster';
import EventDetails from "./EventDetails";
import EventMedia from "./EventMedia";
import Plakat01 from './Plakat.jpg';


function EventParty(props) {
    let partyDetails = {
        id: 1,
        title: "Élőzenés Salsa Party: Cuba",
        photo: Plakat01,
        start_date: new Date(2018, 1, 3, 18, 33, 30, 0),
        end_date: new Date(2018, 1, 4, 2, 0, 0, 0),
        program: "19:30 kapunyitás\n20:00 - 21:00 kezdő rocky tánctanítás\n21:00 - 23:00 élőben zenél a Pedrofon zenekar\n23:00 - 02:00 DJ-s buli Kenyeres Tamással",
        content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
        dance: {
            id: 1,
            name: "salsa",
            content: "Salsa is a dance",
        },
        facebook_event: "https://www.facebook.com/events/1598719006921910/",
        spot: "https://www.facebook.com/events/1598719006921910/",
        bss: "https://www.facebook.com/events/1598719006921910/",
        teaching: {
            id: 1,
            teacher: {
                id: 1,
                name: "Me and Me",
                url: "https://www.facebook.com/events/1598719006921910/"
            },
            dance: {
                id: 1,
                name: "salsa",
                content: "Salsa is a dance",
            }
        },
        band: {
            id: 1,
            name: "Pedrofon",
            url: "https://www.facebook.com/events/1598719006921910/"
        },
        dj: {
            id: 1,
            name: "DJ Eddy",
            url: ""
        }
    }

    if (props.details) {
        partyDetails = props.details;
    }

    const date = partyDetails.start_date;
    const dateString = date.getFullYear() + "." + date.getMonth() + "." + date.getDate();
    let main = {
        title: partyDetails.title,
        date: dateString,
        description: partyDetails.content,
        poster: partyDetails.photo
    }

    let detail = {
        program: partyDetails.program,
        dj: partyDetails.dj,
        band: partyDetails.band,
        dance: partyDetails.dance,
        facebook: partyDetails.facebook_event
    }

    let media = {
        photos: partyDetails.spot,
        video: partyDetails.bss
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