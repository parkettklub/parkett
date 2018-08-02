import React from 'react';
import EventWithPoster from './EventWithPoster';

function EventParty(props) {

    let partyDetails = {
        id: 1,
        title: "Élőzenés Salsa Party: Cuba",
        photo: Plakat01,
        start_date: new Date(2018, 1, 3, 18, 33, 30, 0),
        end_date: new Date(2018, 1, 4, 2, 0, 0, 0),
        content: "Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.",
        facebook_event: "https://www.facebook.com/events/1598719006921910/"
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

    return (
        <div>
            <EventWithPoster details={main} />
        </div>
    )

}
export default EventParty;