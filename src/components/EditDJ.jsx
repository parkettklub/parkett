import React from 'react';
import styles from './EditEventList.module.css';
import SelectableEvent from './SelectableEvent';
import FormDJ from './FormDJ';
import Plus from './plus.svg';
import styles2 from './EditEvent.module.css';

class EditDJ extends React.Component {
    constructor() {
        super();
        this.state = {
            djs: [{
                id: 1,
                name: "DJ Andrea",
                url: "google.com"
            }, {
                id: 2,
                name: "DJ Béla",
                url: "google.com"
            }],
            selectedId: 0,
            selectedObject: null
        };
        this.New = this.New.bind(this);
    }

    Add(id) {
        this.setState({
            selectedId: id,
            selectedObject: (<FormDJ />)
        })
    }
    New() {
        this.setState({
            selectedId: null,
            selectedObject: (<FormDJ />)
        })
    }


    render() {
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div className={styles.selectable}
                            onClick={this.New} >
                            <img src={Plus} className={styles.addElement} />
                            Új DJ
                        </div>
                        {this.state.djs.map((dj) =>
                            <SelectableEvent title={dj.name} onClick={() => this.Add(dj.id)}
                                selected={dj.id == this.state.selectedId} />
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

export default EditDJ;