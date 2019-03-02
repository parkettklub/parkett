import React from 'react';
import styles from './Editor.module.css';
import SelectableElement from './SelectableElement';
import FormEventArticle from './FormEventArticle';
import FormEventParty from './FormEventParty';
import FormEventWorkshop from './FormEventWorkshop';
import { fetchAll } from './FetchFunctions';
import Plus from './plus.svg';

class EditEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            events: [],
            selectedId: '0',
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.fetchEvents();
    }

    fetchEvents = () => {
        const complexId = window.location.href.split('?')[1];
        this.setState({
            events: [],
            selectedObject: null,
            selectedId: complexId,
        });
        this.fetchParties();
        this.fetchWorkshops();
        this.fetchArticles();
    }

    fetchParties = async () => {
        const myJson = await fetchAll('parties');
        this.addEvents('P', myJson, this.selectParty);
    }

    fetchWorkshops = async () => {
        const myJson = await fetchAll('workshops');
        this.addEvents('W', myJson, this.selectWorkshop);
    }

    fetchArticles = async () => {
        const myJson = await fetchAll('articles');
        this.addEvents('A', myJson, this.selectArticle, true);
    }

    addEvents = (char, newEvents, onClick, article = false) => {
        const { events, selectedId } = this.state;
        let filteredEvents = newEvents;
        filteredEvents = filteredEvents.map(original => ({
            ...original,
            onClick: () => onClick({ ...original, complexId: `${char}${original.id}` }),
            complexId: `${char}${original.id}`,
            date: article ? original.published_at : original.start_date,
        }));
        let allEvents = events.concat(filteredEvents);
        allEvents = allEvents.sort((a, b) => {
            const aValue = new Date(a.date).valueOf();
            const bValue = new Date(b.date).valueOf();
            return bValue - aValue;
        });
        let selectedObject = null;
        allEvents.forEach((event) => {
            if (event.complexId === selectedId) {
                if (selectedId[0] === 'P') {
                    selectedObject = (
                        <FormEventParty
                            selectedObject={event}
                            fetchFunction={this.fetchEvents}
                        />
                    );
                }
                if (selectedId[0] === 'W') {
                    selectedObject = (
                        <FormEventWorkshop
                            selectedObject={event}
                            fetchFunction={this.fetchEvents}
                        />
                    );
                }
                if (selectedId[0] === 'A') {
                    selectedObject = (
                        <FormEventArticle
                            selectedObject={event}
                            fetchFunction={this.fetchEvents}
                        />
                    );
                }
            }
        });
        this.setState({ events: allEvents, selectedObject });
    }

    selectParty = (selected) => {
        this.setState({
            selectedId: selected.complexId,
            selectedObject: (
                <FormEventParty
                    selectedObject={selected}
                    fetchFunction={this.fetchEvents}
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
                    fetchFunction={this.fetchEvents}
                />),
        });
    }

    selectWorkshop = (selected) => {
        this.setState({
            selectedId: selected.complexId,
            selectedObject: (
                <FormEventWorkshop
                    selectedObject={selected}
                    fetchFunction={this.fetchEvents}
                />),
        });
    }

    createParty = () => {
        this.setState({
            selectedId: '',
            selectedObject: (<FormEventParty
                selectedObject={{ id: -1 }}
                fetchFunction={this.fetchEvents}
            />),
        });
    }

    createArticle = () => {
        this.setState({
            selectedId: '',
            selectedObject: (<FormEventArticle
                selectedObject={{ id: -1 }}
                fetchFunction={this.fetchEvents}
            />),
        });
    }

    createWorkshop = () => {
        this.setState({
            selectedId: '',
            selectedObject: (<FormEventWorkshop
                selectedObject={{ id: -1 }}
                fetchFunction={this.fetchEvents}
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
                            {selectedId}
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
