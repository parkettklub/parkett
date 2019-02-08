import React from 'react';
import SelectableElement from './SelectableElement';
import FormDanceCourse from './FormDanceCourse';
import { fetchAll } from './FetchFunctions';
import styles from './Editor.module.css';
import Plus from './plus.svg';


class EditDanceCourse extends React.Component {
    constructor() {
        super();
        this.state = {
            dance_courses: [],
            dance_teachers: [],
            selectedId: 0,
            selectedObject: null,
        };
    }

    componentDidMount() {
        this.createDanceCourse();
        this.fetchDanceTeachers();
        this.fetchDanceCourses();
    }

    getDanceCourseName = (id) => {
        const { dance_teachers } = this.state;
        const dance_teacher = dance_teachers.find(teacher => teacher.id === id);
        return dance_teacher ? dance_teacher.name : 'undifined';
    }

    createDanceCourse = () => {
        this.setState({
            selectedId: null,
            selectedObject: (
                <FormDanceCourse
                    selectedObject={{ id: -1 }}
                    fetchFunction={this.fetchDanceCourses}
                />),
        });
    }

    fetchDanceCourses = () => {
        fetchAll('dance_courses').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ dance_courses: myJson });
        });
    }

    fetchDanceTeachers = () => {
        fetchAll('dance_teachers').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ dance_teachers: myJson });
        });
    }

    editDanceCourse = (id) => {
        const { dance_courses } = this.state;
        const selected = dance_courses.find(course => course.id === id);
        this.setState({
            selectedId: selected.id,
            selectedObject: (
                <FormDanceCourse
                    selectedObject={selected}
                    fetchFunction={this.fetchDanceCourses}
                />),
        });
    }

    render() {
        const { dance_courses, selectedObject, selectedId } = this.state;
        return (
            <div className={styles.center}>
                <div className={styles.main}>
                    <div className={styles.list}>
                        <div
                            className={styles.selectable}
                            onClick={this.createDanceCourse}
                            onKeyDown={() => { }}
                            role="button"
                            tabIndex={0}
                        >
                            <img alt="" src={Plus} className={styles.addElement} />
                            {'Új Tanítás'}
                        </div>
                        {dance_courses.map(course => (
                            <SelectableElement
                                title={`${course.id} - ${this.getDanceCourseName(course.dance_teacher_id)}`}
                                onClick={() => this.editDanceCourse(course.id)}
                                selected={course.id === selectedId}
                                start_date={course.updated_at}
                                key={course.id}
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

export default EditDanceCourse;
