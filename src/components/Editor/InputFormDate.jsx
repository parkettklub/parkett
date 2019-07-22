import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import { dateToInput } from '../../utils/DateFunctions';
import 'react-datepicker/dist/react-datepicker.css';


const today = dateToInput(new Date());
function InputFormDate({
    selectedForm, form, label, name, handleChange, value, example,
}) {
    if (!value) {
        value = today;
        handleChange({ target: { name, value } });
    }
    return (
        <div className={styles.formgroup} hidden={selectedForm !== form}>
            <div className={styles.label}><strong>{label}</strong></div>
            <div>
                <DatePicker
                    className={styles.input}
                    selected={new Date(value)}
                    onChange={date => handleChange({ target: { name, value: dateToInput(new Date(date)) } })}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="yyyy-MM-dd HH:mm"
                    timeCaption="time"
                />
            </div>
            <div className={styles.helper}>{example}</div>
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
    value: today,
    example: '',
};

export default InputFormDate;
