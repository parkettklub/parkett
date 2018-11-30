import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import FormSimpleInput from './FormSimpleInput';

class FormBand extends React.Component {
    constructor() {
        super();
        this.state = {
            id: -1,
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

    render() {
        const { selected, title } = this.props;
        const { id, name, url } = this.state;
        const isNew = id === -1;
        return (
            <div className={styles.main}>
                <div className={styles.formgroup} hidden={selected !== title}>
                    {isNew ? 'Új Banda adatai:' : 'Banda adatai:'}
                    <FormSimpleInput
                        selected={selected}
                        title={title}
                        handleChange={this.handleChange}
                        value={name}
                        name="name"
                        example="Pedrofon"
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
                        <input
                            type="submit"
                            className={styles.submit}
                            value={isNew ? 'Zenekar hozzáadása' : 'Zenekar módosítása'}
                        />
                    </div>
                </div>

            </div>

        );
    }
}

FormBand.propTypes = {
    selectedObject: PropTypes.instanceOf(Object).isRequired,
    selected: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default FormBand;
