import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import { fetchAll } from './FetchFunctions';
import EventWithPoster from './EventWithPoster';
import styles from '../pages/Page.module.css';


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

class MainEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
            i: 0,
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

    fetchParties = async () => {
        const myJson = await fetchAll('parties');
        this.addEvents('P', myJson, goToParty);
    }

    fetchWorkshops = async () => {
        const myJson = await fetchAll('workshops');
        this.addEvents('W', myJson, goToWorkshop);
    }

    fetchArticles = async () => {
        const myJson = await fetchAll('articles');
        this.addEvents('A', myJson, goToArticle, true);
    }

    addEvents = (char, newEvents, onClick, article = false) => {
        const { events } = this.state;
        let filteredEvents = newEvents.filter(
            event => new Date(article ? event.published_at : event.start_date).valueOf()
                - today.valueOf() >= 0,
        );
        filteredEvents = filteredEvents.map(original => ({
            ...original,
            onClick: () => onClick(original.id),
            complexId: `${char}${original.id}`,
            date: article ? original.published_at : original.start_date,
        }));
        let allEvents = events.concat(filteredEvents);
        allEvents = allEvents.sort((a, b) => {
            const aValue = new Date(a.date).valueOf();
            const bValue = new Date(b.date).valueOf();
            return Math.abs(aValue - today.valueOf())
                - Math.abs(bValue - today.valueOf());
        });
        this.setState({ events: allEvents });
    }

    render() {
        const { events, i } = this.state;
        if (events.length < 1) return null;
        return (
            <div className={styles.event}>
                <ReactCssTransitionGroup
                    transitionName="fade"
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <div key={i}>
                        <EventWithPoster {...(events[i])} key={i} onClick={events[i].onClick} />
                    </div>
                </ReactCssTransitionGroup>
            </div>
        );
    }
}

export default MainEvents;
