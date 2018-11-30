import React from 'react';
import styles from './Editor.module.css';
import SelectableElement from './SelectableElement';
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
                    id: 'P1',
                    title: 'Élőzenés Salsa Party',
                    start_date: '2018.01.02. 18:30',
                    onClick: () => this.selectParty(1),
                },
                {
                    id: 'P2',
                    title: 'Élőzenés Rock N Roll Party',
                    start_date: '2018.01.02. 18:30',
                    onClick: () => this.selectParty(2),
                },
                {
                    id: 'W1',
                    title: 'Kizomba Workshop',
                    start_date: '2018.01.02. 18:30',
                    onClick: () => this.selectWorkshop(1),
                },
                {
                    id: 'A1',
                    title: 'Gólyabál',
                    start_date: '2018.01.02. 18:30',
                    onClick: () => this.selectArticle(1),
                },
            ],
            selectedId: '0',
            selectedObject: null,
        };
        this.createArticle = this.createArticle.bind(this);
        this.createParty = this.createParty.bind(this);
        this.createWorkshop = this.createWorkshop.bind(this);
    }

    selectParty(id) {
        this.setState({
            selectedId: `P${id}`,
            selectedObject: (<EditEventParty />),
        });
    }

    selectArticle(id) {
        this.setState({
            selectedId: `A${id}`,
            selectedObject: (<EditEventArticle />),
        });
    }

    selectWorkshop(id) {
        this.setState({
            selectedId: `W${id}`,
            selectedObject: (<EditEventWorkshop />),
        });
    }

    createParty() {
        this.setState({
            selectedId: '',
            selectedObject: (<EditEventParty />),
        });
    }

    createArticle() {
        this.setState({
            selectedId: '',
            selectedObject: (<EditEventArticle />),
        });
    }

    createWorkshop() {
        this.setState({
            selectedId: '',
            selectedObject: (<EditEventWorkshop />),
        });
    }

    render() {
        const { events, selectedObject, selectedId } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div
                            className={styles.selectable}
                            onClick={this.createParty}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img alt="" src={Plus} className={styles.addElement} />
                            {'Új party'}
                        </div>
                        <div
                            className={styles.selectable}
                            onClick={this.createWorkshop}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img alt="" src={Plus} className={styles.addElement} />
                            {'Új Workshop'}
                        </div>
                        <div
                            className={styles.selectable}
                            onClick={this.createArticle}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img alt="" src={Plus} className={styles.addElement} />
                            {'Új Bejegyzés'}
                        </div>
                        {
                            events.map(event => (
                                <SelectableElement {...event} selected={event.id === selectedId} />
                            ))
                        }
                    </div>
                    <div className={styles.selected}>
                        {selectedObject}
                    </div>
                </div>
            </div>
        );
    }
}

export default EditEvents;
