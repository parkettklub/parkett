import React from 'react';
import PropTypes from 'prop-types';
import FormSimpleInput from './FormSimpleInput';
import FormTextareaInput from './FormTextareaInput';

function EditDetails(props) {
    const {
        selectedForm, form, handleChange, content, program, facebookEvent,
    } = props;
    return (
        <div>
            <FormTextareaInput
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={content}
                name="content"
                example="Még érezni az előző est hangulatát ..."
                label="Leírás:"
            />
            <FormTextareaInput
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={program}
                name="program"
                example="19:30 kapunyitás ..."
                label="Program"
            />
            <FormSimpleInput
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={facebookEvent}
                name="facebookEvent"
                example="https://www.facebook.com/events/1598719006921910"
                label="Facebook esemény"
            />
        </div>
    );
}

EditDetails.propTypes = {
    selectedForm: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
    facebookEvent: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default EditDetails;
