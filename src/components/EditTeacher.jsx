import React from 'react';
import styles from './EditEventList.module.css';
import SelectableEvent from './SelectableEvent';
import FormTeacher from './FormTeacher';
import styles2 from './EditEvent.module.css';

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
                url: "wwww.parkettklub.hu"
            }],
            selectedId: 0,
            selectedObject: null
        };
    }

    Add(id) {
        this.setState({
            selectedId: id,
            selectedObject: (<FormTeacher />)
        })

    }

    render() {
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        {this.state.teachers.map((teacher) =>
                            <SelectableEvent title={teacher.name} onClick={() => this.Add(teacher.id)}
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