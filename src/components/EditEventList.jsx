import React from 'react';
import styles from './Editor.module.css';
import SelectableElement from './SelectableElement';
import EditEventArticle from './EditEventArticle';
import EditEventParty from './EditEventParty';
import EditEventWorkshop from './EditEventWorkshop';
import { fetchAll } from './FetchFunctions';
import Plus from './plus.svg';

class EditEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            workshops: [],
            parties: [],
            selectedId: '0',
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.fetchEvents();
    }

    fetchEvents = () => {
        this.fetchParties();
        this.fetchWorkshops();
        this.fetchArticles();
    }

    fetchParties = () => {
        fetchAll('parties').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ parties: myJson });
        });
    }

    fetchWorkshops = () => {
        fetchAll('workshops').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ workshops: myJson });
        });
    }

    fetchArticles = () => {
        fetchAll('articles').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ articles: myJson });
        });
    }

    selectParty = (id) => {
        const { parties } = this.state;
        const selected = parties.find(dance => dance.id === id);
        this.setState({
            selectedId: `P${id}`,
            selectedObject: (
                <EditEventParty
                    selectedObject={selected}
                    fetchFunction={this.fetchDances}
                />
            ),
        });
    }

    selectArticle = (id) => {
        const { articles } = this.state;
        const selected = articles.find(article => article.id === id);
        this.setState({
            selectedId: `A${id}`,
            selectedObject: (
                <EditEventArticle
                    selectedObject={selected}
                    fetchFunction={this.fetchArticles}
                />),
        });
    }

    selectWorkshop = (id) => {
        this.setState({
            selectedId: `W${id}`,
            selectedObject: (<EditEventWorkshop />),
        });
    }

    createParty = () => {
        this.setState({
            selectedId: '',
            selectedObject: (<EditEventParty />),
        });
    }

    createArticle = () => {
        this.setState({
            selectedId: '',
            selectedObject: (<EditEventArticle
                selectedObject={{ id: -1 }}
                fetchFunction={this.fetchArticles}
            />),
        });
    }

    createWorkshop = () => {
        this.setState({
            selectedId: '',
            selectedObject: (<EditEventWorkshop />),
        });
    }

    render() {
        const {
            parties, workshops, articles, selectedObject, selectedId,
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
                            parties.map(event => (
                                <SelectableElement
                                    {...event}
                                    selected={`P${event.id}` === selectedId}
                                    onClick={() => this.selectParty(event.id)}
                                />
                            ))
                        }
                        {
                            workshops.map(event => (
                                <SelectableElement
                                    {...event}
                                    selected={`W${event.id}` === selectedId}
                                    onClick={() => this.selectWorkshop(event.id)}
                                />
                            ))
                        }
                        {
                            articles.map(event => (
                                <SelectableElement
                                    {...event}
                                    selected={`A${event.id}` === selectedId}
                                    onClick={() => this.selectArticle(event.id)}
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
