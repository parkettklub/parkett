import React from 'react';
import SelectableElement from './SelectableElement';
import FormBand from './FormBand';
import styleForm from './Form.module.css';
import styles from './Editor.module.css';
import Plus from './plus.svg';

class EditBand extends React.Component {
    constructor() {
        super();
        this.state = {
            bands: [{
                id: 1,
                name: "Pedrofon",
                url: "google.com"
            }, {
                id: 2,
                name: "Török Testvérek",
                url: "torok.testverek.hu"
            }],
            selectedId: 0,
            selectedObject: null
        };
        this.New = this.New.bind(this);
    }

    Select(id) {
        let selected = this.state.bands.find((band) => {
            return band.id == id;
        })
        this.setState({
            selectedId: id,
            selectedObject: (<FormBand selectedObject={selected} />)
        })
    }

    New() {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormBand selectedObject={{
                    id: -1
                }} />)
        });
    }

    render() {
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div className={styles.selectable}
                            onClick={this.New} >
                            <img src={Plus} className={styles.addElement} />
                            Új Zenekar
                        </div>
                        {this.state.bands.map((band) =>
                            <SelectableElement title={band.name} onClick={() => this.Select(band.id)}
                                selected={band.id == this.state.selectedId} />
                        )}
                    </div>
                    <div className={styles.selected}>
                        <div className={styleForm.main}>
                            {this.state.selectedObject}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditBand;