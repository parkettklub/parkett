import React from 'react';
import styles from './EditEventList.module.css';
import EditEventLogo from './pencil.svg';
import EditMedia from './film.svg';
import EditDetails from './list.svg';
import EditPoster from './poster.svg';
import EditEventsHeader from './EditEventsHeader';
import SelectableEvent from './SelectableEvent';
import EditEventArticle from './EditEventArticle';
import EditEventParty from './EditEventParty';
import EditEventWorkshop from './EditEventWorkshop';

class EditEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [
                {
                    id: "1",
                    title: "Élőzenés Salsa Party",
                    start_date: "2018.01.02. 18:30",
                    onClick: () => this.Party(1),
                },
                {
                    id: "2",
                    title: "Élőzenés Rock N Roll Party",
                    start_date: "2018.01.02. 18:30",
                    onClick: () => this.Party(2),
                },
                {
                    id: "1",
                    title: "Kizomba Workshop",
                    start_date: "2018.01.02. 18:30",
                    onClick: () => this.Workshop(1),
                },
                {
                    id: "1",
                    title: "Gólyabál",
                    start_date: "2018.01.02. 18:30",
                    onClick: () => this.Article(1),
                },
            ],
            selectedId: 0,
            selectedObject: null
        };
    }

    Party(id) {
        this.setState({
            selectedId: id,
            selectedObject: (<EditEventParty />)
        })

    }

    Article(id) {
        this.setState({
            selectedId: id,
            selectedObject: (<EditEventArticle />)
        })
    }

    Workshop(id) {
        this.setState({
            selectedId: id,
            selectedObject: (<EditEventWorkshop />)
        })
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.list}>
                    {this.state.events.map((event) => <SelectableEvent {...event} />)}
                </div>
                <div className={styles.selected}>
                    {this.state.selectedObject}
                </div>
            </div>
        )
    }
}

export default EditEvents;