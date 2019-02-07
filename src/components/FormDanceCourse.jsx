import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll, fetchPost, fetchPut } from './FetchFunctions';
import styles from './Form.module.css';
import FormSimpleInput from './FormSimpleInput';
import FormSelectInput from './FormSelectInput';
import FormDance from './FormDance';
import FormTeacher from './FormTeacher';

class FormDanceCourse extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
            addSelected: null,
            dance_id: 1,
            dances: [],
            dance_teacher_id: 1,
            dance_teachers: [],
            level: '',
            length: '',
        };
    }

    componentDidMount() {
        this.fetchDances();
        this.fetchDanceTeachers();
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
            ...selectedObject,
        });
    }

    fetchDances = () => {
        fetchAll('dances').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ dances: myJson });
        });
    }

    fetchDanceTeachers = () => {
        fetchAll('dance_teachers').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ dance_teachers: myJson });
        });
    }

    addNewElement = (name) => {
        this.setState({ addSelected: name });
    }

    close = () => {
        this.setState({ addSelected: null });
    }

    handleChange = (event) => {
        const { name } = event.target;
        this.setState({ [name]: event.target.value });
    }

    uploadChanges = () => {
        const { id } = this.state;
        if (id === -1) {
            this.addDanceCourse();
        } else {
            this.updateDanceCourse();
        }
    }

    updateDanceCourse = () => {
        const {
            id, dance_id, dance_teacher_id, level, length,
        } = this.state;
        const danceCourse = {
            id,
            level,
            length,
            dance_id: parseInt(dance_id),
            dance_teacher_id: parseInt(dance_teacher_id),
        };
        fetchPut('dance_courses', danceCourse, id).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    addDanceCourse() {
        const {
            dance_id, dance_teacher_id, level, length,
        } = this.state;
        const danceCourse = {
            level,
            length,
            dance_id: parseInt(dance_id),
            dance_teacher_id: parseInt(dance_teacher_id),
        };
        fetchPost('dance_courses', danceCourse).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    render() {
        const { selected, title } = this.props;
        const {
            id, dance_id, level, length, dance_teacher_id, addSelected, dances, dance_teachers,
        } = this.state;
        const isNew = id === -1;
        return (
            <div className={styles.main}>
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Tanítás adatai:' : 'Tanítás adatai:'}
                    <FormSelectInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={dance_id}
                        name="dance_id"
                        label="Dance"
                        options={dances.map(dance => (
                            <option value={dance.id} key={dance.id}>
                                {dance.id}
                                {' - '}
                                {dance.name}
                            </option>
                        ))}
                        addNew={() => this.addNewElement('dance')}
                        close={() => this.close()}
                    />
                    <FormDance
                        selected={addSelected}
                        title="dance"
                        selectedObject={{
                            id: -1,
                        }}
                        fetchFunction={this.fetchDances}
                    />
                    <FormSimpleInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={level}
                        name="level"
                        example="kezdő"
                        label="Level"
                    />
                    <FormSimpleInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={length}
                        name="length"
                        example="1 óra"
                        label="Length"
                    />
                    <FormSelectInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={dance_teacher_id}
                        name="dance_teacher_id"
                        label="Teacher"
                        options={dance_teachers.map(teacher => (
                            <option value={teacher.id} key={teacher.id}>
                                {teacher.id}
                                {' - '}
                                {teacher.name}
                            </option>
                        ))}
                        addNew={() => this.addNewElement('teacher')}
                        close={() => this.close()}
                    />
                    <FormTeacher
                        selected={addSelected}
                        title="teacher"
                        selectedObject={{
                            id: -1,
                        }}
                        fetchFunction={this.fetchDanceTeachers}
                    />
                    <div className={styles.formgroup}>
                        <button
                            onClick={this.uploadChanges}
                            type="submit"
                            className={styles.submit}
                        >
                            {isNew ? 'Tanítás hozzáadása' : 'Tanítás módosítása'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

FormDanceCourse.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormDanceCourse.defaultProps = {
    selected: '',
    title: '',
};


export default FormDanceCourse;
