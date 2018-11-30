import React from 'react';
import SelectableElement from './SelectableElement';
import FormDJ from './FormDJ';
import Plus from './plus.svg';
import styles from './Editor.module.css';

class EditDJ extends React.Component {
    constructor() {
        super();
        this.state = {
            djs: [{
                id: 1,
                name: 'DJ Andrea',
                url: 'google.com',
            }, {
                id: 2,
                name: 'DJ Béla',
                url: 'bela.dj.com',
            }],
            selectedId: 0,
            selectedObject: null,
        };
        this.createDJ = this.createDJ.bind(this);
    }

    editDJ(id) {
        const { djs } = this.state;
        const selected = djs.find(dj => dj.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (<FormDJ selectedObject={selected} />),
        });
    }

    createDJ() {
        this.setState({
            selectedId: null,
            selectedObject: (<FormDJ selectedObject={{
                id: -1,
            }}
            />),
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
