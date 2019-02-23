import React from 'react';
import EventWithPoster from './EventWithPoster';
import { fetchAll } from './FetchFunctions';
import styles from './Article.module.css';
import EditButton from './EditButton';

class EventArticle extends React.Component {
    state = {}

    componentDidMount() {
        this.fetchEvent();
    }

    fetchEvent = () => {
        const id = window.location.href.split('?')[1];
        this.setState({
            complexId: `A${id}`,
        });
        fetchAll(`articles/${id}`).then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ details: myJson });
        });
    }

    render() {
        const { details, complexId } = this.state;
        if (details) {
            return (
                <div className={styles.main}>
                    <EditButton link={`/edit-events?${complexId}`} />
                    <EventWithPoster {...details} date={details ? details.published_at : null} />
                </div>
            );
        }
        return (
            <div className={styles.main} />
        );
    }
}

export default EventArticle;
