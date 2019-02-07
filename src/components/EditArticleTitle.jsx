import React from 'react';
import PropTypes from 'prop-types';
import FormSimpleInput from './FormSimpleInput';
import FormDateInput from './FormDateInput';
import FormTextareaInput from './FormTextareaInput';

function EditTitleAndDate(props) {
    const {
        selectedForm, form, handleChange, title, publishedAt, content,
    } = props;
    return (
        <div>
            <FormSimpleInput
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={title}
                name="title"
                example="Élőzenés Salsa Party: Cuba"
                label="Cím"
            />
            <FormDateInput
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={publishedAt}
                name="publishedAt"
                example="2018. 01. 12 18:00"
                label="Időpont"
            />
            <FormTextareaInput
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={content}
                name="content"
                example="Még érezni az előző est hangulatát ..."
                label="Leírás:"
            />
        </div>
    );
}

EditTitleAndDate.propTypes = {
    selectedForm: PropTypes.string,
    title: PropTypes.string,
    form: PropTypes.string,
    publishedAt: PropTypes.string.isRequired,
    content: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

EditTitleAndDate.defaultProps = {
    selectedForm: '',
    title: '',
    form: '',
    content: '',
}

export default EditTitleAndDate;
