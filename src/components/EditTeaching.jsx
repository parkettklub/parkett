import React from 'react';
import SelectableElement from './SelectableElement';
import FormTeaching from './FormTeaching';
import styles from './Editor.module.css';
import styles2 from './Form.module.css';
import Plus from './plus.svg';


class EditTeaching extends React.Component {
    constructor() {
        super();
        this.state = {
            teachings: [{
                id: 1,
                teacherid: 1,
                danceid: 1,
                level: "kezdő",
                length: "45 perces"
            }, {
                id: 2,
                teacherid: 2,
                danceid: 2,
                level: "kezdő",
                length: "45 perces"
            }],
            teachers: [{
                id: 1,
                name: "Martin és Gelda"
            }, {
                id: 2,
                name: "Ede és Emese és a törpe"
            }],
            selectedId: 0,
            selectedObject: null
        };
        this.New = this.New.bind(this);
    }

    Select(selected) {
        this.setState({
            selectedId: selected.id,
            selectedObject: (<FormTeaching selectedObject={selected} />)
        })
    }

    New() {
        this.setState({
            selectedId: null,
            selectedObject: (<FormTeaching selectedObject={{
                id: -1,
            }} />)
        })
    }

    getTeacher(id) {
        return this.state.teachers.find((teacher) => teacher.id == id);
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
                            <SelectableElement title={this.getTeacher(teaching.teacherid).name}
                                onClick={() => this.Select(teaching)}
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