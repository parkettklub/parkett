import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import { fetchAll } from '../../utils/FetchFunctions';
import styles from './MainEvent.module.css';
import Event from '../Events/Event';


function goToParty(id) {
    window.location = `/event-party?${id}`;
}
function goToWorkshop(id) {
    window.location = `/event-workshop?${id}`;
}
function goToArticle(id) {
    window.location = `/event-article?${id}`;
}

const today = new Date();

function filterEvents(newEvents, article) {
    return newEvents.filter(
        event => new Date(article ? event.published_at : event.start_date).valueOf()
            - today.valueOf() >= 0,
    );
}

function mapEvents(filteredEvents, char, onClick, path, article) {
    return filteredEvents.map(original => ({
        ...original,
        onClick: () => onClick(original.id),
        complexId: `${char}${original.id}`,
        date: article ? original.published_at : original.start_date,
        path: path + original.id,
    }));
}

function sortEvents(allEvents) {
    return allEvents.sort((a, b) => {
        const aValue = new Date(a.date).valueOf();
        const bValue = new Date(b.date).valueOf();
        return Math.abs(aValue - today.valueOf())
            - Math.abs(bValue - today.valueOf());
    });
}

class MainEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
            i: 0,
            fetched: false,
        };
    }


    componentDidMount() {
        this.timer = setInterval(this.tick, 1000 * 5);
        this.fetchEvents();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        const { i, events } = this.state;
        if (i < events.length - 1) this.setState(state => ({ i: state.i + 1 }));
        else this.setState({ i: 0 });
    }

    fetchEvents = () => {
        this.setState({ events: [] });
        this.fetchParties();
        this.fetchWorkshops();
        this.fetchArticles();
    }

    fetchParties = () => {
        fetchAll('parties').then((myJson) => {
            this.addEvents('P', myJson, goToParty, `/event-party/?`);
        });
    }

    fetchWorkshops = () => {
        fetchAll('workshops').then((myJson) => {
            this.addEvents('W', myJson, goToWorkshop, `/event-workshop/?`);
        });
    }

    fetchArticles = () => {
        fetchAll('articles').then((myJson) => {
            this.addEvents('A', myJson, goToArticle, `/event-article/?`, true);
        });
    }

    addEvents = (char, newEvents, onClick, path, article = false) => {
        const { events } = this.state;
        const filteredEvents = filterEvents(newEvents, article);
        const allEvents = [...events, ...mapEvents(filteredEvents, char, onClick, path, article)];
        this.setState({ events: sortEvents(allEvents), fetched: true });
    }

    render() {
        const { events, fetched } = this.state;
        if (!fetched) {
            return (
                <div className={styles.event}>
                    <div className={styles.title}>Események betöltése...</div>
                </div>
            );
        }
        if (events.length < 1) {
            return (
                <div className={styles.event}>
                    <div className={styles.title}>Ebben a félévben nem lesz több esemény</div>
                </div>
            );
        }
        return (
            <div className={styles.event}>
                <div className={styles.title}>Közelgő eseményeink:</div>
                <ReactCssTransitionGroup
                    transitionName="fade"
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <div className={styles.events}>
                        {events.map(event => <Event {...event} />)}
                    </div>
                </ReactCssTransitionGroup>
            </div>
        );
    }
}

export default MainEvents;
