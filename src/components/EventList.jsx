import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import { fetchAll } from './FetchFunctions';
import styles from './EventList.module.css';
import EventSummary from './Event';
import Edit from './pencil_white.svg';

function editEventsPage() {
    window.location = '/edit-events/';
}

function goToParty(id) {
    window.location = '/event-party/';
}
function goToWorkshop(id) {
    window.location = '/event-workshop/';
}
function goToArticle(id) {
    window.location = '/event-article?' + id;
}

function filterEvent(search, event) {
    const date = event.start_date;
    const dateString = `${date.split('T')[0]} ${date.split('T')[0]}`;
    return (event.title.toUpperCase().indexOf(search.toUpperCase()) !== -1)
        || (dateString.indexOf(search.toUpperCase()) !== -1);
}

class EventList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            events: [],
        };
    }

    componentDidMount() {
        this.fetchEvents();
    }

    fetchEvents = () => {
        this.setState({ events: [] });
        this.fetchParties();
        this.fetchWorkshops();
        this.fetchArticles();
    }

    fetchParties = () => {
        fetchAll('parties').then(
            response => response.json(),
        ).then((myJson) => {
            const { events } = this.state;
            const newEvents = events.concat(myJson.map(original => ({
                ...original,
                onClick: () => goToParty(original.id),
            })));
            this.setState({ events: newEvents });
        });
    }

    fetchWorkshops = () => {
        fetchAll('workshops').then(
            response => response.json(),
        ).then((myJson) => {
            const { events } = this.state;
            const newEvents = events.concat(myJson.map(original => ({
                ...original,
                onClick: () => goToWorkshop(original.id),
            })));
            this.setState({ events: newEvents });
        });
    }

    fetchArticles = () => {
        fetchAll('articles').then(
            response => response.json(),
        ).then((myJson) => {
            const { events } = this.state;
            const newEvents = events.concat(myJson.map(original => ({
                ...original,
                start_date: original.published_at,
                onClick: () => goToArticle(original.id),
            })));
            this.setState({ events: newEvents });
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({});
    }

    handleChange = ({ target }) => {
        this.setState({
            search: target.value ? target.value : '',
        });
    }

    render() {
        const today = new Date();
        const { events, search } = this.state;
        events.sort((a, b) => {
            const aValue = new Date(a.start_date).valueOf();
            const bValue = new Date(b.start_date).valueOf();
            return Math.abs(aValue - today.valueOf())
                - Math.abs(bValue - today.valueOf());
        });
        let middleMan = [];
        middleMan.push(
            <div className={styles.eventListOldEvents} key="oldevents">Régebbi Események</div>,
        );
        if (!events.find(event => (
            filterEvent(search, event)
        ))) {
            middleMan = [];
            middleMan.push(
                <div className={styles.eventListOldEvents} key="oldevents">Nincs ilyen esemény</div>,
            );
        }
        return (
            <div className={styles.main}>
                <div className={styles.editButton}>
                    <div
                        onClick={editEventsPage}
                        role="button"
                        onKeyDown={() => { }}
                        tabIndex={0}
                    >
                        <img
                            alt=""
                            src={Edit}
                        />
                    </div>
                </div>
                <form autoComplete="off" className={styles.eventListCardForm}>
                    <div>
                        <input
                            type="text"
                            name="search"
                            value={search}
                            onChange={this.handleChange}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                            <path d="M7 2.01c-2.761 0-5 2.24-5 5.003a5.002 5.002 0 0 0 5 5.002A5.002 5.002 0 1 0 7 2.01m8.708 13.705a.996.996 0 0 1-1.412 0l-3.095-3.11A6.961 6.961 0 0 1 7 14.017c-3.866 0-7-3.135-7-7.003A7.002 7.002 0 0 1 7 .009c3.866 0 7 3.135 7 7.004 0 1.565-.52 3.007-1.388 4.173l3.096 3.112a1.003 1.003 0 0 1 0 1.417" />
                        </svg>
                    </div>
                </form>
                <ReactCssTransitionGroup
                    transitionName="fade"
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={500}
                    transitionAppear
                    transitionLeaveTimeout={500}
                    style={{ width: '100%' }}
                >
                    {events.filter(
                        event => (
                            filterEvent(search, event)
                            && new Date(event.start_date).valueOf() - today.valueOf() >= 0
                        ),
                    ).map(event => (
                        <EventSummary
                            {...event}
                            key={event.id}
                            startDate={event.start_date}
                        />
                    ))}
                    {middleMan}
                    {events.filter(
                        event => (
                            filterEvent(search, event)
                            && new Date(event.start_date).valueOf() - today.valueOf() < 0
                        ),
                    ).map(event => (
                        <EventSummary
                            old
                            {...event}
                            startDate={event.start_date}
                            key={event.id}
                        />
                    ))}
                </ReactCssTransitionGroup>
            </div>
        );
    }
}

export default EventList;
