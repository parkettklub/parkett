import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import FormSimpleInput from './FormSimpleInput';
import FormSelectInput from './FormSelectInput';
import FormDance from './FormDance';
import FormTeacher from './FormTeacher';

class FormTeaching extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1, addSelected: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
            ...selectedObject,
        });
    }

    handleChange(event) {
        const { name } = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({});
    }

    addNewElement(name) {
        this.setState({ addSelected: name });
    }

    close() {
        this.setState({ addSelected: null });
    }

    render() {
        const { selected, title } = this.props;
        const {
            id, danceid, level, length, teacherid, addSelected,
        } = this.state;
        const isNew = id === -1;
        const dances = [{
            id: 1,
            name: 'kizomba',
        }, {
            id: 2,
            name: 'salsa',
        }];

        const teachers = [{
            id: 1,
            name: 'Martin és Gelda',
        }, {
            id: 2,
            name: 'Ede és Emese és a törpe',
        }];
        return (
            <div className={styles.main}>
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Tanítás adatai:' : 'Tanítás adatai:'}
                    <FormSelectInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={danceid}
                        name="danceid"
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
                    />
                    <FormSimpleInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={level}
                        name="level"
                        example="Pedrofon"
                        label="Név"
                    />
                    <FormSimpleInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={length}
                        name="length"
                        example="www.example.com"
                        label="Url"
                    />
                    <FormSelectInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={teacherid}
                        name="teacherid"
                        label="Teacher"
                        options={teachers.map(teacher => (
                            <option value={teacher.id} key={teacher.id}>
                                {teacher.id}
                                {' - '}
                                {teacher.name}
                            </option>))}
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
                    <div className={styles.formgroup}>
                        <input type="submit" value={isNew ? 'Tanítás hozzáadása' : 'Tanítás módosítása'} className={styles.submit} />
                    </div>
                </div>
            </div>
        );
    }
}

FormTeaching.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
};

FormTeaching.defaultProps = {
    selected: '',
    title: '',
};


export default FormTeaching;
