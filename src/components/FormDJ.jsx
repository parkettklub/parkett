import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import FormSimpleInput from './FormSimpleInput';

class FormDJ extends React.Component {
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
        const { id, name, url } = this.state;
        this.LoadObject(selectedObject);
        const isNew = id === -1;
        return (
            <div className={styles.formgroup} hidden={selected !== title}>
                {isNew ? 'Új DJ adatai:' : 'DJ adatai:'}
                <FormSimpleInput
                    selected={selected}
                    title={title}
                    handleChange={this.handleChange}
                    value={name}
                    name="name"
                    example="DJ Eddy"
                    label="Név"
                />
                <FormSimpleInput
                    selected={selected}
                    title={title}
                    handleChange={this.handleChange}
                    value={url}
                    name="url"
                    example="www.example.com"
                    label="Weboldal"
                />
                <div className={styles.formgroup}>
                    <input type="submit" value={isNew ? 'DJ hozzáadása' : 'DJ módosítása'} className={styles.submit} />
                </div>
            </div>
        );
    }
}

FormDJ.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default FormDJ;
