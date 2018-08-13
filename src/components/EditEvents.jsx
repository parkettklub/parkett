import React from 'react';
import './Editor.css';
import PlusEvent from './document.svg';
import EditEventLogo from './pencil.svg';
import EditMedia from './film.svg';
import EditDetails from './list.svg';
import EditPoster from './poster.svg';
import EditEventParty from './EditEventParty';

class EditEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [
                {
                    id: "P_1",
                    title: "Élőzenés Salsa Party",
                    start_date: "2018.01.02. 18:30",
                    poster: true,
                    details: true,

                },
                {
                    id: "P_2",
                    title: "Élőzenés Rock N Roll Party",
                    start_date: "2018.01.02. 18:30",
                    media: true,
                    poster: true,
                    details: true,
                },
                {
                    id: "W_1",
                    title: "Kizomba Workshop",
                    start_date: "2018.01.02. 18:30"
                },
            ],
            selectParty: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectParty = this.selectParty.bind(this);
        this.back = this.back.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
    }


    handleChange(event) {
        console.log(event.target.value);
    }

    selectParty() {
        this.setState({ selectParty: true });
    }

    back() {
        this.setState({ selectParty: false });
    }

    render() {
        let rows = [];
        this.state.events.forEach(element => {
            rows.push(
                <div className="editable-event withpadding grid" key={element.id}>
                    <div>
                        {element.start_date} <b>{element.title}</b>
                    </div>
                    <div>
                        <img src={EditMedia} className="logo" hidden={element.media} />
                        <img src={EditDetails} className="logo" hidden={element.details} />
                        <img src={EditPoster} className="logo" hidden={element.poster} />
                        <img src={EditEventLogo} className="logo" />
                    </div>
                </div>
            )
        });
        let selected = [];

        if (this.state.selectParty) {
            selected.push(<EditEventParty />);
        } else {
            selected.push(
                <div className="card" key="addNewEvents">
                    <form autoComplete="off" className="eventList-card-form"
                        onSubmit={this.handleSubmit}>
                        <input type="text" name="search"
                            value={this.state.search} onChange={this.handleChange} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                            <path d="M7 2.01c-2.761 0-5 2.24-5 5.003a5.002 5.002 0 0 0 5 5.002A5.002 5.002 0 1 0 7 2.01m8.708 13.705a.996.996 0 0 1-1.412 0l-3.095-3.11A6.961 6.961 0 0 1 7 14.017c-3.866 0-7-3.135-7-7.003A7.002 7.002 0 0 1 7 .009c3.866 0 7 3.135 7 7.004 0 1.565-.52 3.007-1.388 4.173l3.096 3.112a1.003 1.003 0 0 1 0 1.417"></path>
                        </svg>
                    </form>
                </div>
            );
            selected.push(
                <div className="card withpadding" key="editEventList">
                    <div className="addEvent grid">
                        <div onClick={this.selectParty}>
                            <img src={PlusEvent} className="logo" />
                            <b>Új Esemény</b>
                        </div>
                        <div>
                            <img src={PlusEvent} className="logo" />
                            <b>Új Workshop</b>
                        </div>
                        <div>
                            <img src={PlusEvent} className="logo" />
                            <b>Új Hír</b>
                        </div>
                    </div>
                    {rows}
                </div>
            );
        }

        return (
            <div>
                {selected}
            </div>
        )
    }
}

export default EditEvents;