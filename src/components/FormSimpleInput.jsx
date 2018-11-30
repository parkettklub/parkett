import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function FormSimpleInput({
    selectedForm, form, label, name, handleChange, value, example,
}) {
    return (
        <div className={styles.formgroup} hidden={selectedForm !== form}>
            <label htmlFor={name}>
                <b>{label}</b>
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
    selectedForm: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default FormSimpleInput;
