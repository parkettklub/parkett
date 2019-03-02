import React from 'react';
import SelectableElement from './SelectableElement';
import FormDanceType from './FormDanceType';
import { fetchAll } from './FetchFunctions';
import styles from './Editor.module.css';
import Plus from './plus.svg';

class EditDanceType extends React.Component {
    constructor() {
        super();
        this.state = {
            dance_types: [],
            selectedId: 0,
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.createDance();
        this.fetchDances();
    }

    editDance = (id) => {
        const { dance_types } = this.state;
        const selected = dance_types.find(dance => dance.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (
                <FormDanceType
                    selectedObject={selected}
                    fetchFunction={this.fetchDances}
                />),
        });
    }

    createDance = () => {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormDanceType
                    selectedObject={{ id: -1 }}
                    fetchFunction={this.fetchDances}
                />),
        });
    }

    fetchDances = async () => {
        this.setState({
            selectedObject: null,
        });
        const myJson = await fetchAll('dance_types');
        this.setState({ dance_types: myJson });
    }

    render() {
        const { selectedObject, dance_types, selectedId } = this.state;
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
                        {dance_types.map(
                            dance_type => (
                                <SelectableElement
                                    title={`${dance_type.id} -  ${dance_type.name}`}
                                    onClick={() => this.editDance(dance_type.id)}
                                    selected={dance_type.id === selectedId}
                                    start_date={dance_type.updated_at}
                                    key={dance_type.id}
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

export default EditDanceType;
