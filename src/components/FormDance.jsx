import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import FormSimpleInput from './FormSimpleInput';
import FormTextareaInput from './FormTextareaInput';

class FormDance extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name } = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({});
    }

    LoadObject({ id, ...props }) {
        if (id !== this.state.id) {
            this.setState({
                id,
                ...props,
            });
        }
    }

    render() {
        const { selectedObject, selected, title } = this.props;
        const { id, name, content } = this.state;
        this.LoadObject(selectedObject);
        const isNew = id === -1;
        return (
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
                <div className={styles.formgroup}>
                    <input
                        type="submit"
                        className={styles.submit}
                        value={isNew ? 'Tánc hozzáadása' : 'Tánc módosítása'}
                    />
                </div>
            </div>
        );
    }
}

FormDance.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default FormDance;
