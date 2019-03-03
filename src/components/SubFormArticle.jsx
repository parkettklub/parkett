import React from 'react';
import PropTypes from 'prop-types';
import InputFormSimple from './InputFormSimple';
import InputFormDate from './InputFormDate';
import InputFormTextarea from './InputFormTextarea';

function SubFormArticle(props) {
    const {
        selectedForm, form, handleChange, title, published_at, content,
    } = props;
    return (
        <div>
            <InputFormSimple
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={title}
                name="title"
                example="Élőzenés Salsa Party: Cuba"
                label="Cím"
            />
            <InputFormDate
                selectedForm={selectedForm}
                form={form}
                handleChange={handleChange}
                value={published_at}
                name="published_at"
                example="2018. 01. 12 18:00"
                label="Időpont"
            />
            <InputFormTextarea
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

SubFormArticle.propTypes = {
    selectedForm: PropTypes.string,
    title: PropTypes.string,
    form: PropTypes.string,
    published_at: PropTypes.string.isRequired,
    content: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

SubFormArticle.defaultProps = {
    selectedForm: '',
    title: '',
    form: '',
    content: '',
};

export default SubFormArticle;
