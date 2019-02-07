import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll, fetchPost, fetchPut } from './FetchFunctions';
import styles from './Form.module.css';
import FormSimpleInput from './FormSimpleInput';
import FormSelectInput from './FormSelectInput';
import FormTextareaInput from './FormTextareaInput';
import FormDanceType from './FormDanceType';

class FormDance extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
            addSelected: null,
            dance_type_id: 1,
            dance_types: [],
            name: '',
            content: '',
        };
    }

    componentDidMount() {
        this.fetchDanceTypes();
    }

    componentWillReceiveProps({ selectedObject }) {
        this.setState({
            dance_type_id: selectedObject.dance_type.id,
            ...selectedObject,
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
            this.addDance();
        } else {
            this.updateDance();
        }
    }

    addDance = () => {
        const { name, content, dance_type_id } = this.state;
        const dance = {
            name,
            content,
            dance_type_id: parseInt(dance_type_id),
        };
        fetchPost('dances', dance).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    updateDance = () => {
        const {
            id, name, content, dance_type_id,
        } = this.state;
        const dance = {
            id,
            name,
            content,
            dance_type_id: parseInt(dance_type_id),
        };
        fetchPut('dances', dance, id).then(() => {
            const { fetchFunction } = this.props;
            fetchFunction();
        });
    }

    fetchDanceTypes = () => {
        fetchAll('dance_types').then(
            response => response.json(),
        ).then((myJson) => {
            this.setState({ dance_types: myJson });
        });
    }

    render() {
        const { selected, title } = this.props;
        const { id, name, content, dance_type_id, dance_types, addSelected } = this.state;
        const isNew = id === -1;
        return (
            <div className={styles.main}>
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Tánc adatai:' : 'Tánc adatai:'}
                    <FormSimpleInput
                        selectedForm={selected}
                        form={title}
                        handleChange={this.handleChange}
                        value={name}
                        name="name"
                        example="salsa"
                        label="Név"
                    />
                    <FormTextareaInput
                        selectedForm={selected}
                        form={title}
                        handleChange={this.handleChange}
                        value={content}
                        name="content"
                        example="Ez a tánc a legeslegjobb"
                        label="Leírás"
                    />
                    <FormSelectInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={dance_type_id}
                        name="dance_type_id"
                        label="DanceType"
                        options={dance_types.map(type => (
                            <option value={type.id} key={type.id}>
                                {type.id}
                                {' - '}
                                {type.name}
                                {' - '}
                                {type.color}
                            </option>
                        ))}
                        addNew={() => this.addNewElement('dance_type_id')}
                        close={() => this.close()}
                    />
                    <FormDanceType
                        selected={addSelected}
                        title="dance_type_id"
                        selectedObject={{
                            id: -1,
                        }}
                        fetchFunction={this.fetchDanceTypes}
                    />
                    <div className={styles.formgroup}>
                        <button
                            onClick={this.uploadChanges}
                            type="submit"
                            className={styles.submit}
                        >
                            {isNew ? 'Tánc hozzáadása' : 'Tánc módosítása'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

FormDance.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string,
    title: PropTypes.string,
    fetchFunction: PropTypes.func.isRequired,
};

FormDance.defaultProps = {
    selected: '',
    title: '',
};

export default FormDance;
