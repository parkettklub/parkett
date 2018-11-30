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
                level: 'kezdő',
                length: '45 perces',
            }, {
                id: 2,
                teacherid: 2,
                danceid: 2,
                level: 'kezdő',
                length: '45 perces',
            }],
            teachers: [{
                id: 1,
                name: 'Martin és Gelda',
            }, {
                id: 2,
                name: 'Ede és Emese és a törpe',
            }],
            selectedId: 0,
            selectedObject: null,
        };
        this.New = this.New.bind(this);
    }

    getTeacher(id) {
        const { teachers } = this.state;
        return teachers.find(teacher => teacher.id === id);
    }

    New() {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormTeaching
                    selectedObject={{ id: -1 }}
                />),
        });
    }

    Select(selected) {
        this.setState({
            selectedId: selected.id,
            selectedObject: (<FormTeaching selectedObject={selected} />),
        });
    }

    render() {
        const { teachings, selectedObject, selectedId } = this.state;
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
                            {'Új Tanítás'}
                        </div>
                        {teachings.map(teaching => (
                            <SelectableElement
                                title={this.getTeacher(teaching.teacherid).name}
                                onClick={() => this.Select(teaching)}
                                selected={teaching.id === selectedId}
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

export default EditTeaching;
