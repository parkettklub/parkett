import React from 'react';
import EventSummary from './Event';
import EditEventsHeader from './EditEventsHeader';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import Plakat01 from './Plakat.png';
import Plakat02 from './Plakat_vegleges.jpg';

function onClickParty() {
    window.location = "/event-party/";
}

function onClickWorkshop() {
    window.location = "/event-workshop/";
}

class EventList extends React.Component {

    constructor() {
        super();
        this.state = {
            search: "",
            events: [{
                id: 1,
                title: "Kizomba workshop 01",
                poster: Plakat01,
                start_date: "2018-12-12T18:00",
                formlink: "https://goo.gl/forms/EMAqXVoJDJQGNkeq1",
                facebook: "https://www.facebook.com/events/1598719006921910/",
                onClick: onClickWorkshop
            },
            {
                id: 2,
                title: "Élőzenés Rock N Roll Party 02",
                poster: null,
                start_date: "2018-11-12T18:00",
                music: "Cuba Ritmo Trió és DJ Eddy",
                facebook: "https://www.facebook.com/events/1598719006921910/",
                onClick: onClickParty
            },
            {
                id: 3,
                title: "Gólyakörte 03",
                poster: Plakat02,
                start_date: "2018-06-12T18:00",
            },
            {
                id: 4,
                title: "Élőzenés Magyar Táncház 04",
                poster: Plakat01,
                start_date: "2018-07-12T18:00",
                music: "Cuba Ritmo Trió és DJ Eddy",
            },
            {
                id: 5,
                title: "Élőzenés Magyar Táncház 05",
                start_date: "2018-08-12T18:00",
                music: "Cuba Ritmo Trió és DJ Eddy",
                facebook: "https://www.facebook.com/events/1598719006921910/"
            },
            {
                id: 6,
                title: "Élőzenés Magyar Táncház 06",
                poster: Plakat01,
                start_date: "2018-09-12T18:00",
                music: "Cuba Ritmo Trió és DJ Eddy"
            },
            {
                id: 7,
                title: "Élőzenés Magyar Táncház 07",
                poster: Plakat01,
                start_date: "2017-01-12T18:00",
            },
            {
                id: 8,
                title: "Élőzenés Magyar Táncház 08",
                poster: Plakat01,
                start_date: "2016-01-12T18:00",
            },
            {
                id: 9,
                title: "Élőzenés Magyar Táncház 09",
                poster: Plakat01,
                start_date: "2015-01-12T18:00",
            },
            {
                id: 10,
                title: "Élőzenés Magyar Táncház 10",
                poster: Plakat01,
                start_date: "2014-01-12T18:00",
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
            <div>
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
                    transitionLeaveTimeout={300}>
                    {newEvents}{middleMan}{oldEvents}
                </ReactCssTransitionGroup>
            </div>
        )
    }
}

export default EventList;