import React from 'react';
import EventWithPoster from './EventWithPoster';
import EventDetailsWorkshop from './EventDetailsWorkshop';
import EventWorkshopForm from './EventWorkshopForm';
import { fetchAll } from './FetchFunctions';

class EventWorkshop extends React.Component {
    state = {}

    componentDidMount() {
        this.fetchEvent();
    }

    fetchEvent = () => {
        const id = window.location.href.split('?')[1];
        fetchAll(`workshops/${id}`).then(
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
            dance: details.dance,
            facebook: details.facebook_event,
            theme: details.theme,
        };

        const formdetails = {
            link: details.application_form,
            teachers: details.teacher,
            linkedParty: details.party,
        };
        return (
            <div>
                <EventWithPoster {...main} />
                <EventDetailsWorkshop {...detail} />
                <EventWorkshopForm {...formdetails} />
            </div>
        );
    }
}

export default EventWorkshop;
