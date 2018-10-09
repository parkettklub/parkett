import React from 'react';
import './Editor.css';
import EditEventLogo from './pencil.svg';
import EditMedia from './film.svg';
import EditDetails from './list.svg';
import EditPoster from './poster.svg';
import EditEventsHeader from './EditEventsHeader';

function selectParty(id) {
    window.location = "/edit-party?id=" + id;
}

function selectWorkshop(id) {
    window.location = "/edit-workshop?id=" + id;
}

function selectArticle(id) {
    window.location = "/edit-article?id=" + id;
}

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
                    type: "party"
                },
                {
                    id: "P_2",
                    title: "Élőzenés Rock N Roll Party",
                    start_date: "2018.01.02. 18:30",
                    media: true,
                    poster: true,
                    details: true,
                    type: "party"
                },
                {
                    id: "W_1",
                    title: "Kizomba Workshop",
                    start_date: "2018.01.02. 18:30",
                    type: "workshop"
                },
                {
                    id: "A_1",
                    title: "Gólyabál",
                    start_date: "2018.01.02. 18:30",
                    type: "article"
                },
            ]
        };
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
                        <img src={EditMedia} className="logo" hidden={element.media} title="Missing Media" />
                        <img src={EditDetails} className="logo" hidden={element.details} title="Missing Details" />
                        <img src={EditPoster} className="logo" hidden={element.poster} title="Missing Poster" />
                        <img src={EditEventLogo} className="logo edit" title="Edit Events" onClick={() => {
                            if (element.type == "party")
                                selectParty(element.id);
                            if (element.type == "article")
                                selectArticle(element.id);
                            if (element.type == "workshop")
                                selectWorkshop(element.id);
                        }} />
                    </div>
                </div>
            )
        });

        return (
            <div>
                <EditEventsHeader />
                <div className="card withpadding" key="editEventList">
                    {rows}
                </div>
            </div>
        )
    }
}

export default EditEvents;