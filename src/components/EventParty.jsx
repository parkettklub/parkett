import React from 'react';
import EventWithPoster from './EventWithPoster';
import EventDetails from './EventDetails';
import EventMedia from './EventMedia';
import { fetchAll } from './FetchFunctions';

class EventParty extends React.Component {
    state = {}

    componentDidMount() {
        this.fetchEvent();
    }

    fetchEvent = () => {
        const id = window.location.href.split('?')[1];
        fetchAll(`parties/${id}`).then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ details: myJson });
        });
    }

    render() {
        const { details } = this.state;
        if (!details) return null;
        const main = {
            title: details.title,
            date: details.start_date,
            content: details.content,
            photo: details.photo,
        };

        const detail = {
            program: details.program,
            djs: details.djs,
            bands: details.bands,
            dance: details.dance,
            facebook: details.facebook_event,
        };

        const media = {
            photos: details.spot,
            video: details.bss,
        };
        return (
            <div>
                <EventWithPoster {...main} key="poster" />
                <EventDetails {...detail} key="details" />
                <EventMedia {...media} key="media" />
            </div>
        );
    }
}

export default EventParty;
