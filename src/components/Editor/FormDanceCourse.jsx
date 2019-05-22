import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll, fetchPost, fetchPut } from '../../utils/FetchFunctions';
import styles from './Form.module.css';
import InputFormSimple from './InputFormSimple';
import InputFormSelect from './InputFormSelect';
import FormDance from './FormDance';
import FormTeacher from './FormTeacher';
import DeleteButton from './DeleteButton';

const initialState = {
    dance_id: undefined,
    level: undefined,
    length: undefined,
    dance_teacher_id: undefined,
};

class FormDanceCourse extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
            addSelected: null,
            dances: [],
            dance_teachers: [],
            level: '',
            length: '',
        };
    }

    componentDidMount() {
        const { selectedObject } = this.props;
        this.setState({
            ...initialState,
            ...selectedObject,
        });
        this.fetchDances();
        this.fetchDanceTeachers();
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
            ...initialState,
            ...selectedObject,
        });
    }

    fetchDances = () => {
        fetchAll('dances').then((myJson) => {
            this.setState({ dances: myJson });
        });
    }

    fetchDanceTeachers = () => {
        fetchAll('dance_teachers').then((myJson) => {
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
        if (id < 0) {
            this.addDanceCourse();
        } else {
            this.updateDanceCourse();
        }
    }

    updateDanceCourse = () => {
        const {
            dance_id, dance_teacher_id,
        } = this.state;
        const danceCourse = {
            ...this.state,
            dance_id: parseInt(dance_id, 10),
            dance_teacher_id: parseInt(dance_teacher_id, 10),
        };
        fetchPut('dance_courses', danceCourse).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    addDanceCourse() {
        const {
            dance_id, dance_teacher_id,
        } = this.state;
        const danceCourse = {
            ...this.state,
            dance_id: parseInt(dance_id, 10),
            dance_teacher_id: parseInt(dance_teacher_id, 10),
        };
        fetchPost('dance_courses', danceCourse).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    render() {
        const { selected, title, fetchFunction } = this.props;
        const {
            id, dance_id, level, length, dance_teacher_id, addSelected, dances, dance_teachers,
        } = this.state;
        const isNew = id < 0;
        return (
            <div className={styles.main}>
                <DeleteButton id={id} type="dance_courses" fetchFunction={fetchFunction} />
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Tanítás adatai:' : 'Tanítás adatai:'}
                    <InputFormSelect
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={dance_teacher_id}
                        name="dance_teacher_id"
                        label="Tanár"
                        options={dance_teachers.map(teacher => (
                            <option value={teacher.id} key={teacher.id}>
                                {teacher.id}
                                {' – '}
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
                    <InputFormSelect
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={dance_id}
                        name="dance_id"
                        label="Tánc"
                        options={dances.map(dance => (
                            <option value={dance.id} key={dance.id}>
                                {dance.id}
                                {' – '}
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
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={level}
                        name="level"
                        example="kezdő"
                        label="Szint"
                    />
                    <InputFormSimple
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={length}
                        name="length"
                        example="1 óra"
                        label="Hossz"
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
