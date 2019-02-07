import React from 'react';
import SelectableElement from './SelectableElement';
import FormDJ from './FormDJ';
import { fetchAll } from './FetchFunctions';
import Plus from './plus.svg';
import styles from './Editor.module.css';

class EditDJ extends React.Component {
    constructor() {
        super();
        this.state = {
            djs: [],
            selectedId: 0,
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.createDJ();
        this.fetchDJs();
    }

    editDJ = (id) => {
        const { djs } = this.state;
        const selected = djs.find(dj => dj.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (
                <FormDJ
                    selectedObject={selected}
                    fetchFunction={this.fetchDJs}
                />
            ),
        });
    }

    createDJ = () => {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormDJ
                    selectedObject={{
                        id: -1,
                    }}
                    fetchFunction={this.fetchDJs}
                />),
        });
    }

    fetchDJs = () => {
        fetchAll('djs').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ djs: myJson });
        });
    }


    render() {
        const { djs, selectedId, selectedObject } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div
                            className={styles.selectable}
                            onClick={this.createDJ}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img src={Plus} className={styles.addElement} alt="" />
                            {'Új DJ'}
                        </div>
                        {djs.map(dj => (
                            <SelectableElement
                                title={dj.name}
                                onClick={() => this.editDJ(dj.id)}
                                selected={dj.id === selectedId}
                                key={dj.id}
                            />
                        ))}
                    </div>
                    <div className={styles.selected}>
                        {selectedObject}
                    </div>
                </div>
            </div>
        );
    }
}

export default EditDJ;
