import React from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function InputColor({
    selectedForm, form, label, name, handleChange, value, example,
}) {
    return (
        <div className={styles.formgroup} hidden={selectedForm !== form}>
            <div>
                <strong>{label}</strong>
                <SketchPicker
                    id={name}
                    color={value ? value : '#505050'}
                    onChangeComplete={color => handleChange({ target: { name, value: color ? color.hex : null } })}
                />
                <div className={styles.helper}>{example}</div>
            </div>
        </div>
    );
}

InputColor.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    example: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

InputColor.defaultProps = {
    selectedForm: '',
    form: '',
    value: '',
    label: '',
    name: '',
    example: '',
};

export default InputColor;
