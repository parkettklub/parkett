import React from 'react';
import styles from './EditEventList.module.css';
import SelectableEvent from './SelectableEvent';
import EditEventArticle from './EditEventArticle';
import EditEventParty from './EditEventParty';
import EditEventWorkshop from './EditEventWorkshop';
import Plus from './plus.svg';

class EditEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [
                {
                    id: "P1",
                    title: "Élőzenés Salsa Party",
                    start_date: "2018.01.02. 18:30",
                    onClick: () => this.Party(1),
                },
                {
                    id: "P2",
                    title: "Élőzenés Rock N Roll Party",
                    start_date: "2018.01.02. 18:30",
                    onClick: () => this.Party(2),
                },
                {
                    id: "W1",
                    title: "Kizomba Workshop",
                    start_date: "2018.01.02. 18:30",
                    onClick: () => this.Workshop(1),
                },
                {
                    id: "A1",
                    title: "Gólyabál",
                    start_date: "2018.01.02. 18:30",
                    onClick: () => this.Article(1),
                },
            ],
            selectedId: "0",
            selectedObject: null
        };
        this.NewArticle = this.NewArticle.bind(this);
        this.NewParty = this.NewParty.bind(this);
        this.NewWorkshop = this.NewWorkshop.bind(this);
    }

    Party(id) {
        this.setState({
            selectedId: "P" + id,
            selectedObject: (<EditEventParty />)
        })

    }

    Article(id) {
        this.setState({
            selectedId: "A" + id,
            selectedObject: (<EditEventArticle />)
        })
    }

    Workshop(id) {
        this.setState({
            selectedId: "W" + id,
            selectedObject: (<EditEventWorkshop />)
        })
    }

    NewParty() {
        this.setState({
            selectedId: "",
            selectedObject: (<EditEventParty />)
        })

    }

    NewArticle() {
        this.setState({
            selectedId: "",
            selectedObject: (<EditEventArticle />)
        })
    }

    NewWorkshop() {
        this.setState({
            selectedId: "",
            selectedObject: (<EditEventWorkshop />)
        })
    }

    render() {
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div className={styles.selectable}
                            onClick={this.NewParty} >
                            <img src={Plus} className={styles.addElement} />
                            Új party
                        </div>
                        <div className={styles.selectable}
                            onClick={this.NewWorkshop} >
                            <img src={Plus} className={styles.addElement} />
                            Új Workshop
                        </div>
                        <div className={styles.selectable}
                            onClick={this.NewArticle} >
                            <img src={Plus} className={styles.addElement} />
                            Új Bejegyzés
                        </div>

                        {this.state.events.map((event) =>
                            <SelectableEvent {...event} selected={event.id == this.state.selectedId} />
                        )}
                    </div>
                    <div className={styles.selected}>
                        {this.state.selectedObject}
                    </div>
                </div>
            </div>
        )
    }
}

export default EditEvents;