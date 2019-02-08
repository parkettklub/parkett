import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function InputFormDate({
    selectedForm, form, label, name, handleChange, value, example,
}) {
    return (
        <div className={styles.formgroup} hidden={selectedForm !== form}>
            <label htmlFor={label}>
                <strong>{label}</strong>
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

InputFormDate.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    example: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

InputFormDate.defaultProps = {
    selectedForm: '',
    form: '',
    label: '',
    name: '',
    value: '',
    example: '',
};

export default InputFormDate;
