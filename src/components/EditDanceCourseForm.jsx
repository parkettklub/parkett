import React from 'react';
import PropTypes from 'prop-types';
import FormSimpleInput from './FormSimpleInput';
import FormSelectInput from './FormSelectInput';
import FormDance from './FormDance';
import FormTeacher from './FormTeacher';

class EditTeaachingForm extends React.Component {
    constructor() {
        super();
        this.state = {
            addSelected: null,
        };
    }

    addNewElement(name) {
        this.setState({ addSelected: name });
    }

    close() {
        this.setState({ addSelected: null });
    }

    render() {
        const {
            selectedForm, form, handleChange, danceid, teacherid, applicationForm,
        } = this.props;
        const {
            addSelected,
        } = this.state;
        const teachers = [{
            id: 1,
            name: 'Me and You',
        }, {
            id: 2,
            name: 'You and Me',
        }];
        const dances = [{
            id: 1,
            name: 'kizomba',
        }, {
            id: 2,
            name: 'salsa',
        }];
        return (
            <div>
                <FormSelectInput
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={danceid}
                    name="danceid"
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
                />
                <FormSelectInput
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={teacherid}
                    name="teacherid"
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

EditTeaachingForm.propTypes = {
    selectedForm: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    applicationForm: PropTypes.string.isRequired,
    danceid: PropTypes.number.isRequired,
    teacherid: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default EditTeaachingForm;
