import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from '../../utils/FetchFunctions';
import InputFormSimple from './InputFormSimple';
import InputFormSelect from './InputFormSelect';
import FormDance from './FormDance';
import FormTeacher from './FormTeacher';
import FormDanceType from './FormDanceType';

class SubFormWorkshop extends React.Component {
    constructor() {
        super();
        this.state = {
            addSelected: null,
            teachers: [],
            dances: [],
            parties: [],
            allDanceTypes: [],
        };
    }

    componentDidMount() {
        this.fetchDanceTypes();
        this.fetchDances();
        this.fetchDanceTeachers();
        this.fetchParties();
    }

    fetchDanceTypes = () => {
        fetchAll('dance_types').then((myJson) => {
            this.setState({ allDanceTypes: myJson });
        });
    }

    fetchDanceTeachers = () => {
        fetchAll('dance_teachers').then((myJson) => {
            this.setState({ teachers: myJson });
        });
    }

    fetchDances = () => {
        fetchAll('dances').then((myJson) => {
            this.setState({ dances: myJson });
        });
    }

    fetchParties = () => {
        fetchAll('parties').then((myJson) => {
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
            selectedForm, form, handleChange, dance_id,
            dance_teacher_id, application_form, party_id, dance_type_id,
        } = this.props;
        const {
            addSelected,
        } = this.state;
        const {
            teachers, dances, parties, allDanceTypes,
        } = this.state;
        return (
            <div>
                <InputFormSelect
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={dance_type_id}
                    name="dance_type_id"
                    label="Tánctípus"
                    addNew={() => this.addNewElement('dance_type')}
                    close={this.close}
                    options={
                        allDanceTypes.map(danceType => (
                            <option value={danceType.id} key={danceType.id}>
                                {danceType.id}
                                {' – '}
                                {danceType.name}
                            </option>
                        ))}
                />
                <FormDanceType
                    selected={addSelected}
                    title="dance_type"
                    selectedObject={{
                        id: -1,
                    }}
                    fetchFunction={this.fetchDanceTypes}
                />
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
                    fetchFunction={this.fetchDances}
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
                    fetchFunction={this.fetchDanceTeachers}
                />
                <InputFormSelect
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={party_id}
                    name="party_id"
                    label="Kapcsolódó Party"
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
    dance_type_id: PropTypes.number,
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
    dance_type_id: null,
};

export default SubFormWorkshop;
