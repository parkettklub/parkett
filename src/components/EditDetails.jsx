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
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    content: PropTypes.string,
    program: PropTypes.string,
    facebookEvent: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

EditDetails.defaultProps = {
    selectedForm: '',
    form: '',
    content: '',
    program: '',
    facebookEvent: '',
};

export default EditDetails;
