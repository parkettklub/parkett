import React from 'react';
import PropTypes from 'prop-types';
import FormDJ from './FormDJ';
import FormBand from './FormBand';
import FormDanceCourse from './FormDanceCourse';
import FormSelectInput from './FormSelectInput';
import FormMultipleSelectInput from './FormMultipleSelectInput';

class EditMusicDanceCourse extends React.Component {
    constructor() {
        super();
        this.state = {
            addSelected: null,
        };
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
        const djs = [{
            id: 1,
            name: 'DJ Eddy',
            url: 'google.com',
        }, {
            id: 2,
            name: 'DJ Zoli',
            url: 'google.com',
        }, {
            id: 3,
            name: 'DJ Nobody',
            url: 'google.com',
        }, {
            id: 4,
            name: 'DJ Music',
            url: 'google.com',
        }, {
            id: 5,
            name: 'DJ Somebody',
            url: 'google.com',
        }];
        const bands = [{
            id: 1,
            name: 'Pedrofon',
            url: 'google.com',
        }, {
            id: 2,
            name: 'Cuba Ritmo Trio',
            url: 'google.com',
        }];
        const danceCourses = [{
            id: 1,
            teacher: 'Plakát János és Marok Béla',
            danceid: 'salsa',
            level: 'kezdő',
            length: '45 perces',
        }, {
            id: 2,
            teacher: 'Helpless Jonas',
            danceid: 'rocky',
            level: 'kezdő',
            length: '45 perces',
        }];
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
                        <option value={danceCourse.id} key={danceCourse.id}>
                            {danceCourse.id}
                            {' - '}
                            {danceCourse.teacher}
                            {' '}
                            {danceCourse.dance}
                            {' '}
                            {danceCourse.level}
                            {' '}
                            {danceCourse.length}
                        </option>))}
                />
                <FormDanceCourse
                    selected={addSelected}
                    title="danceCourse"
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
