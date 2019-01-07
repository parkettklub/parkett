import React from 'react';
import SelectableElement from './SelectableElement';
import FormBand from './FormBand';
import styles from './Editor.module.css';
import Plus from './plus.svg';

class EditBand extends React.Component {
    constructor() {
        super();
        this.state = {
            bands: [{
                id: 1,
                name: 'Pedrofon',
                url: 'google.com',
            }, {
                id: 2,
                name: 'Török Testvérek',
                url: 'torok.testverek.hu',
            }],
            selectedId: 0,
            selectedObject: null,
        };
    }

    editBand(id) {
        const { bands } = this.state;
        const selected = bands.find(band => band.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (<FormBand selectedObject={selected} />),
        });
    }

    createBand = () => {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormBand selectedObject={{
                    id: -1,
                }}
                />),
        });
    }

    render() {
        const { bands, selectedObject, selectedId } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div
                            className={styles.selectable}
                            onClick={this.createBand}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img src={Plus} className={styles.addElement} alt="" />
                            {'Új Zenekar'}
                        </div>
                        {bands.map(
                            band => (
                                <SelectableElement
                                    title={band.name}
                                    onClick={() => this.editBand(band.id)}
                                    selected={band.id === selectedId}
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

export default EditBand;
