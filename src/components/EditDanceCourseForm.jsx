import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from './FetchFunctions';
import FormSimpleInput from './FormSimpleInput';
import FormSelectInput from './FormSelectInput';
import FormDance from './FormDance';
import FormTeacher from './FormTeacher';

class EditDanceCourseForm extends React.Component {
    constructor() {
        super();
        this.state = {
            addSelected: null,
            teachers: [],
            dances: [],
            parties: [],
        };
    }

    componentDidMount() {
        this.fetchDances();
        this.fetchDanceTeachers();
        this.fetchParties();
    }

    fetchDanceTeachers = () => {
        fetchAll('dance_teachers').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ teachers: myJson });
        });
    }

    fetchDances = () => {
        fetchAll('dances').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ dances: myJson });
        });
    }

    fetchParties = () => {
        fetchAll('parties').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ parties: myJson });
        });
    }

    addNewElement(name) {
        this.setState({ addSelected: name });
    }

    close() {
        this.setState({ addSelected: null });
    }

    render() {
        const {
            selectedForm, form, handleChange, dance_id, dance_teacher_id, applicationForm, party_id,
        } = this.props;
        const {
            addSelected,
        } = this.state;
        const { teachers, dances, parties } = this.state;
        return (
            <div>
                <FormSelectInput
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={dance_id}
                    name="dance_id"
                    label="Tánc"
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
                <FormSelectInput
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={dance_teacher_id}
                    name="dance_teacher_id"
                    label="Tanár"
                    options={teachers.map(teacher => (
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
                <FormSelectInput
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={party_id}
                    name="party_id"
                    label="Party"
                    options={parties.map(party => (
                        <option value={party.id} key={party.id}>
                            {party.id}
                            {' - '}
                            {party.title}
                        </option>
                    ))}
                    addNew={() => this.addNewElement('teacher')}
                    close={() => this.close()}
                />
                <FormSimpleInput
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={applicationForm}
                    name="applicationForm"
                    example="https://goo.gl/forms/EMAqXVoJDJQGNkeq1"
                    label="Jelentkező form"
                />
            </div>
        );
    }
}

EditDanceCourseForm.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    applicationForm: PropTypes.string,
    dance_id: PropTypes.number,
    dance_teacher_id: PropTypes.number,
    handleChange: PropTypes.func.isRequired,
};

EditDanceCourseForm.defaultProps = {
    selectedForm: '',
    form: '',
    applicationForm: '',
    dance_id: null,
    dance_teacher_id: null,
}

export default EditDanceCourseForm;
