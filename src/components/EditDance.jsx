import React from 'react';
import SelectableElement from './SelectableElement';
import FormDance from './FormDance';
import { fetchAll } from './FetchFunctions';
import styles from './Editor.module.css';
import Plus from './plus.svg';

class EditDance extends React.Component {
    constructor() {
        super();
        this.state = {
            dances: [],
            selectedId: 0,
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.createDance();
        this.fetchDances();
    }

    editDance = (id) => {
        const { dances } = this.state;
        const selected = dances.find(dance => dance.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (
                <FormDance
                    selectedObject={selected}
                    fetchFunction={this.fetchDances}
                />),
        });
    }

    createDance = () => {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormDance
                    selectedObject={{ id: -1 }}
                    fetchFunction={this.fetchDances}
                />),
        });
    }

    fetchDances = () => {
        this.setState({
            selectedObject: null,
        });
        fetchAll('dances').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ dances: myJson });
        });
    }

    render() {
        const { selectedObject, dances, selectedId } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div
                            className={styles.selectable}
                            onClick={this.createDance}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img
                                src={Plus}
                                className={styles.addElement}
                                alt=""
                            />
                            {'Új Tánc'}
                        </div>
                        {dances.map(
                            dance => (
                                <SelectableElement
                                    title={`${dance.id} -  ${dance.name}`}
                                    start_date={dance.updated_at}
                                    onClick={() => this.editDance(dance.id)}
                                    selected={dance.id === selectedId}
                                    key={dance.id}
                                />
                            ),
                        )}
                    </div>
                    <div className={styles.selected}>
                        {selectedObject}
                    </div>
                </div>
            </div>
        );
    }
}

export default EditDance;
