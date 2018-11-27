import React from 'react';
import styles from './EditEventList.module.css';
import SelectableEvent from './SelectableEvent';
import FormBand from './FormBand';
import styles2 from './EditEvent.module.css';

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
                url: "google.com"
            }],
            selectedId: 0,
            selectedObject: null
        };
    }

    Add(id) {
        this.setState({
            selectedId: id,
            selectedObject: (<FormBand />)
        })

    }

    render() {
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        {this.state.bands.map((band) =>
                            <SelectableEvent title={band.name} onClick={() => this.Add(band.id)}
                                selected={band.id == this.state.selectedId} />
                        )}
                    </div>
                    <div className={styles.selected}>
                        <div className={styles2.main}>
                            {this.state.selectedObject}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditBand;