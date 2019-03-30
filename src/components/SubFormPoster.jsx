import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import InputPicture from './InputPicture';

const SubFormPoster = ({
    selectedForm, form, photo, handleChange,
}) => (
        <div>
            <div className={styles.formgroup} hidden={selectedForm !== form}>
                <InputPicture name="photo" inputObj={{ photo }} selectedForm={selectedForm} form={form} handleChange={handleChange} />
            </div>
        </div>
    );

SubFormPoster.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    photo: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

SubFormPoster.defaultProps = {
    selectedForm: '',
    form: '',
    photo: '',
};

export default SubFormPoster;
