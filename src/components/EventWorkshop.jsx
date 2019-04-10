import React from 'react';
import EventWithPoster from './EventWithPoster';
import EventDetailsWorkshop from './EventDetailsWorkshop';
import EventWorkshopForm from './EventWorkshopForm';
import { fetchAll } from '../utils/FetchFunctions';
import EditButton from './EditButton';
import styles from './Event.module.css';

class EventWorkshop extends React.Component {
    state = {}

    componentDidMount() {
        this.fetchEvent();
    }

    fetchEvent = () => {
        const id = window.location.href.split('?')[1];
        this.setState({
            complexId: `W${id}`,
        });
        fetchAll(`workshops/${id}`).then((myJson) => {
            this.setState({ details: myJson });
        });
    }

    render() {
        const { details, complexId } = this.state;
        if (!details) return null;
        const main = {
            title: details.title,
            date: details.start_date,
            content: details.content,
            photo: details.photo,
        };

        const detail = {
            program: details.program,
            dance_id: details.dance_id,
            facebook: details.facebook_event,
            theme: details.theme,
        };

        const formdetails = {
            link: details.application_form,
            dance_teacher_id: details.dance_teacher_id,
            linkedParty: details.party,
        };
        return (
            <div>
                <EditButton link={`/edit-events?${complexId}`} />
                <div className={styles.main}>
                    <EventWithPoster {...main} />
                    <EventDetailsWorkshop {...detail} />
                    <EventWorkshopForm {...formdetails} />
                </div>
            </div>
        );
    }
}

export default EventWorkshop;
