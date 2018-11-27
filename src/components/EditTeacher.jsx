import React from 'react';
import SelectableElement from './SelectableElement';
import FormTeacher from './FormTeacher';
import styles from './Editor.module.css';
import styles2 from './Form.module.css';
import Plus from './plus.svg';

class EditTeacher extends React.Component {
    constructor() {
        super();
        this.state = {
            teachers: [{
                id: 1,
                name: "Kovács Béla és Heves Kornélia",
                url: "wwww.parkettklub.hu"
            }, {
                id: 2,
                name: "Komjáti Ede és Padányi Emese",
                url: "wwww.komjati.emese.hu"
            }],
            selectedId: 0,
            selectedObject: null
        };
        this.New = this.New.bind(this);
    }

    Select(id) {
        let selected = this.state.teachers.find((teacher) => {
            return teacher.id == id;
        })
        this.setState({
            selectedId: id,
            selectedObject: (<FormTeacher selectedObject={selected} />)
        })
    }

    New() {
        this.setState({
            selectedId: null,
            selectedObject: (<FormTeacher selectedObject={{
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
                            Új Tanár
                        </div>
                        {this.state.teachers.map((teacher) =>
                            <SelectableElement title={teacher.name} onClick={() => this.Select(teacher.id)}
                                selected={teacher.id == this.state.selectedId} />
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

export default EditTeacher;