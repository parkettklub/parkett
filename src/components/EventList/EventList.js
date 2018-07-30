import React from 'react';
import Event from './Event';
import ReactCssTrabsitionGroup from 'react-addons-css-transition-group';
import Plakat01 from '../Plakat.png';
import Plakat02 from '../Plakat_vegleges.jpg';
import Link from 'gatsby-link';

class EventList extends React.Component {

    constructor() {
        super();
        this.state = {
            search: "",
            events: [{
                title: "Kizomba workshop 01",
                poster: Plakat01,
                date: new Date("2019-06-12"),
                formlink: "https://goo.gl/forms/EMAqXVoJDJQGNkeq1",
                facebook: "https://www.facebook.com/events/1598719006921910/"
            },
            {
                title: "Élőzenés Rock N Roll Party 02",
                poster: Plakat01,
                date: new Date("2018-12-12"),
                music: "Cuba Ritmo Trió és DJ Eddy",
                facebook: "https://www.facebook.com/events/1598719006921910/"
            },
            {
                title: "Gólyakörte 03",
                poster: Plakat02,
                date: new Date("2018-10-12"),
            },
            {
                title: "Élőzenés Magyar Táncház 04",
                poster: Plakat01,
                date: new Date("2018-06-12"),
                music: "Cuba Ritmo Trió és DJ Eddy",
                facebook: "https://www.facebook.com/events/1598719006921910/"
            },
            {
                title: "Élőzenés Magyar Táncház 05",
                poster: Plakat01,
                date: new Date("2016-06-12"),
                music: "Cuba Ritmo Trió és DJ Eddy",
                facebook: "https://www.facebook.com/events/1598719006921910/"
            },
            {
                title: "Élőzenés Magyar Táncház 06",
                poster: Plakat01,
                date: new Date("2015-06-12"),
                music: "Cuba Ritmo Trió és DJ Eddy"
            },
            {
                title: "Élőzenés Magyar Táncház 07",
                poster: Plakat01,
                date: new Date("2014-06-12")
            },
            {
                title: "Élőzenés Magyar Táncház 08",
                poster: Plakat01,
                date: new Date("2014-05-12")
            },
            {
                title: "Élőzenés Magyar Táncház 09",
                poster: Plakat01,
                date: new Date("2014-04-12")
            },
            {
                title: "Élőzenés Magyar Táncház 10",
                poster: Plakat01,
                date: new Date("2014-03-12")
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

        const date = event.date;
        const dateString = date.getFullYear() + "." + date.getMonth()
            + "." + date.getDate();
        return (event.title.toUpperCase().indexOf(search.toUpperCase()) !== -1)
            || (dateString.indexOf(search.toUpperCase()) !== -1)
            || (event.music && (event.music.toUpperCase().indexOf(search.toUpperCase()) !== -1));
    }

    render() {
        let today = new Date();
        let rows = [];
        this.state.events.sort((a, b) => {
            return a.date.valueOf() - b.date.valueOf();
        });
        this.state.events.forEach((event) => {
            if (this.filterEvent(this.state.search, event)) {
                if (event.date.valueOf() - today.valueOf() >= 0) {
                    rows.push(<Event details={event} />);
                }
            }
        });
        rows.push(
            <div className="eventList-old-events">
                Régebbi Események
            </div>
        );
        this.state.events.sort((a, b) => {
            return b.date.valueOf() - a.date.valueOf();
        });
        this.state.events.forEach((event) => {
            if (this.filterEvent(this.state.search, event)) {
                if (event.date.valueOf() - today.valueOf() < 0) {
                    rows.push(<Event old details={event} />);
                }
            }
        });

        if (rows.length <= 1) {
            rows = []
            rows.push(
                <div className="eventList-old-events">
                    Nincs ilyen esemény
                </div>
            )
        }

        return (
            <div className="eventList-main">
                <Link to="/event/">Go to event</Link>
                <form autoComplete="off" className="eventList-card-form">
                    <div>
                        <input type="text" name="search"
                            value={this.state.search} onChange={this.handleChange} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"><path d="M7 2.01c-2.761 0-5 2.24-5 5.003a5.002 5.002 0 0 0 5 5.002A5.002 5.002 0 1 0 7 2.01m8.708 13.705a.996.996 0 0 1-1.412 0l-3.095-3.11A6.961 6.961 0 0 1 7 14.017c-3.866 0-7-3.135-7-7.003A7.002 7.002 0 0 1 7 .009c3.866 0 7 3.135 7 7.004 0 1.565-.52 3.007-1.388 4.173l3.096 3.112a1.003 1.003 0 0 1 0 1.417"></path></svg>

                    </div>
                </form>
                <ReactCssTrabsitionGroup
                    transitionName="fade"
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={300}
                    transitionAppear={true}
                    transitionLeaveTimeout={300}>
                    {rows}
                </ReactCssTrabsitionGroup>

            </div>
        )
    }
}

export default EventList;