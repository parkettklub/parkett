import React from 'react';
import PropTypes from 'prop-types';
import InputFormSimple from './InputFormSimple';
import InputFormTextarea from './InputFormTextarea';

function SubFormDetails(props) {
    const {
        selectedForm, form, handleChange, content, program, facebook_event,
    } = props;
    return (
        <div>
            <InputFormTextarea
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={content}
                name="content"
                example="Még érezni az előző est hangulatát ..."
                label="Leírás"
            />
            <InputFormTextarea
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={program}
                name="program"
                example="19:30 kapunyitás ..."
                label="Program"
            />
            <InputFormSimple
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={facebook_event}
                name="facebook_event"
                example="https://www.facebook.com/events/1598719006921910"
                label="Facebook esemény"
            />
        </div>
    );
}

SubFormDetails.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    content: PropTypes.string,
    program: PropTypes.string,
    facebook_event: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

SubFormDetails.defaultProps = {
    selectedForm: '',
    form: '',
    content: '',
    program: '',
    facebook_event: '',
};

export default SubFormDetails;
