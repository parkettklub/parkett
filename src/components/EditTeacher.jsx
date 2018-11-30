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
                name: 'Kovács Béla és Heves Kornélia',
                url: 'wwww.parkettklub.hu',
            }, {
                id: 2,
                name: 'Komjáti Ede és Padányi Emese',
                url: 'wwww.komjati.emese.hu',
            }],
            selectedId: 0,
            selectedObject: null,
        };
        this.New = this.New.bind(this);
    }

    Select(id) {
        const { teachers } = this.state;
        const selected = teachers.find(teacher => teacher.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (<FormTeacher selectedObject={selected} />),
        });
    }

    New() {
        this.setState({
            selectedId: null,
            selectedObject: (<FormTeacher selectedObject={{
                id: -1,
            }}
            />),
        });
    }

    render() {
        const { teachers, selectedObject, selectedId } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div
                            className={styles.selectable}
                            onClick={this.New}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img alt="" src={Plus} className={styles.addElement} />
                            {'Új Tanár'}
                        </div>
                        {teachers.map(teacher => (
                            <SelectableElement
                                title={teacher.name}
                                onClick={() => this.Select(teacher.id)}
                                selected={teacher.id === selectedId}
                            />
                        ))}
                    </div>
                    <div className={styles.selected}>
                        <div className={styles2.main}>
                            {selectedObject}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditTeacher;
