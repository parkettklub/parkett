import React from 'react';
import PropTypes from 'prop-types';
import FormSimpleInput from './FormSimpleInput';
import FormDateInput from './FormDateInput';

function EditTitleAndDate(props) {
    const {
        selectedForm, form, handleChange, title, startDate, endDate,
    } = props;
    return (
        <div>
            <FormSimpleInput
                selectedForm={selectedForm}
                handleChange={handleChange}
                form={form}
                value={title}
                name="title"
                example="Élőzenés Salsa Party: Cuba"
                label="Cím"
            />
            <FormDateInput
                selectedForm={selectedForm}
                handleChange={handleChange}
                form={form}
                value={startDate}
                name="startDate"
                example="2018. 01. 12 18:00"
                label="Kezdés"
            />
            <FormDateInput
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

EditTitleAndDate.propTypes = {
    selectedForm: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default EditTitleAndDate;
