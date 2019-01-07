import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import styles from './EventList.module.css';
import EventSummary from './Event';
import Edit from './pencil_white.svg';
import Plakat01 from './Plakat.jpg';
import Plakat0101 from './Plakat01.jpg';
import Plakat02 from './Plakat_vegleges.jpg';
import Actual from './osszesitoActual.jpg';
import RNR from './Alap.jpg';
import Tanchaz from './PlakatTanchaz.jpg';

function onClickParty() {
    window.location = '/event-party/';
}

function onClickWorkshop() {
    window.location = '/event-workshop/';
}


function editEventsPage() {
    window.location = '/edit-events/';
}

function filterEvent(search, event) {
    const date = event.startDate;
    const dateString = `${date.split('T')[0]} ${date.split('T')[0]}`;
    return (event.title.toUpperCase().indexOf(search.toUpperCase()) !== -1)
        || (dateString.indexOf(search.toUpperCase()) !== -1)
        || (event.music && (event.music.toUpperCase().indexOf(search.toUpperCase()) !== -1));
}

class EventList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            events: [
                {
                    id: 111,
                    title: 'Salsa Party',
                    poster: Actual,
                    startDate: '2020-10-03T18:00',
                    onClick: onClickParty,
                },
                {
                    id: 11,
                    title: 'Salsa Party',
                    poster: Actual,
                    startDate: '2020-10-02T18:00',
                    onClick: onClickParty,
                },
                {
                    id: 112,
                    title: 'Salsa Party',
                    poster: Actual,
                    startDate: '2020-10-04T18:00',
                    onClick: onClickParty,
                },
                {
                    id: 12,
                    title: 'Kizomba Party',
                    poster: Actual,
                    startDate: '2018-10-16T18:00',
                },
                {
                    id: 13,
                    title: 'Élőzenés Magyar Táncház',
                    poster: Actual,
                    startDate: '2018-10-23T18:00',
                },
                {
                    id: 14,
                    title: 'Bachata Workshop',
                    poster: Actual,
                    onClick: onClickWorkshop,
                    startDate: '2018-10-28T18:00',
                },
                {
                    id: 15,
                    title: 'Salsa és Bachata Party',
                    poster: Actual,
                    startDate: '2018-11-06T18:00',
                },
                {
                    id: 16,
                    title: "Élőzenés Rock'n'Roll Party",
                    poster: Actual,
                    startDate: '2018-11-20T18:00',
                },
                {
                    id: 3,
                    title: 'Élőzenés Rock N Roll Party',
                    poster: RNR,
                    startDate: '2018-04-17T18:00',
                    music: 'Pedrofon',
                    facebook: 'https://www.facebook.com/events/1598719006921910/',
                },
                {
                    id: 4,
                    title: 'Kizomba Party',
                    poster: Plakat01,
                    startDate: '2018-03-06T18:00',
                    music: 'DJ Krizz Beats',
                    facebook: 'https://www.facebook.com/events/414391392325211/',
                },
                {
                    id: 5,
                    title: 'Élőzenés Salsa Party',
                    startDate: '2018-04-10T18:00',
                    poster: Plakat02,
                    music: 'Cuba Ritmo Trió és DJ Csedi',
                    facebook: 'https://www.facebook.com/events/1391011174337498/',
                },
                {
                    id: 6,
                    title: 'Élőzenés Magyar Táncház',
                    poster: Tanchaz,
                    startDate: '2018-03-20T18:00',
                    music: 'Török testvérek és Király Miklós és barátai',
                    facebook: 'https://www.facebook.com/events/1863513977012652/',
                },
                {
                    id: 7,
                    title: 'Salsa és Bachata Party',
                    poster: Plakat0101,
                    startDate: '2017-02-13T18:00',
                    facebook: 'https://www.facebook.com/events/148138189226684/',
                },
                {
                    id: 8,
                    title: 'Kizomba Workshop kezdőknek',
                    startDate: '2017-02-25T18:00',
                    facebook: 'https://www.facebook.com/events/391804317951223/',
                    formlink: 'https://goo.gl/forms/EMAqXVoJDJQGNkeq1',
                },
                {
                    id: 9,
                    title: 'Bevonó Est',
                    startDate: '2017-02-20T18:00',
                    facebook: '://www.facebook.com/events/527353247650799/',
                }],
        };
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
            const aValue = new Date(a.startDate).valueOf();
            const bValue = new Date(b.startDate).valueOf();
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
                    transitionEnterTimeout={300}
                    transitionAppear
                    transitionLeaveTimeout={300}
                    style={{ width: '100%' }}
                >
                    {events.filter(
                        event => (
                            filterEvent(search, event)
                            && new Date(event.startDate).valueOf() - today.valueOf() >= 0
                        ),
                    ).map(event => (<EventSummary {...event} key={event.id} />))}
                    {middleMan}
                    {events.filter(
                        event => (
                            filterEvent(search, event)
                            && new Date(event.startDate).valueOf() - today.valueOf() < 0
                        ),
                    ).map(event => (<EventSummary old {...event} key={event.id} />))}
                </ReactCssTransitionGroup>
            </div>
        );
    }
}

export default EventList;
