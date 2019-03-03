import React from 'react';
import PropTypes from 'prop-types';
import InputFormSimple from './InputFormSimple';
import InputFormDate from './InputFormDate';

function SubFormTitleAndDate(props) {
    const {
        selectedForm, form, handleChange, title, start_date, end_date,
    } = props;
    return (
        <div>
            <InputFormSimple
                selectedForm={selectedForm}
                handleChange={handleChange}
                form={form}
                value={title}
                name="title"
                example="Élőzenés Salsa Party: Cuba"
                label="Cím"
            />
            <InputFormDate
                selectedForm={selectedForm}
                handleChange={handleChange}
                form={form}
                value={start_date}
                name="start_date"
                example="2018. 01. 12 18:00"
                label="Kezdés"
            />
            <InputFormDate
                selectedForm={selectedForm}
                handleChange={handleChange}
                form={form}
                value={end_date}
                name="end_date"
                example="2018. 01. 13 01:00"
                label="Vége"
            />
        </div>
    );
}

SubFormTitleAndDate.propTypes = {
    selectedForm: PropTypes.string,
    title: PropTypes.string,
    form: PropTypes.string,
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

SubFormTitleAndDate.defaultProps = {
    selectedForm: '',
    form: '',
    title: '',
};

export default SubFormTitleAndDate;
