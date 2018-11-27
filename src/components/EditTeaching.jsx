import React from 'react';
import styles from './EditEventList.module.css';
import SelectableEvent from './SelectableEvent';
import FormTeaching from './FormTeaching';
import styles2 from './EditEvent.module.css';
import Plus from './plus.svg';


class EditTeaching extends React.Component {
    constructor() {
        super();
        this.state = {
            teachings: [{
                id: 1,
                teacherid: 0,
                danceid: 1,
                level: "kezdő",
                length: "45 perces"
            }, {
                id: 2,
                teacherid: 1,
                danceid: 1,
                level: "kezdő",
                length: "45 perces"
            }],
            teachers: [{
                id: 1,
                name: "Kovács Béla és Heves Kornélia",
                url: "wwww.parkettklub.hu"
            }, {
                id: 2,
                name: "Komjáti Ede és Padányi Emese",
                url: "wwww.parkettklub.hu"
            }],
            selectedId: 0,
            selectedObject: null
        };
        this.New = this.New.bind(this);
    }

    Add(id) {
        this.setState({
            selectedId: id,
            selectedObject: (<FormTeaching />)
        })

    }

    New() {
        this.setState({
            selectedId: null,
            selectedObject: (<FormTeaching />)
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
                            Új Tanítás
                        </div>
                        {this.state.teachings.map((teaching) =>
                            <SelectableEvent title={this.state.teachers[teaching.teacherid].name}
                                onClick={() => this.Add(teaching.id)}
                                selected={teaching.id == this.state.selectedId} />
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

export default EditTeaching;