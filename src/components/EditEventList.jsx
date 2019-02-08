import React from 'react';
import styles from './Editor.module.css';
import SelectableElement from './SelectableElement';
import FormEventArticle from './FormEventArticle';
import FormEventParty from './FormEventParty';
import FormEventWorkshop from './FormEventWorkshop';
import { fetchAll } from './FetchFunctions';
import Plus from './plus.svg';

const today = new Date();

class EditEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            workshops: [],
            parties: [],
            events: [],
            selectedId: '0',
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.fetchEvents();
    }

    fetchEvents = () => {
        this.setState({ events: [] });
        this.fetchParties();
        this.fetchWorkshops();
        this.fetchArticles();
    }

    fetchParties = () => {
        fetchAll('parties').then(
            response => response.json(),
        ).then((myJson) => {
            this.addEvents('P', myJson, this.selectParty);
        });
    }

    fetchWorkshops = () => {
        fetchAll('workshops').then(
            response => response.json(),
        ).then((myJson) => {
            this.addEvents('W', myJson, this.selectWorkshop);
        });
    }

    fetchArticles = () => {
        fetchAll('articles').then(
            response => response.json(),
        ).then((myJson) => {
            this.addEvents('A', myJson, this.selectArticle, true);
        });
    }

    addEvents = (char, newEvents, onClick, article = false) => {
        const { events } = this.state;
        let filteredEvents = newEvents;
        filteredEvents = filteredEvents.map(original => ({
            ...original,
            onClick: () => onClick(original),
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

    selectParty = (selected) => {
        this.setState({
            selectedId: selected.complexId,
            selectedObject: (
                <FormEventParty
                    selectedObject={selected}
                    fetchFunction={this.fetchParties}
                />
            ),
        });
    }

    selectArticle = (selected) => {
        this.setState({
            selectedId: selected.complexId,
            selectedObject: (
                <FormEventArticle
                    selectedObject={selected}
                    fetchFunction={this.fetchArticles}
                />),
        });
    }

    selectWorkshop = (selected) => {
        this.setState({
            selectedId: selected.complexId,
            selectedObject: (
                <FormEventWorkshop
                    selectedObject={selected}
                    fetchFunction={this.fetchWorkshops}
                />),
        });
    }

    createParty = () => {
        this.setState({
            selectedId: '',
            selectedObject: (<FormEventParty
                selectedObject={{ id: -1 }}
                fetchFunction={this.fetchParties}
            />),
        });
    }

    createArticle = () => {
        this.setState({
            selectedId: '',
            selectedObject: (<FormEventArticle
                selectedObject={{ id: -1 }}
                fetchFunction={this.fetchArticles}
            />),
        });
    }

    createWorkshop = () => {
        this.setState({
            selectedId: '',
            selectedObject: (<FormEventWorkshop
                selectedObject={{ id: -1 }}
                fetchFunction={this.fetchWorkshops}
            />),
        });
    }

    render() {
        const {
            events, selectedObject, selectedId,
        } = this.state;
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
                                <SelectableElement
                                    {...event}
                                    selected={event.complexId === selectedId}
                                    onClick={event.onClick}
                                    key={event.complexId}
                                />
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
