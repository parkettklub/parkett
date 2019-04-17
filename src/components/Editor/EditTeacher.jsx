import React from 'react';
import SelectableElement from './SelectableElement';
import FormTeacher from './FormTeacher';
import { fetchAll } from '../../utils/FetchFunctions';
import styles from './Editor.module.css';
import Plus from './plus.svg';

class EditTeacher extends React.Component {
    constructor() {
        super();
        this.state = {
            teachers: [],
            selectedId: 0,
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.createTeacher();
        this.fetchTeachers();
    }

    createTeacher = () => {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormTeacher
                    selectedObject={{
                        id: -1,
                    }}
                    fetchFunction={this.fetchTeachers}
                />),
        });
    }


    editTeacher = (id) => {
        const { teachers } = this.state;
        const selected = teachers.find(teacher => teacher.id === id);
        this.setState({
            selectedId: id,
            selectedObject: (
                <FormTeacher
                    selectedObject={selected}
                    fetchFunction={this.fetchTeachers}
                />
            ),
        });
    }

    fetchTeachers = () => {
        this.setState({
            selectedObject: null,
        });
        fetchAll('dance_teachers').then((myJson) => {
            this.setState({ teachers: myJson });
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
                            onClick={this.createTeacher}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img alt="" src={Plus} className={styles.addElement} />
                            {'Új Tanár'}
                        </div>
                        {teachers.map(teacher => (
                            <SelectableElement
                                title={`${teacher.id} – ${teacher.name}`}
                                start_date={teacher.updated_at}
                                onClick={() => this.editTeacher(teacher.id)}
                                selected={teacher.id === selectedId}
                                key={teacher.id}
                            />
                        ))}
                    </div>
                    <div className={styles.selected}>
                        {selectedObject}
                    </div>
                </div>
            </div>
        );
    }
}

export default EditTeacher;
