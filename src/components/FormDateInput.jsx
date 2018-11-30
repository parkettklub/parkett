import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function FormDateInput({
    selectedForm, form, label, name, handleChange, value, example,
}) {
    return (
        <div className={styles.formgroup} hidden={selectedForm !== form}>
            <label htmlFor={label}>
                <strong>{label} </strong>
                <input
                    id={name}
                    name={name}
                    type="datetime-local"
                    className={styles.input}
                    value={value}
                    onChange={handleChange}
                />
                <div className={styles.helper}>{example}</div>
            </label>
        </div>
    );
}

FormDateInput.propTypes = {
    selectedForm: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    example: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default FormDateInput;
