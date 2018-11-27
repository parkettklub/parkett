import React from 'react';
import SelectableElement from './SelectableElement';
import FormDJ from './FormDJ';
import Plus from './plus.svg';
import styles from './Editor.module.css';
import stylesForm from './Form.module.css';

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
                url: "bela.dj.com"
            }],
            selectedId: 0,
            selectedObject: null
        };
        this.New = this.New.bind(this);
    }

    Select(id) {
        let selected = this.state.djs.find((dj) => {
            return dj.id == id;
        })
        this.setState({
            selectedId: id,
            selectedObject: (<FormDJ selectedObject={selected} />)
        })
    }
    New() {
        this.setState({
            selectedId: null,
            selectedObject: (<FormDJ selectedObject={{
                id: -1
            }} />)
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
                            <SelectableElement title={dj.name} onClick={() => this.Select(dj.id)}
                                selected={dj.id == this.state.selectedId} />
                        )}
                    </div>
                    <div className={styles.selected}>
                        <div className={stylesForm.main}>
                            {this.state.selectedObject}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditDJ;