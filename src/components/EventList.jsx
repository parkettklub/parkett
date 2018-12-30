import React from 'react';
import EventSummary from './Event';
import Edit from './pencil_white.svg';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import Plakat01 from './Plakat.jpg';
import Plakat0101 from './Plakat01.jpg';
import Plakat02 from './Plakat_vegleges.jpg';
import Actual from './osszesitoActual.jpg';
import RNR from './Alap.jpg';
import Tanchaz from './PlakatTanchaz.jpg';

function onClickParty() {
    window.location = "/event-party/";
}

function onClickWorkshop() {
    window.location = "/event-workshop/";
}


function editEventsPage() {
    window.location = "/edit-events/";
}

class EventList extends React.Component {

    constructor() {
        super();
        this.state = {
            search: "",
            events: [
                {
                    id: 11,
                    title: "Salsa Party",
                    poster: Actual,
                    start_date: new Date().toISOString()
                },
                {
                    id: 12,
                    title: "Kizomba Party",
                    poster: Actual,
                    start_date: "2018-10-16T18:00",
                },
                {
                    id: 13,
                    title: "Élőzenés Magyar Táncház",
                    poster: Actual,
                    start_date: "2018-10-23T18:00",
                },
                {
                    id: 14,
                    title: "Bachata Workshop",
                    poster: Actual,
                    start_date: "2018-10-28T18:00",
                },
                {
                    id: 15,
                    title: "Salsa és Bachata Party",
                    poster: Actual,
                    start_date: "2018-11-06T18:00",
                },
                {
                    id: 16,
                    title: "Élőzenés Rock'n'Roll Party",
                    poster: Actual,
                    start_date: "2018-11-20T18:00",
                },
                {
                    id: 3,
                    title: "Élőzenés Rock N Roll Party",
                    poster: RNR,
                    start_date: "2018-04-17T18:00",
                    music: "Pedrofon",
                    facebook: "https://www.facebook.com/events/1598719006921910/",
                },
                {
                    id: 4,
                    title: "Kizomba Party",
                    poster: Plakat01,
                    start_date: "2018-03-06T18:00",
                    music: "DJ Krizz Beats",
                    facebook: "https://www.facebook.com/events/414391392325211/",
                },
                {
                    id: 5,
                    title: "Élőzenés Salsa Party",
                    start_date: "2018-04-10T18:00",
                    poster: Plakat02,
                    music: "Cuba Ritmo Trió és DJ Csedi",
                    facebook: "https://www.facebook.com/events/1391011174337498/",
                },
                {
                    id: 6,
                    title: "Élőzenés Magyar Táncház",
                    poster: Tanchaz,
                    start_date: "2018-03-20T18:00",
                    music: "Török testvérek és Király Miklós és barátai",
                    facebook: "https://www.facebook.com/events/1863513977012652/",
                },
                {
                    id: 7,
                    title: "Salsa és Bachata Party",
                    poster: Plakat0101,
                    start_date: "2017-02-13T18:00",
                    facebook: "https://www.facebook.com/events/148138189226684/",
                },
                {
                    id: 8,
                    title: "Kizomba Workshop kezdőknek",
                    start_date: "2017-02-25T18:00",
                    facebook: "https://www.facebook.com/events/391804317951223/",
                    formlink: "https://goo.gl/forms/EMAqXVoJDJQGNkeq1"
                },
                {
                    id: 9,
                    title: "Bevonó Est",
                    start_date: "2017-02-20T18:00",
                    facebook: "://www.facebook.com/events/527353247650799/"
                }]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        this.setState({
            search: target.value ? target.value : ""
        });
    }

    filterEvent(search, event) {
        const date = event.start_date;
        const dateString = date.split('T')[0] + " " + date.split('T')[0];
        return (event.title.toUpperCase().indexOf(search.toUpperCase()) !== -1)
            || (dateString.indexOf(search.toUpperCase()) !== -1)
            || (event.music && (event.music.toUpperCase().indexOf(search.toUpperCase()) !== -1));
    }

    render() {
        let today = new Date();
        let newEvents = [];
        this.state.events.sort((a, b) => {
            return new Date(a.start_date).valueOf() - new Date(b.start_date).valueOf();
        });
        this.state.events.forEach((event) => {
            if (this.filterEvent(this.state.search, event)) {
                if (new Date(event.start_date).valueOf() - today.valueOf() >= 0) {
                    newEvents.push(<EventSummary details={event} key={event.id} />);
                }
            }
        });
        let middleMan = [];
        middleMan.push(
            <div className="eventList-old-events" key="oldevents" >
                Régebbi Események
            </div>
        );

        let oldEvents = [];
        this.state.events.sort((a, b) => {
            return new Date(b.start_date).valueOf() - new Date(a.start_date).valueOf();
        });
        this.state.events.forEach((event) => {
            if (this.filterEvent(this.state.search, event)) {
                if (new Date(event.start_date).valueOf() - today.valueOf() < 0) {
                    oldEvents.push(<EventSummary old details={event} key={event.id} />);
                }
            }
        });

        if (oldEvents.length < 1 && newEvents.length < 1) {
            middleMan = []
            middleMan.push(
                <div className="eventList-old-events" key="oldevents" >
                    Nincs ilyen esemény
                </div>
            )
        }

        return (
            <div className="pagecenter">
                <div className="editButton" >
                    <img src={Edit} onClick={editEventsPage} />
                </div>
                <form autoComplete="off" className="card eventList-card-form">
                    <div>
                        <input type="text" name="search"
                            value={this.state.search} onChange={this.handleChange} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                            <path d="M7 2.01c-2.761 0-5 2.24-5 5.003a5.002 5.002 0 0 0 5 5.002A5.002 5.002 0 1 0 7 2.01m8.708 13.705a.996.996 0 0 1-1.412 0l-3.095-3.11A6.961 6.961 0 0 1 7 14.017c-3.866 0-7-3.135-7-7.003A7.002 7.002 0 0 1 7 .009c3.866 0 7 3.135 7 7.004 0 1.565-.52 3.007-1.388 4.173l3.096 3.112a1.003 1.003 0 0 1 0 1.417"></path>
                        </svg>
                    </div>
                </form>
                <ReactCssTransitionGroup
                    transitionName="fade"
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={300}
                    transitionAppear={true}
                    transitionLeaveTimeout={300}
                    style={{ width: "100%" }}>
                    {newEvents}{middleMan}{oldEvents}
                </ReactCssTransitionGroup>
            </div >
        )
    }
}

export default EventList;