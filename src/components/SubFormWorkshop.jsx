import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from './FetchFunctions';
import InputFormSimple from './InputFormSimple';
import InputFormSelect from './InputFormSelect';
import FormDance from './FormDance';
import FormTeacher from './FormTeacher';

class SubFormWorkshop extends React.Component {
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

    async fetchDanceTeachers() {
        const myJson = await fetchAll('dance_teachers');
        this.setState({ teachers: myJson });
    }

    async fetchDances() {
        const myJson = await fetchAll('dances');
        this.setState({ dances: myJson });
    }

    async fetchParties() {
        const myJson = await fetchAll('parties');
        this.setState({ parties: myJson });
    }

    addNewElement(name) {
        this.setState({ addSelected: name });
    }

    close() {
        this.setState({ addSelected: null });
    }

    render() {
        const {
            selectedForm, form, handleChange, dance_id,
            dance_teacher_id, application_form, party_id,
        } = this.props;
        const {
            addSelected,
        } = this.state;
        const { teachers, dances, parties } = this.state;
        return (
            <div>
                <InputFormSelect
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
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
                    async fetchFunction={this.fetchDances}
                />
                <InputFormSelect
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={dance_teacher_id}
                    name="dance_teacher_id"
                    label="Tanár"
                    options={teachers.map(teacher => (
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
                    async fetchFunction={this.fetchDanceTeachers}
                />
                <InputFormSelect
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={party_id}
                    name="party_id"
                    label="Party"
                    options={parties.map(party => (
                        <option value={party.id} key={party.id}>
                            {party.id}
                            {' – '}
                            {party.title}
                        </option>
                    ))}
                    addNew={() => this.addNewElement('teacher')}
                    close={() => this.close()}
                />
                <InputFormSimple
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={application_form}
                    name="application_form"
                    example="https://goo.gl/forms/EMAqXVoJDJQGNkeq1"
                    label="Jelentkező form"
                />
            </div>
        );
    }
}

SubFormWorkshop.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    application_form: PropTypes.string,
    dance_id: PropTypes.number,
    dance_teacher_id: PropTypes.number,
    party_id: PropTypes.number,
    handleChange: PropTypes.func.isRequired,
};

SubFormWorkshop.defaultProps = {
    selectedForm: '',
    form: '',
    application_form: '',
    dance_id: null,
    dance_teacher_id: null,
    party_id: null,
};

export default SubFormWorkshop;
