import React from 'react';

import EventWithPoster from './EventWithPoster';
import EventDetailsWorkshop from "./EventDetailsWorkshop";
import EventWorkshopForm from './EventWorkshopForm';
import Plakat02 from './Plakat_vegleges.jpg';


function EventWorkshop(props) {

    let workshopDetails = {
        id: 1,
        title: "Kizomba Workshop",
        photo: Plakat02,
        start_date: new Date(2018, 1, 3, 18, 33, 30, 0),
        end_date: new Date(2018, 1, 4, 2, 0, 0, 0),
        program: "19:30 kapunyitás\n20:00 - 21:00 kezdő rocky tánctanítás\n21:00 - 23:00 élőben zenél a Pedrofon zenekar\n23:00 - 02:00 DJ-s buli Kenyeres Tamással",
        content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
        dance: {
            id: 2,
            name: "kizomba",
            content: "Kizomba is a dance",
        },
        teacher: {
            id: 1,
            name: "Me and Me",
            url: "https://www.facebook.com/events/1598719006921910/"
        },
        theme: "Teljesen kezdő gyorstalpaló kizomba tánctanítás, amely egy hónapnyi tánctudást biztosít és lehetővé teszi a már elindult tánctanfolyamokba való bekapcsolódást.",
        facebook_event: "https://www.facebook.com/events/1598719006921910/",
        application_form: "https://goo.gl/forms/EMAqXVoJDJQGNkeq1",
    }

    if (props.details) {
        workshopDetails = props.details;
    }

    const date = workshopDetails.start_date;
    const dateString = date.getFullYear() + "." + date.getMonth() + "." + date.getDate();

    let main = {
        title: workshopDetails.title,
        date: dateString,
        description: workshopDetails.content,
        poster: workshopDetails.photo
    }

    let detail = {
        program: workshopDetails.program,
        dance: workshopDetails.dance,
        facebook: workshopDetails.facebook_event,
        theme: workshopDetails.theme
    }

    let formdetails = {
        link: workshopDetails.application_form,
        teachers: workshopDetails.teacher
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