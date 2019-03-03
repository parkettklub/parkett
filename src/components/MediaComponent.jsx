import React from 'react';
import styles from './Media.module.css';
import { fetchAll } from './FetchFunctions';
import MediaAlbum from './MediaAlbum';
import SpotIcon from './spotIcon.svg';
import BssIcon from './video-camera.svg';

class MediaComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        this.fetchEvents();
    }

    fetchEvents = () => {
        this.setState({
            events: [],
        });
        this.fetchParties();
        this.fetchWorkshops();
        this.fetchArticles();
    }

    fetchParties = async () => {
        const myJson = await fetchAll('parties');
        this.addEvents('P', myJson, this.selectParty);
    }

    fetchWorkshops = async () => {
        const myJson = await fetchAll('workshops');
        this.addEvents('W', myJson, this.selectWorkshop);
    }

    fetchArticles = async () => {
        const myJson = await fetchAll('articles');
        this.addEvents('A', myJson, this.selectArticle, true);
    }

    addEvents = (char, newEvents, onClick, article = false) => {
        const { events } = this.state;
        let filteredEvents = newEvents;
        filteredEvents = filteredEvents.map(original => ({
            ...original,
            onClick: () => onClick(original),
            complexId: `${char}${original.id}`,
            date: article ? original.published_at : original.start_date,
        }));
        let allEvents = events.concat(filteredEvents);
        allEvents = allEvents.sort((a, b) => {
            const aValue = new Date(a.date).valueOf();
            const bValue = new Date(b.date).valueOf();
            return bValue - aValue;
        });
        this.setState({ events: allEvents });
    }

    render() {
        const {
            events,
        } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.title}>SPOT képek</div>
                <div className={styles.grid}>
                    {
                        events.map(event => (
                            <MediaAlbum
                                link={event.spot}
                                name={event.title}
                                date={event.date}
                                icon={SpotIcon}
                            />
                        ))
                    }
                </div>
                <div className={styles.title}>BSS videók</div>
                <div className={styles.grid}>
                    {
                        events.map(event => (
                            <MediaAlbum
                                link={event.bss}
                                name={event.title}
                                date={event.date}
                                icon={BssIcon}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default MediaComponent;
