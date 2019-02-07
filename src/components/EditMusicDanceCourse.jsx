import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from './FetchFunctions';
import FormDJ from './FormDJ';
import FormBand from './FormBand';
import FormDanceCourse from './FormDanceCourse';
import EditDanceCourse from './EditDanceCourse';
import FormSelectInput from './FormSelectInput';
import FormMultipleSelectInput from './FormMultipleSelectInput';

class EditMusicDanceCourse extends React.Component {
    constructor() {
        super();
        this.state = {
            addSelected: null,
            danceCourses: [],
            bands: [],
            djs: [],
            dance_teachers: [],
        };
    }

    componentDidMount() {
        this.fetchBands();
        this.fetchDjs();
        this.fetchDanceTeachers();
        this.fetchDanceCourses();
    }

    fetchDanceCourses = () => {
        fetchAll('dance_courses').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ danceCourses: myJson });
        });
    }

    fetchBands = () => {
        fetchAll('bands').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ bands: myJson });
        });
    }

    fetchDjs = () => {
        fetchAll('djs').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ djs: myJson });
        });
    }

    fetchDanceTeachers = () => {
        fetchAll('dance_teachers').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ dance_teachers: myJson });
        });
    }

    getTeacherName = (id) => {
        const { dance_teachers } = this.state;
        const dance_teacher = dance_teachers.find(teacher => teacher.id === id);
        return dance_teacher ? dance_teacher.name : 'undifined';
    }

    addNewElement(name) {
        this.setState({ addSelected: name });
    }

    close = () => {
        this.setState({ addSelected: null });
    }

    render() {
        const {
            selectedForm, form, handleChange, danceCourseid, handleMultiple, bandids, djids,
        } = this.props;
        const {
            addSelected,
        } = this.state;
        const { danceCourses, djs, bands } = this.state;
        return (
            <div>
                <FormSelectInput
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={danceCourseid}
                    name="danceCourseid"
                    label="Tanítás"
                    addNew={() => this.addNewElement('danceCourse')}
                    close={this.close}
                    options={danceCourses.map(danceCourse => (
                        <option
                            value={danceCourse.id}
                            key={danceCourse.id}
                        >
                            {`${danceCourse.id} ${this.getTeacherName(danceCourse.dance_teacher_id)}`}
                        </option>
                    ))}
                />
                <FormDanceCourse
                    selected={addSelected}
                    title="danceCourse"
                    fetchFunction={this.fetchDanceCourses}
                    selectedObject={{
                        id: -1,
                    }}
                />
                <FormMultipleSelectInput
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleMultiple}
                    value={bandids}
                    name="bandids"
                    label="Zenekar"
                    addNew={() => this.addNewElement('band')}
                    close={this.close}
                    options={
                        bands.map(band => (
                            <option value={band.id} key={band.id}>
                                {band.id}
                                {' - '}
                                {band.name}
                            </option>))}
                />
                <FormBand
                    selected={addSelected}
                    title="band"
                    selectedObject={{
                        id: -1,
                    }}
                />
                <FormMultipleSelectInput
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleMultiple}
                    value={djids}
                    name="djids"
                    label="DJ"
                    addNew={() => this.addNewElement('dj')}
                    close={this.close}
                    options={
                        djs.map(dj => (
                            <option value={dj.id} key={dj.id}>
                                {dj.id}
                                {' - '}
                                {dj.name}
                            </option>))}
                />
                <FormDJ
                    selected={addSelected}
                    title="dj"
                    selectedObject={{
                        id: -1,
                    }}
                />
            </div>
        );
    }
}

EditMusicDanceCourse.propTypes = {
    selectedForm: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    danceCourseid: PropTypes.number.isRequired,
    djids: PropTypes.instanceOf(Array).isRequired,
    bandids: PropTypes.instanceOf(Array).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleMultiple: PropTypes.func.isRequired,
};

export default EditMusicDanceCourse;
