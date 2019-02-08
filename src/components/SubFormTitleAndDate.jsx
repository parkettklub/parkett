import React from 'react';
import PropTypes from 'prop-types';
import InputFormSimple from './InputFormSimple';
import InputFormDate from './InputFormDate';

function SubFormTitleAndDate(props) {
    const {
        selectedForm, form, handleChange, title, startDate, endDate,
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
                value={startDate}
                name="startDate"
                example="2018. 01. 12 18:00"
                label="Kezdés"
            />
            <InputFormDate
                selectedForm={selectedForm}
                handleChange={handleChange}
                form={form}
                value={endDate}
                name="endDate"
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
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

SubFormTitleAndDate.defaultProps = {
    selectedForm: '',
    form: '',
    title: '',
};

export default SubFormTitleAndDate;
