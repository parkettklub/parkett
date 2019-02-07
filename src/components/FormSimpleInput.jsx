import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function FormSimpleInput({
    selectedForm, form, label, name, handleChange, value, example,
}) {
    return (
        <div className={styles.formgroup} hidden={selectedForm !== form}>
            <label htmlFor={name}>
                <strong>{label}</strong>
                <input
                    id={name}
                    name={name}
                    type="text"
                    className={styles.input}
                    value={value}
                    onChange={handleChange}
                />
                <div className={styles.helper}>{example}</div>
            </label>
        </div>
    );
}

FormSimpleInput.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    example: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

FormSimpleInput.defaultProps = {
    selectedForm: '',
    form: '',
    value: '',
    label: '',
    name: '',
    example: '',
};

export default FormSimpleInput;
