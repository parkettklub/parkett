import React from 'react';
import EventWithPoster from './EventWithPoster';
import EventDetails from './EventDetails';
import EventMedia from './EventMedia';
import Plakat01 from './Plakat.jpg';


function EventParty() {
    const partyDetails = {
        id: 1,
        title: 'Élőzenés Salsa Party: Cuba',
        photo: Plakat01,
        startDate: new Date(2018, 1, 3, 18, 33, 30, 0),
        endDate: new Date(2018, 1, 4, 2, 0, 0, 0),
        program: '19:30 kapunyitás\n20:00 - 21:00 kezdő rocky tánctanítás\n21:00 - 23:00 élőben zenél a Pedrofon zenekar\n23:00 - 02:00 DJ-s buli Kenyeres Tamással',
        content: 'Még érezni az előző est hangulatát és máris itt a következő, egyben a félévi utolsó bulink. Várunk titeket egy fergeteges Rock ‘N’ Roll Partyra április 17-én.',
        dance: {
            id: 1,
            name: 'salsa',
            content: 'Salsa is a dance',
        },
        facebookEvent: 'https://www.facebook.com/events/1598719006921910/',
        spot: 'https://www.facebook.com/events/1598719006921910/',
        bss: 'https://www.facebook.com/events/1598719006921910/',
        danceCourse: {
            id: 1,
            teacher: {
                id: 1,
                name: 'Me and Me',
                url: 'https://www.facebook.com/events/1598719006921910/',
            },
            dance: {
                id: 1,
                name: 'salsa',
                content: 'Salsa is a dance',
            },
        },
        bands: [{
            id: 1,
            name: 'Pedrofon',
            url: 'https://www.facebook.com/events/1598719006921910/',
        }],
        djs: [{
            id: 1,
            name: 'DJ Eddy',
            url: '',
        }, {
            id: 2,
            name: 'DJ Meno',
            url: '',
        }],
    };

    const { startDate } = partyDetails;
    const main = {
        title: partyDetails.title,
        date: `${startDate.getFullYear()}.${startDate.getMonth()}.${startDate.getDate()}`,
        description: partyDetails.content,
        poster: partyDetails.photo,
    };

    const detail = {
        program: partyDetails.program,
        djs: partyDetails.djs,
        bands: partyDetails.bands,
        dance: partyDetails.dance,
        facebook: partyDetails.facebookEvent,
    };

    const media = {
        photos: partyDetails.spot,
        video: partyDetails.bss,
    };
    return (
        <div>
            <EventWithPoster {...main} />
            <EventDetails {...detail} />
            <EventMedia {...media} />
        </div>
    );
}

export default EventParty;
